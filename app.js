const app = document.getElementById("app");
const menu = document.getElementById("menu");
const topoMovel = document.getElementById("topo-movel");
const pano = document.getElementById("pano");

// Banco de questões (carregado do Supabase após o login) e usuário logado
let QUESTOES = [];
let usuario = null;

// Letras das alternativas da questão (A–D, A–E...), na ordem do banco
const letras = (q) => Object.keys(q.alternativas);

// Estado do simulado em andamento e escolhas da tela de configuração
let estado = null;
const config = { prova: "Mista", qtd: 10, modo: "porPergunta" };

// ---------- Utilitários de DOM ----------

// Cria um elemento: el("div", {class: "x", onclick: fn}, filho1, "texto", ...)
function el(tag, attrs = {}, ...filhos) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (k === "class") node.className = v;
    else if (v === true) node.setAttribute(k, "");
    else node.setAttribute(k, v);
  }
  for (const f of filhos.flat()) {
    if (f == null || f === false) continue;
    node.append(f instanceof Node ? f : document.createTextNode(String(f)));
  }
  return node;
}

// Troca o conteúdo de um elemento; aceita listas aninhadas e ignora valores falsos
function preencher(alvo, ...nodes) {
  alvo.replaceChildren(...nodes.flat(Infinity).filter((n) => n != null && n !== false));
}
const mostrar = (...nodes) => preencher(app, ...nodes);

// Tela atual: guardada para poder redesenhar após uma interação
let telaAtual = null;

function abrir(tela) {
  telaAtual = tela;
  document.body.classList.toggle("largo", tela === telaQuestao);
  document.body.classList.remove("menu-aberto");
  tela();
  marcarItemAtivo();
  window.scrollTo(0, 0);
}

function redesenhar() {
  if (telaAtual) telaAtual();
}

function embaralhar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatarTempo(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

const formatarData = (iso) =>
  new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });

// ---------- Login e carregamento ----------

function telaMensagem(texto) {
  mostrar(el("p", { class: "sub centro" }, texto));
}

function campo(rotulo, attrs) {
  const input = el("input", { class: "campo", ...attrs });
  return [el("label", { class: "label", for: attrs.id }, rotulo), input];
}

function telaLogin(aviso) {
  pararRelogio();
  const erro = el("p", { class: "erro", hidden: !aviso }, aviso || "");
  const [lEmail, email] = campo("E-mail", { type: "email", id: "email", autocomplete: "username", required: true });
  const [lSenha, senha] = campo("Senha", { type: "password", id: "senha", autocomplete: "current-password", required: true });
  const botao = el("button", { class: "primary grande", type: "submit" }, "Entrar");

  const falhar = (e) => {
    erro.textContent = /invalid login/i.test(e.message) ? "E-mail ou senha incorretos." : e.message;
    erro.hidden = false;
    botao.disabled = false;
  };

  const form = el("form", {
    class: "card form-login",
    onsubmit: async (e) => {
      e.preventDefault();
      botao.disabled = true;
      try {
        usuario = await auth.entrar(email.value.trim(), senha.value);
        await entrarNoApp();
      } catch (err) { falhar(err); }
    },
  },
    lEmail, email, lSenha, senha, erro, botao,
    el("button", {
      type: "button", class: "link",
      onclick: async () => {
        if (!email.value.trim()) { falhar(new Error("Informe o e-mail para receber o link de redefinição.")); return; }
        try {
          await auth.recuperarSenha(email.value.trim());
          erro.textContent = "Se o e-mail estiver cadastrado, você receberá um link para definir uma nova senha.";
          erro.hidden = false;
        } catch (err) { falhar(err); }
      },
    }, "Esqueci minha senha"));

  mostrar(
    el("h1", {}, "Entrar"),
    el("p", { class: "sub" }, "O acesso é por convite. Use o e-mail e a senha cadastrados."),
    form);
  email.focus();
}

// Primeiro acesso (convite) ou redefinição: o usuário já está autenticado pelo
// link do e-mail e precisa escolher uma senha.
function telaDefinirSenha() {
  const erro = el("p", { class: "erro", hidden: true });
  const [lSenha, senha] = campo("Nova senha", { type: "password", id: "nova", autocomplete: "new-password", minlength: 8, required: true });
  const [lConf, conf] = campo("Repita a senha", { type: "password", id: "conf", autocomplete: "new-password", required: true });
  const botao = el("button", { class: "primary grande", type: "submit" }, "Salvar senha e continuar");

  mostrar(
    el("h1", {}, "Defina sua senha"),
    el("p", { class: "sub" }, `Conta: ${usuario.email}. Escolha uma senha com pelo menos 8 caracteres.`),
    el("form", {
      class: "card form-login",
      onsubmit: async (e) => {
        e.preventDefault();
        if (senha.value !== conf.value) { erro.textContent = "As senhas não conferem."; erro.hidden = false; return; }
        botao.disabled = true;
        try {
          await auth.definirSenha(senha.value);
          await entrarNoApp();
        } catch (err) { erro.textContent = err.message; erro.hidden = false; botao.disabled = false; }
      },
    }, lSenha, senha, lConf, conf, erro, botao));
  senha.focus();
}

async function sairDaConta() {
  await auth.sair();
  usuario = null;
  QUESTOES = [];
  montarConta();
  abrir(telaLogin);
}

// ---------- Menu lateral ----------

// Ícones em SVG (traço simples, herdam a cor do texto)
const ICONES = {
  logo: "M12 2a3 3 0 0 1 3 3v1h3v3h-3v9.5a5.5 5.5 0 0 0 5-4.5h3a8.5 8.5 0 0 1-17 0h3a5.5 5.5 0 0 0 5 4.5V9H6V6h3V5a3 3 0 0 1 3-3z",
  painel: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  novo: "M12 5v14M5 12h14",
  config: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6 14.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  lua: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z",
  sol: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  recolher: "M4 5h16v14H4zM9 5v14",
  sair: "M10 17l5-5-5-5M15 12H3M12 3h7v18h-7",
  hamburguer: "M4 7h16M4 12h16M4 17h16",
};
const icone = (nome) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "ico");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", ICONES[nome]);
  svg.append(path);
  return svg;
};

const ITENS_MENU = [
  { chave: "painel", rotulo: "Painel", ico: "painel", tela: () => telaPainel },
  { chave: "novo", rotulo: "Novo simulado", ico: "novo", tela: () => telaNovo },
];

const temaAtual = () => document.documentElement.dataset.theme
  || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function alternarTema() {
  const novo = temaAtual() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = novo;
  try { localStorage.setItem("simulado.tema", novo); } catch (e) { /* sem armazenamento */ }
  montarMenu();
}

function alternarMenu() {
  const fechado = document.documentElement.classList.toggle("menu-fechado");
  try { localStorage.setItem("simulado.menu", fechado ? "fechado" : "aberto"); } catch (e) { /* ignora */ }
}

function marcarItemAtivo() {
  for (const b of menu.querySelectorAll("[data-chave]")) {
    const item = ITENS_MENU.find((i) => i.chave === b.dataset.chave);
    const ativo = item ? item.tela() === telaAtual : b.dataset.chave === "config" && telaAtual === telaConfiguracoes;
    b.classList.toggle("ativo", ativo);
    if (ativo) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  }
}

function itemMenu(chave, rotulo, ico, onclick, extra) {
  return el("button", { class: "menu-item", "data-chave": chave, title: rotulo, onclick },
    icone(ico), el("span", { class: "rotulo-item" }, rotulo), extra);
}

function montarMenu() {
  document.body.classList.toggle("com-menu", !!usuario);
  if (!usuario) { preencher(menu); preencher(topoMovel); return; }

  const iniciais = usuario.email.slice(0, 2).toUpperCase();
  const escuro = temaAtual() === "dark";

  preencher(menu,
    el("div", { class: "menu-topo" },
      el("button", { class: "marca-btn", title: "Simulado", onclick: () => abrir(telaPainel) },
        el("span", { class: "logo" }, icone("logo")), el("span", { class: "rotulo-item marca" }, "Simulado")),
      el("button", { class: "recolher", title: "Recolher ou expandir o menu", "aria-label": "Recolher menu", onclick: alternarMenu }, icone("recolher"))),
    el("nav", { class: "menu-secao" },
      el("span", { class: "menu-titulo rotulo-item" }, "Menu"),
      ITENS_MENU.map((i) => itemMenu(i.chave, i.rotulo, i.ico, () => abrir(i.tela())))),
    el("div", { class: "menu-rodape" },
      itemMenu("config", "Configurações", "config", () => abrir(telaConfiguracoes)),
      itemMenu("tema", escuro ? "Modo claro" : "Modo escuro", escuro ? "sol" : "lua", alternarTema),
      el("div", { class: "usuario" },
        el("button", { class: "usuario-btn", title: usuario.email, onclick: () => abrir(telaConfiguracoes) },
          el("span", { class: "avatar" }, iniciais),
          el("span", { class: "usuario-texto rotulo-item" },
            el("strong", {}, usuario.email.split("@")[0]),
            el("small", {}, usuario.email))),
        el("button", { class: "sair-btn rotulo-item", title: "Sair da conta", "aria-label": "Sair da conta", onclick: sairDaConta }, icone("sair")))));

  // Barra do celular: abre o menu como gaveta
  preencher(topoMovel,
    el("button", { class: "hamburguer", "aria-label": "Abrir menu", onclick: () => document.body.classList.toggle("menu-aberto") }, icone("hamburguer")),
    el("span", { class: "marca" }, "Simulado"),
    el("button", { class: "avatar", title: usuario.email, onclick: () => abrir(telaConfiguracoes) }, iniciais));
  marcarItemAtivo();
}
pano.addEventListener("click", () => document.body.classList.remove("menu-aberto"));
const montarConta = montarMenu;

// ---------- Configurações da conta ----------

function telaConfiguracoes() {
  pararRelogio();
  const erro = el("p", { class: "erro", hidden: true });
  const okMsg = el("p", { class: "salvo ok", hidden: true }, "Senha alterada com sucesso.");
  const [lAtual, atual] = campo("Senha atual", { type: "password", id: "atual", autocomplete: "current-password", required: true });
  const [lNova, nova] = campo("Nova senha", { type: "password", id: "nova", autocomplete: "new-password", minlength: 8, required: true });
  const [lConf, conf] = campo("Repita a nova senha", { type: "password", id: "conf", autocomplete: "new-password", required: true });
  const botao = el("button", { class: "primary grande", type: "submit" }, "Alterar senha");

  const mostrarErro = (m) => { erro.textContent = m; erro.hidden = false; okMsg.hidden = true; botao.disabled = false; };

  const form = el("form", {
    class: "card form-login",
    onsubmit: async (e) => {
      e.preventDefault();
      erro.hidden = true; okMsg.hidden = true;
      if (nova.value !== conf.value) { mostrarErro("As senhas novas não conferem."); return; }
      if (nova.value === atual.value) { mostrarErro("A nova senha deve ser diferente da atual."); return; }
      botao.disabled = true;
      try {
        // Confirma a senha atual antes de trocar (o Supabase não exige, mas evita troca por alguém que pegou a sessão aberta)
        await auth.entrar(usuario.email, atual.value);
        await auth.definirSenha(nova.value);
        form.reset();
        okMsg.hidden = false;
        botao.disabled = false;
      } catch (err) {
        mostrarErro(/invalid login/i.test(err.message) ? "Senha atual incorreta." : err.message);
      }
    },
  }, lAtual, atual, lNova, nova, lConf, conf, erro, okMsg, botao);

  const criada = usuario.created_at ? formatarData(usuario.created_at) : "—";
  const ultimoLogin = usuario.last_sign_in_at ? formatarData(usuario.last_sign_in_at) : "—";

  mostrar(
    el("button", { class: "link voltar", onclick: () => abrir(telaPainel) }, "← Voltar ao painel"),
    el("h1", {}, "Configurações"),
    el("p", { class: "sub" }, "Dados da sua conta e alteração de senha."),
    el("div", { class: "card" },
      el("h2", {}, "Conta"),
      el("dl", { class: "dados-conta" },
        el("dt", {}, "E-mail"), el("dd", {}, usuario.email),
        el("dt", {}, "Conta criada em"), el("dd", {}, criada),
        el("dt", {}, "Último acesso"), el("dd", {}, ultimoLogin)),
      el("p", { class: "hint" }, "Para trocar o e-mail, fale com quem administra o simulado.")),
    el("h2", { class: "titulo-secao" }, "Alterar senha"),
    form,
    el("div", { class: "card" },
      el("h2", {}, "Sessão"),
      el("p", { class: "hint" }, "Sai da conta neste navegador. Seus simulados ficam salvos."),
      el("button", { onclick: sairDaConta }, "Sair da conta")));
}

// Com o usuário autenticado: carrega as questões e abre a tela inicial
async function entrarNoApp() {
  montarConta();
  telaMensagem("Carregando questões…");
  try {
    QUESTOES = await carregarQuestoes();
  } catch (e) {
    telaMensagem(`Não foi possível carregar as questões: ${e.message}`);
    return;
  }
  abrir(telaPainel);
}

async function iniciarApp() {
  // O link de convite/redefinição chega com "type=invite|recovery" no hash;
  // guardamos antes que a biblioteca o consuma ao criar a sessão.
  const viaLink = /type=(invite|recovery|magiclink)/.test(location.hash);
  telaMensagem("Carregando…");

  const sessao = await new Promise((resolve) => {
    let feito = false;
    const concluir = (s) => { if (!feito) { feito = true; resolve(s); } };
    auth.aoMudar((evento, s) => { if (evento === "SIGNED_IN" || evento === "PASSWORD_RECOVERY" || evento === "INITIAL_SESSION") concluir(s); });
    setTimeout(async () => concluir(await auth.sessao().catch(() => null)), viaLink ? 4000 : 1500);
  });

  usuario = sessao ? sessao.user : null;
  if (!usuario) { abrir(telaLogin); return; }
  if (viaLink) { montarConta(); abrir(telaDefinirSenha); return; }
  await entrarNoApp();
}

// ---------- Texto do enunciado ----------

const RE_ALERTA = /^(não|nao|not|false|falsa|falso|incorrect|incorreta|incorreto|exceto|except)$/i;

// Converte texto em nós; no comando da questão, realça as palavras que
// invertem o sentido da pergunta (NÃO, FALSE, INCORRECT...).
function rico(texto, { alerta = false } = {}) {
  const frag = document.createDocumentFragment();
  for (const parte of String(texto).split(/(\s+)/)) {
    if (!parte) continue;
    const palavra = parte.replace(/^[^\p{L}\d]+|[^\p{L}\d]+$/gu, "");
    if (alerta && RE_ALERTA.test(palavra)) frag.append(el("mark", {}, parte));
    else frag.append(parte);
  }
  return frag;
}

const RE_ITEM = /^(\(\s*\)|[IVX]+\)|\d+\)|[-–•])\s+/;

// Divide em sentenças sem quebrar abreviações curtas ("H. MacElrevey", "Sr. Délio")
const sentencas = (t) => t.split(/(?<=[\p{L}\d]{3}[”"»)]?[.?!])\s+(?=[\p{Lu}“"(])/u);

function agrupar(lista, limite = 280) {
  const grupos = [];
  for (const s of lista) {
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && (ultimo + " " + s).length <= limite) grupos[grupos.length - 1] = ultimo + " " + s;
    else grupos.push(s);
  }
  return grupos;
}

// Quebra o enunciado em trechos curtos: texto, itens de lista e o "comando"
// (a pergunta propriamente dita, que nas questões longas fica perdida no fim).
function blocosDoEnunciado(texto) {
  const paragrafos = texto.split(/\n+/).map((l) => l.trim()).filter(Boolean).map((t) => {
    const item = t.match(RE_ITEM);
    return item ? { tipo: "item", marcador: item[1], texto: t.slice(item[0].length) } : { tipo: "texto", texto: t };
  });

  // Comando: o último parágrafo, se for texto; senão, o último parágrafo de
  // texto que não seja só um título de lista ("COLUNA B", "Características:").
  let iComando = paragrafos.length - 1;
  if (paragrafos[iComando].tipo !== "texto") {
    while (iComando >= 0 && (paragrafos[iComando].tipo !== "texto" || paragrafos[iComando].texto.length < 40)) iComando--;
  }

  const blocos = [];
  paragrafos.forEach((p, i) => {
    if (p.tipo === "item") { blocos.push(p); return; }
    const partes = sentencas(p.texto);
    if (i === iComando) {
      const comando = partes.pop();
      for (const t of agrupar(partes)) blocos.push({ tipo: "texto", texto: t });
      blocos.push({ tipo: "comando", texto: comando });
    } else {
      for (const t of agrupar(partes)) blocos.push({ tipo: "texto", texto: t });
    }
  });
  return blocos;
}

function enunciadoEl(q) {
  return el("div", { class: "enunciado leitura" }, blocosDoEnunciado(q.enunciado).map((b) =>
    el("div", { class: "trecho " + b.tipo },
      b.tipo === "item"
        ? [el("span", { class: "marcador" }, b.marcador), el("span", {}, rico(b.texto))]
        : rico(b.texto, { alerta: b.tipo === "comando" }))));
}

// ---------- Explicações ----------
// Questões comuns trazem a explicação de cada alternativa em q.explicacoes.
// Questões de "sequência" (V/F, associação, lacunas) e de "afirmativas"
// (I, II, III...) trazem a análise item a item em q.comentario, e a explicação
// de cada alternativa é gerada comparando-a com a alternativa correta.

function itensDaSequencia(texto) {
  const entreParenteses = [...texto.matchAll(/\(([^)]*)\)/g)].map((m) => m[1].trim());
  if (entreParenteses.length > 1) return entreParenteses;
  return texto.replace(/\.$/, "").split(",").map((s) => s.trim().toLowerCase());
}

const afirmativasCitadas = (texto) => texto.match(/\b(VIII|VII|VI|IV|V|III|II|I)\b/g) || [];

function explicacao(q, letra) {
  if (q.explicacoes && q.explicacoes[letra]) return q.explicacoes[letra];
  const certa = letra === q.correta;

  if (q.tipo === "sequencia") {
    if (certa) return "Sequência correta — veja a análise item a item.";
    const gabarito = itensDaSequencia(q.alternativas[q.correta]);
    const erros = itensDaSequencia(q.alternativas[letra])
      .map((valor, i) => (valor !== gabarito[i] ? `${i + 1}º (marca "${valor}", o correto é "${gabarito[i]}")` : null))
      .filter(Boolean);
    return `Sequência incorreta. Diverge do gabarito no item: ${erros.join("; ")}.`;
  }

  if (q.tipo === "afirmativas") {
    if (certa) return "Combinação correta — veja a análise de cada afirmativa.";
    const verdadeiras = afirmativasCitadas(q.alternativas[q.correta]);
    const citadas = afirmativasCitadas(q.alternativas[letra]);
    const falsasIncluidas = citadas.filter((a) => !verdadeiras.includes(a));
    const verdadeirasOmitidas = verdadeiras.filter((a) => !citadas.includes(a));
    const partes = [];
    if (falsasIncluidas.length) partes.push(`Inclui afirmativa falsa: ${falsasIncluidas.join(", ")}.`);
    if (verdadeirasOmitidas.length) partes.push(`Deixa de fora afirmativa verdadeira: ${verdadeirasOmitidas.join(", ")}.`);
    return partes.join(" ");
  }

  return "";
}

// ---------- Tela 1: painel ----------

const MISTA = "Mista";
const nomeProva = (p) => (p === MISTA ? "Mista (todas as provas)" : p);
const provasDisponiveis = () => [...new Set(QUESTOES.map((q) => q.prova))].sort();

function telaPainel() {
  pararRelogio();
  const corpo = el("div", {}, el("p", { class: "sub" }, "Carregando histórico…"));
  mostrar(
    el("div", { class: "cabecalho-painel" },
      el("h1", {}, "Simulados"),
      el("button", { class: "primary", onclick: () => abrir(telaNovo) }, "Novo simulado")),
    corpo);

  carregarHistorico().then((lista) => {
    if (telaAtual !== telaPainel) return;
    preencher(corpo, painelConteudo(lista));
  }).catch((e) => preencher(corpo, el("p", { class: "erro" }, `Não foi possível carregar o histórico: ${e.message}`)));
}

function painelConteudo(lista) {
  const concluidos = lista.filter((s) => s.finalizado_em);
  const ultimo = concluidos[0];
  const pct = (s) => Math.round((s.acertos / s.total) * 100);
  const corNota = (p) => (p >= 70 ? "ok" : p >= 50 ? "meio" : "err");

  const cartao = (titulo, ...conteudo) => el("div", { class: "card stat" }, el("span", { class: "rotulo" }, titulo), conteudo);

  const resumo = el("div", { class: "painel-topo" },
    el("div", { class: "painel-stats" },
      cartao("Simulados realizados", el("strong", { class: "stat-num" }, concluidos.length)),
      cartao("Último simulado",
        ultimo && el("div", { class: "contagem" },
          el("span", { class: "ok" }, `${ultimo.acertos} acertos`),
          el("span", { class: "info" }, `${ultimo.brancos} brancos`),
          el("span", { class: "err" }, `${ultimo.erros} erros`)),
        el("strong", { class: "stat-num" }, ultimo ? `${pct(ultimo)}%` : "—"))),
    el("div", { class: "card grafico-card" },
      el("span", { class: "rotulo" }, "Seu desempenho"),
      concluidos.length >= 2
        ? grafico(concluidos.slice(0, 12).reverse().map(pct))
        : el("p", { class: "sub" }, "Conclua ao menos dois simulados para ver a evolução.")));

  const linha = (s) => {
    const feito = !!s.finalizado_em;
    const nota = feito ? pct(s) : null;
    return el("div", { class: "card linha-simulado" + (feito ? "" : " andamento") },
      el("span", { class: "quando" }, formatarData(s.iniciado_em)),
      el("div", { class: "nome" },
        el("strong", {}, nomeProva(s.prova)),
        el("span", { class: "detalhe" },
          `${s.modo === "final" ? "Gabarito no final" : "Gabarito por pergunta"} · ${s.total} questões`,
          !feito && el("span", { class: "badge-andamento" }, "Em andamento"))),
      el("span", { class: "detalhe tempo-linha" }, feito ? formatarTempo(s.tempo_ms) : "—"),
      feito
        ? el("span", { class: "contagem" },
            el("span", { class: "ok" }, s.acertos), el("span", { class: "info" }, s.brancos), el("span", { class: "err" }, s.erros))
        : el("span", { class: "contagem" }, el("span", { class: "detalhe" }, "sem resultado")),
      feito ? el("span", { class: "nota " + corNota(nota) }, nota) : el("span"),
      el("div", { class: "acoes" },
        el("button", { class: "mini", onclick: () => abrirSimulado(s) }, feito ? "Ver" : "Continuar"),
        el("button", {
          class: "mini apagar", "aria-label": "Apagar simulado",
          onclick: async () => {
            if (!confirm("Apagar este simulado do histórico?")) return;
            try { await apagarSimulado(s.id); abrir(telaPainel); }
            catch (e) { alert(`Não foi possível apagar: ${e.message}`); }
          },
        }, "🗑")));
  };

  return [
    resumo,
    lista.length
      ? el("div", { class: "lista" }, lista.map(linha))
      : el("div", { class: "card vazio" },
          el("p", {}, "Você ainda não fez nenhum simulado."),
          el("button", { class: "primary", onclick: () => abrir(telaNovo) }, "Criar o primeiro")),
  ];
}

// Linha de evolução das notas (%), em SVG puro
function grafico(valores) {
  const W = 600, H = 150, px = 28, py = 22;
  const x = (i) => px + (valores.length === 1 ? (W - 2 * px) / 2 : (i * (W - 2 * px)) / (valores.length - 1));
  const y = (v) => py + (H - 2 * py) * (1 - v / 100);
  const svg = (tag, attrs, ...filhos) => {
    const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    n.append(...filhos);
    return n;
  };
  const pontos = valores.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  return svg("svg", { class: "grafico", viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "none" },
    ...[0, 25, 50, 75, 100].map((v) => svg("line", { class: "grade", x1: px, x2: W - px, y1: y(v), y2: y(v) })),
    svg("polyline", { class: "linha", points: pontos }),
    ...valores.flatMap((v, i) => [
      svg("circle", { class: "ponto-g", cx: x(i), cy: y(v), r: 4 }),
      svg("text", { class: "valor", x: x(i), y: y(v) - 9, "text-anchor": "middle" }, `${v}%`),
    ]));
}

// ---------- Tela 1b: novo simulado ----------

function telaNovo() {
  pararRelogio();
  const provas = provasDisponiveis();
  if (!provas.includes(config.prova) && config.prova !== MISTA) config.prova = MISTA;
  const disponiveis = config.prova === MISTA ? QUESTOES : QUESTOES.filter((q) => q.prova === config.prova);
  const total = disponiveis.length;
  const qtd = Math.max(1, Math.min(config.qtd, total));

  const chip = (ativo, rotulo, onclick, extra) =>
    el("button", { class: "chip" + (ativo ? " ativo" : ""), onclick }, rotulo, extra && el("span", { class: "chip-n" }, extra));

  const inputQtd = el("input", {
    type: "number", id: "qtd", min: 1, max: total, value: qtd, inputmode: "numeric",
    onchange: (e) => { config.qtd = parseInt(e.target.value, 10) || 1; redesenhar(); },
  });
  const atalhosQtd = [...new Set([10, 20, 40, total])].filter((n) => n <= total).map((n) =>
    chip(n === qtd, n === total ? `Todas (${total})` : n, () => { config.qtd = n; redesenhar(); }));

  const opcaoModo = (valor, titulo, desc) =>
    el("label", { class: "radio-opt" },
      el("input", { type: "radio", name: "modo", value: valor, checked: config.modo === valor, onchange: () => { config.modo = valor; } }),
      el("span", {}, titulo, el("small", {}, desc)));

  const botao = el("button", {
    class: "primary grande",
    onclick: async () => {
      botao.disabled = true;
      try { await iniciar(embaralhar(disponiveis).slice(0, qtd), config.modo, config.prova); }
      catch (e) { alert(`Não foi possível criar o simulado: ${e.message}`); botao.disabled = false; }
    },
  }, `Iniciar simulado · ${qtd} ${qtd === 1 ? "questão" : "questões"}`);

  mostrar(
    el("button", { class: "link voltar", onclick: () => abrir(telaPainel) }, "← Voltar ao painel"),
    el("h1", {}, "Novo simulado"),
    el("p", { class: "sub" }, `${QUESTOES.length} questões no banco, de ${provas.length} provas.`),
    el("div", { class: "card" },
      el("div", { class: "field" },
        el("div", { class: "label" }, "Prova"),
        el("div", { class: "chips" },
          chip(config.prova === MISTA, "Mista", () => { config.prova = MISTA; redesenhar(); }, QUESTOES.length),
          provas.map((p) => chip(config.prova === p, p, () => { config.prova = p; redesenhar(); }, QUESTOES.filter((q) => q.prova === p).length))),
        el("div", { class: "hint" }, config.prova === MISTA ? "Sorteia questões de todas as provas." : `Só questões da ${config.prova}.`)),
      el("div", { class: "field" },
        el("label", { for: "qtd" }, "Número de questões"),
        el("div", { class: "linha-qtd" }, inputQtd, el("div", { class: "chips" }, atalhosQtd)),
        el("div", { class: "hint" }, "As questões são sorteadas a cada simulado.")),
      el("div", { class: "field" },
        el("div", { class: "label" }, "Quando ver o gabarito?"),
        el("div", { class: "radio-group" },
          opcaoModo("porPergunta", "A cada pergunta", "Mostra a resposta e as explicações logo após você responder."),
          opcaoModo("final", "Somente no final", "Responda tudo primeiro; o gabarito comentado aparece ao terminar."))),
      botao));
}

function novoEstado(registro, questoes, respostas) {
  return {
    id: registro.id,
    prova: registro.prova,
    modo: registro.modo, // "porPergunta" | "final"
    questoes,
    respostas,           // id da questão -> letra escolhida
    confirmadas: {},     // id da questão -> true (só no modo porPergunta)
    atual: 0,
    inicio: new Date(registro.iniciado_em).getTime(),
    fim: registro.finalizado_em ? new Date(registro.finalizado_em).getTime() : null,
    filtro: "todas",
    marcadas: {},        // id da questão -> true (marcada para rever; só nesta sessão)
    salvo: null,         // null = ainda não gravado; "salvando" | "ok" | mensagem de erro
  };
}

// Cria o simulado no banco e abre a primeira questão
async function iniciar(questoes, modo, prova = MISTA) {
  const registro = await criarSimulado({ user_id: usuario.id, prova, modo, questoes });
  estado = novoEstado(registro, questoes, {});
  estado.inicio = Date.now(); // relógio local: evita diferença com o relógio do servidor
  abrir(telaQuestao);
}

// Reabre um simulado do histórico: concluído vai para o resultado; em
// andamento continua da primeira questão ainda não respondida
async function abrirSimulado(registro) {
  const porId = Object.fromEntries(QUESTOES.map((q) => [q.id, q]));
  const questoes = registro.questoes_ids.map((id) => porId[id]).filter(Boolean);
  if (questoes.length !== registro.questoes_ids.length) {
    alert("Algumas questões deste simulado não estão mais no banco.");
    return;
  }
  let respostas;
  try { respostas = await carregarRespostas(registro.id); }
  catch (e) { alert(`Não foi possível abrir: ${e.message}`); return; }

  estado = novoEstado(registro, questoes, respostas);
  if (registro.finalizado_em) {
    estado.salvo = "ok";
    abrir(telaResultado);
  } else {
    if (registro.modo === "porPergunta") for (const id in respostas) estado.confirmadas[id] = true;
    const primeira = questoes.findIndex((q) => !respostas[q.id]);
    estado.atual = primeira === -1 ? questoes.length - 1 : primeira;
    abrir(telaQuestao);
  }
}

// Grava uma resposta em segundo plano; a gravação final refaz tudo de novo,
// então uma falha aqui não perde dados.
function gravarResposta(q) {
  salvarResposta(estado.id, q, estado.respostas[q.id]).catch((e) => console.warn("resposta não gravada:", e.message));
}

// ---------- Tela 2: questão ----------

let relogio = null;
let acaoPrimaria = null; // o que a tecla Enter faz na tela atual

function pararRelogio() {
  clearInterval(relogio);
  relogio = null;
}

function irPara(indice) {
  estado.atual = indice;
  abrir(telaQuestao);
}

// No modo "a cada pergunta" só se pode ir até a primeira questão não confirmada
function podeIrPara(indice) {
  if (estado.modo === "final") return true;
  const fronteira = estado.questoes.findIndex((q) => !estado.confirmadas[q.id]);
  return fronteira === -1 || indice <= fronteira;
}

function navegador() {
  const { questoes, atual, modo, respostas, confirmadas, marcadas } = estado;
  return el("div", { class: "navegador" }, questoes.map((q, i) => {
    let classe = "ponto";
    if (modo === "porPergunta" && confirmadas[q.id]) classe += respostas[q.id] === q.correta ? " certa" : " errada";
    else if (respostas[q.id]) classe += " respondida";
    if (marcadas[q.id]) classe += " marcada";
    if (i === atual) classe += " atual";
    return el("button", {
      class: classe, disabled: !podeIrPara(i), "aria-label": `Questão ${i + 1}`,
      onclick: () => irPara(i),
    }, i + 1);
  }));
}

const CHECK = "M5 12l5 5 9-10";
const XIS = "M6 6l12 12M18 6L6 18";
const ESTRELA = "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z";
const svgIcone = (d, classe) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("class", "ico " + (classe || ""));
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path"); path.setAttribute("d", d);
  svg.append(path); return svg;
};

function alternarMarcada(q) {
  if (estado.marcadas[q.id]) delete estado.marcadas[q.id]; else estado.marcadas[q.id] = true;
  redesenhar();
}

function telaQuestao() {
  const { questoes, atual, modo, respostas, confirmadas, marcadas } = estado;
  const q = questoes[atual];
  const escolhida = respostas[q.id];
  const revelada = modo === "porPergunta" && confirmadas[q.id];
  const ultima = atual === questoes.length - 1;
  const respondidas = questoes.filter((x) => respostas[x.id]).length;
  const acertosAteAqui = modo === "porPergunta" ? questoes.filter((x) => confirmadas[x.id] && respostas[x.id] === x.correta).length : null;

  const alts = letras(q).map((letra) => {
    let classe = "alt leitura", estadoIco = null;
    if (revelada) {
      if (letra === q.correta) { classe += " certa"; estadoIco = svgIcone(CHECK, "alt-estado"); }
      else if (letra === escolhida) { classe += " errada"; estadoIco = svgIcone(XIS, "alt-estado"); }
    } else if (letra === escolhida) {
      classe += " selecionada"; estadoIco = svgIcone(CHECK, "alt-estado");
    }
    return el("button", {
      class: classe, disabled: revelada, "aria-pressed": String(letra === escolhida),
      onclick: () => { respostas[q.id] = letra; if (modo === "final") gravarResposta(q); redesenhar(); },
    }, el("span", { class: "letra" }, letra), el("span", { class: "alt-texto" }, rico(q.alternativas[letra])), estadoIco);
  });

  let botoes;
  const contador = el("span", { class: "contador" }, `${atual + 1} / ${questoes.length}`);
  if (modo === "porPergunta") {
    if (!revelada) {
      acaoPrimaria = escolhida ? () => { confirmadas[q.id] = true; gravarResposta(q); redesenhar(); } : null;
      botoes = [
        el("button", { disabled: atual === 0, onclick: () => irPara(atual - 1) }, "Anterior"),
        contador,
        el("button", { class: "primary", disabled: !escolhida, onclick: acaoPrimaria }, escolhida ? "Confirmar resposta" : "Escolha uma alternativa"),
      ];
    } else {
      acaoPrimaria = ultima ? () => abrir(telaResultado) : () => irPara(atual + 1);
      botoes = [
        el("button", { disabled: atual === 0, onclick: () => irPara(atual - 1) }, "Anterior"),
        contador,
        el("button", { class: "primary", onclick: acaoPrimaria }, ultima ? "Ver resultado" : "Próxima questão"),
      ];
    }
  } else {
    acaoPrimaria = ultima ? finalizar : () => irPara(atual + 1);
    botoes = [
      el("button", { disabled: atual === 0, onclick: () => irPara(atual - 1) }, "Anterior"),
      contador,
      el("button", { class: "primary", onclick: acaoPrimaria }, ultima ? "Finalizar simulado" : "Próxima"),
    ];
  }

  const tempo = el("span", { class: "tempo" }, formatarTempo(Date.now() - estado.inicio));
  pararRelogio();
  relogio = setInterval(() => { tempo.textContent = formatarTempo(Date.now() - estado.inicio); }, 1000);

  const sair = () => {
    if (confirm("Sair do simulado? Ele fica salvo como \"em andamento\" e você pode continuar pelo painel.")) abrir(telaPainel);
  };

  const pct = Math.round((respondidas / questoes.length) * 100);
  const legenda = (classe, texto) => el("span", { class: "legenda-item" }, el("span", { class: "ponto mini-ponto " + classe }), texto);
  const tecla = (...ks) => ks.flatMap((k, i) => [i > 0 && " ", el("kbd", {}, k)]);

  // Layout em duas colunas: pergunta | painel com tempo, progresso e grade
  mostrar(
    el("div", { class: "layout-questao" },
      el("div", { class: "coluna-pergunta" },
        el("div", { class: "q-cabecalho" },
          el("div", { class: "q-titulo" },
            el("span", {}, el("strong", {}, `Questão ${atual + 1}`), ` de ${questoes.length}`),
            el("span", { class: "tema" }, q.tema || ""),
            q.prova && el("span", { class: "prova" }, q.prova)),
          el("button", {
            class: "mini marcar" + (marcadas[q.id] ? " ativa" : ""), "aria-pressed": String(!!marcadas[q.id]),
            title: "Marcar para rever depois (M)", onclick: () => alternarMarcada(q),
          }, svgIcone(ESTRELA), marcadas[q.id] ? "Marcada para rever" : "Rever depois")),
        el("div", { class: "progresso", role: "progressbar", "aria-valuenow": pct, "aria-valuemin": 0, "aria-valuemax": 100 },
          el("div", { style: `width:${pct}%` })),
        el("div", { class: "card q-card" },
          enunciadoEl(q),
          el("div", { class: "alts" }, alts),
          revelada && blocoGabarito(q, escolhida)),
        el("div", { class: "barra-acoes" }, botoes)),
      el("aside", { class: "painel-lateral card" },
        el("div", { class: "painel-tempo" }, el("span", { class: "rotulo" }, "Tempo"), tempo),
        el("div", { class: "painel-progresso" },
          el("span", { class: "rotulo" }, "Progresso"),
          el("div", { class: "painel-progresso-num" }, el("strong", {}, respondidas), ` de ${questoes.length} respondidas`),
          el("div", { class: "progresso fina" }, el("div", { style: `width:${pct}%` })),
          acertosAteAqui !== null && el("div", { class: "detalhe" }, `${acertosAteAqui} ${acertosAteAqui === 1 ? "acerto" : "acertos"} até aqui`)),
        el("div", { class: "painel-questoes" },
          el("span", { class: "rotulo" }, "Questões"),
          navegador(),
          el("div", { class: "legenda" },
            modo === "porPergunta" ? [legenda("certa", "Certa"), legenda("errada", "Errada")] : legenda("respondida", "Respondida"),
            legenda("marcada", "Rever"))),
        el("div", { class: "atalhos-painel" },
          el("span", { class: "rotulo" }, "Atalhos"),
          el("div", {}, tecla("A"), "–", tecla(letras(q).slice(-1)[0]), " marca a alternativa"),
          el("div", {}, tecla("Enter"), modo === "porPergunta" ? " confirma / avança" : " próxima"),
          modo === "final" && el("div", {}, tecla("←", "→"), " navega"),
          el("div", {}, tecla("M"), " marcar para rever")),
        el("button", { class: "mini sair", onclick: sair }, "Sair do simulado"))));

  // Mantém o número da questão atual visível dentro da grade (que rola sozinha
  // quando há muitas questões), sem mexer na rolagem da página.
  const grade = app.querySelector(".navegador");
  const pontoAtual = grade && grade.querySelector(".ponto.atual");
  if (pontoAtual) {
    grade.scrollLeft = pontoAtual.offsetLeft - grade.offsetLeft - grade.clientWidth / 2 + pontoAtual.offsetWidth / 2;
    grade.scrollTop = pontoAtual.offsetTop - grade.offsetTop - grade.clientHeight / 2 + pontoAtual.offsetHeight / 2;
  }
}

function finalizar() {
  const emBranco = estado.questoes.filter((q) => !estado.respostas[q.id]).length;
  const marcadas = Object.keys(estado.marcadas).length;
  const avisos = [];
  if (emBranco > 0) avisos.push(emBranco === 1 ? "1 questão sem resposta" : `${emBranco} questões sem resposta`);
  if (marcadas > 0) avisos.push(marcadas === 1 ? "1 questão marcada para rever" : `${marcadas} questões marcadas para rever`);
  if (avisos.length && !confirm(`Há ${avisos.join(" e ")}. Finalizar mesmo assim?`)) return;
  abrir(telaResultado);
}

document.addEventListener("keydown", (e) => {
  if (telaAtual !== telaQuestao || e.metaKey || e.ctrlKey || e.altKey) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
  const q = estado.questoes[estado.atual];
  const revelada = estado.modo === "porPergunta" && estado.confirmadas[q.id];
  const letra = e.key.toUpperCase();

  if (letras(q).includes(letra) && !revelada) {
    estado.respostas[q.id] = letra;
    if (estado.modo === "final") gravarResposta(q);
    redesenhar();
  } else if (letra === "M") {
    alternarMarcada(q);
  } else if (e.key === "Enter" && acaoPrimaria) {
    e.preventDefault();
    acaoPrimaria();
  } else if (e.key === "ArrowRight" && estado.atual < estado.questoes.length - 1 && podeIrPara(estado.atual + 1)) {
    irPara(estado.atual + 1);
  } else if (e.key === "ArrowLeft" && estado.atual > 0) {
    irPara(estado.atual - 1);
  }
});

// Gabarito comentado: veredito + análise + explicação de cada alternativa
function blocoGabarito(q, escolhida) {
  const acertou = escolhida === q.correta;
  const veredito = !escolhida
    ? el("div", { class: "veredito err" }, svgIcone(XIS), el("div", {}, el("strong", {}, "Não respondida"), el("span", {}, `Resposta correta: ${q.correta}`)))
    : acertou
      ? el("div", { class: "veredito ok" }, svgIcone(CHECK), el("div", {}, el("strong", {}, "Você acertou!"), el("span", {}, `Resposta correta: ${q.correta}`)))
      : el("div", { class: "veredito err" }, svgIcone(XIS), el("div", {}, el("strong", {}, "Você errou"), el("span", {}, `Você marcou ${escolhida} · a correta é ${q.correta}`)));

  const explicacoes = letras(q).map((letra) => {
    const certa = letra === q.correta;
    return el("div", { class: "exp " + (certa ? "ok" : "err") + (letra === escolhida ? " sua" : "") },
      el("span", { class: "letra" }, letra),
      el("div", { class: "exp-corpo" },
        el("span", { class: "tag" }, certa ? "Correta" : "Incorreta", letra === escolhida && el("em", {}, " · sua resposta")),
        el("span", {}, rico(explicacao(q, letra)))));
  });

  return el("div", { class: "gabarito leitura" },
    veredito,
    q.comentario && el("div", { class: "comentario" }, el("span", { class: "rotulo" }, "Análise"), rico(q.comentario)),
    el("span", { class: "rotulo" }, "Por alternativa"),
    el("div", { class: "exps" }, explicacoes),
    q.revisar && el("div", { class: "aviso" },
      "Explicação a revisar: a letra correta vem do gabarito oficial, mas a justificativa não foi conferida na bibliografia."));
}

// ---------- Tela 3: resultado + gabarito completo ----------

// Grava o simulado no banco uma única vez e atualiza o aviso na tela
function gravarResultado() {
  const este = estado;
  este.salvo = "salvando";
  finalizarSimulado(este)
    .then(() => { este.salvo = "ok"; })
    .catch((e) => { este.salvo = e.message; })
    .finally(() => { if (estado === este && telaAtual === telaResultado) redesenhar(); });
}

function telaResultado() {
  pararRelogio();
  if (!estado.fim) estado.fim = Date.now();
  if (estado.salvo === null) gravarResultado();
  const { questoes, respostas } = estado;

  const situacao = (q) => (!respostas[q.id] ? "branco" : respostas[q.id] === q.correta ? "certa" : "errada");
  const contar = (s) => questoes.filter((q) => situacao(q) === s).length;
  const acertos = contar("certa"), erros = contar("errada"), brancos = contar("branco");
  const pct = Math.round((acertos / questoes.length) * 100);
  const duracao = estado.fim - estado.inicio;

  // Desempenho por tema, do pior para o melhor
  const porTema = [...new Set(questoes.map((q) => q.tema))].map((tema) => {
    const doTema = questoes.filter((q) => q.tema === tema);
    const certas = doTema.filter((q) => situacao(q) === "certa").length;
    return { tema, certas, total: doTema.length, pct: Math.round((certas / doTema.length) * 100) };
  }).sort((a, b) => a.pct - b.pct);

  const filtros = { todas: "Todas", errada: "Erradas", certa: "Certas", branco: "Em branco" };
  const visiveis = questoes
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => estado.filtro === "todas" || situacao(q) === estado.filtro);

  const paraRefazer = questoes.filter((q) => situacao(q) !== "certa");

  const revisao = visiveis.map(({ q, i }) => {
    const escolhida = respostas[q.id];
    const s = situacao(q);
    const resumo = s === "certa" ? `✓ acertou (${q.correta})`
      : s === "errada" ? `✗ marcou ${escolhida}, correta ${q.correta}`
      : `— em branco, correta ${q.correta}`;
    return el("details", { class: "card revisao " + s, open: s !== "certa" },
      el("summary", {},
        el("strong", {}, `Questão ${i + 1}`),
        el("span", { class: "tema" }, q.tema || ""),
        q.prova && el("span", { class: "prova" }, q.prova),
        el("span", { class: "resumo" }, resumo)),
      enunciadoEl(q),
      el("div", { class: "alts" }, letras(q).map((letra) => {
        let classe = "alt leitura";
        if (letra === q.correta) classe += " certa";
        else if (letra === escolhida) classe += " errada";
        return el("button", { class: classe, disabled: true },
          el("span", { class: "letra" }, letra), el("span", {}, rico(q.alternativas[letra])));
      })),
      blocoGabarito(q, escolhida));
  });

  const numero = (valor, rotulo, classe = "") =>
    el("div", { class: "numero " + classe }, el("strong", {}, valor), el("span", {}, rotulo));

  mostrar(
    el("button", { class: "link voltar", onclick: () => abrir(telaPainel) }, "← Voltar ao painel"),
    el("h1", {}, "Resultado"),
    el("div", { class: "card placar" },
      el("div", { class: "nota" }, `${pct}%`),
      el("div", { class: "numeros" },
        numero(acertos, "acertos", "ok"),
        numero(erros, "erros", "err"),
        numero(brancos, "em branco"),
        numero(formatarTempo(duracao), "tempo total"),
        numero(formatarTempo(duracao / questoes.length), "por questão")),
      el("p", { class: "salvo " + (estado.salvo === "ok" ? "ok" : estado.salvo === "salvando" ? "" : "err") },
        estado.salvo === "ok" ? "Resultado salvo no seu histórico."
          : estado.salvo === "salvando" ? "Salvando resultado…"
          : [`Não foi possível salvar: ${estado.salvo}. `, el("button", { class: "link", onclick: () => { gravarResultado(); redesenhar(); } }, "Tentar de novo")]),
      el("div", { class: "actions centro" },
        paraRefazer.length > 0 && el("button", {
          onclick: () => iniciar(embaralhar(paraRefazer), estado.modo, estado.prova).catch((e) => alert(e.message)),
        }, `Refazer as ${paraRefazer.length} que não acertei`),
        el("button", { onclick: () => abrir(telaPainel) }, "Voltar ao painel"),
        el("button", { class: "primary", onclick: () => abrir(telaNovo) }, "Novo simulado"))),
    porTema.length > 1 && el("div", { class: "card" },
      el("h2", {}, "Desempenho por tema"),
      porTema.map((t) => el("div", { class: "tema-linha" },
        el("span", { class: "tema-nome" }, t.tema),
        el("div", { class: "tema-barra" }, el("div", { style: `width:${t.pct}%` })),
        el("span", { class: "tema-pct" }, `${t.certas}/${t.total}`)))),
    el("div", { class: "cabecalho-revisao" },
      el("h2", {}, "Gabarito comentado"),
      el("div", { class: "chips" }, Object.entries(filtros).map(([valor, rotulo]) =>
        el("button", {
          class: "chip" + (estado.filtro === valor ? " ativo" : ""),
          onclick: () => { estado.filtro = valor; redesenhar(); },
        }, rotulo)))),
    revisao.length ? revisao : el("p", { class: "sub" }, "Nenhuma questão neste filtro."));
}

iniciarApp();

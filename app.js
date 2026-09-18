const app = document.getElementById("app");
const barra = document.getElementById("barra");

// Letras das alternativas da questão (A–D, A–E...), na ordem do banco
const letras = (q) => Object.keys(q.alternativas);

// Estado do simulado em andamento e escolhas da tela de configuração
let estado = null;
const config = { temas: [], qtd: 10, modo: "porPergunta" };

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

// Troca o conteúdo da tela; aceita listas e ignora valores falsos
function mostrar(...nodes) {
  app.replaceChildren(...nodes.flat().filter((n) => n != null && n !== false));
}

// Tela atual: guardada para poder redesenhar quando uma preferência muda
let telaAtual = null;

function abrir(tela) {
  telaAtual = tela;
  tela();
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
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

// ---------- Preferências de leitura ----------

const prefs = { bionica: false, foco: false, destaque: true, fonte: 100 };
try {
  Object.assign(prefs, JSON.parse(localStorage.getItem("simulado.prefs") || "{}"));
} catch (e) { /* sem armazenamento: usa os padrões */ }

function aplicarPrefs() {
  document.documentElement.style.setProperty("--escala", prefs.fonte / 100);
  try {
    localStorage.setItem("simulado.prefs", JSON.stringify(prefs));
  } catch (e) { /* ignora */ }
}

function montarBarra() {
  const painel = el("div", { class: "painel-leitura", hidden: true });

  const desenharPainel = () => {
    const chave = (campo, titulo, desc) =>
      el("label", { class: "chave" },
        el("input", {
          type: "checkbox", checked: prefs[campo],
          onchange: (e) => { prefs[campo] = e.target.checked; aplicarPrefs(); redesenhar(); },
        }),
        el("span", {}, titulo, el("small", {}, desc)));

    const mudarFonte = (delta) => {
      prefs.fonte = Math.max(85, Math.min(140, prefs.fonte + delta));
      aplicarPrefs();
      desenharPainel();
    };

    painel.replaceChildren(
      chave("bionica", "Leitura biônica", "Negrito no início de cada palavra para guiar o olho."),
      chave("foco", "Foco por trecho", "Mostra o enunciado um trecho por vez; os demais ficam esmaecidos."),
      chave("destaque", "Destacar o comando", "Realça a pergunta em si e palavras como NÃO, FALSE, INCORRECT."),
      el("div", { class: "fonte" },
        el("span", {}, "Tamanho do texto"),
        el("div", {},
          el("button", { onclick: () => mudarFonte(-5), "aria-label": "Diminuir texto" }, "A−"),
          el("span", { class: "fonte-valor" }, `${prefs.fonte}%`),
          el("button", { onclick: () => mudarFonte(5), "aria-label": "Aumentar texto" }, "A+"))));
  };
  desenharPainel();

  const botao = el("button", {
    class: "botao-leitura", "aria-expanded": "false",
    onclick: () => {
      painel.hidden = !painel.hidden;
      botao.setAttribute("aria-expanded", String(!painel.hidden));
    },
  }, "Aa  Leitura");

  document.addEventListener("click", (e) => {
    if (!painel.hidden && !painel.contains(e.target) && e.target !== botao) {
      painel.hidden = true;
      botao.setAttribute("aria-expanded", "false");
    }
  });

  barra.replaceChildren(el("span", { class: "marca" }, "Simulado"), botao, painel);
}

// ---------- Texto para leitura dinâmica ----------

const RE_ALERTA = /^(não|nao|not|false|falsa|falso|incorrect|incorreta|incorreto|exceto|except)$/i;

// Converte texto em nós aplicando leitura biônica e, no comando da questão,
// o realce das palavras que invertem o sentido da pergunta.
function rico(texto, { alerta = false } = {}) {
  const frag = document.createDocumentFragment();
  for (const parte of String(texto).split(/(\s+)/)) {
    if (!parte) continue;
    const m = parte.match(/^([^\p{L}\d]*)([\p{L}\d]+)(.*)$/su);
    if (!m) { frag.append(parte); continue; }
    const [, antes, palavra, depois] = m;

    let conteudo = [parte];
    if (prefs.bionica && !/^\d/.test(palavra)) {
      const n = palavra.length <= 3 ? 1 : Math.ceil(palavra.length * 0.4);
      conteudo = [antes, el("b", { class: "bio" }, palavra.slice(0, n)), palavra.slice(n) + depois];
    }
    if (alerta && prefs.destaque && RE_ALERTA.test(palavra)) frag.append(el("mark", {}, conteudo));
    else frag.append(...conteudo);
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

// Trechos do enunciado em tela, para o modo foco
let trechos = [];
let contadorFoco = null;

function focar(i) {
  if (!trechos.length) return;
  estado.trecho = Math.max(0, Math.min(i, trechos.length - 1));
  trechos.forEach((n, j) => n.classList.toggle("ativo", j === estado.trecho));
  if (contadorFoco) contadorFoco.textContent = `Trecho ${estado.trecho + 1} de ${trechos.length}`;
}

function enunciadoEl(q, comFoco) {
  const nodes = blocosDoEnunciado(q.enunciado).map((b, i) =>
    el("div", { class: "trecho " + b.tipo, onclick: comFoco && (() => focar(i)) },
      b.tipo === "item"
        ? [el("span", { class: "marcador" }, b.marcador), el("span", {}, rico(b.texto))]
        : rico(b.texto, { alerta: b.tipo === "comando" })));

  const classes = ["enunciado", "leitura"];
  if (prefs.destaque) classes.push("com-destaque");
  if (!comFoco || nodes.length < 2) return el("div", { class: classes.join(" ") }, nodes);

  trechos = nodes;
  contadorFoco = el("span", {});
  const caixa = el("div", { class: classes.concat("foco").join(" ") },
    nodes,
    el("div", { class: "foco-controle" },
      contadorFoco,
      el("button", { class: "mini", onclick: () => focar(estado.trecho + 1) }, "Próximo trecho ▸")));
  focar(estado.trecho || 0);
  return caixa;
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

const afirmativasCitadas = (texto) => texto.match(/\b(IV|III|II|I)\b/g) || [];

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

// ---------- Tela 1: configuração ----------

function telaConfig() {
  pararRelogio();
  const temas = [...new Set(QUESTOES.map((q) => q.tema))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const disponiveis = QUESTOES.filter((q) => !config.temas.length || config.temas.includes(q.tema));
  const total = disponiveis.length;
  const qtd = Math.max(1, Math.min(config.qtd, total));

  const chipTema = (tema) => {
    const ativo = config.temas.includes(tema);
    const n = QUESTOES.filter((q) => q.tema === tema).length;
    return el("button", {
      class: "chip" + (ativo ? " ativo" : ""), "aria-pressed": String(ativo),
      onclick: () => {
        config.temas = ativo ? config.temas.filter((t) => t !== tema) : [...config.temas, tema];
        redesenhar();
      },
    }, tema, el("span", { class: "chip-n" }, n));
  };

  const inputQtd = el("input", {
    type: "number", id: "qtd", min: 1, max: total, value: qtd, inputmode: "numeric",
    onchange: (e) => { config.qtd = parseInt(e.target.value, 10) || 1; redesenhar(); },
  });
  const atalhosQtd = [...new Set([10, 20, 40, total])].filter((n) => n <= total).map((n) =>
    el("button", {
      class: "chip" + (n === qtd ? " ativo" : ""),
      onclick: () => { config.qtd = n; redesenhar(); },
    }, n === total ? `Todas (${total})` : n));

  const opcaoModo = (valor, titulo, desc) =>
    el("label", { class: "radio-opt" },
      el("input", {
        type: "radio", name: "modo", value: valor, checked: config.modo === valor,
        onchange: () => { config.modo = valor; },
      }),
      el("span", {}, titulo, el("small", {}, desc)));

  mostrar(
    el("h1", {}, "Novo simulado"),
    el("p", { class: "sub" }, `${QUESTOES.length} questões no banco · ${total} nos temas selecionados`),
    el("div", { class: "card" },
      el("div", { class: "field" },
        el("div", { class: "label" }, "Temas"),
        el("div", { class: "chips" }, temas.map(chipTema)),
        el("div", { class: "hint" }, config.temas.length
          ? "Toque de novo em um tema para removê-lo."
          : "Nenhum tema marcado = todos os temas.")),
      el("div", { class: "field" },
        el("label", { for: "qtd" }, "Número de questões"),
        el("div", { class: "linha-qtd" }, inputQtd, el("div", { class: "chips" }, atalhosQtd)),
        el("div", { class: "hint" }, "As questões são sorteadas a cada simulado.")),
      el("div", { class: "field" },
        el("div", { class: "label" }, "Quando ver o gabarito?"),
        el("div", { class: "radio-group" },
          opcaoModo("porPergunta", "A cada pergunta", "Mostra a resposta e as explicações logo após você responder."),
          opcaoModo("final", "Somente no final", "Responda tudo primeiro; o gabarito comentado aparece ao terminar."))),
      el("button", {
        class: "primary grande",
        onclick: () => iniciar(embaralhar(disponiveis).slice(0, qtd), config.modo),
      }, `Iniciar simulado · ${qtd} ${qtd === 1 ? "questão" : "questões"}`)));
}

function iniciar(questoes, modo) {
  estado = {
    modo, // "porPergunta" | "final"
    questoes,
    respostas: {},   // id da questão -> letra escolhida
    confirmadas: {}, // id da questão -> true (só no modo porPergunta)
    atual: 0,
    trecho: 0,       // trecho do enunciado em foco
    inicio: Date.now(),
    fim: null,
    filtro: "todas",
  };
  abrir(telaQuestao);
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
  estado.trecho = 0;
  abrir(telaQuestao);
}

// No modo "a cada pergunta" só se pode ir até a primeira questão não confirmada
function podeIrPara(indice) {
  if (estado.modo === "final") return true;
  const fronteira = estado.questoes.findIndex((q) => !estado.confirmadas[q.id]);
  return fronteira === -1 || indice <= fronteira;
}

function navegador() {
  const { questoes, atual, modo, respostas, confirmadas } = estado;
  return el("div", { class: "navegador" }, questoes.map((q, i) => {
    let classe = "ponto";
    if (modo === "porPergunta" && confirmadas[q.id]) classe += respostas[q.id] === q.correta ? " certa" : " errada";
    else if (respostas[q.id]) classe += " respondida";
    if (i === atual) classe += " atual";
    return el("button", {
      class: classe, disabled: !podeIrPara(i), "aria-label": `Questão ${i + 1}`,
      onclick: () => irPara(i),
    }, i + 1);
  }));
}

function telaQuestao() {
  const { questoes, atual, modo, respostas, confirmadas } = estado;
  const q = questoes[atual];
  const escolhida = respostas[q.id];
  const revelada = modo === "porPergunta" && confirmadas[q.id];
  const ultima = atual === questoes.length - 1;
  trechos = [];

  const alts = letras(q).map((letra) => {
    let classe = "alt leitura";
    if (revelada) {
      if (letra === q.correta) classe += " certa";
      else if (letra === escolhida) classe += " errada";
    } else if (letra === escolhida) {
      classe += " selecionada";
    }
    return el("button", {
      class: classe, disabled: revelada,
      onclick: () => { respostas[q.id] = letra; redesenhar(); },
    }, el("span", { class: "letra" }, letra), el("span", {}, rico(q.alternativas[letra])));
  });

  let botoes;
  if (modo === "porPergunta") {
    if (!revelada) {
      acaoPrimaria = escolhida ? () => { confirmadas[q.id] = true; redesenhar(); } : null;
      botoes = [el("span"), el("button", { class: "primary", disabled: !escolhida, onclick: acaoPrimaria }, "Confirmar resposta")];
    } else {
      acaoPrimaria = ultima ? () => abrir(telaResultado) : () => irPara(atual + 1);
      botoes = [el("span"), el("button", { class: "primary", onclick: acaoPrimaria }, ultima ? "Ver resultado" : "Próxima")];
    }
  } else {
    acaoPrimaria = ultima ? finalizar : () => irPara(atual + 1);
    botoes = [
      el("button", { disabled: atual === 0, onclick: () => irPara(atual - 1) }, "Anterior"),
      el("button", { class: "primary", onclick: acaoPrimaria }, ultima ? "Finalizar simulado" : "Próxima"),
    ];
  }

  const tempo = el("span", { class: "tempo" }, formatarTempo(Date.now() - estado.inicio));
  pararRelogio();
  relogio = setInterval(() => { tempo.textContent = formatarTempo(Date.now() - estado.inicio); }, 1000);

  const sair = () => {
    if (confirm("Sair do simulado? As respostas serão perdidas.")) abrir(telaConfig);
  };

  mostrar(
    el("div", { class: "topbar" },
      el("span", {}, el("strong", {}, `Questão ${atual + 1}`), ` de ${questoes.length}`),
      el("span", { class: "tema" }, q.tema || ""),
      el("span", { class: "topbar-fim" }, tempo, el("button", { class: "mini", onclick: sair }, "Sair"))),
    navegador(),
    el("div", { class: "card" },
      enunciadoEl(q, prefs.foco && !revelada),
      el("div", { class: "alts" }, alts),
      revelada && blocoGabarito(q, escolhida),
      el("div", { class: "actions" }, botoes)),
    el("p", { class: "atalhos" },
      "Atalhos: ", el("kbd", {}, "A"), "–", el("kbd", {}, letras(q).slice(-1)[0]), " marca · ",
      el("kbd", {}, "Enter"), " confirma/avança",
      modo === "final" && [" · ", el("kbd", {}, "←"), " ", el("kbd", {}, "→"), " navega"],
      prefs.foco && [" · ", el("kbd", {}, "Espaço"), " próximo trecho"]));
}

function finalizar() {
  const emBranco = estado.questoes.filter((q) => !estado.respostas[q.id]).length;
  if (emBranco > 0) {
    const msg = emBranco === 1
      ? "Há 1 questão sem resposta. Finalizar mesmo assim?"
      : `Há ${emBranco} questões sem resposta. Finalizar mesmo assim?`;
    if (!confirm(msg)) return;
  }
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
    redesenhar();
  } else if (e.key === "Enter" && acaoPrimaria) {
    e.preventDefault();
    acaoPrimaria();
  } else if (e.key === " " && trechos.length) {
    e.preventDefault();
    focar(estado.trecho + 1);
  } else if (e.key === "ArrowRight" && estado.atual < estado.questoes.length - 1 && podeIrPara(estado.atual + 1)) {
    irPara(estado.atual + 1);
  } else if (e.key === "ArrowLeft" && estado.atual > 0) {
    irPara(estado.atual - 1);
  }
});

// Gabarito comentado: veredito + explicação de cada alternativa
function blocoGabarito(q, escolhida) {
  const acertou = escolhida === q.correta;
  const veredito = !escolhida
    ? el("div", { class: "veredito err" }, `Não respondida — resposta correta: ${q.correta}`)
    : acertou
      ? el("div", { class: "veredito ok" }, `Você acertou! Resposta correta: ${q.correta}`)
      : el("div", { class: "veredito err" }, `Você errou. Marcou ${escolhida}; a correta é ${q.correta}`);

  const explicacoes = letras(q).map((letra) => {
    const certa = letra === q.correta;
    return el("div", { class: "exp " + (certa ? "ok" : "err") },
      el("span", { class: "tag" }, `${letra}) ${certa ? "Correta" : "Incorreta"}`),
      letra === escolhida && el("span", { class: "sua" }, "(sua resposta) "),
      rico(explicacao(q, letra)));
  });

  return el("div", { class: "gabarito leitura" },
    veredito,
    q.comentario && el("div", { class: "comentario" }, rico(q.comentario)),
    explicacoes,
    q.revisar && el("div", { class: "aviso" },
      "Explicação a revisar: a letra correta vem do gabarito oficial, mas a justificativa não foi conferida na bibliografia."));
}

// ---------- Tela 3: resultado + gabarito completo ----------

function telaResultado() {
  pararRelogio();
  if (!estado.fim) estado.fim = Date.now();
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
        el("span", { class: "resumo" }, resumo)),
      enunciadoEl(q, false),
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
    el("h1", {}, "Resultado"),
    el("div", { class: "card placar" },
      el("div", { class: "nota" }, `${pct}%`),
      el("div", { class: "numeros" },
        numero(acertos, "acertos", "ok"),
        numero(erros, "erros", "err"),
        numero(brancos, "em branco"),
        numero(formatarTempo(duracao), "tempo total"),
        numero(formatarTempo(duracao / questoes.length), "por questão")),
      el("div", { class: "actions centro" },
        paraRefazer.length > 0 && el("button", {
          onclick: () => iniciar(embaralhar(paraRefazer), estado.modo),
        }, `Refazer as ${paraRefazer.length} que não acertei`),
        el("button", { class: "primary", onclick: () => abrir(telaConfig) }, "Novo simulado"))),
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

aplicarPrefs();
montarBarra();
abrir(telaConfig);

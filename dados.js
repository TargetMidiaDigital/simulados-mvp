// Acesso ao Supabase: autenticação, questões e histórico de simulados.
// Todas as funções devolvem Promises; erros do banco viram exceções com a
// mensagem do Supabase.

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function ouErro({ data, error }) {
  if (error) throw new Error(error.message);
  return data;
}

// ---------- Autenticação ----------

const auth = {
  async sessao() {
    return ouErro(await db.auth.getSession()).session;
  },
  async entrar(email, senha) {
    return ouErro(await db.auth.signInWithPassword({ email, password: senha })).user;
  },
  async sair() {
    ouErro(await db.auth.signOut());
  },
  // Envia o e-mail de redefinição; o link volta para o app com type=recovery
  async recuperarSenha(email) {
    ouErro(await db.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname }));
  },
  async definirSenha(senha) {
    return ouErro(await db.auth.updateUser({ password: senha })).user;
  },
  aoMudar(fn) {
    db.auth.onAuthStateChange((evento, sessao) => fn(evento, sessao));
  },
};

// ---------- Questões ----------

async function carregarQuestoes() {
  const linhas = ouErro(await db.from("questoes")
    .select("id, prova, tema, tipo, enunciado, alternativas, correta, explicacoes, comentario, revisar")
    .order("id"));
  // Remove os campos nulos para manter o mesmo formato dos arquivos questoes/*.js
  return linhas.map((l) => Object.fromEntries(Object.entries(l).filter(([, v]) => v != null)));
}

// ---------- Simulados ----------
// Um simulado é criado no banco ao começar (finalizado_em nulo = em andamento),
// cada resposta é gravada na hora e, ao terminar, o resumo é atualizado.

const CAMPOS_SIMULADO = "id, prova, modo, questoes_ids, iniciado_em, finalizado_em, tempo_ms, total, acertos, erros, brancos";

async function criarSimulado({ user_id, prova, modo, questoes }) {
  return ouErro(await db.from("simulados").insert({
    user_id, prova, modo,
    questoes_ids: questoes.map((q) => q.id),
    total: questoes.length,
  }).select(CAMPOS_SIMULADO).single());
}

async function salvarResposta(simulado_id, q, escolhida) {
  ouErro(await db.from("respostas").upsert({
    simulado_id, questao_id: q.id, tema: q.tema,
    escolhida: escolhida || null,
    acertou: escolhida === q.correta,
  }, { onConflict: "simulado_id,questao_id" }));
}

async function finalizarSimulado(estado) {
  const { id, questoes, respostas, inicio, fim } = estado;
  const acertou = (q) => respostas[q.id] === q.correta;
  ouErro(await db.from("respostas").upsert(questoes.map((q) => ({
    simulado_id: id, questao_id: q.id, tema: q.tema,
    escolhida: respostas[q.id] || null,
    acertou: acertou(q),
  })), { onConflict: "simulado_id,questao_id" }));
  ouErro(await db.from("simulados").update({
    finalizado_em: new Date(fim).toISOString(),
    tempo_ms: fim - inicio,
    acertos: questoes.filter(acertou).length,
    erros: questoes.filter((q) => respostas[q.id] && !acertou(q)).length,
    brancos: questoes.filter((q) => !respostas[q.id]).length,
  }).eq("id", id));
}

async function carregarHistorico(limite = 50) {
  return ouErro(await db.from("simulados").select(CAMPOS_SIMULADO)
    .order("iniciado_em", { ascending: false }).limit(limite));
}

// Respostas já gravadas de um simulado: { questao_id: letra }
async function carregarRespostas(simulado_id) {
  const linhas = ouErro(await db.from("respostas").select("questao_id, escolhida").eq("simulado_id", simulado_id));
  return Object.fromEntries(linhas.filter((l) => l.escolhida).map((l) => [l.questao_id, l.escolhida]));
}

async function apagarSimulado(id) {
  ouErro(await db.from("simulados").delete().eq("id", id));
}

// Acumulado de acertos por tema em todos os simulados concluídos do usuário
async function carregarDesempenho() {
  return ouErro(await db.from("desempenho_por_tema").select("tema, respondidas, acertos"));
}

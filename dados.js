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

// ---------- Histórico ----------

// Grava um simulado terminado e suas respostas; devolve o id gerado
async function salvarSimulado(estado, user_id) {
  const { questoes, respostas, modo, inicio, fim } = estado;
  const acertou = (q) => respostas[q.id] === q.correta;
  const simulado = ouErro(await db.from("simulados").insert({
    user_id,
    modo,
    questoes_ids: questoes.map((q) => q.id),
    iniciado_em: new Date(inicio).toISOString(),
    finalizado_em: new Date(fim).toISOString(),
    tempo_ms: fim - inicio,
    total: questoes.length,
    acertos: questoes.filter(acertou).length,
    erros: questoes.filter((q) => respostas[q.id] && !acertou(q)).length,
    brancos: questoes.filter((q) => !respostas[q.id]).length,
  }).select("id").single());

  ouErro(await db.from("respostas").insert(questoes.map((q) => ({
    simulado_id: simulado.id,
    questao_id: q.id,
    tema: q.tema,
    escolhida: respostas[q.id] || null,
    acertou: acertou(q),
  }))));
  return simulado.id;
}

async function carregarHistorico(limite = 10) {
  return ouErro(await db.from("simulados")
    .select("id, modo, iniciado_em, tempo_ms, total, acertos, erros, brancos")
    .not("finalizado_em", "is", null)
    .order("iniciado_em", { ascending: false })
    .limit(limite));
}

// Acumulado de acertos por tema em todos os simulados do usuário
async function carregarDesempenho() {
  return ouErro(await db.from("desempenho_por_tema").select("tema, respondidas, acertos"));
}

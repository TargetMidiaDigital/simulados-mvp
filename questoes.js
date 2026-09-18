// Banco de questões do simulado. Os arquivos em questoes/ adicionam questões
// a esta lista com QUESTOES.push(...).
//
// Formato de cada questão:
//   id           identificador único
//   prova        de onde veio a questão (ex.: "DPC 2008"); aparece ao lado do tema
//   tema         assunto (aparece no topo da questão)
//   enunciado    texto da pergunta (quebras de linha são preservadas)
//   alternativas { A: "...", B: "...", ... }  (4 ou 5 alternativas)
//   correta      letra da alternativa correta
//   explicacoes  { A: "...", ... } motivo de cada alternativa estar certa/errada
//   tipo         opcional: "sequencia" (V/F, associação, lacunas) ou
//                "afirmativas" (I, II, III...). Nesses tipos a explicação de
//                cada alternativa é gerada pelo app a partir do gabarito, e a
//                análise item a item fica em `comentario`.
//   comentario   opcional: análise geral mostrada antes das alternativas
//   revisar      opcional: true quando a justificativa não foi conferida na
//                bibliografia (a letra correta é sempre a do gabarito oficial)
const QUESTOES = [];

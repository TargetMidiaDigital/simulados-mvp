// Prova escrita DPC 2011 (PSCPP/2011 – Prova Amarela) — questões 1 a 25.
// Letra correta: gabarito oficial (texto em vermelho no PDF). Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2011-01",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) A manobra “Dieudonne Spiral” identifica as características de estabilidade direcional de um navio.
II) A manobra de “Pull out” provê indicações das qualidades de um navio em realizar uma curva de giro.
III) A manobra “Kempf Overshoot” provê indicações da habilidade de um leme em controlar um navio.
IV) A manobra “Turning” identifica as características de estabilidade direcional de um navio.
V) A manobra “Bech Reverse Spiral” identifica, principalmente, as características de estabilidade direcional de um navio.`,
    alternativas: {
      A: "Apenas as afirmativas I) e III) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e V) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e V) são verdadeiras.",
      E: "Apenas as afirmativas IV) e V) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — a espiral de Dieudonné (espiral direta) serve para levantar a curva taxa de guinada × ângulo de leme e revelar a estabilidade direcional (laço de histerese nos navios instáveis).
II) Falsa — o “pull-out” (levar o leme a meio após uma guinada e observar se a taxa de guinada cai a zero) é um teste rápido de ESTABILIDADE DIRECIONAL, e não da qualidade da curva de giro.
III) Verdadeira — a manobra de Kempf (zig-zag/overshoot) indica a habilidade do leme em controlar o navio (capacidade de iniciar e de quebrar a guinada).
IV) Falsa — a manobra de “turning” (curva de giro) mede a capacidade de giro (avanço, afastamento, diâmetro tático), e não a estabilidade direcional.
V) Verdadeira — a espiral reversa de Bech obtém a mesma curva da espiral de Dieudonné, inclusive o trecho instável, sendo também um teste de estabilidade direcional.`,
    explicacoes: {
      A: "I) e III) são verdadeiras, mas a alternativa deixa de fora a V): a espiral reversa de Bech também é teste de estabilidade direcional.",
      B: "Inclui a II), que é falsa (o “pull-out” avalia estabilidade direcional, não a curva de giro), e omite a III), que é verdadeira.",
      C: "Inclui a II), que é falsa, e omite as verdadeiras I) e V).",
      D: "Correta: as espirais de Dieudonné (I) e de Bech (V) identificam a estabilidade direcional, e o zig-zag de Kempf (III) indica a habilidade do leme em controlar o navio. “Pull-out” (II) e “turning” (IV) estão com as finalidades trocadas.",
      E: "Inclui a IV), que é falsa (a curva de giro mede capacidade de giro, não estabilidade direcional), e omite as verdadeiras I) e III).",
    },
  },
  {
    id: "dpc2011-02",
    prova: "DPC 2011",
    tema: "Arte Naval",
    enunciado: "De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), para que um navio tenha equilíbrio estável é necessário que?",
    alternativas: {
      A: "O centro de gravidade ( CG ) esteja acima do metacentro ( M ).",
      B: "O centro de gravidade ( CG ) esteja abaixo do metacentro ( M ).",
      C: "O centro de gravidade ( CG ) esteja sobre o metacentro ( M ).",
      D: "A reserva de flutuabilidade seja positiva, não importando a posição do centro de gravidade ( CG ) em relação ao metacentro ( M ).",
      E: "O centro de gravidade ( CG ) esteja sobre o metacentro ( M ) e a reserva de flutuabilidade seja positiva.",
    },
    correta: "B",
    explicacoes: {
      A: "Com o CG acima do metacentro a altura metacêntrica (GM) é negativa: ao inclinar-se, o conjugado peso–empuxo tende a aumentar a banda. É o equilíbrio INSTÁVEL.",
      B: "Com o CG abaixo do metacentro, GM é positivo: qualquer inclinação gera um conjugado de endireitamento que devolve o navio à posição direita. É a condição de equilíbrio estável.",
      C: "CG coincidindo com M dá GM nulo: não há braço de endireitamento e o navio fica na posição em que for deixado. É o equilíbrio INDIFERENTE.",
      D: "Reserva de flutuabilidade diz respeito a não afundar (volume estanque acima da flutuação), não à estabilidade. Um navio com boa reserva de flutuabilidade e CG acima de M emborca.",
      E: "CG sobre (coincidindo com) M é equilíbrio indiferente, qualquer que seja a reserva de flutuabilidade.",
    },
  },
  {
    id: "dpc2011-03",
    prova: "DPC 2011",
    tema: "Navegação",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Bridge Team Management - A Practical Guide” (Captain A J Swift FNI e do Captain T J Bailey FNI - 2a edição: 2004), avistar o alinhamento (em Inglês, “transit” ou “range”) de dois objetos conspícuos pode dar ao oficial de quarto no passadiço uma rápida indicação do posicionamento do navio em relação à derrota planejada. Uma grande vantagem do uso de alinhamentos é não depender do emprego de qualquer instrumento, senão do olho humano.
Contudo, embora distâncias maiores possam ser utilizadas, para se obter máxima precisão, considera-se que a relação entre a distância do observador ao objeto mais próximo e a distância que separa os dois objetos que compõem o alinhamento não deve ser maior que:`,
    alternativas: {
      A: "Uma vez e meia.",
      B: "Duas vezes.",
      C: "Duas vezes e meia.",
      D: "Três vezes.",
      E: "Cinco vezes.",
    },
    correta: "D",
    explicacoes: {
      A: "Uma vez e meia daria um alinhamento muito sensível, mas não é o limite citado no livro, que é de 3 vezes.",
      B: "Duas vezes está dentro do limite, mas o valor máximo indicado pelo Bridge Team Management é 3 vezes.",
      C: "Duas vezes e meia não é o valor do livro; o limite citado é 3 vezes.",
      D: "Segundo o Bridge Team Management, para máxima precisão a distância do observador ao objeto mais próximo não deve exceder 3 vezes a distância entre os dois objetos do alinhamento. Quanto mais longe o observador, menos sensível fica o alinhamento (os objetos parecem enfiados mesmo com o navio fora da linha).",
      E: "Com 5 vezes o alinhamento já é pouco sensível: o navio pode afastar-se bastante da linha sem que os objetos pareçam abrir. O limite do livro é 3 vezes.",
    },
  },
  {
    id: "dpc2011-04",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `De acordo com as Regras Especiais para Evitar Abalroamento na Navegação Interior constantes da NORMAM-02/DPC, analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) As tubulações de dragagem que estiverem flutuando ou apoiadas em cavaletes deverão exibir, durante a noite e em períodos de visibilidade reduzida, uma fileira de luzes circulares brancas e, adicionalmente, mais duas luzes circulares vermelhas nos extremos das tubulações.
II) O termo “mareta” caracteriza um grupo de embarcações que navegam de forma integrada, mas não de forma rígida.
III) Em uma situação de roda a roda, uma embarcação de propulsão mecânica navegando contra a corrente terá preferência de passagem sobre uma embarcação navegando a favor da corrente.
IV) Uma barcaça atracada, que não seja em sentido paralelo à costa ou margem, deverá exibir, durante a noite e em períodos de visibilidade reduzida, duas luzes brancas sem obstrução, obrigatoriamente instaladas nas extremidades mais afastadas da costa ou margem.`,
    alternativas: {
      A: "Apenas as afirmativas I e IV são verdadeiras.",
      B: "Apenas as afirmativas II e III são verdadeiras.",
      C: "Apenas a afirmativa III é verdadeira.",
      D: "Apenas as afirmativas I e II são verdadeiras.",
      E: "Apenas a afirmativa IV é verdadeira.",
    },
    correta: "E",
    comentario: `I) Falsa (pelo gabarito oficial) — nas regras especiais da NORMAM-02 a fileira de luzes que balizam a tubulação de dragagem é de luzes AMARELAS (as duas encarnadas marcam os extremos/passagem); a afirmativa troca a cor para branca.
II) Falsa — “mareta” é a ondulação (marola/esteira) provocada pelo deslocamento de uma embarcação; o grupo de embarcações que navega de forma integrada é o comboio.
III) Falsa — é o inverso: a embarcação que navega A FAVOR da corrente (descendo o rio), por ter menor capacidade de manobra, tem a preferência de passagem sobre a que navega contra a corrente.
IV) Verdadeira — é a regra para barcaças atracadas em posição não paralela à margem: duas luzes brancas sem obstrução nas extremidades mais afastadas da margem.`,
  },
  {
    id: "dpc2011-05",
    prova: "DPC 2011",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: `Em relação às cartas sinóticas de pressão ao nível do mar, da METAREA V, analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) A ocorrência de carneiros e borrifos só pode ser observada em áreas com condições propícias a ondas desenvolvidas.
II) Isóbaras estreitas e curvas indicam ventos fortes na região.
III) Em áreas geradoras de ondas, observam-se isóbaras pouco largas e vento com persistência na mesma direção.
IV) Configuração com isóbaras longas e retilíneas indicam ocorrência de ventos muito fortes mantendo a mesma direção.
V) As direções das ondas não acompanham a circulação do vento.`,
    alternativas: {
      A: "Apenas as afirmativas II), III) e V) são verdadeiras.",
      B: "Apenas as afirmativas I), IV) e V) são verdadeiras.",
      C: "Apenas as afirmativas I), II) e V) são verdadeiras.",
      D: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Falsa — carneiros e borrifos dependem da intensidade do vento local (aparecem a partir de força 3–4 Beaufort), mesmo com pista ou duração insuficientes para o mar se desenvolver plenamente.
II) Verdadeira — o que indica vento forte é o pequeno espaçamento entre as isóbaras (forte gradiente de pressão).
III) Verdadeira — área geradora de ondas exige vento forte (isóbaras pouco espaçadas) e persistente na mesma direção, sobre uma pista.
IV) Falsa — isóbaras longas e retilíneas indicam PISTA longa com vento de direção constante; a intensidade depende do espaçamento, não do comprimento/retilinearidade das isóbaras.
V) Verdadeira (pelo gabarito oficial) — as ondas, uma vez geradas, propagam-se em linha reta (círculo máximo) para fora da área geradora, não acompanhando a curvatura da circulação do vento.`,
    explicacoes: {
      A: "Correta: II) (isóbaras apertadas = vento forte), III) (área geradora = isóbaras pouco espaçadas + vento persistente) e V) (as ondas seguem em linha reta, não acompanham a circulação do vento) são as verdadeiras, conforme o gabarito oficial.",
      B: "Inclui as falsas I) (carneiros dependem do vento local, não de mar desenvolvido) e IV) (isóbaras longas e retas indicam pista, não vento muito forte) e omite as verdadeiras II) e III).",
      C: "Inclui a falsa I) e omite a verdadeira III).",
      D: "Inclui a falsa IV) e omite a verdadeira V).",
      E: "Inclui as falsas I) e IV) e omite as verdadeiras III) e V).",
    },
  },
  {
    id: "dpc2011-06",
    prova: "DPC 2011",
    tema: "GMDSS e Comunicações",
    revisar: true,
    enunciado: "Assinale a resposta correta. Devido ao péssimo estado do mar, o Prático Carlos Araújo foi obrigado a seguir viagem em um NM que desatracou de Santos (SP). O NM é um navio SOLAS, MMSI 710325000, com dotação completa de equipamentos do GMDSS para a área marítima A3 e SES INMARSAT B e C. O plano de viagem do NM previa Salvador (BA) como porto de destino. Ficou acordado com o Comandante do NM que, se as condições meteorológicas e o estado do mar permitissem, Carlos Araújo desembarcaria para uma lancha de prático nas proximidades do Rio de Janeiro. Durante a travessia, considerando a capacidade plena de comunicações do NM, Carlos Araújo teve a possibilidade de:",
    alternativas: {
      A: "Comunicar-se com sua família pelo canal 16 do VHF, utilizando-se da RENEC.",
      B: "Acompanhar as condições e previsão do tempo por meio do Avisos aos Navegantes transmitido por estações da RENEC.",
      C: "Comunicar-se com um Prático amigo no Rio de Janeiro por meio de correio eletrônico, acertando detalhes do possível transbordo.",
      D: "Receber informações de sua Entidade de Praticagem por meio do NAVTEX.",
      E: "Comunicar-se com sua família em radiotelefonia, depois de contactar estação da RENEC pelo canal 70 do VHF-DSC.",
    },
    correta: "C",
    explicacoes: {
      A: "O canal 16 de VHF é de socorro, urgência, segurança e chamada; não pode ser usado para correspondência pública/conversa particular (o tráfego passa para um canal de trabalho).",
      B: "Condições e previsão do tempo são divulgadas pelo boletim METEOROMARINHA, não pelos Avisos aos Navegantes (que tratam de alterações em auxílios, perigos, áreas interditadas etc.).",
      C: "As estações Inmarsat B e C permitem troca de dados/mensagens, inclusive correio eletrônico, em toda a área A3 — meio adequado para acertar com um colega os detalhes do transbordo.",
      D: "O NAVTEX é um serviço de difusão (apenas recepção) de Informações de Segurança Marítima; não transmite mensagens particulares de uma entidade de praticagem (além de não ser o meio empregado no Brasil, que usa o SafetyNET).",
      E: "Pelo gabarito oficial, incorreta: o canal 70 é exclusivo para chamada seletiva digital (DSC) e as estações costeiras da RENEC não operam DSC em VHF para estabelecer correspondência pública dessa forma.",
    },
  },
  {
    id: "dpc2011-07",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Naval Shiphandling” (Crenshaw, Russel Sydnor - 4a edição: 1975), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) Em geral, o efeito na resistência ao avanço provocada por um vento de proa com velocidade de trinta nós é equivalente ao efeito provocado por uma corrente de proa de 1 (um) nó.
II) O ângulo real de ataque do leme é igual ao ângulo do leme em relação ao navio, para qualquer ângulo de inclinação do navio em relação a sua verdadeira direção de movimento.
III) O propulsor é mais eficiente quando o navio é impelido para vante e menos eficiente quando o navio é impelido para ré. Apesar disso, o empuxo gerado pelo propulsor, para uma mesma rotação, tem o mesmo valor quando o navio é propelido para vante ou para ré.
IV) Se um navio movimenta-se com a velocidade de 15 nós e tem uma esteira (“following wake”) de 3 (três) nós na vizinhança do propulsor, então a velocidade de avanço do propulsor será de 18 nós.
V) A velocidade na seção da pá de um propulsor em relação à água é igual a resultante da componente de velocidade para vante, que é igual à velocidade do navio menos a velocidade da esteira, e de uma componente tangencial devido à velocidade de rotação do propulsor, que é igual a 2πrN, sendo r o raio na seção da pá considerada e N a rpm.`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II), III) e V) são verdadeiras.",
      C: "Apenas as afirmativas III), IV) e V) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e V) são verdadeiras .",
      E: "Apenas as afirmativas II), IV) e V) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — é a regra prática de Crenshaw: um vento de 30 nós tem, grosso modo, o mesmo efeito que 1 nó de corrente (a água é muito mais densa que o ar).
II) Falsa — quando o navio se desloca com ângulo de deriva (como numa guinada), o fluxo chega oblíquo ao leme e o ângulo real de ataque é DIFERENTE (menor) do ângulo do leme em relação ao navio.
III) Verdadeira (pelo gabarito oficial) — o livro afirma que o hélice é menos eficiente a ré, mas que o empuxo para uma mesma rotação é praticamente o mesmo nos dois sentidos.
IV) Falsa — a esteira acompanha o navio; a velocidade de avanço do propulsor em relação à água é a do navio MENOS a da esteira: 15 − 3 = 12 nós.
V) Verdadeira — a velocidade na seção da pá é a resultante da componente axial (velocidade do navio − esteira) com a tangencial 2πrN.`,
    explicacoes: {
      A: "Inclui as falsas II) (o ângulo de ataque real do leme muda com o ângulo de deriva) e IV) (velocidade de avanço = 15 − 3 = 12 nós, não 18) e omite as verdadeiras III) e V).",
      B: "Inclui a falsa II) e omite a verdadeira I) (30 nós de vento ≈ 1 nó de corrente).",
      C: "Inclui a falsa IV) (a esteira se SUBTRAI da velocidade do navio) e omite a verdadeira I).",
      D: "Correta: I), III) e V) são as verdadeiras. II) erra porque o ângulo real de ataque depende do ângulo de deriva; IV) erra porque a velocidade de avanço do propulsor é 15 − 3 = 12 nós.",
      E: "Inclui as falsas II) e IV) e omite as verdadeiras I) e III).",
    },
  },
  {
    id: "dpc2011-08",
    prova: "DPC 2011",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), associe as nomenclaturas da coluna ALFA com as descrições da coluna BRAVO e assinale a opção correta:

COLUNA “ALFA”
1) AMURA
2) RESBORDO
3) ALMEIDA
4) ENORAS

COLUNA “BRAVO”
( ) Aberturas geralmente circulares praticadas nos pavimentos, por onde enfurnam os mastros.
( ) Partes curvas do costado do navio, de um e de outro bordo, junto à popa.
( ) O mesmo que bochecha.
( ) Parte do costado do navio, na popa, logo abaixo do painel e que forma com ele um ângulo obtuso ou uma curvatura.
( ) Interseção do convés resistente com o costado.
( ) Primeira fiada de chapas do forro exterior do fundo, de um e de outro bordo da quilha.`,
    alternativas: {
      A: "(–) (4) (3) (1) (–) (2)",
      B: "(4) (–) (1) (3) (–) (2)",
      C: "(2) (4) (–) (–) (3) (1)",
      D: "(1) (3) (4) (–) (2) (–)",
      E: "(3) (1) (–) (4) (2) (–)",
    },
    correta: "B",
    comentario: `Item a item:
1º Aberturas nos pavimentos por onde enfurnam os mastros → Enoras (4).
2º Partes curvas do costado junto à popa → são as ALHETAS, termo que não está na coluna ALFA (–).
3º O mesmo que bochecha → Amura (1).
4º Parte do costado na popa, logo abaixo do painel → Almeida (3).
5º Interseção do convés resistente com o costado → é a linha do trincaniz/cinta, termo que não está na coluna ALFA (–).
6º Primeira fiada de chapas do fundo, junto à quilha → Resbordo (2).`,
  },
  {
    id: "dpc2011-09",
    prova: "DPC 2011",
    tema: "Navegação",
    revisar: true,
    enunciado: "Assinale a opção correta. De acordo com o livro “Bridge Team Management - A Practical Guide” (Captain A J Swift FNI e do Captain T J Bailey FNI - 2a edição: 2004), a margem de segurança mostrará quanto o navio pode desviar-se do seu rumo e ainda permanecer em águas seguras. Como regra geral e em circunstâncias normais, a margem de segurança deve assegurar que o navio esteja em águas cuja profundidade seja maior que o calado do navio mais uma fração do próprio calado de valor igual a:",
    alternativas: {
      A: "1/3.",
      B: "1/4.",
      C: "1/5.",
      D: "1/6.",
      E: "1/8.",
    },
    correta: "C",
    explicacoes: {
      A: "1/3 (≈33%) é mais conservador do que a regra geral do livro, que é calado + 20%.",
      B: "1/4 (25%) não é o valor citado; o livro fala em calado + 20%, isto é, 1/5.",
      C: "O Bridge Team Management dá como regra geral que as margens de segurança (“no-go areas”) mantenham o navio em profundidades maiores que o calado + 20% do calado, ou seja, calado + 1/5.",
      D: "1/6 (≈17%) fica abaixo dos 20% recomendados como regra geral.",
      E: "1/8 (12,5%) fica bem abaixo dos 20% recomendados; é folga insuficiente pela regra geral do livro.",
    },
  },
  {
    id: "dpc2011-10",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Tendo como referência a NORMAM-08/DPC, responda qual das afirmativas abaixo, referentes ao serviço de rebocadores, é incorreta:",
    alternativas: {
      A: "As embarcações classificadas quanto ao serviço e/ou atividade como rebocadores, com potência propulsora instalada superior a 300HP, deverão portar um Certificado de Tração Estática (“Bollard Pull”) de acordo com instruções específicas da DPC.",
      B: "O estabelecimento do dispositivo e da quantidade de rebocadores para as manobras de atracação e desatracação é da responsabilidade exclusiva do Comandante da embarcação.",
      C: "As condições de uso de rebocadores, se de uso obrigatório ou facultativo, deverão ser estabelecidas pela Autoridade Marítima, sob coordenação da Administração do Porto (Autoridade Portuária).",
      D: "Deve ser levado em consideração que o emprego de rebocadores poderá vir a onerar inaceitavelmente a manobra, devendo este serviço apenas ser imposto se observada extrema dificuldade ou impossibilidade na manobra sem eles.",
      E: "Nas manobras de rebocadores junto à proa dos navios, é proibida a passagem do cabo de reboque arriando-o pela proa, para ser apanhado com croque pela guarnição do rebocador.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta: a NORMAM-08 exige Certificado de Tração Estática para rebocadores com potência instalada superior a 300 HP. Não é a resposta.",
      B: "Afirmação correta: pela NORMAM-08 a definição do dispositivo e da quantidade de rebocadores é responsabilidade exclusiva do Comandante (o Prático assessora). Não é a resposta.",
      C: "É a incorreta, pelo gabarito oficial: a afirmativa inverte os papéis. Na NORMAM-08 as condições de uso de rebocadores são estabelecidas pela Administração do Porto (Autoridade Portuária), sob coordenação da Autoridade Marítima — e não o contrário.",
      D: "Afirmação correta: a norma recomenda considerar o ônus do emprego de rebocadores, impondo-o somente quando houver extrema dificuldade ou impossibilidade de manobrar sem eles. Não é a resposta.",
      E: "Afirmação correta: a norma proíbe arriar o cabo de reboque pela proa para ser apanhado com croque, por expor a guarnição do rebocador a risco sob a proa do navio. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-11",
    prova: "DPC 2011",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: `Em relação à previsão do tempo divulgada pelo METEOROMARINHA para a METAREA V, analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) Ventos com direções do setor norte indicam que nessa área ainda não houve passagem de eixo do cavado e do sistema frontal associado.
II) Ondas e ventos na direção da plataforma continental e região costeira indicam aproximação de cavado.
III) A posição do eixo do cavado não pode ser identificada pela direção das vagas.
IV) Uma significativa ronda de setor dos ventos pode ser uma relevante observação para indicar a passagem de frente fria.
V) Ventos de NW são observados na aproximação de frente fria.`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e V) são verdadeiras.",
      B: "Apenas as afirmativas II), III), IV) são verdadeiras.",
      C: "Apenas as afirmativas I), II), III) são verdadeiras.",
      D: "Apenas as afirmativas I), IV) e V) são verdadeiras.",
      E: "Apenas as afirmativas III), IV) e V) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — no hemisfério sul, antes da passagem do cavado/frente fria o vento sopra do setor norte (N/NW); depois da passagem ronda para o setor sul (SW/S).
II) Falsa — ondas e ventos na direção da costa (do quadrante sul/leste) caracterizam a situação APÓS a passagem do sistema ou a circulação do anticiclone, não a aproximação do cavado, que é marcada por ventos do setor norte.
III) Falsa — como as vagas acompanham o vento local, a mudança da direção das vagas (de N/NW para SW/S) permite localizar o eixo do cavado.
IV) Verdadeira — a ronda significativa do vento (de NW para SW) é o indício clássico da passagem da frente fria.
V) Verdadeira — na aproximação da frente fria (situação pré-frontal) o vento é de NW.`,
    explicacoes: {
      A: "Inclui a falsa II) (vento e ondas em direção à costa não indicam aproximação de cavado) e omite a verdadeira IV).",
      B: "Inclui as falsas II) e III) e omite as verdadeiras I) e V).",
      C: "Inclui as falsas II) e III) e omite as verdadeiras IV) e V).",
      D: "Correta: vento do setor norte antes da passagem (I), ronda do vento na passagem da frente (IV) e NW pré-frontal (V) são as verdadeiras.",
      E: "Inclui a falsa III) (o eixo do cavado PODE ser identificado pela mudança de direção das vagas) e omite a verdadeira I).",
    },
  },
  {
    id: "dpc2011-12",
    prova: "DPC 2011",
    tema: "Código Internacional de Sinais",
    enunciado: "Assinale a opção correta. O Prático Alfredo Dias e o Praticante de Prático Marcio estão embarcados na lancha de prático que navega, durante o dia e em boas condições de visibilidade, em direção a um NM estrangeiro que comunicou, no dia anterior, ter fundeado, para aguardar vaga em terminal portuário para atracação. Quando a lancha se aproxima do NM, Alfredo e Márcio avistam, nos três mastros do navio, apenas as bandeiras nacionais regulamentares e a bandeira MIKE atopetada na adriça de BE do mastro principal do NM, concluindo que o mesmo:",
    alternativas: {
      A: "está guinando para BB.",
      B: "está guinando para BE.",
      C: "arrasta o ferro.",
      D: "suspendeu.",
      E: "manobra com dificuldade.",
    },
    correta: "D",
    explicacoes: {
      A: "“Estou guinando para bombordo” é a bandeira I (India), não a M.",
      B: "“Estou guinando para boreste” é a bandeira E (Echo), não a M.",
      C: "“Meu ferro está garrando (arrastando)” é a bandeira Y (Yankee), não a M.",
      D: "A bandeira M (Mike) significa “Minha embarcação está parada e sem seguimento”. Esse sinal só se aplica a embarcação EM MOVIMENTO (não fundeada); além disso, não se avista a marca de fundeio (esfera preta). Logo, o navio que havia fundeado já suspendeu e está parado, sem seguimento, aguardando o Prático.",
      E: "“Mantenha-se afastado, estou manobrando com dificuldade” é a bandeira D (Delta), não a M.",
    },
  },
  {
    id: "dpc2011-13",
    prova: "DPC 2011",
    tema: "Arte Naval",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) A reserva de flutuabilidade de um navio exprime-se em percentagem do volume deslocado.
II) A reserva de flutuabilidade de um navio pode referir-se a seu deslocamento, uma vez que é expressa em percentagem.
III) Nos navios mercantes, a borda livre mínima é marcada no costado para determinar a reserva de flutuabilidade.
IV) A borda livre de um navio é, em geral, mínima na popa devido ao tosamento que os navios têm.`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      E: "Apenas as afirmativas I) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — a reserva de flutuabilidade (volume estanque acima da flutuação) exprime-se em percentagem do volume deslocado.
II) Verdadeira — como é dada em percentagem, pode igualmente ser referida ao deslocamento (o peso da água que o volume de reserva deslocaria em relação ao deslocamento).
III) Verdadeira — nos mercantes a borda livre mínima (marca de borda livre/disco de Plimsoll) é marcada no costado justamente para garantir a reserva de flutuabilidade mínima.
IV) Falsa — por causa do tosamento (convés mais alto nas extremidades), a borda livre é mínima a MEIA-NAU, não na popa.`,
  },
  {
    id: "dpc2011-14",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: "As cartas eletrônicas são necessárias se o navio dispõe de um Sistema de Carta Eletrônica (ECS) ou de um Sistema de Informação e Apresentação de Carta Eletrônica (ECDIS). Da mesma forma, é mandatório que o operador esteja plenamente familiarizado com a capacidade e as limitações de uso das referidas cartas. De acordo com o contido no livro “Bridge Team Management - A Practical Guide” (Captain A J Swift FNI e Captain T J Bailey, FNI - 2a edição: 2004), assinale a opção correta:",
    alternativas: {
      A: "Existem três formatos de cartas eletrônicas, sendo duas comercializadas por órgãos governamentais e uma pela iniciativa privada.",
      B: "As cartas eletrônicas “raster” são imagens fac-símile de cartas de papel. Entretanto, nem todas as informações e símbolos das cartas de papel são apresentados, em virtude da possibilidade do operador controlar o conteúdo e a apresentação da carta.",
      C: "As cartas eletrônicas “vector” são um grande banco de dados de informações geográficas, que permitem ao operador selecionar os parâmetros desejados, para criar uma carta personalizada.",
      D: "As cartas eletrônicas “vecster” são uma cópia exata da carta de papel. A sua grande vantagem é ser familiar ao operador, por ser idêntica à carta de papel, e permitir atualizações automáticas do seu conteúdo.",
      E: "As cartas eletrônicas “raster” podem ser produzidas em vários formatos, tais como ENC, DNC, C-Map e DC.",
    },
    correta: "C",
    explicacoes: {
      A: "São DOIS os formatos de carta eletrônica: raster e vetorial (“vector”). Não existem três formatos.",
      B: "A primeira frase está certa (raster = fac-símile da carta de papel), mas a segunda não: justamente por ser uma imagem, a carta raster mostra TUDO o que há na carta de papel e o operador não pode selecionar/controlar o conteúdo — isso é característica da carta vetorial.",
      C: "Correta: a carta vetorial é um banco de dados de informações geográficas organizado em camadas, a partir do qual o operador seleciona os parâmetros (contornos de segurança, camadas de informação etc.) e gera uma apresentação personalizada.",
      D: "Não existe carta “vecster”. A cópia exata da carta de papel é a carta RASTER; o termo foi inventado para confundir.",
      E: "ENC, DNC e C-Map são formatos de cartas VETORIAIS. Os formatos raster são, por exemplo, ARCS (UKHO) e BSB (NOAA).",
    },
  },
  {
    id: "dpc2011-15",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    enunciado: `Assinale a opção correta. O navio mercante RAPUNZEL, de bandeira estrangeira, proveniente de um porto na costa leste dos Estados Unidos, com destino a Buenos Aires, sem nenhuma escala prevista, navega em águas jurisdicionais brasileiras. Inadvertidamente, o oficial de quarto de navegação passa sobre o Parcel de Manoel Luiz, sem perceber a sinalização local. Em consequência, o navio sofre danos nas obras vivas e inicia-se um alagamento que, em uma primeira análise realizada pelo Chefe de Máquinas, pode ser controlado. O leme do navio também não responde adequadamente, podendo ter sido danificado no mesmo evento. O Comandante do RAPUNZEL decide continuar viagem e entrar no canal de acesso à Baía de São Marcos, para demandar o porto de Itaqui e providenciar os reparos necessários nas obras vivas e leme do navio. Ao passar pela bóia nº 3 no canal de acesso, uma embarcação de menor porte, que vinha em sentido contrário, faz uma manobra brusca e cruza a proa do navio. O Comandante do RAPUNZEL tenta guinar, mas, devido à avaria no leme, a resposta é lenta e o navio acaba por atingir a embarcação menor. A partir daí, o alagamento do RAPUNZEL torna-se descontrolado e o navio acaba por afundar.
De acordo com o contido na NORMAM-09/DPC, a sequência cronológica dos eventos é caracterizada por:`,
    alternativas: {
      A: "Acidentes da navegação: abalroação, varação, colisão, água aberta e afundamento.",
      B: "Fatos da navegação: colisão, alagamento, arribada, alijamento e naufrágio.",
      C: "Acidentes da navegação: colisão, arribada, abalroamento, água aberta e naufrágio.",
      D: "Acidentes da navegação: abalroamento, água aberta, varação, colisão e naufrágio.",
      E: "Fatos da navegação: colisão, água aberta, alagamento, abalroação e afundamento.",
    },
    correta: "C",
    explicacoes: {
      A: "Começa por abalroação, mas o primeiro evento foi o choque com o parcel (colisão: choque com objeto que não é embarcação). Além disso não houve varação (encalhe proposital para salvar o navio).",
      B: "Todos esses eventos são ACIDENTES da navegação, não “fatos da navegação” (que são, p. ex., mau aparelhamento, recusa de socorro, alteração de rota). Também não houve alijamento (lançamento de carga ao mar).",
      C: "Correta: 1) colisão — choque do navio com o parcel (objeto fixo); 2) arribada — entrada em porto não previsto como escala (Itaqui) para reparos; 3) abalroamento — choque com outra embarcação; 4) água aberta — o alagamento que se tornou descontrolado; 5) naufrágio — o navio afundou. Todos são acidentes da navegação.",
      D: "A ordem está errada (o primeiro evento foi a colisão com o parcel, não o abalroamento) e não houve varação.",
      E: "São acidentes, não fatos da navegação; além disso a sequência omite a arribada ao porto de Itaqui.",
    },
  },
  {
    id: "dpc2011-16",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Considerando o contido no livro “Naval Shiphandling” (Crenshaw, Russel Sydnor - 4a edição: 1975), para um navio em movimento para vante, com um hélice girando no sentido horário de quem observa de fora do navio pela popa e com um só leme na linha de centro, podemos dizer que:

I) O efeito de “following wake” tende a mover a popa para______.
II) O efeito de inclinação tende a girar o navio com a proa indo para______.
III) O efeito de descarga helicoidal tende a virar a proa do navio para______.
IV) O efeito de “shallow submergence” tende a virar a popa do navio para ______.
V) O efeito de ______ é independente do arrasto (“wake”).

Assinale a opção que apresenta a sequência de preenchimento das lacunas acima de forma correta:`,
    alternativas: {
      A: "BE, BB, BB, BB, “helical discharge”.",
      B: "BB, BB, BB, BE, “shallow submergence”.",
      C: "BE, BB, BB, BE, “inclination”.",
      D: "BB, BE, BB, BE, “helical discharge”.",
      E: "BE, BB, BB, BE, “shallow submergence”.",
    },
    correta: "B",
    comentario: `Item a item (hélice de passo direito, navio a vante), conforme o gabarito oficial:
1º “Following wake” → popa para BB: a esteira é mais forte na parte alta do disco do hélice, onde as pás (que ali se movem para BE) trabalham com maior ângulo de ataque e produzem mais força; a reação leva a popa para BB.
2º Inclinação do eixo → proa para BB: com o eixo inclinado, a pá que desce (a BE) tem maior ângulo de ataque e gera mais empuxo que a que sobe (a BB); o empuxo descentrado para BE gira a proa para BB.
3º Descarga helicoidal → proa para BB: a corrente em hélice incide de forma desigual nas partes alta e baixa do leme, com resultante que leva a proa para BB.
4º “Shallow submergence” → popa para BE: com o hélice pouco imerso, as pás altas perdem eficiência (arrastam ar/rompem a superfície) e prevalecem as pás baixas, que se movem para BB; a reação leva a popa para BE (o hélice “anda” como uma roda).
5º O efeito de “shallow submergence” é o que independe da esteira (“wake”); os demais estão ligados à distribuição do fluxo que chega ao hélice.`,
  },
  {
    id: "dpc2011-17",
    prova: "DPC 2011",
    tema: "Arte Naval",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), considerando a carga de ruptura de um cabo de manilha com 24 cm de circunferência, quais as cargas de trabalho do referido cabo, em toneladas, quando não se conhece o coeficiente empírico variável segundo a espécie de cabo e o grau de torção, sob as seguintes condições, respectivamente ?

I) Melhores condições.
II) Cabo sujeito a lupadas.
III) Desfavoráveis (cabo usado com frequência).
IV) Muito desfavoráveis (se o cabo trabalha com grande velocidade de movimento).
V) Normais de serviço.`,
    alternativas: {
      A: "9,0 – 7,2 – 4,5 – 3,6 – 3,0",
      B: "9,0 – 3,0 – 4,5 – 3,6 – 7,2",
      C: "3,0 – 3,6 – 9,0 – 7,2 – 4,5",
      D: "4,5 – 3,6 – 7,2 – 9,0 – 3,0",
      E: "3,6 – 4,5 – 7,2 – 3,0 – 9,0",
    },
    correta: "B",
    comentario: `Conta que leva ao gabarito: quando não se conhece o coeficiente do cabo, a carga de ruptura é estimada pela regra prática R = (c/4)², com c em cm e R em toneladas: R = (24/4)² = 36 t.
A carga de trabalho é a de ruptura dividida pelo fator de segurança de cada condição:
I) Melhores condições → R/4 = 9,0 t.
II) Cabo sujeito a lupadas → R/12 = 3,0 t.
III) Desfavoráveis (uso frequente) → R/8 = 4,5 t.
IV) Muito desfavoráveis (grande velocidade) → R/10 = 3,6 t.
V) Normais de serviço → R/5 = 7,2 t.
(Os fatores 4, 5, 8, 10 e 12 são os que reproduzem exatamente os valores do gabarito; confira na bibliografia.)`,
    explicacoes: {
      A: "Traz os cinco valores em ordem decrescente, mas a ordem pedida não é essa: a II) (lupadas) é a condição MAIS severa (3,0 t) e a V) (normais de serviço) é a segunda melhor (7,2 t).",
      B: "Correta: R = (24/4)² = 36 t; melhores condições 36/4 = 9,0; lupadas 36/12 = 3,0; desfavoráveis 36/8 = 4,5; muito desfavoráveis 36/10 = 3,6; normais 36/5 = 7,2.",
      C: "Atribui a menor carga (3,0 t) às melhores condições e a maior (9,0 t) à condição desfavorável — o inverso do lógico.",
      D: "Dá 9,0 t (a maior carga) para a condição muito desfavorável e só 4,5 t para as melhores condições — invertido.",
      E: "Dá 9,0 t para as condições normais e 3,6 t para as melhores condições; as melhores condições é que admitem a maior carga de trabalho (9,0 t).",
    },
  },
  {
    id: "dpc2011-18",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: "Assinale a opção correta. O advento da navegação por satélite, dando ao navio a possibilidade de determinar a sua posição em qualquer momento, foi uma das maiores conquistas da tecnologia moderna. Entretanto, falhas são suscetíveis de ocorrer e os equipamentos de posicionamento global (GPS) não estão imunes a isso. De acordo com o contido no livro “Bridge Team Management - A Practical Guide” (Captain A J Swift FNI e Captain T J Bailey, FNI - 2a edição: 2004), uma excelente forma de verificar o correto funcionamento do GPS, quando navegando próximo a costa, é comparar suas informações com as obtidas pela:",
    alternativas: {
      A: "Navegação inercial.",
      B: "Navegação doppler.",
      C: "Navegação batimétrica.",
      D: "Navegação por segmentos capazes.",
      E: "Navegação paralela indexada.",
    },
    correta: "E",
    explicacoes: {
      A: "Navegação inercial não é recurso normal de navios mercantes nem é a técnica recomendada pelo livro para monitorar o GPS junto à costa.",
      B: "O odômetro/sonar doppler fornece velocidade, não uma verificação independente e imediata da posição em relação à derrota.",
      C: "A navegação batimétrica (linhas de sondagem) é um recurso auxiliar, de baixa precisão; não é a técnica citada no livro para conferir o GPS.",
      D: "Segmentos capazes exigem medir ângulos horizontais e plotar; não é o método contínuo e imediato que o livro recomenda.",
      E: "O Bridge Team Management recomenda a paralela indexada (“parallel indexing”) no radar: é um método contínuo, independente do GPS, que mostra de imediato se o navio está se afastando da derrota planejada — excelente para verificar o GPS quando próximo à costa.",
    },
  },
  {
    id: "dpc2011-19",
    prova: "DPC 2011",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: `O navio trafegava por um canal navegável nas AJB quando o prático consultou o relógio e verificou que eram 17h43min, momento exato em que um sinal lateral do referido canal, de estrutura cilíndrica na cor verde, encontrava-se pelo través de boreste da embarcação.
Às 17h57min, o navio passou por outro sinal lateral do canal, que tinha como característica uma estrutura na cor encarnada com uma faixa larga horizontal verde.
Após 10 minutos, o prático avistou um sinal náutico que tinha como marca de tope duas esferas pretas, uma sobre a outra. A partir deste momento, com a chegada do ocaso e a presença de uma lua em quarto minguante, os sinais náuticos passaram a ser identificados por seus sinais luminosos.
Às 18h12min, o prático avistou um sinal luminoso com a seguinte característica: luz branca com grupo de 9 (nove) emissões rápidas a cada 15 (quinze) segundos.
De acordo com o contido na NORMAM-17/DHN, assinale a opção correta:`,
    alternativas: {
      A: "Às 17h57min, o navio passou por um sinal lateral de canal preferencial a boreste.",
      B: "Às 18h07min, o sinal avistado era um sinal estabelecido nas proximidades ou sobre um perigo considerado isolado que não tem águas navegáveis em toda a sua volta.",
      C: "O sinal lateral pelo qual o navio passou às 17h43min pode apresentar um número ímpar na cor branca.",
      D: "Às 18h12min, o prático avistou um sinal cardinal oeste que, durante o período diurno, apresenta uma estrutura pintada de amarelo com uma faixa larga horizontal preta no meio.",
      E: "Se, às 18h07min, o por do sol já tivesse ocorrido, o sinal náutico avistado pelo prático nesse momento apresentaria as seguintes características: sinal luminoso, luz encarnada, com grupo de 2 (dois) lampejos a cada 5 (cinco) ou 10 (dez) segundos.",
    },
    correta: "D",
    explicacoes: {
      A: "Na Região B da IALA (Brasil), estrutura encarnada com faixa larga horizontal verde é o sinal de canal preferencial a BOMBORDO (sinal de boreste modificado). O de canal preferencial a boreste é verde com faixa encarnada.",
      B: "A marca de tope de duas esferas pretas é o sinal de perigo isolado, que por definição TEM águas navegáveis em toda a sua volta.",
      C: "Pelo gabarito oficial, incorreta: o sinal verde (cilíndrico) é o sinal lateral de bombordo; a NORMAM-17 não prevê para ele a identificação descrita (número ímpar na cor branca) — confira na norma a regra de numeração e a cor dos caracteres.",
      D: "Correta: luz branca com 9 emissões rápidas a cada 15 s — Q(9)15s — é o ritmo do sinal cardinal OESTE (9 = posição do 9 no relógio), cuja estrutura é amarela com uma faixa larga horizontal preta no meio (marca de tope: dois cones unidos pelos vértices).",
      E: "A luz do sinal de perigo isolado é BRANCA, grupo de 2 lampejos — Lp(2) B — e não encarnada.",
    },
  },
  {
    id: "dpc2011-20",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    enunciado: `De acordo com o contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) A resistência ao avanço total de um navio pode ser considerada como composta pela “frictional resistance”; “wave-making resistance”; “eddy-resistance”; “viscous pressure drag”; “separation resistance”; “wave-braking resistance”; e “air and wind resistance”.
II) A resistência ao atrito (“frictional resistance”) representa cerca de 50% da resistência total em navios de baixa velocidade e cerca de 80 a 85% em navios de alta velocidade.
III) A resistência a ondas (“wave-making resistance”) é a força resultante da atuação das pressões do fluido tangencialmente em toda a extensão do casco.
IV) A resistência ao atrito (“frictional resistance”) é a força resultante da atuação das pressões do fluido tangencialmente em toda a extensão do casco.
V) A maior parcela da resistência de ondas (“wave-making resistance”) é gerada pelas partes do casco próximas à marca da linha d’água de águas calmas.`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I), IV) e V) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas III), IV) e V) são verdadeiras.",
      E: "Apenas as afirmativas I) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — é a decomposição da resistência total apresentada no PNA (atrito, formação de ondas, turbilhões/pressão viscosa/separação, quebra de ondas e resistência do ar/vento).
II) Falsa — os percentuais estão INVERTIDOS: o atrito responde por cerca de 80–85% da resistência total em navios lentos e por cerca de 50% em navios rápidos (nestes cresce a parcela de ondas).
III) Falsa — a resistência de formação de ondas resulta das pressões NORMAIS ao casco; forças tangenciais caracterizam o atrito.
IV) Verdadeira — a resistência friccional é a resultante das tensões tangenciais (cisalhamento) do fluido ao longo de toda a superfície molhada.
V) Verdadeira — a geração de ondas concentra-se nas partes do casco próximas à superfície livre (linha d’água).`,
    explicacoes: {
      A: "Inclui as falsas II) (percentuais invertidos: 80–85% nos navios lentos e ~50% nos rápidos) e III) (ondas vêm de pressões normais, não tangenciais) e omite as verdadeiras IV) e V).",
      B: "Correta: I) (componentes da resistência total), IV) (atrito = forças tangenciais no casco) e V) (ondas geradas principalmente junto à linha d’água) são as verdadeiras.",
      C: "As duas afirmativas citadas, II) e III), são justamente as falsas.",
      D: "Inclui a falsa III) e omite a verdadeira I).",
      E: "I) e IV) são verdadeiras, mas a alternativa deixa de fora a V), também verdadeira.",
    },
  },
  {
    id: "dpc2011-21",
    prova: "DPC 2011",
    tema: "Arte Naval",
    enunciado: "De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), como é denominada a manobra efetuada quando se quer manter o navio com a proa chegada ao vento para aguentar o mau tempo, com pouco segmento, mas abatendo consideravelmente e formando uma esteira de calma ?",
    alternativas: {
      A: "Correr com o tempo.",
      B: "Abater.",
      C: "Rocegar.",
      D: "Derivar.",
      E: "Por o navio à capa.",
    },
    correta: "E",
    explicacoes: {
      A: "Correr com o tempo é o oposto: navegar com o mar e o vento pela popa ou alheta, fugindo do temporal, e não com a proa chegada ao vento.",
      B: "Abater é o navio desviar-se lateralmente do rumo, para sotavento, por efeito do vento; é um efeito, não a manobra de aguentar o mau tempo.",
      C: "Rocegar é procurar um objeto no fundo (ferro, amarra, cabo) arrastando uma rocega ou fateixa.",
      D: "Derivar é ser levado pela corrente (ou ficar à matroca); não é a manobra deliberada de aguentar o tempo com a proa chegada ao vento.",
      E: "Pôr o navio à capa (capear) é aguentar o mau tempo com a proa chegada ao vento/mar, com pouco seguimento, abatendo bastante e formando a barlavento uma esteira de calma que amortece as vagas.",
    },
  },
  {
    id: "dpc2011-22",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: "De acordo com o contido no livro “Bridge Team Management - A Practical Guide” (Captain A J Swift FNI e Captain T J Bailey, FNI - 2a edição: 2004), analise as afirmativas abaixo, relativas às situações em que se navega com prático a bordo, e assinale a opção incorreta:",
    alternativas: {
      A: "Após o Prático assumir o controle da manobra, passa a ser dele a responsabilidade pela segurança do navio.",
      B: "Não é mandatório que o Comandante do navio permaneça no passadiço enquanto o Prático permanecer a bordo, independente da duração dessa permanência.",
      C: "A progressão do navio deve ser monitorada enquanto o Prático estiver no controle da manobra, da mesma forma como se faz em qualquer outra situação.",
      D: "Ao chegar o Prático ao passadiço, o Comandante pode delegar o controle da manobra ao oficial de quarto, ou outro oficial, para poder inteirar-se das intenções de manobra do prático e transmitir-lhe peculiaridades e eventuais restrições do navio.",
      E: "Os práticos são profissionais empregados, basicamente, para auxiliar a navegação em áreas restritas e facilitar a aproximação ao porto, a atracação e a desatracação.",
    },
    correta: "A",
    explicacoes: {
      A: "É a incorreta: a presença do Prático NÃO exime o Comandante (nem o oficial de quarto) da responsabilidade pela segurança do navio. O Prático assessora e conduz a manobra, mas a responsabilidade permanece com o Comandante.",
      B: "Afirmação correta segundo o livro: em praticagens longas o Comandante não precisa permanecer todo o tempo no passadiço, podendo delegar a um oficial qualificado. Não é a resposta.",
      C: "Afirmação correta: a equipe de passadiço deve continuar monitorando a posição e o progresso do navio com o Prático a bordo, como em qualquer outra situação. Não é a resposta.",
      D: "Afirmação correta: o livro recomenda que o Comandante passe a manobra a um oficial para poder fazer, com calma, a troca de informações Comandante–Prático. Não é a resposta.",
      E: "Afirmação correta: é a descrição que o livro faz do emprego dos práticos. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-23",
    prova: "DPC 2011",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: "De acordo com o contido na NORMAM-17/DHN, analise as afirmativas abaixo, referentes ao balizamento lacustre e fluvial, e assinale a opção correta:",
    alternativas: {
      A: "O painel de sinalização exibirá uma cor básica de fundo cuja finalidade é oferecer o melhor contraste possível com o símbolo gráfico que contém a informação relevante para o navegante, sendo que uma das combinações previstas é painel na cor branca e símbolo na cor laranja ou encarnada.",
      B: "Basicamente, os painéis nas cores laranja ou encarnada são empregados exclusivamente em sinalização diurna, quando se necessita um contraste com um fundo de vegetação predominante.",
      C: "O sinal de bifurcação de canal é aquele que, em um painel triangular na cor preta, exibe o símbolo “Y” na cor amarela.",
      D: "O sinal de alinhamento é aquele que, instalado em pares, em margens opostas, exibe um painel quadrangular com uma faixa central, para recomendar um rumo a ser seguido pelo navegante.",
      E: "O sinal de recomendação para mudar de margem é aquele que exibe, em um painel quadrangular, duas faixas laterais representando as margens do rio, com uma seta curva na cor encarnada indicando a margem para a qual se deve seguir, conforme o caso, a partir da atual posição da embarcação.",
    },
    correta: "B",
    explicacoes: {
      A: "Pelo gabarito oficial, incorreta: a combinação descrita não é a prevista na norma. Nos painéis da sinalização fluvial o fundo laranja/encarnado leva símbolo PRETO e o fundo branco leva símbolo preto (ou o símbolo é de material retrorrefletivo para uso noturno); não há “painel branco com símbolo laranja ou encarnado”.",
      B: "Correta (gabarito oficial): os painéis laranja ou encarnados destinam-se à sinalização DIURNA, quando é preciso contrastar com o fundo de vegetação das margens; para uso noturno empregam-se painéis/símbolos com material retrorrefletivo.",
      C: "Pelo gabarito oficial, incorreta: o sinal de bifurcação usa o símbolo “Y”, mas não em painel triangular preto com símbolo amarelo; os painéis da sinalização fluvial são quadrangulares, com as cores de fundo previstas na norma.",
      D: "Os sinais de alinhamento trabalham aos pares instalados na MESMA margem (anterior e posterior, enfiados um pelo outro), e não em margens opostas.",
      E: "Pelo gabarito oficial, incorreta: o sinal de mudança de margem não tem a composição descrita (duas faixas laterais com seta curva encarnada); confira o símbolo na NORMAM-17.",
    },
  },
  {
    id: "dpc2011-24",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `Assinale a opção correta. De acordo com contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), a propulsão a jato d’água não é muito usada em navios mercantes porque:

I) Exige, para uma mesma capacidade de carga, um aumento nas dimensões do navio.
II) Diminui a manobrabilidade.
III) Para aumentar a eficiência, é necessário aumentar a área de descarga.
IV) A existência de dutos de aspiração provoca perda de velocidade da água, que terá que ser compensada pelo propulsor.
V) A máxima eficiência é, normalmente, inferior à obtida pelos propulsores convencionais.`,
    alternativas: {
      A: "II) e III) são falsas.",
      B: "I) e II) são falsas.",
      C: "Todas são verdadeiras.",
      D: "Somente a II) é falsa.",
      E: "Somente a III) é falsa.",
    },
    correta: "A",
    comentario: `Atenção: o gabarito preliminar desta questão era “D” e foi ALTERADO para “A” no gabarito definitivo.
I) Verdadeira — a bomba, os dutos e a água transportada dentro deles ocupam volume e peso a bordo; para a mesma capacidade de carga o navio precisa ser maior.
II) Falsa — o jato d’água direcionável MELHORA a manobrabilidade (dispensa leme e permite reversão por defletores); não é esse o motivo do pouco uso.
III) Falsa (pelo gabarito definitivo) — a afirmativa não corresponde ao que o PNA aponta como desvantagem; foi o reconhecimento de que a III) também é falsa que motivou a troca do gabarito de “D” para “A”.
IV) Verdadeira — as perdas nos dutos de aspiração têm de ser compensadas pela bomba/propulsor, reduzindo o rendimento.
V) Verdadeira — o rendimento máximo do jato d’água é, normalmente, inferior ao dos hélices convencionais.`,
    explicacoes: {
      A: "Correta (gabarito definitivo, alterado de D para A): são falsas a II) — o jato d’água melhora, e não diminui, a manobrabilidade — e a III); as afirmativas I), IV) e V) descrevem as desvantagens apontadas pelo PNA.",
      B: "A I) é verdadeira: dutos, bomba e a água embarcada aumentam o volume/peso e exigem navio maior para a mesma carga. Falsas são a II) e a III).",
      C: "Nem todas são verdadeiras: a II) é claramente falsa (a manobrabilidade melhora com o jato direcionável) e, pelo gabarito definitivo, a III) também.",
      D: "Era o gabarito PRELIMINAR. Foi alterado porque, além da II), a III) também é falsa.",
      E: "A II) também é falsa (o jato d’água não diminui a manobrabilidade); logo não é “somente a III)”.",
    },
  },
  {
    id: "dpc2011-25",
    prova: "DPC 2011",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "Assinale a opção incorreta. De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), o estudo das curvas de giro e dos efeitos do leme em navios e as experiências práticas demonstram que:",
    alternativas: {
      A: "Quando se dá o leme a um bordo, com o navio em marcha a vante, além da guinada da proa para este bordo, ocorrem os seguintes efeitos: a velocidade diminui, o navio abate para fora da curva, assume um ângulo de deriva e, algumas vezes, toma uma banda.",
      B: "O avanço diminui com o aumento do ângulo do leme e aumenta com a velocidade do navio.",
      C: "O tempo de evolução diminui com o aumento do ângulo do leme e da velocidade. O tempo de evolução diminui com o aumento do ângulo do leme e da velocidade.",
      D: "O ângulo de deriva aumenta com o ângulo do leme, mas diminui com o aumento da velocidade do navio.",
      E: "A velocidade angular, que era nula no começo da evolução, atinge o máximo antes da proa ter guinado noventa graus e, depois, diminui ligeiramente, tornando-se constante na parte final da curva de giro. Se for tomado o tempo de uma evolução, será observado que ele é geralmente menor quando a proa vai de zero a noventa graus do que nos quadrantes seguintes.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta: são exatamente os efeitos do leme descritos no Arte Naval (perda de velocidade, abatimento para fora da curva, ângulo de deriva e, às vezes, banda). Não é a resposta.",
      B: "Afirmação correta segundo o livro: mais leme, menor avanço; mais velocidade, maior avanço. Não é a resposta.",
      C: "Afirmação correta (a frase aparece duplicada na prova original): o tempo de evolução diminui com mais leme e com mais velocidade. Não é a resposta.",
      D: "É a incorreta, pelo gabarito oficial: segundo o Arte Naval o ângulo de deriva aumenta com o ângulo do leme, mas NÃO diminui com o aumento da velocidade (o livro o relaciona ao ângulo de leme e à forma do navio; a velocidade não o reduz).",
      E: "Afirmação considerada correta pelo gabarito oficial (reproduz o texto do livro): a velocidade angular atinge o máximo antes dos 90° e depois se estabiliza num valor ligeiramente menor. Não é a resposta.",
    },
  },
);

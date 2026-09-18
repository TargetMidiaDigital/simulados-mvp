// Prova escrita DPC 2012 (PSCPP/2012 – Prova Rosa) — questões 1 a 25 (a questão 7 foi ANULADA e não consta).
// Letra correta: gabarito oficial do PDF (texto em vermelho). Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2012-01",
    prova: "DPC 2012",
    tema: "Arte Naval",
    enunciado: `De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Tosamento é a curvatura que apresenta a cinta de um navio quando projetada sobre um plano vertical longitudinal; ele determina a configuração do convés principal e do limite superior do costado.
II) Comprimento de arqueação é a distância medida, paralelamente à linha-d’água projetada, entre os pontos mais salientes da roda de proa e do cadaste, nas partes imersas ou emersas; o gurupés, se existe, ou o leme, se eventualmente se estende para ré da popa, ou peças semelhantes, não são, geralmente, considerados.
III) Alquebramento é a curvatura da quilha, quando apresenta a convexidade para cima. Em geral ocorre como uma deformação permanente causada por fraqueza estrutural ou por avaria.
IV) Pontal é a distância vertical, medida sobre o plano diametral e a meia-nau, entre a linha reta do vau do convés principal e a linha da base moldada.
V) Comprimento de roda a roda é a distância entre as interseções do convés principal com a face de vante da roda de proa e com a face de ré do cadaste, ou com o eixo do leme, se o navio não tiver cadaste bem definido.`,
    alternativas: {
      A: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), II) e V) são verdadeiras.",
      D: "Apenas as afirmativas II) e V) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — é a definição de tosamento (ou tosado) do Arte Naval: curvatura da cinta vista de perfil, que dá a forma do convés principal e do limite superior do costado.
II) Falsa — a definição transcrita (pontos mais salientes da roda de proa e do cadaste, sem contar gurupés e leme) é a do comprimento de roda a roda, não a do comprimento de arqueação (que é medido conforme as regras de arqueação).
III) Verdadeira — alquebramento é a curvatura da quilha com a convexidade para cima (o oposto do contra-alquebramento), em geral deformação permanente por fraqueza estrutural ou avaria.
IV) Verdadeira — é a definição de pontal (moldado) do Arte Naval.
V) Falsa — a definição transcrita (interseções do convés principal com a face de vante da roda e a face de ré do cadaste, ou eixo do leme) é a do comprimento no convés, não a do comprimento de roda a roda.`,
    explicacoes: {
      A: "Combinação correta: I (tosamento), III (alquebramento) e IV (pontal) reproduzem as definições do Arte Naval; II e V trazem definições trocadas.",
      B: "Inclui a II, que é falsa (a definição dada é a do comprimento de roda a roda, não do comprimento de arqueação), e deixa de fora as verdadeiras I e III.",
      C: "Inclui a II e a V, ambas falsas (II descreve o comprimento de roda a roda; V descreve o comprimento no convés), e deixa de fora as verdadeiras III e IV.",
      D: "Cita exatamente as duas afirmativas falsas: II (definição do comprimento de roda a roda atribuída ao de arqueação) e V (definição do comprimento no convés atribuída ao de roda a roda).",
      E: "Inclui a II, que é falsa (é a definição do comprimento de roda a roda), e deixa de fora a III, que é verdadeira.",
    },
  },
  {
    id: "dpc2012-02",
    prova: "DPC 2012",
    tema: "Arte Naval",
    enunciado: "De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), as vigas e chapas longitudinais contribuem, juntamente com o chapeamento exterior do casco e o chapeamento do convés resistente, para a resistência aos esforços longitudinais exercidos quando, por exemplo, passa o cavado ou a crista de uma vaga pelo meio do navio. Assinale a opção que contenha apenas vigas e chapas longitudinais.",
    alternativas: {
      A: "Cavernas, sicordas e vaus.",
      B: "Cambotas, longarinas e hastilhas.",
      C: "Vaus, cambotas e cavernas.",
      D: "Sicordas, longarinas e trincaniz.",
      E: "Quilha, vaus e hastilhas.",
    },
    correta: "D",
    explicacoes: {
      A: "Só a sicorda é longitudinal. Cavernas e vaus são peças transversais (a caverna dá a forma do costado; o vau liga os ramos da caverna e sustenta o convés).",
      B: "Só a longarina é longitudinal. Cambotas (armação da popa) e hastilhas (parte inferior das cavernas, no fundo) são peças transversais.",
      C: "Nenhuma é longitudinal: vaus, cambotas e cavernas são todas peças da estrutura transversal.",
      D: "As três são longitudinais: sicordas (vigas longitudinais sob os conveses, ligando os vaus), longarinas (vigas longitudinais do fundo/costado) e trincaniz (fiada de chapas mais externa do convés, de proa a popa). O Arte Naval lista como vigas e chapas longitudinais: quilha, sobrequilha, longarinas, trincaniz e sicordas.",
      E: "Só a quilha é longitudinal. Vaus e hastilhas são peças transversais.",
    },
  },
  {
    id: "dpc2012-03",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: "Um navio suspendeu do Porto de São Luís com destino a Belém. Nas proximidades da foz do rio Amazonas, ainda no mar, o prático embarcou. Nessa ocasião, o navio estava com 2.500 ton de deslocamento, calado médio de 6,8 m e 4 ton/cm de variação de calado. Considerando a densidade da água salgada igual a 1,026 g/ml e da água doce 1,010 g/ml, o calado médio quando iniciar a navegação no rio Amazonas será de:",
    alternativas: {
      A: "6,4 m",
      B: "6,7 m",
      C: "6,8 m",
      D: "6,9 m",
      E: "7,2 m",
    },
    correta: "D",
    comentario: `O peso do navio não muda; ao passar para água menos densa ele precisa deslocar mais volume, portanto AFUNDA (o calado aumenta).
Variação de calado por mudança de densidade = Δ × (ρs − ρd) / (ρd × TPC)
= 2.500 × (1,026 − 1,010) / (1,010 × 4)
= 2.500 × 0,016 / 4,04
= 40 / 4,04 ≈ 9,9 cm ≈ 0,1 m
Calado no rio = 6,8 + 0,1 = 6,9 m.`,
    explicacoes: {
      A: "Errado no sentido e na grandeza: em água menos densa o navio afunda, o calado não pode diminuir — e 40 cm de variação exigiria uma diferença de densidade muito maior.",
      B: "Aplica a variação de ≈ 10 cm com o sinal trocado (6,8 − 0,1). Da água salgada para a doce o calado AUMENTA, não diminui.",
      C: "Ignora o efeito da densidade. Com o mesmo peso, o navio desloca mais volume na água de 1,010 do que na de 1,026; logo o calado não permanece igual.",
      D: "Δ×(ρs−ρd)/(ρd×TPC) = 2.500 × 0,016 / (1,010 × 4) ≈ 9,9 cm. O navio afunda cerca de 0,1 m: 6,8 + 0,1 = 6,9 m.",
      E: "O sentido está certo (aumenta), mas a grandeza não: 40 cm de afundamento corresponderia a 4 vezes a variação calculada (≈ 9,9 cm).",
    },
  },
  {
    id: "dpc2012-04",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: `De acordo com o contido sobre manobra do navio no livro “Shiphandling for the Mariner” (Daniel H. MacElrevey and Daniel E. MacElrevey – 4ª edição: 2004), analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) O diâmetro da curva de giro do navio aumenta em águas rasas.
II) O diâmetro tático do navio aumenta quando as rotações são aumentadas durante uma guinada.
III) Quando um VLCC dá uma forte guinada, há perda de cerca de 40 a 50% de seguimento quando esta guinada atingir 90 graus do rumo inicial.
IV) Para um determinado ângulo de leme e regime de máquinas, a “rate” de guinada do navio não muda quando a profundidade diminui.`,
    alternativas: {
      A: "Apenas as afirmativas I) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II) e III) são verdadeiras.",
      C: "Todas as afirmativas são verdadeiras.",
      D: "Apenas a afirmativa II é verdadeira.",
      E: "Apenas a afirmativa III é verdadeira.",
    },
    correta: "A",
    comentario: `I) Verdadeira — em águas rasas o diâmetro da curva de giro cresce sensivelmente (pode chegar ao dobro do obtido em águas profundas).
II) Falsa — aumentar as rotações durante a guinada (o “kick ahead”) aumenta o fluxo sobre o leme e REDUZ o diâmetro tático; é justamente a técnica usada para fechar a curva.
III) Falsa — pelo gabarito oficial o percentual está errado: segundo o livro, a perda de seguimento de um VLCC aos 90° de guinada é menor que 40–50% (da ordem de 25–30%).
IV) Verdadeira (gabarito oficial) — segundo o livro, para o mesmo ângulo de leme e regime de máquinas a razão de guinada praticamente não se altera com a redução da profundidade; o que aumenta é o diâmetro da curva, pois o navio “escorrega” menos de lado e avança mais.`,
    explicacoes: {
      A: "Combinação correta pelo gabarito oficial: I (diâmetro de giro maior em águas rasas) e IV (a razão de guinada não muda com a profundidade, para o mesmo leme e regime de máquinas).",
      B: "Cita justamente as duas falsas: II (aumentar rotações na guinada REDUZ o diâmetro tático) e III (a perda de seguimento do VLCC aos 90° é menor que 40–50%).",
      C: "Não podem ser todas: II é falsa (mais rotações durante a guinada fecham a curva) e III traz percentual de perda de seguimento exagerado.",
      D: "A II é falsa: o aumento de rotações durante a guinada aumenta a eficiência do leme e diminui o diâmetro tático. Além disso omite I e IV, verdadeiras.",
      E: "A III é falsa pelo gabarito: o VLCC perde seguimento numa guinada forte, mas não 40–50% já aos 90°. Além disso omite I e IV, verdadeiras.",
    },
  },
  {
    id: "dpc2012-05",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: "De acordo com o livro “Shiphandling for the Mariner” (Daniel H. MacElrevey and Daniel E. MacElrevey – 4ª edição: 2004), a folga abaixo da quilha (FAQ) é significantemente reduzida quando dois navios, interagindo entre si, demandam um canal estreito, porque o “squat” aumenta de _______ a _______ ,ou até mais, dependendo da velocidade dos navios e da distância de separação. Assinale a opção que completa corretamente as lacunas acima:",
    alternativas: {
      A: "10% / 25%",
      B: "25% / 40%",
      C: "40% / 65%",
      D: "45% / 70%",
      E: "50% / 100%",
    },
    correta: "E",
    explicacoes: {
      A: "Subestima muito o efeito: o livro fala em aumento de 50 a 100% (ou mais) do squat no cruzamento/ultrapassagem em canal estreito, não de 10 a 25%.",
      B: "Faixa inferior à do livro. O aumento citado por MacElrevey é de 50 a 100%, ou seja, o squat pode dobrar.",
      C: "Faixa inexistente no livro; o valor correto começa em 50% e chega a 100% ou mais.",
      D: "Faixa inexistente no livro; o valor correto é de 50% a 100% ou mais.",
      E: "MacElrevey: quando navios se cruzam ou ultrapassam em canal estreito, o squat aumenta de 50 a 100%, ou até mais, conforme a velocidade e a distância de separação — por isso a FAQ é significativamente reduzida nessa situação.",
    },
  },
  {
    id: "dpc2012-06",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: "Amarrar um navio com dois ferros pode ser a melhor ação em determinadas circunstâncias. De acordo com o livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004), o método normalmente empregado para largar ferros, quando com governo e seguimento adiante, perpendicularmente ao vento e à corrente é chamado de:",
    alternativas: {
      A: "Standard moor",
      B: "Fast moor",
      C: "Running moor",
      D: "Mediterranean moor",
      E: "Standing moor",
    },
    correta: "C",
    explicacoes: {
      A: "“Standard moor” não é a denominação usada para esse método; os dois métodos clássicos de amarrar a dois ferros são o running moor e o standing moor.",
      B: "“Fast moor” não é a denominação dada pelo livro a esse método de amarração a dois ferros.",
      C: "Running moor: os ferros são largados com o navio ainda com governo e seguimento ADIANTE (“running”) — larga-se o primeiro ferro, o navio segue avante pagando amarra e larga o segundo, ajustando depois as amarras para ficar entre os dois ferros.",
      D: "Mediterranean moor é a atracação de popa ao cais, com os dois ferros largados pela proa, abertos, e a popa amarrada à terra — não é o método descrito.",
      E: "No standing moor o navio larga o primeiro ferro praticamente parado e cai a RÉ (com a corrente/vento) pagando amarra para então largar o segundo; não é feito com seguimento adiante.",
    },
  },
  {
    id: "dpc2012-08",
    prova: "DPC 2012",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), a melhor opção de cabo de fibra sintética para ser utilizado como cabo de reboque é o de:",
    alternativas: {
      A: "Náilon.",
      B: "Poliéster.",
      C: "Kevlar.",
      D: "Polietileno.",
      E: "Polipropileno.",
    },
    correta: "E",
    explicacoes: {
      A: "O náilon é o mais resistente e o mais elástico dos cabos sintéticos comuns, mas absorve água, afunda e o seu grande alongamento torna a ruptura perigosa (chicoteio); pelo gabarito oficial, não é o apontado pelo Arte Naval como a melhor opção para reboque.",
      B: "O poliéster tem boa resistência e pouco alongamento, mas não flutua; não é o indicado pelo livro como melhor opção para cabo de reboque.",
      C: "O Kevlar (aramida) tem altíssima resistência, porém quase nenhuma elasticidade para absorver os trancos do reboque e não flutua; não é o indicado pelo livro.",
      D: "O polietileno flutua, mas tem menor resistência e baixo ponto de fusão; não é o apontado pelo livro como a melhor opção.",
      E: "Pelo gabarito oficial, o Arte Naval aponta o polipropileno como a melhor opção para cabo de reboque: é leve, FLUTUA (fica visível e longe dos hélices), não absorve água e tem elasticidade razoável para absorver os trancos.",
    },
  },
  {
    id: "dpc2012-09",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: `O “bow thruster” tem vantagens e desvantagens, como ocorre com qualquer outro equipamento. De acordo com o livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004), analise as afirmativas abaixo sobre “bow thruster”, identifique as verdadeiras e assinale a opção correta:

I) Está permanentemente disponível, ao contrário de rebocador.
II) Torna-se mais eficaz com o aumento da velocidade do navio.
III) Propicia bom controle lateral sem afetar o rumo.
IV) Pode ser usado para reduzir a velocidade do navio.
V) Não pode ser usado com calados muito leves.`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas II), e III) são verdadeiras.",
      E: "Apenas as afirmativas I) e IV) são verdadeiras.",
    },
    correta: "C",
    comentario: `I) Verdadeira — o thruster está sempre disponível a bordo, enquanto o rebocador precisa ser solicitado e pode não existir no porto.
II) Falsa — é o contrário: o bow thruster PERDE eficácia com o aumento da velocidade (acima de poucos nós é praticamente inútil).
III) Verdadeira — instalado no extremo da proa, dá bom controle lateral sem interferir no seguimento do navio.
IV) Verdadeira pelo gabarito oficial.
V) Falsa pelo gabarito oficial.
ATENÇÃO (revisar): na lista de vantagens e desvantagens do livro, a lembrança é de que constam como DESVANTAGENS “não pode ser usado para reduzir a velocidade do navio” e “não é utilizável com calados muito leves” — o que tornaria IV falsa e V verdadeira. Como nenhuma alternativa traz “I, III e V”, o gabarito oficial (C) foi mantido; confira no livro.`,
    explicacoes: {
      A: "Inclui a II, que é falsa (o thruster perde eficácia com o aumento da velocidade), e deixa de fora a III, verdadeira.",
      B: "Inclui a II, falsa (eficácia cai com a velocidade), e omite I e III, verdadeiras.",
      C: "Combinação do gabarito oficial: I (sempre disponível), III (bom controle lateral) e IV. Veja a ressalva sobre a IV e a V na análise das afirmativas.",
      D: "Inclui a II, falsa (o thruster é menos eficaz quanto maior a velocidade), e omite a I, verdadeira.",
      E: "Não inclui afirmativa falsa pelo gabarito, mas deixa de fora a III (bom controle lateral), que é verdadeira.",
    },
  },
  {
    id: "dpc2012-10",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: "A estabilidade direcional afeta as características de governo do navio e a alteração na “rate” de guinada quando o leme é colocado a meio. De acordo com o livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004), assinale a alternativa INCORRETA sobre a estabilidade direcional:",
    alternativas: {
      A: "Diminui quando o coeficiente de bloco aumenta",
      B: "Diminui quando a boca aumenta para um determinado comprimento (a razão comprimento/boca diminui)",
      C: "Aumenta quando a folga abaixo da quilha diminui.",
      D: "Torna-se mais positiva quando o comprimento aumenta.",
      E: "Torna-se mais positiva quando o arrasto diminui.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta: cascos mais cheios (maior coeficiente de bloco) têm menor estabilidade direcional. Não é a resposta.",
      B: "Afirmação correta: navio mais bocudo para o mesmo comprimento (menor razão L/B) é direcionalmente menos estável. Não é a resposta.",
      C: "Afirmação correta: em águas rasas (menor folga abaixo da quilha) a estabilidade direcional aumenta — o navio fica mais “preso” ao rumo. Não é a resposta.",
      D: "Afirmação correta: quanto maior o comprimento, mais positiva a estabilidade direcional. Não é a resposta.",
      E: "É a INCORRETA: a estabilidade direcional fica mais positiva quando o arrasto (trim pela popa, “drag”) AUMENTA, pois mais área lateral a ré funciona como a empenagem de uma flecha. Com menos arrasto (ou trim pela proa) o navio fica direcionalmente instável.",
    },
  },
  {
    id: "dpc2012-11",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    revisar: true,
    enunciado: "O Prático Ari dos Santos realiza uma manobra de praticagem a bordo de um navio de guerra que exibe, além de uma esfera preta na parte de vante, duas luzes circulares brancas, uma na proa e outra na popa, esta em nível mais baixo do que a da proa. Apesar da chuva pesada, Ari consegue avistar as luzes de bordos de uma embarcação que se aproxima em rumo de colisão. Considerando a situação descrita, as regras do COLREG e o contido na NORMAM-12/DPC, é correto afirmar que:",
    alternativas: {
      A: "A manobra de praticagem está sendo realizada no período noturno e o navio de guerra encontra-se fundeado.",
      B: "A faina de praticagem está sendo realizada no período diurno e o navio de guerra encontra-se fundeado.",
      C: "A faina de praticagem está sendo realizada no período noturno e o navio de guerra encontra-se amarrado a uma bóia.",
      D: "A manobra de praticagem está sendo realizada no período diurno e o navio de guerra encontra-se encalhado.",
      E: "A manobra de praticagem está sendo realizada no período diurno e o navio de guerra encontra-se “em movimento”.",
    },
    correta: "B",
    explicacoes: {
      A: "O estado (fundeado) está certo, mas não o período: a esfera preta é MARCA, e marcas são exibidas de dia (Regra 20). As luzes aparecem junto com a marca porque a chuva pesada caracteriza visibilidade restrita, quando as luzes também devem ser exibidas de dia. Além disso, pelo gabarito, com o navio fundeado o serviço em curso é tratado como “faina”, não como “manobra” de praticagem.",
      B: "Regra 30: embarcação fundeada exibe, de dia, uma esfera preta a vante e, à noite ou em visibilidade restrita, luz circular branca a vante e outra a ré, mais baixa. Marca + luzes ao mesmo tempo = período diurno com visibilidade restrita (chuva pesada — Regra 20 c). Logo: período diurno e navio fundeado; pelo gabarito oficial, o termo adequado da NORMAM-12 para o serviço nessa condição é “faina de praticagem”.",
      C: "A presença da esfera preta (marca diurna) indica período diurno, não noturno; e a sinalização descrita é a de embarcação fundeada (Regra 30).",
      D: "Embarcação encalhada exibe TRÊS esferas pretas em linha vertical e, além das luzes de fundeio, duas luzes circulares encarnadas — não é o caso descrito.",
      E: "Embarcação em movimento não exibe esfera preta nem as duas luzes circulares brancas de fundeio; exibiria luzes de mastro, de bordos e de alcançado. A sinalização descrita é de fundeio.",
    },
  },
  {
    id: "dpc2012-12",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    enunciado: `De acordo com o COLREG e com o CIS, assinale a opção que apresenta a sequência correta de preenchimento das lacunas abaixo:
Uma embarcação exibindo duas esferas pretas dispostas em linha vertical e a bandeira _________________ é uma embarcação ________________________________`,
    alternativas: {
      A: "DELTA / à matroca",
      B: "HOTEL / restrita devido a seu calado, com prático a bordo",
      C: "MIKE / sem governo, parada e sem seguimento",
      D: "OSCAR /com capacidade de manobra restrita, devido a “homem ao mar”",
      E: "WHISKEY / sem governo, requerendo rebocador",
    },
    correta: "C",
    explicacoes: {
      A: "DELTA significa “mantenha-se afastado, estou manobrando com dificuldade” — não significa “à matroca”. As duas esferas indicam embarcação sem governo, mas o significado atribuído à bandeira está errado.",
      B: "HOTEL (“tenho prático a bordo”) está certo isoladamente, mas a marca de embarcação restrita devido ao seu calado é um CILINDRO, não duas esferas pretas.",
      C: "Duas esferas pretas em linha vertical = embarcação sem governo (Regra 27 a). Bandeira MIKE = “minha embarcação está parada e sem seguimento”. As duas informações são coerentes entre si e com a descrição.",
      D: "OSCAR = “homem ao mar” está certo, mas a marca de capacidade de manobra restrita é esfera–losango (bicone)–esfera, não duas esferas.",
      E: "WHISKEY significa “solicito assistência médica”; quem solicita rebocador é a bandeira ZULU. O significado atribuído à bandeira está errado.",
    },
  },
  {
    id: "dpc2012-13",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    enunciado: "De acordo com a Regra 3 do COLREG, que trata das definições gerais:",
    alternativas: {
      A: "Duas embarcações são consideradas “no visual” quando não presente condição de visibilidade restrita.",
      B: "Uma “embarcação sem governo” é uma “embarcação com capacidade de manobra restrita”.",
      C: "O termo “em movimento” também se aplica à embarcação sob máquinas, mas parada e sem seguimento.",
      D: "Uma embarcação de pesca deve ser sempre considerada como “com capacidade de manobra restrita”.",
      E: "Uma “embarcação à vela” deve ser sempre considerada como “embarcação sem propulsão mecânica”.",
    },
    correta: "C",
    explicacoes: {
      A: "Regra 3(k): embarcações estão “no visual” somente quando uma pode ser observada VISUALMENTE da outra. A simples ausência de visibilidade restrita não basta (pode haver um obstáculo, ou a outra só ser detectada por radar).",
      B: "São definições distintas: “sem governo” (3 f) é a que, por circunstância excepcional, não consegue manobrar; “capacidade de manobra restrita” (3 g) é a limitada pela NATUREZA DO SEU TRABALHO.",
      C: "Regra 3(i): “em movimento” é toda embarcação que não está fundeada, amarrada à terra ou encalhada. Logo, a embarcação de propulsão mecânica parada e sem seguimento continua “em movimento” (tanto que a Regra 35 b prevê sinal sonoro próprio para ela).",
      D: "“Embarcação engajada na pesca” (3 d) é categoria própria e só se aplica quando está pescando com aparelhos que restringem a manobra; não é “sempre” e não se confunde com “capacidade de manobra restrita” (3 g).",
      E: "Regra 3(c): embarcação à vela é a que está sob vela DESDE QUE sua máquina propulsora, se houver, não esteja em uso. Ela pode ter propulsão mecânica — e, usando-a, passa a ser embarcação de propulsão mecânica.",
    },
  },
  {
    id: "dpc2012-14",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    enunciado: "Duas embarcações A e B navegam no visual, nas proximidades de uma área de visibilidade restrita. A embarcação B navega no rumo verdadeiro 065º, VELOC 9 nós e marca a embarcação A aos 000º relativos, 3 mn. A embarcação A navega no rumo 310º, VELOC 15 nós. De acordo com o COLREG:",
    alternativas: {
      A: "A e B devem guinar para BE.",
      B: "A deve guinar para BE e B pode manter rumo e veloc.",
      C: "B deve guinar para BE e A pode manter rumo e veloc.",
      D: "A e B podem manter rumo e veloc.",
      E: "B deve guinar para BE e A e B podem reduzir a veloc.",
    },
    correta: "D",
    comentario: `As regras de manobra (Regras 12 a 18) só obrigam alguém a manobrar quando EXISTE RISCO DE COLISÃO (Regra 7: marcação constante com distância diminuindo). Basta, portanto, verificar o movimento relativo:
Posição de A em relação a B: marcação verdadeira 065° (000° relativos com B no rumo 065°), 3 mn → 2,72 mn a E e 1,27 mn a N.
Velocidade de A (310°, 15 nós): −11,49 E / +9,64 N. Velocidade de B (065°, 9 nós): +8,16 E / +3,80 N.
Movimento relativo de A em relação a B: −19,65 E / +5,84 N → direção ≈ 286,5°, velocidade relativa ≈ 20,5 nós.
PMA (CPA) = |2,72 × 5,84 − 1,27 × (−19,65)| / 20,5 ≈ 40,8 / 20,5 ≈ 2,0 mn, atingido em ≈ 6,6 min, com A marcando ≈ 016,5° verdadeiros (cerca de 48° por BB da proa de B).
Ou seja: A está pela proa de B apenas naquele instante; como seu rumo (310°) a leva rapidamente para bombordo de B, a marcação varia de forma acentuada (de 065° para 016° em menos de 7 minutos) e A passa safa a cerca de 2 mn. Não é situação de roda a roda (os rumos 065° e 310° não são opostos — diferem de 115°; B veria o bordo de BB de A, não os dois bordos) nem há risco de colisão num cruzamento. Sem risco de colisão, ninguém é obrigado a manobrar.`,
    explicacoes: {
      A: "Guinar ambos para BE é a manobra da Regra 14 (roda a roda), que exige rumos opostos ou quase opostos COM risco de colisão. Aqui os rumos diferem de 115° (065° × 310°) e o PMA é de ≈ 2 mn: não é roda a roda e não há risco de colisão.",
      B: "A só teria de manobrar se houvesse risco de colisão e ela fosse a embarcação obrigada a manobrar. O movimento relativo mostra PMA ≈ 2 mn com marcação variando rapidamente; além disso, A vê B por seu bombordo (≈ 65° BB), de modo que nem num cruzamento seria ela a manobrar.",
      C: "Seria a solução da Regra 15 se houvesse risco de colisão (B tem A por boreste/proa). Mas a marcação de A varia de 065° para ≈ 016° em menos de 7 min e o PMA é de ≈ 2 mn: não há risco de colisão e B não precisa manobrar.",
      D: "O movimento relativo de A em relação a B tem direção ≈ 286,5° a 20,5 nós; o PMA é ≈ 2,0 mn (em ≈ 6,6 min), com a marcação abrindo rapidamente para BB de B. Sem marcação constante não há risco de colisão (Regra 7), e as regras de manobra não impõem ação: ambos podem manter rumo e velocidade.",
      E: "Não há risco de colisão (PMA ≈ 2 mn, marcação variando acentuadamente), portanto B não é obrigado a guinar. As embarcações estão no visual — não se aplica a conduta da Regra 19 para visibilidade restrita.",
    },
  },
  {
    id: "dpc2012-15",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    enunciado: "O NM Aliança Brasil, nº IMO 9000730, GMDSS A4, somente pode deixar o porto, navegando com segurança, por um canal estreito. Em determinado trecho do canal existe um serviço de transporte de passageiros e de veículos executado por barcaças de 30 m de comprimento que cruzam perpendicularmente o canal. Para evitar o abalroamento quando uma barcaça venha a interferir na passagem do N/M Aliança Brasil, o COLREG determina que:",
    alternativas: {
      A: "O NM diminua a velocidade ou corte seu seguimento, permitindo a passagem da barcaça com segurança pela sua proa.",
      B: "O NM aumente a velocidade, permitindo a passagem da barcaça com segurança pela sua popa.",
      C: "A barcaça guine e/ou reduza a velocidade, de forma a cruzar a popa do NM com segurança.",
      D: "A barcaça guine e/ou aumente a velocidade, de forma a cruzar a proa de NM com segurança.",
      E: "Que o NM e a barcaça manobrem, permitindo a passagem da barcaça com segurança pela popa do N/M.",
    },
    correta: "C",
    explicacoes: {
      A: "Inverte a obrigação: pela Regra 9(d) é a embarcação que cruza o canal que não deve atrapalhar a passagem de quem só pode navegar com segurança dentro dele. O NM não tem de parar para a barcaça passar pela sua proa.",
      B: "A Regra 9(d) não impõe manobra ao NM; aumentar a velocidade dentro de um canal estreito tampouco é conduta prevista ou segura. A obrigação de não atrapalhar é da barcaça.",
      C: "Regra 9(d): uma embarcação não deve cruzar um canal estreito se com isso atrapalhar a passagem de embarcação que só pode navegar com segurança dentro do canal. Cabe à barcaça guinar e/ou reduzir a velocidade e passar safa pela POPA do NM (evitando cruzar-lhe a proa).",
      D: "A obrigação é da barcaça, mas a forma está errada: acelerar para cruzar a PROA do NM é exatamente o que “atrapalha a passagem”, além de contrariar a boa prática de evitar cruzar a proa (Regra 15).",
      E: "A Regra 9(d) atribui a obrigação de não atrapalhar à embarcação que cruza; o NM, restrito ao canal, não é chamado a manobrar nessa determinação.",
    },
  },
  {
    id: "dpc2012-16",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    revisar: true,
    enunciado: "O Navio Petroleiro “Tamandaré” navega por um canal estreito, para atracação no Porto “Amazônia Azul”, com a Bandeira Brasileira içada no mastro da popa e a bandeira HOTEL no mastro principal, além de exibir luzes e marcas de “embarcação restrita devido ao seu calado”. O Petroleiro cumpre rigorosamente as regras do COLREG atinentes à situação reinante. O Comandante confirma com o prático que o navio aproxima-se de uma curva. O prático responde “afirmativo” e sugere:",
    alternativas: {
      A: "Parar as máquinas",
      B: "Reduzir a velocidade",
      C: "Passar a fazer soar dois apitos longos",
      D: "Manter rumo e velocidade",
      E: "Fazer soar um apito longo",
    },
    correta: "D",
    explicacoes: {
      A: "Nada na situação exige parar as máquinas: o navio já cumpre as regras (inclusive a de velocidade segura) e não há risco de colisão descrito.",
      B: "O enunciado afirma que o navio cumpre rigorosamente o COLREG, o que inclui a velocidade segura (Regra 6); a mera aproximação de uma curva não obriga a reduzir.",
      C: "Dois apitos longos não é sinal previsto para aproximação de curva (dois longos seguidos de curtos é sinal de ultrapassagem em canal, Regra 34 c; dois longos a cada 2 min é de embarcação parada em visibilidade restrita).",
      D: "Pelo gabarito oficial: o navio já cumpre rigorosamente as regras aplicáveis, e o apito longo da Regra 9(f)/34(e) só é exigido em curva ou trecho de canal onde outras embarcações possam estar OCULTAS por um obstáculo — o enunciado fala apenas em “uma curva”, sem mencionar obstrução da visão. Assim, a sugestão do prático é manter rumo e velocidade.",
      E: "É o distrator principal: o apito longo (Regra 9 f e 34 e) é exigido ao se aproximar de curva ONDE outras embarcações possam estar ocultas por obstáculo interposto. Como o enunciado não menciona essa condição, o gabarito oficial não o considerou devido.",
    },
  },
  {
    id: "dpc2012-17",
    prova: "DPC 2012",
    tema: "COLREG / RIPEAM",
    enunciado: `Quando assessorando navegação de praticagem, é comum o prático deparar-se com veleiros navegando nas proximidades. As embarcações à vela também devem cumprir o prescrito no COLREG. Assim, considerando a condição de embarcações no visual uma das outras, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Quando cada uma das embarcações à vela tiver o vento soprando de bordo diferente, a embarcação que recebe o vento por BB deverá manter-se fora do caminho da outra.
II) Quando ambas as embarcações à vela tiverem o vento soprando do mesmo bordo, a embarcação que estiver a sota-vento deverá manter-se fora do caminho da que estiver a barlavento.
III) Quando uma embarcação à vela com o vento a BB avistar outra embarcação à vela a barlavento e não puder determinar com segurança se essa outra embarcação recebe o vento por BB ou por BE, ela deverá manter-se fora do caminho dessa embarcação.
IV) Quando uma embarcação estiver navegando à vela e também usando a sua propulsão mecânica, deve exibir, durante o dia, a vante, onde melhor possa ser vista, uma marca em forma de cone, com o vértice para baixo.`,
    alternativas: {
      A: "Apenas as afirmativas I, II e III são verdadeiras.",
      B: "Apenas as afirmativas I, II e IV são verdadeiras.",
      C: "Apenas as afirmativas I, III e IV são verdadeiras.",
      D: "Apenas as afirmativas II, III e IV são verdadeiras.",
      E: "Todas as afirmativas são verdadeiras.",
    },
    correta: "C",
    comentario: `I) Verdadeira — Regra 12(a)(i): com vento por bordos diferentes, manobra a que recebe o vento por BB.
II) Falsa — Regra 12(a)(ii): com vento pelo mesmo bordo, quem manobra é a que está a BARLAVENTO; a de sota-vento tem preferência. A afirmativa inverteu.
III) Verdadeira — Regra 12(a)(iii): é o texto da regra para o caso de dúvida.
IV) Verdadeira — Regra 25(e): vela + máquina → cone com o vértice para baixo, a vante.`,
    explicacoes: {
      A: "Inclui a II, falsa (com vento pelo mesmo bordo, manobra a de BARLAVENTO, não a de sota-vento), e deixa de fora a IV, verdadeira (Regra 25 e).",
      B: "Inclui a II, falsa (a Regra 12 manda a de barlavento manter-se fora do caminho da de sota-vento), e deixa de fora a III, verdadeira.",
      C: "I, III e IV reproduzem as Regras 12(a)(i), 12(a)(iii) e 25(e). A II é falsa porque inverte barlavento e sota-vento.",
      D: "Inclui a II, falsa (inverte a Regra 12 a ii), e deixa de fora a I, verdadeira (vento por BB manobra).",
      E: "Não são todas: a II é falsa — com vento pelo mesmo bordo, a embarcação a BARLAVENTO é que deve manter-se fora do caminho da que está a sota-vento.",
    },
  },
  {
    id: "dpc2012-18",
    prova: "DPC 2012",
    tema: "Navegação",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Na navegação costeira costuma-se determinar a posição do navio por linhas de posição (LDP) simultâneas. Entretanto, quando só é possível identificar, de cada vez, um único ponto notável representado na carta náutica, o navegante vale-se da técnica de empregar LDP sucessivas, ou seja, com um intervalo de tempo considerável entre elas. Uma dessas técnicas é a chamada Série de Traub. Sobre ela, analise as afirmativas abaixo, identifique se verdadeiras (V) ou falsas (F) e assinale a opção correta:

I) É constituída por uma série de marcações relativas de valores pré-fixados.
II) É pouco utilizada por veleiros e outras pequenas embarcações, em face da falta de precisão na leitura de suas agulhas (bússolas).
III) Se os intervalos de tempo entre os pares de marcações sucessivas estiverem aumentando, significa que existe a presença de corrente empurrando o navio para a costa.
IV) A distância do navio ao objeto marcado, quando este estiver pelo través, é o dobro da distância navegada entre duas marcações consecutivas.
V) As distâncias navegadas entre duas marcações consecutivas são iguais.`,
    alternativas: {
      A: "(F) (V) (F) (V) (V)",
      B: "(V) (V) (F) (V) (F)",
      C: "(F) (F) (V) (F) (V)",
      D: "(V) (F) (V) (F) (V)",
      E: "(F) (V) (F) (F) (V)",
    },
    correta: "A",
    comentario: `A Série de Traub usa marcações POLARES cujas cotangentes diferem de 0,5 entre si (≈ 22°, 26,5°, 34°, 45°, 63,5° e 90°). Com isso, as distâncias navegadas entre marcações consecutivas são iguais, e cada uma vale a metade da distância ao objeto pelo través.
I) Falso (gabarito oficial) — a série é definida em marcações POLARES (ângulos contados da proa para o bordo do objeto), não em marcações relativas (contadas de 000° a 360°); é essa a distinção que o gabarito parece cobrar.
II) Verdadeiro (gabarito oficial) — exige leitura precisa de ângulos de valor quebrado (26,5°, 63,5°...), o que as agulhas de pequenas embarcações não permitem.
III) Falso — se a corrente empurrasse o navio para a costa, a distância ao objeto diminuiria e as marcações variariam mais depressa: os intervalos DIMINUIRIAM. Intervalos aumentando indicam afastamento da costa (ou perda de velocidade no fundo).
IV) Verdadeiro — como a diferença de cotangentes é 0,5, distância navegada = 0,5 × distância pelo través; logo, a distância pelo través é o dobro da navegada entre duas marcações.
V) Verdadeiro — é a propriedade que define a série: distâncias iguais entre marcações consecutivas.`,
  },
  {
    id: "dpc2012-19",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: "O NM Beluga navega no rumo verdadeiro (RV) 045º, em área onde a declinação magnética é 15º W. Entrando-se com o rumo magnético correspondente ao RV = 045º na tabela de desvios, verifica-se que o desvio da agulha (Dag) nessa proa é 2º E. O navio acaba de marcar o farolete no centro da ilha Profunda na marcação polar 030º BE quando se ouve o brado do timoneiro: “Fora de giro”. O oficial de quarto no passadiço, para manter o navio na derrota original, deverá ordenar ao timoneiro que, orientando-se agora pela agulha de governo, governe no rumo:",
    alternativas: {
      A: "030º",
      B: "032º",
      C: "058º",
      D: "060º",
      E: "075º",
    },
    correta: "C",
    comentario: `Conversão do rumo verdadeiro para rumo da agulha (de verdadeiro para agulha: soma-se W, subtrai-se E):
Rmg = RV + dec W = 045° + 15° = 060°
Rag = Rmg − Dag E = 060° − 2° = 058°
A marcação polar do farolete (030° BE) é um dado que não entra na conta do rumo.`,
    explicacoes: {
      A: "Aplicou a declinação com o sinal trocado (045° − 15° = 030°) e ainda esqueceu o desvio. Declinação W SOMA ao converter de verdadeiro para magnético.",
      B: "Trocou os dois sinais: 045° − 15° + 2° = 032°. De verdadeiro para agulha, W soma e E subtrai.",
      C: "Rmg = 045° + 15° (W) = 060°; Rag = 060° − 2° (E) = 058°.",
      D: "Parou no rumo magnético (045° + 15° = 060°) e esqueceu de aplicar o desvio da agulha de 2° E.",
      E: "075° é a marcação verdadeira do farolete (045° + 030° BE), não um rumo a governar. A marcação polar é dado que não influi na conversão.",
    },
  },
  {
    id: "dpc2012-20",
    prova: "DPC 2012",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `Com relação ao fenômeno da maré, analise as afirmativas abaixo, identifique se verdadeiras (V) ou falsas (F) e assinale a opção correta:

I) Marés de sizígia ocorrem quando as forças de atração do Sol e da Lua se somam.
II) Na lua cheia, a Idade da Lua é 7.
III) Com a Lua em quarto crescente ocorrem marés de águas mortas.
IV) O MLWN é adotado como nível de redução (NR) nas cartas náuticas brasileiras.
V) As forças de atração do Sol e da Lua se opõem uma vez a cada lunação.`,
    alternativas: {
      A: "(F) (V) (V) (V) (F)",
      B: "(V) (F) (V) (F) (F)",
      C: "(V) (F) (F) (F) (V)",
      D: "(V) (F) (V) (V) (F)",
      E: "(F) (V) (F) (V) (V)",
    },
    correta: "B",
    comentario: `Item a item:
1º Verdadeiro — na lua nova e na lua cheia (sizígias) Sol, Terra e Lua se alinham e as forças geradoras de maré se somam: maiores amplitudes.
2º Falso — a idade da Lua conta os dias desde a lua nova; a lua cheia ocorre por volta do dia 15 (≈ 14,8). Idade 7 corresponde ao quarto crescente.
3º Verdadeiro — nas quadraturas (quarto crescente e quarto minguante) as forças do Sol e da Lua atuam em ângulo reto e se contrapõem: marés de quadratura ou de águas mortas.
4º Falso — o NR das cartas brasileiras é a média das baixa-mares de SIZÍGIA (MLWS), não de quadratura (MLWN).
5º Falso — as forças se contrapõem DUAS vezes por lunação (no quarto crescente e no quarto minguante), assim como se somam duas vezes.`,
  },
  {
    id: "dpc2012-21",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: `Um agente de manobra e docagem estará disponível a partir das 07h15, para assessorar a manobra de praticagem de saída de dique de um graneleiro, seguida de atracação em cais do estaleiro. A bacia de evolução em frente ao dique possui a profundidade mínima cartografada de 6m. Considerando a situação apresentada e os dados abaixo, calcule entre que horários a manobra pode ser iniciada.

- Hora-legal padrão
- Maré tipo semidiurna
- Meteorologia - sem interferência nas marés
- Margem de segurança no cálculo da altura da maré - zero
- Calado - 8m (graneleiro em águas parelhas)
- Profundidade mínima admitida abaixo da quilha - 1,6m
- Tempo de faina entre o início da manobra e a saída da bacia de evolução - 30min

EXTRATO DA TÁBUA DAS MARÉS
Nível Médio = 3,43 m
Hora — Alt.(m)
03 38 — 1,0
09 43 — 5,7
15 54 — 1,1
22 00 — 5,7
04 18 — 1,1

TABELA I (fração da amplitude em função do intervalo de tempo até a preamar/baixa-mar mais próxima e da duração da enchente ou da vazante)
Intervalo de tempo (h.min) — Duração 5 40 — Duração 6 00 — Duração 6 20
1 30 — 16 — 15 — 13
1 40 — 20 — 18 — 16
1 50 — 24 — 21 — 19
2 00 — 28 — 25 — 23
2 10 — 32 — 29 — 26
2 20 — 36 — 33 — 30
2 30 — 41 — 37 — 34
2 40 — 46 — 41 — 38
2 50 — 50 — 46 — 42

TABELA II (correção da altura, em metros, em função da fração da amplitude e da amplitude)
Fração da amplitude — Amplitude 4 m — Amplitude 5 m — Amplitude 6 m
16 — 0.6 — 0.8 — 1.0
18 — 0.7 — 0.9 — 1.1
20 — 0.8 — 1.0 — 1.2
22 — 0.9 — 1.1 — 1.3
24 — 1.0 — 1.2 — 1.4
26 — 1.0 — 1.3 — 1.6
28 — 1.1 — 1.4 — 1.7
30 — 1.2 — 1.5 — 1.8
32 — 1.3 — 1.6 — 1.9
34 — 1.4 — 1.7 — 2.0
36 — 1.4 — 1.8 — 2.2
38 — 1.5 — 1.9 — 2.3
40 — 1.6 — 2.0 — 2.4
42 — 1.7 — 2.1 — 2.5`,
    alternativas: {
      A: "07h 15 - 12h 00",
      B: "07h 15 - 12h 30",
      C: "07h 15 - 13h 00",
      D: "07h 50 - 12h 50",
      E: "07h 50 - 13h 20",
    },
    correta: "A",
    comentario: `1) Altura de maré necessária: calado + folga − profundidade cartografada = 8 + 1,6 − 6 = 3,6 m.
2) A preamar útil é a das 09:43 (5,7 m). A maré pode estar, no máximo, 5,7 − 3,6 = 2,1 m abaixo da preamar.
3) Tabela II (entrada inversa): correção de 2,1 m com amplitude ≈ 5 m (enchente: 5,7 − 1,0 = 4,7 m; vazante: 5,7 − 1,1 = 4,6 m) → fração da amplitude = 42.
4) Tabela I (entrada inversa), ENCHENTE (03:38 → 09:43, duração 6h05 → coluna 6 00): fração 42 fica entre 2h40 (41) e 2h50 (46) → ≈ 2h42 antes da preamar → a maré atinge 3,6 m por volta de 09:43 − 2:42 ≈ 07:00. Como o agente só está disponível às 07h15 (quando a altura já é suficiente e a maré continua subindo), o início mais cedo possível é 07h15.
5) Tabela I, VAZANTE (09:43 → 15:54, duração 6h11 → coluna 6 20): fração 42 → 2h50 depois da preamar → a maré cai a 3,6 m por volta de 09:43 + 2:50 = 12:33.
6) A manobra leva 30 min até a saída da bacia de evolução, e a altura tem de ser suficiente até o FIM: último início = 12:33 − 0:30 ≈ 12:03 → 12h00.
Janela para INICIAR a manobra: 07h15 – 12h00.`,
    explicacoes: {
      A: "Altura necessária = 8 + 1,6 − 6 = 3,6 m (2,1 m abaixo da preamar de 5,7 m → fração 42). Na enchente, 3,6 m é atingido ≈ 07:00, mas o agente só chega às 07h15 → início às 07h15. Na vazante, a maré cai a 3,6 m ≈ 12:33; descontados os 30 min de faina, o último início é ≈ 12h00.",
      B: "O início (07h15) está certo, mas 12h30 é a hora em que a maré cai a 3,6 m (≈ 12:33), não o último horário para INICIAR: faltou descontar os 30 min de faina até a saída da bacia.",
      C: "O início está certo, mas às 13h00 a maré já está abaixo de 3,6 m (o limite é ≈ 12:33) — e ainda seria preciso descontar os 30 min de faina.",
      D: "07h50 não tem base: a altura de 3,6 m é atingida ≈ 07:00 e o limitante é só a disponibilidade do agente (07h15). 12h50 já está além do instante em que a maré cai abaixo de 3,6 m (≈ 12:33).",
      E: "Ambos os limites errados: o início possível é 07h15 (altura suficiente desde ≈ 07:00) e às 13h20 a maré já está bem abaixo dos 3,6 m necessários (limite ≈ 12:33, menos 30 min de faina).",
    },
  },
  {
    id: "dpc2012-22",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: "De acordo com o contido sobre instrumentos náuticos no livro \"Navegação: A Ciência e a Arte\" (Altineu Pires Miguens -1ª edição: 1996), analise as afirmativas abaixo e assinale a opção INCORRETA:",
    alternativas: {
      A: "A agulha eletrônica baseia seu funcionamento na medida do campo magnético terrestre, diferentemente da bússola tradicional, que utiliza a lei da atração e repulsão dos polos magnéticos.",
      B: "A alidade de pínulas, a alidade telescópica, o círculo azimutal e o taxímetro são dispositivos utilizados para medir marcações e azimutes.",
      C: "A “corrida da milha” é o processo mais comumente utilizado e o mais rigoroso para se proceder à calibragem de odômetros e velocímetros.",
      D: "Para medição de distâncias por métodos visuais  utilizam-se, dentre outros, o sextante, o telêmetro, o guarda-posto e o estaciógrafo.",
      E: "O odômetro Doppler é o único que mede a velocidade no fundo, além de poder indicar, também, velocidades muito pequenas.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta: a agulha eletrônica (fluxgate) mede o campo magnético terrestre por sensores, enquanto a agulha magnética convencional se orienta pela atração/repulsão entre polos. Não é a resposta.",
      B: "Afirmação correta: alidades, círculo azimutal e taxímetro são os instrumentos de medição de marcações e azimutes citados por Miguens. Não é a resposta.",
      C: "Afirmação correta: a corrida da milha é o processo mais usado e mais rigoroso para calibrar odômetros e velocímetros. Não é a resposta.",
      D: "É a INCORRETA: o estaciógrafo não mede distâncias — é um instrumento de PLOTAGEM, usado para marcar na carta a posição obtida por dois ângulos horizontais (segmentos capazes). Sextante (ângulo vertical), telêmetro e guarda-posto (estadímetro) é que medem distâncias visualmente.",
      E: "Afirmação correta segundo Miguens: o odômetro Doppler é o único capaz de medir velocidade em relação ao fundo e de indicar velocidades muito pequenas (útil em atracações). Não é a resposta.",
    },
  },
  {
    id: "dpc2012-23",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: `A Resolução A.817(19) da IMO define, entre outras, as abreviaturas: ECDIS - Electronic Chart Display and Information System; SENC – System Electronic Navigational Chart; e ENC - Electronic Navigational Chart.
Analise as afirmativas abaixo e assinale a opção INCORRETA.`,
    alternativas: {
      A: "O ECDIS deve mostrar a apresentação padrão a qualquer tempo, com uma única ação do operador.",
      B: "Deve ser fácil introduzir ou remover informação do “display” do ECDIS.",
      C: "As ENC e todas as suas atualizações devem ser mostradas sem qualquer degradação de suas informações.",
      D: "Não deve ser possível remover informação contida na base de dados do ECDIS.",
      E: "Quando uma carta é mostrada a primeira vez no ECDIS, ela deve prover a apresentação padrão na menor escala disponível no SENC para a área considerada.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta: o padrão de desempenho exige que a apresentação padrão (standard display) seja obtida a qualquer momento por uma única ação do operador. Não é a resposta.",
      B: "Afirmação correta: deve ser fácil acrescentar ou retirar informação da tela do ECDIS. Não é a resposta.",
      C: "Afirmação correta: a ENC e suas atualizações devem ser exibidas sem degradação do conteúdo. Não é a resposta.",
      D: "Afirmação correta: o operador pode tirar informação da TELA, mas não pode remover informação contida na base de apresentação (display base)/dados do ECDIS. Não é a resposta.",
      E: "É a INCORRETA: a Resolução A.817(19) determina que, ao ser exibida pela primeira vez, a carta apresente o standard display na MAIOR escala disponível no SENC para a área — não na menor.",
    },
  },
  {
    id: "dpc2012-24",
    prova: "DPC 2012",
    tema: "Navegação",
    revisar: true,
    enunciado: `No que diz respeito à disseminação, pela MB, de informações que contribuem para a segurança da navegação, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) O Aviso Preliminar é aquele que se destina a anunciar antecipadamente correções nas cartas náuticas que serão objeto de Avisos Permanentes.
II) Os Avisos-Rádio Náuticos de Interdição de Área Marítima são sempre classificados como NAVAREA e divulgados com cinco dias de antecedência em relação à data de início da interdição, sendo repetidos em dias alternados, até o término da interdição.
III) Os Avisos-Rádio Náuticos Locais são semanais e se referem às alterações havidas no interior de portos, seus canais de acesso e em vias navegáveis onde, normalmente, os navios somente navegam com auxílio de práticos locais.
IV) O Aviso Permanente Especial é aquele que, embora não altere cartas náuticas, destina-se a divulgar informações gerais de caráter permanente, importantes para os navegantes.
V) Os Avisos-Rádio Náuticos NAVAREA e Costeiros são transmitidos diariamente via satélite e via rádio enquanto estiverem em vigor. Contudo, caso ainda continuem em vigor após decorridas 6 semanas, passam a constar dos “Avisos aos Navegantes”, deixando, definitivamente, de ser divulgados via satélite/rádio.`,
    alternativas: {
      A: "Todas as afirmativas são verdadeiras.",
      B: "Apenas as afirmativas I, IV e V são verdadeiras.",
      C: "Apenas as afirmativas III e IV são verdadeiras.",
      D: "Apenas as afirmativas II e V são verdadeiras.",
      E: "Apenas as afirmativas I, II e III são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — o Aviso Preliminar (P) antecipa alterações que depois serão objeto de Aviso Permanente.
II) Falsa (gabarito oficial) — os avisos de interdição de área não são “sempre” NAVAREA: a classificação (NAVAREA, costeiro ou local) depende da área afetada; os detalhes de antecedência e repetição também devem ser conferidos na publicação.
III) Falsa (gabarito oficial) — os Avisos-Rádio Locais tratam, de fato, do interior de portos, canais de acesso e vias em que se navega com prático, mas não são “semanais”: são emitidos/irradiados quando necessário, enquanto em vigor.
IV) Verdadeira — é a definição de Aviso Permanente Especial.
V) Verdadeira (gabarito oficial) — NAVAREA e Costeiros são transmitidos diariamente enquanto em vigor; persistindo por mais de 6 semanas, passam a constar do folheto “Avisos aos Navegantes” e deixam de ser irradiados.`,
    explicacoes: {
      A: "Não são todas: pelo gabarito oficial II (“sempre NAVAREA”) e III (“são semanais”) são falsas.",
      B: "Combinação do gabarito oficial: I (Aviso Preliminar), IV (Aviso Permanente Especial) e V (regra das 6 semanas para NAVAREA e Costeiros) são verdadeiras.",
      C: "Inclui a III, falsa (os avisos locais não são “semanais”), e deixa de fora I e V, verdadeiras.",
      D: "Inclui a II, falsa (avisos de interdição de área não são “sempre” NAVAREA), e deixa de fora I e IV, verdadeiras.",
      E: "Inclui II e III, ambas falsas pelo gabarito, e deixa de fora IV e V, verdadeiras.",
    },
  },
  {
    id: "dpc2012-25",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: "O NM Itaperi suspendeu do porto de Salvador com destino ao porto de Cabedelo e, após o desembarque do prático, passou a navegar com uma velocidade na superfície de 18 nós. Ao longo da derrota estabelecida em direção ao porto de destino, o NM passou pelos pontos A e B, distantes entre si de 80 mn. Considerando-se que a velocidade da Corrente do Brasil é de 2 nós no trecho por onde navega o NM, e que o odômetro foi zerado ao passar pelo ponto A:",
    alternativas: {
      A: "A duração da travessia entre os pontos A e B foi de cinco (5) horas. Ao passar no ponto B o odômetro registrava 90 mn.",
      B: "A duração da travessia entre os pontos A e B foi de cerca de quatro (4) horas e vinte e sete minutos. Ao passar no ponto B o odômetro registrava 80 mn.",
      C: "A duração da travessia entre os pontos A e B foi de quatro (4) horas. Ao passar no ponto B o odômetro registrava 72 mn.",
      D: "A duração da travessia entre os pontos A e B foi de cinco (5) horas. Ao passar no ponto B o odômetro registrava 80 mn.",
      E: "A duração da travessia entre os pontos A e B foi de quatro (4) horas. Ao passar no ponto B o odômetro registrava 90 mn.",
    },
    correta: "A",
    comentario: `A Corrente do Brasil flui para o SUL/SW ao longo da costa. De Salvador para Cabedelo (PB) o navio ruma para o NORTE/NE, portanto com a corrente pela PROA.
Velocidade no fundo = 18 − 2 = 16 nós → tempo = 80 mn / 16 nós = 5 h.
O odômetro mede a distância percorrida NA SUPERFÍCIE (em relação à água): 18 nós × 5 h = 90 mn.`,
    explicacoes: {
      A: "Corrente do Brasil (para SW) contrária ao rumo Salvador→Cabedelo: velocidade no fundo = 18 − 2 = 16 nós → 80/16 = 5 h. O odômetro registra a distância na superfície: 18 × 5 = 90 mn.",
      B: "Ignora a corrente (80/18 ≈ 4h27) e supõe que o odômetro mede distância no fundo. A corrente contrária reduz a velocidade no fundo para 16 nós, e o odômetro mede em relação à água.",
      C: "Considera a corrente A FAVOR (18 + 2 = 20 nós → 4 h; 18 × 4 = 72 mn). A Corrente do Brasil flui para o sul; rumando para o norte ela é contrária.",
      D: "O tempo está certo (5 h), mas o odômetro não registra a distância no fundo (80 mn): ele mede a distância na superfície, 18 × 5 = 90 mn.",
      E: "Combinação incoerente: 4 h pressupõe corrente a favor, e nesse caso o odômetro marcaria 72 mn, não 90. O correto é corrente contrária: 5 h e 90 mn.",
    },
  },
);

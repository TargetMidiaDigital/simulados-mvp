// Prova escrita DPC 2006 (Processo Seletivo de Praticante de Prático) — questões 1 a 24.
// Letra correta: gabarito oficial do PDF. Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2006-01",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `Associe os termos náuticos da coluna A com a coluna B, com relação aos termos náuticos referentes aos cabos e sua manobra, de acordo com Maurílio M. Fonseca, no livro Arte Naval:

COLUNA A
1) Desgurnir
2) Desengastar
3) Engasgar
4) Enrascar
5) Recorrer

COLUNA B
( ) Retirar cocas.
( ) Desfazer uma coca que tenha mordido no gorne de um poleame.
( ) Deixar que arriem os cabos ou a amarra para aliviá-los.
( ) Embaraçar cabos entre si, de modo a impedi-los de trabalhar regularmente.
( ) Passar um cabo por um gorne ou retorno, impedindo-o de correr.
( ) Tirar os cabos de laborar dos lugares onde estão trabalhando.`,
    alternativas: {
      A: "(1) (-) (3) (5) (4) (2)",
      B: "(-) (2) (5) (4) (3) (1)",
      C: "(2) (4) (1) (-) (5) (3)",
      D: "(5) (3) (2) (1) (-) (4)",
      E: "(2) (5) (-) (3) (1) (4)",
    },
    correta: "B",
    comentario: `Item a item:
1º Retirar cocas → nenhum termo da coluna A (-).
2º Desfazer coca mordida no gorne → Desengastar (2).
3º Deixar arriar cabos/amarra para aliviá-los → Recorrer (5).
4º Embaraçar cabos entre si → Enrascar (4).
5º Cabo preso no gorne, impedido de correr → Engasgar (3).
6º Tirar os cabos de laborar de onde trabalham → Desgurnir (1), o oposto de "gurnir".`,
  },
  {
    id: "dpc2006-02",
    tema: "Código Internacional de Sinais",
    enunciado: "Bandeira retangular nas cores preto, amarelo, azul e encarnado em quatro triângulos, formados pelas diagonais, sendo preto o triângulo junto à tralha, amarelo o superior, azul o da extremidade e encarnado o inferior, de acordo com o Código Internacional de Sinais (CIS), significa:",
    alternativas: {
      A: "Embarcação se dirigindo para um perigo.",
      B: "Embarcação deve suspender a execução do que está fazendo e observar os sinais a serem mostrados.",
      C: "Embarcação deve parar imediatamente.",
      D: "Embarcação solicitando rebocador.",
      E: "Embarcação solicitando assistência médica.",
    },
    correta: "D",
    explicacoes: {
      A: "\"Você está se dirigindo para um perigo\" é a bandeira U (Uniform), quadriculada em encarnado e branco.",
      B: "\"Suspenda o que está fazendo e observe meus sinais\" é a bandeira X (X-ray), branca com cruz azul.",
      C: "\"Pare sua embarcação imediatamente\" é a bandeira L (Lima), quadriculada em amarelo e preto.",
      D: "A bandeira descrita é a Z (Zulu), de quatro triângulos preto, amarelo, azul e encarnado, cujo significado isolado é \"Solicito rebocador\".",
      E: "\"Solicito assistência médica\" é a bandeira W (Whiskey), azul, branca e encarnada em retângulos concêntricos.",
    },
  },
  {
    id: "dpc2006-03",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: "Na interpretação de uma carta sinótica de pressão ao nível do mar, o navegante identifica em uma região de ocorrência de cavado, no oceano Atlântico Sul, uma área com vento forte de SW, quando observa-se, de acordo com Lobo e Soares, no livro “Meteorologia e Oceanografia”, as seguintes características:",
    alternativas: {
      A: "Na circulação de ar frio, configuração isobárica com estreito espaçamento.",
      B: "Circulação anticiclônica do oceano para a costa.",
      C: "Circulação horizontal com isóbaras paralelas.",
      D: "Circulação de ar quente com acentuado gradiente horizontal de pressão.",
      E: "Circulação horária com isóbaras retilíneas em longa pista.",
    },
    correta: "A",
    explicacoes: {
      A: "No Atlântico Sul, o vento de SW sopra no lado do ar frio do cavado (retaguarda da frente fria). Vento forte exige gradiente de pressão acentuado, isto é, isóbaras com espaçamento estreito.",
      B: "Circulação anticiclônica é característica de centro de alta pressão, não de cavado, e está associada a gradientes fracos e ventos mais brandos.",
      C: "Isóbaras paralelas, por si só, não indicam vento forte: o que determina a intensidade é o espaçamento entre elas.",
      D: "O gradiente acentuado está certo, mas o setor de ar quente do cavado no hemisfério sul tem ventos do quadrante norte (N/NW), não de SW.",
      E: "Isóbaras retilíneas em longa pista descrevem condição de geração de ondas (pista de vento), não a assinatura do vento forte de SW no ar frio do cavado.",
    },
  },
  {
    id: "dpc2006-04",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: "O Prático Roberto Carlos estava navegando em um rio quando avistou uma sinalização náutica instalada na margem direita, com as seguintes características: cruz na cor preta em um painel quadrangular na cor laranja, com o braço horizontal visivelmente mais fino. De acordo com a publicação da DHN denominada Lista de Sinais Cegos, a referida sinalização náutica é um sinal de recomendação para:",
    alternativas: {
      A: "navegar junto à margem.",
      B: "navegar no meio do rio.",
      C: "reduzir velocidade.",
      D: "mudar de margem.",
      E: "indicar apreciável tráfego entre as margens.",
    },
    correta: "E",
    explicacoes: {
      A: "A recomendação de navegar junto à margem tem símbolo próprio na sinalização fluvial, diferente da cruz de braço horizontal fino.",
      B: "A recomendação de navegar no meio do rio é indicada por outro símbolo (não pela cruz).",
      C: "A cruz com braço horizontal mais fino não é o sinal de redução de velocidade.",
      D: "A mudança de margem é indicada por outro símbolo (em forma de X), não pela cruz de braços desiguais.",
      E: "A cruz preta com braço horizontal mais fino, em painel laranja, representa o cruzamento da rota do navio (braço grosso) com um tráfego transversal (braço fino): alerta para apreciável tráfego entre as margens.",
    },
  },
  {
    id: "dpc2006-05",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `O Prático Sacramento, da asa do passadiço do navio mercante, observou o movimento turbulento da água nas proximidades do casco, em uma camada limite que aumenta em extensão, a partir da proa para a popa. Sacramento percebeu que existe algum tipo de troca de energia entre o casco e o meio fluido. Esta energia é suprida pelo sistema propulsivo do navio. Sacramento compreendeu que mantendo a rotação e velocidade do navio, em um canal varrido, podia verificar a presença de correntes longitudinais, conforme a camada limite se alargava ou se estreitava. Sacramento, então, passou a fazer uso constante dessa observação em suas manobras.
A força de resistência observada por Sacramento é:

I) Residual.
II) Proporcional ao volume de carena.
III) Friccional.
IV) Equivalente a 50% da resistência total do navio, quando em baixas velocidades.

Considerando as opções acima, assinale a alternativa correta:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas a afirmativa III) é verdadeira.",
      E: "Apenas a afirmativa IV) é verdadeira.",
    },
    correta: "D",
    comentario: `I) Falsa — a resistência residual é a de formação de ondas e de forma; o que ocorre na camada limite é atrito.
II) Falsa — a resistência friccional é proporcional à superfície molhada, não ao volume de carena.
III) Verdadeira — a camada limite turbulenta junto ao casco é a manifestação da resistência friccional (viscosa).
IV) Falsa — em baixas velocidades a resistência friccional é a parcela amplamente dominante (da ordem de 80–90% do total), não 50%.`,
  },
  {
    id: "dpc2006-06",
    tema: "Rebocadores",
    tipo: "sequencia",
    enunciado: `Coloque (F) falso ou (V) verdadeiro nas afirmativas abaixo, em relação a propulsores e sistemas de governo empregados em rebocadores, de acordo com o livro “Tug Use in Port”, recomendado pela Circular da IMO MSC 1101:

( ) Single screw tugs are usually best to some alongside for assistance of a submarine.
( ) An open fixed pitch propeller develops more thrust astern than an open controllable pitch propeller when fitted in a conventional tug going full astern.
( ) The nozzle type “backing nozzle” has been developed to give better efficiency for a tug going astern, which results in a little less efficiency going ahead.
( ) Nozzles increase the efficiency of the propeller and increase the steering capabilities of a tug.
( ) The performance of a becker rudder when the tug has speed astern is better as that of an unflapped rudder.`,
    alternativas: {
      A: "(F) (V) (V) (F) (V)",
      B: "(V) (F) (V) (V) (V)",
      C: "(F) (F) (F) (V) (V)",
      D: "(V) (V) (V) (F) (F)",
      E: "(V) (F) (F) (V) (F)",
    },
    correta: "D",
    comentario: `Item a item:
1º Verdadeiro — segundo o livro, rebocadores de um só hélice costumam ser os mais adequados para atracar a contrabordo de submarinos.
2º Verdadeiro — o hélice de passo fixo aberto rende mais empuxo a ré do que o de passo controlável (cujas pás são otimizadas para vante).
3º Verdadeiro — o "backing nozzle" melhora o rendimento a ré à custa de pequena perda a vante.
4º Falso — o tubulão aumenta o empuxo/eficiência, mas o tubulão fixo reduz a capacidade de governo do rebocador.
5º Falso — com seguimento a ré o leme Becker (com flap) não é melhor que o leme convencional.`,
  },
  {
    id: "dpc2006-07",
    tema: "Rebocadores",
    enunciado: "O Prático Aroldo está a bordo de um rebocador convencional, parado em relação ao fundo, equipado com dois propulsores de passo fixo e dois lemes. Será necessário mover a embarcação somente com movimento lateral para boreste, sem alterar o rumo. Sabendo-se que as forças ambientais são desprezíveis, qual dos comandos abaixo pode mover a embarcação na deriva lateral desejada, de acordo com o livro “Tug Use in Port”, recomendado pela Circular da IMO MSC 1101?",
    alternativas: {
      A: "máquina do propulsor de BE para ré, máquina do propulsor de BB para vante, lemes para BB.",
      B: "máquina do propulsor de BE para ré, máquina do propulsor de BB parada, leme de BB para BE e leme de BE a meio.",
      C: "máquina do propulsor de BE para vante, máquina do propulsor de BB para ré e lemes para BE.",
      D: "máquina do propulsor de BE parada, máquina do propulsor de BB para ré e lemes para BB.",
      E: "máquina do propulsor de BE para ré, máquina do propulsor de BB para ré, leme de BB para BB e leme de BE para BE.",
    },
    correta: "A",
    explicacoes: {
      A: "BB adiante + BE atrás formam um binário que leva a proa para boreste sem dar seguimento. Os lemes para BB, banhados pela descarga do hélice de BB (que está adiante), empurram a popa para boreste e anulam a guinada. Proa e popa vão para boreste: deslocamento lateral puro.",
      B: "Só há um propulsor atuando (BE a ré): o rebocador ganha seguimento a ré e guina. Com o hélice de BB parado, o leme de BB não recebe descarga e quase não produz força.",
      C: "É o comando espelhado do correto: produz deslocamento lateral para bombordo, não para boreste.",
      D: "Apenas o propulsor de BB a ré: o rebocador ganha seguimento a ré e guina; leme sem descarga de hélice adiante é pouco efetivo.",
      E: "Os dois propulsores a ré só produzem seguimento a ré; não há força lateral resultante.",
    },
  },
  {
    id: "dpc2006-08",
    tema: "Rebocadores",
    tipo: "sequencia",
    enunciado: `Correlacione os tipos de rebocadores com suas características, segundo o guia “Tug Use in Port”, referência da circular MSC 1101 da IMO, assinalando, a seguir, a opção correta:

Tipos de rebocadores:
I) Combi.
II) Pusher tug.
III) Multi tug.
IV) Tractor.
V) Conventional.

Características:
( ) Tug with azimuth propellers forward which are built to operate over the tug’s bow.
( ) Tug with azimuth propellers aft and towing point forward, built to operate mainly over the tug’s bow.
( ) Tug equipped with an additional towing point at the after end, and with 360° steerable bow thruster.
( ) Tug with azimuth propeller aft which are built to operate over the tug’s bow as well as over tug’s stern.
( ) Tug with their propulsion aft and towing point near midship.
( ) Tug with their towing point aft and propulsion forward of midship.`,
    alternativas: {
      A: "(II), (I), (V), (-), (III), e (IV)",
      B: "(I), (V), (IV), (II), (-), e (III)",
      C: "(II), (-), (III), (V), (IV) e (I)",
      D: "(-), (II), (I), (III), (V) e (IV)",
      E: "(IV), (II), (I), (V), (III) e (-)",
    },
    correta: "D",
    comentario: `Item a item:
1º Propulsão azimutal a vante operando sobre a PROA → nenhum tipo (-): o trator tem a propulsão a vante, mas trabalha sobre a popa.
2º Azimutais a ré, ponto de reboque a vante, opera sobre a proa → Pusher tug / trator reverso (II).
3º Ponto de reboque adicional a ré e bow thruster azimutal de 360° → Combi (I), um convencional modificado.
4º Azimutais a ré, opera tanto sobre a proa quanto sobre a popa → Multi tug / ASD (III).
5º Propulsão a ré e ponto de reboque próximo a meia-nau → Conventional (V).
6º Ponto de reboque a ré e propulsão a vante de meia-nau → Tractor (IV).`,
  },
  {
    id: "dpc2006-09",
    tema: "Rebocadores",
    tipo: "sequencia",
    enunciado: `Atualmente, a força de tração nos cabos de reboque tem levado à ruptura de cabeços e buzinas de navios. Este fato, segundo Otávio e Marcelo, no livro “Rebocadores Portuários”, do CONAPRA, tem se tornado perigosamente frequente, principalmente em operações de escolta. O aumento de frequência desse tipo de acidente levou a OCIMF (Oil Companies International Marine Forum) a preparar um documento recomendando, entre outras normas de segurança, que exista uma troca de informações entre o Prático e o Comandante do navio. Esta recomendação está no Anexo 4 do livro supracitado.
Coloque F (falso) ou V (verdadeiro) nas afirmativas abaixo, sobre o que é recomendável que o PRÁTICO avise ao COMANDANTE do navio, de acordo com a OCIMF:

( ) If escorting, the maximum towline forces that the tug may generate at escort speeds.
( ) The type of tugs to be used and their bollard pull(s).
( ) Which chocks, bollards and strong points can be used for towing.
( ) The method by which the ship’s crew should take on board and release the tug’s tow line.
( ) The SWL (Safe Working Load) of the mooring fittings.
( ) Maximum planned speed for the passage and the maximum speed of the tug.
( ) That on release, the tug’s gear should be lowered back always under control.`,
    alternativas: {
      A: "(F) (V) (V) (F) (V) (V) (F)",
      B: "(V) (F) (V) (V) (V) (F) (V)",
      C: "(V) (V) (F) (V) (F) (V) (V)",
      D: "(V) (V) (V) (F) (F) (F) (V)",
      E: "(V) (F) (F) (V) (F) (V) (F)",
    },
    correta: "C",
    comentario: `A chave é separar quem informa o quê. O Prático conhece os rebocadores e a operação; o Comandante conhece o próprio navio.
Informações do Prático para o Comandante (V): forças máximas no cabo em escolta (1º), tipo e bollard pull dos rebocadores (2º), método de receber e largar o cabo (4º), velocidades planejadas (6º) e arriar o cabo sempre sob controle (7º).
Informações que fluem no sentido inverso, do Comandante para o Prático (F): quais buzinas, cabeços e pontos fortes podem ser usados (3º) e a SWL dos acessórios de amarração (5º) — são dados do navio.`,
  },
  {
    id: "dpc2006-10",
    tema: "Legislação e Normas",
    tipo: "sequencia",
    revisar: true,
    enunciado: `O Prático Claudionor Lisboa chega a bordo, precisamente às 03:55h, de uma madrugada fria e chuvosa, no horário solicitado pelo armador. O Comandante e sua tripulação estavam prontos para o início da manobra de desatracação, programada para 04:20h. O oficial de quarto já tinha preparado o passadiço. O navio é o conteneiro “Aliança Europa”, bandeira brasileira, comprimento total de 200,5 metros, boca de 32,20 metros, arqueação bruta igual a 28.397. O Comandante solicitou dois rebocadores azimutais de 40.000 kgf de bollard pull. Após largar toda a amarração, o Prático ordenou aos mestres dos rebocadores que puxassem com meia-força o navio para fora do cais. Após alguns momentos, o Prático percebeu que o navio não se movimentava. Avaliando o calado do navio, horário e a tábua de maré e, conhecendo os dados da recente batimetria, o Prático concluiu que o navio estava encalhado. Ficou decidido que a manobra seria realizada às 07:00h. A desatracação ocorreu com sucesso. A amplitude de maré era de 3,50 m. Quando o navio já navegava no canal de acesso, o Prático dispensou os rebocadores. Em dado instante, foi solicitado 30° de leme a boreste e, por falha do leme, o navio não respondeu, ficando à deriva. Constatou-se que o problema de falha do leme foi devido ao encalhe quando atracado. Após reparo, foi solicitada a revalidação do despacho. A Autoridade Marítima determinou abertura de IAFN.
Coloque F (falso) ou V (verdadeiro), de acordo com as Normas da Autoridade Marítima Brasileira e a LESTA:

( ) A demora do navio, após o acidente, foi inferior a 36 horas.
( ) Na preparação do passadiço, antes de executar o teste do aparelho de governo, o Oficial de Quarto deveria ter verificado o calado do navio, altura da maré e informado ao Comandante um possível encalhe do navio.
( ) Não é dever do Prático, quando em manobra, comunicar ao Capitão dos Portos encalhe de navio, estando atracado ou navegando na ZP.
( ) O encalhe é um acidente da navegação.
( ) Competia ao Comandante do navio comunicar os problemas ocorridos à Autoridade Marítima, de acordo com a alínea b), do item II, do art. 8° da LESTA.`,
    alternativas: {
      A: "(V) (F) (F) (V) (F)",
      B: "(V) (V) (F) (F) (V)",
      C: "(F) (F) (V) (V) (V)",
      D: "(F) (V) (F) (V) (V)",
      E: "(V) (F) (V) (V) (F)",
    },
    correta: "D",
    comentario: `Item a item:
1º Falso (gabarito oficial) — a necessidade de revalidar o despacho indica que a permanência do navio ultrapassou o prazo em que o despacho original seguia válido.
2º Verdadeiro — a verificação de calado x maré faz parte da preparação do passadiço e teria revelado o risco de encalhe no berço.
3º Falso — é dever do Prático comunicar à Capitania os acidentes e fatos da navegação de que tome conhecimento na ZP (NORMAM-12).
4º Verdadeiro — o encalhe consta do rol de acidentes da navegação (Lei 2.180/54, art. 14).
5º Verdadeiro — a LESTA (art. 8º, II, b) atribui ao Comandante comunicar à Autoridade Marítima os acidentes e fatos da navegação ocorridos com a embarcação.`,
  },
  {
    id: "dpc2006-11",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Após ler o acórdão do Tribunal Marítimo (TM), relativo a um acidente de navegação no qual fora arrolado como Prático da manobra, João Manoel constatou que recebera multa de 40 UFIR. Porém, o TM converteu a multa em suspensão. De acordo com a Lei n° 2.180/54, que dispõe sobre o Tribunal Marítimo, quantos dias de suspensão o TM aplicou ao Prático João Manoel?",
    alternativas: {
      A: "10",
      B: "15",
      C: "20",
      D: "25",
      E: "30",
    },
    correta: "E",
    explicacoes: {
      A: "10 dias não corresponde à conversão prevista na Lei 2.180/54 para uma multa de 40 UFIR.",
      B: "15 dias não corresponde à conversão prevista na Lei 2.180/54 para uma multa de 40 UFIR.",
      C: "20 dias não corresponde à conversão prevista na Lei 2.180/54 para uma multa de 40 UFIR.",
      D: "25 dias não corresponde à conversão prevista na Lei 2.180/54 para uma multa de 40 UFIR.",
      E: "Pelo gabarito oficial, a conversão da multa de 40 UFIR em suspensão, nos termos da Lei 2.180/54, resulta em 30 dias. Vale conferir no texto da lei o dispositivo que fixa a proporção multa × dias de suspensão.",
    },
  },
  {
    id: "dpc2006-12",
    tema: "Manobra do Navio",
    enunciado: "Independente de diferentes formas e tamanhos, o comportamento de qualquer navio sofre a influência de um grande número de fatores e interações. Entre eles, o efeito das águas rasas. A razão profundidade x calado fornece um parâmetro objetivo da intensidade de tal efeito em relação à manobra do navio. De acordo com Daniel H. MacElrevey, em “Shiphandling for the Mariner”, quais valores limites expressam a razão acima mencionada, respectivamente, quando o efeito das águas rasas é sentido em sua plenitude e quando esse efeito se torna significativo?",
    alternativas: {
      A: "1,1 e 1,5",
      B: "1,2 e 1,5",
      C: "1,3 e 1,8",
      D: "1,4 e 1,8",
      E: "1,5 e 2,0",
    },
    correta: "B",
    explicacoes: {
      A: "O segundo valor (1,5) está certo, mas o efeito pleno é associado por MacElrevey à razão 1,2, não 1,1.",
      B: "Segundo MacElrevey, o efeito de águas rasas torna-se significativo quando a profundidade é cerca de 1,5 vez o calado e é sentido plenamente com profundidade de 1,2 vez o calado.",
      C: "Nenhum dos dois valores corresponde aos limites citados pelo autor (1,2 e 1,5).",
      D: "Nenhum dos dois valores corresponde aos limites citados pelo autor (1,2 e 1,5).",
      E: "1,5 é onde o efeito COMEÇA a ser significativo, não onde é pleno; 2,0 não é o limite citado pelo autor.",
    },
  },
  {
    id: "dpc2006-13",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: "When using an anchor as a shiphandling tool, which of the following statements contains FALSE information, according to Daniel H. MacElrevey, in “Shiphandling for the Mariner”?",
    alternativas: {
      A: "The bow of a ship with headway is steadied by the anchor regardless of which anchor is used, and is not pulled in any particular direction.",
      B: "For the anchor to be most effective an amount of chain equal to about twice the depth should be put well in the water and the brake screwed up tight.",
      C: "Should the anchor be required during a maneuver, let go only enough chain to allow the anchor to first grab and then break loose and drag. The anchor must not dig in and hold.",
      D: "When using a kedge anchor in an emergency, it is especially effective for stopping a ship in a short distance while maintaining her heading, and holding the ship laterally after headway is lost. It is an appropriate tool to work the ship around a bend.",
      E: "The anchor is called the “Poor man’s tugboat” for good reason. It is often more effective than a tug.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação verdadeira segundo o autor: com seguimento a vante, o ferro no fundo apenas firma a proa, sem puxá-la para o bordo do ferro usado. Como a questão pede a FALSA, não é a resposta.",
      B: "Afirmação verdadeira segundo o autor: filame de cerca de duas vezes a profundidade, com o freio bem apertado, para o ferro garrar de forma controlada. Não é a resposta.",
      C: "Afirmação verdadeira segundo o autor: o ferro usado como ferramenta de manobra deve garrar (arrastar), e não unhar e aguentar. Não é a resposta.",
      D: "É a alternativa com informação falsa. O ferro de popa (kedge) serve para parar o navio em curta distância mantendo a proa e para aguentá-lo lateralmente, mas NÃO é ferramenta apropriada para fazer o navio contornar uma curva — para isso usa-se o ferro de proa.",
      E: "Afirmação verdadeira segundo o autor, que chama o ferro de “rebocador dos pobres” e o considera muitas vezes mais eficaz que um rebocador. Não é a resposta.",
    },
  },
  {
    id: "dpc2006-14",
    tema: "Meteorologia e Oceanografia",
    enunciado: "Um navegante observando o estado do mar e o estado do tempo, no oceano Atlântico Sul, em dia de céu limpo, sem vento e ondas, identifica em determinado azimute surgirem no horizonte, em altos níveis, nuvens cirrus de cristais de gelo, com acentuado deslocamento na direção do navio. Na interpretação dessa situação, o navegante pode concluir a seguinte previsão do tempo, de acordo com Lobo e Soares, no livro “Meteorologia e Oceanografia”:",
    alternativas: {
      A: "Permanece tempo estável com nuvens altas de cristais de gelo, características de bom tempo.",
      B: "Não há previsão de nuvens cumulonimbus, característica de mau tempo.",
      C: "Há previsão de mudança de nebulosidade, passando de céu limpo para parcialmente nublado a quase encoberto, permanecendo as condições de estabilidade.",
      D: "Não há previsão de instabilidade com formação de ondas, de vento forte, de precipitação pesada e de rajadas de vento.",
      E: "Há previsão de mau tempo com pancadas de chuvas, rajadas de vento e trovoadas.",
    },
    correta: "E",
    explicacoes: {
      A: "Cirrus isolados e estacionários podem acompanhar bom tempo, mas cirrus avançando rapidamente em direção ao navio são pré-frontais: anunciam mudança, não estabilidade.",
      B: "É o contrário: os cirrus em deslocamento rápido costumam ser a vanguarda de um sistema frontal, ao qual se associam cumulonimbus.",
      C: "A nebulosidade de fato vai aumentar, mas as condições NÃO permanecem estáveis — o sistema que se aproxima traz instabilidade.",
      D: "Nega justamente o que os cirrus pré-frontais indicam: instabilidade, vento forte, mar e precipitação.",
      E: "Cirrus em altos níveis com acentuado deslocamento na direção do navio são o primeiro sinal da aproximação de uma frente/sistema de mau tempo: devem-se esperar pancadas de chuva, rajadas e trovoadas.",
    },
  },
  {
    id: "dpc2006-15",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: "Na interpretação de uma imagem de satélite meteorológico, canal infravermelho, do oceano Atlântico Sul, as regiões com ocorrências de um cavado e o sistema frontal associado serão identificadas pelas seguintes características da imagem, de acordo com Lobo e Soares, no livro “Meteorologia e Oceanografia”:",
    alternativas: {
      A: "O centro de baixa pressão do cavado, com circulação horária, é observado na área central do encontro das três nebulosidades brancas das frentes quente, fria e oclusa.",
      B: "A frente quente com coloração branca muito forte, em larga faixa de nebulosidade de cumulonimbus, se estendendo para W.",
      C: "A circulação do ar frio no cavado pode ser observada pela posição da área da massa fria a E do eixo do cavado, com coloração branca forte.",
      D: "A frente resultante da oclusão das frentes fria e quente ocupa a região escura a E do centro do cavado.",
      E: "A frente fria ocupa uma longa área bem estreita, na direção do equador, com indicação de um branco intenso.",
    },
    correta: "E",
    explicacoes: {
      A: "O encontro das três frentes é o ponto tríplice, que não coincide com o centro de baixa pressão: o centro fica na extremidade da oclusão, no núcleo da espiral de nuvens.",
      B: "A nebulosidade da frente quente é predominantemente estratiforme, não uma larga faixa de cumulonimbus, e ela se estende para leste do sistema, não para W.",
      C: "No Atlântico Sul a massa fria fica a oeste/sudoeste do eixo do cavado, e aparece como área mais escura com nuvens celulares, não como branco forte.",
      D: "A oclusão tem nebulosidade espessa e topos frios, aparecendo branca no infravermelho, não como região escura.",
      E: "No infravermelho, topos altos e frios aparecem em branco intenso. A frente fria forma uma banda longa e estreita de nuvens convectivas que se estende do centro de baixa em direção ao equador.",
    },
  },
  {
    id: "dpc2006-16",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `No dia 20 de junho de 2006, a Prático Ana, em um navio VLCC carregado, com 300.000 toneladas de porte bruto e calado de 22 metros, verificou, em um longo trecho seguro e em águas profundas, que a velocidade de equilíbrio do navio para a rotação máxima era de 14 nós. As forças ambientais eram desprezíveis.
No dia 23 de junho, Ana fez a desatracação do mesmo navio na condição leve, com calado médio de 9,60 metros, propulsor completamente imerso, com trim pela popa. No mesmo trecho, verificou que a velocidade para a mesma rotação máxima era de 14,6 nós. As forças ambientais eram desprezíveis.
Ana perguntou: por que o navio totalmente carregado desenvolveu praticamente a mesma velocidade da condição leve? Ela fez as seguintes considerações:

I) Na condição leve, estando o navio em águas parelhas, a razão de superfície molhada por unidade de deslocamento é aumentada e, com isto, a resistência friccional aumenta.
II) Para um navio VLCC, a razão de resistência total por unidade de deslocamento é diminuída para a condição leve.
III) O coeficiente de bloco para o navio leve é menor que para o navio carregado e, com isto, a resistência residual é maior.
IV) A força de empuxo do propulsor é menor quanto maior for o escoamento incidente sobre o mesmo.

Assinale a opção correta, de acordo com “Princípios de Arquitetura Naval”:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas a afirmativa III) é verdadeira.",
      E: "Apenas a afirmativa IV) é verdadeira.",
    },
    correta: "B",
    comentario: `I) Verdadeira — ao aliviar o navio, o deslocamento cai muito mais que a superfície molhada; a superfície molhada por tonelada aumenta, e com ela a resistência friccional específica.
II) Falsa — pelo motivo acima, a resistência por unidade de deslocamento AUMENTA na condição leve.
III) Falsa — o coeficiente de bloco de fato diminui na condição leve, mas formas mais finas não implicam resistência residual maior; a conclusão não procede.
IV) Verdadeira — para a mesma rotação, quanto maior a velocidade de avanço da água no hélice, menor o empuxo. No navio leve a esteira é menor, a água chega mais rápida ao hélice e o empuxo cai, limitando o ganho de velocidade.`,
  },
  {
    id: "dpc2006-17",
    tema: "Manobra do Navio",
    enunciado: `O Prático Manoel, a bordo do navio graneleiro DOCEBAY, tipo “capesize”, observou que o diâmetro tático da curva de giro, fixada no passadiço, era de 3 Lpp. Em uma situação de emergência, necessitava executar uma curva de giro, mas sua velocidade não era a de cruzeiro correspondente à rotação máxima. Verificou então na tabela de rotação x velocidade:

FULL AHEAD — 75 RPM — 16 nós
HALF AHEAD — 45 RPM — 10 nós
SLOW AHEAD — 30 RPM — 6 nós

Estando o navio na velocidade de equilíbrio para a rotação comandada, com quais valores de diâmetro tático da curva de giro Manoel poderá manobrar o navio nas condições de “HALF AHEAD” e “SLOW AHEAD”?`,
    alternativas: {
      A: "1,5 Lpp, 1,5 Lpp",
      B: "1,5 Lpp, 3 Lpp",
      C: "3 Lpp, 3 Lpp",
      D: "3 Lpp, 6 Lpp",
      E: "6 Lpp, 6 Lpp",
    },
    correta: "C",
    explicacoes: {
      A: "Reduzir a velocidade não reduz o diâmetro tático: a curva é feita mais devagar, mas com a mesma geometria.",
      B: "O diâmetro tático não varia com a velocidade de equilíbrio; não há razão para valores diferentes em HALF e SLOW.",
      C: "Com o navio na velocidade de equilíbrio da rotação comandada, a força do leme e as forças hidrodinâmicas do casco variam na mesma proporção (V²). O diâmetro tático é praticamente independente da velocidade: 3 Lpp nas duas condições. Muda o tempo para completar o giro, não o tamanho dele.",
      D: "Menor velocidade não aumenta o diâmetro tático; ele se mantém em 3 Lpp.",
      E: "O diâmetro tático não dobra ao reduzir a velocidade; ele se mantém em 3 Lpp.",
    },
  },
  {
    id: "dpc2006-18",
    tema: "Rebocadores",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `Analise as afirmativas abaixo, com relação a rebocadores com cabo passado na proa de um navio, de acordo com Henk Hensen, no livro “Tug Use in Port”:

I) Um rebocador com o cabo passado na proa de um navio, independentemente do seu tipo, pode gerar uma força transversal ou lateral sobre o navio, para fins de controle de guinada.
II) Em rebocadores convencionais, estando o cabo passado na proa, deve-se manter o cabo teso quando solicitado mover de um bordo do navio assistido para outro bordo.
III) Um rebocador trator é menos eficiente que um rebocador convencional, mesmo com grandes ângulos entre o cabo de reboque e a proa do navio assistido em movimento avante.
IV) Rebocadores tratores geralmente trabalham, quando com o cabo passado, com a proa voltada para a proa do navio assistido.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas a afirmativa III) é verdadeira.",
      E: "Apenas a afirmativa I) é verdadeira.",
    },
    correta: "B",
    comentario: `I) Verdadeira — qualquer tipo de rebocador com cabo na proa consegue aplicar força lateral para controlar a guinada.
II) Falsa — manter o cabo teso ao cruzar de um bordo para o outro expõe o rebocador convencional ao risco de ser atravessado e emborcado (girting); o cabo não deve estar sob tensão nessa passagem.
III) Verdadeira (gabarito oficial) — como rebocador de proa com o navio com seguimento a vante, o trator rende menos que o convencional, mesmo com grandes ângulos de cabo.
IV) Falsa — o ponto de reboque do trator fica a ré; com o cabo passado é a popa do rebocador que fica voltada para o navio.`,
  },
  {
    id: "dpc2006-19",
    tema: "Rebocadores",
    tipo: "sequencia",
    enunciado: `Coloque falso (F) ou verdadeiro (V) nas afirmativas abaixo, em relação aos modos de operação de rebocadores com cabo passado na popa do navio assistido, de acordo com Henk Hensen, no livro “Tug Use in Port”:

( ) Um rebocador trator operando em método de reboque indireto, com a finalidade de governar e retardar o movimento do navio, tem geralmente sua proa voltada para a popa do navio assistido.
( ) O método indireto de reboque é aconselhado quando a velocidade do navio é maior do que 5 ou 6 nós e o método direto é aconselhado para velocidades menores que 5 nós.
( ) Um rebocador trator reverso/ASD, quando desejando apenas retardar o movimento do navio, sem produzir guinada, opera na mesma posição, tanto no método direto quanto no método indireto.
( ) Em um rebocador trator reverso/ASD a distância entre o ponto de aplicação da força de tração de reboque e o centro de pressões hidrodinâmicas é menor que a mesma distância medida num rebocador convencional. Consequentemente, mais potência será gasta para manter o rebocador trator ASD em uma posição efetiva. Com isso a força de tração no cabo de reboque diminui.
( ) Em um rebocador trator reverso/ASD, quanto mais a vante estiver o seu centro de pressões hidrodinâmicas, melhor será o desempenho, principalmente quando atuando como rebocador na popa do navio assistido.`,
    alternativas: {
      A: "(V) (V) (V) (F) (V)",
      B: "(F) (V) (V) (F) (V)",
      C: "(V) (F) (F) (V) (V)",
      D: "(F) (F) (V) (F) (F)",
      E: "(F) (V) (F) (V) (F)",
    },
    correta: "B",
    comentario: `Item a item:
1º Falso — o trator tem o ponto de reboque a ré; no método indireto é a POPA do rebocador que fica voltada para a popa do navio.
2º Verdadeiro — o método indireto aproveita as forças hidrodinâmicas no casco do rebocador e só rende em velocidades mais altas (acima de 5–6 nós); abaixo disso usa-se o método direto.
3º Verdadeiro — para apenas frear, sem guinada, o ASD trabalha alinhado pela popa do navio, mesma posição nos dois métodos.
4º Falso — o raciocínio está invertido: distância pequena entre ponto de reboque e centro de pressão significa MENOS potência gasta para manter a posição, e portanto maior força disponível no cabo.
5º Verdadeiro — coerente com o item anterior: centro de pressão mais a vante (perto do ponto de reboque, que no ASD é na proa) melhora o desempenho.`,
  },
  {
    id: "dpc2006-20",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `Em 1964, Moody verificou que as qualidades de governo de alguns navios eram tão baixas que chegavam a impedir a entrada dos mesmos em águas restritas. Moody sugeriu, então, uma solução prática: operar com um rebocador com cabo curto passado na popa do navio. Seus estudos, relatados em “Princípios de Arquitetura Naval”, descrevem que, estando o rebocador com o cabo passado na popa do navio:

I) A velocidade da corrente de descarga do propulsor do navio é aumentada.
II) A ação efetiva do leme do navio é aumentada.
III) A estabilidade direcional do navio é aumentada.
IV) As forças de interação entre o rebocador e o navio não afetam a ação propulsiva do navio.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas a afirmativa IV) é verdadeira.",
      E: "Apenas a afirmativa III) é verdadeira.",
    },
    correta: "A",
    comentario: `O rebocador a ré funciona como um freio: para manter a mesma velocidade o navio precisa de mais rotação.
I) Verdadeira — mais rotação para a mesma velocidade = corrente de descarga do hélice mais veloz.
II) Verdadeira — o leme trabalha dentro dessa descarga mais forte e ganha efetividade.
III) Verdadeira — uma força puxando a popa para ré tende a alinhar o navio, aumentando a estabilidade direcional.
IV) Falsa — há interação: o arrasto imposto pelo rebocador altera justamente o carregamento do propulsor.`,
  },
  {
    id: "dpc2006-21",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "Assinale a afirmativa correta, com relação a poleame, aparelhos de laborar e acessórios, de acordo com Maurílio M. Fonseca, no livro Arte Naval:",
    alternativas: {
      A: "Em um aparelho de laborar, içando um peso, o tirador suporta a tração mínima e a arreigada fixa a tração máxima.",
      B: "Em uma talha constituída por um cadernal de dois gornes e um moitão, quando o tirador sai do cadernal, que é a parte móvel, a multiplicação de potência é maior.",
      C: "Em uma estralheira singela formada por um cadernal de 3 gornes e um cadernal de 2 gornes, o cadernal de 3 gornes pode ser a parte fixa ou a parte móvel do aparelho. No primeiro caso a multiplicação de potência teórica é maior do que no segundo.",
      D: "Num aparelho de laborar, o poleame, como regra geral, pode suportar o mesmo peso que o cabo novo indicado para ele.",
      E: "Em uma talha dobrada formada por um par de cadernais de dois gornes, ficando o tirador e a arreigada fixa num mesmo cadernal, a multiplicação de potência independe de onde sai o tirador.",
    },
    correta: "B",
    explicacoes: {
      A: "É o inverso: ao içar, o atrito se soma a cada gorne, de modo que o tirador suporta a tração MÁXIMA e a arreigada fixa, a mínima.",
      B: "A multiplicação teórica é igual ao número de pernadas que sustentam a parte móvel. Na talha (2 gornes + moitão), com o tirador saindo do cadernal móvel são 4 pernadas (multiplicação 4); saindo da parte fixa seriam 3.",
      C: "Com o cadernal de 3 gornes fixo, o tirador sai da parte fixa e a multiplicação é 5; com ele móvel, o tirador sai da parte móvel e a multiplicação é 6. Ou seja, no primeiro caso é MENOR.",
      D: "Segundo o Arte Naval, o poleame não é dimensionado para igualar a resistência do cabo novo; a carga de trabalho do aparelho é limitada pelo poleame e pelo fator de segurança, não se podendo assumir a equivalência.",
      E: "Depende, sim: na talha dobrada a multiplicação é 4 com o tirador saindo do cadernal fixo e 5 saindo do móvel.",
    },
  },
  {
    id: "dpc2006-22",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "Assinale a afirmativa correta, com relação a aparelho de fundear e suspender, de acordo com Maurílio M. Fonseca, no livro Arte Naval:",
    alternativas: {
      A: "A sequência dos componentes do aparelho de fundear, a partir do braço do ferro, até o paiol da amarra, é a seguinte: braço, pata, haste, anete, elos, tornel, amarra, boca da amarra, coroa do cabrestante, gateira, paiol da amarra, braga e paixão.",
      B: "A boia de arinque mostra a posição do ferro em relação ao navio, devendo ser presa ao anete, com um comprimento igual à profundidade local, compensando as variações de maré.",
      C: "Um ferro sem cepo precisa de maior filame de amarra para fundear, de modo que o esforço exercido pela amarra seja o mais próximo da horizontal.",
      D: "Na aproximação do ponto de fundeio, para que o navio largue o ferro exatamente no local desejado, o navio deve estar com um pequeno seguimento a vante e não parado, de modo que a amarra não fique enroscada sobre o ferro e unhe.",
      E: "A âncora do tipo “danforth” tem maior poder de unhar do que a do tipo patente e menor poder de unhar do que a do tipo “almirantado”.",
    },
    correta: "C",
    explicacoes: {
      A: "A sequência está desordenada: partindo do ferro, a pata fica na extremidade do braço, e os componentes a bordo (buzina/escovém, mordente, coroa de Barbotin, gateira, paiol, paixão) não seguem a ordem apresentada.",
      B: "O arinque é fixado na cruz do ferro (junto aos braços), não no anete, e seu comprimento deve exceder a profundidade para que a boia não afunde na preamar.",
      C: "O ferro sem cepo (patente) unha graças ao ângulo das patas articuladas; se a amarra puxar para cima, ele se solta. Por isso exige filame maior, para que a tração chegue ao ferro o mais horizontal possível.",
      D: "O recomendado é largar o ferro com pequeno seguimento a RÉ, para que a amarra se estenda no fundo sem se amontoar sobre o ferro.",
      E: "A Danforth tem poder de unhar superior ao dos dois outros tipos, não intermediário.",
    },
  },
  {
    id: "dpc2006-23",
    tema: "Cerimonial",
    enunciado: "O navio mercante “Ipanema”, arvorando bandeira brasileira, com arqueação bruta igual a 23.958, atracado no porto do Rio de Janeiro, descarregava produto químico. Por volta das 09:30h ocorreu um vazamento da carga, o que levou ao falecimento de um tripulante. Além das providências inerentes ao fato, o Comandante determinou ao Oficial de Serviço cumprir as Normas do Cerimonial, por ter ocorrido falecimento a bordo, até o corpo do tripulante ser retirado de bordo. Atendendo às Normas do Cerimonial, podemos concluir que o Oficial de Serviço teve o seguinte procedimento:",
    alternativas: {
      A: "Manteve a bandeira de popa conservada a meia-adriça, enquanto o corpo permaneceu a bordo.",
      B: "Manteve a bandeira de popa e dos topes dos mastros a meia-adriça, enquanto o corpo permaneceu a bordo.",
      C: "Manteve embandeiramento em funeral, içando a Bandeira Nacional à meia-adriça, tanto nos mastros como na popa, após as 12:00h.",
      D: "Manteve embandeiramento em arco, com as bandeiras do Código Internacional de Sinais, enquanto o corpo permaneceu a bordo.",
      E: "Manteve a Bandeira Nacional no topo do mastro de popa até o pôr do sol, conservando-a a meia-adriça a partir desse momento, durante 3 (três) dias.",
    },
    correta: "A",
    explicacoes: {
      A: "Em caso de falecimento a bordo, o sinal de luto é a Bandeira Nacional da popa a meia-adriça enquanto o corpo permanecer a bordo.",
      B: "O luto por falecimento a bordo é marcado apenas na bandeira de popa; não se estende a bandeiras nos topes dos mastros.",
      C: "Embandeiramento em funeral é reservado a luto oficial decretado, não ao falecimento de um tripulante, e não há a condição de horário citada.",
      D: "Embandeiramento em arco é sinal festivo (datas comemorativas), incompatível com luto.",
      E: "O procedimento vale enquanto o corpo está a bordo, não a partir do pôr do sol nem pelo prazo fixo de três dias.",
    },
  },
  {
    id: "dpc2006-24",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "O navio-tanque “Itajubá”, bandeira brasileira, comprimento total de 182,90 metros, arqueação bruta igual a 26.639, demandava o porto de São Luís – MA, carregando óleo diesel, com calado de 11,90 metros. Tendo em vista a prioridade na atracação, não teria fundeio. O Prático embarcou no ponto de espera de práticos determinado nas Normas da Autoridade Marítima para o Serviço de Praticagem – NORMAM-12/DPC. Diante desse relato, podemos afirmar que:",
    alternativas: {
      A: "O Prático embarcou nas proximidades da boia n° 22, pois o navio estava com calado superior a 11 (onze) metros.",
      B: "O Prático embarcou nas proximidades da boia n° 19, pois o navio estava com calado superior a 11 (onze) metros.",
      C: "O Prático embarcou nas proximidades da BF-01, pois o navio estava com calado superior a 11 (onze) metros.",
      D: "O Prático embarcou nas proximidades do píer, pois não há restrição recomendada pela Autoridade Marítima Brasileira para navegação sem Prático.",
      E: "O Prático embarcou nas proximidades da boia n° 19, pois apesar do calado do navio ser superior a 11 (onze) metros, trata-se de um trecho facultativo de uma Zona de Praticagem obrigatória.",
    },
    correta: "A",
    explicacoes: {
      A: "Pela NORMAM-12 vigente à época (gabarito oficial), a ZP de São Luís tinha pontos de espera distintos conforme o calado: navios com calado superior a 11 m recebiam o Prático nas proximidades da boia n° 22. Atenção: a norma foi alterada desde 2006.",
      B: "A boia n° 19 era o ponto associado aos navios de menor calado; com 11,90 m o embarque é mais para fora, na boia n° 22.",
      C: "A BF-01 não é o ponto de espera definido para navios com calado superior a 11 m.",
      D: "São Luís é Zona de Praticagem obrigatória; um navio-tanque desse porte não pode navegar até o píer sem Prático.",
      E: "Para calado superior a 11 m não há trecho facultativo a aproveitar: o embarque é na boia n° 22.",
    },
  },
);

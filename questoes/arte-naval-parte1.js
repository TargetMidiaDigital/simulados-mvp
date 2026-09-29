// Questões elaboradas a partir do livro "Arte Naval" (Maurílio M. Fonseca, ed. 2019)
// Capítulo 1 – Nomenclatura do Navio (artenaval-01 a 08)
// Capítulo 2 – Geometria do Navio (artenaval-09 a 14)
QUESTOES.push(
  {
    id: "artenaval-01",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Almeida, ao se aproximar em sua lancha de um navio mercante fundeado para embarcar pela escada do portaló, observou atentamente o casco do navio. Com relação à nomenclatura das partes do casco, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "Obras mortas são a parte do casco abaixo do plano de flutuação em plena carga, isto é, a parte que fica total ou quase totalmente imersa.",
      B: "Bochechas são as partes curvas do costado, de um e de outro bordo, junto à popa; alhetas são as partes curvas do costado junto à roda de proa.",
      C: "A linha-d'água separa as obras vivas das obras mortas e é representada por uma faixa pintada com tinta especial no casco, de proa a popa, cuja aresta inferior é a linha de flutuação leve.",
      D: "Uma construção feita sobre o convés principal, com as laterais distando do costado mais de 4% da boca do navio, chama-se superestrutura; se a distância for menor, passa a se chamar casaria.",
      E: "Costado é a parte do casco que compreende a transição entre o fundo e o bojo, e boreste é o bordo situado à esquerda de um observador colocado no plano diametral e olhando para a proa.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. A parte do casco abaixo do plano de flutuação em plena carga, total ou quase totalmente imersa, são as obras vivas (art. 1.11). Obras mortas são a parte que fica acima desse plano e está sempre emersa (art. 1.12).",
      B: "Errada. Está invertido: bochechas são as partes curvas do costado junto à roda de proa (art. 1.19) e alhetas são as partes curvas junto à popa (art. 1.24).",
      C: "Correta. É exatamente a definição do art. 1.13: a linha-d'água separa a parte imersa (obras vivas) da parte emersa (obras mortas), é representada por uma faixa pintada de proa a popa e sua aresta inferior é a linha de flutuação leve.",
      D: "Errada. Pelo art. 1.37 é o contrário: superestrutura é a construção sobre o convés principal cujas laterais distam do costado NÃO MAIS do que 4% da boca; se a distância for superior, chama-se casaria (deckhouse).",
      E: "Errada. A transição entre o fundo e o costado é o bojo (art. 1.15); costado é a parte lateral do casco entre o bojo e o convés mais elevado (art. 1.16). Boreste é o bordo à DIREITA do observador situado no plano diametral olhando para a proa (art. 1.5).",
    },
  },
  {
    id: "artenaval-02",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `Associe as peças da estrutura dos cascos metálicos da coluna A com as definições da coluna B, de acordo com Maurílio M. Fonseca, no livro Arte Naval:

COLUNA A
1) Trincaniz
2) Sicorda
3) Hastilha
4) Buçarda
5) Pé-de-carneiro

COLUNA B
( ) Pilar que suporta vigas primárias (sicordas e vaus gigantes), aumentando a rigidez da estrutura quando o espaço entre as anteparas estruturais é grande.
( ) Fiada de chapa do convés resistente mais próxima ao costado, em cada convés, ligando os vaus entre si e às cavernas.
( ) Chapa colocada verticalmente, no sentido transversal, no fundo do navio, em cada caverna, servindo para aumentar a altura das cavernas, da quilha ao bojo.
( ) Pedaço de chapa em forma de esquadro que conecta dois perfis ou duas superfícies que fazem ângulo entre si, a fim de manter invariável esse ângulo.
( ) Viga longitudinal dos conveses, normalmente com alma na vertical e flange horizontal, pertencente à estrutura primária.
( ) Peça horizontal colocada na proa ou na popa, contornando-as por dentro, de BE a BB, para dar maior resistência a essas partes do navio.`,
    alternativas: {
      A: "(5) (1) (3) (2) (-) (4)",
      B: "(5) (1) (3) (-) (2) (4)",
      C: "(1) (5) (3) (-) (2) (4)",
      D: "(5) (1) (2) (-) (3) (4)",
      E: "(4) (1) (3) (-) (2) (5)",
    },
    correta: "B",
    comentario: `Item a item:
1º Pilar que suporta sicordas e vaus gigantes → Pé-de-carneiro (5), art. 1.54, alínea c.
2º Fiada de chapa do convés resistente mais próxima ao costado, ligando os vaus entre si e às cavernas → Trincaniz (1), art. 1.52, alínea d.
3º Chapa vertical transversal no fundo, em cada caverna, aumentando a altura das cavernas da quilha ao bojo → Hastilha (3), art. 1.53, alínea d.
4º Chapa em forma de esquadro que conecta dois perfis ou superfícies em ângulo → Borboleta (art. 1.54, alínea j), que não consta da coluna A (-).
5º Viga longitudinal dos conveses, com alma vertical e flange horizontal, da estrutura primária → Sicorda (2), art. 1.52, alínea e.
6º Peça horizontal que contorna a proa ou a popa por dentro, de BE a BB → Buçarda (4), art. 1.54, alínea g.
Sequência: (5) (1) (3) (-) (2) (4).`,
  },
  {
    id: "artenaval-03",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `Com relação às anteparas (bulkheads) e aos nomes que recebem conforme sua posição, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:`,
    alternativas: {
      A: "A antepara de colisão AV, ou simplesmente antepara de colisão, é a primeira antepara transversal estanque a contar de vante, destinada a limitar a entrada de água em caso de abalroamento de proa, que é o acidente mais provável.",
      B: "As anteparas transversais principais são anteparas estruturais e estanques, contínuas de um bordo a outro e desde o fundo do casco até o convés de compartimentagem, mas por vezes possuem degraus ao nível de conveses.",
      C: "Antepara frontal é a antepara transversal que limita a parte de ré do castelo, a parte de vante do tombadilho ou a parte extrema de uma superestrutura.",
      D: "Antepara diametral é a antepara dirigida num plano vertical longitudinal que não seja o plano diametral, podendo ser do casco ou de casarias.",
      E: "Antepara parcial, ou diafragma, é a que se estende apenas em uma parte de um compartimento ou tanque; pode também ir do fundo de um tanque ao topo, provida de várias aberturas, servindo como reforço da estrutura.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 1.55, alínea d, item 1). Não é a resposta.",
      B: "Afirmação correta (art. 1.55, alínea d, item 2). Não é a resposta.",
      C: "Afirmação correta (art. 1.55, alínea d, item 3). Não é a resposta.",
      D: "INCORRETA, portanto a resposta. A definição apresentada é a de antepara longitudinal ou antepara lateral (art. 1.55, alínea d, item 5). A antepara diametral é a situada NO plano diametral, isto é, no plano vertical longitudinal que passa pela quilha (item 4).",
      E: "Afirmação correta (art. 1.55, alínea d, item 6). Não é a resposta.",
    },
  },
  {
    id: "artenaval-04",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Sacramento embarcou em um cargueiro e subiu ao passadiço para iniciar a manobra de entrada no porto. Com relação à divisão do casco em conveses, cobertas e plataformas, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "Convés principal é o primeiro pavimento contínuo de proa a popa, contando de cima para baixo, que é descoberto no todo ou em parte; a parte de popa do convés principal chama-se tolda.",
      B: "Numa superestrutura colocada a vante, onde se encontram os postos de navegação, o convés mais elevado chama-se passadiço, e o convés imediatamente abaixo, onde ficam a casa do leme e os camarins de navegação e de rádio, chama-se tijupá.",
      C: "Convés da borda-livre é o convés mais alto e contínuo até onde vão as anteparas estruturais do navio; convés de compartimentagem é o convés completamente chapeado a partir do qual se mede a borda-livre.",
      D: "Convés corrido (flush deck) é um convés principal com estruturas que se estendem de um a outro bordo e com tosamento acentuado.",
      E: "Abaixo do convés principal, os conveses são numerados de baixo para cima (segundo convés, terceiro convés etc.), e o espaço entre o convés mais baixo e o teto do fundo duplo chama-se coberta.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. É a definição do art. 1.56, alíneas a e b: o convés principal é o primeiro pavimento contínuo de proa a popa, de cima para baixo, descoberto no todo ou em parte; sua parte de proa é o convés a vante, a de meia-nau é o convés a meia-nau e a de popa é a tolda.",
      B: "Errada. Está invertido: pelo art. 1.56, alínea l, o convés mais elevado da superestrutura de vante é o tijupá, e o convés imediatamente abaixo, dispondo de uma ponte de BB a BE de onde o Comandante dirige a manobra, é o passadiço, onde ficam a casa do leme e os camarins de navegação e de rádio.",
      C: "Errada. As definições estão trocadas: convés da borda-livre é o convés completamente chapeado, com fechamentos estanques, a partir do qual se mede a borda-livre (art. 1.56, alínea r); convés de compartimentagem é o convés mais alto e contínuo até onde vão as anteparas estruturais (alínea s).",
      D: "Errada. Convés corrido é um convés principal SEM estruturas que se estendam de um a outro bordo e SEM tosamento (art. 1.56, alínea p).",
      E: "Errada. Os conveses abaixo do principal são numerados de CIMA para BAIXO (art. 1.56, alínea f), e o espaço entre o convés mais baixo e o teto do fundo duplo (ou o fundo) chama-se porão, não coberta (alínea g).",
    },
  },
  {
    id: "artenaval-05",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `Durante a manobra de um navio graneleiro, o Prático Vasconcelos conversava com o Comandante sobre a subdivisão interna do casco. Considere as afirmativas abaixo, de acordo com Maurílio M. Fonseca, no livro Arte Naval:

I) Os compartimentos ou tanques de colisão, a vante e a ré, limitados respectivamente pelas anteparas de colisão AV e AR, são estanques e devem permanecer vazios.
II) Coferdam é o espaço limitado por anteparas, hastilhas ou longarinas estanques, próximas entre si, que tem por finalidade servir como isolante entre tanques e compartimentos quando assim for exigido por regulamentos de segurança.
III) Os tanques fundos ou profundos (deep tanks) estendem-se do fundo do casco ou do teto do fundo duplo até o convés principal, e têm por objetivo abaixar o centro de gravidade do navio.
IV) O túnel do eixo, no interior do qual ficam alojadas as seções da linha de eixo desde a praça de máquinas até a entrada no tubo telescópico, não precisa ser estanque.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      E: "Apenas a afirmativa I) é verdadeira.",
    },
    correta: "A",
    comentario: `I) Verdadeira — art. 1.64: os compartimentos ou tanques de colisão são os compartimentos extremos a vante e a ré, limitados pelas anteparas de colisão AV e AR; são estanques e devem permanecer vazios.
II) Verdadeira — art. 1.63: é exatamente a definição de coferdam.
III) Falsa — art. 1.62: os tanques profundos estendem-se do fundo do casco ou do teto do fundo duplo até o convés MAIS BAIXO, ou um pouco acima deste (não até o convés principal), e seu objetivo é permitir um lastro líquido adicional SEM ABAIXAR MUITO o centro de gravidade do navio.
IV) Falsa — art. 1.65: o túnel do eixo DEVE ser estanque.`,
  },
  {
    id: "artenaval-06",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Ribeiro, a bordo de um navio mercante navegando com mar grosso, observou grandes massas de água embarcadas no convés escoando por aberturas existentes na borda-falsa. De acordo com Maurílio M. Fonseca, no livro Arte Naval, essas aberturas, usualmente retangulares, podendo ter uma grade fixa ou uma portinhola que se abre livremente de dentro para fora em torno de um eixo horizontal, denominam-se:`,
    alternativas: {
      A: "Embornais.",
      B: "Escovéns.",
      C: "Saídas de água.",
      D: "Gateiras.",
      E: "Bueiros.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. Embornal é a abertura para escoamento das águas de baldeação ou da chuva, feita geralmente no convés junto à borda, prolongando-se por uma dala (art. 1.90). O próprio art. 1.91 adverte para não confundir as saídas de água com os embornais.",
      B: "Errada. Tubo do escovém é cada um dos tubos por onde gurnem as amarras do navio, do convés para o costado (art. 1.89).",
      C: "Correta. Saídas de água (freeing ports) são aberturas usualmente retangulares feitas na borda-falsa, com grade fixa ou portinhola que se abre livremente de dentro para fora em torno de um eixo horizontal, e servem para dar saída às grandes massas de água que embarcam sobre o convés em mar grosso (art. 1.91; ver também art. 1.22).",
      D: "Errada. Gateiras são as aberturas feitas no convés por onde as amarras passam para o paiol (art. 1.88).",
      E: "Errada. Bueiros são orifícios feitos nas hastilhas ou nas longarinas para permitir o escoamento das águas para a rede de esgoto (art. 1.80).",
    },
  },
  {
    id: "artenaval-07",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `Com relação aos acessórios do casco na carena, no costado e na borda, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:`,
    alternativas: {
      A: "Bolinas, ou quilhas de balanço, são chapas ou estruturas colocadas perpendicularmente em relação ao chapeamento, na altura da curva do bojo, no sentido longitudinal, uma em cada bordo, servindo para amortecer a amplitude dos balanços.",
      B: "Verdugo é a peça reforçada posta no costado de alguns navios, especialmente os rebocadores, ou em embarcações pequenas em geral, a título de proteção durante as manobras de atracação.",
      C: "Guarda do hélice é a armação colocada no costado AR, e algumas vezes na carena, a fim de proteger, nas atracações, os hélices que ficam muito disparados do casco.",
      D: "Buzina é a peça de forma elíptica, de aço ou outro metal, fixada na borda para servir de guia aos cabos de amarração; as situadas no bico de proa e no painel tomam os nomes de buzina da roda e buzina do painel, respectivamente.",
      E: "Os zincos protetores, presos na carena ou no interior de um tanque para proteger as peças de aço contra a ação galvânica da água do mar, devem ser fundidos e nunca laminados.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta (art. 1.103). Não é a resposta.",
      B: "Afirmação correta (art. 1.107). Não é a resposta.",
      C: "Afirmação correta (art. 1.106). Não é a resposta.",
      D: "Afirmação correta (art. 1.120). Não é a resposta.",
      E: "INCORRETA, portanto a resposta. O art. 1.104 diz o contrário: os zincos protetores devem ser LAMINADOS e nunca fundidos. O restante da definição (proteção das peças de aço contra a ação galvânica da água do mar) está correto.",
    },
  },
  {
    id: "artenaval-08",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Moreira, durante a manobra de fundeio de um navio mercante, acompanhou pelo rádio o trabalho do pessoal do castelo. Com relação ao aparelho de fundear e suspender e aos acessórios de amarração existentes no convés, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "O molinete é constituído por um tambor vertical comandado por motor elétrico ou hidráulico, enquanto o cabrestante possui tambores de formato especial, denominados coroa de barbotim, ligados a um eixo horizontal.",
      B: "O aparelho de fundear e suspender compreende a máquina de suspender (cabrestante ou molinete) e os acessórios que aguentam a amarra, tais como o mordente, a boça da amarra e o pino de braga.",
      C: "Mordente é o pedaço de cabo ou corrente com que se aboça a amarra; boça da amarra é a peça fixa no convés que aguenta a amarra, mordendo-a em um dos elos.",
      D: "Cabeços são colunas circulares duplas de aço, de pequena altura, montadas sempre aos pares, tanto a bordo quanto no cais, e servem para dar-se volta às espias de amarração e aos cabos de reboque.",
      E: "Abita é um cabeço de aço duplo, sem nervuras, que faz parte do aparelho de fundear e serve para aguentar a amarra durante o fundeio.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Está invertido: o cabrestante é o aparelho de tambor vertical (art. 1.155); o molinete é o equipamento com tambores de formato especial para acomodar os elos da amarra, chamados coroa de barbotim, ligados a um eixo horizontal (art. 1.156).",
      B: "Correta. É a definição do art. 1.154: o aparelho de fundear e suspender compreende a máquina de suspender (cabrestante ou molinete) e os acessórios que aguentam a amarra, como o mordente, a boça da amarra e o pino de braga.",
      C: "Errada. As definições estão trocadas: mordente é a peça fixa no convés que aguenta a amarra mordendo-a em um dos elos (art. 1.157); boça da amarra é o pedaço de cabo ou corrente com que se aboça a amarra (art. 1.158).",
      D: "Errada. A bordo os cabeços são montados na maioria das vezes aos pares, mas o art. 1.136 é expresso ao dizer que no cais, para amarração dos navios, os cabeços NÃO são montados aos pares.",
      E: "Errada. Abita é um cabeço de aço SINGELO, dispondo de nervuras salientes chamadas tetas; é uma peça do arranjo de AMARRAÇÃO e serve para nela a espia dar uma volta redonda (art. 1.159).",
    },
  },
  {
    id: "artenaval-09",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `Com relação às definições básicas da geometria do navio, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "Flutuações isocarenas são aquelas em que dois planos de flutuação limitam volumes iguais de água deslocada, como ocorre quando o navio se inclina lateralmente: a parte que emergiu em um dos bordos é igual à que imergiu no outro.",
      B: "Zona de flutuação é a parte das obras mortas compreendida entre a flutuação carregada e a flutuação leve; o deslocamento dessa zona indica, em volume, a reserva de flutuabilidade do navio.",
      C: "Centro de carena é o centro de gravidade da área de flutuação, e centro de flutuação é o centro de gravidade do volume da água deslocada pelo navio.",
      D: "Nos navios de superfície, o centro de carena está quase sempre acima do centro de gravidade do navio, pois nenhuma parte do volume imerso pode estar abaixo da linha de flutuação.",
      E: "Plano transversal é o plano de simetria do casco, que passa pela quilha; plano diametral é o plano perpendicular ao plano de simetria e ao plano de flutuação.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. É a definição do art. 2.4: quando dois planos de flutuação limitam volumes iguais de água deslocada, as flutuações são isocarenas; na inclinação lateral a porção imersa da carena modifica-se em forma, mas não em volume.",
      B: "Errada. A zona de flutuação é a parte das obras VIVAS entre a flutuação carregada e a flutuação leve, e seu deslocamento indica, em PESO, a capacidade total de carga do navio (art. 2.5).",
      C: "Errada. Está invertido: centro de carena (CC) é o centro de gravidade do volume da água deslocada (art. 2.22); centro de flutuação (CF) é o centro de gravidade da área de flutuação (art. 2.23).",
      D: "Errada. Nos navios de superfície o centro de carena está quase sempre ABAIXO do centro de gravidade, pois há pesos colocados acima da linha de flutuação, mas nenhuma parte do volume imerso pode estar ACIMA dessa linha (art. 2.22).",
      E: "Errada. As definições estão trocadas: o plano de simetria do casco, que passa pela quilha, é o plano diametral ou longitudinal; plano transversal é o perpendicular ao plano diametral e ao de flutuação (art. 2.1).",
    },
  },
  {
    id: "artenaval-10",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `Ao explicar a um Praticante de Prático os conceitos de empuxo, flutuabilidade e estabilidade inicial, o Prático Fernandes fez as seguintes afirmativas, com base em Maurílio M. Fonseca, no livro Arte Naval:

I) Empuxo é a força resultante da soma de todas as componentes verticais das pressões exercidas pelo líquido na superfície imersa do navio; estando o navio em repouso, o empuxo é igual ao peso do navio e o CG e o CC estão situados na mesma vertical.
II) A reserva de flutuabilidade dos navios de guerra de tipo usual varia de 50 a 75% do deslocamento normal, e num submarino em deslocamento normal é de cerca de 30%.
III) O metacentro deve estar abaixo do centro de gravidade para haver equilíbrio estável; se M estiver acima de G, tem-se um momento de emborcamento.
IV) Na prática, considera-se invariável a posição do metacentro inicial para inclinações até 10 graus nos navios de forma usual, e o braço de endireitamento é dado por GZ = GM sen θ.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas a afirmativa I) é verdadeira.",
    },
    correta: "B",
    comentario: `I) Verdadeira — art. 2.24: o empuxo é a resultante das componentes verticais das pressões na superfície imersa; como o navio não se move para cima nem para baixo, o empuxo é igual ao peso, e, estando em equilíbrio, CG e CC ficam na mesma vertical.
II) Verdadeira — art. 2.27: a reserva de flutuabilidade dos navios de guerra de tipo usual varia de 50 a 75% do deslocamento normal; num submarino em deslocamento normal é de cerca de 30%.
III) Falsa — art. 2.29: o metacentro deve estar ACIMA do centro de gravidade para haver equilíbrio estável; se M estiver ABAIXO de G, tem-se um momento de emborcamento.
IV) Verdadeira — art. 2.29: salvo indicação em contrário, a palavra metacentro refere-se ao metacentro inicial, considerado invariável na prática para inclinações até 10 graus nos navios de forma usual; das relações da fig. 2-7, GZ = GM sen θ e ME = W.GZ.`,
  },
  {
    id: "artenaval-11",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Castro, ao consultar as características de um navio para planejar sua atracação em um berço de comprimento limitado, verificou as diversas medidas de comprimento constantes da documentação de bordo. Com relação às dimensões lineares do navio, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "Quando se diz comprimento de um navio, sem especificar como foi medido, deve-se entender o comprimento de roda a roda, pois a ele são referidos os principais cálculos da embarcação, como os de resistência longitudinal.",
      B: "A perpendicular a vante é a linha vertical tirada no ponto de interseção da linha-d'água no calado de projeto com o contorno da roda de proa; nas embarcações com leme e hélice no plano diametral, a perpendicular a ré passa pelo centro da madre do leme.",
      C: "Comprimento de borda-livre corresponde a 85% do comprimento total em uma linha-d'água a 96% do menor pontal moldado, medido a partir da parte superior da quilha.",
      D: "Boca moldada é a maior largura do casco medida entre as superfícies externas do chapeamento, da couraça ou do verdugo; boca máxima é a maior largura medida entre as faces internas do chapeamento do costado.",
      E: "Linha marginal é a linha situada a uma distância não inferior a 76 centímetros abaixo do convés principal, e o comprimento alagável é normalmente mínimo a meio-navio.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Sem especificação, comprimento de um navio deve ser entendido como o comprimento ENTRE PERPENDICULARES, pois a ele são referidos os principais cálculos da embarcação (art. 2.50). O comprimento de roda a roda é definido no art. 2.55.",
      B: "Correta. É o que dispõem os arts. 2.48 (perpendicular a vante: interseção da linha-d'água no calado de projeto com o contorno da roda de proa) e 2.49 (perpendicular a ré: nas embarcações com leme e hélice no plano diametral, passa pelo centro da madre do leme).",
      C: "Errada. Os percentuais estão trocados: o comprimento de borda-livre corresponde a 96% do comprimento total em uma linha-d'água a 85% do menor pontal moldado, medido a partir da parte superior da quilha, ou o comprimento da parte de vante da roda de proa até o eixo da madre do leme nessa linha-d'água, se este for maior (art. 2.51).",
      D: "Errada. Está invertido: boca moldada é medida entre as faces INTERNAS do chapeamento do costado, excluindo a espessura do chapeamento (art. 2.58); boca máxima é medida entre as superfícies EXTERNAS do chapeamento, da couraça ou do verdugo (art. 2.59).",
      E: "Errada. A linha marginal situa-se a não menos de 76 MILÍMETROS abaixo do convés principal, e o comprimento alagável é normalmente MÁXIMO a meio-navio e mínimo a um quarto do comprimento a partir da proa e da popa (art. 2.56).",
    },
  },
  {
    id: "artenaval-12",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Lima, antes de conduzir um navio por um canal de pouca profundidade, verificou os calados lidos nas escalas de calado e a condição de trim do navio. Com relação a calado, escala de calado, trim e banda, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:`,
    alternativas: {
      A: "Calado médio é a média aritmética dos calados medidos sobre as perpendiculares AV e AR, e nem sempre corresponde ao calado a meia-nau, que é o medido na seção a meio comprimento entre perpendiculares.",
      B: "A bordo, para os cálculos de manobra de pesos e determinação do deslocamento, mede-se o calado médio; para entrada em diques e passagem em águas de pouco fundo, mede-se o maior dos calados, que é geralmente o calado AR.",
      C: "Nas escalas de calado com algarismos da altura de um decímetro, são escritos somente os números pares de decímetros, e cada número indica o calado que se tem quando a superfície da água está rasando o seu limbo inferior.",
      D: "Trim é a medida da inclinação longitudinal, isto é, a diferença entre os calados AV e AR, expressa em metros ou em pés; banda ou adernamento é a inclinação para um dos bordos, medida em graus.",
      E: "Compassar um navio é tirar a banda, trazendo-o à flutuação direita quando inclinado transversalmente; aprumar é tirar o trim; e, quando um navio tem trim, é preferível que esteja abicado, pois assim governa melhor.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta (art. 2.61). Não é a resposta.",
      B: "Afirmação correta (art. 2.61). Não é a resposta.",
      C: "Afirmação correta (art. 2.65). Não é a resposta.",
      D: "Afirmação correta (art. 2.82). Não é a resposta.",
      E: "INCORRETA, portanto a resposta. Pelo art. 2.82, compassar é tirar o TRIM (inclinação longitudinal) e aprumar é tirar a BANDA (inclinação transversal). Além disso, quando um navio tem trim é preferível que esteja APOPADO: o navio abicado é mais propenso a embarcar água pela proa, prejudica a eficiência dos propulsores e é mais difícil de governar.",
    },
  },
  {
    id: "artenaval-13",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `Com relação a deslocamento, expoente de carga e arqueação, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:`,
    alternativas: {
      A: "Deslocamento padrão é o deslocamento do navio completo, com toda a tripulação, armamento, munição, sobressalentes, provisões e água potável, mas sem nenhum combustível ou água de alimentação de reserva; é utilizado unicamente para a comparação dos navios de guerra quanto ao valor militar.",
      B: "Deslocamento normal é o peso do navio completo com a carga total de combustível, munição, água potável e mantimentos a bordo, e é a condição a que se referem, salvo indicação em contrário, todos os dados de um navio mercante.",
      C: "Expoente de carga, ou peso morto, é a diferença entre o deslocamento máximo e o deslocamento mínimo, e exprime exatamente o peso da carga paga que um navio mercante pode transportar.",
      D: "A arqueação bruta (AB) é uma medida de peso do navio, expressa em toneladas de arqueação de 100 pés cúbicos (2,83 m³), e por isso não deve ser confundida com o deslocamento.",
      E: "Deslocamento leve é o peso do navio completo, pronto para o serviço, incluindo a tripulação e a água nos tanques de lastro, mas sem munição, provisões e combustível.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. É a definição do art. 2.74: o deslocamento padrão inclui tripulação, máquinas, armamento, munição, sobressalentes, provisões e água potável, todos os paióis atestados, mas nenhum combustível ou água de alimentação de reserva; é usado unicamente para comparar navios de guerra quanto ao valor militar (condição estabelecida pelo tratado de Washington, 1922 – art. 2.75).",
      B: "Errada. No deslocamento normal a carga de combustível, munição, água e mantimentos é a carga NORMAL, geralmente 2/3 da carga total; e é a condição de referência dos navios de GUERRA. Nos navios mercantes não se cogita o deslocamento normal, considerando-se o deslocamento em plena carga e o leve (art. 2.72).",
      C: "Errada. O expoente de carga é, de fato, a diferença entre os deslocamentos máximo e mínimo, mas NÃO exprime o peso da carga paga, que é apenas uma parte dele (o expoente inclui também combustível, aguada, consumíveis, tripulação etc.) (arts. 2.76 e 2.77).",
      D: "Errada. A AB é um valor ADIMENSIONAL, proporcional ao volume interno do navio; nem a AB nem a antiga TAB (em que cada tonelada de arqueação correspondia a 100 pés cúbicos ou 2,83 m³) são medidas de massa ou peso (art. 2.78).",
      E: "Errada. O deslocamento leve não inclui tripulantes nem passageiros, nem água nos tanques de lastro e fundo duplo, além de excluir munição, provisões, combustível e água potável (art. 2.73).",
    },
  },
  {
    id: "artenaval-14",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: `O Prático Souza vai conduzir um navio mercante, que se encontra com deslocamento de 2.500 toneladas e calado médio de 6,00 metros na água salgada, até um terminal fluvial situado em água doce (densidade média 1,010). Sabendo que o número de toneladas por centímetro de imersão do navio é 8, e utilizando o método apresentado por Maurílio M. Fonseca, no livro Arte Naval, o calado médio do navio na água doce será de:`,
    alternativas: {
      A: "5,95 m",
      B: "6,00 m",
      C: "6,05 m",
      D: "6,40 m",
      E: "6,50 m",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. Ao passar da água salgada para a água doce o navio AUMENTA de calado, pois precisa deslocar maior volume de água (menos densa) para equilibrar o mesmo peso (art. 2.89); o calado não diminui.",
      B: "Errada. O calado não permanece o mesmo: como a água doce pesa menos (1,010 t/m³ contra 1,026 t/m³ da água salgada), o navio imerge até que peso e empuxo voltem a se equilibrar (art. 2.89).",
      C: "Correta. Pelo art. 2.89, a imersão ao passar para a água doce é a mesma que ocorreria se o navio recebesse a bordo um peso de 0,016 × W: aumento de calado = (W × 0,016) / toneladas por centímetro = (2.500 × 0,016) / 8 = 40 / 8 = 5 cm. Logo, o calado médio passa a ser 6,00 + 0,05 = 6,05 m.",
      D: "Errada. 40 cm seria o resultado de tomar diretamente W × 0,016 = 40 como se fosse a variação de calado em centímetros, esquecendo de dividir pelas toneladas por centímetro (art. 2.89).",
      E: "Errada. Um aumento de 50 cm não corresponde a nenhum dos cálculos do art. 2.89; o aumento correto é de apenas 5 cm.",
    },
  },
);

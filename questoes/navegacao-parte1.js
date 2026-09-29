// Questões elaboradas a partir do livro "Navegação: a Ciência e a Arte – Volume I"
// (Altineu Pires Miguens, DHN, 2ª revisão atualizada, 2023)
// Capítulo 1 – O Problema Geral da Navegação (navegacao-01 a 03)
// Capítulo 2 – Projeções Cartográficas e a Carta Náutica (navegacao-04 a 08)
// Capítulo 3 – Agulhas Náuticas. Conversão de Rumos e Marcações (navegacao-09 a 13)
QUESTOES.push(
  {
    id: "navegacao-01",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Tavares, a bordo do navio-tanque “Rio Doce”, conversava com o Oficial de Quarto sobre os tipos de navegação, as distâncias da costa que os caracterizam e os métodos empregados para determinar a posição do navio. Com relação aos tipos e métodos de navegação, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "A navegação costeira é aquela realizada entre portos, afastada de até 30 milhas náuticas da costa, mas não inferior a 3 milhas, ou em águas com até 100 metros de profundidade, o que ocorrer primeiro.",
      B: "A navegação em águas restritas é a que se pratica em portos e suas proximidades, em barras, baías, canais, rios, lagos, lagoas, proximidades de perigos ou quaisquer outras situações em que a manobra do navio é limitada pela estrita configuração da costa ou da topografia submarina; é também o tipo utilizado quando se navega a menos de 3 milhas da costa ou do perigo mais próximo, sendo o que exige maior precisão.",
      C: "A navegação oceânica é a realizada fora da área de costa, além do limite de 500 metros de profundidade ou de 100 milhas náuticas de terra, o que ocorrer primeiro.",
      D: "Na navegação estimada, a posição é determinada por meio de observações visuais de pontos em terra e/ou de auxílios à navegação representados na carta náutica.",
      E: "Na navegação eletrônica, a posição é determinada por meio da previsão da posição futura do navio, a partir de uma posição conhecida, utilizando o rumo e a velocidade na superfície e o intervalo de tempo entre as posições.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Pela seção 1.3, alínea b, a navegação costeira é a realizada entre portos, afastada de até 50 milhas náuticas da costa, mas não inferior a 3 milhas, ou em águas com até 200 metros de profundidade, o que ocorrer primeiro (e não 30 milhas e 100 metros).",
      B: "Correta. É a definição da seção 1.3, alínea a: a navegação em águas restritas é a praticada em portos, barras, baías, canais, rios, lagos, lagoas e proximidades de perigos, onde a manobra é limitada pela configuração da costa ou da topografia submarina, e também a utilizada a menos de 3 milhas da costa ou do perigo mais próximo, sendo o tipo que exige maior precisão.",
      C: "Errada. Pela seção 1.3, alínea c, a navegação oceânica é a realizada além do limite de 200 metros de profundidade ou de 50 milhas náuticas de terra, o que ocorrer primeiro (e não 500 metros e 100 milhas).",
      D: "Errada. A definição apresentada é a de navegação visual. Na navegação estimada, a posição é determinada pela previsão da posição futura do navio, a partir de uma posição conhecida, com o rumo e a velocidade na superfície, o intervalo de tempo entre as posições e a corrente, caso conhecida (seção 1.3, métodos de navegação).",
      E: "Errada. A definição apresentada é a de navegação estimada. Na navegação eletrônica, a posição é determinada por meio de informações obtidas de equipamentos eletrônicos, tais como radar ou satélite (GNSS) (seção 1.3, métodos de navegação).",
    },
  },
  {
    id: "navegacao-02",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação à forma da Terra, aos sistemas geodésicos de referência e às distâncias na superfície da Terra, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "O geoide é o sólido formado pela superfície do nível médio dos mares, supondo-o recobrindo toda a Terra e prolongando-se através dos continentes; é uma superfície equipotencial, mas ainda irregular e sem representação matemática.",
      B: "O elipsoide de revolução, sólido gerado pela rotação de uma elipse em torno do eixo dos polos, é a superfície teórica que mais se aproxima da forma real da Terra; como sua diferença para uma superfície esférica é muito pequena, a esfera é adotada como superfície teórica da Terra nos cálculos da navegação astronômica e de derrotas ortodrômicas.",
      C: "O WGS84 é um sistema de referência geodésico global cujo ponto datum é o centro de massa da Terra (geocentro); é o sistema de referência das efemérides operacionais do sistema GPS e é adotado, atualmente, pela DHN na construção das cartas náuticas.",
      D: "A ortodromia é a linha que intercepta os vários meridianos segundo um ângulo constante, sendo por isso denominada linha de rumo; a loxodromia é qualquer segmento de um círculo máximo da esfera terrestre e representa a menor distância entre dois pontos na superfície da Terra.",
      E: "A milha náutica é o comprimento do arco de meridiano que subtende um ângulo de 1 minuto com vértice no centro da Terra; como esse comprimento varia ligeiramente com o lugar, fixou-se, por Acordo Internacional (1929), o valor de 1.852 metros, independentemente da Latitude do lugar.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (seção 1.4). Não é a resposta.",
      B: "Afirmação correta (seção 1.4). Não é a resposta.",
      C: "Afirmação correta (seção 1.4). Não é a resposta.",
      D: "INCORRETA, portanto é a resposta. As definições estão trocadas: pela seção 1.7.2, ORTODROMIA é qualquer segmento de um círculo máximo da esfera terrestre, sendo a menor distância entre dois pontos na superfície da Terra; LOXODROMIA é a linha que intercepta os vários meridianos segundo um ângulo constante, isto é, a linha de rumo, pela qual é quase sempre mais conveniente navegar.",
      E: "Afirmação correta (seção 1.7.1). Não é a resposta.",
    },
  },
  {
    id: "navegacao-03",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Medeiros, a bordo do graneleiro “Serra Azul”, que governava no Rumo Verdadeiro (Rv) 310º, observou um farol na Marcação Polar (Mp) 045º BB. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), a Marcação Relativa (Mr) e a Marcação Verdadeira (Mv) do farol são, respectivamente:`,
    alternativas: {
      A: "Mr = 045º e Mv = 355º.",
      B: "Mr = 315º e Mv = 355º.",
      C: "Mr = 045º e Mv = 265º.",
      D: "Mr = 315º e Mv = 005º.",
      E: "Mr = 315º e Mv = 265º.",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. Esses seriam os valores se o farol estivesse a 045º por BORESTE (Mr = 045º; Mv = 045º + 310º = 355º). A Marcação Polar é medida da proa para BE ou para BB, de 000º a 180º, e aqui o farol está por BOMBORDO (seção 1.8).",
      B: "Errada. A Marcação Relativa está certa (315º), mas a Marcação Verdadeira não: Mv = Mr + R = 315º + 310º = 625º; subtraindo 360º, Mv = 265º. O valor 355º resultaria de somar 045º ao rumo, como se o farol estivesse por boreste (seção 1.8).",
      C: "Errada. A Marcação Verdadeira está certa (265º), mas a Marcação Relativa é medida de 000º a 360º, no sentido horário, a partir da proa; para um objeto a 045º por bombordo, Mr = 360º – 045º = 315º, e não 045º (seção 1.8).",
      D: "Errada. A Marcação Relativa está certa (315º), mas a Marcação Verdadeira é obtida SOMANDO o Rumo à Marcação Relativa (Mv = Mr + R), e não pela diferença entre eles (315º – 310º = 005º) (seção 1.8).",
      E: "Correta. Pela seção 1.8, a Marcação Polar é medida da proa para BE ou BB, de 000º a 180º, e a Marcação Relativa é medida de 000º a 360º, no sentido horário, a partir da proa: Mp = 045º BB → Mr = 360º – 045º = 315º (o livro dá o exemplo Mp = 090º BB → Mr = 270º). Somando-se o Rumo à Marcação Relativa obtém-se a Marcação Verdadeira: Mv = Mr + R = 315º + 310º = 625º – 360º = 265º. Conferência: farol 045º à esquerda da proa 310º → 310º – 045º = 265º.",
    },
  },
  {
    id: "navegacao-04",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `Associe as projeções cartográficas da coluna A com as descrições da coluna B, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

COLUNA A
1) Projeção gnomônica
2) Projeção estereográfica
3) Projeção ortográfica
4) Projeção Conforme de Lambert
5) Projeção Transversa de Mercator

COLUNA B
( ) Projeção cônica que utiliza um cone secante, o qual intercepta a superfície da Terra em dois paralelos padrões; é a projeção cônica mais utilizada em navegação, embora seu emprego maior seja em cartas aeronáuticas.
( ) Projeção perspectiva com ponto de vista no centro da Terra; apresenta todos os tipos de deformações, mas tem a propriedade única de representar todos os círculos máximos por linhas retas, sendo empregada principalmente na construção de cartas para navegação ortodrômica.
( ) Projeção na qual a escala de distâncias ao longo de qualquer círculo máximo que passe pelo ponto de tangência é constante, podendo ser usada para representar toda a Terra.
( ) Projeção perspectiva com ponto de vista no infinito (linhas projetantes paralelas); sua principal aplicação em Cartografia Náutica ocorre no campo da navegação astronômica, para apresentar ou solucionar graficamente o triângulo de posição.
( ) Projeção cilíndrica conforme na qual o cilindro é tangente à superfície da Terra ao longo de um meridiano; é útil para cartas que abrangem uma grande faixa de Latitudes e uma faixa estreita de Longitudes.
( ) Projeção perspectiva com ponto de vista na superfície da Terra, em posição oposta ao ponto de tangência; é também chamada de azimutal ortomorfa e seu principal uso em Cartografia Náutica é na construção de cartas das regiões polares.`,
    alternativas: {
      A: "(4) (1) (-) (3) (5) (2)",
      B: "(4) (1) (-) (2) (5) (3)",
      C: "(4) (2) (-) (3) (5) (1)",
      D: "(5) (1) (-) (3) (4) (2)",
      E: "(4) (1) (2) (3) (5) (-)",
    },
    correta: "A",
    comentario: `Item a item:
1º Cone secante, com dois paralelos padrões; projeção cônica mais utilizada em navegação, com emprego maior em cartas aeronáuticas → Projeção Conforme de Lambert (4), seção 2.5.5.
2º Ponto de vista no centro da Terra (seção 2.3); apresenta todas as deformações, mas representa todos os círculos máximos por linhas retas, sendo usada nas cartas para navegação ortodrômica → Projeção gnomônica (1), seção 2.5.1.
3º Escala de distâncias constante ao longo de qualquer círculo máximo que passe pelo ponto de tangência, podendo representar toda a Terra → Projeção azimutal equidistante (seção 2.5.4), que não consta da coluna A (-).
4º Ponto de vista no infinito (seção 2.3); aplicação na navegação astronômica, para apresentar ou solucionar graficamente o triângulo de posição → Projeção ortográfica (3), seção 2.5.3.
5º Cilindro tangente ao longo de um meridiano; útil para grande faixa de Latitudes e faixa estreita de Longitudes → Projeção Transversa de Mercator (5), seção 2.5.6.
6º Ponto de vista na superfície da Terra, oposto ao ponto de tangência; azimutal ortomorfa; cartas das regiões polares → Projeção estereográfica (2), seções 2.3 e 2.5.2.
Sequência: (4) (1) (-) (3) (5) (2).`,
  },
  {
    id: "navegacao-05",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação à Projeção de Mercator e ao seu emprego na Cartografia Náutica, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "A Projeção de Mercator é classificada como uma projeção cilíndrica equatorial conforme: cilíndrica, por ser a superfície de projeção um cilindro; equatorial, por ser o cilindro tangente à superfície da Terra no Equador; e conforme, em razão de os ângulos serem representados sem deformação.",
      B: "Na Projeção de Mercator, os meridianos são representados por linhas retas, os paralelos e o Equador por um segundo sistema de linhas retas, perpendicular ao dos meridianos, e as linhas de rumo (loxodromias) também são representadas por linhas retas.",
      C: "Numa Carta de Mercator, a escala das Latitudes é constante, enquanto a escala das Longitudes cresce à medida que a Latitude aumenta; desse modo, as distâncias só serão verdadeiras se forem lidas na escala das Longitudes.",
      D: "São limitações da Projeção de Mercator a deformação excessiva nas altas latitudes, a impossibilidade de representação dos polos e o fato de os círculos máximos, exceto o Equador e os meridianos, não serem representados por linhas retas.",
      E: "A Projeção de Mercator é geralmente limitada pelo paralelo de 60º, porque nessa latitude as deformações já se apresentam excessivas; entretanto, pode ser utilizada satisfatoriamente até a Latitude de 80º, desde que sejam tomadas precauções especiais quanto ao uso da escala das distâncias.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta (seção 2.4.2). Não é a resposta.",
      B: "Afirmação correta (seção 2.4.3, alínea a, itens 1 e 6). Não é a resposta.",
      C: "INCORRETA, portanto é a resposta. Está invertido: pela seção 2.4.4, numa Carta de Mercator a escala das LONGITUDES é constante, e a escala das LATITUDES cresce à medida que a Latitude aumenta (latitudes crescidas); por isso, as distâncias só serão verdadeiras se forem lidas na escala das LATITUDES (1 minuto de Latitude é igual a 1 milha).",
      D: "Afirmação correta (seção 2.4.3, alínea b). Não é a resposta.",
      E: "Afirmação correta (seção 2.4.5). Não é a resposta.",
    },
  },
  {
    id: "navegacao-06",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Nogueira, a bordo do navio porta-contêineres “Atlântico Sul”, examinava com o Comandante as cartas náuticas em papel disponíveis para demandar o porto. Com relação à escala e aos elementos representados nas cartas náuticas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Quanto maior o denominador da escala, maior ela será; assim, uma carta na escala de 1:300.000 permite representação mais detalhada do que uma carta na escala de 1:30.000.",
      B: "Nas cartas náuticas brasileiras, as profundidades são representadas em metros, tendo como datum vertical o nível médio do mar, e as altitudes são medidas em metros acima do nível médio das baixa-mares de sizígia.",
      C: "A escala natural da carta, mostrada no título, é verdadeira em toda a extensão da carta, pois na Projeção de Mercator todos os paralelos são representados sem deformações de escala.",
      D: "Sempre que uma determinada área for abrangida por cartas náuticas em escalas diversas, deve-se navegar na carta de maior escala, que apresentará sempre maior grau de detalhe na representação tanto do relevo submarino como da parte emersa.",
      E: "Na carta náutica, a linha de contorno da costa corresponde à baixa-mar, e a cor azul é usada para enfatizar as águas profundas, com a tonalidade mais escura mostrando as águas mais profundas.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. Pela seção 2.6.2, quanto maior o denominador da escala, MENOR ela será, e quanto maior a escala, mais detalhada pode ser a representação. A carta de 1:30.000 é de maior escala (mais detalhada) que a de 1:300.000.",
      B: "Errada. Os planos de referência estão trocados: pela seção 2.6.3, alínea b (itens 5 e 6), as profundidades são representadas em metros, tendo como datum vertical o nível médio das baixa-mares de sizígia, e as altitudes são medidas em metros, tendo como origem o nível médio do mar.",
      C: "Errada. Pelas seções 2.6.2 e 2.6.3, alínea b (item 4), a escala natural só é realmente verdadeira ao longo do paralelo de referência (normalmente a Latitude Média do trecho abrangido), que é o único representado sem deformação na carta, pois a escala de latitudes varia em virtude das latitudes crescidas.",
      D: "Correta. É a norma enunciada na seção 2.6.2 e reiterada na seção 2.7: deve-se utilizar sempre a carta náutica de maior escala disponível, que representa com maior grau de detalhe o relevo submarino e a parte emersa; além disso, a um mesmo erro gráfico de plotagem correspondem dezenas de metros na carta de maior escala e até muitos décimos de milha na de menor escala.",
      E: "Errada. Pela seção 2.6.3, alínea g, a linha de contorno da costa corresponde à PREAMAR; e, pela alínea l, a cor azul deve ser usada para enfatizar as águas RASAS, com a tonalidade mais escura mostrando as águas MAIS RASAS.",
    },
  },
  {
    id: "navegacao-07",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Bastos embarcou em um navio mercante cujo passadiço era dotado de um Sistema Eletrônico de Apresentação de Cartas e Informações (ECDIS). Com relação às cartas náuticas digitais e aos sistemas eletrônicos de exibição de cartas náuticas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "A Carta Náutica Eletrônica (ENC) é o arquivo vetorial que apresenta as informações cartográficas náuticas a partir de um banco de dados, permitindo ao utilizador interagir com os seus elementos, que podem ser utilizados para gerar alarmes visuais ou sonoros; por tais atributos, é considerada uma carta náutica “inteligente”.",
      B: "A Carta Náutica Raster (RNC) é a imagem digitalizada e georreferenciada de uma carta náutica em papel, formada por uma matriz de pontos (bitmap), e a sua utilização dispensa o uso concomitante das cartas náuticas em papel.",
      C: "O ECS (Electronic Chart System) é um sistema, certificado periodicamente, que cumpre as especificações estabelecidas por resoluções da IMO, ao passo que o ECDIS é um sistema de navegação genérico, que não cumpre tais especificações.",
      D: "Caso um trecho da derrota não disponha de ENC, o ECDIS poderá apresentar uma RNC, passando a operar no modo System Electronic Navigational Chart (SENC).",
      E: "A ENC é utilizada para a navegação em águas interiores, não contempladas pela Convenção SOLAS, e a IENC (Inland ENC) é utilizada para a navegação sob a Convenção SOLAS.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. É a definição da seção 2.6.4, alínea a: a ENC é o arquivo vetorial que apresenta as informações cartográficas a partir de um banco de dados, não perde qualidade de resolução com a mudança da escala de apresentação e permite ao utilizador interagir com os seus elementos, inclusive para gerar alarmes visuais ou sonoros, sendo por isso considerada uma carta náutica “inteligente”.",
      B: "Errada. A definição de RNC está certa (seção 2.6.4, alínea b), mas, pela seção 2.6.1, a utilização das cartas Raster NÃO dispensa o uso concomitante das cartas náuticas em papel, atualizadas até o último Aviso aos Navegantes.",
      C: "Errada. Está invertido: pela seção 2.6.4, o ECDIS é o sistema certificado periodicamente, que cumpre as especificações estabelecidas por resoluções da IMO; os ECS são sistemas de navegação genéricos, que não cumprem essas especificações, com quatro classes (A, B, C e D) cujos requisitos são estabelecidos pela RTCM.",
      D: "Errada. Pela seção 2.6.4, ao apresentar uma RNC o ECDIS passa a operar no modo Raster Chart Display System (RCDS). O SENC é o banco de dados interno do ECDIS, onde são armazenadas as ENC, suas atualizações e outras informações.",
      E: "Errada. Está invertido: pela seção 2.6.4, alínea a, a ENC é utilizada para navegação sob a Convenção SOLAS, e a IENC para navegação em águas interiores, não contempladas pela SOLAS.",
    },
  },
  {
    id: "navegacao-08",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `Durante a travessia do canal de acesso, o Prático Guimarães comentou com o Encarregado de Navegação os cuidados com a confiança e a atualização das cartas náuticas utilizadas a bordo. Considere as afirmativas abaixo, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) As alterações decorrentes de Aviso-Rádio e de Aviso Temporário devem ser inseridas a lápis na carta afetada, ao passo que as correções decorrentes de Aviso Permanente devem ser feitas a tinta vermelha, de maneira clara e sem rasuras.
II) A reimpressão de uma carta náutica em papel cancela a impressão anterior da mesma edição, ao passo que uma nova edição não cancela a edição anterior.
III) Se houver uma derrota aconselhada traçada na carta, o navio deverá navegar sobre ela; conforme a definição adotada pela OHI, derrota aconselhada é uma linha indicada na carta náutica, que foi especialmente investigada para assegurar que está livre de perigos, e ao longo da qual se recomenda às embarcações navegar.
IV) Diferentemente da carta em papel, a atualização não pode ser feita sobre a ENC, mas sim pela substituição do seu arquivo digital original, introduzido no ECDIS, por um novo arquivo, fornecido pelo Distribuidor de ENCs.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
    },
    correta: "E",
    comentario: `I) Verdadeira — seção 2.8, alínea a: as alterações decorrentes de Aviso-Rádio devem ser inseridas a lápis e apagadas logo que novo aviso as cancelar; as de Aviso Temporário devem ser feitas a lápis, anotando-se junto a elas o número e o ano do aviso; as correções de Aviso Permanente devem ser feitas a tinta vermelha, de maneira clara e sem rasuras.
II) Falsa — seção 2.8, alínea c: é o contrário. A reimpressão de uma carta NÃO cancela a impressão anterior da mesma edição; já uma nova edição CANCELA a edição anterior.
III) Verdadeira — seção 2.7: havendo derrota aconselhada traçada na carta, o navio deverá navegar sobre ela, e a definição transcrita é a adotada pela OHI.
IV) Verdadeira — seção 2.8, alínea b: a atualização não pode ser feita sobre a ENC, mas sim atualizando o seu arquivo digital original, introduzido no ECDIS, por um novo arquivo fornecido pelo Distribuidor de ENCs, de modo informatizado.`,
  },
  {
    id: "navegacao-09",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação ao magnetismo terrestre, à Declinação Magnética e ao Desvio da Agulha, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "A Declinação Magnética é o ângulo entre o Norte Magnético e o Norte da Agulha, sendo variável com a proa do navio; o Desvio da Agulha é o ângulo entre o Norte Verdadeiro e o Norte Magnético no local, variando de lugar para lugar e ao longo do tempo.",
      B: "A componente vertical (Z) do campo magnético terrestre é a responsável pela orientação da Agulha Magnética; como seu valor é máximo nos polos magnéticos, o desempenho da agulha é melhor nas altas Latitudes.",
      C: "As linhas isogônicas são as que unem pontos de mesma Declinação Magnética, e as linhas agônicas são as que unem pontos onde a Declinação Magnética é nula.",
      D: "O magnetismo permanente é adquirido pelas massas de ferro doce (não carburado) e varia com o rumo e com o lugar onde se navega; o magnetismo induzido é adquirido pelas massas de ferro duro durante a construção do navio e pouco se altera no futuro.",
      E: "Os Polos Magnéticos da Terra são fixos e coincidem com os Polos Geográficos; por isso, a Declinação Magnética de um local permanece constante ao longo do tempo.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. As definições estão trocadas: a Declinação Magnética é o ângulo entre o Norte Verdadeiro e o Norte Magnético no local, variando de local para local e ao longo do tempo (seção 3.2.3, alínea b); o Desvio da Agulha é o ângulo entre o Norte Magnético e o Norte da Agulha, variável com a proa do navio (seção 3.2.4, alínea b).",
      B: "Errada. Pela seção 3.2.3, alínea a, a componente HORIZONTAL (H) é a responsável pela orientação da Agulha Magnética; como seu valor diminui à medida que a Latitude aumenta (tornando-se nulo no polo magnético), o desempenho da agulha fica PREJUDICADO nas altas Latitudes (maiores que 60º).",
      C: "Correta. É o que consta da seção 3.2.3, alínea b: existem cartas especiais que apresentam as linhas isogônicas (linhas que unem pontos de mesma Declinação Magnética) e agônicas (linhas que unem pontos onde a Declinação Magnética é nula).",
      D: "Errada. Está invertido: pela seção 3.2.4, alínea b, o magnetismo permanente é o das massas de ferro DURO (fortemente carburadas), adquirido durante a construção do navio e que pouco se altera no futuro; o magnetismo induzido é o das massas de ferro DOCE (não carburado), temporário, variando com o rumo e com o lugar onde se navega.",
      E: "Errada. Pela seção 3.2.3, os Polos Magnéticos não coincidem com os Polos Verdadeiros (ou Geográficos) e variam de posição, enquanto os Polos Geográficos são fixos; por isso, a Declinação Magnética de um local também varia ao longo do tempo, e as cartas náuticas informam o seu valor e a sua variação anual.",
    },
  },
  {
    id: "navegacao-10",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação à compensação da Agulha Magnética e à determinação dos seus Desvios, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "Quando um novo navio é incorporado, o Desvio da Agulha Magnética, em qualquer proa, não deve ser superior a 3º; após essa primeira compensação, a agulha deve ser compensada a cada dois anos, no máximo, e, a partir da segunda compensação, o Desvio em qualquer proa não deverá exceder de 5º.",
      B: "Na operação de determinação dos Desvios, o navio deverá permanecer 3 a 4 minutos em cada proa escolhida, e as guinadas devem ser feitas rapidamente, com muito ângulo de leme, a fim de que o magnetismo induzido não produza seus efeitos.",
      C: "No método de determinação dos Desvios por marcação de um ponto distante, a distância mínima navio–objeto deve ser de 6 milhas, o que permitirá que o navio faça um giro de cerca de 100 metros de raio com a marcação do objeto variando menos de 0,5º.",
      D: "Se o navio possuir Degaussing (circuito de desmagnetização), deverão ser feitas duas determinações de Desvios e preparadas duas Tabelas e Curvas de Desvios, uma com o Degaussing ligado e outra com o Degaussing desligado.",
      E: "A determinação dos Desvios por comparação com a Agulha Giroscópica é o procedimento corrente utilizado nos navios, especialmente para as Agulhas de Governo, cuja situação a bordo geralmente não permite a obtenção de marcações ou a observação de alinhamento.",
    },
    correta: "B",
    explicacoes: {
      A: "Afirmação correta (seção 3.2.4, alínea d). Não é a resposta.",
      B: "INCORRETA, portanto é a resposta. Pela seção 3.2.4, alínea f, o navio deverá permanecer 3 a 4 minutos em cada proa escolhida justamente A FIM DE QUE o magnetismo induzido produza seus efeitos, e as guinadas devem ser feitas VAGAROSAMENTE, com pouco ângulo de leme.",
      C: "Afirmação correta (seção 3.2.4, alínea i). Não é a resposta.",
      D: "Afirmação correta (seção 3.2.4, alínea f). Não é a resposta.",
      E: "Afirmação correta (seção 3.2.4, alínea g). Não é a resposta.",
    },
  },
  {
    id: "navegacao-11",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Em 2026, o Prático Siqueira, a bordo do navio “Cabo Branco”, precisou orientar o governo pela Agulha Magnética, em razão de avaria na Agulha Giroscópica. O Rumo Verdadeiro (Rv) traçado na carta náutica era 214º. A carta informava, no interior da rosa-dos-rumos, Declinação Magnética de 21º 20' W (2018), com variação anual de 5' W. Para essa proa, a Curva de Desvios indicava Desvio da Agulha (Dag) de 2º E. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), o Rumo Magnético (Rmg) e o Rumo da Agulha (Rag) em que se deve governar são, respectivamente:`,
    alternativas: {
      A: "Rmg = 192º e Rag = 190º.",
      B: "Rmg = 192º e Rag = 194º.",
      C: "Rmg = 236º e Rag = 238º.",
      D: "Rmg = 236º e Rag = 234º.",
      E: "Rmg = 235,5º e Rag = 233,5º.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. A Declinação Magnética W foi subtraída do Rumo Verdadeiro (214º – 22º = 192º). Na conversão de Rumo Verdadeiro para Rumo Magnético, a declinação W é SOMADA, como no exemplo da seção 3.2.5, alínea a (Rmg = Rv + Dec mg W = 075º + 15º = 090º).",
      B: "Errada. Os dois sinais foram invertidos: a declinação W deve ser somada ao Rv para obter o Rmg (214º + 22º = 236º), e o desvio E deve ser subtraído do Rmg para obter o Rag (236º – 2º = 234º), conforme a seção 3.2.5, alínea a.",
      C: "Errada. O Rumo Magnético está certo (236º), mas, na passagem de Rmg para Rag, o Desvio da Agulha E é SUBTRAÍDO (Rag = Rmg – Dag E), como no exemplo da seção 3.2.5, alínea a (Rag = 090º – 3º E = 087º). O correto é Rag = 236º – 2º = 234º.",
      D: "Correta. Seguindo a seção 3.2.5, alínea a: 1) atualização da declinação: de 2018 para 2026 são 8 anos; 8 x 5' W = 40' W; Dec mg (2026) = 21º 20' W + 40' W = 22º 00' W; 2) Rmg = Rv + Dec mg (W) = 214º + 22º = 236º; 3) Rag = Rmg – Dag (E) = 236º – 2º = 234º. Conferência no sentido inverso: Rag 234º + 2º (E) = Rmg 236º; Rmg 236º – 22º (W) = Rv 214º.",
      E: "Errada. Esses valores resultam de usar a declinação da carta sem atualizá-la para o ano (21º 20' W, aproximada a 21,5º W): 214º + 21,5º = 235,5º. Pela seção 3.2.5, o valor da Declinação Magnética deve ser obtido para o local e ANO: com a variação anual de 5' W durante 8 anos (40' W), a declinação em 2026 é 22º W.",
    },
  },
  {
    id: "navegacao-12",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Prático Figueiredo, ao assumir a assessoria da manobra, verificou com o Oficial de Quarto o funcionamento da Agulha Giroscópica do navio. Considere as afirmativas abaixo, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) A inércia giroscópica (ou rigidez no espaço) é a propriedade que o giroscópio livre tem de manter seu eixo apontado sempre para um mesmo ponto no espaço, a despeito dos movimentos de sua base; quanto maior a velocidade de rotação e o peso do rotor, maior será a inércia giroscópica.
II) O Desvio da Giro (Dgi) é o ângulo entre o Norte Verdadeiro (ou Geográfico) e o Norte da Giro, sendo constante para todos os Rumos, ao passo que os Desvios da Agulha Magnética variam com o Rumo Magnético.
III) A Agulha Giroscópica não pode ser usada em latitudes tão altas quanto a Agulha Magnética, tornando-se virtualmente inútil a partir de 60º de latitude.
IV) Na determinação do Desvio da Giro pelo método de “redução do triângulo”, se a correção aplicada às marcações teve que ser subtraída, o desvio é LESTE (E); se teve que ser somada, o desvio é OESTE (W).

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e III) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — seção 3.3.2: a inércia giroscópica (ou rigidez no espaço) faz o giroscópio livre manter seu eixo apontado sempre para um mesmo ponto no espaço, a despeito dos movimentos de sua base; os dois principais fatores que a afetam são o peso do rotor e a velocidade de rotação, e quanto maiores forem, maior será a inércia giroscópica.
II) Verdadeira — seção 3.3.6, alíneas a e b: o Dgi é o ângulo entre o Norte Verdadeiro (ou Geográfico) e o Norte da Giro e é constante para todos os Rumos, ao passo que os Desvios da Magnética variam com o Rumo Magnético.
III) Falsa — seção 3.3.4: a Agulha Giroscópica pode ser usada em latitudes MAIS ALTAS que a Agulha Magnética. Pela seção 3.3.3, seu erro deve ser continuamente verificado a partir de 70º de latitude; entre 75º e 80º a maioria das giros apresenta grandes erros; e só a cerca de 85º de latitude ela se torna virtualmente inútil. O limite de 60º é o das altas latitudes em que o desempenho da Agulha MAGNÉTICA fica prejudicado (seção 3.2.3).
IV) Falsa — seção 3.3.8: é o contrário. Se a correção teve que ser subtraída, o desvio é OESTE (W); se teve que ser somada, o desvio é LESTE (E).`,
  },
  {
    id: "navegacao-13",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Valadares, a bordo do navio “Pedra Branca”, que governava pela Agulha Magnética no Rumo da Agulha (Rag) 250º, em local onde a Declinação Magnética, já atualizada para o ano, era de 18º W, observou um farol na Marcação da Agulha (Mag) 312º. A Tabela de Desvios da agulha indicava, para a proa 250º, Desvio da Agulha (Dag) de 3º W e, para a proa 312º, Desvio da Agulha de 1º E. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), a Marcação Verdadeira (Mv) do farol, a ser traçada na carta, e o Rumo Verdadeiro (Rv) do navio são, respectivamente:`,
    alternativas: {
      A: "Mv = 295º e Rv = 229º.",
      B: "Mv = 291º e Rv = 229º.",
      C: "Mv = 333º e Rv = 271º.",
      D: "Mv = 291º e Rv = 271º.",
      E: "Mv = 297º e Rv = 235º.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. O Rumo Verdadeiro está certo (229º), mas a marcação foi convertida com o desvio correspondente ao valor da própria marcação (312º → Dag 1º E): 312º + 1º – 18º = 295º. Pela seção 3.2.5, alínea b, o argumento de entrada na Curva de Desvios é o RUMO do navio, e não as marcações observadas; o desvio a aplicar é o da proa 250º (3º W).",
      B: "Correta. Pela seção 3.2.5, alínea b, o Desvio da Agulha depende do rumo do navio e o mesmo desvio é aplicado a todas as marcações observadas enquanto o navio permanecer no mesmo rumo; logo, Dag = 3º W (proa 250º). Mv = Mag – Dag (W) – Dec mg (W) = 312º – 3º – 18º = 291º (passando por Mmg = 309º). Rv = Rag – Dag (W) – Dec mg (W) = 250º – 3º – 18º = 229º (passando por Rmg = 247º). Conferência: a correção total é de 21º W, subtraída de ambas as leituras da agulha: 312º – 21º = 291º e 250º – 21º = 229º.",
      C: "Errada. Os sinais foram invertidos: o desvio e a declinação W foram somados às leituras da agulha (312º + 3º + 18º = 333º; 250º + 3º + 18º = 271º). Na conversão de valores da agulha para verdadeiros, as correções W são SUBTRAÍDAS e as E são somadas, como nos exemplos da seção 3.2.5 (Rv = 180º – 23º W – 3º W = 154º).",
      D: "Errada. A Marcação Verdadeira está certa (291º), mas o Rumo Verdadeiro foi obtido somando as correções W (250º + 3º + 18º = 271º). O correto é subtraí-las: Rv = 250º – 3º – 18º = 229º (seção 3.2.5).",
      E: "Errada. O desvio de 3º W foi somado como se fosse E (312º – 18º + 3º = 297º; 250º – 18º + 3º = 235º). Sendo W, o desvio é subtraído na conversão da agulha para o magnético: Mmg = 312º – 3º = 309º e Rmg = 250º – 3º = 247º (seção 3.2.5).",
    },
  },
);

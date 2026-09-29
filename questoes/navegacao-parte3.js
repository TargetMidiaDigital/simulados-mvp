// Questões elaboradas a partir do livro "Navegação: a Ciência e a Arte – Volume I"
// (Altineu Pires Miguens, DHN, 2ª revisão atualizada, 2023)
// Capítulo 10 – Marés e Correntes de Maré; Correntes Oceânicas (navegacao-28 a 32)
// Capítulo 11 – Instrumentos Náuticos (navegacao-33 a 36)
// Capítulo 12 – Publicações Náuticas (navegacao-37 a 39)
QUESTOES.push(
  {
    id: "navegacao-28",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Tavares, ao planejar a entrada de um navio de grande calado em um porto da costa norte do Brasil, consultou a Tabela de Fases da Lua e verificou que a manobra ocorreria em dia de Lua Cheia. Com relação às marés de sizígia e de quadratura e aos tipos de marés, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "As marés de quadratura ocorrem nas situações de Lua Nova e Lua Cheia, quando as atrações gravitacionais da Lua e do Sol atuam em ângulos retos, e são conhecidas como marés de águas vivas.",
      B: "Nas marés de sizígia, que ocorrem em Lua Nova e Lua Cheia, quando Sol, Terra e Lua estão alinhados, as preamares são maiores que a média e as baixa-mares são menores que a média, de modo que as amplitudes são as maiores; tais marés são conhecidas como marés de águas vivas.",
      C: "A maré semidiurna apresenta duas PM e duas BM no período de um dia lunar (24h 50m), com pouco mais de 6 horas de intervalo entre uma PM e a BM consecutiva; no Brasil, as marés semidiurnas são observadas de Vitória (ES) para o sul.",
      D: "As marés diurnas constituem o padrão no qual ocorrem apenas uma PM e uma BM a cada dia lunar, caracterizando-se por grandes diferenças de altura entre duas PM ou duas BM sucessivas, como se observa na costa sul do Brasil.",
      E: "O Sol, por força de sua enorme massa, é o corpo celeste que mais influencia a maré, sendo o efeito de sua força gravitacional cerca de 2,25 vezes mais pronunciado que o da Lua.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Lua Nova e Lua Cheia são posições de sizígia, não de quadratura. As marés de quadratura ocorrem em Quarto Crescente e Quarto Minguante, quando as atrações da Lua e do Sol atuam em ângulos retos, e são denominadas marés de águas MORTAS, de amplitude reduzida (seção 10.1.3).",
      B: "Correta. É o que descreve a seção 10.1.3: em Lua Nova ou Lua Cheia (sizígia) as atrações da Lua e do Sol reforçam-se, as preamares são maiores que a média e as baixa-mares menores que a média, a amplitude é a maior, e essas marés são conhecidas como marés de águas vivas.",
      C: "Errada. A descrição da maré semidiurna está certa (duas PM e duas BM em um dia lunar de 24h 50m, com pouco mais de 6 horas entre uma PM e a BM consecutiva), mas, no Brasil, as marés semidiurnas são observadas de Vitória (ES) para o NORTE (seção 10.1.4).",
      D: "Errada. Nas marés diurnas (uma PM e uma BM a cada dia lunar), os níveis de duas PM ou BM sucessivas geralmente NÃO variam muito; as grandes diferenças de altura entre duas PM ou duas BM consecutivas caracterizam as marés mistas. Além disso, a costa sul do Brasil apresenta sempre duas PM e duas BM diariamente: maré semidiurna com desigualdades diurnas (seção 10.1.4).",
      E: "Errada. Está invertido: a Lua, devido à sua maior proximidade com a Terra, é o corpo celeste que mais influencia a maré, seguindo-se o Sol; o efeito da força gravitacional da LUA é cerca de 2,25 vezes mais pronunciado, apesar de o Sol ter massa milhares de vezes maior (seção 10.1.2).",
    },
  },
  {
    id: "navegacao-29",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Prático Nogueira, durante a travessia de um canal dragado, comparava as leituras do ecobatímetro com as sondagens representadas na carta náutica do porto. Considere as afirmativas abaixo, relativas aos elementos das marés e aos planos de referência de marés, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) O Nível de Redução (NR) é o nível a que são referidas as alturas das marés e as sondagens representadas nas cartas náuticas; nas cartas náuticas brasileiras, corresponde normalmente ao nível médio das baixa-mares de sizígia (MLWS).
II) Altitude é a distância vertical entre o ponto considerado e o Nível de Redução, que é o plano normalmente adotado como referência para a medida das altitudes.
III) A profundidade real em um determinado instante é a soma da sondagem (profundidade cartografada) com a altura da maré no instante considerado.
IV) Como o NR adotado pela DHN é normalmente o MLWS, em geral se encontram profundidades maiores que as representadas na carta; eventualmente, porém, por ocasião das baixa-mares de sizígia, poderão ser encontradas profundidades menores que as constantes da carta.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e III) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — seção 10.1.7: o NR é o nível a que são referidas as alturas das marés e as sondagens; normalmente corresponde ao nível médio das baixa-mares de sizígia (MLWS) nas cartas náuticas brasileiras, sendo um nível abaixo do qual o mar não desce senão raramente.
II) Falsa — seção 10.1.7: altitude é a distância vertical entre o ponto considerado e o NÍVEL MÉDIO do mar (NM/MSL), que é o plano normalmente adotado como referência para a medida das altitudes. O NR é a referência das sondagens e das alturas de maré.
III) Verdadeira — seção 10.1.7: profundidade real = sondagem + altura da maré no instante considerado (na seção 10.1.8, C = D + E).
IV) Verdadeira — seção 10.1.7 (parte final): com o NR no MLWS, em geral há mais água do que a carta indica, mas, eventualmente, nas BM de sizígia, a profundidade pode ser menor que a da carta (altura de maré negativa).`,
  },
  {
    id: "navegacao-30",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Medeiros precisava estimar a maré em um local de maré semidiurna da costa nordeste do Brasil, para o qual não dispunha de previsão nas Tábuas das Marés. No quadro “Informações sobre a Maré” da carta náutica do local, obteve: MHWS = 2,4 m; MHWN = 1,7 m; e Nível Médio (NM/MSL) = 1,3 m acima do Nível de Redução. Pela Tabela de Fases da Lua, verificou que a data de interesse ocorre 3 dias depois do Quarto Crescente (quadratura) e 4 dias antes da Lua Cheia (sizígia). A partir da hora da passagem meridiana da Lua e do Estabelecimento do Porto (HWF&C), já havia determinado que uma das preamares do dia ocorreria às 1030. Empregando o Método Expedito de Previsão (Método do Estabelecimento do Porto), de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), a altura das preamares, a altura das baixa-mares e a hora da baixa-mar seguinte à preamar das 1030 serão, respectivamente:`,
    alternativas: {
      A: "2,1 m; 0,5 m; 1643.",
      B: "2,0 m; 0,6 m; 1655.",
      C: "2,0 m; 0,6 m; 1643.",
      D: "2,0 m; 0,7 m; 1643.",
      E: "2,4 m; 0,2 m; 1630.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. 2,1 m resultaria de interpolar com 4/7 (os 4 dias que faltam para a sizígia) em vez de 3/7: 0,7 × 4/7 = 0,4 m. A interpolação parte da quadratura (MHWN), e a data está 3 dias depois dela: X = 0,7 × 3/7 = 0,3 m; hPM = 1,7 + 0,3 = 2,0 m e hBM = 1,3 – 0,7 = 0,6 m (seção 10.1.10).",
      B: "Errada. As alturas estão certas, mas o método adota o intervalo de 06h 13min entre uma PM e a BM consecutiva (1/4 do dia lunar de 24h 50m), e não 06h 25min: 1030 + 0613 = 1643 (seção 10.1.10, alínea b).",
      C: "Correta. Seção 10.1.10: MHWS – MHWN = 2,4 – 1,7 = 0,7 m em 7 dias (quadratura–sizígia); para 3 dias, X = 0,7 × 3/7 = 0,3 m; hPM = 1,7 + 0,3 = 2,0 m. Como o método supõe PM e BM simétricas em relação ao NM: cota da PM acima do NM = 2,0 – 1,3 = 0,7 m; hBM = 1,3 – 0,7 = 0,6 m. Hora da BM: 1030 + 06h 13min = 1643.",
      D: "Errada. 0,7 m é a cota da PM acima do Nível Médio (2,0 – 1,3), e não a altura da baixa-mar. Pela simetria em relação ao NM, hBM = NM – 0,7 = 1,3 – 0,7 = 0,6 m (seção 10.1.10, alínea d).",
      E: "Errada. 2,4 m é a preamar média de sizígia (MHWS), que só seria adotada em dia de sizígia; a data está entre a quadratura e a sizígia, exigindo interpolação (hPM = 2,0 m; hBM = 0,6 m). Além disso, o intervalo PM–BM adotado é de 06h 13min, e não de 6 horas (seção 10.1.10).",
    },
  },
  {
    id: "navegacao-31",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação às correntes de maré e às Cartas de Correntes de Maré, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "As forças geradoras da maré acarretam preliminarmente o movimento horizontal da massa líquida (corrente de maré), do qual resulta o movimento vertical do nível do mar (maré), de modo que as marés e as correntes de maré coexistem como efeitos de uma mesma causa.",
      B: "Normalmente, nas entradas dos portos nos quais a ação direta das forças astronômicas é desprezível, a corrente de maré é o resultado da diferença de nível entre o oceano e o interior do porto, sendo o fluxo e o refluxo caracterizados por uma corrente axial alternativa, segundo o eixo do canal.",
      C: "No oceano aberto, as correntes de maré têm um caráter rotatório, em virtude da interação entre as forças astronômicas e a influência da rotação terrestre; o Efeito de Coriolis tende a desviá-las para a direita no Hemisfério Norte e para a esquerda no Hemisfério Sul.",
      D: "As Cartas de Correntes de Maré são, na realidade, publicações preparadas para determinados portos, com pequenas cartas onde aparecem setas indicadoras das direções e números que representam as velocidades das correntes, referidas à hora da preamar; a carta a utilizar é selecionada pela diferença, em horas, entre o instante considerado e o da preamar prevista mais próxima.",
      E: "As velocidades representadas nas Cartas de Correntes de Maré correspondem às condições médias de quadratura; em outras situações, se for desejável maior precisão, tanto as velocidades como as direções representadas devem ser corrigidas por fatores retirados de um ábaco existente no início da publicação.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta (seção 10.2.1). Não é a resposta.",
      B: "Afirmação correta (seção 10.2.1). Não é a resposta.",
      C: "Afirmação correta (seção 10.2.1). Não é a resposta.",
      D: "Afirmação correta (seções 10.2.2 e 10.2.3). Não é a resposta.",
      E: "INCORRETA, portanto é a resposta. Pela seção 10.2.3, as velocidades representadas nas Cartas de Correntes de Maré correspondem à época de SIZÍGIA (condições médias de sizígia). Em outras situações, as velocidades devem ser multiplicadas por um fator de correção retirado de um ábaco, tendo como elementos de entrada o intervalo de tempo entre a PM e a BM (ou vice-versa) e a amplitude da maré prevista; porém NÃO há qualquer correção a ser aplicada às direções.",
    },
  },
  {
    id: "navegacao-32",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Queiroz, em conversa com o Comandante de um navio que acabara de cruzar o Atlântico Sul, comentava sobre as correntes encontradas durante a travessia. Com relação à circulação geral dos oceanos e às correntes oceânicas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "A Corrente do Brasil é uma corrente quente e salina, pois provém das regiões equatorial e tropical, ao passo que a Corrente de Benguela, que flui para o norte junto à costa africana, é fria e menos salina, devido à contribuição das águas da região subantártica.",
      B: "A circulação termohalina é eminentemente horizontal e está limitada às primeiras centenas de metros de profundidade, ao passo que os movimentos gerados pelos ventos são dominantes nas águas profundas.",
      C: "Na camada superior dos oceanos, a circulação ocorre no sentido dos ponteiros do relógio no Atlântico Sul, no Pacífico Sul e no Índico Sul, e no sentido oposto no Atlântico Norte e no Pacífico Norte.",
      D: "A ação do vento produz um transporte da água da superfície 90° para a esquerda, no Hemisfério Norte, e 90° para a direita, no Hemisfério Sul, em relação à direção para a qual sopra o vento.",
      E: "Ressurgência é o movimento de submersão das águas superficiais que ocorre quando o transporte de água induzido pelo vento paralelo à costa se dirige para a costa, como acontece na região de Cabo Frio com o vento SW.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Seção 10.3.5, alínea a: a Corrente do Brasil é quente e salina, pois provém das regiões equatorial e tropical; já a Corrente de Benguela, formada junto à costa africana quando as águas se voltam para o Norte, é fria e menos salina, devido à contribuição das águas da região subantártica.",
      B: "Errada. Está invertido (seção 10.3.3): a circulação produzida pelos VENTOS é eminentemente horizontal e limitada às primeiras centenas de metros de profundidade; os movimentos termohalinos são dominantes nas águas profundas. A circulação termohalina surge como um fluxo vertical, quando a água mais densa afunda (seção 10.3.2).",
      C: "Errada. Está invertido (seção 10.3.4): a circulação é no sentido dos ponteiros do relógio (dextrogiro) no Atlântico Norte e no Pacífico Norte, e no sentido oposto (sinistrogiro) no Atlântico Sul, Pacífico Sul e Índico Sul.",
      D: "Errada. Os hemisférios estão trocados (seção 10.3.3): o transporte da água da superfície se dá 90° para a DIREITA no Hemisfério Norte e 90° para a ESQUERDA no Hemisfério Sul, em relação à direção para a qual sopra o vento.",
      E: "Errada. A definição apresentada é a de subsidência. Ressurgência é a lenta corrente ASCENDENTE, originária de 100 a 200 m de profundidade, que ocorre quando o movimento superficial induzido pelo vento se dirige para o mar; na região de Cabo Frio é o vento NE, principalmente no verão, que impulsiona as águas superficiais para alto-mar e faz ascender as águas frias do fundo (seção 10.3.6).",
    },
  },
  {
    id: "navegacao-33",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `Associe os instrumentos náuticos da coluna A com as descrições da coluna B, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

COLUNA A
1) Estaciógrafo
2) Guarda-posto
3) Estadímetro
4) Cintel
5) Alidade autossíncrona

COLUNA B
( ) Instrumento que permite o traçado de arcos de distância maiores que a abertura máxima de um compasso comum, muito útil quando se pratica navegação radar e se determina a posição por cruzamento de distâncias.
( ) Pequeno instrumento de refração luminosa, dotado de dois prismas, destinado a oferecer ao navegante, com o auxílio de diagramas especiais, a distância entre dois navios, tendo seu emprego principal na navegação em formatura.
( ) Instrumento que registra graficamente, por impressão em papel, os rumos navegados, em função do tempo, sendo sua operação acionada por uma repetidora da Agulha Giroscópica.
( ) Instrumento especialmente útil para a plotagem da posição por segmentos capazes, cujo braço central é fixo e constitui a referência correspondente à graduação zero.
( ) Instrumento que se baseia no princípio de determinação da distância pela medição do ângulo vertical que subtende um objeto de altitude conhecida.
( ) Instrumento para determinar a marcação de objetos distantes, que possui um motor síncrono adicional, comandado pela Agulha Giroscópica mestra, permitindo observar um objeto sem que o instrumento se desvie da marcação desejada em virtude do movimento do navio.`,
    alternativas: {
      A: "(4) (2) (5) (1) (3) (-)",
      B: "(4) (3) (-) (1) (2) (5)",
      C: "(4) (2) (-) (1) (3) (5)",
      D: "(1) (2) (-) (4) (3) (5)",
      E: "(4) (2) (-) (3) (1) (5)",
    },
    correta: "C",
    comentario: `Item a item:
1º Traçado de arcos de distância maiores que a abertura máxima de um compasso comum → Cintel (4), seção 11.6.2.
2º Instrumento de refração luminosa, com dois prismas (parâmetros 16 e 32), que dá a distância entre dois navios com o auxílio de diagramas especiais → Guarda-posto (2), seção 11.4.3.
3º Registro gráfico, em papel, dos rumos navegados em função do tempo, acionado por repetidora da giro → Registrador de rumos (seção 11.2.1, alínea b), que não consta da coluna A (-).
4º Plotagem da posição por segmentos capazes, com braço central fixo (graduação zero) → Estaciógrafo (1), seção 11.6.3.
5º Distância pela medição do ângulo vertical que subtende um objeto de altitude conhecida (d = h . cotg α) → Estadímetro (3), seção 11.4.1.
6º Motor síncrono adicional comandado pela Agulha Giroscópica mestra → Alidade autossíncrona (5), seção 11.2.2, alínea b.
Sequência: (4) (2) (-) (1) (3) (5).`,
  },
  {
    id: "navegacao-34",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O navio mercante “Serra Azul” vai realizar uma singradura entre dois pontos cuja distância verdadeira (sobre o fundo) é de 120 milhas, mantendo uma velocidade na superfície de 12 nós, em rumo exatamente contrário ao de uma corrente de 2 nós. O navio dispõe de um odômetro de fundo, do tipo eletromagnético, sem erro instrumental. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), a velocidade do navio em relação ao fundo, a duração do trajeto e a distância percorrida indicada pelo odômetro ao final da travessia serão, respectivamente:`,
    alternativas: {
      A: "10 nós; 12 horas; 120 milhas.",
      B: "14 nós; 8,6 horas; 102,9 milhas.",
      C: "10 nós; 12 horas; 96 milhas.",
      D: "10 nós; 12 horas; 144 milhas.",
      E: "12 nós; 10 horas; 120 milhas.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. Velocidade no fundo e duração estão certas, mas 120 milhas é a distância sobre o fundo. Apesar do nome, o odômetro de fundo (de pressão ou eletromagnético) mede a velocidade em relação à massa d’água; só o odômetro Doppler mede a velocidade no fundo (seção 11.3.1). Em 12 horas a 12 nós na superfície, o odômetro indicará 144 milhas (seção 11.3.2, alínea a).",
      B: "Errada. Esses valores corresponderiam a uma corrente FAVORÁVEL (12 + 2 = 14 nós; 120 ÷ 14 ≅ 8,6 h; 8,57 × 12 ≅ 102,9 milhas). Com corrente contrária, a velocidade no fundo é 12 – 2 = 10 nós (seção 11.3.2, alínea a).",
      C: "Errada. O sinal da diferença está trocado: em rumo contrário ao da corrente, o odômetro indica valor MAIOR que a distância verdadeira, de um tanto igual a 2 milhas multiplicadas pelo número de horas da travessia: 120 + (2 × 12) = 144 milhas, e não 120 – 24 = 96 (seção 11.3.2, alínea a).",
      D: "Correta. Seção 11.3.2, alínea a: velocidade no fundo = 12 – 2 = 10 nós; duração = 120 ÷ 10 = 12 horas; o odômetro indica a distância em relação à superfície = 12 nós × 12 h = 144 milhas (ou 120 + 2 × 12 = 144). É o mesmo raciocínio do exemplo do livro (100 milhas, 10 nós, corrente contrária de 2 nós: 12,5 horas e 125 milhas no odômetro).",
      E: "Errada. 12 nós é a velocidade na superfície; em rumo contrário a uma corrente de 2 nós, a velocidade no fundo é de 10 nós e a travessia dura 12 horas, com o odômetro indicando 144 milhas (seção 11.3.2, alínea a).",
    },
  },
  {
    id: "navegacao-35",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Bastos, conduzindo um navio em um canal de acesso, acompanhava as indicações do ecobatímetro, enquanto um marinheiro guarnecia o prumo de mão. Com relação aos instrumentos para medição de profundidades, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "No ecobatímetro, a profundidade do local é igual à velocidade de propagação do som na água (cerca de 340 metros por segundo) multiplicada pelo intervalo de tempo entre a transmissão do pulso e a recepção do eco refletido no fundo.",
      B: "Como a profundidade medida com o ecobatímetro tem como referência o fundo do navio, onde estão localizados os transdutores, é necessário somar à leitura o valor do calado para obter a profundidade do local; para compará-la com precisão à sondagem representada na carta, deve-se, ainda, subtrair a altura da maré no instante da medição (no caso de altura da maré positiva).",
      C: "Os fundos macios, como os de lama, são melhores refletores que os fundos duros, produzindo um eco mais forte, o que facilita a leitura quando no limite do alcance do ecobatímetro.",
      D: "Para determinação da profundidade com o prumo de mão, a velocidade do navio precisa ser reduzida até 6 nós, no máximo, e o fundo é, geralmente, maior que o indicado, por causa da catenária formada pela linha.",
      E: "Os ecobatímetros multifeixe obtêm dados de profundidade apenas ao longo da linha de sondagem, enquanto os ecobatímetros monofeixe obtêm dados ao longo de uma faixa transversal à embarcação, cobrindo uma área maior do leito marinho.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. A velocidade do som na água é de aproximadamente 1.500 metros por segundo (seção 11.5.2, alínea a), e a profundidade é igual à velocidade do som multiplicada pela METADE do intervalo de tempo entre a transmissão e a recepção do eco: h = v . t/2 (seção 11.5.2, alínea b).",
      B: "Correta. Seção 11.5.2, alínea c: a profundidade medida tem como referência o fundo do navio, devendo-se somar o calado à leitura para obter a profundidade do local; como as sondagens da carta têm origem no Nível de Redução, para a comparação é preciso considerar a altura da maré, subtraindo-a (se positiva) ou, eventualmente, somando-a (no caso raro de altura negativa).",
      C: "Errada. É o contrário: os fundos DUROS são melhores refletores que os fundos macios; no limite do alcance, pode-se ter dificuldades de leitura se o fundo for de lama macia, devido à pouca intensidade do eco (seção 11.5.2, alínea b).",
      D: "Errada. A velocidade deve ser reduzida até 3 nós, no máximo, e o fundo é, geralmente, MENOR que o indicado, por causa da catenária formada pela linha e por não ser feita a leitura exatamente com o prumo a pique (seção 11.5.1).",
      E: "Errada. Está invertido: os ecobatímetros monofeixe obtêm dados apenas ao longo da linha de sondagem; os multifeixe obtêm dados de profundidade ao longo de uma faixa transversal à embarcação, cobrindo área maior do leito marinho (seção 11.5.2, alínea c).",
    },
  },
  {
    id: "navegacao-36",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação às cartas náuticas digitais e aos Sistemas Eletrônicos de Exibição de Cartas Náuticas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "A carta náutica Raster (RNC) é um banco de dados padronizado quanto ao seu conteúdo, estrutura e formato, ao passo que a carta náutica eletrônica (ENC) é a imagem digitalizada e georreferenciada de uma carta náutica em papel, formada por uma matriz de pontos (bitmap).",
      B: "O ECDIS é um sistema utilizado para integrar as informações necessárias à navegação às informações das ENC, e o seu emprego cumpre especificações estabelecidas por resoluções da Organização Marítima Internacional (IMO), conforme especificado na Convenção SOLAS.",
      C: "Caso um trecho da derrota não disponha de ENC, o ECDIS poderá utilizar uma RNC, passando a operar no modo Raster Chart Display System (RCDS).",
      D: "Os Sistemas de Cartas Eletrônicas (ECS) são sistemas de navegação genéricos, que não cumprem as especificações estabelecidas pela IMO; existem quatro classes de ECS, cujos requisitos são estabelecidos pela Radio Technical Commission for Maritime Services (RTCM).",
      E: "Entre as desvantagens do emprego de um Sistema Eletrônico de Exibição de Cartas Náuticas, em relação à navegação com cartas em papel, estão a sujeição dos equipamentos eletrônicos a falhas, as dimensões da tela menores do que as de uma carta em papel, a poluição de tela (clutter) e a possibilidade de excesso de confiança do operador.",
    },
    correta: "A",
    explicacoes: {
      A: "INCORRETA, portanto é a resposta. As definições estão trocadas (seção 11.7): a carta náutica ELETRÔNICA (ENC, vetorial) é o banco de dados padronizado quanto ao seu conteúdo, estrutura e formato; a carta náutica RASTER (RNC) é a imagem digitalizada e georreferenciada de uma carta em papel, formada por uma matriz de pontos (bitmap), em que cada pixel é associado a uma posição geográfica.",
      B: "Afirmação correta (seção 11.7.1, alínea a). Não é a resposta.",
      C: "Afirmação correta (seção 11.7.1, alínea a). Não é a resposta.",
      D: "Afirmação correta (seção 11.7.1, alínea b). Não é a resposta.",
      E: "Afirmação correta (seção 11.7.1, relação de desvantagens). Não é a resposta.",
    },
  },
  {
    id: "navegacao-37",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Siqueira, ao embarcar em um navio mercante, verificou com o Oficial de Náutica as publicações náuticas brasileiras existentes no passadiço. Com relação às publicações de auxílio à navegação editadas pela DHN, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "O Roteiro (publicação DH1) é dividido em três volumes: Costa Norte, da Baía do Oiapoque ao Cabo Calcanhar; Costa Leste, do Cabo Calcanhar ao Cabo de São Tomé; e Costa Sul, do Cabo de São Tomé ao Arroio Chuí.",
      B: "A Carta 12.000 (INT 1) tem o propósito de apresentar ao navegante todas as cartas náuticas, publicações e impressos editados pela DHN, estando dividida em três partes, sendo essencial para a seleção das cartas que se deve ter a bordo para executar uma determinada travessia.",
      C: "A Lista de Faróis (publicação DH2) relaciona os faróis, aerofaróis, faroletes, barcas-faróis, boias luminosas, boias cegas e balizas, sendo publicada anualmente, como uma nova edição.",
      D: "Nos intervalos entre as edições, o Roteiro é mantido atualizado exclusivamente por meio de Avisos-Rádio Náuticos, não havendo distribuição de Folhas de Correções.",
      E: "A Lista de Faróis apresenta, hoje, todos os sinais luminosos das áreas cobertas pelas cartas da DHN, no território nacional, com os detalhes dados em oito colunas, e traz em sua Introdução, entre outras informações, a Tabela de Alcance Geográfico e o Diagrama para Cálculo de Alcance Luminoso.",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. O limite entre a Costa Leste e a Costa Sul é o Cabo Frio: Costa Norte, da Baía do Oiapoque ao Cabo Calcanhar; Costa Leste, do Cabo Calcanhar ao Cabo Frio (incluindo as ilhas oceânicas); Costa Sul, do Cabo Frio ao Arroio Chuí, inclusive as lagoas dos Patos e Mirim (seção 12.4).",
      B: "Errada. A descrição é a do Catálogo de Cartas e Publicações (seção 12.2). A Carta 12.000 (INT 1) – Símbolos, Abreviaturas e Termos Usados nas Cartas Náuticas Brasileiras é a publicação essencial para interpretar as informações contidas nas cartas, sendo bilíngue e dividida em quatro seções, com grupos de símbolos nomeados de A até U (seção 12.3).",
      C: "Errada. A Lista de Faróis NÃO inclui boias cegas e balizas, que são registradas na Lista de Sinais Cegos (publicação DH18); além disso, passou a ser publicada a cada dois anos (seção 12.5).",
      D: "Errada. Nos intervalos entre as edições, o Roteiro é mantido atualizado pela distribuição de Folhas de Correções anexas aos Folhetos de Avisos aos Navegantes (seção 12.4).",
      E: "Correta. Seção 12.5: apesar do nome, a Lista de Faróis apresenta todos os sinais luminosos das áreas cobertas pelas cartas da DHN, no território nacional; os detalhes são dados em oito colunas, e a Introdução traz, entre outras informações, a Tabela de Alcance Geográfico, o Diagrama para Cálculo de Alcance Luminoso e a descrição do Sistema de Balizamento Marítimo adotado no Brasil.",
    },
  },
  {
    id: "navegacao-38",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Lacerda, antes de embarcar para uma manobra, consultou os Avisos-Rádio Náuticos em vigor para a sua Zona de Praticagem. Com relação aos Avisos-Rádio Náuticos, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "O aviso identificado por “S 7021/17” é um Aviso-Rádio Náutico Costeiro, da Costa Sul, número 7021, do ano de 2017.",
      B: "Os Avisos-Rádio Náuticos Locais divulgam informações de interesse à navegação interior praticada em áreas próximas à costa (até, aproximadamente, 3 milhas) ou em vias navegáveis interiores (baías, portos e seus canais de acesso, rios, lagos e lagoas), onde, normalmente, os navios de maior porte navegam com auxílio de práticos locais.",
      C: "Para efeito do Serviço Global de Avisos-Rádio Náuticos (WWNWS), o mundo está dividido em 16 áreas marítimas denominadas NAVAREA, cabendo ao Brasil a coordenação da NAVAREA IV.",
      D: "Os Avisos-Rádio Náuticos NAVAREA são identificados pela letra indicativa da região costeira de ocorrência, seguida de numeração sequencial anual de quatro algarismos e de dois algarismos indicativos do ano de entrada em vigor do Aviso.",
      E: "Os Avisos-Rádio Náuticos destinam-se a promover a atualização das cartas e publicações náuticas, razão pela qual têm como meio principal de divulgação os folhetos quinzenais de Avisos aos Navegantes.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. “S 7021/17” é um Aviso-Rádio Náutico LOCAL, da Costa Sul, número 7021, do ano de 2017: os Avisos Locais têm numeração a partir de 7001, enquanto os Costeiros e os NAVAREA vão de 0001 a 6999 (seção 12.6, alínea d, item I).",
      B: "Correta. É a definição de Avisos-Rádio Náuticos Locais dada na seção 12.6, alínea d, item I, que os distingue dos Avisos NAVAREA (navegação oceânica, além dos limites das regiões costeiras) e dos Avisos Costeiros (navegação costeira).",
      C: "Errada. O mundo está dividido em 21 áreas marítimas denominadas NAVAREA, e a área sob responsabilidade do Brasil é a NAVAREA V, cujas funções de Coordenador de NAVAREA e de Coordenador Nacional são desempenhadas por meio da DHN (seção 12.6, alínea d, item I).",
      D: "Errada. Essa é a identificação dos Avisos-Rádio Náuticos COSTEIROS. Os Avisos NAVAREA não levam letra: são identificados apenas pela numeração sequencial anual de quatro algarismos (de 0001 a 6999), seguida de dois algarismos indicativos do ano, como em “0123/18” (seção 12.6, alínea d, item I).",
      E: "Errada. Os Avisos-Rádio Náuticos têm o propósito de fornecer informações URGENTES relevantes para a navegação segura e, devido a essa urgência, têm como meios principais de divulgação as transmissões via rádio e/ou via satélite (seção 12.6, alínea d, item I). A atualização tempestiva das cartas e publicações é papel dos Avisos aos Navegantes (seção 12.11).",
    },
  },
  {
    id: "navegacao-39",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Prático Falcão, ao examinar a carta náutica do porto em uso no passadiço, conferiu com o Oficial de Náutica se ela estava atualizada pelo último folheto de Avisos aos Navegantes. Considere as afirmativas abaixo, relativas aos Avisos aos Navegantes (AVGANTES), de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) Os Avisos Temporários trazem informações de correções de caráter transitório, e os Avisos Preliminares antecipam informações de correções que, posteriormente, serão objeto de Avisos Permanentes; em ambos os casos, as correções decorrentes devem ser feitas a lápis.
II) Os folhetos de Avisos aos Navegantes referentes à Área Marítima e Hidrovias em Geral são publicados mensalmente, os da Hidrovia Paraguai-Paraná são quinzenais e os da Hidrovia Tietê-Paraná são semestrais.
III) As correções decorrentes de Avisos Permanentes devem ser feitas a caneta ou por inserção de “bacalhaus”, conforme o caso, devendo o campo “Pequenas Correções”, no canto inferior esquerdo da carta, ser preenchido com o ano e o número do Aviso Permanente correspondente.
IV) Os Avisos Permanentes Especiais (APE) constituem alterações permanentes à carta náutica, sendo numerados na mesma sequência dos Avisos Permanentes.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I) e III) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — seção 12.11.1: Avisos Temporários (correções de caráter transitório) e Avisos Preliminares (antecipam correções que serão objeto de Avisos Permanentes) geram correções feitas a lápis.
II) Falsa — seção 12.11.1: os folhetos da Área Marítima e Hidrovias em Geral são publicados com intervalo de 15 dias (quinzenais), os da Hidrovia Paraguai-Paraná são mensais e os da Hidrovia Tietê-Paraná são trimestrais.
III) Verdadeira — seção 12.11.1: correções de Avisos Permanentes são feitas a caneta ou por inserção de “bacalhaus”, preenchendo-se o campo “Pequenas Correções” (canto inferior esquerdo da carta) com o ano e o número do Aviso.
IV) Falsa — seção 12.11.2 (Seção V do folheto): os APE NÃO constituem alterações permanentes à carta náutica e não devem ser confundidos com os Avisos Permanentes; são numerados em ordem sequencial única e anual, precedida da abreviatura “APE”.`,
  },
);

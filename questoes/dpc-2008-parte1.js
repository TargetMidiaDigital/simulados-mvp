// Prova escrita DPC 2008 (Processo Seletivo de Praticante de Prático) — questões 1 a 25.
// Questões 14, 18 e 20 foram ANULADAS e não constam. Letra correta: gabarito oficial.
QUESTOES.push(
  {
    id: "dpc2008-01",
    prova: "DPC 2008",
    tema: "Código Internacional de Sinais",
    enunciado: "Tendo como referência o Código Internacional de Sinais, decodifique a seguinte mensagem recebida pelo VHF da atalaia: “Mayday Mayday Mayday. This is Merchant Ship CINGAPURA CINGAPURA CINGAPURA. Mayday Merchant Ship CINGAPURA Interco Alfa Terrathree Kartefour Pantafive Tambelan Romeo Bissotwo Unaone Charlie Bravo Soxisix” e assinale a opção correta:",
    alternativas: {
      A: "merchant ship CINGAPURA in distress position 345 degrees Tambelan 21 miles. I require immediate assistance. I am on fire.",
      B: "merchant ship CINGAPURA in distress position 165 degrees Tambelan 21 miles. I am sinking.",
      C: "merchant ship CINGAPURA in distress position 345 degrees Tambelan 21 miles. I require immediate assistance.",
      D: "merchant ship CINGAPURA in safety position 345 degrees Tambelan 21 miles. I require immediate assistance.",
      E: "merchant ship CINGAPURA in position 165 degrees Tambelan 21 miles have a Pan Pan safety message.",
    },
    correta: "A",
    explicacoes: {
      A: "Decodificação: “Mayday” = socorro (distress); “Interco” = segue grupo do CIS; “Alfa 345” (Terrathree-Kartefour-Pantafive) = marcação 345°; “Tambelan” = ponto de referência; “Romeo 21” (Bissotwo-Unaone) = distância 21 milhas; “CB6” (Charlie Bravo Soxisix) = “Necessito de assistência imediata; estou com incêndio a bordo”.",
      B: "Os algarismos transmitidos são 3-4-5 (Terrathree, Kartefour, Pantafive), e não 165. Além disso, “estou afundando” seria outro complemento do grupo CB (CB7), não o CB6 transmitido.",
      C: "Marcação e distância estão certas, mas a tradução está incompleta: “CB” sozinho é “necessito de assistência imediata”; o complemento 6 (Soxisix) acrescenta “estou com incêndio a bordo”.",
      D: "“Mayday” é o sinal de SOCORRO (distress), não de segurança (o de segurança é “Sécurité”). E falta o significado do complemento 6 (incêndio).",
      E: "A mensagem é precedida de “Mayday” (socorro), não de “Pan Pan” (que é urgência, e não segurança). A marcação também está errada: é 345°, não 165°.",
    },
  },
  {
    id: "dpc2008-02",
    prova: "DPC 2008",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "Aboçar uma espia, o tirador de uma talha ou, de modo geral, qualquer cabo, é uma técnica, ou recurso, de uso muito comum a bordo, sendo empregado:",
    alternativas: {
      A: "para impedir que o cabo, ou espia, cavalgue as voltas dadas na saia do cabrestante, à medida que ele for virando.",
      B: "para morder a talha, quando o peso que se quer içar é demasiado para que o tirador seja agüentado a mão, enquanto se dá a volta nele.",
      C: "quando estando o cabo, ou espia, sob tensão, deseja-se mudar o ponto de amarração ou amarrá-lo em outra direção.",
      D: "quando se deseja alcear qualquer volta agüentando o chicote ou um seio ao vivo do próprio cabo, se houver o receio de que ele possa recorrer ou desfazer-se.",
      E: "para unir dois cabos pelos chicotes, ou um chicote a um olhal, mão ou alça; para dar volta à boça de uma embarcação miúda na mão do cabo de cabeço de um surriola.",
    },
    correta: "C",
    explicacoes: {
      A: "Evitar que a espia cavalgue as voltas na saia do cabrestante é questão de como se passam e se colhem as voltas (e de manter o socairo), não de aboçar. A boça não atua sobre as voltas do cabrestante.",
      B: "Isso descreve o recurso de “morder” o tirador da talha (o próprio cabo morde a si mesmo no cadernal) para aguentar o peso enquanto se dá volta — não é aboçar, que usa um cabo auxiliar (a boça) fixo a um ponto do navio.",
      C: "Aboçar é aguentar provisoriamente um cabo sob tensão por meio de uma boça (cabo curto fixo a um olhal ou cabeço), para que se possa retirar o cabo do cabrestante e dar volta num cabeço, mudar o ponto de amarração ou a direção, sem perder a tensão.",
      D: "Aguentar o chicote ou um seio junto ao vivo do próprio cabo, para que a volta não recorra ou se desfaça, é “abotoar” (dar um botão), não aboçar.",
      E: "É a descrição do nó de escota (singelo ou dobrado), usado para unir dois cabos ou um chicote a uma alça, e para dar volta à boça de embarcação miúda no cabo de cabeço do surriola. Não tem relação com aboçar.",
    },
  },
  {
    id: "dpc2008-03",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    enunciado: "Em um mar com ondas de comprimento longo (Lw/L≥ 1,5), em que situação é mais provável que ocorra dificuldade em manter o rumo, de acordo com o livro “Principles of Naval Arquitecture” (PNA)?",
    alternativas: {
      A: "mar de proa.",
      B: "mar de través.",
      C: "mar pela bochecha de BE.",
      D: "mar pela bochecha de BB.",
      E: "mar de popa.",
    },
    correta: "E",
    explicacoes: {
      A: "Com mar de proa a frequência de encontro é alta e os momentos de guinada mudam de sinal rapidamente; o navio sofre com caturro e perda de velocidade, mas o governo não é o problema principal.",
      B: "Mar de través provoca sobretudo balanço (jogo); a dificuldade de manter o rumo não é a característica dominante.",
      C: "Mar pela bochecha é mar de proa oblíquo: frequência de encontro alta, efeitos de guinada que se alternam rapidamente e são facilmente corrigidos pelo leme.",
      D: "Mesmo raciocínio da bochecha de BE: o bordo não altera o fato de a frequência de encontro ser alta, o que não favorece a perda de governo.",
      E: "Com mar de popa (e de alheta) em ondas longas, o navio viaja quase na velocidade da onda: a frequência de encontro é muito baixa, o momento de guinada da onda atua por longo tempo no mesmo sentido e o leme perde eficiência quando a crista passa pela popa. É a condição típica de dificuldade de governo e de atravessamento (broaching).",
    },
  },
  {
    id: "dpc2008-04",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "In certain circumstances a ship may be required to navigate in areas with a reduced UKC. It is important that the reduced UKC has been planned for and clearly shown. In cases where the UKC is less than 10% of the deepest draught, or other such percentage as was agreed at the appraisal stage, then it is essential that the OOW is aware of such reduced UKC. According to Swift & Bailey, in the book “Bridge Team Management”, he also needs to be aware that:",
    alternativas: {
      A: "speed may have to be increased in order to increase squat with its consequent increase in draught.",
      B: "speed may have to be reduced in order to reduce squat with its consequent increase in draught.",
      C: "speed may have to be increased in order to increase squat with its consequent reduction in draught.",
      D: "speed may have to be reduced in order to increase squat with its consequent reduction in draught.",
      E: "speed may have to be reduced in order to reduce squat with its consequent reduction in draught.",
    },
    correta: "E",
    explicacoes: {
      A: "Aumentar a velocidade aumenta o squat e o calado dinâmico — exatamente o que não se quer com folga abaixo da quilha (UKC) reduzida.",
      B: "Reduzir a velocidade para reduzir o squat está certo, mas a consequência é a REDUÇÃO do calado (dinâmico), não o aumento.",
      C: "Duplamente errada: não se aumenta a velocidade com UKC reduzida, e mais squat significa mais calado, não menos.",
      D: "Contraditória: reduzir a velocidade REDUZ o squat (que varia aproximadamente com o quadrado da velocidade), não o aumenta.",
      E: "O squat varia aproximadamente com o quadrado da velocidade. Com UKC reduzida, o oficial de quarto deve saber que pode ser necessário reduzir a velocidade para reduzir o squat e, com isso, o calado dinâmico do navio.",
    },
  },
  {
    id: "dpc2008-05",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `Um navio encontra-se navegando em um rio com forte correnteza, nas proximidades de uma acentuada curva à direita, no sentido de jusante para montante. Em situações deste tipo, a principal preocupação de quem está na manobra é saber o momento exato no qual se deve guinar o navio.
Analise as afirmativas abaixo, que se referem à situação descrita acima.

I) ao fazer a curva a favor da corrente, se a guinada iniciar muito cedo, a corrente carrega o navio de encontro à margem direita do rio.
II) ao fazer a curva a favor da corrente, se a guinada iniciar muito cedo, a corrente carrega o navio paralelamente à margem esquerda do rio.
III) ao fazer a curva contra a corrente, se a guinada iniciar muito tarde, a corrente carrega o navio de encontro à margem direita do rio.
IV) ao fazer a curva contra a corrente, se a guinada iniciar muito tarde, a corrente carrega o navio de encontro à margem esquerda do rio.

Baseando-se nas informações contidas no livro “Naval Shiphandling”, de R. S. Crenshaw Jr., assinale, abaixo, a opção correta:`,
    alternativas: {
      A: "apenas as afirmativas II) e III) são verdadeiras",
      B: "apenas as afirmativas I) e III) são verdadeiras",
      C: "apenas as afirmativas II) e IV) são verdadeiras",
      D: "apenas a afirmativa III) é verdadeira",
      E: "apenas a afirmativa IV) é verdadeira",
    },
    correta: "D",
    comentario: `Chave da questão: as margens de um rio são nomeadas olhando-se para JUSANTE. O navio sobe o rio (de jusante para montante) e a curva é à direita para ele; logo, a margem externa da curva (a bombordo do navio) é a margem DIREITA do rio, e a ponta interna da curva fica na margem ESQUERDA. A corrente é mais forte no lado externo da curva e fraca junto à ponta interna.
I) Falsa — a favor da corrente, guinando cedo demais, a proa entra na água parada junto à ponta interna enquanto a popa continua na corrente forte; o navio é jogado contra a margem interna, que nesta curva é a margem esquerda, não a direita.
II) Falsa — a margem está certa (esquerda), mas o navio não é levado "paralelamente" a ela: a corrente na popa acentua a guinada e o joga de encontro à margem.
III) Verdadeira — contra a corrente, guinando tarde demais, o navio avança para o lado externo da curva, onde a corrente forte pega a proa e o carrega de encontro à margem externa: a margem direita do rio.
IV) Falsa — é o mesmo caso de III, mas com a margem trocada.
(Justificativa reconstruída a partir do gabarito oficial e da figura de Crenshaw sobre curvas com corrente; conferir no livro.)`,
  },
  {
    id: "dpc2008-06",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: `With the ship at rest and the right hand screw is started rapidly, only the ____________effect act and, as a result, a single propeller ship tends to move the stern to _______________.

According to R. S. Crenshaw, Jr., in the book “Naval Shiphandling”, which answer best fill in the blanks?`,
    alternativas: {
      A: "helicoidal discharge – starboard",
      B: "following wake – port",
      C: "inclination effect – port",
      D: "shallow submergence – starboard",
      E: "following wake - starboard",
    },
    correta: "D",
    explicacoes: {
      A: "O bordo está certo, mas o efeito não: segundo o gabarito (Crenshaw), na partida com o navio parado só atua o efeito de pequena imersão. A descarga helicoidal é tratada por Crenshaw como efeito sobre o leme, com o hélice já descarregando em regime.",
      B: "A esteira (following wake) só existe com o navio em movimento avante, arrastando água consigo. Com o navio parado não há esteira — e o bordo (port) também está errado.",
      C: "O efeito de inclinação depende do fluxo de água que sobe sob a popa inclinada com o navio com seguimento avante; parado, esse fluxo não existe. Além disso, esse efeito levaria a popa para boreste, não para bombordo.",
      D: "Com o navio parado e o hélice partindo rapidamente, as pás na parte alta do disco trabalham perto da superfície, aspiram ar e rendem menos que as pás de baixo. As pás de baixo, que num hélice de passo direito se movem para bombordo, empurram a popa para boreste. É o efeito de pequena imersão (shallow submergence), o único presente nessa condição.",
      E: "O bordo está certo (boreste), mas a esteira não existe com o navio parado.",
    },
  },
  {
    id: "dpc2008-07",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    enunciado: "De acordo com o livro “Principles of Naval Arquitecture” (PNA), a maioria dos navios mercantes tem diâmetro de guinada (turning diameter) com leme totalmente carregado:",
    alternativas: {
      A: "menor que dois comprimentos de navio.",
      B: "entre 2 e 4 comprimentos de navio.",
      C: "entre 2 e 6 comprimentos de navio.",
      D: "entre 4 e 7 comprimentos de navio.",
      E: "entre 5 e 10 comprimentos de navio.",
    },
    correta: "B",
    explicacoes: {
      A: "Diâmetros menores que 2 comprimentos só são obtidos por embarcações muito manobráveis (rebocadores, navios com propulsão azimutal), não pela maioria dos mercantes.",
      B: "O PNA informa que, com o leme todo carregado, a maioria dos navios mercantes tem diâmetro de giro entre 2 e 4 comprimentos de navio.",
      C: "O limite inferior está certo, mas a faixa é larga demais: 6 comprimentos não é valor típico de mercante com todo o leme.",
      D: "Faixa deslocada para cima: 4 comprimentos já é o limite superior da maioria dos mercantes; valores maiores são de navios finos e velozes (como navios de guerra), não de mercantes típicos.",
      E: "Valores de 5 a 10 comprimentos são muito superiores ao que o PNA indica para leme todo carregado.",
    },
  },
  {
    id: "dpc2008-08",
    prova: "DPC 2008",
    tema: "COLREG / RIPEAM",
    enunciado: "A prático Mariza conduz o NM ITAJUBÁ diretamente para o ponto de espera de prático, após deixar o canal de acesso ao porto. A condição na área é de visibilidade restrita. O NM navega no rumo verdadeiro de 035º, desenvolve velocidade segura e, cumprindo o RIPEAM, exibe suas luzes de posição e emprega o apito. O radar apresenta um único alvo nas proximidades, na bochecha de BB, na marcação verdadeira 355º, que não se consegue avistar. A plotagem radar indica que o alvo se aproxima sem que a marcação se altere em valor apreciável. O PMA calculado é de 500 jds, com a embarcação cruzando a proa do ITAJUBÁ. A vigilância informa ter escutado um apito longo, seguido de dois curtos. A prático Mariza, então, imediata e corretamente, sugere ao comandante:",
    alternativas: {
      A: "manter rumo e velocidade.",
      B: "guinar francamente para BB, mantendo a velocidade.",
      C: "guinar para BE e aumentar a velocidade.",
      D: "guinar francamente para BB e aumentar a velocidade.",
      E: "manter o rumo e reduzir a velocidade.",
    },
    correta: "E",
    explicacoes: {
      A: "Em visibilidade restrita não existe embarcação \"com preferência\" que mantenha rumo e velocidade (as regras de manobra da Seção II só valem para embarcações no visual). Com risco de abalroamento e sinal de cerração ouvido por ante-a-vante do través, a Regra 19 exige ação.",
      B: "A Regra 19(d)(i) manda evitar guinada para bombordo para embarcação por ante-a-vante do través (o alvo está 40° a BB da proa). Além disso, manter a velocidade contraria a Regra 19(e).",
      C: "O alvo vai cruzar a proa do ITAJUBÁ de BB para BE: guinar para BE leva o navio para o lado para onde o alvo se desloca, e aumentar a velocidade em cerração, com sinal ouvido pela proa, é o oposto do que manda a Regra 19(e).",
      D: "Reúne os dois erros: guinada para BB com alvo por ante-a-vante do través (vedada pela Regra 19(d)(i)) e aumento de velocidade em visibilidade restrita.",
      E: "Regra 19(e): quem ouve, aparentemente por ante-a-vante do través, o sinal de cerração de outra embarcação (aqui um longo e dois curtos — Regra 35(c): embarcação sem governo, de manobra restrita, à vela, pescando, rebocando etc.) deve reduzir a velocidade ao mínimo necessário para manter o rumo, quebrando todo o seguimento se preciso, e navegar com extrema cautela. A guinada para BB é vedada pela 19(d), e para BE iria ao encontro do alvo.",
    },
  },
  {
    id: "dpc2008-09",
    prova: "DPC 2008",
    tema: "Meteorologia e Oceanografia",
    tipo: "afirmativas",
    enunciado: `Um navegante, no oceano Atlântico Sul, recebe a bordo o meteoromarinha de 0000 HMG, que contempla, na parte III, a área alfa, com a seguinte redação: “Céu parcialmente nublado a encoberto. Vento de NW/N, ¾, passando a de SW/S, 2/3, no sul da área. Ondas de S/NE, 1.0/2.0. Visibilidade boa à moderada”. Interprete as seguintes afirmativas:

I) uma frente fria já está se afastando da área.
II) rajadas de vento, trovoadas e pancadas de chuva, no norte da área, nas próximas 12 horas.
III) ocorrência de Cb, no sul da área.
IV) passagem do eixo de um cavado nas próximas 24 horas.

De acordo com Lobo & Soares, no livro “Meteorologia e Oceanografia – Usuário Navegante”, assinale a opção abaixo que contém todas as afirmativas corretas apresentadas:`,
    alternativas: {
      A: "II), III) e IV)",
      B: "I), II) e III)",
      C: "I), II) e IV)",
      D: "II) e III)",
      E: "III) e IV)",
    },
    correta: "E",
    comentario: `A rondada do vento de NW/N (pré-frontal, no ar quente) para SW/S (pós-frontal, no ar frio) é a assinatura de uma frente fria no Hemisfério Sul; como a mudança ocorre "no sul da área", a frente está ENTRANDO pela parte sul.
I) Falsa — a frente está chegando à área (só o sul já tem vento de SW/S); o restante ainda está com vento pré-frontal de NW/N. Ela não está se afastando.
II) Falsa — o mau tempo frontal (rajadas, trovoadas, pancadas) está no SUL da área; o norte é o último setor a ser atingido e ainda está sob o regime pré-frontal.
III) Verdadeira — a frente fria no sul da área, com céu passando a encoberto, vem acompanhada de nuvens de desenvolvimento vertical (Cb).
IV) Verdadeira — a frente fria está associada a um cavado; como o sistema avança sobre a área, seu eixo cruzará a área nas próximas 24 horas (período de validade da previsão).`,
  },
  {
    id: "dpc2008-10",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "The ship’s master is charged with the responsibility for the safe of the ship; pilots are engaged to assist with navigation in confined waters and to facilitate port approach, berthing and departure. The master has the ultimate responsibility and has the right and obligation to take over from the pilot in the rare event of the pilot’s inexperience or misjudgement. However in compulsory pilotage areas the pilot will expect to be responsible for the navigational conduct of the vessel. In practice, the master may find himself in a situation where he is not satisfied with the way the passage is being conducted by the pilot, yet is in no position to even query the pilot’s action as he, the master, has no idea as to what should be happening. The master may not be aware of the area, and the pilot may not be aware of the peculiarities of the ship. According to Swift & Bailey, in the book “Bridge Team Management”, these problems can be minimized by:",
    alternativas: {
      A: "comparing the ship’s progress with the planned track.",
      B: "planning the passage from pilot boarding area to berth.",
      C: "monitoring all the pilot’s actions.",
      D: "establishing a routine master/pilot information exchange.",
      E: "ensuring that the ship is following the predetermined passage plan.",
    },
    correta: "D",
    explicacoes: {
      A: "Comparar o progresso do navio com a derrota planejada é tarefa de monitoramento da equipe de passadiço com o prático a bordo; não resolve o problema descrito, que é o desconhecimento mútuo (comandante não conhece a área, prático não conhece o navio).",
      B: "O planejamento do trecho com prático é necessário (o plano deve ir de berço a berço), mas, sozinho, não faz o prático conhecer o navio nem alinha as intenções de ambos. O livro aponta a troca de informações como o remédio para esse problema.",
      C: "Monitorar as ações do prático é dever do oficial de quarto, mas só é possível se o comandante souber o que o prático pretende fazer — o que depende justamente da troca de informações.",
      D: "Swift & Bailey: esses problemas são minimizados estabelecendo-se uma rotina de troca de informações comandante/prático (master/pilot exchange): o comandante passa as particularidades do navio (pilot card) e o prático expõe a derrota e as manobras pretendidas e as condições locais.",
      E: "Assegurar que o navio segue o plano é, de novo, monitoramento; pressupõe que ambos já compartilhem o mesmo plano, o que só se obtém com a troca de informações.",
    },
  },
  {
    id: "dpc2008-11",
    prova: "DPC 2008",
    tema: "Arte Naval",
    revisar: true,
    enunciado: `Assinale a opção abaixo que completa corretamente as lacunas das sentenças seguintes, tendo como referência o livro “Arte Naval”, de Maurílio M. Fonseca:

(I) A fibra que menos sofre a ação da umidade é a(o) ________________.
(II) O cabo de ________________ é o mais forte dos cabos de fibra.
(III) A fibra de ________________ é muito usada na confecção de linhas para adriças de bandeiras.
(IV) A fibra de ________________ é usada nos serviços em que o cabo deva permanecer imerso na água e onde não se exija grande carga de ruptura. Apresenta a vantagem de não apodrecer com facilidade.
(V) O cabo confeccionado com a fibra de ________________ possui grande resistência e flexibilidade quando molhado e sua cor é esbranquiçada como um cabo de algodão.`,
    alternativas: {
      A: "manilha – linho branco – linho cânhamo – linho cultivado – coco",
      B: "manilha – linho branco – linho cultivado – coco – linho cânhamo",
      C: "linho cânhamo – linho cultivado – algodão – juta – linho branco",
      D: "linho cultivado – linho cânhamo – linho branco – juta – manilha",
      E: "linho cânhamo – linho cultivado – algodão – sisal – manilha",
    },
    correta: "B",
    comentario: `Pelo gabarito oficial (Arte Naval):
(I) manilha — é a fibra vegetal que menos sofre a ação da umidade.
(II) linho branco — o cabo de linho cânhamo não alcatroado ("branco") é o mais forte dos cabos de fibra (o alcatrão protege, mas reduz a resistência).
(III) linho cultivado — fibra fina, usada em linhas de adriça de bandeiras e de sinais.
(IV) coco — leve, flutua, não apodrece facilmente na água, mas tem baixa carga de ruptura.
(V) linho cânhamo — resistente e flexível quando molhado, de cor esbranquiçada como o algodão.`,
    explicacoes: {
      A: "Acerta (I) manilha e (II) linho branco, mas troca as três últimas: para adriças de bandeira é o linho cultivado (não o cânhamo); o cabo que fica imerso e tem pouca resistência é o de coco (não o linho cultivado); e o cabo esbranquiçado, forte e flexível quando molhado é o de linho cânhamo (o de coco é fraco).",
      B: "Sequência do gabarito oficial: manilha (menos afetada pela umidade) – linho branco (o mais forte) – linho cultivado (linhas de adriça) – coco (imerso, pouca resistência, não apodrece) – linho cânhamo (resistente e flexível molhado, esbranquiçado).",
      C: "Erra já na (I): a fibra que menos sofre com a umidade é a manilha, não o linho cânhamo. Também erra (II) (o mais forte é o linho branco), (III) (algodão não é a fibra citada para adriças) e (IV) (a juta apodrece com facilidade; a fibra para uso imerso é o coco).",
      D: "Erra a (I) (é manilha, não linho cultivado) e a (IV): a juta é fibra fraca e que apodrece facilmente — o oposto da vantagem descrita, que é do coco. Manilha na (V) também não serve: sua cor não é esbranquiçada como a do algodão.",
      E: "Erra a (I) (manilha, não linho cânhamo), a (II) (linho branco), a (III) (algodão) e a (IV): o sisal não é a fibra indicada para permanecer imersa — é o coco. A manilha na (V) também está errada.",
    },
  },
  {
    id: "dpc2008-12",
    prova: "DPC 2008",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: `Luzes rítmicas brancas dispostas de maneira que pelo menos uma luz seja visível ao navegante que vier de qualquer direção ao se aproximar da estrutura. As luzes devem ser operadas em sincronismo com lampejos agrupados de modo a representar a letra “U” em código Morse, com período máximo de 30 segundos.
A descrição acima corresponde a algumas das particularidades de uma sinalização noturna para:`,
    alternativas: {
      A: "delimitação do perímetro de um grupo de plataformas.",
      B: "obstruções submarinas consideradas como perigos à navegação.",
      C: "cais, píer ou molhe, caso não estejam associados a uma direção convencional do balizamento.",
      D: "sistemas de aquisição de dados oceânicos.",
      E: "plataformas de perfuração e explotação submarina.",
    },
    correta: "E",
    explicacoes: {
      A: "O perímetro de um grupo de plataformas (campo) é delimitado por boias/sinais que seguem o sistema de balizamento (em regra sinais especiais, amarelos), não pelas luzes brancas em Morse “U” instaladas na própria estrutura.",
      B: "Obstruções submarinas que constituam perigo são balizadas com sinais do sistema IALA (cardinais, laterais ou perigo isolado), não com luz branca Morse “U”.",
      C: "Cais, píeres e molhes não associados à direção convencional do balizamento recebem luzes de características próprias (não sincronizadas em Morse “U” visíveis de todas as direções).",
      D: "Sistemas de aquisição de dados oceânicos (ODAS) são sinais especiais: cor amarela e luz amarela, não branca em Morse “U”.",
      E: "É a sinalização padrão (IALA/NORMAM-17) de plataformas de perfuração e explotação: luzes brancas sincronizadas, visíveis de qualquer direção, exibindo Morse “U” (· · —, “você está se dirigindo para um perigo”), com período de no máximo 30 s (normalmente 15 s).",
    },
  },
  {
    id: "dpc2008-13",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    enunciado: `Handling a dead ship to make a broadside narrow berthing, the pilot placed two tugs on the port side of the ship, one at the bow, other at the stern. The tugs secured themselves firmly to the ship with one of “tie-ups” described in the book “Naval Shiphandling”, by R. S. Crenshaw Jr. With this arrangement, the direction of the applied force can be altered over a wide range by simply shifting the tug’s rudder.
According to the referred book, which tie-up should be applied by the tugs?`,
    alternativas: {
      A: "backing headline.",
      B: "single line.",
      C: "power.",
      D: "double headline.",
      E: "single headline.",
    },
    correta: "C",
    explicacoes: {
      A: "“Backing headline” não é uma das amarrações descritas por Crenshaw; um cabo de proa usado para puxar a ré só transmite força numa direção e não prende o rebocador firmemente ao navio.",
      B: "“Single line” não é o nome de nenhuma das amarrações de Crenshaw, e um único cabo não prende o rebocador firmemente ao costado.",
      C: "No “power tie-up” o rebocador fica firmemente preso ao costado (cabo de proa, espringue e cabo de popa), formando um conjunto rígido com o navio. Assim, a direção da força aplicada pode ser variada numa ampla faixa apenas carregando o leme do rebocador — ideal para movimentar um navio sem propulsão (dead ship).",
      D: "No “double headline” o rebocador fica com a proa no costado presa por dois cabos de proa: pode empurrar e puxar sem girar, mas não fica rigidamente preso ao longo do costado a ponto de dirigir a força só com o leme.",
      E: "O “single headline” é a amarração mais simples e rápida, boa para empurrar e para pequenos esforços a ré; não prende o rebocador firmemente ao navio.",
    },
  },
  {
    id: "dpc2008-15",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `Um prático, preocupado com os efeitos do vento em um navio, releu suas anotações, baseadas no livro “Principles of Naval Architecture” (PNA):

I) para um vento de través, tanto o casco como a superestrutura têm a mesma resistência específica; dessa forma, a área efetiva é aproximadamente igual à área projetada longitudinal.
II) quando um navio está navegando sob efeito do vento, a maior resistência ao avanço ocorre quando o vento é de proa.
III) quando um navio se move contra o vento, o vento resultante apresenta o mesmo gradiente que o vento natural.
IV) if there is a strong wind on the beam, the ship will make leeway, which leads to an important increase in hydrodynamic resistance.

Das anotações listadas acima, indique, a seguir, quais as que estão corretas:`,
    alternativas: {
      A: "todas",
      B: "II), III) and IV)",
      C: "I) and IV)",
      D: "I), III) and IV)",
      E: "I) e III)",
    },
    correta: "D",
    comentario: `I) Verdadeira — com vento de proa o casco tem resistência específica menor que a superestrutura, mas com vento de través ambos têm a mesma resistência específica, de modo que a área efetiva é praticamente a área lateral projetada.
II) Falsa — segundo o PNA, a maior resistência ao avanço devida ao vento não ocorre com vento exatamente de proa, e sim com vento relativo aberto cerca de 30° da proa.
III) Verdadeira pelo gabarito oficial — o PNA discute o gradiente do vento natural com a altura e o vento relativo com o navio avançando contra o vento (conferir a redação exata no livro).
IV) Verdadeira — vento forte de través faz o navio abater; navegando com ângulo de deriva (e com leme para compensar), a resistência hidrodinâmica aumenta de forma importante.`,
    explicacoes: {
      A: "Nem todas: a II) é falsa. Pelo PNA, a resistência máxima do vento ao avanço ocorre com o vento relativo cerca de 30° aberto da proa, não com vento exatamente de proa.",
      B: "Inclui a II), que é falsa (o máximo ocorre com vento a cerca de 30° da proa), e deixa de fora a I), que é verdadeira.",
      C: "I) e IV) são verdadeiras, mas a alternativa deixa de fora a III), considerada verdadeira pelo gabarito oficial.",
      D: "I), III) e IV) são as anotações corretas. Apenas a II) é falsa: a maior resistência ocorre com vento cerca de 30° aberto da proa, não de proa.",
      E: "I) e III) são verdadeiras, mas falta a IV): o abatimento causado por vento forte de través aumenta de forma importante a resistência hidrodinâmica.",
    },
  },
  {
    id: "dpc2008-16",
    prova: "DPC 2008",
    tema: "Rebocadores",
    revisar: true,
    enunciado: `The use of tugs towing on a line is used most often when conventional tugs are assisting vessels. The advantage of this method is that it can be used in ________ waters. The forward tugs, sometimes, has two towlines so called __________ lines.
According to Capt. Henk Hensen, in the book “Tug Use in Port”, which answer best fill in the blanks?`,
    alternativas: {
      A: "narrow – twin",
      B: "shallow – twin",
      C: "shallow – cross",
      D: "narrow  - cross",
      E: "shallow – fork",
    },
    correta: "D",
    explicacoes: {
      A: "“Narrow” está certo, mas o nome dado por Hensen aos dois cabos do rebocador de vante é “cross lines” (cabos cruzados), não “twin”.",
      B: "A vantagem do reboque no cabo não é a água rasa, e sim poder ser usado em águas ESTREITAS (o rebocador fica a vante ou a ré, dentro da largura do navio, e não ao costado). “Twin” também não é o termo do livro.",
      C: "“Cross” está certo, mas a vantagem citada por Hensen é o uso em águas estreitas (narrow), não rasas.",
      D: "Hensen: o reboque no cabo (towing on a line) pode ser usado em águas estreitas — pontes, eclusas, canais — porque os rebocadores não ocupam espaço ao costado. Em alguns portos o rebocador de vante passa dois cabos de reboque cruzados, os chamados “cross lines”.",
      E: "Nem “shallow” nem “fork” são os termos usados por Hensen.",
    },
  },
  {
    id: "dpc2008-17",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: `Um prático embarcou em um contratorpedeiro da classe “Knox”, para executar uma manobra de desatracação. O navio estava atracado por boreste, sem obstruções na proa e na popa, em um cais construído na direção Leste – Oeste. A repetidora da agulha giroscópica do passadiço marcava 090º. A amarração estava singela, com todas as espias passadas. Não havia vento no local e a direção da corrente de maré era Oeste, com velocidade de 3 nós. Ao tomar conhecimento de que esta classe de navio só dispõe de um eixo, hélice com passo direito e um leme, o prático avaliou que, embora tivesse que se preocupar com o domo do sonar do navio, a manobra não seria difícil. Dispensou, então, o auxílio de rebocadores e começou a manobra.
Assinale, de acordo com o livro “Naval Shiphandling”, de R. S. Crenshaw Jr., a manobra correta a ser realizada pelo prático para desatracar o contratorpedeiro com segurança:`,
    alternativas: {
      A: "carregar o leme para boreste, entrar com a espia 1, solecar a espia 6 e largar as demais espias; quando abrir a popa, manter o leme a boreste, largar as espias e colocar máquina atrás.",
      B: "carregar o leme para bombordo, entrar com a espia 1, solecar a espia 6 e largar as demais espias; quando abrir a popa, manter o leme a bombordo, largar as espias e colocar máquina atrás.",
      C: "carregar o leme para bombordo, agüentar a espia 5, solecar a espia 1 e largar as demais espias; quando abrir a proa, manter o leme a bombordo, solecar a 5, agüentar a 1 temporariamente e colocar máquina adiante 1/3; largar as espias, inverter o leme e colocar máquina adiante.",
      D: "carregar o leme para bombordo, agüentar a espia 5, solecar a espia 1 e largar as demais espias; quando abrir a proa, inverter o leme, solecar a 5, agüentar a 1 temporariamente e colocar máquina adiante 1/3; largar as espias e, com o leme a meio, colocar máquina adiante.",
      E: "carregar o leme para bombordo, agüentar a espia 5, solecar a espia 1 e largar as demais espias; quando abrir a proa, colocar o leme a meio, solecar a 5, agüentar a 1 temporariamente e colocar máquina adiante 1/3; largar as espias e, com o leme a meio, colocar máquina adiante.",
    },
    correta: "E",
    comentario: "Situação: proa a 090° e corrente correndo para Oeste, ou seja, corrente de 3 nós pela PROA. Com corrente de proa, a saída natural é abrir a proa: aguenta-se um espringue de ré (a espia 5, na numeração de seis espias de Crenshaw), soleca-se o lançante de proa (espia 1) e, com o leme para fora (bombordo), a corrente entra entre o costado e o cais e abre a proa, sem usar máquina. (Justificativa reconstruída a partir do gabarito; conferir no livro.)",
    explicacoes: {
      A: "Abrir a popa e sair com máquina atrás é manobra para corrente de popa ou ausência de corrente. Aqui a corrente vem de proa: girar sobre a espia 1 aperta a bochecha (e o domo do sonar, que é a preocupação do prático) contra o cais, e leme a boreste sem descarga de hélice não abre a popa.",
      B: "Mesmo defeito da (A): insiste em abrir a popa girando sobre a espia de proa, pressionando a proa/domo do sonar contra o cais, quando a corrente de proa permite abrir a proa sem esforço. O leme a bombordo ainda traria a popa para o cais.",
      C: "O início está certo (aguentar a 5, solecar a 1, abrir a proa), mas ao dar máquina adiante com o leme ainda todo a bombordo a descarga do hélice no leme joga a popa para boreste, contra o cais, pondo em risco hélice e leme.",
      D: "O início está certo, mas inverter o leme (para boreste) com a proa aberta e máquina adiante traz a proa de volta para o cais, desfazendo a abertura obtida e ameaçando o domo do sonar.",
      E: "Sequência do gabarito: leme a bombordo, aguenta a 5 e soleca a 1 — a corrente de proa abre a proa. Com a proa aberta, leme a meio (para não jogar a popa contra o cais nem fechar a proa), soleca a 5, aguenta a 1 momentaneamente para controlar a abertura, máquina adiante 1/3, larga tudo e sai adiante com o leme a meio, afastando-se paralelamente ao ângulo já aberto.",
    },
  },
  {
    id: "dpc2008-19",
    prova: "DPC 2008",
    tema: "COLREG / RIPEAM",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com o prescrito pelo COLREG e pelas Normas da Autoridade Marítima para Embarcações Empregadas na Navegação Interior (NORMAM-02/DPC), associe a coluna A com a coluna B e aponte a resposta correta:

COLUNA A
1) warning signal
2) manoeuvring signal
3) signal to attract attention
4) sound signal in restricted visibility
5) distress signal

COLUNA B
( ) one prolonged blast in normal visibility
( ) two short blasts
( ) the beam of searchlight
( ) three blasts in succession, namely one prolonged followed by two short blasts
( ) a continuous sounding with any fog-signalling apparatus
( ) four prolonged blasts`,
    alternativas: {
      A: "(1) (2) (3) (2) (5) (4)",
      B: "(3) (4) (5) (2) (3) (1)",
      C: "(1) (2) (3) (4) (5) (3)",
      D: "(2) (1) (5) (4) (4) (3)",
      E: "(5) (1) (1) (2) (3) (4)",
    },
    correta: "C",
    comentario: `Item a item:
1º Um apito longo com boa visibilidade → sinal de advertência (1): Regra 34(e), embarcação aproximando-se de curva ou trecho de canal onde outras possam estar encobertas.
2º Dois apitos curtos → sinal de manobra (2): Regra 34(a), "estou guinando para bombordo".
3º Facho de holofote → sinal para chamar a atenção (3): Regra 36, dirigir o facho na direção do perigo sem atrapalhar outra embarcação.
4º Um longo seguido de dois curtos → sinal sonoro em visibilidade restrita (4): Regra 35(c) (sem governo, manobra restrita, restrita pelo calado, vela, pesca, rebocando).
5º Toque contínuo de qualquer aparelho de sinalização de cerração → sinal de perigo (5): Anexo IV.
6º Quatro apitos longos → pelo gabarito oficial, sinal para chamar a atenção (3): não corresponde a nenhum sinal de manobra, de cerração ou de perigo; enquadra-se na Regra 36 / NORMAM-02 como sinal que não pode ser confundido com os demais (conferir a redação da NORMAM-02).`,
  },
  {
    id: "dpc2008-21",
    prova: "DPC 2008",
    tema: "Rebocadores",
    enunciado: `De acordo com Fragoso & Cajaty, no livro “Rebocadores Portuários”, analise as afirmações abaixo:

I) o reboque com cabo na proa do navio é a forma tradicional quando se quer rebocar um navio sem propulsão; porém, com o navio em movimento, a tentativa de governo usando esse rebocador apresenta resultados limitados.
II) um rebocador, com cabo passado na proa do navio, não é capaz de atuar quando se quer quebrar o segmento avante do navio.
III) um rebocador, com cabo de reboque na popa de um navio, é a melhor forma de atuar quando se deseja manobrar um navio com segmento e com problema de governo.
IV) é possível um rebocador não convencional trabalhar na popa do navio em movimento e aplicar força superior ao seu próprio “bollard pull”.

Quais das afirmativas acima estão corretas?`,
    alternativas: {
      A: "Todas",
      B: "I), II) e III)",
      C: "I), II) e IV)",
      D: "I), III) e IV)",
      E: "II), III) e IV)",
    },
    correta: "A",
    comentario: `I) Verdadeira — o rebocador na proa atua perto do ponto giratório do navio com seguimento avante: o braço de alavanca é pequeno e o efeito de governo é limitado.
II) Verdadeira — o rebocador com cabo na proa só pode puxar para vante ou para os bordos; não tem como frear o seguimento avante.
III) Verdadeira — na popa o rebocador fica longe do ponto giratório (grande braço de alavanca) e pode tanto governar quanto frear o navio: é a posição da escolta.
IV) Verdadeira — nos métodos indiretos, o rebocador azimutal/trator na popa usa a força hidrodinâmica gerada pelo seu casco atravessado ao fluxo, obtendo no cabo forças superiores ao seu bollard pull.`,
    explicacoes: {
      A: "As quatro afirmativas estão de acordo com Fragoso & Cajaty: limitação do rebocador na proa para governar (I) e para quebrar o seguimento (II), superioridade do rebocador na popa (III) e forças acima do bollard pull no modo indireto (IV).",
      B: "Deixa de fora a IV), que é verdadeira: no modo indireto o rebocador não convencional gera no cabo força superior ao seu bollard pull.",
      C: "Deixa de fora a III), que é verdadeira: o rebocador com cabo na popa é a melhor forma de controlar navio com seguimento e problema de governo.",
      D: "Deixa de fora a II), que é verdadeira: com cabo na proa o rebocador não consegue quebrar o seguimento avante do navio.",
      E: "Deixa de fora a I), que é verdadeira: o cabo na proa é a forma tradicional de rebocar navio sem propulsão, mas dá governo limitado com o navio em movimento.",
    },
  },
  {
    id: "dpc2008-22",
    prova: "DPC 2008",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `De acordo com Swift & Bailey, no livro “Bridge Team Management”, coloque (F) falso ou (V) verdadeiro nas afirmativas abaixo, assinalando, a seguir, a opção correta:

( ) the extreme height of the ship above the keel, known as the air draught, will be required if there are low overhead clearances.
( ) when making a landfall, by determining the bearing and range of a “dipping light” the OOW can obtain an approximate position, often long before radar can have detected such light.
( ) when the actual time of transit of a given area is known the Tidal Heights and Streams can be calculated and due allowance made for these streams in order to calculate the course to steer to achieve a planned track.
( ) termed the “point of return”, it will be the position where the ship enters water so narrow that there is no room to turn or where it is not possible to retrace the track due to a falling tide and insufficient UKC.
( ) coastal and estuarial tracks will also be constrained by the decisions made at the appraisal stage and should be first drawn on the large-scale charts of the area to be traversed.`,
    alternativas: {
      A: "(V) (F) (V) (F) (F)",
      B: "(F) (V) (V) (V) (F)",
      C: "(F) (V) (V) (F) (F)",
      D: "(F) (F) (F) (V) (V)",
      E: "(V) (V) (F) (F) (V)",
    },
    correta: "C",
    comentario: `Item a item:
1º Falso — o "air draught" é a altura máxima do navio acima da LINHA-D'ÁGUA, não acima da quilha.
2º Verdadeiro — marcação e distância de uma luz no momento em que surge/mergulha no horizonte (dipping light) dão uma posição aproximada, muitas vezes bem antes de o radar detectar a costa.
3º Verdadeiro — conhecida a hora real da passagem, calculam-se alturas e correntes de maré e o rumo a governar para manter a derrota planejada.
4º Falso — o termo do livro é "point of NO return" (ponto de não retorno).
5º Falso — as derrotas costeiras e estuarinas devem ser traçadas primeiro nas cartas de PEQUENA escala (que cobrem grandes trechos de costa) e depois transferidas para as de grande escala.`,
  },
  {
    id: "dpc2008-23",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    enunciado: "Um navio de passageiros, classificado para a navegação em mar aberto, com arqueação bruta igual a 10.000, transportando turistas, navegando no rio Amazonas, sofre uma colisão. A seguir, verificou-se que os compartimentos abaixo da linha d’água estão alagando rapidamente. O prático sugere ao comandante que o navio seja desviado para a margem e encalhado. Não houve a ocorrência de vítimas fatais ou de feridos. De acordo com o previsto nas Normas da Autoridade Marítima para Inquéritos Administrativos sobre Acidentes e Fatos da Navegação (NORMAM-09/DPC), tal seqüência de eventos é classificada como:",
    alternativas: {
      A: "fato da navegação, seguido de água aberta, com encalhe, caracterizando uma arribada.",
      B: "acidente da navegação, seguido de água aberta, com encalhe, caracterizando uma alteração de rota.",
      C: "acidente da navegação, caracterizado por abalroação, água aberta e encalhe.",
      D: "fato da navegação, caracterizado por colisão, água aberta e encalhe.",
      E: "acidente da navegação, caracterizado por colisão, água aberta e varação.",
    },
    correta: "E",
    explicacoes: {
      A: "Colisão, água aberta e varação são ACIDENTES da navegação, não fatos. E arribada é entrar em porto ou lugar não previsto na viagem, o que não ocorreu.",
      B: "É acidente, mas a alteração de rota é FATO da navegação e não descreve o ocorrido; além disso, pôr o navio em seco de propósito é varação, não encalhe.",
      C: "O enunciado fala em colisão (choque contra objeto fixo ou flutuante que não seja embarcação); abalroação é o choque entre embarcações. E o ato intencional de pôr o navio em seco é varação, não encalhe.",
      D: "Colisão e água aberta são acidentes da navegação (Lei 2.180, art. 14), não fatos (art. 15). E o encalhe proposital chama-se varação.",
      E: "Todos são ACIDENTES da navegação (art. 14 da Lei 2.180 / NORMAM-09): colisão (o evento inicial citado), água aberta (alagamento por abertura nas obras vivas) e varação — ato deliberado de encalhar o navio para evitar mal maior, que é o que o prático sugeriu (encalhe seria o ato acidental).",
    },
  },
  {
    id: "dpc2008-24",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com o livro “Principles of Naval Arquitecture” (PNA), coloque V (verdadeiro) ou F (falso) nas afirmativas abaixo, assinalando, a seguir, a opção correta:

( ) normalmente, considera-se a distância de parada de um navio (stopping head reach) àquela obtida para velocidades de porto.
( ) with sufficient see room, turning of a large ship is much superior to stopping for avoiding a hazard.
( ) astern thrust predominates when stopping a large tanker on a straight path from moderate speed.
( ) o tempo necessário para inverter a rotação do hélice é mais importante para navios maiores.`,
    alternativas: {
      A: "(V) (V) (V) (F)",
      B: "(V) (F) (F) (V)",
      C: "(V) (V) (F) (F)",
      D: "(V) (F) (V) (F)",
      E: "(V) (F) (V) (V)",
    },
    correta: "D",
    comentario: `Item a item (pelo gabarito oficial; conferir a redação no PNA):
1º Verdadeiro — a distância de parada que interessa na prática é a obtida a partir de velocidades de porto/manobra, que é quando a parada em emergência é de fato utilizada.
2º Falso — pelo gabarito. O PNA compara o avanço da curva de giro com a distância de parada e mostra a vantagem do giro em ALTAS velocidades; a afirmação genérica ("much superior", para qualquer condição) não corresponde ao texto — em baixas velocidades a parada pode ser equivalente ou melhor.
3º Verdadeiro — partindo de velocidade moderada, a resistência do casco é pequena, e quem efetivamente para um grande petroleiro é o empuxo a ré do hélice.
4º Falso — é o contrário: o tempo para inverter o hélice pesa mais nos navios MENORES, cuja parada é curta; nos navios grandes, a parada dura tantos minutos que o tempo de reversão é parcela pequena.`,
  },
  {
    id: "dpc2008-25",
    prova: "DPC 2008",
    tema: "Rebocadores",
    enunciado: `When a tug is slowly overtaking a bulk carrier and approach the stern from behind, it experience a(n) ________________ of speed due to the ________________. When coming nearly abeam of the stern the tug is ________________ the ship, caused by ________________.
Since the tug’s forepart is closer to the ship than the stern, the tug experiences a ________________ turning moment. As soon as the tug moves further forward and parallel with the ship’s hull, it experience a sudden ________________ turning moment caused by ________________.

According to Capt. Henk Hensen, in the book “Tug Use in Port”, which answer best fill in the blanks?`,
    alternativas: {
      A: "decrease – stern high pressure zone – sucked toward – low pressure field due to the speed of water between tug and ship’s hull – toward – outward – the tug’s bow cushion",
      B: "decrease – stern high pressure zone – pushed outward – stern high pressure – outward – toward – the wave generated by the ship",
      C: "increase – relative low water speed – sucked toward – low pressure field due to the speed of water between tug and ship’s hull – outward – toward – relatively high water speed",
      D: "increase – relative low water speed – pushed outward – the ship wake – toward – outward – the tug’s bow cushion",
      E: "increase – relative low water speed – sucked toward – low pressure field due to the speed of water between tug and ship’s hull – toward – outward – the tug’s bow cushion",
    },
    correta: "E",
    explicacoes: {
      A: "Erra as duas primeiras lacunas: junto à popa o rebocador entra na esteira do navio, onde a água acompanha o navio (baixa velocidade relativa), e por isso GANHA velocidade — não perde. O restante da sequência está certo.",
      B: "Erra desde o início (o rebocador ganha velocidade, não perde) e inverte todos os efeitos: ao través da popa o rebocador é SUGADO para o navio pela baixa pressão, não empurrado para fora; os momentos também estão trocados.",
      C: "As quatro primeiras lacunas estão certas, mas os momentos estão invertidos: com a proa do rebocador mais próxima do costado, o momento é PARA o navio (toward); depois, paralelo ao casco, surge o momento súbito PARA FORA (outward), causado pelo colchão de pressão na proa do rebocador.",
      D: "Acerta o ganho de velocidade, mas ao través da popa o rebocador é sugado para o navio (campo de baixa pressão pelo escoamento acelerado entre os cascos), e não empurrado para fora pela esteira.",
      E: "Sequência de Hensen: junto à popa o rebocador ganha velocidade (increase) por causa da baixa velocidade relativa da água na esteira; quase ao través da popa é sugado para o navio (sucked toward) pelo campo de baixa pressão do escoamento acelerado entre os cascos; com a proa mais perto do costado sofre momento PARA o navio (toward); ao avançar e ficar paralelo, sofre súbito momento PARA FORA (outward) causado pelo colchão de pressão na proa do rebocador (bow cushion).",
    },
  },
);

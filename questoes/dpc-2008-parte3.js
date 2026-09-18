// Prova escrita DPC 2008 (Processo Seletivo de Praticante de Prático) — questões 52 a 73.
// Questão 51 foi ANULADA e não consta. Letra correta: gabarito oficial.
QUESTOES.push(
  {
    id: "dpc2008-52",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `Consulting R. S. Crenshaw, Jr., in the book “Naval Shiphandling”, in order to remember some techniques about mooring a destroyer to a buoy, a pilot made a list with the following procedures:

I) stop the engines at 200 yards from the buoy, pass the buoy line and messenger to the boat, and send the boat out ahead with the buoy line.
II) use a buoy hook for securing buoy line, as necessary.
III) never allow the ship to get between the buoy and the boat.
IV) use the engines and helm to twist the bow downwind and slightly short of the buoy, when making a buoy crosswind or crosscurrent.

From that list, is correct to affirm according to the referred book that:`,
    alternativas: {
      A: "I), II) and III) solely are correct",
      B: "II) and III) solely are correct",
      C: "I)  and IV) solely are correct",
      D: "I) solely is correct",
      E: "IV) solely is correct",
    },
    correta: "D",
    comentario: `Pelo gabarito oficial (Crenshaw, amarração de contratorpedeiro à boia):
I) Verdadeira — o procedimento descrito é o do livro: parar máquinas a cerca de 200 jardas da boia, passar o cabo da boia e o mensageiro para a lancha e mandá-la à frente com o cabo.
II) Falsa — pelo gabarito. O livro não recomenda o "buoy hook" para fixar o cabo; o cabo da boia é fixado ao arganéu com manilha pelo pessoal da lancha/boia (conferir a redação no livro).
III) Falsa — pelo gabarito. A regra do livro é nunca deixar a LANCHA ficar entre o navio e a boia (risco de esmagamento), e não o navio entre a boia e a lancha.
IV) Falsa — com vento ou corrente de través, a proa deve ser levada para BARLAVENTO (upwind/upcurrent) da boia, pois o navio abaterá sobre ela; levar a proa para sotavento faz o navio afastar-se da boia.`,
  },
  {
    id: "dpc2008-53",
    prova: "DPC 2008",
    tema: "Sinalização Náutica",
    enunciado: "Assinale a opção correta em relação às luzes e suas características de um sinal náutico luminoso:",
    alternativas: {
      A: "luz de setor é aquela que exibe ao navegante, em um setor bem estreito, uma cor definida para indicar uma direção.",
      B: "ocultação é o intervalo de obscuridade relativamente mais curto que o de luz em um mesmo período.",
      C: "luz alternada é aquela que apresenta características de lampejo e ocultação de modo alternado.",
      D: "fase é o intervalo de tempo decorrido entre os inícios de dois ciclos sucessivos e idênticos da característica de uma luz rítmica.",
      E: "luz de ocultação é aquela em que a duração total das somas dos eclipses é nitidamente mais longa que a duração total dos lampejos, e na qual os eclipses têm igual duração.",
    },
    correta: "B",
    explicacoes: {
      A: "Essa é a definição de luz DIRECIONAL (setor bem estreito indicando uma direção a seguir). Luz de setor é a que apresenta cores ou características diferentes em setores distintos do horizonte.",
      B: "Definição correta: ocultação é o intervalo de obscuridade (eclipse) relativamente mais curto que o intervalo de luz, dentro de um mesmo período. Se a luz fosse mais curta que a obscuridade, seria lampejo.",
      C: "Luz alternada é a que exibe CORES diferentes alternadamente (por exemplo, Alt. B.E.), não a que alterna lampejo e ocultação.",
      D: "Essa é a definição de PERÍODO. Fase é cada um dos elementos (luz ou eclipse) que compõem o período.",
      E: "Está invertida: na luz de ocultação a duração total de LUZ é nitidamente maior que a de obscuridade, e os eclipses têm igual duração. Quando a obscuridade predomina, a luz é de lampejos.",
    },
  },
  {
    id: "dpc2008-54",
    prova: "DPC 2008",
    tema: "Arte Naval",
    enunciado: `Assinale a opção abaixo que completa corretamente as lacunas das seguintes sentenças:

A âncora é ligada ________________ à amarra, que é uma cadeia de elos especiais ________________.
________________ é a aresta saliente localizada na base inferior ________________ nas âncoras tipo ________________.`,
    alternativas: {
      A: "por manilha – com malhetes – palma – dos braços – patente",
      B: "pelo tornel – com malhetes – pata – da cruz – patente",
      C: "pelo tornel – tipo patente – pata – da haste – danforth",
      D: "por manilha – com cavirão – palma – da haste – patente",
      E: "pelo anete – tipo patente – pata – da haste – danforth",
    },
    correta: "A",
    explicacoes: {
      A: "Arte Naval: a âncora é ligada por manilha (manilhão da âncora, passado no anete) à amarra, que é uma cadeia de elos especiais com malhetes (travessões que impedem a deformação e as cocas). Palma é a aresta saliente na base inferior dos braços das âncoras tipo patente, que faz os braços cravarem quando a âncora é arrastada no fundo.",
      B: "O tornel é um elemento da amarra que permite a ela girar sem tomar cocas; não é a peça de ligação à âncora. “Pata” é a extremidade achatada/triangular do braço que unha no fundo, não a aresta saliente da base — que é a palma e fica nos braços, não “na cruz”.",
      C: "“Tipo patente” qualifica âncoras, não elos — os elos da amarra são com malhetes. Tornel, pata e haste também estão errados, e a palma é característica da âncora tipo patente (sem cepo), não especificamente da Danforth.",
      D: "“Por manilha” e “palma” estão certos, mas cavirão é o pino que trava a manilha, não o que caracteriza os elos (que têm malhetes), e a palma fica na base dos BRAÇOS, não da haste.",
      E: "O anete é o arganéu da própria âncora (onde a manilha é passada), não a peça de ligação; os elos são com malhetes; a aresta é a palma, nos braços; e a âncora do texto é a tipo patente.",
    },
  },
  {
    id: "dpc2008-55",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: `Leia o texto abaixo e assinale a opção INCORRETA em relação à navegação por meio de satélite:

According to Swift & Bailey, in the book “Bridge Team Management”, the provision of navigational satellites, giving ships the opportunity to determine their position at any time, is one of the greatest achievements of modern technology. However, like all navigational systems, incidents have occurred when they were least expected. GPS does not lessen the requirement for careful and diligent navigation.`,
    alternativas: {
      A: "one key factor which requires to be monitored is the possibility of equipment failure in both the satellite and in the on board equipment.",
      B: "to avoid a one-man error, as there are many different types of satellite receiver, the mariner must double check readings and chart positions.",
      C: "the careful navigator will be checking satellite readings by another independent means, even though this may be as simple as DR.",
      D: "an excellent way of confirming the GPS is to check one another with two or more independent satellite receivers.",
      E: "one key factor which requires to be monitored is the geographical reference of the satellite when compared to the chart.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta: a possibilidade de falha, tanto do satélite quanto do equipamento de bordo, é um dos fatores-chave a monitorar segundo o livro. Não é a resposta.",
      B: "Afirmação correta: há muitos tipos de receptor e o erro de uma só pessoa (leitura ou plotagem) deve ser evitado conferindo-se leituras e posições na carta. Não é a resposta.",
      C: "Afirmação correta: o navegador cuidadoso confere a posição satélite por OUTRO meio independente, ainda que seja a simples navegação estimada (DR). Não é a resposta.",
      D: "É a INCORRETA (gabarito): dois ou mais receptores GPS não são meios independentes — todos dependem do mesmo sistema de satélites e do mesmo datum, e repetem o mesmo erro. A conferência deve ser feita por meio independente (radar, visual, ecobatímetro, estima).",
      E: "Afirmação correta: a referência geográfica (datum) do sistema de satélites pode diferir da carta, e essa diferença é um dos fatores-chave a monitorar. Não é a resposta.",
    },
  },
  {
    id: "dpc2008-56",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    enunciado: "Uma embarcação de carga de bandeira estrangeira, devidamente abastecida de combustível, água e gêneros alimentícios, com arqueação bruta igual a 350, navegando em águas jurisdicionais brasileiras a 100 milhas náuticas da costa, recebe sinal de socorro por intermédio do equipamento de chamada seletiva digital (DSC) do VHF do equipamento GMDSS. O comandante da embarcação verifica que o sinal de socorro é proveniente de outra embarcação que se encontra a aproximadamente 10 milhas náuticas de distância e que, para interceptá-la, seria necessário alteração de rota. O comandante da embarcação decide não atender ao pedido de socorro porque, analisando a situação, julgou que tal ação iria caracterizar alteração de rota e, ainda, que a sua embarcação, devido ao valor da arqueação bruta, não é obrigada a ser dotada do GMDSS. Examinando-se o caso sob a ótica da Lei nº 2.180, de 5 de fevereiro de 1954, que dispõe sobre o Tribunal Marítimo, e das Normas da Autoridade Marítima para Inquéritos Administrativos sobre Acidentes e Fatos da Navegação (NORMAM-09/DPC), assinale a afirmativa correta dentre as opções abaixo:",
    alternativas: {
      A: "o comandante da embarcação, em que pese não ter prestado socorro, não poderá ser responsabilizado porque sua embarcação não é obrigada a ser dotada do GMDSS.",
      B: "o comandante da embarcação agiu de forma correta, porque, se fosse prestar socorro, poderia ser responsabilizado por alteração de rota.",
      C: "o comandante da embarcação agiu de forma incorreta, porque a ação não caracterizaria alteração de rota.",
      D: "o comandante da embarcação analisou a situação de forma correta, porque sua embarcação não é obrigada a ser dotada do GMDSS.",
      E: "mesmo que tenha agido de forma incorreta, o comandante da embarcação não poderá ser responsabilizado por ser estrangeiro.",
    },
    correta: "C",
    explicacoes: {
      A: "A obrigação de prestar socorro não depende de a embarcação ser obrigada a dotar GMDSS: o comandante RECEBEU o pedido e tinha condições de atendê-lo. A recusa injustificada de socorro é fato da navegação (Lei 2.180, art. 15).",
      B: "O desvio para prestar socorro a embarcação em perigo é justificado e não configura o fato da navegação “alteração de rota”, que pressupõe desvio INJUSTIFICADO da derrota. O comandante não agiu corretamente.",
      C: "Desviar-se para socorrer embarcação em perigo não caracteriza “alteração de rota” como fato da navegação, pois há justa causa. Ao contrário, a omissão é que constitui fato da navegação: “recusa injustificada de socorro a embarcação em perigo” (Lei 2.180, art. 15). O comandante agiu de forma incorreta.",
      D: "A dispensa de dotação do GMDSS é irrelevante: o dever de assistência decorre do conhecimento do perigo e da possibilidade de socorrer sem risco sério para a própria embarcação (que estava bem abastecida e a apenas 10 milhas).",
      E: "O Tribunal Marítimo exerce jurisdição sobre embarcações estrangeiras em águas jurisdicionais brasileiras (Lei 2.180, art. 10); a nacionalidade do comandante não o exime de responsabilidade.",
    },
  },
  {
    id: "dpc2008-57",
    prova: "DPC 2008",
    tema: "COLREG / RIPEAM",
    enunciado: "O prático Gomes assessora o comandante na condução de um NM de 250 m pelo canal de acesso a um porto, exibindo no mastro, em adriças distintas, a marca constituída por um cilindro preto, a bandeira HOTEL e a bandeira DELTA. Uma lancha de cerca de 10 m de comprimento navega em rumo aproximadamente perpendicular ao do NM, indicando visualmente que vai cruzar a sua proa de BE para BB, em situação facilmente avaliada como de risco de abalroamento. O experiente Gomes, em cumprimento ao COLREG, sugere corretamente ao comandante:",
    alternativas: {
      A: "que faça soar cinco apitos curtos e guine para BE.",
      B: "que faça soar três apitos sucessivos, sendo o primeiro longo e os dois seguintes curtos, e reduza a velocidade.",
      C: "que faça soar cinco apitos curtos e rápidos e guine para BE.",
      D: "que faça soar seis apitos curtos e rápidos e reduza a velocidade.",
      E: "que faça soar um apito longo e reduza a velocidade.",
    },
    correta: "D",
    explicacoes: {
      A: "O sinal de dúvida exige apitos curtos E RÁPIDOS (Regra 34(d)), e a guinada para BE é inviável: o cilindro indica navio restrito pelo calado, que não pode se afastar do eixo do canal. A lancha (menos de 20 m) é que não deve atrapalhar sua passagem (Regras 9(b) e 18(d)).",
      B: "Um longo seguido de dois curtos é sinal de VISIBILIDADE RESTRITA (Regra 35(c)); a situação é de embarcações no visual. O sinal cabível é o de dúvida/advertência da Regra 34(d).",
      C: "O sinal está certo (pelo menos cinco apitos curtos e rápidos), mas a manobra não: navio de 250 m restrito pelo calado em canal não pode guinar para BE sem risco de encalhe; a ação possível é reduzir a velocidade (Regra 8(e)).",
      D: "Cilindro = restrita pelo calado (Regra 28); H = prático a bordo; D = \"mantenha-se afastado, manobro com dificuldade\". A lancha de 10 m não deve atrapalhar a passagem do NM (Regras 9(b) e 18(d)). Em dúvida sobre a manobra da lancha, soa-se o sinal da Regra 34(d): NO MÍNIMO cinco apitos curtos e rápidos — seis atendem à regra — e, sem poder guinar, reduz-se a velocidade (Regra 8(e)).",
      E: "Um apito longo é o sinal de aproximação de curva ou trecho encoberto do canal (Regra 34(e)), não o sinal de dúvida quanto à manobra de outra embarcação à vista.",
    },
  },
  {
    id: "dpc2008-58",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "afirmativas",
    enunciado: `The investigation into the grounding of a Russian conteiner ship, the “Kapitan Serykh”, included the following conclusions:
1. The grounding was the result of the “Kapitan Serykh” not attaining sufficient propeller thurst/speed to execute the turn on to the leads in the wind conditions at the time.
2. The exchange of information between the master and the pilot did not conform to the requirements of the International Convention on Standards of Training, Certification and Watch Keeping for Seafares.
3. For reasons unknown, the master did not provide the manoeuvring full ahead pitch, as indicated on the Pilot Card and repeatedly requested by the pilot.
4. Had the Pilot been informed of the manoeuvring problems during the vessel’s arrival at the port he would have been forewarned of a possible problem during departure.

The conclusions prove the importance of pilot-master information exchange. In order to provide the master with any information that is relevant to the vessel passage, this exchange should include:

I) providing estimated call out time for the crew, need for an anchor watch, any special engine maneuvers.
II) discussing recent changes in the International Regulations for Preventing Collisions at Sea.
III) fixing the current position and reviewing the general route from that point to the berth or anchorage.
IV) discussing any accidents recently occurred in the harbour.

According to MacElrevey & MacElrevey, in the book “Shiphandler for the Mariner”, is correct to affirm that:`,
    alternativas: {
      A: "I), II) and III) solely are true",
      B: "I) and III) solely are true",
      C: "II) and III) solely are true",
      D: "II) solely is true",
      E: "III) solely is true",
    },
    correta: "B",
    comentario: `I) Verdadeira — MacElrevey inclui na troca de informações a hora estimada para chamar a tripulação aos postos, a necessidade de guarnecer os ferros e eventuais manobras especiais de máquinas.
II) Falsa — alterações do RIPEAM não são informação específica da travessia; não fazem parte da troca de informações prático/comandante.
III) Verdadeira — confirmar a posição atual e rever a derrota geral dali até o berço ou fundeadouro é o núcleo da troca de informações.
IV) Falsa — acidentes recentes no porto não são, em si, informação relevante para a passagem do navio; o livro não os inclui.`,
  },
  {
    id: "dpc2008-59",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "De acordo com o livro “Navegação: A Ciência e a Arte”, de A. P. Miguens, ao se preparar para uma passagem por águas restritas, onde irá empregar a navegação paralela indexada, o navegador, usando um compasso, compara fisicamente a distância entre os anéis de distância da repetidora do radar em cada escala a ser utilizada. Por meio desse procedimento, o navegador busca, naquela repetidora:",
    alternativas: {
      A: "determinar o erro em distância.",
      B: "verificar a condição de linearidade.",
      C: "aferir o erro de marcação.",
      D: "verificar a distorção devida à largura do feixe radar.",
      E: "verificar a condição de centragem.",
    },
    correta: "B",
    explicacoes: {
      A: "O erro em distância é determinado comparando a distância radar a um objeto conspícuo com a distância real obtida na carta (navio em posição conhecida), não medindo o espaçamento entre os anéis.",
      B: "Na navegação paralela indexada as distâncias são transferidas para a tela em escala; isso só é válido se a varredura for LINEAR, isto é, se os anéis de distância estiverem igualmente espaçados do centro à borda. É o que o navegador verifica ao comparar com o compasso o espaçamento entre os anéis em cada escala.",
      C: "O erro de marcação é aferido comparando marcações radar com marcações visuais ou com alinhamentos conhecidos; o espaçamento entre anéis nada informa sobre marcação.",
      D: "A distorção por largura de feixe é característica da antena (alarga os ecos em marcação) e não é verificável pelo espaçamento dos anéis fixos de distância.",
      E: "A centragem verifica se a origem da varredura coincide com o centro da tela/cursor de marcação; confere-se com o cursor e os anéis concêntricos, não comparando o espaçamento ENTRE os anéis.",
    },
  },
  {
    id: "dpc2008-60",
    prova: "DPC 2008",
    tema: "Navegação",
    revisar: true,
    enunciado: `Analise as afirmativas abaixo:

(I) em costas rochosas, a linha de igual profundidade de 20 (vinte) metros constitui outra chamada de atenção, especialmente para navios de maior calado.
(II) ao navegar ao longo da costa, o navegante deve ter em mente que a velocidade reduzida em cerração é considerada pelos tribunais como sendo “a velocidade que permite a um navio, depois de avistar outro que venha sobre ele, guinar com segurança, segundo as regras do RIPEAM, para evitar um abalroamento”.
(III) os balizamentos de utilização restrita, estabelecidos, mantidos e operados por particulares, quando localizados em áreas hidrografadas, não têm suas alterações divulgadas em “Aviso aos Navegantes”.
(IV) exceto em cartas de portos que tenham sido levantados com detalhes, a linha de igual profundidade de 10 (dez) metros deve ser considerada como linha de precaução ou perigo, devido à possibilidade de existência de irregularidade no fundo não conhecida.

De acordo com o Roteiro e com as Normas da Autoridade Marítima para a Sinalização Náutica (NORMAM-17/DPC), assinale, a seguir, a opção correta:`,
    alternativas: {
      A: "as afirmativas I), II) e IV) são falsas",
      B: "as afirmativas II), III) e IV) são verdadeiras",
      C: "as afirmativas I), III) e IV) são verdadeiras",
      D: "as afirmativas I) e III) são falsas",
      E: "as afirmativas II) e IV) são falsas",
    },
    correta: "C",
    comentario: `Pelo gabarito oficial:
(I) Verdadeira — o Roteiro recomenda tomar a isobatimétrica de 20 m como chamada de atenção em costas rochosas, sobretudo para navios de maior calado.
(II) Falsa — a definição consagrada (e citada no Roteiro) é a velocidade que permite ao navio PARAR (quebrar o seguimento) em tempo, e não "guinar com segurança"; em cerração não se pode contar com guinada após o avistamento.
(III) Verdadeira — pelo gabarito, os balizamentos particulares de utilização restrita não têm suas alterações divulgadas em Avisos aos Navegantes (NORMAM-17; conferir a redação da norma).
(IV) Verdadeira — salvo em portos levantados com detalhes, a isobatimétrica de 10 m é linha de precaução/perigo, pela possibilidade de irregularidades do fundo não conhecidas.`,
    explicacoes: {
      A: "Das três citadas, apenas a II) é falsa. I) (isobatimétrica de 20 m em costas rochosas) e IV) (isobatimétrica de 10 m como linha de perigo) são recomendações do Roteiro.",
      B: "III) e IV) são verdadeiras, mas a II) é falsa: a velocidade reduzida em cerração é a que permite PARAR o navio a tempo, não guinar.",
      C: "I), III) e IV) são verdadeiras segundo o Roteiro e a NORMAM-17; só a II) é falsa.",
      D: "É o contrário: I) e III) são ambas verdadeiras pelo gabarito.",
      E: "A II) é de fato falsa, mas a IV) é verdadeira: a linha de 10 m deve ser considerada de precaução ou perigo, exceto em portos levantados com detalhes.",
    },
  },
  {
    id: "dpc2008-61",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    enunciado: "The spiral maneuver, as described in the book “Principles of Naval Arquitecture” (PNA), serves mainly to determine:",
    alternativas: {
      A: "control characteristics.",
      B: "turning characteristics.",
      C: "stability characteristics.",
      D: "maneuver characteristics.",
      E: "spiral characteristics.",
    },
    correta: "C",
    explicacoes: {
      A: "As características de controle (resposta do navio ao leme, capacidade de iniciar e quebrar guinadas) são avaliadas principalmente pela manobra de ziguezague (Z-maneuver, Kempf), não pela espiral.",
      B: "As características de giro (avanço, transferência, diâmetro tático) são obtidas na manobra de giro (turning circle).",
      C: "A manobra espiral (Dieudonné) mede a velocidade de guinada estabilizada para uma sequência de ângulos de leme de um bordo ao outro. O gráfico resultante revela se o navio tem estabilidade direcional (curva única) ou não (laço de histerese, cuja largura e altura medem o grau de instabilidade). Serve, portanto, para determinar as características de ESTABILIDADE.",
      D: "“Maneuver characteristics” é expressão genérica; o PNA associa cada manobra padrão a um objetivo específico, e o da espiral é a estabilidade direcional.",
      E: "“Spiral characteristics” é apenas um jogo de palavras com o nome da manobra; não é uma categoria do PNA.",
    },
  },
  {
    id: "dpc2008-62",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "De acordo com a LESTA, com a RLESTA e com a NORMAM-12/DPC:",
    alternativas: {
      A: "o prático é um aquaviário do 5º grupo, profissional que presta serviços de praticagem embarcado. O serviço de praticagem é constituído do prático, estação de praticagem e lancha de prático.",
      B: "o prático é um aquaviário, marítimo do 5º grupo, profissional não-tripulante que presta serviços de praticagem embarcado. O serviço de praticagem é constituído do prático, lancha de prático e atalaia.",
      C: "o prático é um aquaviário devidamente certificado pela Autoridade Marítima, para uma ZP, imediatamente após a aprovação em processo seletivo conduzido pela Diretoria de Portos e Costas.",
      D: "o serviço de praticagem, considerado atividade essencial, deve estar disponível 24 horas por dia nas ZP delimitadas pela Diretoria-Geral de Navegação, dentro das quais se realizam os serviços de praticagem.",
      E: "o prático não pode se recusar à prestação do serviço de praticagem. No caso de recusa e sendo reincidente, poderá ter seu certificado de habilitação cancelado, ficando impedido definitivamente de exercer a profissão de prático.",
    },
    correta: "A",
    explicacoes: {
      A: "LESTA (art. 2º): prático é o aquaviário não tripulante que presta serviços de praticagem embarcado. RLESTA (art. 1º): os aquaviários dividem-se em grupos, sendo o 5º grupo o dos Práticos. E o serviço de praticagem é constituído pelo prático, pela lancha de prático e pela atalaia (estação de praticagem).",
      B: "O erro está em “marítimo”: na RLESTA os Marítimos são o 1º grupo de aquaviários; os Práticos formam o 5º grupo, distinto. O prático é aquaviário do 5º grupo, não “marítimo do 5º grupo”.",
      C: "A aprovação no processo seletivo habilita apenas como PRATICANTE de prático. A certificação como prático só vem depois do programa de qualificação na ZP e da aprovação no exame de habilitação — não é “imediata”.",
      D: "O serviço é mesmo essencial e permanentemente disponível, mas as Zonas de Praticagem são estabelecidas pela Autoridade Marítima por meio da Diretoria de Portos e Costas (NORMAM-12), não pela Diretoria-Geral de Navegação.",
      E: "A primeira frase está certa (LESTA, art. 15: o prático não pode recusar-se à prestação do serviço, sob pena de suspensão ou, na reincidência, cancelamento do certificado). Mas a lei não estabelece o “impedimento definitivo” de exercer a profissão — essa consequência foi acrescentada pela alternativa.",
    },
  },
  {
    id: "dpc2008-63",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: `Assinale a opção abaixo que completa corretamente as lacunas das seguintes sentenças:

A publicação Tábuas das Marés dispõe de tabelas que possibilitam a determinação da altura da maré em um dado instante. Essas tabelas permitem interpolações de uma curva de maré de caráter ________________. A maré que mais se aproxima dessa condição teórica é a ________________. Assim, recomenda-se que o uso dessas tabelas se limite aos portos de ________________ para o ________________, tendo em vista que, para o ________________, a maré se apresenta com ________________ ou mista, o que impossibilita bons resultados.`,
    alternativas: {
      A: "previsível – diurna – Vitória – norte – sul – desigualdades diurnas",
      B: "harmônico – semidiurna – Salvador – norte – sul –desigualdades semidiurnas",
      C: "sinusoidal – semidiurna – Vitória – norte – sul – desigualdades diurnas",
      D: "sinusoidal – semidiurna – Salvador – sul – norte – desigualdades semidiurnas",
      E: "harmônico – diurna – Vitória – sul – norte – desigualdades diurnas",
    },
    correta: "C",
    explicacoes: {
      A: "A curva admitida pelas tabelas é SINUSOIDAL (senoide), não apenas “previsível”, e a maré que mais se aproxima dela é a SEMIDIURNA, não a diurna. O restante (Vitória – norte – sul – desigualdades diurnas) está certo.",
      B: "“Harmônico” não é o termo das Tábuas (a interpolação supõe uma senoide), o porto-limite é Vitória, não Salvador, e a maré do sul do Brasil é de “desigualdades diurnas”, não “semidiurnas”.",
      C: "As tabelas das Tábuas das Marés interpolam supondo curva sinusoidal; a maré semidiurna é a que mais se aproxima dela. Por isso o uso se limita aos portos de Vitória para o norte; para o sul a maré é de desigualdades diurnas ou mista, o que impossibilita bons resultados.",
      D: "Acerta sinusoidal e semidiurna, mas inverte a geografia: as marés semidiurnas regulares ocorrem de Vitória para o NORTE; é para o SUL que aparecem as desigualdades diurnas e a maré mista. Salvador e “desigualdades semidiurnas” também estão errados.",
      E: "Erra o caráter da curva (sinusoidal), o tipo de maré (semidiurna) e inverte norte e sul.",
    },
  },
  {
    id: "dpc2008-64",
    prova: "DPC 2008",
    tema: "Rebocadores",
    enunciado: "De acordo com Henk Hensen, no livro “Tug Use in Port”, e Fragoso & Cajaty, no livro “Rebocadores Portuários”, os lemes colocados por ante avante do propulsor e carregados para vante para melhorar a manobrabilidade, quando com máquinas para ré, são conhecidos como:",
    alternativas: {
      A: "movable flap-rudders.",
      B: "flanking rudders.",
      C: "Schilling rudders.",
      D: "tow master system.",
      E: "astern rudders.",
    },
    correta: "B",
    explicacoes: {
      A: "Lemes com flap móvel (tipo Becker) ficam a RÉ do hélice; o flap articulado no bordo de fuga aumenta a sustentação com máquina adiante. Não são lemes por ante-a-vante do propulsor.",
      B: "Flanking rudders são os lemes instalados por ANTE-A-VANTE do hélice (em geral dois por hélice/tubulão), que recebem a descarga do propulsor quando este trabalha a ré, dando governo com máquinas atrás. Típicos de empurradores e de alguns rebocadores convencionais.",
      C: "O leme Schilling é um leme de alto rendimento, de perfil especial (em “rabo de peixe”) com placas nas extremidades, instalado a RÉ do hélice, podendo ser carregado a grandes ângulos.",
      D: "O sistema Towmaster é um conjunto de vários lemes de alta razão de aspecto instalados a RÉ de um tubulão fixo, não lemes a vante do hélice.",
      E: "“Astern rudders” não é denominação usada por Hensen nem por Fragoso & Cajaty; o termo consagrado é flanking rudders.",
    },
  },
  {
    id: "dpc2008-65",
    prova: "DPC 2008",
    tema: "Arte Naval",
    enunciado: `De acordo com o livro “Arte Naval”, de Maurílio M. Fonseca, correlacione a nomenclatura da coluna A às respectivas definições ou finalidades na coluna B e, a seguir, assinale a opção correta:

COLUNA A
I. golas
II. reclamos
III. sicordas
IV. carlingas
V. latas

COLUNA B
( ) peças horizontais que se colocam no bico da proa, ou na popa, contornando-as por dentro, de BE a BB; servem para dar maior resistência a essas partes do navio
( ) golas metálicas colocadas no convés ou numa coberta, onde se apóia o pé de um mastro
( ) vasos de madeira, em forma de tina ou de cilindro, com aberturas para permitir a ventilação e fixados no convés para acondicionar um cabo de manobra
( ) cantoneiras, barras, ferros em meia-cana ou peças fundidas que contornam uma abertura qualquer para reforço local
( ) vaus que não são contínuos de BB a BE, colocados na altura de uma enora, ou de uma escotilha, entre os vaus propriamente ditos
( ) peças de metal, em forma de cruz, fixadas ao convés, para dar volta aos cabos, como nos cunhos
( ) peças colocadas de proa a popa, num convés ou numa coberta, ligando os vaus entre si
( ) recessos feitos no costado de alguns navios, junto ao escovém, para alojar a cruz e os braços das âncoras tipo patente
( ) peças de ferro, ou outro metal, de forma curva, e abertas na parte de cima, fixadas nos mastros ou em partes altas, servindo de guia aos cabos do aparelho
( ) sua função principal é constituir um revestimento externo, impermeável à água, mas é, também, uma parte importante da estrutura, contribuindo para a resistência do casco aos esforços longitudinais`,
    alternativas: {
      A: "(I) (IV) (II) (III) (V)",
      B: "(II) (I) (V) (IV) (III)",
      C: "(IV) (II) (III) (V) (I)",
      D: "(I) (IV) (III) (V) (II)",
      E: "(IV) (I) (V) (III) (II)",
    },
    correta: "E",
    comentario: `A coluna B tem 10 descrições para apenas 5 termos: cinco descrições ficam sem par, e as alternativas trazem só os cinco algarismos, na ordem em que aparecem de cima para baixo. Análise das 10 descrições:
1ª Peças horizontais no bico da proa ou na popa, contornando-as por dentro → buçardas (sem par na coluna A).
2ª Golas metálicas no convés onde se apoia o pé de um mastro → carlingas (IV).
3ª Vasos de madeira para acondicionar cabo de manobra → selhas (sem par).
4ª Cantoneiras, barras ou peças fundidas que contornam uma abertura para reforço → golas (I).
5ª Vaus não contínuos de BB a BE, na altura de enora ou escotilha → latas (V).
6ª Peças de metal em forma de cruz, fixadas ao convés, para dar volta aos cabos → cruzetas/cunhos em cruz (sem par).
7ª Peças de proa a popa ligando os vaus entre si → sicordas (III).
8ª Recessos no costado junto ao escovém para alojar a âncora patente → raposas (sem par).
9ª Peças curvas, abertas em cima, fixadas nos mastros, servindo de guia aos cabos → reclamos (II).
10ª Revestimento externo impermeável que contribui para a resistência longitudinal → chapeamento do costado/forro exterior (sem par).
Sequência dos termos, de cima para baixo: (IV) (I) (V) (III) (II).`,
    explicacoes: {
      A: "Começa com golas (I), mas a primeira descrição que tem par na coluna A (pé do mastro) é a de carlingas (IV). Também troca reclamos e sicordas de lugar: reclamos (guia de cabos nos mastros) é o ÚLTIMO par, e latas (V) é o terceiro, não o último.",
      B: "Começa com reclamos (II), que na verdade é o último par (9ª descrição). A ordem correta dos pares é carlingas, golas, latas, sicordas, reclamos; aqui só latas (V) está na posição certa.",
      C: "Acerta carlingas (IV) no início, mas em seguida coloca reclamos (II) onde deveria estar golas (I) (reforço de aberturas) e põe golas no fim, onde deveria estar reclamos.",
      D: "Troca carlingas e golas nas duas primeiras posições (pé do mastro = carlinga; contorno de abertura = gola) e sicordas/latas nas duas seguintes (vau descontínuo = lata; peça longitudinal ligando vaus = sicorda). Só reclamos (II) está na posição certa.",
      E: "Sequência correta: carlingas (IV) – pé do mastro; golas (I) – reforço de aberturas; latas (V) – vaus descontínuos; sicordas (III) – peças de proa a popa ligando os vaus; reclamos (II) – guias curvos para os cabos do aparelho.",
    },
  },
  {
    id: "dpc2008-66",
    prova: "DPC 2008",
    tema: "Navegação",
    revisar: true,
    enunciado: `A publicação “Avisos aos Navegantes” é um folheto quinzenal, elaborado pelo Centro de Hidrografia da Marinha, por delegação da Diretoria de Hidrografia e Navegação, com o propósito principal de fornecer, aos navegantes e usuários em geral, informações destinadas à atualização das cartas e publicações náuticas brasileiras. Adicionalmente, são apresentados alguns dos Avisos-Rádio Náuticos em vigor, bem como outras informações gerais importantes aos navegantes.
Assinale a opção correta no que diz respeito aos “Avisos aos Navegantes”:`,
    alternativas: {
      A: "Avisos Permanentes Especiais destinam-se a prover correções à carta náutica de caráter permanente, importantes para os navegantes.",
      B: "um aviso numerado E 4027/08 indica tratar-se de um aviso-rádio náutico costeiro da costa Leste, do ano de 2008.",
      C: "os avisos-rádio costeiros abrangem a navegação praticada em águas litorâneas, até 3 milhas da costa, e são precedidos da expressão NAVAREA.",
      D: "quando surge a necessidade de prover informações urgentes de interesse à navegação segura, isto é feito mediante um Aviso Permanente Especial.",
      E: "os avisos-rádio náuticos são classificados em temporários, preliminares e permanentes.",
    },
    correta: "B",
    explicacoes: {
      A: "Quem corrige a carta em caráter permanente são os Avisos PERMANENTES. Os Avisos Permanentes Especiais (APE) trazem informações gerais de interesse da navegação (normas, áreas de exercício, serviços etc.), publicadas no início do ano, e não correções cartográficas.",
      B: "Na numeração dos avisos-rádio náuticos costeiros, a letra indica o trecho da costa (N – Norte, E – Leste, S – Sul), seguida do número de ordem e do ano: E 4027/08 é um aviso-rádio costeiro da costa Leste, de 2008.",
      C: "NAVAREA é a expressão que precede os avisos de LONGA distância (área oceânica — NAVAREA V), não os costeiros. E os costeiros não se limitam a 3 milhas da costa; os avisos de águas abrigadas/portuárias são os avisos-rádio locais.",
      D: "Informação urgente para a segurança da navegação é divulgada por AVISO-RÁDIO NÁUTICO (é para isso que ele existe); o APE é informação geral, sem urgência.",
      E: "Temporários (T), preliminares (P) e permanentes é a classificação dos AVISOS AOS NAVEGANTES do folheto. Os avisos-rádio náuticos classificam-se, pela área, em NAVAREA, costeiros e locais.",
    },
  },
  {
    id: "dpc2008-67",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "According to Swift & Bailey, in the book “Bridge Team Management”, visual observation of characteristics of lights and timing of them, observation of the environment using all available means, constant and continuous all round visual look out enabling a full understanding of the situation and the proximity of dangers, other ships and navigation marks, among others, are procedures to maintain and enhance the OOW’s:",
    alternativas: {
      A: "situational awareness.",
      B: "compliance with the passage plan.",
      C: "judgement as to whether he adjusts the speed or not.",
      D: "involvement in the execution of the planned passage.",
      E: "confidence to cope with anything that watchkeeping presents to him.",
    },
    correta: "A",
    explicacoes: {
      A: "Swift & Bailey listam esses procedimentos (vigilância visual constante em todo o horizonte, identificação e cronometragem de luzes, observação do ambiente por todos os meios) como formas de manter e aumentar a CONSCIÊNCIA SITUACIONAL do oficial de quarto: a compreensão plena de onde o navio está e do que o cerca.",
      B: "O cumprimento do plano de viagem é verificado pelo monitoramento da posição em relação à derrota (fixing, parallel indexing); os procedimentos listados são mais amplos — percepção do entorno, não conferência do plano.",
      C: "A decisão de ajustar a velocidade pode decorrer de uma boa consciência situacional, mas não é o que os procedimentos citados visam diretamente manter.",
      D: "O envolvimento na execução do plano é obtido com briefing e participação da equipe, não pela vigilância visual e observação do ambiente.",
      E: "A confiança do oficial é resultado de treinamento e experiência; o livro não apresenta esses procedimentos como meio de reforçar confiança.",
    },
  },
  {
    id: "dpc2008-68",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "Observando as condições meteorológicas reinantes na área, o navegante constata a ocorrência de vento fraco, quente e seco. A temperatura da água do mar está fria, inferior à da temperatura do ar. O tempo está calmo e sem turbulências. Em função dessas condições, o navegante deve esperar ter o alcance do radar de seu navio alterado, em virtude da:",
    alternativas: {
      A: "difração.",
      B: "atenuação.",
      C: "reflexão na superfície do mar.",
      D: "sub-refração.",
      E: "super-refração.",
    },
    correta: "E",
    explicacoes: {
      A: "A difração é o encurvamento das ondas ao contornar obstáculos; depende da frequência e do obstáculo, não das condições de temperatura e umidade descritas.",
      B: "A atenuação é a absorção/espalhamento da energia por chuva, neve, nevoeiro etc. O enunciado descreve tempo calmo e ar seco — sem hidrometeoros.",
      C: "A reflexão na superfície do mar afeta o diagrama vertical de irradiação (lóbulos), mas não é o fenômeno ligado à estratificação térmica descrita.",
      D: "A sub-refração ocorre na situação oposta: ar FRIO sobre água mais quente, que encurva o feixe para cima e REDUZ o alcance.",
      E: "Ar quente e seco sobre água fria, com tempo calmo (sem turbulência que misture as camadas), cria inversão de temperatura e forte queda da umidade com a altura: o feixe radar é encurvado para baixo além do normal — super-refração —, AUMENTANDO o alcance (podendo chegar à formação de dutos).",
    },
  },
  {
    id: "dpc2008-69",
    prova: "DPC 2008",
    tema: "Meteorologia e Oceanografia",
    enunciado: `Um navegante, no mar costeiro do oceano Atlântico Sul, preparando-se para demandar um canal de acesso ao porto, tem interesse em identificar a possibilidade de ocorrência de névoa úmida de advecção, na área em que está navegando. Interprete as observações de parâmetros meteorológicos, apresentadas abaixo, selecionadas para evidenciar a possibilidade de ocorrência de visibilidade no mar moderada/restrita, devido à névoa úmida de advecção:

I) vento força 8, temperatura da superfície do mar (TSM) = 22º C, temperatura do ar T = 23º C e umidade relativa UR = 95%.
II) T = 28º C, temperatura do ponto de orvalho TPO = 21º C, TSM = 16º C e vento força 3.
III) UR = 96%, T = 29º C, vento força 5 e TSM = 30º C.
IV) TSM = 18º C, TPO = 24º C, vento força Ø e UR = 95%.
V) TPO = 23º C, TSM = 19º C, vento força 2 e T = 29º C.

De acordo com Lobo & Soares, no livro “Meteorologia e Oceanografia – Usuário Navegante”, assinale a opção abaixo que contém todas as afirmativas verdadeiras:`,
    alternativas: {
      A: "II) e V)",
      B: "III) e IV)",
      C: "II) e III)",
      D: "I), III) e V)",
      E: "I), II) e IV)",
    },
    correta: "A",
    comentario: `Condições para névoa/nevoeiro de advecção: ar quente e úmido deslocando-se sobre água mais fria, com TSM INFERIOR à temperatura do ponto de orvalho do ar (o ar é resfriado por baixo até saturar) e vento fraco a moderado (aproximadamente força 2 a 4) — tem de haver vento para haver advecção, mas vento forte mistura a camada e dissipa a névoa.
I) Falsa — vento força 8 é forte demais: a turbulência impede a formação (e a TSM está praticamente igual à do ar).
II) Verdadeira — TSM (16 °C) bem abaixo do TPO (21 °C) e vento força 3.
III) Falsa — a TSM (30 °C) é MAIOR que a temperatura do ar (29 °C): o mar aquece o ar em vez de resfriá-lo; além disso o vento é força 5.
IV) Falsa — a TSM (18 °C) está abaixo do TPO (24 °C), mas o vento é força zero: sem vento não há advecção.
V) Verdadeira — TSM (19 °C) abaixo do TPO (23 °C) e vento força 2.`,
    explicacoes: {
      A: "II) e V) são os dois únicos casos com TSM inferior ao ponto de orvalho E vento fraco a moderado (forças 3 e 2) — as condições da névoa úmida de advecção.",
      B: "III) é falsa (mar mais quente que o ar — não há resfriamento) e IV) é falsa (vento força zero — sem advecção). Deixa de fora II) e V).",
      C: "II) é verdadeira, mas III) é falsa: TSM de 30 °C acima da temperatura do ar (29 °C), com vento força 5. Falta a V).",
      D: "Só a V) é verdadeira. I) tem vento força 8 (forte demais) e III) tem o mar mais quente que o ar. Falta a II).",
      E: "Só a II) é verdadeira. I) tem vento força 8 e IV) tem vento força zero (calmaria não produz advecção). Falta a V).",
    },
  },
  {
    id: "dpc2008-70",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Um prático encontra-se na manobra de um navio que vai entrar em um porto para se amarrar a duas bóias, denominadas A e B. Devido às condições locais, o navio não poderá efetuar um giro completo até pegar a primeira bóia. As bóias estão na mesma direção da entrada do porto. A bóia B está localizada mais próxima do interior do porto, enquanto que a bóia A encontra-se mais perto da entrada da barra. O vento no local é desprezível, mas a corrente de maré, dependendo de sua velocidade e direção, influenciará decisivamente na manobra.
Considerando os dados da situação descrita, coloque falso (F) ou verdadeiro (V) nas afirmativas abaixo, que se referem à primeira manobra que deve ser realizada pelo prático, assinalando, a seguir, a opção correta, de acordo com as informações apresentadas por R. S. Crenshaw Jr. no livro “Naval Shiphandling”:

( ) com a maré vazando, amarrar a popa na bóia B.
( ) com a maré enchendo, amarrar a popa na bóia A.
( ) com a maré enchendo, amarrar a proa na bóia B.
( ) com a maré no estofo, amarrar a proa na bóia B.
( ) com a maré no estofo, amarrar a proa na bóia A.`,
    alternativas: {
      A: "(F) (F) (V) (V) (F)",
      B: "(F) (V) (F) (V) (F)",
      C: "(V) (F) (V) (F) (V)",
      D: "(F) (F) (V) (F) (V)",
      E: "(V) (F) (F) (V) (F)",
    },
    correta: "B",
    comentario: `Princípio (Crenshaw): na amarração a duas boias, amarra-se primeiro à boia de MONTANTE da corrente, para que a corrente leve o navio em direção à segunda boia, mantendo-o alinhado. O navio entra no porto (proa para dentro) e não pode girar.
1º Falso — vazando, a corrente vem de dentro do porto, pela proa: a boia de montante é a B, e a primeira manobra é amarrar a PROA (não a popa) na boia B, deixando o navio cair a ré até a boia A.
2º Verdadeiro — enchendo, a corrente vem da barra, pela popa: a boia de montante é a A; como o navio não pode girar, amarra-se primeiro a POPA na boia A e deixa-se o navio ser levado a vante até a boia B.
3º Falso — enchendo, amarrar primeiro a proa na B (boia de jusante) deixaria a popa livre para ser atravessada pela corrente.
4º Verdadeiro — no estofo não há corrente a considerar: segue-se direto à boia mais distante (B) e amarra-se a proa, a manobra mais simples e natural, recuando depois para a boia A.
5º Falso — amarrar a proa na boia A deixaria o navio fora do alinhamento final (a proa deve ficar na B, a boia interna).
(Justificativa reconstruída a partir do gabarito; conferir no livro.)`,
  },
  {
    id: "dpc2008-71",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: "According to the book “Principles of Naval Arquitecture” (PNA), the cavitations forms on marine propellers are mainly:",
    alternativas: {
      A: "Traveling and Fixed types.",
      B: "Fixed and Vortex types.",
      C: "Vortex and Vibratory types.",
      D: "Fixed and Vibratory types.",
      E: "Vortex and Traveling types.",
    },
    correta: "B",
    explicacoes: {
      A: "O PNA cita quatro tipos gerais de cavitação (traveling, fixed, vortex e vibratory), mas afirma que em hélices marítimos ela é principalmente dos tipos fixed e vortex. A cavitação “traveling” (bolhas que viajam com o fluido) não é a forma principal.",
      B: "Segundo o PNA, a cavitação em hélices marítimos é principalmente do tipo FIXA (cavidades presas à pá: lâmina/sheet, nuvem) e de VÓRTICE (de ponta de pá e de cubo).",
      C: "A cavitação de vórtice está certa, mas a vibratória ocorre em líquidos submetidos a vibrações de alta frequência (sem escoamento significativo), não sendo típica de hélices.",
      D: "A fixa está certa, mas a vibratória não é forma característica de hélices marítimos.",
      E: "A de vórtice está certa, mas a “traveling” não é apontada pelo PNA como forma principal em hélices — falta a cavitação fixa.",
    },
  },
  {
    id: "dpc2008-72",
    prova: "DPC 2008",
    tema: "Arte Naval",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Coloque V (verdadeiro) ou F (falso) nas afirmativas abaixo, que tratam de regras práticas na utilização de aparelhos de laborar, assinalando, a seguir, a opção correta:

( ) aplicar, sempre que possível, o cadernal onde gurne o tirador no peso que se deseja alar.
( ) para diminuir o esforço sobre o cadernal fixo, fazer, se possível, a arreigada fixa fora do mesmo cadernal.
( ) içando um peso, o tirador suporta a tensão mínima e a arreigada fixa a tensão máxima; arriando, será o contrário.
( ) o melhor modo de engatar uma talha em um cabo que não tenha alça é pela volta de encapeladura singela.
( ) o que se ganha em força, perde-se em tempo, pois tem-se um comprimento maior que alar no tirador.`,
    alternativas: {
      A: "(V) (F) (V) (V) (V)",
      B: "(F) (F) (V) (F) (V)",
      C: "(F) (V) (F) (V) (F)",
      D: "(V) (V) (F) (F) (V)",
      E: "(V) (F) (V) (F) (F)",
    },
    correta: "D",
    comentario: `Item a item (Arte Naval, regras práticas para aparelhos de laborar):
1º Verdadeiro — quando o cadernal de onde sai o tirador é o móvel (preso ao peso), conta-se uma perna a mais sustentando a carga: maior multiplicação de força.
2º Verdadeiro — fazendo a arreigada fixa fora do cadernal fixo (num olhal próprio), alivia-se o esforço sobre esse cadernal.
3º Falso — é o contrário: içando, por causa do atrito nas roldanas, o tirador suporta a tensão MÁXIMA e a arreigada fixa a mínima; arriando, inverte-se.
4º Falso — pelo gabarito. O Arte Naval indica outra volta para engatar talha em cabo sem alça (boca-de-lobo/volta de tomadouro), não a encapeladura singela (conferir no livro).
5º Verdadeiro — é o princípio dos aparelhos de laborar: o ganho de força é pago com maior comprimento de tirador a alar, isto é, com tempo.`,
  },
  {
    id: "dpc2008-73",
    prova: "DPC 2008",
    tema: "Rebocadores",
    enunciado: "De acordo com Fragoso & Cajaty, no livro “Rebocadores Portuários”, o que é arrasto transverso?",
    alternativas: {
      A: "é quando um rebocador azimutal, com cabo passado na popa de um navio com seguimento avante, direciona um propulsor para cada bordo.",
      B: "é quando um rebocador, com cabo de reboque pela popa de um navio, se posiciona transversalmente ao movimento do navio.",
      C: "é quando os rebocadores empurram o costado do navio, arrastando-o transversalmente ao seu comprimento.",
      D: "é quando o rebocador, atuando no método “puxa-empurra”, é arrastado transversalmente pelo segmento do navio.",
      E: "é quando os rebocadores de proa e de popa atuam transversalmente (um para cada bordo) ao segmento do navio, fazendo-o girar.",
    },
    correta: "A",
    explicacoes: {
      A: "Arrasto transverso (transverse arrest): o rebocador azimutal (ASD), com cabo na popa do navio com seguimento avante, gira cada propulsor para um bordo (para fora, a 90°). As duas descargas transversais criam grande resistência ao avanço, freando o navio com força que pode superar o bollard pull, mantendo o rebocador alinhado e estável. É usado em velocidades mais altas, quando o arrasto direto (propulsores invertidos) é pouco eficiente.",
      B: "Rebocador que se atravessa ao movimento do navio, usando a força hidrodinâmica do próprio casco, descreve o método INDIRETO — no arrasto transverso quem fica transversal são os propulsores, não o rebocador.",
      C: "Empurrar o costado para deslocar o navio lateralmente é simplesmente a atuação no método de empurrar (push), sem relação com manobra de frenagem.",
      D: "Rebocador ao costado (puxa-empurra) sendo arrastado pelo seguimento do navio é uma limitação desse método, não o arrasto transverso.",
      E: "Rebocadores de proa e popa puxando/empurrando para bordos opostos formam um binário para GIRAR o navio; o arrasto transverso é manobra de frenagem feita por um rebocador azimutal na popa.",
    },
  },
);

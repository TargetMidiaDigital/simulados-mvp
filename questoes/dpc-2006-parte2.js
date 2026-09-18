// Prova escrita DPC 2006 — questões 25 a 48.
QUESTOES.push(
  {
    id: "dpc2006-25",
    prova: "DPC 2006",
    tema: "GMDSS e Comunicações",
    enunciado: "What is the responsibility of vessels under GMDSS?",
    alternativas: {
      A: "Vessels over 300 gross tons may be required to render assistance if such assistance does not adversely affect their port schedule.",
      B: "Only that vessel, regardless of size, closest to a vessel in distress, is required to render assistance.",
      C: "Every ship is able to perform those communications functions that are essential for the safety of the ship itself and of other ships.",
      D: "Vessels operating under GMDSS, outside of areas effectively serviced by shoreside authorities, operating in sea areas A2 and A4 may be required to render assistance in distress situations.",
      E: "An integrated tug barge operating outside of the range of VHF coastal radio stations are not required to render assistance in distress situations.",
    },
    correta: "C",
    explicacoes: {
      A: "O dever de prestar socorro não é condicionado à programação comercial do navio.",
      B: "A obrigação não recai apenas sobre o navio mais próximo: todos os que recebem o alerta têm deveres, coordenados pelo RCC.",
      C: "É o conceito básico do GMDSS: todo navio, onde quer que esteja, deve ser capaz de executar as funções de comunicação essenciais à sua própria segurança e à de outros navios.",
      D: "A redação restringe a obrigação a áreas marítimas específicas (A2 e A4), o que não existe: o princípio vale para todas as áreas.",
      E: "Não há isenção do dever de assistência para conjuntos empurrador-barcaça fora do alcance de VHF.",
    },
  },
  {
    id: "dpc2006-26",
    prova: "DPC 2006",
    tema: "Manobra do Navio",
    enunciado: "Nowadays mariners are getting used to count on modern aids for docking and undocking maneuvers, like bow thrusters, stern thrusters, controllable pitch propellers and so on. Nevertheless, there are still lots of ships not fitted with these devices. Furthermore, sometimes not even a single tug is available. When facing such a situation, an accomplished shiphandler will use the ship’s characteristics combined with the forces of nature, say wind and current, as an aid rather than a hindrance. Considering a single screw right hand turning propeller ship on a berthing maneuver, which of the following assertives contains INCORRECT information, according to Daniel H. MacElrevey?",
    alternativas: {
      A: "When berthing port side to, the ship is set up to allow a swing of the stern to port. Since the ship’s angle of approach decreases each time the engine goes astern, the initial angle of approach is smaller for a port side to docking.",
      B: "When going starboard side to the berth, put the rudder to port and kick the engine ahead until the stern develops a slight swing to starboard. After this slight swing of the stern to starboard has begun, go astern to slow or stop the ship. Repeat the maneuver as required so the ship is stopped in position and parallel to the pier.",
      C: "Knowing that the ship swings when setting up to back and berthing port side.",
      D: "When the wind is quite strong onto the berth, put the ship alongside earlier in docking. Don’t fight a strong wind: let the ship go alongside and slide up the stringpiece into position.",
      E: "The rudder can often remain hard left during the final stages of a docking maneuver whether docking port or starboard side to, once this is the position in which it will most likely be needed.",
    },
    correta: "A",
    explicacoes: {
      A: "É a alternativa com o erro. Com hélice de passo direito, máquina atrás leva a popa para bombordo. Na atracação por bombordo isso fecha o ângulo com o cais a cada vez que se dá atrás — justamente por isso o ângulo INICIAL de aproximação deve ser MAIOR, não menor.",
      B: "Afirmação correta segundo o autor: por boreste a popa tende a abrir do cais ao dar atrás, então cria-se antes uma guinada da popa para boreste com leme a bombordo e palhetada adiante. Não é a resposta.",
      C: "Afirmação correta (ainda que truncada): o navio guina ao dar atrás e isso é aproveitado na atracação por bombordo. Não é a resposta.",
      D: "Afirmação correta segundo o autor: com vento forte para o cais, não se luta contra ele — encosta-se mais cedo e corre-se ao longo do cais até a posição. Não é a resposta.",
      E: "Afirmação correta segundo o autor: leme todo a bombordo costuma ser a posição mais provável de uso no final da manobra, nos dois bordos. Não é a resposta.",
    },
  },
  {
    id: "dpc2006-27",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `O Prático Joaquim estava preocupado. Na barra, onde iria embarcar para pegar um navio tipo “capesize”, na condição de meia carga, já existia um estado de mar definido em função do vento local. Ele sabia que o abatimento do navio seria dado pela força devida às ondas do mar e pela força do vento. Ele consultou um professor que, fundamentado em autores como Van Berlekom, citado em “Princípios de Arquitetura Naval”, afirmou:

I) A ordem de magnitude da força do vento sobre a estrutura do navio é da mesma ordem da força de resistência devido às ondas.
II) O efeito de deriva devido ao vento é de menor importância do que o efeito de deriva devido às ondas do mar.
III) O momento em “yaw”, devido à força do vento, é dependente da localização da superestrutura principal do navio.
IV) Estando o navio na condição meia carga, o vento verdadeiro tem um gradiente de velocidade que, próximo ao mar, faz com que sua velocidade seja reduzida na superfície livre e a ação da força do vento possa vir a ser desprezada.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas a afirmativa III) é verdadeira.",
      E: "Apenas a afirmativa IV) é verdadeira.",
    },
    correta: "A",
    comentario: `I) Verdadeira — Van Berlekom concluiu que a força do vento é da mesma ordem de grandeza da resistência adicional devida às ondas.
II) Verdadeira — no estudo citado, o efeito de deriva das ondas é mais importante que o do vento.
III) Verdadeira — o momento de guinada depende de onde está o centro da área vélica, isto é, da posição da superestrutura.
IV) Falsa — o gradiente de velocidade do vento existe, mas um capesize a meia carga tem grande área vélica exposta; a força do vento não pode ser desprezada.`,
  },
  {
    id: "dpc2006-28",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    enunciado: "O Prático Benedito observou, a bordo do navio petroleiro MAYSA, que o vento relativo estava entrando pela amura de boreste (30° em relação à proa) e que sua intensidade tinha aumentado de 10 para 25 nós. Ele recomendou ao Comandante que colocasse o navio afilado ao vento. Com essa atitude, e mantendo a rotação da máquina do navio, pode-se dizer, fundamentando-se em “Princípios de Arquitetura Naval”, que:",
    alternativas: {
      A: "A resistência ao avanço do navio aumenta e é dependente da velocidade relativa do vento ao quadrado.",
      B: "A resistência ao avanço do navio diminui e é dependente da velocidade relativa do vento ao quadrado.",
      C: "A resistência ao avanço do navio aumenta e é dependente do número de Reynolds.",
      D: "A resistência ao avanço do navio diminui e é dependente do número de Reynolds.",
      E: "A resistência ao avanço do navio não se altera e é dependente da velocidade relativa do navio.",
    },
    correta: "B",
    explicacoes: {
      A: "A dependência com V² está certa, mas a resistência não aumenta: o máximo da resistência do vento ocorre com o vento a cerca de 30° da proa, não com o vento pela proa.",
      B: "A resistência do ar é proporcional à área exposta e ao quadrado da velocidade relativa do vento. Ela é máxima com o vento em torno de 30° da proa (maior área projetada); ao afilar o navio ao vento, a resistência diminui.",
      C: "A resistência não aumenta ao aproar o vento, e para corpos rombudos como superestruturas o coeficiente de arrasto praticamente independe do número de Reynolds.",
      D: "A resistência de fato diminui, mas a dependência relevante é com o quadrado da velocidade relativa do vento, não com o número de Reynolds.",
      E: "A resistência se altera com o ângulo de incidência do vento, e depende da velocidade relativa do VENTO.",
    },
  },
  {
    id: "dpc2006-29",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `O Comandante Raimundo, de um navio petroleiro tipo “panamax”, com velocidade média acima de 8 nós, em águas parelhas e com coeficiente prismático de 0,86, perguntou ao Prático Antonio: “Posso lastrar os tanques de ré para derrabar meu navio, considerando que ele anda melhor derrabado?” Antonio fez as seguintes considerações:

I) Geralmente, em navios mercantes, um trim adicional pela proa resulta, quando em baixas velocidades, em um aumento de resistência ao avanço, ocorrendo o oposto em velocidades normais ou de cruzeiro.
II) Em baixas velocidades, o aumento de calado à ré faz a proa “parecer maior”, diminuindo a resistência viscosa em função da separação da camada limite. Em velocidades altas, ou de cruzeiro, esta resistência é compensada pelo aumento da resistência de ondas irradiadas pelo navio.
III) Geralmente, navios com coeficiente prismático menor que 0,7, e que alcançam velocidades cujo número de Froude seja menor que 0,30, adquirem trim pela popa em baixas velocidades. Esse trim é invertido após o navio adquirir uma velocidade de cruzeiro ou normal.
IV) A redução de resistência, devido à mudança de trim, que é praticada nos navios de grande deslocamento, é muito pequena e, com isso, a economia de combustível será desprezível para o trecho a ser navegado.

Assinale a opção correta, de acordo com “Princípios de Arquitetura Naval”:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e II) são verdadeiras.",
      C: "Apenas as afirmativas III) e IV) são verdadeiras.",
      D: "Apenas a afirmativa II) é verdadeira.",
      E: "Apenas a afirmativa IV) é verdadeira.",
    },
    correta: "C",
    comentario: `O PNA afirma que um trim adicional pela POPA aumenta a resistência em baixas velocidades e a reduz em altas: em baixa velocidade o maior calado a ré torna a POPA virtualmente mais cheia (mais resistência de forma e separação); em alta velocidade isso é compensado pela menor formação de ondas da entrada mais fina.
I) Falsa — atribui o efeito ao trim pela proa; o texto trata do trim pela popa.
II) Falsa — é a popa (não a proa) que "parece maior", e o efeito é de AUMENTO da resistência viscosa; em alta velocidade o ganho vem da REDUÇÃO da resistência de ondas.
III) Verdadeira (gabarito oficial).
IV) Verdadeira — em navios de grande deslocamento o ganho obtido com mudança de trim é muito pequeno.`,
  },
  {
    id: "dpc2006-30",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "sequencia",
    enunciado: `O Prático João, a bordo de um navio tipo “panamax”, em baixa velocidade e em águas profundas, solicitou “meia força adiante”. Passados 30 minutos, verificou que ocorreu um aumento de rotação do propulsor, no entanto a velocidade do navio praticamente não variou. Da asa do passadiço, verificou que o perfil de ondas irradiadas pelo navio tinha variado em amplitude e as ondas sofriam efeitos de interferência entre elas. João entendeu que, naquela condição de velocidade, a resistência ao avanço era muito afetada pelas ondas irradiadas.
O sistema de ondas observado por João possui as seguintes características:
Sistema iniciando com __________ na proa, __________ na popa, _________ nas proximidades do porão n° 1, __________ nas proximidades da superestrutura à ré.
Assinale a opção que completa corretamente as lacunas, de acordo com “Princípios de Arquitetura Naval”:`,
    alternativas: {
      A: "Crista, crista, cavado, cavado.",
      B: "Cavado, cavado, crista, crista.",
      C: "Crista, cavado, cavado, crista.",
      D: "Crista, crista, cavado, crista.",
      E: "Cavado, crista, crista, cavado.",
    },
    correta: "A",
    comentario: `O PNA (estudos de Wigley) descreve quatro sistemas de ondas ao longo do casco:
1º Proa → começa com CRISTA (região de alta pressão).
2º Popa → também começa com CRISTA (a pressão volta a subir onde o escoamento se fecha).
3º Ombro de vante (altura do porão 1) → começa com CAVADO (o escoamento acelera e a pressão cai).
4º Ombro de ré (junto à superestrutura) → começa com CAVADO, pelo mesmo motivo.
A interferência entre esses sistemas produz as lombadas ("humps") e depressões na curva de resistência.`,
  },
  {
    id: "dpc2006-31",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `Pilot Richard is studying momentum theory of propeller action. Richard pointed out the following notes about propeller’s momentum theory:

I) The momentum theory is used to describe the action of an “ideal” propeller. The propeller itself is assumed to be a “disc”.
II) The propeller causes uniform increase in pressure as the fluid passes through the disc coupled with uniform increase in fluid velocity.
III) The exact nature of the propeller (pitch, number of blades, shaft rpm, etc.) is not important.
IV) There is an unlimited inflow of water to the propeller and the flow is not frictionless.

From theory of “Principles of Naval Architecture”, mark the correct alternative:`,
    alternativas: {
      A: "I, II, III, solely are true.",
      B: "I and III, solely are true.",
      C: "II and IV, solely are true.",
      D: "IV, solely is true.",
      E: "III, solely is true.",
    },
    correta: "B",
    comentario: `I) Verdadeira — a teoria da quantidade de movimento trata um hélice "ideal", substituído por um disco atuador.
II) Falsa — no disco há um salto brusco de PRESSÃO, mas a velocidade não salta ali: ela aumenta de forma gradual e contínua, de montante para jusante do disco.
III) Verdadeira — a teoria ignora a geometria do hélice (passo, número de pás, rpm); só interessa o empuxo que o disco transmite ao fluido.
IV) Falsa — a afluência ilimitada de água é hipótese da teoria, mas o escoamento é suposto SEM atrito (fluido ideal).`,
  },
  {
    id: "dpc2006-32",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    enunciado: "Qual das manobras padrão abaixo relacionadas indica a habilidade que o leme tem para governar o navio, de acordo com “Princípios de Arquitetura Naval”?",
    alternativas: {
      A: "Giro.",
      B: "Kempf “overshoot”.",
      C: "Bech.",
      D: "Dieudonné.",
      E: "“Rudder cycling”.",
    },
    correta: "B",
    explicacoes: {
      A: "A curva de giro mede a capacidade de giro (avanço, transferência, diâmetro tático), não a capacidade do leme de iniciar e conter guinadas.",
      B: "A manobra de zigue-zague de Kempf (overshoot) mede a rapidez de resposta ao leme e os ângulos de ultrapassagem: é o indicador da habilidade do leme em controlar o navio.",
      C: "A espiral reversa de Bech avalia a estabilidade direcional do navio.",
      D: "A espiral direta de Dieudonné também avalia a estabilidade direcional (laço de histerese), não a efetividade do leme.",
      E: "“Rudder cycling” é uma técnica de parada/redução de velocidade, não um teste da capacidade de governo do leme.",
    },
  },
  {
    id: "dpc2006-33",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `Pilot Lúcia, working in a ship in shallow water, realized that she takes more horsepower to meet her required speed when compared with deep water condition. Lúcia listed the following notes:

I) The flow of water around the bottom of the hull is restricted in shallow water, therefore the water flowing under the hull speeds up.
II) The faster moving water decreases the pressure under the hull, causing the ship to “squat”, increasing wetted surface area and increasing frictional resistance.
III) The waves produced in shallow water tend to be longer than do waves produced in deep water at the same speed.
IV) The energy required to produce ship’s waves in shallow water is the same to deep water at the same speed.

Following “Principles of Naval Architecture”, what is the correct alternative?`,
    alternativas: {
      A: "I, II e III solely are true.",
      B: "I e III solely are true.",
      C: "II e IV solely are true.",
      D: "IV solely is true.",
      E: "I solely is true.",
    },
    correta: "A",
    comentario: `I) Verdadeira — com pouca água sob a quilha, o escoamento é restringido e acelera.
II) Verdadeira — água mais rápida = pressão menor (Bernoulli): o navio afunda (squat), aumenta a superfície molhada e a resistência friccional.
III) Verdadeira — em águas rasas, para a mesma velocidade, as ondas geradas são mais longas.
IV) Falsa — as ondas em águas rasas exigem MAIS energia para a mesma velocidade; é uma das razões do aumento de potência observado.`,
  },
  {
    id: "dpc2006-34",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    enunciado: "O Prático Sebastião está na asa do passadiço do navio tipo “capesize” DOCEBAY, navegando a 8 nós, em águas profundas, com máquinas em meia força adiante. Sebastião observa as ondas irradiadas pelo navio e solicita máquina toda força adiante. Assim que o navio começa a aumentar a velocidade, pode-se dizer que as ondas geradas na proa:",
    alternativas: {
      A: "Aumentam em comprimento e altura.",
      B: "Diminuem em comprimento e aumentam em altura.",
      C: "Diminuem em comprimento e altura.",
      D: "Aumentam em comprimento e diminuem em altura.",
      E: "Mantêm o comprimento e aumentam a altura.",
    },
    correta: "A",
    explicacoes: {
      A: "As ondas transversais viajam com a velocidade do navio, e em águas profundas o comprimento de onda é proporcional a V² (λ = 2πV²/g). Com mais velocidade o navio também transfere mais energia às ondas, que crescem em altura.",
      B: "O comprimento não diminui: cresce com o quadrado da velocidade.",
      C: "Ocorre o oposto nas duas grandezas: comprimento e altura aumentam.",
      D: "O comprimento aumenta, mas a altura também aumenta, pois a energia cedida às ondas cresce com a velocidade.",
      E: "O comprimento não se mantém: está amarrado à velocidade do navio (λ ∝ V²).",
    },
  },
  {
    id: "dpc2006-35",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: "Entre 1971 e 1973, o professor Haruzo Eda, trabalhando para o Interoceanic Canal Study Project, realizou uma série de estudos experimentais e analíticos para prever o grau de leme necessário para manter um navio tipo em linha reta em um canal de navegação, variando-se a largura e a profundidade do canal em função das dimensões do navio. O padrão de segurança então adotado serviu de guia para estudos posteriores do USACE, da Guarda Costeira Americana e da PIANC. Qual foi o valor limite aceitável de ângulo de leme empregado pelo Professor Haruzo Eda, para fins de segurança e viabilidade de controle, para se manter um navio em linha reta quando se aproximando de uma margem em um canal de acesso, de acordo com “Princípios de Arquitetura Naval”?",
    alternativas: {
      A: "10°",
      B: "15°",
      C: "20°",
      D: "25°",
      E: "30°",
    },
    correta: "B",
    explicacoes: {
      A: "10° é inferior ao limite adotado por Eda (15°).",
      B: "Nos estudos de Eda, o critério de aceitabilidade foi o ângulo de leme de equilíbrio necessário para manter o navio em linha reta fora do eixo do canal não exceder 15°, preservando reserva de leme para manobrar.",
      C: "20° excede o limite adotado (15°): sobraria pouca reserva de leme para corrigir guinadas.",
      D: "25° excede em muito o limite adotado (15°).",
      E: "30° está próximo do leme todo carregado; não deixaria reserva de controle.",
    },
  },
  {
    id: "dpc2006-36",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    enunciado: "If a body is submerged in an ideal (inviscid) fluid, as the fluid flows around it there is a pressure distribution normal to the body. In the forward section of the hull there is a component of pressure resisting motion, and in the aft section there is a component of pressure assisting motion. In an ideal fluid these pressure forces are equal and the body experiences no resistance. However, water is not an ideal fluid. In the aft portion of the hull the boundary layer reduces the forward component of pressure. This reduction in the forward acting component results in a net resistance force that is called:",
    alternativas: {
      A: "Frictional resistance.",
      B: "Wave making resistance.",
      C: "Wake resistance.",
      D: "Wave-breaking resistance.",
      E: "Viscous pressure drag.",
    },
    correta: "E",
    explicacoes: {
      A: "A resistência friccional vem das tensões TANGENCIAIS (cisalhamento) na superfície do casco; o texto descreve um desequilíbrio de pressões NORMAIS.",
      B: "A resistência de formação de ondas é a energia gasta para gerar ondas na superfície livre; o enunciado trata de um corpo submerso e do efeito da camada limite.",
      C: "“Wake resistance” não é o nome dado a esse componente; a esteira é consequência, não a denominação da força descrita.",
      D: "A resistência de quebra de ondas ocorre na proa de navios cheios, ligada à arrebentação da onda de proa.",
      E: "A camada limite impede a recuperação total da pressão na popa; a diferença entre as pressões de vante e de ré gera o arrasto de pressão viscosa (resistência de forma).",
    },
  },
  {
    id: "dpc2006-37",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `O Praticante de Prático Pedro, na asa do passadiço de um navio em movimento, observa que o mesmo irradia ondas. Essas ondas possuem energia, gerada pelo navio. A força de resistência devido às ondas geradas pelo navio depende, principalmente, da:

I) Aceleração da gravidade.
II) Profundidade local.
III) Viscosidade da água.
IV) Velocidade do navio.

De acordo com “Princípios de Arquitetura Naval”, qual é a alternativa correta?`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      B: "Apenas as afirmativas I) e II) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas a afirmativa IV) é verdadeira.",
      E: "Apenas a afirmativa III) é verdadeira.",
    },
    correta: "A",
    comentario: `A formação de ondas é um fenômeno de gravidade, governado pelo número de Froude (V/√(gL)) e, em águas rasas, pelo Froude de profundidade (V/√(gh)).
I) Verdadeira — g aparece no número de Froude.
II) Verdadeira — a profundidade altera o sistema de ondas (Froude de profundidade).
III) Falsa — a viscosidade governa a resistência friccional (número de Reynolds), não a de ondas.
IV) Verdadeira — a velocidade é a variável principal do número de Froude.`,
  },
  {
    id: "dpc2006-38",
    prova: "DPC 2006",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Sr. Délio Maury, respeitado e experiente Prático, ao embarcar em navio tipo PANAMAX em carregamento pleno, recebeu do Comandante Anésio as diretrizes do “Passage Planning”. Verificou, no plano de viagem, que as margens de segurança estavam traçadas fora de suas devidas posições. O Comandante avaliou as seguintes razões que levaram o Prático a essa conclusão:

I) Batimetria desatualizada.
II) Efeito de ação de forças de ondas.
III) Efeito “SQUAT”.
IV) Falha em instrumentos de navegação do navio.

É correto afirmar, de acordo com o livro “Bridge Team Management”, que:`,
    alternativas: {
      A: "Apenas I, II e III são verdadeiras.",
      B: "Apenas I e IV são verdadeiras.",
      C: "Apenas II e III são verdadeiras.",
      D: "Apenas I e II são verdadeiras.",
      E: "Apenas III e IV são verdadeiras.",
    },
    correta: "A",
    comentario: `As margens de segurança do plano de viagem são traçadas considerando o calado e tudo o que altera a lazeira real sob a quilha.
I) Verdadeira — a confiabilidade/atualidade do levantamento batimétrico é fator para posicionar as margens.
II) Verdadeira — ondas aumentam o calado dinâmico (caturro, arfagem, balanço).
III) Verdadeira — o squat reduz a folga abaixo da quilha, sobretudo em navio carregado.
IV) Falsa — falha de instrumento é contingência tratada no monitoramento, não um critério de traçado das margens de segurança.`,
  },
  {
    id: "dpc2006-39",
    prova: "DPC 2006",
    tema: "Meteorologia e Oceanografia",
    enunciado: "O navegante observa na circulação geral dos oceanos o efeito da força de Coriolis, afetando as trajetórias das correntes oceânicas frias e quentes. No planejamento da derrota de um navio na costa nordeste e leste do Brasil, o navegante conclui, de acordo com Lobo e Soares, no livro “Meteorologia e Oceanografia”, que sua navegação costeira poderá sofrer os seguintes efeitos das correntes oceânicas:",
    alternativas: {
      A: "A corrente fria tem sua trajetória desviada no sentido horário, afetando a navegação costeira.",
      B: "A navegação costeira é afetada pela corrente quente, que tem sua trajetória desviada para a esquerda, aproximando o navio da costa.",
      C: "A navegação costeira é afetada pela corrente quente, que tem sua trajetória desviada para E, afastando o navio da costa.",
      D: "Desvio da trajetória da corrente fria no sentido anti-horário, próximo à costa do Brasil, afetando a navegação costeira.",
      E: "Desvio da trajetória da corrente quente para W, afetando a navegação costeira.",
    },
    correta: "C",
    explicacoes: {
      A: "A costa nordeste e leste é banhada pela Corrente do Brasil, que é quente; não há corrente fria atuando nesse trecho. Além disso, no hemisfério sul o giro é anti-horário.",
      B: "O desvio para a esquerda está certo (hemisfério sul), mas para uma corrente que flui para o sul a esquerda é o LESTE: o efeito é afastar da costa, não aproximar.",
      C: "A Corrente do Brasil (quente) flui para o sul; Coriolis no hemisfério sul a desvia para a esquerda do movimento, ou seja, para E, tendendo a afastar o navio da costa.",
      D: "Não é a corrente fria que atua na costa nordeste/leste do Brasil.",
      E: "O desvio pela força de Coriolis no hemisfério sul, para uma corrente rumo sul, é para E, não para W.",
    },
  },
  {
    id: "dpc2006-40",
    prova: "DPC 2006",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: "Na interpretação das curvas das marés de determinado porto, o navegante observa o comportamento dos elementos das marés ao longo do ciclo lunar e pode identificar os períodos e alturas das marés mais favoráveis à sua navegação. Dessa interpretação o navegante pode concluir, de acordo com Lobo e Soares, no livro “Meteorologia e Oceanografia”, o seguinte:",
    alternativas: {
      A: "A profundidade real será sempre maior que a cartografada em qualquer porto e a altura do nível médio do mar será maior na maré de sizígia.",
      B: "A altura do nível médio do mar será menor na maré de quadratura, a altura da baixa-mar é maior na lua nova e a amplitude da maré é menor na quadratura.",
      C: "O nível do mar, em algum porto, em determinado instante, nunca poderá ser menor que a profundidade indicada na carta náutica e a semi-amplitude da maré é maior na lua quarto crescente.",
      D: "A altura do nível médio do mar é constante nas marés de sizígia e de quadratura e pode ser igual à semi-amplitude de sizígia.",
      E: "Em algum ponto, o nível do mar, eventualmente, pode estar abaixo do nível de redução na lua cheia e, para navios de grande calado, pode ser mais perigoso o acesso ao porto, a qualquer instante, em dias de maré de lua quarto minguante do que em dias de lua nova.",
    },
    correta: "D",
    explicacoes: {
      A: "Nem sempre: podem ocorrer marés negativas (nível abaixo do nível de redução). E o nível médio não muda entre sizígia e quadratura.",
      B: "O nível médio não varia com a fase da lua; e na lua nova (sizígia) a baixa-mar é mais BAIXA, não mais alta. Só a última parte (amplitude menor na quadratura) está certa.",
      C: "O nível pode, sim, ficar abaixo do nível de redução (maré negativa); e a semi-amplitude é maior nas sizígias (lua nova e cheia), não no quarto crescente.",
      D: "O nível médio é a referência em torno da qual a maré oscila, igual em sizígia e quadratura. Quando o nível de redução é a média das baixa-mares de sizígia, a altura do nível médio acima dele (Z0) coincide com a semi-amplitude de sizígia.",
      E: "A primeira parte é possível, mas a segunda não: “a qualquer instante” é falso, pois nas sizígias (lua nova) ocorrem as baixa-mares mais baixas, que são a situação mais perigosa para grande calado.",
    },
  },
  {
    id: "dpc2006-41",
    prova: "DPC 2006",
    tema: "Navegação",
    enunciado: "You are approaching a light fitted with a RACON. The light may be identified on the radar by __________.",
    alternativas: {
      A: "a dashed line running from the center of the scope to the light",
      B: "an audible signal when the sweep crosses the light",
      C: "a circle appearing on the scope surrounding the light",
      D: "a coded signal appearing on the same bearing at a greater range than the light",
      E: "a dashed signal appearing at a smaller range than the light",
    },
    correta: "D",
    explicacoes: {
      A: "Uma linha do centro da tela até o alvo é característica de interferência ou de um RAMARK, não do RACON.",
      B: "O RACON responde na tela do radar; não produz sinal sonoro.",
      C: "O RACON não desenha círculo ao redor do alvo.",
      D: "O RACON é um transponder: ao ser interrogado pelo radar, responde com um sinal codificado (letra Morse) que aparece na mesma marcação do farol, começando logo após ele e se estendendo para fora, devido ao pequeno atraso da resposta.",
      E: "O atraso de resposta faz o sinal aparecer ALÉM do alvo, nunca a uma distância menor.",
    },
  },
  {
    id: "dpc2006-42",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `O Prático João estava a bordo de um navio VLCC de 280.000 DWT, com as mesmas características do navio “ESSO OSAKA”. João necessitou prever a distância de parada, o respectivo afastamento lateral, bem como os efeitos do leme em condições de folga abaixo da quilha (UKC) correspondente a 20% do calado. Fez as seguintes considerações para o comportamento do navio em águas rasas:

I) Estando o navio com velocidade de cruzeiro e ordenando-se máquinas atrás toda força, a distância percorrida longitudinalmente até o momento da parada aumentará em relação à distância percorrida em águas profundas.
II) Estando o navio com velocidade de cruzeiro e ordenando-se máquinas atrás toda força, a deriva lateral diminuirá em relação à deriva lateral obtida em águas profundas.
III) Estando o navio com 3,8 nós e ordenando-se máquina com 45 rpm à ré, serão obtidas, praticamente, as mesmas distâncias longitudinais percorridas até o momento da parada, carregando-se o leme todo a boreste ou todo a bombordo.
IV) Estando o navio com 3,8 nós e ordenando-se máquina com 45 rpm à ré, o navio guinará para boreste independente de se carregar o leme todo a boreste ou todo a bombordo.

Assinale a opção correta de acordo com “Princípios de Arquitetura Naval”:`,
    alternativas: {
      A: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      B: "Apenas as afirmativas III) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I) e III) são verdadeiras.",
      D: "Apenas a afirmativa II) é verdadeira.",
      E: "Apenas a afirmativa I) é verdadeira.",
    },
    correta: "B",
    comentario: `Baseado nos ensaios do ESSO OSAKA relatados no PNA:
I) Falsa (gabarito oficial) — os ensaios não mostraram aumento da distância de parada em águas rasas em relação a águas profundas.
II) Falsa (gabarito oficial) — a deriva lateral na parada não diminuiu em águas rasas.
III) Verdadeira — nas paradas a partir de 3,8 nós com 45 rpm a ré, a distância percorrida foi praticamente a mesma com leme todo a BE ou todo a BB.
IV) Verdadeira — com máquina a ré o leme perde efetividade e prevalece o efeito do hélice de passo direito: a popa vai para bombordo e a proa guina para boreste, qualquer que seja o leme.`,
  },
  {
    id: "dpc2006-43",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Assinale a opção que completa corretamente as lacunas da sentença abaixo:
Assim que a velocidade do navio _______, a largura da camada limite _______; com isso, o ponto de transição entre o escoamento laminar e turbulento se move para uma posição mais para _______, em relação à proa do navio. Isto faz com que a resistência friccional ______ assim que a velocidade do navio ______.`,
    alternativas: {
      A: "Aumenta, aumenta, ré, diminua, aumenta.",
      B: "Aumenta, diminui, vante, aumente, diminui.",
      C: "Diminui, aumenta, ré, diminua, diminui.",
      D: "Diminui, diminui, ré, aumente, aumenta.",
      E: "Aumenta, aumenta, vante, aumente, aumenta.",
    },
    correta: "E",
    comentario: `Lógica da sentença (gabarito oficial): com o aumento da velocidade cresce o número de Reynolds; a transição laminar → turbulento passa a ocorrer mais cedo, isto é, mais a VANTE; uma parcela maior do casco fica sob escoamento turbulento, e a resistência friccional AUMENTA com a velocidade.
Repare na coerência interna exigida: a 1ª e a 5ª lacunas descrevem a mesma variação de velocidade, então precisam ser iguais — o que já elimina a alternativa B.`,
  },
  {
    id: "dpc2006-44",
    prova: "DPC 2006",
    tema: "Rebocadores",
    tipo: "afirmativas",
    enunciado: `When analyzing capabilities and limitations of tugs, pilot Carlos pointed out the following notes:

I) ASD tugs, reverse-tractor and tractor tugs operating at a ship’s side have better performance when braking assistance than normal conventional tugs, because they have almost the same bollard pull astern as ahead.
II) A tug pulling at right angles to the bow of a ship, stopped in the water, will give the ship a lateral velocity and a rate of turn, causing the ship to pivot around a point somewhere near the bow.
III) Tractor tugs, with azimuth propellers, can achieve high pushing and pulling effectiveness when using a longer towline, because they can set their propellers thrusters, thus diverting the propellers washes. In this way they can avoid the propeller wash hit a ship’s hull.
IV) A tug keeping position at an angle with the ship’s hull may also exert rather high pushing forces caused by the waterflow, depending on the ship’s speed and the tug’s underwater hull form.

According to the book “Tug Use in Port”:`,
    alternativas: {
      A: "I, II e III solely are true.",
      B: "II e III solely are true.",
      C: "I e IV solely are true.",
      D: "IV solely is true.",
      E: "I solely is true.",
    },
    correta: "C",
    comentario: `I) Verdadeira — rebocadores azimutais têm tração a ré quase igual à de vante, por isso freiam melhor que o convencional operando no costado.
II) Falsa — com o navio parado, uma força aplicada na proa faz o navio girar em torno de um ponto próximo à POPA (o ponto pivô fica no extremo oposto ao da força).
III) Falsa — desviar a descarga dos propulsores para não atingir o casco reduz a força útil; e cabo longo não tem relação com empurrar. A premissa de "alta efetividade" não procede.
IV) Verdadeira — um rebocador mantido em ângulo com o casco do navio com seguimento gera força de empurrar adicional pelo escoamento sobre sua carena.`,
  },
  {
    id: "dpc2006-45",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: "Pilot Robert was afraid about the resultant movement due to sinkage and to bow-up rotation of a container ship with Blockage Coefficient = 0,83; he knows that in this case the trim can be negative (that is, bow down) owing to low-speed operation in shallow water. Robert, following the “Principles of Naval Architecture”, was introduced to the theoretical studies of Professor Tuck, and achieved a value to describe the hydraulic force (squat’s force) acting on the ship proceeding in a relatively narrow canal. What is the alternative that is NOT important in a Tuck’s squat calculation, used by Robert?",
    alternativas: {
      A: "Cross-sectional area of the canal.",
      B: "Mass density of canal water.",
      C: "Beam of ship.",
      D: "Froude number.",
      E: "Displacement of the ship.",
    },
    correta: "E",
    explicacoes: {
      A: "A área da seção transversal do canal entra no cálculo: define o bloqueio e a aceleração do escoamento em torno do casco.",
      B: "A massa específica da água entra diretamente na expressão da força hidráulica.",
      C: "A boca do navio entra no cálculo (seção do navio em relação à do canal).",
      D: "O número de Froude (de profundidade) é o parâmetro central da teoria de Tuck.",
      E: "Pelo gabarito oficial, na formulação de Tuck para a força de squat em canal estreito o deslocamento do navio não aparece como variável; a força depende da geometria das seções, da massa específica e do número de Froude.",
    },
  },
  {
    id: "dpc2006-46",
    prova: "DPC 2006",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `Pilot Joe Smith, when executing a “Z” maneuver in Chesapeake Bay, noted that it has the following numerical measures of control:

I) Time to reach the second execute yaw angle.
II) Overshoot yaw angle.
III) Overshoot width of path.
IV) Reach.

Which of the alternatives above are numerical measures of countermaneuvering ability and are indicative of the amount of anticipation required of a helmsman while operating in restricted waters?`,
    alternativas: {
      A: "I, solely is true.",
      B: "II e III, solely are true.",
      C: "I, II e IV, solely are true.",
      D: "IV, solely is true.",
      E: "I and II, solely are true.",
    },
    correta: "B",
    comentario: `Segundo o PNA, a manobra em Z fornece quatro medidas, com significados distintos:
I) Tempo até o segundo "execute" → mede a capacidade de mudar RAPIDAMENTE de rumo (resposta inicial), não a contramanobra.
II) Ângulo de overshoot → medida de capacidade de contramanobra; indica quanta antecipação o timoneiro precisa.
III) Largura de overshoot da trajetória → idem.
IV) "Reach" → ligado à capacidade de guinada/avanço da manobra, não à antecipação.`,
  },
  {
    id: "dpc2006-47",
    prova: "DPC 2006",
    tema: "Manobra do Navio",
    enunciado: "Depois de uma viagem de vários dias, vindo do Golfo Pérsico, o imponente VLCC estava a poucas milhas do ponto de recebimento de Prático da ZP de São Sebastião – SP. O Comandante decidiu começar a quebrar o seguimento, a fim de chegar ao ponto de recebimento do Prático com 3 a 4 nós. Apesar das manobras executadas, o embarque do Prático ocorreu com 9 nós. Qual é o método preferível e, frequentemente, mais prático para reduzir o seguimento do navio dentro do canal, de acordo com Daniel H. MacElrevey, em “Shiphandling for the Mariner”?",
    alternativas: {
      A: "Empregar a manobra conhecida como “BACKING AND FILLING”.",
      B: "Dar máquina atrás.",
      C: "Realizar uma manobra de zigue-zague em torno de um rumo base.",
      D: "Executar uma volta completa.",
      E: "Executar grandes alterações de rumo.",
    },
    correta: "C",
    explicacoes: {
      A: "“Backing and filling” é técnica para girar o navio em espaço restrito, praticamente sem seguimento; não serve para quebrar seguimento de 9 nós.",
      B: "Máquina atrás em um VLCC com bastante seguimento é lenta para surtir efeito e tira o governo do navio (a proa guina sem controle), o que é perigoso dentro do canal.",
      C: "Carregar o leme alternadamente para um bordo e outro, em torno do rumo base, faz o casco atuar como freio e quebra o seguimento rapidamente, sem perder o governo e sem sair do canal.",
      D: "A volta completa reduz muito a velocidade, mas exige espaço lateral que não existe dentro de um canal.",
      E: "Grandes alterações de rumo também quebram seguimento, mas não cabem dentro de um canal.",
    },
  },
  {
    id: "dpc2006-48",
    prova: "DPC 2006",
    tema: "Legislação e Normas",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Coloque F (falso) ou V (verdadeiro) nas afirmativas abaixo, com base nas regras para determinação da borda-livre e compartimentagem das embarcações nacionais empregadas na navegação de mar aberto, bem como nos critérios para estabilidade intacta, preconizados nas Normas da Autoridade Marítima Brasileira:

( ) Uma barcaça possui uma relação entre a boca e o calado superior a 6,0 e uma relação entre a boca e o pontal superior a 3,0.
( ) A borda-livre mínima de embarcação “Não SOLAS” não poderá ser inferior a 100 mm, exceto em função da correção para a Posição da Linha de Convés.
( ) Na determinação do efeito de superfície livre, os tanques considerados no cálculo devem ser aqueles que possuam qualquer Momento de Superfície Livre a 30° de inclinação, quando com 70% de sua capacidade total.
( ) Embarcações de passageiros ou de carga devem atender o seguinte critério de estabilidade: “A área sob a Curva de Estabilidade Estática compreendida entre os ângulos de inclinação de 0° a 30° não deverá ser inferior a 0,055 m.rad”.
( ) Embarcações de passageiros ou de carga devem atender o seguinte critério de estabilidade: “A altura metacêntrica inicial não deve ser menor do que 0,15 m”.`,
    alternativas: {
      A: "(V) (V) (F) (F) (V)",
      B: "(F) (V) (V) (V) (F)",
      C: "(F) (F) (V) (V) (V)",
      D: "(V) (V) (F) (V) (V)",
      E: "(V) (F) (F) (F) (V)",
    },
    correta: "D",
    comentario: `Item a item:
1º Verdadeiro — é a definição de barcaça da NORMAM-01 (B/T > 6,0 e B/D > 3,0).
2º Verdadeiro — borda-livre mínima de 100 mm para embarcações "Não SOLAS", ressalvada a correção da linha de convés.
3º Falso — o critério não é "qualquer" momento nem 70%: consideram-se os tanques cujo momento de superfície livre a 30°, com 50% da capacidade, supere um valor mínimo.
4º Verdadeiro — área sob a curva GZ de 0° a 30° ≥ 0,055 m.rad (critério do Código de Estabilidade Intacta da IMO, adotado pela NORMAM).
5º Verdadeiro — GM inicial ≥ 0,15 m.`,
  },
);

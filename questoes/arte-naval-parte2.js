// Questões elaboradas a partir do livro "Arte Naval" (Maurílio M. Fonseca, ed. 2019).
// Capítulo 3 – Classificação dos Navios (artenaval-15 a 19) e
// Capítulo 9 – Poleame, Aparelhos de Laborar e Acessórios (artenaval-20 a 25).
QUESTOES.push(
  {
    id: "artenaval-15",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Albuquerque recebeu a escala de serviço da Zona de Praticagem com navios mercantes de diversos tipos a serem manobrados. Com relação à classificação dos navios mercantes, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Navios de cabotagem são os destinados a realizar o transporte de cargas ou passageiros entre portos de diferentes países.",
      B: "Os navios de carga modular do tipo Lash (Lighter Aboard Ship) são essencialmente transportadores de veículos, que embarcam por meio de rampas nos bordos e na popa.",
      C: "Os contêineres dos navios de carga modular têm tamanho padronizado de 8 x 8 x 10 pés ou 8 x 8 x 30 pés.",
      D: "Os navios graneleiros são construídos geralmente com vários conveses e porões laterais, destinando-se ao transporte de carga líquida a granel.",
      E: "A Convenção Internacional para a Salvaguarda da Vida Humana no Mar, de 1974, considera navio de passageiros o que transporta mais de 12 passageiros; os navios cargueiros podem acomodar, no máximo, 12 passageiros.",
    },
    correta: "E",
    explicacoes: {
      A: "Transporte entre portos de diferentes países caracteriza o navio de LONGO CURSO (art. 3.19, alínea b, item 1). Navio de cabotagem é o que liga portos ou cidades de um mesmo país, por via marítima ou vias navegáveis interiores (art. 3.19, alínea b, item 2).",
      B: "Lash significa Batelão a Bordo de Navio: barcaças ou batelões modulares são trazidos para bordo (art. 3.19, alínea a, item 3). O navio que transporta veículos por rampas nos bordos e na popa é o de carga modular rolante (Ro/Ro).",
      C: "As dimensões padronizadas dos contêineres são 8 x 8 x 20 pés ou 8 x 8 x 40 pés (art. 3.19, alínea a, item 3).",
      D: "Os graneleiros têm geralmente convés ÚNICO, porões centrais para carga e tanques laterais ou no fundo duplo para lastro, e transportam carga SECA a granel (carvão, minérios, cereais) — art. 3.19, alínea a, item 5. Granel líquido é carga dos navios-tanques.",
      E: "Correta. O art. 3.19, alínea a, item 1, cita a SOLAS 1974: navio de passageiros é o que transporta mais de 12 passageiros; e o item 2 diz que alguns cargueiros podem acomodar pequeno número de passageiros (12 no máximo).",
    },
  },
  {
    id: "artenaval-16",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `Associe os termos da coluna A com as descrições da coluna B, com relação aos navios e embarcações de serviços especiais e às embarcações sem propulsão, de acordo com Maurílio M. Fonseca, no livro Arte Naval:

COLUNA A
1) Cábrea
2) Lameiro
3) Alvarenga
4) Pontão de amarração
5) Draga

COLUNA B
( ) Grande embarcação de ferro, com caixas de ar nas extremidades e portas no fundo, que transporta a lama proveniente das dragagens dos portos.
( ) Pontão sobre o qual se monta um aparelho de manobra de pesos, destinado ao embarque ou desembarque de grandes pesos sem necessidade de atracar o navio a um cais.
( ) Embarcação de casco robusto, geralmente a motor, construída para resistir aos embates das ondas e à atracação aos navios em qualquer condição de tempo e mar.
( ) Embarcação robusta, de ferro ou de madeira, de fundo chato, empregada no desembarque ou transbordo de carga nos portos; designação muito usada na costa Nordeste do Brasil.
( ) Embarcação utilizada para retirar o material do fundo em portos, rios e canais de pequena profundidade, podendo ser de sucção ou de escavação.
( ) Embarcação destinada a suspender boias e a colocar e retirar amarrações fixas, dispondo de um ou dois gavietes na proa.`,
    alternativas: {
      A: "(2) (4) (-) (3) (5) (1)",
      B: "(5) (1) (3) (2) (-) (4)",
      C: "(2) (1) (-) (3) (5) (4)",
      D: "(2) (1) (3) (-) (5) (4)",
      E: "(1) (2) (-) (3) (4) (5)",
    },
    correta: "C",
    comentario: `Item a item:
1º Embarcação de ferro com caixas de ar e portas no fundo, que transporta a lama das dragagens → Lameiro (2) — art. 3.30, alínea e.
2º Pontão com aparelho de manobra de pesos, para embarque/desembarque de grandes pesos sem atracar o navio → Cábrea (1) — art. 3.30, alínea c.
3º Casco robusto para resistir às ondas e à atracação aos navios em qualquer tempo → Embarcação de práticos (art. 3.21, alínea g), que não consta da coluna A → (-).
4º Embarcação de fundo chato para transbordo de carga nos portos, nome usado no Nordeste → Alvarenga (3) — art. 3.30, alínea d (batelão, saveiro, alvarenga).
5º Retira o material do fundo em portos, rios e canais; de sucção ou de escavação → Draga (5) — art. 3.21, alínea c.
6º Suspende boias e coloca/retira amarrações fixas, com gavietes na proa → Pontão de amarração (4) — art. 3.30, alínea b.
Sequência: (2) (1) (-) (3) (5) (4).`,
  },
  {
    id: "artenaval-17",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação às características dos navios de guerra, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "Nos navios-aeródromos, o convés de voo é em ângulo, permitindo que os aviões desçam a um ângulo de 8 a 10 graus para bombordo da linha de centro do navio; nas operações de pouso e decolagem, o navio mantém a proa na direção de onde vem o vento, com velocidade suficiente para produzir um vento aparente no convés de cerca de 30 nós.",
      B: "Para o controle e manobra, o submarino normalmente possui três lemes: o vertical, para controlar o rumo; o horizontal a vante, para controlar a profundidade; e o horizontal a ré, para controlar a inclinação do casco.",
      C: "Os cruzadores construídos até a Segunda Guerra Mundial eram classificados em pesados e ligeiros com base no seu deslocamento, sendo considerados cruzadores pesados aqueles com mais de 10.000 toneladas.",
      D: "Os contratorpedeiros são os mais numerosos navios de guerra do mundo; são navios de grande velocidade, podendo desenvolver mais de 30 nós, com grande mobilidade, pequena autonomia, tamanho moderado e pequena proteção estrutural.",
      E: "No esnórquel dos submarinos convencionais, o tubo de descarga dos gases dos motores diesel é mais curto que o de aspiração, para evitar que os gases da combustão sejam novamente aspirados com o ar puro.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta (art. 3.3, alínea a: convés em ângulo de 8 a 10 graus para bombordo; vento aparente no convés de cerca de 30 nós). Não é a resposta.",
      B: "Afirmação correta (art. 3.5, alínea c: leme vertical para o rumo, horizontal a vante para a profundidade e horizontal a ré para a inclinação do casco). Não é a resposta.",
      C: "INCORRETA. Segundo o art. 3.6, alínea b, a base da classificação NÃO era o tamanho, e sim o ARMAMENTO: cruzadores pesados eram os que tinham canhões de mais de 6 polegadas na bateria principal, e ligeiros os de canhões menores.",
      D: "Afirmação correta (art. 3.7, alínea a). Não é a resposta.",
      E: "Afirmação correta (art. 3.5, alínea c: o tubo de descarga é mais curto para evitar que os gases sejam aspirados de novo e para permitir a descarga dentro d'água). Não é a resposta.",
    },
  },
  {
    id: "artenaval-18",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `O Prático Sampaio foi designado para assessorar a manobra de um Navio de Desembarque de Carros de Combate (NDCC) que abicaria numa praia durante um exercício anfíbio. Com relação às características dos navios e embarcações de desembarque, de acordo com Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) Os navios que abicam possuem fundo chato, para não adernarem, e hélices acima da quilha, para não tocarem o fundo.
II) As âncoras na popa, presentes principalmente nos navios e embarcações maiores que abicam, auxiliam na manutenção da posição durante a abicagem e na manobra de retração da praia.
III) As Embarcações de Desembarque de Viaturas e Pessoal (EDVP) possuem fundo chato, o que as capacita a serem transportadas nos conveses-doca dos navios anfíbios.
IV) O NDCC possui propulsor lateral (bow thruster), capaz de manter o navio em posição quando abicado, e desembarca viaturas por meio de uma grande rampa na proa e/ou na popa.

Considerando as afirmativas acima, assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — art. 3.10, alínea c, item 1: pequeno calado e, nos navios que abicam, fundo chato (para não adernarem) e hélices acima da quilha (para não tocarem o fundo).
II) Verdadeira — art. 3.10, alínea c, item 2: âncoras na popa, principalmente nos navios e embarcações maiores que abicam, para auxiliar na manutenção de posição durante a abicagem e na retração da praia.
III) Falsa — art. 3.10.10: as EDVP têm a peculiaridade de NÃO possuírem fundo chato, o que NÃO as capacita a serem transportadas nos conveses-doca; são transportadas sobre berços e arriadas por aparelhos de força.
IV) Verdadeira — art. 3.10.3: o NDCC é capaz de encalhar na praia para desembarcar viaturas por uma grande rampa na proa e/ou na popa e possui propulsor lateral (bow thruster) para manter a posição quando abicado.`,
  },
  {
    id: "artenaval-19",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Menezes embarcou no navio mercante \"Serra Azul\", propulsado por turbina a vapor, para uma manobra de atracação que exigiria o uso frequente da máquina a ré. Sobre as máquinas propulsoras dos navios, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Nos navios a turbina, a potência em marcha a ré é limitada a 50% da potência em marcha a vante, o que confere aos navios a motor diesel superioridade de manobra, pois estes são reversíveis e desenvolvem praticamente a mesma potência nas marchas a vante e a ré.",
      B: "Os motores diesel consomem cerca de 350 gramas por CV-hora efetivo, enquanto as máquinas a vapor mais modernas, para navios de potência média, consomem cerca de 175 gramas.",
      C: "As turbinas e os motores elétricos são máquinas de conjugado motor constante; por isso, com ondas e ventos contrários, a perda de velocidade nesses navios é bem maior do que nos movidos a motor diesel.",
      D: "A turbina a vapor é reversível, dispensando a instalação de uma turbina de marcha a ré; o redutor hidráulico, entretanto, exige a turbina de marcha a ré.",
      E: "Para uma mesma potência, a turbina a gás pesa cerca de seis vezes mais que um motor diesel e doze vezes mais que um motor a gasolina.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. O art. 3.28.2, item 3, diz que os motores diesel são reversíveis e desenvolvem praticamente a mesma potência nas marchas a ré e a vante, possuindo superioridade de manobra sobre os navios a turbina, cuja potência em marcha a ré é limitada a 50% da potência a vante.",
      B: "Os valores estão invertidos: os motores diesel consomem cerca de 175 g por CV-hora efetivo, e as máquinas a vapor mais modernas, cerca de 350 g (art. 3.28.2, item 2).",
      C: "Turbinas e motores elétricos são máquinas de POTÊNCIA constante (o conjugado aumenta quando diminuem as rotações); máquina alternativa e motor diesel é que são de conjugado constante. Com resistência aumentada, a perda de velocidade do navio a turbina ou motor elétrico é bem MENOR, cerca de 1/3 da que ocorreria com diesel (art. 3.28.3).",
      D: "É o contrário: a turbina a vapor é IRREVERSÍVEL, exigindo uma turbina para marcha a vante e outra para marcha a ré (art. 3.28.1.2); o redutor hidráulico e a propulsão turboelétrica é que permitem eliminar a turbina de marcha a ré (art. 3.28.1.2, alíneas b e d).",
      E: "As turbinas a gás são muito mais LEVES: para uma mesma potência, um motor a gasolina pesa cerca de seis vezes mais, e um diesel, doze vezes mais (art. 3.28.4, item 1).",
    },
  },
  {
    id: "artenaval-20",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação ao poleame e à sua nomenclatura, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Poleame surdo é o provido de roldanas que giram em torno de um perno, empregado para dar retorno aos cabos de laborar; consta de moitões, cadernais e patescas.",
      B: "Patesca é uma caixa semelhante à de um moitão, porém mais comprida e aberta de um lado, a fim de se poder gurnir ou desgurnir um cabo pelo seio; sua ferragem é adaptada com charneira e ela é muito usada como retorno do tirador de um aparelho de laborar.",
      C: "Cadernal é um moitão especial de aço para trabalhos de grande peso, muito empregado nos lais dos paus de carga, cuja roldana tem bucha de bronze autolubrificada.",
      D: "Bigota é uma peça de madeira dura com um só olho, bastante largo e com caneluras que servem de berço aos cabos, e trabalha sempre isolada nas enxárcias.",
      E: "Num moitão ou cadernal de madeira, o espaço entre as paredes da caixa onde trabalham a roldana e o cabo chama-se goivado, e os entalhes externos que recebem o estropo ou a ferragem chamam-se gornes.",
    },
    correta: "B",
    explicacoes: {
      A: "Descrição do poleame DE LABORAR (art. 9.1 e 9.3). O poleame surdo é formado de um só bloco, sem roldanas, com olhos e goivado, e consta de bigotas, sapatas e caçoilos (art. 9.1 e 9.2).",
      B: "Correta. É a definição de patesca do art. 9.3, alínea c: caixa mais comprida e aberta de um lado para gurnir o cabo pelo seio, ferragem com charneira, muito usada como retorno do tirador de um aparelho de laborar.",
      C: "Essa é a definição de CATARINA (art. 9.3, alínea e). Cadernal é a caixa dentro da qual trabalham duas ou mais roldanas em um mesmo eixo (art. 9.3, alínea b).",
      D: "Um só olho largo com caneluras é a SAPATA (art. 9.2, alínea b). A bigota tem três olhos e as bigotas trabalham sempre aos pares (art. 9.2, alínea a).",
      E: "Os nomes estão trocados: o espaço onde trabalham a roldana e o cabo é o GORNE, e os entalhes externos das paredes que recebem o estropo ou a ferragem são os GOIVADOS (art. 9.4).",
    },
  },
  {
    id: "artenaval-21",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "A bordo do navio \"Itapuã\", o Contramestre precisa içar um peso de 400 kg utilizando uma talha dobrada, com o tirador gurnindo no cadernal fixo. Admitindo as resistências passivas em 10% do peso a manobrar para cada roldana em que o cabo labora, conforme o cálculo aproximado indicado por Maurílio M. Fonseca, no livro Arte Naval, a força a aplicar no tirador e o rendimento do aparelho serão, respectivamente:",
    alternativas: {
      A: "100 kg e 1,00",
      B: "112 kg e 0,71",
      C: "130 kg e 0,77",
      D: "140 kg e 0,71",
      E: "160 kg e 0,63",
    },
    correta: "D",
    explicacoes: {
      A: "100 kg seria a força teórica (P/4), desprezando o atrito e a rigidez do cabo. O art. 9.16 manda considerar as resistências passivas, que elevam a força no tirador.",
      B: "112 kg (1,4 x 400 / 5) seria o resultado se o tirador saísse do cadernal MÓVEL (multiplicação teórica 5, art. 9.14, alínea c). No enunciado o tirador gurne no cadernal fixo, logo a multiplicação teórica é 4.",
      C: "130 kg corresponderia a apenas três roldanas (peso aumentado de 30%), mas na talha dobrada o cabo labora em QUATRO roldanas (art. 9.16).",
      D: "Correta. É o exemplo do art. 9.16: a talha dobrada com o tirador no cadernal fixo tem multiplicação teórica de 1 para 4; com quatro roldanas, o peso fica aumentado de 40%, logo F = 1,4 x 400 / 4 = 140 kg, e o rendimento R = P / (n.F) = 400 / (4 x 140) = 0,71.",
      E: "160 kg corresponderia a resistências passivas de 15% por roldana (peso aumentado de 60%), valor que o art. 9.16 reserva para cabo novo ou molhado, não aos 10% pedidos.",
    },
  },
  {
    id: "artenaval-22",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `Durante a faina de içar uma embarcação miúda pelos turcos, o Prático Ferreira observou a distribuição de esforços no aparelho de laborar. Sobre a distribuição de esforços e as regras práticas dos aparelhos de laborar, de acordo com Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) Quando se iça um peso, a tensão máxima está no tirador, diminuindo deste para a arreigada fixa; quando se arria, a tensão máxima está na arreigada fixa.
II) A passagem do tirador por uma patesca, para retorno, aumenta de 5 a 10% a força a aplicar para um ângulo de 90º e de 10 a 20% para um ângulo de 180º, conforme a bitola do cabo.
III) O esforço exercido no gato do poleame fixo, em qualquer aparelho, é igual ao peso a içar menos a força exercida no tirador.
IV) Admite-se que um homem pode alar, por um cabo singelo que labora em um retorno sem atrito, um peso de 12 kg caminhando em passo natural e, em média, 34 kg alando por lupada.

Considerando as afirmativas acima, assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
    },
    correta: "E",
    comentario: `I) Verdadeira — regra do art. 9.17 (repetida no art. 9.21, item 3): içando, a tensão máxima está no tirador e diminui até a arreigada fixa, onde o atrito não atuou; arriando, a tensão máxima está na arreigada fixa.
II) Verdadeira — art. 9.21, item 4: a patesca de retorno aumenta a força a aplicar de 5 a 10% para 90º e de 10 a 20% para 180º.
III) Falsa — art. 9.17: o esforço no gato fixo é igual ao peso a içar MAIS o peso do aparelho MAIS a força exercida no tirador; num simples retorno, ele é maior que o dobro do peso içado.
IV) Verdadeira — art. 9.21, item 7: 12 kg em passo natural (50 m/min), 24 kg de leva-arriba e a metade do próprio peso, em média 34 kg, alando por lupada.`,
  },
  {
    id: "artenaval-23",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação às talhas mecânicas ou talhas patentes, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "Entre as vantagens das talhas patentes estão a grande multiplicação de potência, o atrito mínimo e o fato de manterem os pesos suspensos quando se deixa de exercer esforço no tirador; entre as desvantagens, o pequeno curso do gato, que limita muito a altura a que o objeto pode ser içado.",
      B: "A talha diferencial, às vezes chamada talha Weston, é o tipo mais antigo de talha patente; nela, a força aplicada no tirador será tanto menor quanto menor for a diferença entre os raios das duas roldanas superiores.",
      C: "Na talha de parafuso sem fim, o aparelho não se movimenta sob a ação do peso porque o movimento do parafuso sem fim é irreversível.",
      D: "A talha de engrenagens, ou epicíclica, é a mais lenta das talhas patentes e apresenta rendimento mecânico de cerca de metade do obtido nos outros tipos, sendo por isso a empregada nos serviços usuais do convés.",
      E: "A talha diferencial é a mais leve de todas; a de parafuso sem fim é mais leve que a de engrenagens, toma menos espaço que as demais e trabalha bem em qualquer posição.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 9.23, alíneas b e c). Não é a resposta.",
      B: "Afirmação correta (art. 9.23.1: tipo mais antigo, chamada talha Weston; F = P/2 . (r - r')/r, tanto menor quanto menor a diferença r - r'). Não é a resposta.",
      C: "Afirmação correta (art. 9.23.2). Não é a resposta.",
      D: "INCORRETA. Segundo o art. 9.23.3, o rendimento mecânico da talha de engrenagens é praticamente o DOBRO do dos outros tipos e ela permite trabalhar com grande velocidade; o art. 9.24 confirma que é içada ou arriada mais rapidamente que as outras. Além disso, as talhas patentes NÃO são empregadas nos serviços usuais do convés (art. 9.23, alínea d).",
      E: "Afirmação correta (art. 9.24). Não é a resposta.",
    },
  },
  {
    id: "artenaval-24",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Carvalho verificou, ao embarcar, que o chicote do cabo de aço de um aparelho de içar estava fixado com grampos. Sobre os acessórios do aparelho do navio, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "As prensas para cabos de aço, constituídas por duas peças iguais de ferro fundido apertadas por parafusos com porca, geralmente em número de três, são usadas em ligações temporárias e dão uma carga de ruptura de apenas 75% da do cabo.",
      B: "A amarração com grampos é a mais eficiente para cabos de aço, permitindo o emprego total (100%) da carga de trabalho atribuída ao cabo.",
      C: "Na colocação de grampos em um cabo de aço, a base do grampo deve ficar sobre o chicote e o U sobre o vivo do cabo, que é a parte que sustenta o esforço.",
      D: "A manilha com cavirão de rosca é a indicada para os serviços gerais de bordo com esforços repetidos ou alternados, enquanto a de cavirão com tufo só deve ser empregada no aparelho fixo.",
      E: "Para um mesmo calibre, a resistência de um gato de tesoura é cerca de 1/3 inferior à de um gato simples, razão pela qual ele deve ser sempre abotoado por um cabo fino.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. É a descrição do art. 9.33: duas peças iguais de ferro fundido, apertadas por parafusos com porca geralmente em número de três, para alças ou mãos sem sapatilho em ligações temporárias, com carga de ruptura de apenas 75% da do cabo.",
      B: "A ligação por grampos não permite eficiência maior que 85% da carga de ruptura do cabo (art. 9.30 e 9.32). Eficiência de 100% só o terminal fixado por zinco fundido (art. 9.31).",
      C: "É o inverso: o U do grampo deve ficar sobre o CHICOTE e a base sobre o VIVO do cabo; do contrário, o cabo será ferido pelo vergalhão ao ser tesado (art. 9.32, fig. 9-41).",
      D: "Está trocado: a manilha de cavirão de ROSCA só deve ser empregada no aparelho fixo, e com reserva onde houver esforços repetidos ou alternados, que podem desaparafusar o cavirão; o cavirão com TUFO é o empregado nas amarras e seus acessórios (art. 9.28, alíneas b e c).",
      E: "A resistência do gato de tesoura é cerca de 1/3 SUPERIOR à do gato simples de mesmo calibre (ele substitui um gato simples com apenas 5/6 do calibre deste); o abotoamento por cabo fino é para maior segurança (art. 9.27).",
    },
  },
  {
    id: "artenaval-25",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação às dimensões, à escolha e ao modo de aparelhar o poleame, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "O poleame é medido pelo diâmetro exterior de sua roldana, que corresponde a aproximadamente 1/3 do comprimento da caixa.",
      B: "Deve-se preferir no poleame um cabo de bitola menor que a indicada pelo fabricante, pois assim se ganha em rendimento e o cabo trabalha folgado no goivado da roldana.",
      C: "A circunferência de um estropo singelo de cabo de fibra é igual à circunferência do cabo que labora no poleame multiplicada pela raiz quadrada da metade do número de pernadas deste cabo; se o estropo for de cabo de aço, sua circunferência será a metade desse valor.",
      D: "Ao aparelhar uma estralheira dobrada, o tirador deve gurnir em um dos gornes laterais do cadernal, para evitar que o cadernal vire e o cabo fique mordido na caixa.",
      E: "Como regra geral, o poleame de um aparelho de laborar suporta o mesmo peso que o cabo novo indicado para ele, sendo o gato a parte mais resistente do conjunto.",
    },
    correta: "C",
    explicacoes: {
      A: "O poleame é medido pelo COMPRIMENTO DA CAIXA; a roldana é medida pelo seu diâmetro exterior, que é aproximadamente 2/3 (e não 1/3) do comprimento da caixa (art. 9.11).",
      B: "Não se deve usar cabo de bitola menor que a indicada: perde-se em rendimento e o cabo fica folgado demais no goivado, podendo galear; também não se deve usar cabo maior, que seria coçado pelas arestas da caixa (art. 9.12).",
      C: "Correta. Regra do art. 9.8, alínea a (C = c . raiz de n/2) e alínea c (para estropo de cabo de aço, a circunferência é a metade do valor achado para o cabo de fibra).",
      D: "O tirador deve gurnir no gorne CENTRAL do cadernal; se gurnisse num gorne lateral, o cadernal poderia virar, mordendo o cabo na caixa e, sob grande esforço, quebrando-a (art. 9.19).",
      E: "Como regra geral, o poleame NÃO pode suportar o mesmo peso que o cabo novo indicado para ele, pois a este se concede grande fator de segurança; e o gato é, invariavelmente, a parte MAIS FRACA do aparelho, sendo as manilhas usadas para os grandes pesos (art. 9.9).",
    },
  },
);

// Questões elaboradas a partir do livro "Navegação: a Ciência e a Arte – Volume I"
// (Altineu Pires Miguens, DHN, 2ª revisão atualizada, 2023)
// Capítulo 13 – Auxílios à Navegação (navegacao-40 a 44)
// Capítulo 14 – Navegação Radar (navegacao-45 a 50)
QUESTOES.push(
  {
    id: "navegacao-40",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Tavares, ao consultar a Lista de Faróis para identificar os sinais luminosos da barra de um porto, recordou os termos empregados na descrição das luzes de auxílio à navegação. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Período é o intervalo de tempo em que a luz e a obscuridade têm igual duração, na característica de uma luz rítmica.",
      B: "Lampejo é o intervalo de luz em relação a outro de maior duração de ausência total de luz (obscuridade) em um mesmo período; eclipse é o intervalo de obscuridade entre dois sucessivos lampejos em um mesmo período.",
      C: "Ocultação é o intervalo de obscuridade relativamente mais longo que o de luz em um mesmo período, situado entre dois lampejos sucessivos.",
      D: "Característica é a aparência pela qual as luzes são identificadas, obtida pela combinação de sua intensidade luminosa com o seu alcance nominal.",
      E: "Luz de setor é aquela que exibe ao navegante, em todo o seu entorno, uma mesma característica; luz onidirecional é aquela que exibe, com um mesmo ritmo e diferentes cores, diferentes setores do horizonte.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. A definição apresentada é a de isofase (luz e obscuridade com igual duração em um mesmo período). Período é o intervalo de tempo compreendido entre os inícios de dois ciclos sucessivos idênticos na característica de uma luz rítmica (seção 13.2.5, alínea b).",
      B: "Correta. São exatamente as definições de lampejo e de eclipse dadas na seção 13.2.5, alínea b (Termos Gerais).",
      C: "Errada. Ocultação é o intervalo de obscuridade relativamente mais CURTO que o de luz em um mesmo período. O intervalo de obscuridade entre dois sucessivos lampejos é o eclipse (seção 13.2.5, alínea b).",
      D: "Errada. A característica é obtida pela combinação dos dois principais aspectos da luz: RITMO e COR, e não da intensidade com o alcance (seção 13.2.5, alínea b).",
      E: "Errada. As definições estão trocadas: luz onidirecional é a que exibe, em todo o seu entorno, uma mesma característica; luz de setor é a que exibe, com um mesmo ritmo e diferentes cores, diferentes setores do horizonte (seção 13.2.5, alínea a).",
    },
  },
  {
    id: "navegacao-41",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Medeiros, no passadiço de um navio mercante, com a altura do olho a 16 metros sobre o nível do mar, aguarda avistar um farol de aterragem cujo foco luminoso tem altitude de 81 metros. De acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), o alcance geográfico do farol para esse observador, obtido pela fórmula empregada no cálculo da Tabela de Alcance Geográfico da Lista de Faróis (e não pela fórmula prática simplificada), é de aproximadamente:`,
    alternativas: {
      A: "17,4 milhas náuticas.",
      B: "19,0 milhas náuticas.",
      C: "25,1 milhas náuticas.",
      D: "26,0 milhas náuticas.",
      E: "28,7 milhas náuticas.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. 17,4 milhas (1,93 x √81 = 1,93 x 9) é apenas a distância ao horizonte correspondente à altitude do farol; falta somar a parcela referente à altura do olho do observador (seção 13.2.6, alínea c, e Apêndice B, item 1).",
      B: "Errada. 19,0 milhas resulta de aplicar a raiz à soma das altitudes (1,93 x √97), o que não corresponde à fórmula: somam-se as raízes quadradas de cada altitude, pois o alcance é a soma das duas distâncias ao horizonte (Apêndice B, item 1).",
      C: "Correta. Pela seção 13.2.6, alínea c, a tabela utiliza D = 1,93 (√H + √h), com D em milhas náuticas e as altitudes em metros. Logo: D = 1,93 x (√16 + √81) = 1,93 x (4 + 9) = 1,93 x 13 = 25,09, ou seja, cerca de 25,1 milhas náuticas.",
      D: "Errada. 26,0 milhas é o resultado da fórmula prática simplificada D = 2 (√H + √h) = 2 x 13, citada no Apêndice B como suficiente para um conhecimento rápido do alcance geográfico, mas que não é a empregada na tabela, como pede o enunciado.",
      E: "Errada. 28,7 milhas resulta do coeficiente 2,21 (2,21 x 13), que é o da distância ao horizonte RADAR, maior que o horizonte geográfico em cerca de 14%; não se aplica ao alcance geográfico de uma luz (seção 13.2.6, alínea c).",
    },
  },
  {
    id: "navegacao-42",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Nogueira, conduzindo um navio que vem do mar e demanda um porto brasileiro, seguindo a direção convencional do balizamento, avista, no ponto em que o canal se bifurca, uma boia cônica encarnada com uma faixa larga horizontal verde, exibindo como marca de tope um cone encarnado com o vértice para cima. Considerando o Sistema de Balizamento Marítimo da IALA – Região B, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Trata-se de um sinal de perigo isolado, construído ou fundeado sobre um perigo de dimensões relativamente pequenas, com águas navegáveis em toda a sua volta; à noite, exibe luz branca com grupo de lampejos (2).",
      B: "Trata-se de um sinal lateral modificado que indica canal preferencial a boreste; à noite, exibe luz verde com ritmo de grupos de lampejos compostos (2+1).",
      C: "Trata-se de um sinal lateral de boreste comum; à noite, exibe luz encarnada com qualquer ritmo, inclusive grupos de lampejos compostos (2+1).",
      D: "Trata-se de um sinal lateral modificado que indica canal preferencial a bombordo; à noite, exibe luz verde com ritmo de grupos de lampejos compostos (2+1).",
      E: "Trata-se de um sinal lateral modificado que indica canal preferencial a bombordo; à noite, exibe luz encarnada com ritmo de grupos de lampejos compostos (2+1).",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. O sinal de perigo isolado é preto, com uma ou mais faixas largas horizontais encarnadas, e tem como marca de tope 2 esferas pretas, uma sobre a outra (seção 13.3.2, alínea d). A boia descrita é encarnada com faixa verde e marca de tope cônica.",
      B: "Errada. Na Região B, o sinal de canal preferencial a boreste é VERDE com uma faixa larga horizontal encarnada, de formato cilíndrico, pilar ou charuto, com marca de tope em cilindro verde e luz verde (2+1) (seção 13.3.2, alínea b).",
      C: "Errada. O sinal lateral de boreste comum da Região B é inteiramente encarnado, sem faixa, e sua luz pode ter qualquer ritmo, COM EXCEÇÃO de grupos de lampejos compostos (2+1), reservado aos sinais de canal preferencial (seção 13.3.2, alínea b).",
      D: "Errada. A identificação do sinal está certa, mas a luz não: o sinal de canal preferencial a bombordo da Região B exibe luz ENCARNADA com grupos de lampejos compostos (2+1) (seção 13.3.2, alínea b).",
      E: "Correta. Pelo quadro dos sinais laterais usados na Região B (seção 13.3.2, alínea b), o sinal de canal preferencial a bombordo é encarnado com uma faixa larga horizontal verde, de formato cônico, pilar ou charuto, com marca de tope (se houver) em cone encarnado com o vértice para cima e luz encarnada com ritmo de grupos de lampejos compostos (2+1).",
    },
  },
  {
    id: "navegacao-43",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `Associe os sinais do Sistema de Balizamento Marítimo da IALA da coluna A com as descrições da coluna B, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

COLUNA A
1) Sinal cardinal Norte
2) Sinal cardinal Oeste
3) Sinal de perigo isolado
4) Sinal de águas seguras
5) Sinal especial

COLUNA B
( ) Cor preta, com uma ou mais faixas largas horizontais encarnadas; marca de tope com 2 esferas pretas, uma sobre a outra; luz branca com grupo de lampejos (2).
( ) Listras verticais encarnadas e brancas; marca de tope (se houver) com uma esfera encarnada; luz branca isofásica, ou de ocultação, ou lampejo longo a cada 10 segundos, ou Morse "A".
( ) Cor amarela com uma faixa larga horizontal preta; marca de tope com 2 cones pretos, um sobre o outro, ponta a ponta; luz branca com grupos de lampejos muito rápidos (9) a cada 10 segundos, ou rápidos (9) a cada 15 segundos.
( ) Listras verticais azul e amarela alternadas; marca de tope (se houver) com uma cruz amarela; luz azul e amarela.
( ) Cor preta sobre amarela; marca de tope com 2 cones pretos, um sobre o outro, com os vértices para cima; luz branca com lampejos rápidos ou muito rápidos.
( ) Cor amarela; marca de tope (se houver) em formato de "X" amarelo; luz amarela.`,
    alternativas: {
      A: "(3) (4) (2) (-) (1) (5)",
      B: "(3) (4) (1) (-) (2) (5)",
      C: "(4) (3) (2) (-) (1) (5)",
      D: "(3) (4) (2) (5) (1) (-)",
      E: "(3) (5) (2) (-) (1) (4)",
    },
    correta: "A",
    comentario: `Item a item:
1º Preto com uma ou mais faixas largas horizontais encarnadas, 2 esferas pretas, luz branca com grupo de lampejos (2) → Sinal de perigo isolado (3), seção 13.3.2, alínea d. A marca de tope é obrigatória.
2º Listras verticais encarnadas e brancas, uma esfera encarnada, luz branca isofásica, de ocultação, lampejo longo a cada 10 segundos ou Morse "A" → Sinal de águas seguras (4), seção 13.3.2, alínea e.
3º Amarelo com uma faixa larga horizontal preta, 2 cones pretos ponta a ponta, grupos de lampejos (9) → Sinal cardinal Oeste (2), seção 13.3.2, alínea c.
4º Listras verticais azul e amarela alternadas, cruz amarela, luz azul e amarela → Sinal de novos perigos (seção 13.3.2, alínea g), que não consta da coluna A (-).
5º Preto sobre amarelo, 2 cones pretos com os vértices para cima, lampejos rápidos ou muito rápidos → Sinal cardinal Norte (1), seção 13.3.2, alínea c.
6º Amarelo, marca de tope em "X" amarelo, luz amarela → Sinal especial (5), seção 13.3.2, alínea f.
Sequência: (3) (4) (2) (-) (1) (5).`,
  },
  {
    id: "navegacao-44",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação às boias, à Lista de Faróis, ao AIS AtoN, à numeração de balizamentos e à sinalização de pontes, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "As boias podem garrar, afastando-se de suas posições predeterminadas; por isso não se deve navegar pelas boias nem utilizá-las como referência para a obtenção de linhas de posição, devendo suas informações servir apenas para confirmar a navegação.",
      B: "Na Lista de Faróis, o alcance luminoso é calculado considerando um coeficiente de transparência atmosférica (T) igual a 0,85, correspondente a uma visibilidade meteorológica de 18,4 milhas náuticas, e o alcance geográfico considera os olhos do observador elevados 5 metros sobre o nível do mar.",
      C: "Os AIS AtoN Sintéticos Previstos somente são aceitáveis quando associados a auxílios à navegação fixos, não podendo jamais ser associados a sinais flutuantes; já o AIS AtoN Virtual simula um auxílio à navegação que não existe fisicamente ou o substitui de forma provisória ou temporária.",
      D: "Na numeração de balizamentos, o balizamento encarnado recebe números pares e o verde números ímpares, sendo os alinhamentos identificados por algarismos romanos, em ordem crescente a partir da entrada do porto.",
      E: "Na sinalização visual diurna de pontes, se a navegação for possível em toda a largura do vão livre, o pilar que o limita a boreste recebe um painel com um triângulo equilátero encarnado sólido, com um vértice para cima, e o de bombordo um painel com um quadrado verde sólido.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (seção 13.2.2, alínea d). Não é a resposta.",
      B: "Afirmação correta (seção 13.5, 6ª coluna – Alcances). Não é a resposta.",
      C: "Afirmação correta (seção 13.6, alíneas b e c). Não é a resposta.",
      D: "INCORRETA, portanto é a resposta. Pela seção 13.3.4, alínea c, o balizamento encarnado recebe números ÍMPARES e o verde números PARES, e os alinhamentos são identificados por LETRAS, em ordem alfabética. A numeração é sucessiva e em ordem crescente: para os canais, a partir da entrada nos portos; para os alinhamentos, a partir da boia mais próxima à entrada (alínea d).",
      E: "Afirmação correta (seção 13.4.3, alínea c). Não é a resposta.",
    },
  },
  {
    id: "navegacao-45",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação ao princípio de funcionamento e às características de um radar de navegação, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "O radar de navegação é, normalmente, um radar de onda contínua, que transmite de forma ininterrupta ondas de frequência muito elevada, sendo os ecos recebidos durante a própria transmissão.",
      B: "Os radares de navegação usam a banda S (3 centímetros) para aterragem/aproximação e navegação em águas restritas, e a banda X (10 centímetros) para navegação costeira e de alto-mar.",
      C: "Para uma mesma potência, um radar operando em uma frequência mais alta alcança distâncias maiores que um equipamento que utiliza frequência mais baixa, embora exija uma antena de maiores dimensões.",
      D: "A distância do alvo é determinada pela metade do intervalo de tempo entre a transmissão do pulso e a recepção do eco, multiplicada pela velocidade de propagação das ondas eletromagnéticas, e a marcação é determinada pela orientação da antena no instante de recepção do eco.",
      E: "A frequência de repetição de impulsos (FRI) é a duração de cada pulso de energia de RF transmitido, medida em microssegundos; quanto mais alta a FRI, maior a distância máxima na qual os ecos podem ser recebidos.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. O radar de navegação é um radar de PULSOS: emite pulsos de duração extremamente curta, separados por um intervalo relativamente longo sem transmissão, pois um eco recebido durante a transmissão seria bloqueado pelo forte pulso transmitido (seção 14.1.2, alínea a).",
      B: "Errada. Os comprimentos de onda e os empregos estão trocados: a banda S (10 centímetros) é usada na navegação costeira e de alto-mar, e a banda X (3 centímetros) na aterragem/aproximação e na navegação em águas restritas (seção 14.1.2, alíneas a e c).",
      C: "Errada. Para uma mesma potência, o radar de frequência mais BAIXA alcança distâncias maiores; quanto maior o alcance desejado, menor a frequência, maior o comprimento de onda e maior a antena requerida. Frequências mais altas permitem antenas menores (seção 14.1.2, alínea c – Frequência da Portadora).",
      D: "Correta. É o princípio básico do radar de navegação, descrito na seção 14.1.2, alínea a: a metade do intervalo de tempo entre a transmissão do pulso e a recepção do eco, multiplicada pela velocidade de propagação, fornece a distância; a orientação da antena no instante de recepção do eco fornece a marcação.",
      E: "Errada. A FRI é o número de pulsos transmitidos por segundo; a duração de cada pulso é a largura de pulso. Além disso, é a REDUÇÃO da FRI que aumenta a distância máxima de recepção dos ecos, por prover maior intervalo de tempo entre os pulsos (seção 14.1.2, alínea c).",
    },
  },
  {
    id: "navegacao-46",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Barreto, a bordo de um navio cujo radar de navegação opera com largura de pulso de 0,5 microssegundo e feixe com abertura de 2° no plano horizontal, acompanha dois pequenos alvos situados a 6 milhas náuticas do navio. Sabendo que a velocidade de propagação das ondas eletromagnéticas é de 324 jardas por microssegundo e que o poder de discriminação em marcação, em jardas, é dado por dt = 35,3427 (a x L), sendo "a" a largura horizontal do feixe, em graus, e "L" a distância aos alvos, em milhas náuticas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), o poder de discriminação em distância desse radar e o seu poder de discriminação em marcação na distância considerada são, respectivamente, de aproximadamente:`,
    alternativas: {
      A: "81 jardas e 424 jardas.",
      B: "162 jardas e 424 jardas.",
      C: "81 jardas e 212 jardas.",
      D: "162 jardas e 212 jardas.",
      E: "324 jardas e 848 jardas.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. O poder de discriminação em distância é igual à metade do comprimento de pulso (seção 14.1.2, alínea c – Largura de Pulso): comprimento de pulso = 0,5 x 324 = 162 jardas; metade = 81 jardas. O poder de discriminação em marcação é dt = 35,3427 x 2 x 6 = 424,1 jardas, cerca de 424 jardas (seção 14.1.2, alínea c – Largura do Feixe).",
      B: "Errada. 162 jardas é o comprimento de pulso inteiro (0,5 x 324); o poder de discriminação em distância é a METADE desse valor, isto é, 81 jardas (seção 14.1.2, alínea c). A discriminação em marcação (424 jardas) está certa.",
      C: "Errada. A discriminação em distância (81 jardas) está certa, mas 212 jardas corresponde a usar apenas metade da largura do feixe (35,3427 x 1 x 6). O valor angular do poder de discriminação em marcação é igual à largura total do feixe no plano horizontal: 35,3427 x 2 x 6 = 424 jardas (seção 14.1.2, alínea c).",
      D: "Errada. Os dois valores estão incorretos: 162 jardas é o comprimento de pulso inteiro, e não a sua metade; 212 jardas considera apenas metade da largura do feixe. Os valores corretos são 81 jardas e 424 jardas (seção 14.1.2, alínea c).",
      E: "Errada. 324 jardas é a distância percorrida pela onda em 1 microssegundo inteiro, e 848 jardas é o dobro do valor correto da discriminação em marcação. Os valores corretos são 81 jardas (metade de 0,5 x 324) e 424 jardas (35,3427 x 2 x 6) (seção 14.1.2, alínea c).",
    },
  },
  {
    id: "navegacao-47",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `Considere as afirmativas abaixo sobre as características da propagação das ondas radar, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) O efeito da refração normal, em condições atmosféricas padrões, é encurvar para baixo a trajetória das ondas radar, fazendo com que o horizonte radar exceda o horizonte geográfico em cerca de 14%; a distância ao horizonte radar, em milhas náuticas, é dada por Dr = 2,21 √H, sendo H a altitude da antena, em metros.
II) A super-refração ocorre quando uma camada de ar frio e úmido se superpõe a uma camada estreita de ar mais quente e seco, encurvando para cima a trajetória das ondas radar e diminuindo o alcance máximo de detecção.
III) O horizonte radar não limita, por si mesmo, a distância de detecção de alvos: havendo potência adequada, podem ser detectados alvos além do horizonte radar, desde que suas superfícies de reflexão se elevem acima do referido horizonte.
IV) A atenuação, efeito combinado da dispersão e da absorção da energia do feixe radar ao se propagar pela atmosfera, é maior nas frequências mais baixas, razão pela qual os radares da banda S são mais influenciados pela chuva do que os da banda X.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — seção 14.1.3, alínea a: a refração normal encurva para baixo a trajetória das ondas radar, acompanhando a curvatura da Terra e aumentando o horizonte radar em relação ao geográfico; Dr = 2,21 √H, e o horizonte radar excede o geográfico em cerca de 14%.
II) Falsa — seção 14.1.3, alínea a, itens I e II: a condição descrita (ar frio e úmido sobre camada estreita de ar mais quente e seco, trajetória encurvada para cima, menor alcance) é a SUB-REFRAÇÃO. A super-refração ocorre com uma camada superior de ar quente e seco sobre uma camada de superfície de ar frio e úmido, aumenta a curvatura para baixo e AUMENTA o alcance de detecção.
III) Verdadeira — seção 14.1.3, alínea a: é o que diz o texto, de forma análoga à detecção visual de objetos situados além do horizonte geográfico.
IV) Falsa — seção 14.1.3, alínea d: a atenuação é maior nas frequências mais ALTAS (menores comprimentos de onda). Por isso os radares da faixa de 3 cm (banda X) são mais influenciados pela chuva do que os da faixa de 10 cm (banda S) (seção 14.2.4, alínea b).`,
  },
  {
    id: "navegacao-48",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Figueiredo, observando a tela do radar durante a aproximação a um porto com tráfego intenso, precisa distinguir os ecos verdadeiros das apresentações enganosas. Com relação aos fatores que afetam a interpretação da imagem radar, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "Ecos múltiplos são causados por reflexões múltiplas de pulsos entre o navio e um alvo relativamente próximo, normalmente situado pelo través; o eco falso aparece na mesma marcação que o alvo real, mas em uma distância múltipla da distância correta.",
      B: "O eco indireto ocorre quando a energia refletida pelo alvo se reflete novamente em uma parte da estrutura do navio antes de retornar à antena; aparece sempre na mesma distância que o eco verdadeiro, mas na marcação da superfície refletora intermediária.",
      C: "Obstáculos existentes no próprio navio, como mastros, chaminés e guindastes, que causem obstruções ao feixe radar em sua varredura pelo horizonte, resultam em arcos cegos ou setores cegos, que devem ser bem conhecidos pelos operadores do radar.",
      D: "Se dois objetos na mesma marcação estiverem separados por distância inferior ao poder de discriminação em distância, como pode ocorrer com um rebocador e o navio rebocado, eles podem formar uma só imagem na tela do radar.",
      E: "Os ecos laterais, causados pelos lóbulos secundários do feixe radar, afetam principalmente os alvos distantes e têm a aparência de uma linha radial que se estende do centro da tela até o alvo; para minimizar seu efeito, aumenta-se o ganho.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta (seção 14.2.1, alínea c). Não é a resposta.",
      B: "Afirmação correta (seção 14.2.1, alínea c). Não é a resposta.",
      C: "Afirmação correta (seção 14.2.1, alínea b). Não é a resposta.",
      D: "Afirmação correta (seção 14.2.1, alínea a). Não é a resposta.",
      E: "INCORRETA, portanto é a resposta. Pela seção 14.2.1, alínea c, como o campo energético dos lóbulos secundários é muito fraco, os ecos laterais só afetam os alvos PRÓXIMOS; sua aparência é a de um ARCO DE CÍRCULO (podendo chegar a um semicírculo ou círculo completo, com raio igual à distância do alvo); e, para minimizar seu efeito, DIMINUI-SE o ganho (ou aumenta-se o anti-clutter sea), com cuidado para não fazer desaparecer ecos de alvos pequenos.",
    },
  },
  {
    id: "navegacao-49",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Queiroz, navegando em águas restritas sob visibilidade reduzida, utiliza o radar para determinar a posição do navio. Com relação à precisão das distâncias e marcações radar e aos métodos de obtenção da posição, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "As marcações radar são mais precisas que as distâncias radar, razão pela qual o cruzamento de marcações radar é o método que fornece a posição mais precisa.",
      B: "Considera-se que um radar bem calibrado e corretamente operado fornece distâncias com precisão de 100 jardas até o horizonte radar e marcações com precisão da ordem de 0,5°.",
      C: "Por ordem de precisão, os melhores métodos para obtenção de uma posição usando o radar são: distâncias radar e marcações visuais; cruzamento de distâncias radar; distâncias e marcações radar; e cruzamento de marcações radar.",
      D: "Para medir uma distância radar, seleciona-se a escala de distâncias mais longa possível e opera-se o estrobo de distâncias de modo a tangenciar a borda externa do eco.",
      E: "Ao obter marcações tangentes de alvos de grandes dimensões, deve-se diminuir a metade da largura angular do feixe da marcação tangente da esquerda e somar este mesmo valor à tangente da direita.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. É o contrário: as distâncias radar são mais precisas que as marcações (seção 14.3.1) e têm preferência sobre elas; o cruzamento de marcações radar é o ÚLTIMO método na ordem de precisão (seção 14.3.2).",
      B: "Errada. A precisão das distâncias está certa (100 jardas até o horizonte radar, com decréscimo progressivo além desse ponto), mas considera-se que as marcações radar têm precisão da ordem de 2° a 3° (seção 14.3.1, alíneas a e b).",
      C: "Correta. É exatamente a ordem de precisão apresentada na seção 14.3.2: 1º distâncias radar e marcações visuais; 2º cruzamento de distâncias radar; 3º distâncias e marcações radar; 4º cruzamento de marcações radar.",
      D: "Errada. O procedimento correto é selecionar a escala de distâncias mais CURTA possível e operar o estrobo de distâncias de modo a tangenciar a borda INTERNA do eco (seção 14.3.1, alínea a).",
      E: "Errada. A regra está invertida: SOMA-SE a metade da largura angular do feixe à marcação tangente da esquerda e DIMINUI-SE da tangente da direita o mesmo valor, critério baseado na antena girando no sentido dos ponteiros do relógio (seção 14.3.2, alínea d).",
    },
  },
  {
    id: "navegacao-50",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Prático Sampaio, a bordo de um navio que navega sob visibilidade restrita em área de tráfego intenso, acompanha vários contatos no radar. Considere as afirmativas abaixo sobre o uso do radar para evitar colisão no mar, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) No método do movimento relativo, um contato que apresenta marcação constante e distância diminuindo está em rumo de colisão com o navio.
II) O Ponto de Maior Aproximação (PMA) é obtido tirando-se do ponto fixo de referência (R) uma perpendicular à direção do movimento relativo; o PMA encontra-se na interseção dessa perpendicular com a plotagem relativa.
III) Pela "Regra dos Seis Minutos", a velocidade, em nós, é igual à distância percorrida em 6 minutos, em jardas, dividida por 100.
IV) Os sistemas automáticos de radar anticolisão (ARPA) possuem alarme de risco de colisão baseado na distância do PMA selecionada pelo operador e independente da escala de distância ajustada no PPI, mas não dispensam uma avaliação constante, completada por uma vigilância visual permanente.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
    },
    correta: "E",
    comentario: `I) Verdadeira — seção 14.4.3, alínea i: marcação constante e distância diminuindo significam que o contato está em rumo de colisão com o navio; mesmo que as marcações variem um pouco, por imprecisão das medidas, deve-se admitir que existe risco de colisão (ver também seção 14.4.5).
II) Verdadeira — seção 14.4.2, alínea a: o PMA é obtido tirando-se do ponto fixo de referência (R) uma perpendicular à DMR; está na interseção dessa perpendicular com a plotagem relativa.
III) Falsa — seção 14.4.3, alínea h: a regra descrita é a "Regra dos Três Minutos" (velocidade, em nós, igual à distância percorrida em 3 minutos, em jardas, dividida por 100). Pela "Regra dos Seis Minutos", a velocidade, em nós, é igual à distância percorrida em 6 minutos, em MILHAS, multiplicada por 10.
IV) Verdadeira — seção 14.4.6: entre as vantagens dos sistemas automáticos está o alarme de risco de colisão, baseado na distância do PMA selecionada pelo operador e independente da escala ajustada no PPI; porém, sendo sistemas complexos, sujeitos a falhas e a indicações falsas, não dispensam uma avaliação constante, completada por vigilância visual permanente.`,
  },
);

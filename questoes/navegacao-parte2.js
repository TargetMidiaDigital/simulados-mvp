// Questões elaboradas a partir do livro "Navegação: a Ciência e a Arte – Volume I"
// (Altineu Pires Miguens, DHN, 2ª revisão atualizada, 2023)
// Capítulo 4 – A Posição no Mar. Navegação Costeira (navegacao-14 a 17)
// Capítulo 5 – Navegação Estimada (navegacao-18 a 20)
// Capítulo 6 – Determinação da Posição por Marcações Sucessivas (navegacao-21 e 22)
// Capítulo 7 – Emprego de Linhas de Posição de Segurança (navegacao-23 e 24)
// Capítulo 8 – Uso dos Dados Táticos do Navio na Navegação em Águas Restritas (navegacao-25 a 27)
QUESTOES.push(
  {
    id: "navegacao-14",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Medeiros, a bordo do navio mercante “Serra Azul”, que demandava o porto em navegação em águas restritas, conversava com o Oficial de Quarto sobre as linhas de posição (LDP) que seriam empregadas na entrada. Com relação às LDP utilizadas na navegação costeira e na navegação em águas restritas, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "A marcação visual é a LDP de maior precisão, razão pela qual a reta de marcação deve ser sempre prolongada, na carta náutica, até o objeto marcado.",
      B: "Para a LDP alinhamento, os dois pontos devem ser bem definidos e estar representados na carta náutica, e a altitude do ponto anterior deve ser maior que a do ponto posterior.",
      C: "A isóbata é uma LDP aproximada, mas de grande emprego como LDP de segurança; como os ecobatímetros indicam, muitas vezes, o fundo abaixo da quilha, para se obter a profundidade real é necessário, nesse caso, somar o calado do navio ao valor indicado pelo equipamento.",
      D: "Uma única linha de posição é suficiente para definir a posição do navio, desde que seja identificada com a hora da observação, escrita com quatro dígitos.",
      E: "Para reduzir a profundidade obtida ao Nível de Redução da carta, deve-se somar a essa profundidade a altura da maré no instante de sua medição.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. A LDP de maior precisão é o alinhamento, que não necessita de qualquer instrumento (seção 4.2, alínea a). A marcação visual é, talvez, a LDP mais utilizada, e recomenda-se traçar a reta de marcação apenas nas proximidades da posição estimada do navio, para não “congestionar visualmente” a carta (seção 4.2, alínea b).",
      B: "Errada. Está invertido: a altitude do ponto POSTERIOR deve ser maior que a do ponto anterior (seção 4.2, alínea a).",
      C: "Correta. Seção 4.2, alínea d: a isóbata é uma LDP aproximada, mas tem grande emprego como LDP de segurança; como os ecobatímetros indicam, muitas vezes, o fundo abaixo da quilha, é necessário somar o calado do navio ao valor indicado para obter a profundidade real.",
      D: "Errada. Uma só LDP indica o lugar geométrico das múltiplas posições que o navio pode ocupar, mas não a sua posição (seção 4.2); para determinar a posição é necessário cruzar duas ou mais LDP (seção 4.3).",
      E: "Errada. Para reduzir a profundidade ao Nível de Redução da carta deve-se SUBTRAIR dela a altura da maré no instante da medição (seção 4.2, alínea d).",
    },
  },
  {
    id: "navegacao-15",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação à linha de posição segmento capaz e à determinação da posição por segmentos capazes, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "A observação, com o sextante, do ângulo horizontal entre dois pontos notáveis representados na carta náutica permite o traçado de uma LDP, que será uma circunferência que passa pelos dois pontos e sobre a qual se encontra o navio.",
      B: "O ângulo medido não deve ser inferior a 30°; como regra, não se deve observar ângulos horizontais a uma distância superior a cerca de 2,5 vezes a distância entre os pontos visados.",
      C: "Deve-se evitar a escolha de três pontos que estejam sobre uma circunferência que passe também pela posição do navio, pois, nesse caso, a posição será indeterminada.",
      D: "A posição por segmentos capazes tem a vantagem de prescindir de agulhas, dispensando os cuidados quanto a desvios e declinação magnética, mas, com o navio em movimento, o método exige dois observadores.",
      E: "Os pontos visados devem ser de grande altitude e apresentar apreciável diferença de altitude entre si, para que o ângulo inclinado medido com o sextante se aproxime do ângulo horizontal.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta (seção 4.2, alínea e, e seção 4.4.1). Não é a resposta.",
      B: "Afirmação correta (seção 4.4.1, cuidado b): ângulos menores que 30° conduzem a erros na plotagem, tanto maiores quanto menor for o ângulo. Não é a resposta.",
      C: "Afirmação correta (seção 4.4.3): é a chamada circunferência de indeterminação, em que qualquer ponto atende aos dois ângulos observados. Não é a resposta.",
      D: "Afirmação correta (seção 4.4.4). Não é a resposta.",
      E: "INCORRETA, portanto é a resposta. Pela seção 4.4.1, cuidado a, os pontos visados devem ser próximos ao horizonte (baixa altitude) e não deve existir diferença de altitude apreciável entre eles; se forem de grande altitude ou diferirem muito em altitude, a diferença entre o ângulo inclinado e o ângulo horizontal será relevante, introduzindo erro significativo na LDP plotada.",
    },
  },
  {
    id: "navegacao-16",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `O Prático Bittencourt, a bordo de um navio graneleiro em navegação costeira, acompanhava a determinação da posição pelo Oficial de Quarto. Considere as afirmativas abaixo, relativas às técnicas da navegação costeira, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) De modo geral, o ângulo de cruzamento ideal das retas deve ser de 180°/n, sendo n o número de LDP; quando se determina a posição por interseção de duas LDP, devem ser evitados ângulos de cruzamento menores que 30° ou maiores que 150°.
II) Utilizando duas retas de marcação, deve-se visar, sempre que possível, um ponto pela proa (ou pela popa) e outro pelo través, para melhor definir o caimento e o avanço (ou atraso).
III) Se o triângulo de incerteza for próximo de um perigo, adota-se para a posição do navio o centro do triângulo, por ser o ponto mais provável, dispensando-se nova determinação da posição.
IV) Na sequência mais usual de observação de marcações, observam-se primeiro os pontos próximos do través e, por último, os próximos da proa ou da popa, devendo a hora da posição corresponder à LDP que varia mais lentamente.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e III) são verdadeiras.",
      B: "Apenas as afirmativas I) e II) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      E: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `Item a item:
I) Verdadeira — seção 4.5.3, alínea c: o ângulo de cruzamento ideal das retas é de 180°/n (n = número de LDP); com duas LDP o ângulo ótimo é 90°, devendo ser evitados ângulos de cruzamento menores que 30° ou maiores que 150°.
II) Verdadeira — seção 4.5.3, alínea d: com duas retas de marcação, visar um ponto pela proa (ou popa) e outro pelo través define melhor o caimento e o avanço (ou atraso).
III) Falsa — seção 4.5.4: se o triângulo de incerteza for próximo de um perigo, adota-se para a posição do navio o VÉRTICE mais próximo do perigo e obtém-se outra posição imediatamente, para confirmação. O centro é adotado quando o triângulo é pequeno.
IV) Falsa — seção 4.5.5: a sequência mais usual é observar primeiro os pontos próximos da proa ou da popa e, por último, os próximos do través (cujas marcações variam mais rapidamente), adotando a hora da última visada. Em qualquer caso, a hora da posição deve corresponder à LDP que varia mais RAPIDAMENTE.`,
  },
  {
    id: "navegacao-17",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação aos erros da posição observada, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Erros sistemáticos são aqueles que se reproduzem identicamente toda vez que uma observação é repetida nas mesmas circunstâncias, como os erros instrumentais dos sextantes e radares, e podem ser corrigidos.",
      B: "Erros acidentais são enganos do observador, como leituras erradas dos instrumentos, entradas erradas em tábuas e inversões de sinais, sendo os mais facilmente detectáveis pelo presumível absurdo dos resultados a que conduzem.",
      C: "Erro provável de uma observação é aquele cuja probabilidade de ocorrer é de 95%, sendo aproximadamente igual a 3 vezes o erro médio quadrático.",
      D: "A zona de confiança de 95% de probabilidade é uma faixa centrada na LDP, com largura dupla da zona de confiança de 50% de probabilidade.",
      E: "A precisão do ponto resultante da interseção de duas LDP é tanto maior quanto mais próximo de 30° se encontrar o ângulo de interseção entre elas.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Apêndice ao Capítulo 4, item 2.2, alínea a: os erros sistemáticos reproduzem-se identicamente toda vez que a observação é repetida nas mesmas circunstâncias (caso dos erros instrumentais dos sextantes e radares); de forma geral, o erro sistemático pode ser corrigido, interpondo-se “sinal” contrário à tendência que introduz.",
      B: "Errada. A descrição é a dos erros GROSSEIROS (Apêndice ao Capítulo 4, item 2.2, alínea b). Erros acidentais são os de grandeza e sinal imprevisíveis, aleatórios, sempre presentes em qualquer observação e normalmente indetectáveis (alínea c).",
      C: "Errada. Erro provável é aquele cuja probabilidade de ocorrer é de 50%, sendo aproximadamente igual a 2/3 do erro médio quadrático (Apêndice ao Capítulo 4, item 4). A margem de 95% corresponde a 3 vezes o erro provável.",
      D: "Errada. A zona de confiança de 95% é uma faixa centrada na LDP com largura TRIPLA da zona dos 50% (Apêndice ao Capítulo 4, item 4), pois E(95%) = 3E(50%).",
      E: "Errada. A precisão do ponto é tanto maior quanto menor for o erro de cada LDP e quanto mais próximo de 90° se encontrar o ângulo de interseção entre as LDP (Apêndice ao Capítulo 4, item 5.2).",
    },
  },
  {
    id: "navegacao-18",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Nogueira embarcou no navio mercante “Pedra Branca”, que navega com velocidade constante de 15 nós. Exatamente 2 horas após a última posição observada, mantidos o rumo e a velocidade, o Oficial de Quarto plotou a posição estimada do navio. Aplicando a “regra dos três minutos”, a “regra dos seis minutos” e o valor admitido empiricamente para a consistência da posição estimada, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção que apresenta, respectivamente, a distância percorrida pelo navio em 3 minutos, a distância percorrida em 6 minutos e a consistência dessa posição estimada:`,
    alternativas: {
      A: "150 jardas; 1,5 milha; 3,0 milhas.",
      B: "1.500 jardas; 2,5 milhas; 3,0 milhas.",
      C: "1.500 jardas; 1,5 milha; 1,5 milha.",
      D: "1.500 jardas; 1,5 milha; 3,0 milhas.",
      E: "750 jardas; 1,5 milha; 0,3 milha.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. Pela regra dos três minutos (seção 5.2), a distância em jardas percorrida em 3 minutos é a velocidade em nós multiplicada por 100 (e não por 10): 15 x 100 = 1.500 jardas.",
      B: "Errada. Pela regra dos seis minutos (seção 5.2), a distância em milhas percorrida em 6 minutos é a velocidade em nós dividida por 10: 15 ÷ 10 = 1,5 milha, e não 2,5 milhas.",
      C: "Errada. As duas primeiras distâncias estão certas, mas a consistência é de 0,1 (10%) da distância percorrida desde a última posição observada (seção 5.8): em 2 horas a 15 nós o navio percorreu 30 milhas, logo a consistência é de 3,0 milhas (1,5 milha seria 5%).",
      D: "Correta. Regra dos três minutos (seção 5.2): 15 nós x 100 = 1.500 jardas em 3 minutos. Regra dos seis minutos (seção 5.2): 15 nós ÷ 10 = 1,5 milha em 6 minutos. Consistência (seção 5.8): 0,1 da distância percorrida desde a última posição observada = 0,1 x (15 nós x 2 h = 30 milhas) = 3,0 milhas.",
      E: "Errada. Em 3 minutos o navio percorre 15 x 100 = 1.500 jardas (seção 5.2), e a consistência é de 10% (e não 1%) da distância percorrida: 0,1 x 30 = 3,0 milhas (seção 5.8).",
    },
  },
  {
    id: "navegacao-19",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Com relação às regras para a navegação estimada, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "Uma posição estimada deve ser plotada nas horas inteiras (e nas meias horas), bem como a cada mudança de rumo e a cada mudança de velocidade.",
      B: "Uma LDP cruzando uma linha de rumo constitui uma posição determinada, devendo a plotagem estimada ser ajustada sempre que se obtiver uma única linha de posição.",
      C: "Uma posição estimada deve ser plotada para o instante em que se obtém uma posição determinada e, também, para o instante em que se obtém uma única linha de posição.",
      D: "Uma nova linha de rumo e uma nova plotagem estimada devem ser originadas de cada posição determinada obtida e plotada na carta.",
      E: "A frequência de plotagem de uma posição estimada é função da escala da carta náutica que estiver sendo utilizada e das peculiaridades da navegação que se pratica, adotando-se intervalos de tempo menores na navegação em águas restritas.",
    },
    correta: "B",
    explicacoes: {
      A: "Afirmação correta (seção 5.3, regras 1, 2 e 3). Não é a resposta.",
      B: "INCORRETA, portanto é a resposta. As notas da seção 5.3 dizem o contrário: não se ajusta uma plotagem estimada com uma única linha de posição, e uma LDP cruzando uma linha de rumo NÃO constitui uma posição determinada, pois uma linha de rumo não é LDP.",
      C: "Afirmação correta (seção 5.3, regras 4 e 5). Não é a resposta.",
      D: "Afirmação correta (seção 5.3, regra 6). Não é a resposta.",
      E: "Afirmação correta (seção 5.3, observação sobre a regra 1): os intervalos de 1 hora ou 1/2 hora são os normais para a navegação oceânica e costeira; intervalos menores são adotados em águas restritas. Não é a resposta.",
    },
  },
  {
    id: "navegacao-20",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `Durante a aproximação ao ponto de espera de prático, o Prático Barcelos comparou a posição observada do navio com a posição estimada para o mesmo instante, a fim de avaliar o efeito da corrente. Com relação aos termos empregados na navegação estimada, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Rumo da corrente é a direção de onde vem a corrente, contada a partir do Norte Verdadeiro, de 000° a 360°, no sentido horário.",
      B: "Há avanço quando a distância percorrida no fundo é menor que a distância percorrida na superfície, e atraso quando a distância percorrida no fundo é maior.",
      C: "Velocidade no fundo é a distância percorrida pelo navio, em 1 hora, na superfície, e a velocidade do navio é a resultante da velocidade no fundo com a velocidade da corrente.",
      D: "Posição carteada é a posição presente obtida pela aplicação, a partir de uma posição observada, de vetores definidos pelo rumo no fundo e pela distância percorrida em relação ao fundo.",
      E: "Abatimento é o ângulo entre o rumo na superfície e o rumo no fundo, contado para BE ou para BB, a partir do rumo na superfície.",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. O rumo da corrente é a direção PARA ONDE flui a corrente, contada a partir do Norte Verdadeiro, de 000° a 360°, no sentido horário (seção 5.5).",
      B: "Errada. Está invertido: há avanço quando a distância percorrida no fundo é MAIOR que a percorrida na superfície (velocidade no fundo maior que a velocidade do navio), e atraso quando é menor (seção 5.5).",
      C: "Errada. As definições estão trocadas: velocidade do navio é a distância percorrida em 1 hora na superfície; velocidade no fundo é a distância percorrida em 1 hora em relação ao fundo, sendo a resultante da velocidade do navio com a velocidade da corrente (seção 5.5).",
      D: "Errada. Essa é a definição de posição estimada corrigida. Posição carteada é a posição FUTURA que se prevê que o navio ocupará em horas futuras, representada por um pequeno traço cortando o rumo, com a indicação da hora (seção 5.5).",
      E: "Correta. É a definição da seção 5.5: abatimento (abt) é o ângulo entre o rumo na superfície e o rumo no fundo, contado para BE ou para BB, a partir do rumo na superfície.",
    },
  },
  {
    id: "navegacao-21",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O navio mercante “Ponta Negra” navega no rumo verdadeiro 090°, com velocidade constante de 12 nós, em área onde não há corrente. O Oficial de Quarto obteve as seguintes marcações sucessivas de um farol representado na carta náutica da área: às 0800, marcação 117° (marcação polar 27° BE); às 0810, marcação 124° (marcação polar 34° BE); e às 0820, marcação 135° (marcação polar 45° BE). Aplicando as propriedades da Série de Traub, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção que apresenta, respectivamente, a distância do farol pelo través e a hora em que o farol estará pelo través do navio:`,
    alternativas: {
      A: "4,0 milhas; 0840.",
      B: "2,0 milhas; 0830.",
      C: "4,0 milhas; 0830.",
      D: "2,0 milhas; 0840.",
      E: "6,0 milhas; 0850.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Seção 6.3.4, alínea b (Série de Traub: 14°, 16°, 18°, 22°, 27°, 34°, 45°, 63° e 90°). As marcações foram tomadas a intervalos iguais de 10 minutos; a distância navegada entre duas marcações consecutivas é d = 12 nós x 10 min = 12 x (10/60) = 2,0 milhas. A distância pelo través é o dobro: dt = 2d = 4,0 milhas. Após a marcação polar de 45° (0820) ainda faltam as de 63° e 90°, ou seja, dois intervalos (2d = 4,0 milhas, 20 minutos): o farol estará pelo través às 0840.",
      B: "Errada. 2,0 milhas é a distância d navegada entre duas marcações consecutivas (12 nós x 10 min); a distância pelo través é 2d = 4,0 milhas. Além disso, depois de 45° faltam duas marcações da série (63° e 90°), isto é, 20 minutos, e não 10 (seção 6.3.4, alínea b).",
      C: "Errada. A distância pelo través está certa (2d = 4,0 milhas), mas depois da marcação polar de 45° ainda faltam as de 63° e 90°, ou seja, dois intervalos de 10 minutos: o través ocorre às 0840, e não às 0830 (seção 6.3.4, alínea b).",
      D: "Errada. A hora está certa (0840), mas 2,0 milhas é a distância navegada entre duas marcações consecutivas; a distância pelo través é o dobro, 4,0 milhas (seção 6.3.4, alínea b, propriedade b).",
      E: "Errada. A distância pelo través é 2d = 2 x 2,0 = 4,0 milhas, e faltam apenas dois intervalos (63° e 90°) após a marcação de 45°, ou seja, través às 0840 (seção 6.3.4, alínea b).",
    },
  },
  {
    id: "navegacao-22",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "afirmativas",
    enunciado: `Navegando ao longo de um trecho de costa em que só era possível identificar, de cada vez, um único ponto notável representado na carta náutica, o Oficial de Quarto passou a determinar a posição por marcações sucessivas. Considere as afirmativas abaixo, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I):

I) O transporte de linhas de posição é um processo estimado, devendo ser evitado, na navegação costeira, o transporte de LDP com diferenças de tempo superiores a 30 minutos.
II) A determinação da posição por marcações sucessivas constitui um processo aproximado, melhor que a navegação estimada pura, porém menos preciso que uma boa determinação de posição por LDP simultâneas.
III) Na posição por marcações duplas, a distância do navio ao ponto observado, no instante da primeira marcação, é igual ao dobro da distância percorrida pelo navio no intervalo de tempo entre as marcações.
IV) Havendo corrente, a Série de Traub não pode ser utilizada para determinação de distâncias e posições; porém, se os intervalos de tempo entre duas marcações consecutivas são decrescentes, há uma corrente empurrando o navio na direção do ponto marcado.

Assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas II) e III) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `Item a item:
I) Verdadeira — seção 6.2: durante o intervalo de tempo o navio pode ter rumo e velocidade alterados por corrente, vento, estado do mar, erros do timoneiro etc.; por isso o transporte de LDP é um processo estimado, devendo ser evitadas diferenças de tempo superiores a 30 minutos.
II) Verdadeira — seção 6.3.2, observação a.
III) Falsa — seção 6.3.4, alínea a: nas marcações duplas (segunda marcação polar igual ao dobro da primeira), a distância do navio ao ponto observado no instante da SEGUNDA marcação é IGUAL à distância percorrida pelo navio no intervalo de tempo entre as marcações (triângulo isósceles).
IV) Verdadeira — seção 6.3.4, alínea b, observações finais: havendo corrente, a Série de Traub só serve para dar indicações sobre a corrente; intervalos decrescentes indicam corrente empurrando o navio na direção do ponto marcado, e intervalos que aumentam indicam corrente afastando o navio.`,
  },
  {
    id: "navegacao-23",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `No planejamento da entrada de um navio de grande calado, o Prático Figueiredo verificou que a carta náutica da área havia sido “iluminada” pela equipe de navegação. Com relação ao conceito de navegação de segurança, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Os limites das áreas perigosas assinalados ao se “iluminar” a carta são os mesmos para qualquer navio, pois dependem exclusivamente das profundidades representadas na carta náutica.",
      B: "Pelo critério da distância ao perigo mais próximo, a linha de perigo é traçada sobre a isóbata correspondente ao calado do navio, cabendo ao Encarregado de Navegação estipular a lazeira mínima abaixo da quilha.",
      C: "Pelo critério das profundidades, a linha de perigo é traçada com base numa profundidade igual ao calado do navio mais a margem de segurança estabelecida (ou 15% do calado do navio, quando esta percentagem for maior que a margem estabelecida).",
      D: "O emprego de linhas de posição de segurança só é possível quando a posição do navio está perfeitamente determinada por, pelo menos, três LDP simultâneas.",
      E: "As luzes de setor constituem as mais precisas LDP de segurança, pois oferecem precisão de navegação superior à sensibilidade de um alinhamento convencional bem projetado.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. Os limites das áreas perigosas variam de navio para navio, dependendo, principalmente, do seu calado, comprimento, boca e características de manobra (seção 7.1).",
      B: "Errada. Pelo critério da distância ao perigo mais próximo, o Comandante estipula a menor distância que se deseja passar dos perigos, e a linha de perigo é traçada unindo pontos situados a essa distância dos perigos da área (seção 7.1). Isóbata e lazeira abaixo da quilha dizem respeito ao critério das profundidades.",
      C: "Correta. Seção 7.1: pelo critério das profundidades, a linha de perigo é traçada com base numa profundidade igual ao calado do navio mais a margem de segurança estabelecida (ou 15% do calado, quando esta percentagem for maior que a margem estabelecida), que é a lazeira mínima de água desejada abaixo da quilha.",
      D: "Errada. O emprego de LDP como limite de segurança permite ao navio passar de modo seguro próximo a perigos mesmo SEM ter a posição perfeitamente determinada (seções 7.1 e 7.2).",
      E: "Errada. Os alinhamentos, em particular os estabelecidos especificamente como auxílio à navegação, constituem as mais precisas LDP de segurança (seção 7.2.1); uma luz de setor não pode dar precisão comparável à sensibilidade de um alinhamento convencional bem projetado (seção 7.2.2).",
    },
  },
  {
    id: "navegacao-24",
    prova: "Navegação",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `Coloque (V) verdadeiro ou (F) falso nas afirmativas abaixo, relativas às linhas de posição de segurança, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), e assinale a opção que apresenta a sequência correta:

( ) A marcação de segurança é sempre determinada do navio para o ponto de referência, isto é, do largo para terra, nunca sendo a recíproca.
( ) Quando o navegante estiver se aproximando de uma luz de setor, deve manter o setor verde a boreste e o setor encarnado a bombordo.
( ) Um ângulo vertical medido para um objeto de altitude conhecida determina uma circunferência cujo raio d é dado por d = h cotg α, sendo α o ângulo vertical subtendido pelo objeto e h a altitude do objeto.
( ) O ângulo horizontal de segurança só pode ser obtido com o auxílio de um sextante, não se admitindo a sua obtenção pela diferença de marcações simultâneas.
( ) Uma luz de setor tem a vantagem de requerer uma única estrutura, ao passo que um alinhamento requer duas, e pode indicar limites navegáveis, o que é impossível para um alinhamento convencional.`,
    alternativas: {
      A: "(V) (V) (V) (F) (F)",
      B: "(V) (F) (V) (F) (V)",
      C: "(F) (F) (V) (V) (V)",
      D: "(V) (F) (F) (F) (V)",
      E: "(F) (V) (V) (F) (V)",
    },
    correta: "B",
    comentario: `Item a item:
1º Verdadeiro — seção 7.2.2, alínea a: a marcação de segurança é sempre determinada do navio para o ponto de referência, isto é, do largo para terra (nunca é a recíproca); para obtê-la, traça-se do ponto de referência uma tangente ao limite da área perigosa.
2º Falso — seção 7.2.2 (luzes de setor): aproximando-se da luz de setor, o navegante deve manter o setor verde a BOMBORDO e o setor encarnado a BORESTE; o canal é normalmente coberto por um setor estreito de cor branca.
3º Verdadeiro — seção 7.2.4: d = h cotg α.
4º Falso — seção 7.2.5: o ângulo horizontal pode ser obtido com o auxílio de um sextante OU pela diferença de marcações (verdadeiras, relativas ou da agulha) simultâneas.
5º Verdadeiro — seção 7.2.2 (luzes de setor): a luz de setor requer uma única estrutura e pode indicar limites navegáveis, embora não dê precisão comparável à de um alinhamento convencional bem projetado.
Sequência: (V) (F) (V) (F) (V).`,
  },
  {
    id: "navegacao-25",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Queiroz, antes de iniciar a manobra de entrada, consultou no passadiço as características de manobra (dados táticos) do navio. Com relação à curva de giro e seus elementos, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção correta:`,
    alternativas: {
      A: "Avanço é a distância medida na direção perpendicular ao rumo inicial, desde o ponto em que o leme foi carregado até a proa ter atingido o novo rumo, sendo máximo quando a guinada é de 180°.",
      B: "Diâmetro final é a distância medida na direção perpendicular ao rumo inicial, numa guinada de 180°, sendo sempre maior que o diâmetro tático.",
      C: "O avanço, o diâmetro tático, o afastamento e o tempo de evolução aumentam com o aumento do ângulo de leme, ao passo que o ângulo de deriva diminui.",
      D: "O navio efetua o movimento de rotação em torno do seu centro de giro, que, normalmente, está a 1/3 do comprimento do navio, a partir de vante, sobre o seu eixo longitudinal.",
      E: "Ao se carregar o leme para um dos bordos, o navio começa imediatamente a ganhar caminho para o bordo da guinada, e o abatimento é o caimento do navio para esse mesmo bordo, no início da evolução.",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. A definição apresentada é a de afastamento. Avanço é a distância medida na direção do rumo inicial, desde o ponto em que o leme foi carregado até a proa ter guinado para o novo rumo, e é máximo quando a guinada é de 90° (seção 8.2).",
      B: "Errada. A distância medida na direção perpendicular ao rumo inicial, numa guinada de 180°, é o diâmetro tático (afastamento máximo). Diâmetro final é o diâmetro do arco de circunferência descrito na parte final da trajetória pelo navio que girou 360° com ângulo de leme constante, e é sempre MENOR que o diâmetro tático (seção 8.2).",
      C: "Errada. O avanço, o diâmetro tático, o afastamento e o tempo de evolução DIMINUEM com o aumento do ângulo de leme (seção 8.3, alínea c), e o ângulo de deriva AUMENTA com o aumento do ângulo de leme (seção 8.3, alínea d).",
      D: "Correta. Seção 8.2: o navio efetua o movimento de rotação em torno do seu centro de giro, que, normalmente, está a 1/3 do comprimento do navio, a partir de vante, sobre o seu eixo longitudinal; a situação ideal é o centro de giro estar localizado no passadiço.",
      E: "Errada. O navio só começa a ganhar caminho para o bordo da guinada depois de avançar cerca de duas a três vezes o seu comprimento (seção 8.3, alínea a), e o abatimento é o caimento do navio para o bordo CONTRÁRIO ao da guinada, no início da evolução (seção 8.2).",
    },
  },
  {
    id: "navegacao-26",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `No planejamento da navegação em um canal estreito, a derrota prevista apresenta, em um ponto de inflexão, uma guinada de 55°. A Tabela de Dados Táticos do navio, para a velocidade e o ângulo de leme que serão usados na manobra, fornece os seguintes dados: para guinada de 45°, avanço de 270 jardas e afastamento de 60 jardas; para guinada de 60°, avanço de 310 jardas e afastamento de 110 jardas. Interpolando linearmente entre os dados tabelados, conforme o procedimento para determinação do ponto de guinada descrito por Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção que apresenta, respectivamente, os valores aproximados do avanço e do afastamento para essa guinada:`,
    alternativas: {
      A: "283 jardas e 77 jardas.",
      B: "290 jardas e 85 jardas.",
      C: "297 jardas e 93 jardas.",
      D: "93 jardas e 297 jardas.",
      E: "297 jardas e 77 jardas.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. Esses são os valores para uma guinada de 50° (1/3 do intervalo entre 45° e 60°), como no exemplo da seção 8.7. Para 55° a fração é 10/15 = 2/3 do intervalo.",
      B: "Errada. Esses valores são a média simples entre as duas linhas da tabela, que corresponderia a uma guinada de 52,5°. Para 55° a fração do intervalo é 10/15 (seção 8.7).",
      C: "Correta. Seção 8.7 (interpolação linear na Tabela de Dados Táticos): a guinada de 55° está a 10° de 45°, num intervalo de 15° (fração 10/15). Avanço = 270 + (10/15) x (310 – 270) = 270 + 26,7 = 296,7, ou seja, cerca de 297 jardas. Afastamento = 60 + (10/15) x (110 – 60) = 60 + 33,3 = 93,3, ou seja, cerca de 93 jardas.",
      D: "Errada. Os valores estão trocados: o avanço (medido na direção do rumo inicial) é de cerca de 297 jardas, e o afastamento (medido na direção perpendicular ao rumo inicial) é de cerca de 93 jardas (seções 8.2 e 8.7).",
      E: "Errada. O avanço está certo (297 jardas), mas 77 jardas é o afastamento para uma guinada de 50°; para 55°, afastamento = 60 + (10/15) x 50 = 93 jardas (seção 8.7).",
    },
  },
  {
    id: "navegacao-27",
    prova: "Navegação",
    tema: "Navegação",
    enunciado: `O Prático Valadares foi designado para conduzir um navio até o ponto de fundeio pré-selecionado em um fundeadouro congestionado. Com relação ao fundeio de precisão, de acordo com Altineu Pires Miguens, no livro Navegação: a Ciência e a Arte (Volume I), assinale a opção INCORRETA:`,
    alternativas: {
      A: "O raio do Círculo de Giro do Navio (CGN) é igual à distância escovém–passadiço mais o comprimento da amarra utilizado, e as posições de controle do fundeio devem, após a plotagem, localizar-se dentro do CGN.",
      B: "A linha de perigo é normalmente a isóbata correspondente a uma profundidade igual ao calado do navio mais 6 pés (aproximadamente 1,8 m), lazeira mínima de água que se pode admitir, abaixo da quilha, na baixa-mar.",
      C: "Normalmente será usado um comprimento de amarra (filame) correspondente a 5 a 7 vezes a profundidade do local, sabendo-se que um quartel de amarra mede 15 braças (27,4 m).",
      D: "Os círculos de distância são centrados no ponto de fundeio, tendo como zero uma distância do ponto de fundeio igual à distância escovém–passadiço do navio.",
      E: "Se tudo correr bem, o ferro deve ser largado dentro de um círculo de 50 jardas de raio com centro no ponto de fundeio escolhido; após o fundeio, a posição do navio deve ser verificada a cada 15 ou 30 minutos.",
    },
    correta: "A",
    explicacoes: {
      A: "INCORRETA, portanto é a resposta. Pela seção 8.9, alínea d, o raio do CGN é igual ao COMPRIMENTO DO NAVIO mais o comprimento da amarra (filame) e representa a figura descrita pela popa; a soma da distância escovém–passadiço com o comprimento da amarra é o raio do Círculo de Giro do Passadiço (CGP), e é dentro do CGP que devem localizar-se as posições de controle do fundeio (fora dele, confirmada a posição, o navio está garrando).",
      B: "Afirmação correta (seção 8.9, alínea a, item 1). Não é a resposta.",
      C: "Afirmação correta (seção 8.9, alínea b, item 5). Não é a resposta.",
      D: "Afirmação correta (seção 8.9, alínea b, item 7): deseja-se largar o ferro quando o escovém estiver sobre o ponto de fundeio, mas a posição determinada corresponde à do passadiço. Não é a resposta.",
      E: "Afirmação correta (seção 8.9, alíneas c e d). Não é a resposta.",
    },
  },
);

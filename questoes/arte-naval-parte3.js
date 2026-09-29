// Questões elaboradas a partir do livro "Arte Naval" (Maurílio M. Fonseca, ed. 2019) —
// Capítulo 8 (Trabalhos do Marinheiro) e Capítulo 10 (Aparelho de Fundear e Suspender).
// Ids artenaval-26 a artenaval-37. Explicações elaboradas com base no texto do livro.
QUESTOES.push(
  {
    id: "artenaval-26",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Tavares, ao supervisionar a passagem de uma espia com alça provisória feita por lais de guia, lembrou à guarnição que nenhum nó, volta ou costura é tão resistente quanto o próprio cabo. De acordo com o quadro da Columbian Rope Company reproduzido por Maurílio M. Fonseca, no livro Arte Naval, a resistência aproximada de um lais de guia, em percentagem da resistência do próprio cabo (novo), é de:",
    alternativas: {
      A: "100%",
      B: "85%",
      C: "76%",
      D: "60%",
      E: "45%",
    },
    correta: "D",
    explicacoes: {
      A: "Errada. 100% é a resistência atribuída, no quadro do art. 8.2, ao cabo seco e à costura de mão; o lais de guia fica bem abaixo disso.",
      B: "Errada. 85% é o valor da costura redonda no quadro do art. 8.2, não do lais de guia.",
      C: "Errada. 76% corresponde à volta de fateixa (art. 8.2).",
      D: "Correta. Segundo o quadro do art. 8.2, o lais de guia (assim como a volta de fiel) conserva cerca de 60% da resistência do cabo; o art. 8.24 o chama de “rei dos nós”, pois é dado com presteza e nunca recorre.",
      E: "Errada. 45% é a resistência do nó direito e da meia-volta (art. 8.2); o art. 8.4 lembra que um cabo com meia-volta perde mais da metade de sua força.",
    },
  },
  {
    id: "artenaval-27",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `Associe os nós e voltas da coluna A com as características e aplicações da coluna B, de acordo com Maurílio M. Fonseca, no livro Arte Naval:

COLUNA A
1) Lais de guia
2) Volta de fiel dobrada
3) Nó de escota dobrado
4) Nó direito
5) Balso de calafate

COLUNA B
( ) “Rei dos nós”; forma uma alça ou bolso de qualquer tamanho, que não corre como um laço.
( ) Usado para emendar duas espias, especialmente quando são de tamanhos diferentes; neste caso a espia de maior grossura forma a alça.
( ) Muito usado para aguentar um homem que trabalha no costado ou num mastro, podendo ele ficar com as mãos livres.
( ) Nunca deve ser empregado para unir cabos que trabalham em aparelhos de laborar ou para emenda de espias; muito usado para amarrar os rizes das velas.
( ) Nunca recorre; muito usada para dar volta aos fiéis das macas, nos pés-de-carneiro, e para aboçar um cabo.
( ) Volta que lembra o número oito, dada no chicote do tirador de uma talha para não deixar desgurnir.`,
    alternativas: {
      A: "(1) (3) (5) (4) (2) (-)",
      B: "(5) (3) (1) (4) (2) (-)",
      C: "(1) (4) (5) (3) (-) (2)",
      D: "(1) (3) (2) (4) (5) (-)",
      E: "(5) (1) (3) (4) (2) (-)",
    },
    correta: "A",
    comentario: `Item a item:
1º “Rei dos nós”, alça que não corre como laço → Lais de guia (1), art. 8.24.
2º Emendar duas espias de tamanhos diferentes, a mais grossa formando a alça → Nó de escota dobrado (3), art. 8.40.
3º Aguentar um homem no costado ou mastro, com as mãos livres → Balso de calafate (5), art. 8.26.
4º Nunca usado em cabos de laborar nem em emenda de espias; amarra os rizes → Nó direito (4), art. 8.37.
5º Nunca recorre; fiéis das macas, pés-de-carneiro, aboçar um cabo → Volta de fiel dobrada (2), art. 8.8.
6º Volta em forma de oito, no chicote do tirador de uma talha → Volta de fiador (art. 8.5), que não consta da coluna A (-).`,
  },
  {
    id: "artenaval-28",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Meireles, a bordo do navio mercante “Itaperuna”, acompanhou a faina de amarração no cais, na qual as espias foram rondadas pelo cabrestante e depois transferidas para os cabeços. Com relação a essas manobras com cabos, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "Ao dar volta a uma espia em dois cabeços, com voltas falidas, se a espia é de cabo de aço abotoa-se sempre; se é de fibra, remata-se com um cote em um dos cabeços ou abotoam-se as duas voltas mais altas.",
      B: "Quando duas espias usam um mesmo cabeço, a segunda é sempre passada por dentro da alça da primeira antes de ir ao cabeço, de modo que qualquer das duas possa ser retirada sem interferir na outra.",
      C: "A boça usada para aboçar um cabo deve ser de diâmetro menor que o cabo a aboçar; suas voltas redondas podem ser dadas no sentido da cocha ou em sentido contrário, o que não influi na resistência da amarração.",
      D: "Um cabo de aço pode ser aboçado com um cabo de fibra de boa qualidade, sendo preferível, contudo, aboçá-lo por meio de uma pequena corrente.",
      E: "A trapa de duas pernadas tem a mesma função da boça de uma pernada, porém é mais segura e não dá torção na espia, evitando que venha a morder.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 8.141: nos cabeços dão-se voltas falidas; cabo de fibra remata-se com cote ou abotoando as duas voltas mais altas; cabo de aço abotoa-se sempre). Não é a resposta.",
      B: "Afirmação correta (art. 8.139: a segunda espia é passada por dentro da alça da primeira antes de ir ao cabeço; faz-se o mesmo para três espias). Não é a resposta.",
      C: "Afirmação correta (art. 8.142: toma-se um cabo solteiro de diâmetro menor que o cabo a aboçar; as voltas redondas podem ser no sentido da cocha ou contrário, sem influir na resistência). Não é a resposta.",
      D: "INCORRETA. O art. 8.142 é taxativo: “Nunca se aboça um cabo de aço com um cabo de fibra.” Usa-se outro cabo de aço ou uma pequena corrente presa por manilha, preferindo-se em geral a corrente, com o cuidado de que ela pode coçar e amassar os cordões do cabo de aço.",
      E: "Afirmação correta (art. 8.143: a trapa de duas pernadas é mais segura que a boça de uma pernada e não dá torção na espia). Não é a resposta.",
    },
  },
  {
    id: "artenaval-29",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `O Contramestre do navio “Guaporé” recebeu ordem de emendar dois cabos de fibra para uso em um aparelho de laborar e ficou em dúvida sobre o tipo de costura a empregar. Com relação às costuras em cabos de fibra, de acordo com Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) A costura redonda é o mais forte meio de unir dois cabos, mas não pode ser empregada em cabos de laborar, pois faz o cabo duplicar de diâmetro naquele ponto, expondo os cordões a um atrito extra.
II) Na costura de laborar, descocha-se um cordão de cada cabo, substituindo-o por um cordão do outro cabo, de modo que a emenda fica com o mesmo diâmetro do cabo original; ela é um pouco mais fraca e exige mais cabo que a costura redonda.
III) De modo geral, considera-se que uma costura, redonda ou de laborar, diminui a resistência do cabo de trinta a quarenta por cento.
IV) Para fazer uma costura de laborar, descocham-se os chicotes em um comprimento de cerca de três vezes a circunferência dos cabos.

Considerando as afirmativas acima, assinale a alternativa correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e III) são verdadeiras.",
      C: "Apenas as afirmativas II) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — art. 8.79: a costura redonda é o mais forte meio de unir dois cabos, mas não serve para cabos de laborar porque duplica o diâmetro no ponto da emenda, expondo os cordões a atrito extra.
II) Verdadeira — arts. 8.78a e 8.81: na costura de laborar substitui-se um cordão de cada cabo pelo cordão correspondente do outro, mantendo o diâmetro original para gurnir nos gornes; é um pouco mais fraca e exige mais cabo que a costura redonda.
III) Falsa — art. 8.78b: considera-se que a costura, redonda ou de laborar, diminui a resistência do cabo de dez a quinze por cento (e não de trinta a quarenta), dependendo da habilidade de quem a faz.
IV) Falsa — art. 8.81: na costura de laborar os chicotes são descochados em cerca de 12 a 15 vezes a circunferência dos cabos; “cerca de três vezes a circunferência” é o comprimento da costura redonda e da costura de mão (arts. 8.79 e 8.80).`,
  },
  {
    id: "artenaval-30",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Sampaio, embarcado no navio “Aratu”, acompanhou a preparação de uma lingada de 2.000 quilogramas a ser içada por um estropo de duas pernadas. Ao observar que, por as pernadas terem de ficar bem justas sobre a carga, o ângulo delas com a horizontal seria de apenas 30°, o Prático alertou o Contramestre para o aumento do esforço no cabo. De acordo com Maurílio M. Fonseca, no livro Arte Naval, o esforço exercido sobre cada pernada do estropo, nessa condição, é de aproximadamente:",
    alternativas: {
      A: "1.000 kg",
      B: "1.414 kg",
      C: "2.000 kg",
      D: "2.924 kg",
      E: "3.864 kg",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. 1.000 kg é o esforço em cada pernada quando elas estão paralelas (ângulo de 90° sobre a horizontal), isto é, metade da carga (art. 8.164).",
      B: "Errada. 1.414 kg corresponde, na figura 8-165, ao ângulo de 45° — o ângulo considerado ótimo, abaixo do qual o estropo não deveria trabalhar (art. 8.164).",
      C: "Correta. O art. 8.164 mostra que, com as pernadas a 30° sobre a horizontal, a carga em cada pernada é duas vezes maior do que com as pernadas paralelas: 2.000 kg em cada pernada para uma carga de 2.000 kg. Com fator de segurança 5, exigiria cabo de 10.000 kg de carga de ruptura.",
      D: "Errada. 2.924 kg é o esforço por pernada para o ângulo de 20°, segundo a figura 8-165 (art. 8.164).",
      E: "Errada. 3.864 kg é o esforço para o ângulo de 15°, quando o esforço se torna cerca de quatro vezes maior (art. 8.164).",
    },
  },
  {
    id: "artenaval-31",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação aos trabalhos feitos para proteger uma costura ou um cabo que deve ficar exposto ao tempo (engaiar, percintar, trincafiar, forrar e encapar), de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Engaiar consiste em cobrir o cabo com voltas redondas de merlim, bem ajustadas e rondadas, empregando-se para isso o macete de forrar.",
      B: "Percintar é enrolar em espiral, seguindo a cocha do cabo, tiras de lona ou brim alcatroadas chamadas percintas; antes de percintar um cabo de aço já engaiado, passa-se sobre ele uma camada de zarcão.",
      C: "Forra-se um cabo no sentido da cocha, ao passo que se engaia e se percinta no sentido contrário ao da cocha.",
      D: "Trincafiar é seguir cada cocha do cabo com linha ou merlim alcatroado, a fim de impedir que a umidade penetre no interior dele.",
      E: "Encapar ou emangueirar um cabo é cobri-lo com uma tira de couro cosida com ponto de peneira, no sentido do comprimento do cabo.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Cobrir o cabo com voltas redondas de merlim, usando o macete de forrar, é forrar (art. 8.77d). Engaiar é seguir cada cocha do cabo com linha ou merlim alcatroado (art. 8.77a).",
      B: "Correta. Art. 8.77b: as percintas (tiras de lona ou brim alcatroadas) são enroladas em espiral seguindo a cocha do cabo; antes de percintar um cabo de aço engaiado, passa-se uma camada de zarcão, percintando-se com a tinta ainda fresca.",
      C: "Errada. É o inverso: percinta-se e engaia-se no sentido da cocha do cabo, e forra-se no sentido contrário ao da cocha (art. 8.77b e d).",
      D: "Errada. Seguir cada cocha com linha ou merlim alcatroado, impedindo a penetração da umidade, é engaiar (art. 8.77a). Trincafiar é amarrar as percintas com fios de vela ou linha de rami, dando voltas de trincafios (art. 8.77c).",
      E: "Errada. Encapar ou emangueirar é cobrir com lona e costurar com ponto de bigorrilha chato (art. 8.77e), não com couro e ponto de peneira.",
    },
  },
  {
    id: "artenaval-32",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Durante uma inspeção a bordo de um veleiro de treinamento, o Prático Barbosa examinou uma âncora tipo Almirantado estivada na raposa. De acordo com a nomenclatura das âncoras apresentada por Maurílio M. Fonseca, no livro Arte Naval, a parte ligeiramente engrossada da haste, onde é enfiado o cepo, denomina-se:",
    alternativas: {
      A: "Cruz",
      B: "Noz",
      C: "Anete",
      D: "Palma",
      E: "Orelha",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Cruz é o lugar de união da haste com os braços (art. 10.2); é a primeira parte da âncora que toca o fundo (art. 10.5a).",
      B: "Correta. Art. 10.2: noz é a parte ligeiramente engrossada da haste, onde é enfiado o cepo — barra de ferro colocada perpendicularmente aos braços, com cotovelo de 90° para poder ser prolongada com a haste quando a âncora não está em uso.",
      C: "Errada. Anete é o arganéu ou manilha cujo cavirão passa pelo furo da extremidade superior da haste; nele é talingada a amarra (art. 10.2).",
      D: "Errada. Palma é a aresta saliente localizada na base inferior dos braços das âncoras tipo patente (art. 10.2).",
      E: "Errada. Orelhas são os dois vértices da pata que não são a unha (art. 10.2).",
    },
  },
  {
    id: "artenaval-33",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação aos tipos de âncoras empregadas a bordo dos navios, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "A âncora tipo Almirantado possui cepo disposto perpendicularmente aos braços, com peso de cerca de 1/4 do peso da âncora, e apresenta maior poder de unhar que a âncora tipo patente.",
      B: "Nas âncoras tipo patente, a haste é articulada aos braços, o movimento permitido aos braços vai de 30° a 45° para cada lado da haste, e o peso dos braços com as patas não deve ser menor que 3/5 do peso total da âncora.",
      C: "Admite-se que o poder de unhar da âncora Danforth seja igual a 10 vezes o das âncoras tipo patente e a 3 vezes o da âncora Almirantado de mesmo peso.",
      D: "A âncora Danforth possui cepo colocado na extremidade superior da haste, perpendicularmente ao plano dos braços, razão pela qual não pode ser alojada no escovém.",
      E: "A desvantagem das âncoras tipo patente, de ter menor poder de unhar, é compensada dando-se um pouco mais de filame à amarra nos fundos que não sejam de boa tença.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 10.3a: cepo perpendicular aos braços, com peso de cerca de 1/4 do peso da âncora; apresenta maior poder de unhar que a patente). Não é a resposta.",
      B: "Afirmação correta (art. 10.3b, itens 2 e 3: haste articulada aos braços, movimento de 30° a 45° para cada lado, peso dos braços com patas não menor que 3/5 do total). Não é a resposta.",
      C: "Afirmação correta (art. 10.3c: poder de unhar igual a 10 vezes o das patentes e 3 vezes o da Almirantado de mesmo peso). Não é a resposta.",
      D: "INCORRETA. Segundo o art. 10.3c, o cepo da Danforth é colocado na cruz, paralelamente ao plano dos braços; justamente por estar na cruz, o cepo não impede a entrada da âncora no escovém. Cepo na parte superior da haste e perpendicular aos braços é característica da âncora tipo Almirantado (art. 10.2).",
      E: "Afirmação correta (art. 10.3b: a menor capacidade de unhar da patente é compensada com mais filame nos fundos que não sejam de boa tença). Não é a resposta.",
    },
  },
  {
    id: "artenaval-34",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Ao fundear o navio mercante “Corumbá” na barra, o Prático Andrade ordenou que fossem largados três quartéis de amarra e pediu ao Mestre a confirmação do filame em metros. De acordo com Maurílio M. Fonseca, no livro Arte Naval, o comprimento padrão dos quartéis comuns da amarra, adotado no Brasil e nos Estados Unidos, é de:",
    alternativas: {
      A: "5 braças (cerca de 9,15 metros)",
      B: "12,5 braças (cerca de 22,9 metros)",
      C: "15 braças (cerca de 27,5 metros)",
      D: "20 braças (cerca de 36,5 metros)",
      E: "40 braças (cerca de 73,2 metros)",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. 5 braças (9,15 m) é o comprimento do quartel do tornel dos navios de guerra, quartel curto ligado à âncora e que não é numerado (art. 10.12a).",
      B: "Errada. 12,5 braças (cerca de 22,9 m) é o padrão dos quartéis na Inglaterra (art. 10.12c); a Marinha brasileira adota o padrão americano.",
      C: "Correta. Arts. 10.10c e 10.12c: no Brasil e nos Estados Unidos os quartéis comuns têm 15 braças (uma braça = 6 pés = 1,83 m), ou seja, cerca de 27,5 metros; eles servem de referência para medir a amarra liberada no fundeio.",
      D: "Errada. 20 braças (36,5 m) é o comprimento total acumulado no fim do primeiro quartel na tabela de marcação (art. 10.14), pois inclui as 5 braças do quartel do tornel; não é o comprimento padrão de um quartel.",
      E: "Errada. 40 braças (73,2 m) é o quartel longo, usado logo a seguir ao quartel do tornel nas amarras cujos quartéis são ligados por manilhas (art. 10.12b).",
    },
  },
  {
    id: "artenaval-35",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `Com relação aos acessórios da amarra e ao aparelho de fundear e suspender, de acordo com Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) A buzina é o tubo por onde passa a amarra, do convés para o paiol; sua extremidade no convés chama-se gateira e a extremidade inferior chama-se gola da buzina.
II) O escovém deve sair no convés a uma distância do bico de proa compreendida entre 1/20 e 1/30 do comprimento do navio, e o diâmetro mínimo do seu tubo deve ser 8d, sendo d a bitola da amarra.
III) A cinta do freio mecânico da coroa de Barbotin deve ser empregada para aguentar a amarra com o navio no mar, estando o ferro em cima, dispensando o uso das boças da amarra.
IV) A braga, gato de escape ou manilha com que se fixa a amarra ao paiol, deve ser mais fraca que a manilha de ligação dos quartéis, para que se rompa antes destas em caso de emergência.

Considerando as afirmativas acima, assinale a alternativa correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e III) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — art. 10.20: a buzina é o tubo (geralmente de aço fundido, diâmetro de 7 ou 8 vezes a bitola) por onde a amarra desce do convés ao paiol; a extremidade no convés é a gateira e a inferior é a gola da buzina.
II) Verdadeira — art. 10.25c e e: o escovém sai no convés entre 1/20 e 1/30 do comprimento do navio a partir do bico de proa, e o diâmetro mínimo do tubo é 8d (raios mínimos de 16d no beiço e 10d na gola).
III) Falsa — art. 10.29d: a cinta do freio não deve ser empregada para aguentar a amarra com o navio no mar estando o ferro em cima; para esse fim existem as boças da amarra (art. 10.21a). Também não deve ser usada para reduzir a velocidade da amarra ao fundear.
IV) Falsa — art. 10.26b: a braga deve ser MAIS FORTE que a manilha de ligação dos quartéis, não mais fraca.`,
  },
  {
    id: "artenaval-36",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Lacerda, ao embarcar em um navio de guerra para conduzi-lo ao fundeadouro, foi informado pelo Oficial de Manobra sobre as características da máquina de suspender. Com relação às máquinas de suspender, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Chama-se molinete a máquina de suspender cuja coroa de Barbotin gira em eixo vertical, sendo esse o tipo geralmente adotado nos navios de guerra.",
      B: "Na operação de suspender, a força necessária para arrancar a âncora do fundo é de 5 a 10 vezes o peso da âncora, por isso a máquina deve desenvolver alto conjugado motor a baixas velocidades.",
      C: "A transmissão por roda dentada e parafuso sem fim é muito eficiente, porém não possui irreversibilidade mecânica, ao contrário da transmissão por engrenagens cilíndricas.",
      D: "A amarra deve dar pelo menos uma volta completa em torno da coroa de Barbotin, a fim de que no mínimo seis elos engrazem nela.",
      E: "A saia liga-se ao eixo por meio de embreagem de fricção, ao passo que a coroa de Barbotin é sempre rigidamente ligada ao eixo por chaveta.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Se o eixo da coroa é vertical, a máquina chama-se cabrestante; se horizontal, molinete. Os navios de guerra geralmente possuem cabrestante, e os mercantes, molinete (art. 10.28).",
      B: "Correta. Art. 10.31: a 2ª fase da operação de suspender (arrancar a âncora do fundo) exige força de 5 a 10 vezes o peso da âncora; por isso a máquina deve ser capaz de desenvolver alto conjugado motor a baixas velocidades, em geral com duas velocidades.",
      C: "Errada. É o inverso: a engrenagem de parafuso sem fim é pouco eficiente, mas possui irreversibilidade mecânica; a transmissão de roda dentada e rodete (engrenagens cilíndricas) é eficiente, porém não tem irreversibilidade mecânica (art. 10.29c).",
      D: "Errada. Art. 10.29b: basta que a amarra faça pelo menos meia-volta ao redor da coroa, para que no mínimo três elos engrazem nela.",
      E: "Errada. É o contrário: a saia é sempre rigidamente ligada ao eixo por chaveta, enquanto a coroa se liga ao eixo geralmente por embreagem de fricção, podendo girar louca (arts. 10.28 e 10.29c).",
    },
  },
  {
    id: "artenaval-37",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Queiroz, no passadiço do navio “Tocantins”, acompanhava a manobra de suspender pelas vozes de informação transmitidas pela proa. Com relação às vozes de manobra do aparelho de fundear e suspender, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "“Amarra a pique!” informa que a direção da amarra é perpendicular à superfície das águas.",
      B: "“Arrancou!” informa que o ferro deixou o fundo, o que se verifica por ficar a amarra vertical e sob tensão.",
      C: "“A olho!” informa que a cruz da âncora está saindo da água.",
      D: "“Em cima!” informa que o anete chegou ao escovém.",
      E: "“Amarra a pique de estai!” informa que a direção da amarra é paralela, ou aproximadamente paralela, ao estai de vante do mastro.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta (art. 10.34c, item 2: “Amarra a pique!” — direção perpendicular à superfície das águas). Não é a resposta.",
      B: "Afirmação correta (art. 10.34c, item 3: “Arrancou!” — o ferro deixa o fundo, amarra vertical e sob tensão). Não é a resposta.",
      C: "INCORRETA. Segundo o art. 10.34c, item 3, “A olho!” é dada quando surge o anete à superfície das águas; a cruz saindo da água corresponde à voz “Pelos cabelos!”.",
      D: "Afirmação correta (art. 10.34c, item 3: “Em cima!” — quando o anete chega ao escovém; “No escovém!” é quando o ferro está alojado). Não é a resposta.",
      E: "Afirmação correta (art. 10.34c, item 2: “Amarra a pique de estai!” — amarra paralela ou aproximadamente paralela ao estai de vante do mastro). Não é a resposta.",
    },
  },
);

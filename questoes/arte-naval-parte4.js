// Questões elaboradas a partir do livro "Arte Naval" (Maurílio M. Fonseca, ed. 2019) — parte 4.
// Capítulo 11 – Aparelho de Governo, Mastreação e Aparelhos de Carga (artenaval-38 a 43)
// Capítulo 12 – Manobra do Navio (artenaval-44 a 50)
QUESTOES.push(
  {
    id: "artenaval-38",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Sacramento, ao embarcar em um navio mercante, informou-se junto ao Comandante sobre o tipo de aparelho de governo instalado a bordo e suas transmissões. Com relação ao aparelho de governo e seus componentes, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "O servomotor hidrelétrico é o equipamento mais eficiente para a movimentação do leme, podendo-se empregar um motor de cerca de metade da potência em relação ao servomotor elétrico; seu custo de instalação é maior que o dos outros tipos, mas o de manutenção é menor.",
      B: "No servomotor elétrico há um mecanismo compensador que leva o leme de volta a meio assim que a alavanca de controle é largada.",
      C: "O telemotor é cheio com um líquido incongelável, que pode ser água com glicerina, não devendo a percentagem de glicerina exceder a 40%.",
      D: "A transmissão por parafuso sem fim é muito usada nos navios de guerra, por ser a mais eficiente, e vem caindo em desuso nos navios mercantes.",
      E: "O servomotor é instalado no passadiço, junto à roda do leme, para evitar transmissões longas entre a roda e a máquina do leme.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Art. 11.4, alínea c: o servomotor hidrelétrico é o equipamento mais eficiente para movimentação do leme, podendo-se empregar um motor de cerca de metade da potência em relação ao servomotor elétrico; o custo da instalação é maior que o dos outros tipos, mas o de manutenção é menor, sendo usado em quase todos os navios de guerra.",
      B: "Errada. Art. 11.4, alínea e: no servomotor elétrico NÃO há mecanismo compensador, pois o leme se movimenta somente enquanto a alavanca estiver fora da posição neutra e se mantém parado na posição desejada por meio de um freio. O mecanismo compensador existe nos servomotores a vapor e hidrelétrico (alínea d).",
      C: "Errada. Art. 11.6: a percentagem de glicerina depende da temperatura, mas não deve exceder a 60%.",
      D: "Errada. Art. 11.7, alínea d: a transmissão por parafuso sem fim é muito usada nos navios mercantes, caindo em desuso nos navios de guerra por ser pouco eficiente, embora simples e segura.",
      E: "Errada. Art. 11.4, alínea a: o servomotor é instalado na popa, no próprio compartimento do leme ou em compartimento contíguo, para evitar transmissões longas; é a roda do leme que fica no passadiço (art. 11.2).",
    },
  },
  {
    id: "artenaval-39",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "sequencia",
    enunciado: `Coloque (V) verdadeiro ou (F) falso nas afirmativas abaixo, relativas às vozes de manobra para o timoneiro, de acordo com Maurílio M. Fonseca, no livro Arte Naval, e assinale a opção que apresenta a sequência correta:

( ) A voz "Alivia!" (ou "Alivia o leme") determina reduzir de 1/3 o ângulo do leme e é dada para reduzir a velocidade da guinada.
( ) À voz "Quebra a guinada!", o timoneiro carrega rapidamente o leme para o bordo oposto àquele em que se achava carregado, até que a proa pare de guinar, trazendo-o em seguida a meio.
( ) À pergunta "Como governa?", o timoneiro deve informar o bordo e de quantos graus está carregado o leme naquele momento.
( ) "A caminho" é a comunicação feita pelo timoneiro logo que conseguir se firmar no rumo ordenado, com o leme praticamente a meio (ângulo do leme menor que 5°).
( ) À voz "Todo leme a bombordo (ou boreste)", o máximo ângulo de leme a ser usado deve ser 2° ou 3° a mais que o valor limite, para garantir a máxima ação evolutiva.`,
    alternativas: {
      A: "(V) (F) (V) (V) (F)",
      B: "(V) (V) (F) (V) (F)",
      C: "(F) (V) (F) (V) (V)",
      D: "(V) (V) (V) (F) (F)",
      E: "(F) (F) (V) (V) (V)",
    },
    correta: "B",
    comentario: `Item a item (art. 11.8):
1º Verdadeiro — "Alivia! (ou Alivia o leme)" significa reduzir de 1/3 o ângulo do leme; esta voz é dada para reduzir a velocidade da guinada.
2º Verdadeiro — "Quebra a guinada!" é carregar rapidamente o leme para o bordo oposto àquele em que se achava carregado até que a proa pare de guinar, trazendo-o, em seguida, a meio.
3º Falso — "Como governa? (ou qual a tendência do leme?)" é a pergunta feita quando se deseja saber o ângulo do leme NECESSÁRIO para manter o navio a caminho (resposta: "A meio", ou "a ... graus a boreste/bombordo"). Informar o bordo e de quantos graus está carregado o leme é a resposta à voz "Como diz o leme?".
4º Verdadeiro — "A caminho" é a comunicação feita pelo timoneiro logo que conseguir se firmar no rumo ordenado, com o leme praticamente a meio (ângulo do leme menor que 5°).
5º Falso — o máximo ângulo de leme a ser usado deve ser 2° ou 3° a MENOS que o valor limite, para evitar que o leme possa ficar preso em fim de curso.`,
  },
  {
    id: "artenaval-40",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `O navio-tanque "Itaperuna", de arqueação bruta igual a 12.000, demandava o porto de Santos quando o Prático a bordo perguntou ao Comandante sobre os testes e os requisitos do aparelho de governo. Com relação às recomendações da Convenção SOLAS de 1974 sobre aparelho de governo, transcritas por Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) O aparelho de governo principal e a madre do leme devem ser capazes de levar o leme de uma posição de 35 graus de um bordo para 30 graus do bordo oposto no tempo máximo de 28 segundos, com o navio em água salgada, calado máximo e dando adiante na velocidade máxima.
II) O aparelho de governo auxiliar deve ser capaz de levar o leme de 15 graus de um bordo para 15 graus do outro bordo em não mais do que 60 segundos, com o navio em água salgada, calado máximo e dando adiante com a metade da velocidade máxima de serviço ou com a velocidade de 7 nós, o que for maior.
III) Exercícios de governo em emergência devem ser realizados pelo menos uma vez a cada seis meses, incluindo o controle direto no compartimento da máquina do leme.
IV) Até 12 horas antes de suspender, a máquina do leme do navio deve ser verificada e testada pela tripulação, incluindo o movimento completo do leme e o funcionamento dos meios de comunicação entre o passadiço e o compartimento da máquina do leme.

Considerando as afirmativas acima, assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e II) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas III) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — art. 11.10, a) item 3(b): o aparelho de governo principal deve levar o leme de 35 graus de um bordo a 35 graus do outro com o navio em água salgada, calado máximo e velocidade máxima adiante e, nas mesmas condições, de 35 graus em ambos os bordos para 30 graus do bordo oposto no tempo máximo de 28 segundos.
II) Verdadeira — art. 11.10, a) item 4(b): o aparelho de governo auxiliar deve levar o leme de 15 graus de um bordo a 15 graus do outro em não mais do que 60 segundos, com o navio em água salgada, calado máximo, dando adiante com a metade da velocidade máxima de serviço ou 7 nós, o que for maior.
III) Falsa — art. 11.10, d) item (4): os exercícios de governo em emergência devem ser realizados pelo menos uma vez a cada TRÊS meses (não seis), incluindo o controle direto no compartimento da máquina do leme, os procedimentos de comunicação com o passadiço e o funcionamento de suprimentos alternativos de energia.
IV) Verdadeira — art. 11.10, d) itens (1) e (2): até 12 horas antes de suspender, a máquina do leme deve ser verificada e testada pela tripulação; as verificações incluem o movimento completo do leme, inspeção visual da máquina e de suas ligações, e o funcionamento dos meios de comunicação entre o passadiço e o compartimento da máquina do leme.`,
  },
  {
    id: "artenaval-41",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação à nomenclatura da mastreação e do aparelho fixo dos navios de propulsão mecânica, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Calcês é a extremidade superior do mastaréu, que recebe a borla e a flecha do para-raios.",
      B: "Estais são os cabos de aço que aguentam a mastreação para as bordas do navio, e brandais são os cabos que a aguentam para vante, orientados no plano diametral.",
      C: "Guinda do mastro é o comprimento ou altura de cada um dos mastros ou mastaréus, e guinda da mastreação é a altura total de um mastro com o mastaréu correspondente.",
      D: "Cupês é o nome que se dá ao conjunto de enfrechates que seguram entre si os ovéns de uma enxárcia.",
      E: "Na carangueja, chama-se penol à parte mais grossa, que fica junto ao mastro, e pé à extremidade livre, onde gurne a adriça da Bandeira Nacional.",
    },
    correta: "C",
    explicacoes: {
      A: "Errada. Art. 11.12, alínea a: calcês é a parte superior do mastro real onde encapela o aparelho fixo. A extremidade superior do mastaréu, que recebe a borla e a flecha do para-raios, chama-se tope.",
      B: "Errada. Art. 11.13: está invertido. Estais são os cabos de aço que aguentam a mastreação para VANTE, orientados no plano diametral do navio; brandais são os cabos que aguentam a mastreação para as BORDAS do navio.",
      C: "Correta. Art. 11.12, alínea a: o comprimento ou altura que tem cada um dos mastros ou mastaréus chama-se guinda do mastro ou do mastaréu, e a altura total de um mastro com o mastaréu correspondente é a guinda da mastreação.",
      D: "Errada. Art. 11.13: o conjunto de enfrechates chama-se enfrechadura. Cupês é o último ovém de ré, quando não é compreendido na enfrechadura, isto é, quando só é amarrado de 5 em 5 enfrechates.",
      E: "Errada. Art. 11.17: está invertido. A carangueja compõe-se de pé (a parte mais grossa, junto ao mastro), corpo (a parte do meio) e penol (a extremidade livre), onde há o moitão por onde gurne a adriça da Bandeira Nacional.",
    },
  },
  {
    id: "artenaval-42",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Roberto, a bordo de um navio cargueiro dotado de paus de carga, observou a faina de preparação dos aparelhos de carga para a descarga no cais. Com relação aos paus de carga e seu aparelho, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "O pé do pau de carga tem um pino de aço chamado garlindéu, que emecha numa peça fixa ao mastro, ou num ponto próximo a ele, denominada cachimbo; o conjunto de dois eixos a 90° constitui uma junta universal, que permite ao pau de carga movimentar-se em qualquer direção.",
      B: "Amante ou amantilho é o aparelho que serve para içar ou arriar o pau de carga, ou para aguentá-lo ao alto na posição desejada; guardins são os aparelhos que permitem o movimento lateral do pau de carga, havendo um para BE e outro para BB.",
      C: "Para cargas até 3 toneladas a madeira é muito empregada; para cargas de 3 a 20 toneladas, ou mais, os paus de carga são geralmente de seção tubular, e a treliça é usada somente para grandes pesos, em geral de 20 toneladas para cima.",
      D: "O poleame empregado no aparelho dos paus de carga é escolhido com um fator de segurança mínimo de 3 e se fixa sempre por meio de gatos, em vez de manilhas, para facilitar a rápida substituição durante a faina.",
      E: "Com o pau de carga na posição de través (ângulo de 90° em relação ao plano diametral), o alcance para fora do costado varia de 2,5 metros, para os navios pequenos de cabotagem, até 4 a 7,5 metros, para os cargueiros de tamanho médio.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 11.18, alínea c: o garlindéu, eixo vertical, prende-se ao pau de carga por outro pino horizontal, formando dois eixos a 90°, uma junta universal). Não é a resposta.",
      B: "Afirmação correta (art. 11.18, alínea d: definições de amante ou amantilho e de guardins). Não é a resposta.",
      C: "Afirmação correta (art. 11.18, alínea e: madeira até 3 t; seção tubular de 3 a 20 t ou mais; treliça em geral de 20 t para cima). Não é a resposta.",
      D: "INCORRETA. Art. 11.21: o poleame é escolhido com um fator de segurança mínimo de 5 (e não 3), tem a carga de trabalho marcada nele e o fabricante deve fornecer certificado de teste. Além disso, o art. 11.18, alínea e, estabelece que o poleame do aparelho dos paus de carga se fixa sempre por meio de MANILHA, em vez de gatos.",
      E: "Afirmação correta (art. 11.18, alínea e: alcance para fora do costado de 2,5 m nos pequenos navios de cabotagem até 4 a 7,5 m nos cargueiros de tamanho médio). Não é a resposta.",
    },
  },
  {
    id: "artenaval-43",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação ao amante, aos guardins e ao aparelho de içar dos paus de carga, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "O cabo do aparelho de içar é de aço, de 5/8 de polegada, para as cargas usuais, e seu comprimento é tal que, com a carga arriada no porão, não deve restar nenhuma volta no tambor do guincho.",
      B: "Os guardins, também chamados plumas, devem ser manilhados ao convés em olhal disposto de modo que formem o menor ângulo possível com o pau de carga, para aumentar sua eficiência.",
      C: "Quando os paus de carga são instalados aos pares, há somente os guardins internos, sendo os externos substituídos por um teque que liga os dois paus entre si pelos laises.",
      D: "O aparelho de içar e arriar a carga é geralmente uma estralheira dobrada, para multiplicar a potência, empregando-se um simples retorno com catarina apenas nos paus de carga para grandes pesos.",
      E: "No amante singelo, o chicote do cabo de aço que desce junto ao mastro é manilhado a um triângulo de chapa grossa; num dos outros furos da chapa prende-se o tirador, que vai ao guincho, e no terceiro uma corrente forte de 1 polegada chamada boça, que, presa a um olhal no convés, retira o esforço do tirador e do guincho durante as manobras de carga e descarga.",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. Art. 11.21: o cabo é de aço de 5/8 de polegada para as cargas usuais, mas seu comprimento é tal que, com a carga arriada no porão, AINDA deve haver algumas voltas no tambor do guincho.",
      B: "Errada. Art. 11.20: o cadernal inferior da talha é manilhado ao convés em um olhal disposto de modo que o guardim forme um ângulo RETO, ou aproximadamente reto, com o pau de carga.",
      C: "Errada. Art. 11.20: quando os paus de carga são instalados aos pares, há somente os guardins EXTERNOS, que se amarram às amuradas, sendo os INTERNOS substituídos por um teque que liga os dois paus entre si pelos laises.",
      D: "Errada. Art. 11.21: está invertido. O aparelho de içar é geralmente um simples retorno (sem multiplicação de potência), com catarina manilhada ao lais; somente para paus de carga de grandes pesos o aparelho pode ser uma talha dobrada ou estralheira dobrada.",
      E: "Correta. Art. 11.19 (amante singelo): o chicote do cabo de aço gurne num moitão fixo ao mastro e vai ser manilhado a um dos três furos de um triângulo de chapa grossa; noutro furo prende-se o tirador, que vai ao guincho, e no terceiro uma corrente forte com bitola de 1 polegada chamada boça. Aboçado o amante, a boça fica aguentando o pau de carga e o peso da carga, retirando esse esforço do tirador e do guincho.",
    },
  },
  {
    id: "artenaval-44",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Anselmo, a bordo de um navio de um só hélice de passo direito, de tamanho médio e formas ordinárias, encontrava-se com o navio parado, máquina parada e leme a meio, em águas tranquilas, sem vento nem correnteza, quando ordenou máquina atrás. Sobre o comportamento esperado do navio nessa situação, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "A popa tende a cair para bombordo (e a proa guina para boreste), porque a pressão lateral das pás se soma ao efeito da corrente de descarga, que incide contra a carena a boreste; para fazer o navio seguir aproximadamente em linha reta para ré, o leme deve ser posto a boreste.",
      B: "A popa tende a cair para boreste, porque na marcha a ré prepondera o efeito das pás inferiores do hélice, que giram em maior profundidade.",
      C: "A corrente de sucção, com o leme a meio, é a principal responsável pela queda da popa para bombordo, pois incide de ré para vante sobre a porta do leme.",
      D: "Bastando carregar todo o leme a boreste antes de dar atrás, impede-se com facilidade a queda da popa para bombordo, mesmo partindo do repouso.",
      E: "A corrente da esteira, que se forma na popa na marcha a ré, neutraliza a pressão lateral das pás, de modo que o navio dá atrás em linha reta com o leme a meio.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Art. 12.6.2: com o leme a meio, a popa vai lentamente para BB (e a proa guina para BE) no início do movimento e com qualquer seguimento para ré, porque a pressão lateral das pás se soma ao efeito da corrente de descarga, que incide contra a carena a BE. O resumo do mesmo artigo, item (3), conclui: para fazer o navio seguir aproximadamente em linha reta para ré, o leme deve ser posto a BE.",
      B: "Errada. Art. 12.3, 2º caso: na marcha AR, a popa tem a forma cheia em cima e fina embaixo (popa em V), preponderando o efeito das pás mais altas, pois a água lançada pelas pás inferiores passa por baixo da quilha; assim a popa tende a cair para BB. A pressão lateral das pás (art. 12.4), na marcha AR, também leva a popa para BB.",
      C: "Errada. Art. 12.3, 2º caso: com o hélice dando atrás, a corrente de sucção não tem qualquer efeito no governo do navio se o leme estiver a meio, pois corre paralelamente a ele; só tem ação evolutiva com o leme carregado para um bordo.",
      D: "Errada. Art. 12.6.2, resumo, item (1): quando o navio de um hélice começa a dar atrás, partindo do repouso, a popa cai para BB mesmo que o leme seja posto a BE, e é quase impossível impedir isto.",
      E: "Errada. Art. 12.6.2: na marcha a ré a corrente da esteira passa a se formar na PROA e não exerce qualquer influência no governo (a tabela do art. 12.5 registra: corrente da esteira, marcha AR, não tem efeito).",
    },
  },
  {
    id: "artenaval-45",
    prova: "Arte Naval",
    tema: "Arte Naval",
    tipo: "afirmativas",
    enunciado: `O Prático Jorge assumiu a manobra de um navio de dois hélices e um leme, em águas limitadas. Com relação ao governo dos navios de dois hélices, de acordo com Maurílio M. Fonseca, no livro Arte Naval, analise as afirmativas abaixo:

I) Em geral os dois hélices giram de dentro para fora, isto é, o de boreste é de passo direito e o de bombordo é de passo esquerdo, admitindo-se que, neste sistema, a ação do leme é um pouco maior do que no caso de girarem de fora para dentro.
II) Com um hélice dando adiante e outro dando atrás, o conjugado de rotação é máximo e a proa guina para o mesmo bordo do hélice que dá atrás; partindo do repouso, com igual número de rotações, o navio adquire ligeiro seguimento para vante enquanto gira, porque há necessidade de menor potência na propulsão a vante do que na propulsão a ré.
III) Ao contrário dos navios de um hélice, na manobra dos navios de dois hélices o leme deve ser colocado de acordo com o sentido de rotação dos hélices, e não com o seguimento que o navio tem.
IV) Com seguimento para ré e hélices dando adiante, a corrente de descarga dos hélices, agindo sobre a porta do leme, anula o efeito dele; enquanto durar essa situação o leme não governa e torna-se prejudicial, sendo melhor que fique a meio, governando-se pela alteração do regime de rotação de uma das máquinas.

Considerando as afirmativas acima, assinale a opção correta:`,
    alternativas: {
      A: "Apenas as afirmativas I) e III) são verdadeiras.",
      B: "Apenas as afirmativas II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      E: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — art. 12.10: os dois hélices em geral giram de dentro para fora, isto é, o de BE é de passo direito e o de BB é de passo esquerdo; admite-se que, neste sistema, a ação do leme é um pouco maior do que no caso dos hélices girarem em sentido inverso, de fora para dentro.
II) Verdadeira — art. 12.15: com um hélice adiante e outro atrás o conjugado de rotação é máximo, obrigando a proa a guinar para o bordo do hélice que dá atrás; partindo do repouso, a rotação não se efetua num mesmo ponto, mesmo com igual número de rotações, pois o navio adquire ligeiro seguimento para vante enquanto gira, porque há necessidade de menor potência no eixo na propulsão AV do que na propulsão AR, devido à forma do casco.
III) Falsa — art. 12.15: é exatamente o inverso. Ao contrário dos navios de um hélice, na manobra dos navios de dois hélices o leme deve ser colocado de acordo com o SEGUIMENTO que o navio tem e não com o sentido de rotação dos hélices (o art. 12.10 resume: o navio obedece ao leme de acordo com o seguimento que tem e não de acordo com a marcha dos hélices).
IV) Verdadeira — art. 12.14: depois da inversão da marcha, a corrente de descarga dos hélices, agindo sobre a porta do leme, anula o efeito dele; por isso, enquanto houver seguimento para ré com hélices adiante, o leme não governa e se torna prejudicial, sendo melhor que fique a meio, podendo-se governar alterando o regime de rotação de uma das máquinas.`,
  },
  {
    id: "artenaval-46",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Castro conduzia um navio mercante de um só hélice de passo direito para atracação em um cais do porto de Paranaguá. Com relação às recomendações para a atracação e ao emprego das espias, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "Lançantes são as espias que se amarram nas extremidades do navio, as de vante orientadas para vante e as de ré dizendo para ré; devem ser amarradas em cabeços bem afastados do navio, pois têm como finalidade principal evitar o movimento do navio ao longo do cais.",
      B: "Espringues são espias que, ao contrário dos lançantes, se saírem da proa dizem para ré e se saírem da popa dizem para vante, concorrendo com os lançantes para evitar que o navio se mova ao longo do cais ou para fora.",
      C: "Través é a espia que sai de bordo perpendicularmente ao cais; os traveses devem ser preferidos em todas as amarrações, pois têm sempre comprimento suficiente para aguentar bem o navio na subida e na descida da maré.",
      D: "Nos navios de um só hélice (de passo direito) recomenda-se a atracação por bombordo, a não ser que a direção da corrente ou do vento aconselhe o contrário.",
      E: "Quando, além da alça, passa-se a espia pelo seio ao mesmo cabeço, ficando com três pernadas, diz-se que é uma espia dobrada pelo seio; em situações normais de tempo e mar, não há necessidade de usar mais de três pernadas numa espia.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta (art. 12.24: os lançantes de proa e de popa devem ser amarrados em cabeços bem afastados do navio, respectivamente para vante e para ré, pois sua finalidade principal é evitar o movimento do navio ao longo do cais). Não é a resposta.",
      B: "Afirmação correta (art. 12.24: os espringues, ao contrário dos lançantes, se saírem da proa dizem para ré e se saírem da popa dizem para vante). Não é a resposta.",
      C: "INCORRETA. Art. 12.24: os traveses são usados para evitar que o navio se afaste do cais por efeito do vento ou da corrente, mas NEM SEMPRE podem ter o comprimento suficiente para aguentar bem o navio na subida e na descida da maré; por isso devem ser EVITADOS, exceto em caso de emergência ou de mau tempo.",
      D: "Afirmação correta (art. 12.23.1, recomendação 7; o art. 12.27 explica que o navio de um hélice de passo direito atraca mais facilmente por BB porque a popa provavelmente rabeia para BB quando se dá atrás). Não é a resposta.",
      E: "Afirmação correta (art. 12.24: espia dobrada tem duas pernadas; dobrada pelo seio, três pernadas; em situações normais não há necessidade de mais de três pernadas, sendo preferível uma espia adicional em outro cabeço). Não é a resposta.",
    },
  },
  {
    id: "artenaval-47",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Fernandes, a bordo de um navio mercante dotado de ferros sem cepo (tipo patente), foi solicitado a fundeá-lo em águas abrigadas, com profundidade local de 20 metros, para uma estadia de poucas horas à espera de berço. Com relação ao fundeadouro, ao filame e à manobra de fundear, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "A área livre de obstruções de que o navio necessita para fundear equivale a um círculo de raio igual ao filame, não se computando o comprimento do navio.",
      B: "Para águas abrigadas, em estadias pequenas, com profundidades de até 30 metros, adota-se a regra prática de largar filame igual a cinco a sete vezes a profundidade local para o ferro sem cepo (patente) e quatro vezes a profundidade local para o ferro tipo almirantado.",
      C: "O comprimento do cabo da boia de arinque deve ser igual, aproximadamente, a dois terços da profundidade local.",
      D: "A boia de arinque de boreste é pintada na cor encarnada e a de bombordo na cor verde; nos navios com apenas um ferro na proa, a boia é pintada de preto.",
      E: "A título de aumentar a segurança, deve-se sempre largar filame maior que o indicado na tabela, pois o excesso de amarra no fundo aumenta o poder de unhar do ferro sem trazer inconvenientes.",
    },
    correta: "B",
    explicacoes: {
      A: "Errada. Art. 12.40: a área livre de obstruções que um navio necessita para fundear é equivalente a um círculo de raio igual à SOMA do filame mais o comprimento do navio.",
      B: "Correta. Art. 12.41: para águas abrigadas (em estadias pequenas), com profundidades de até 30 metros, adota-se a regra prática de multiplicar por cinco a sete vezes a profundidade local (ferro sem cepo, como o ferro patente) e quatro vezes a profundidade local (ferro tipo almirantado). Em locais sujeitos a ventos e correntes ou com mau tempo, deve-se consultar a tabela de filames.",
      C: "Errada. Art. 12.42.3: o comprimento do cabo da boia de arinque deve ser igual, aproximadamente, a QUATRO TERÇOS da profundidade local.",
      D: "Errada. Art. 12.42.3: a boia de arinque de BE é pintada na cor verde e a de BB na cor encarnada; nos navios que possuem apenas um ferro na proa, a boia é pintada de amarelo.",
      E: "Errada. Art. 12.41: NÃO se deve largar um filame maior que o indicado, pois tal prática poderá ocasionar esforços adicionais na amarra, seja por seu peso ou por ficar presa em algum obstáculo do fundo, ocasionando sua ruptura; se for necessário maior esforço para aguentar o navio, é melhor largar um segundo ferro, mesmo com filame moderado.",
    },
  },
  {
    id: "artenaval-48",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "O Prático Menezes, ao planejar uma guinada de 90 graus em um canal de acesso, consultou os elementos da curva de giro constantes do painel de manobra do navio. Com relação à curva de giro e seus elementos característicos, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Diâmetro tático é a distância ganha na direção perpendicular ao rumo inicial numa guinada de 180 graus; o diâmetro final, descrito na parte final da trajetória com ângulo de leme constante, é sempre menor que o diâmetro tático.",
      B: "Avanço é a distância medida na direção perpendicular ao rumo inicial, desde o ponto em que o leme foi carregado até a proa ter guinado 90 graus.",
      C: "O centro de giro está sempre situado no eixo longitudinal do navio, em geral num ponto entre 1/3 e 1/4 do comprimento do navio contado a partir da popa.",
      D: "O diâmetro tático e o afastamento aumentam com o aumento do ângulo do leme e dependem fortemente da velocidade do navio.",
      E: "O ângulo de deriva varia, em geral, de 6 a 10 graus, aumentando com a velocidade do navio e com o aumento do calado.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta. Art. 12.56.1, alíneas d e e: diâmetro tático é a distância ganha na direção perpendicular ao rumo inicial numa guinada de 180 graus; diâmetro final é o diâmetro do arco de circunferência descrito na parte final da trajetória pelo navio que girou 360 graus com ângulo de leme constante, sendo sempre menor que o diâmetro tático.",
      B: "Errada. Art. 12.56.1, alíneas b e c: avanço é a distância medida na direção do RUMO INICIAL, desde o ponto em que o leme foi carregado até a proa ter guinado 90 graus; a distância medida na direção perpendicular ao rumo inicial, nas mesmas condições, é o afastamento.",
      C: "Errada. Art. 12.56.1: o centro de giro fica, em geral, num ponto entre 1/3 e 1/4 do comprimento do navio contado a partir da PROA (o navio evolui com a proa para dentro e a popa para fora da curva).",
      D: "Errada. Art. 12.56.3, alínea d: o diâmetro tático e o afastamento DIMINUEM com o aumento do ângulo do leme e são praticamente INDEPENDENTES da velocidade. É o avanço que aumenta com a velocidade (alínea c).",
      E: "Errada. Art. 12.56.3, alínea i: o ângulo de deriva aumenta com o ângulo do leme e com a DIMINUIÇÃO do calado, mas é independente da velocidade do navio; varia, em geral, de 6 a 10 graus, podendo atingir 18 graus.",
    },
  },
  {
    id: "artenaval-49",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "Com relação às manobras de parar o navio, girar em águas limitadas, desatracar e demandar uma boia de amarração, em navios de um só hélice de passo direito, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção INCORRETA:",
    alternativas: {
      A: "Depois de posto no telégrafo \"máquina atrás toda força\", um navio percorre ainda, em geral, de 3 a 6 comprimentos para vante; os navios dotados de motor diesel param mais rapidamente que os de turbinas.",
      B: "Se quiser parar o navio o mais depressa possível, dá-se \"máquina atrás toda força\" e põe-se o leme \"todo a BE\"; logo que o hélice comece a girar em sentido retrógrado, inverte-se o leme para BB, admitindo-se que o navio guinará a 90° para BE, percorrendo cerca de quatro vezes seu comprimento até parar.",
      C: "É preferível desatracar abrindo de popa e não de proa, para evitar que o hélice possa bater no cais e para aproveitar logo as qualidades de governo do navio, estando a popa livre.",
      D: "Sem vento nem corrente, o navio de um hélice de passo direito deve abordar a boia de amarração pela bochecha de bombordo, por causa da tendência que a proa tem de abater para bombordo quando ele dá atrás.",
      E: "Para girar por boreste em águas limitadas, partindo do repouso, carrega-se todo o leme a BE e logo em seguida dá-se adiante com a máquina; depois dá-se atrás a toda força e, simultaneamente, carrega-se o leme 10 a 15° para BB, de modo que a ação do hélice se some à do leme no sentido de rabear a popa para BB.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta (art. 12.8: em geral o navio percorre ainda de 3 a 6 comprimentos para vante; os navios de caldeiras e de motor diesel param mais rapidamente que os de turbinas). Não é a resposta.",
      B: "Afirmação correta (art. 12.8: para parar o mais depressa possível, máquina atrás toda força com leme todo a BE, invertendo-o para BB logo que o hélice gire em sentido retrógrado; admite-se que o navio guinará 90° para BE, percorrendo cerca de quatro comprimentos até parar). Não é a resposta.",
      C: "Afirmação correta (art. 12.33: é preferível desatracar abrindo de popa, para evitar que o hélice bata no cais e aproveitar logo as qualidades de governo do navio). Não é a resposta.",
      D: "INCORRETA. Art. 12.53.2: se não houver vento ou corrente, pode-se demandar a boia por qualquer bordo, mas, se o navio é de um hélice (de passo direito), é preferível abordá-la pela bochecha de BORESTE, por causa da tendência que a proa tem de abater para BE quando ele der atrás.",
      E: "Afirmação correta (art. 12.9, girar por BE, itens 1 e 2: todo o leme a BE e adiante com a máquina, para a corrente de descarga agir na porta do leme; depois atrás a toda força com o leme 10 a 15° para BB). Não é a resposta.",
    },
  },
  {
    id: "artenaval-50",
    prova: "Arte Naval",
    tema: "Arte Naval",
    enunciado: "A Fragata \"Independência\" foi designada para rebocar, em alto-mar, uma corveta avariada que se encontrava à deriva. Com relação ao cabo de reboque, ao dispositivo de reboque e à faina de passagem do dispositivo, de acordo com Maurílio M. Fonseca, no livro Arte Naval, assinale a opção correta:",
    alternativas: {
      A: "Durante o trânsito do trem de reboque, as alterações de rumo devem ser realizadas de 15 em 15 graus, e um cabo de reboque de náilon pode estender-se até 50% de seu comprimento inicial sem perda de sua capacidade de tração.",
      B: "Na fixação do dispositivo, os cabos de aço não devem ser passados em cabeços de diâmetro inferior a 20 vezes o diâmetro do cabo, e as amarras em cabeços de diâmetro inferior a 12 vezes a bitola da amarra.",
      C: "A aproximação do navio rebocador ao navio à deriva deve ser feita por sotavento, de forma que o dispositivo seja passado por barlavento do rebocador.",
      D: "Para a passagem do dispositivo, utiliza-se cabo mensageiro de 3 polegadas e cabo de leva de 1 1/2 polegada, este último talingado diretamente ao cabo de reboque.",
      E: "Nos reboques a longa distância, se o mar não vem de través, convém que o comprimento do cabo de reboque seja aproximadamente igual ao comprimento da onda, ou um múltiplo deste, para estabelecer um sincronismo no jogo dos dois navios, evitando que o cabo fique alternadamente brando e teso.",
    },
    correta: "E",
    explicacoes: {
      A: "Errada. Art. 12.76: as alterações de rumo devem ser realizadas gradualmente, de 5 em 5 graus. Além disso, o art. 12.73, alínea c, alerta que um cabo de náilon que se estenda por mais do que 25% de seu comprimento inicial poderá sofrer perda permanente de sua capacidade de tração, razão do fio fusível em cada extremidade.",
      B: "Errada. Art. 12.72: está invertido. Os cabos de aço não devem ser passados em cabeços de diâmetro inferior a 12 vezes o diâmetro do cabo, e as amarras não devem ser passadas em cabeços cujo diâmetro seja inferior a 20 vezes a bitola da amarra.",
      C: "Errada. Art. 12.75.1, alínea a, e art. 12.75.3, alínea c: a aproximação será feita por BARLAVENTO do rebocado, de modo que o dispositivo seja passado por SOTAVENTO do navio rebocador; o movimento relativo faz o navio a ser rebocado tender a afastar-se da linha de aproximação, o que representa mais segurança.",
      D: "Errada. Art. 12.73, alíneas d e e: o cabo mensageiro, usado para passar o cabo de leva, é de 1 1/2 polegada; o cabo de leva, usado para passar o cabo de reboque, é de 3 polegadas.",
      E: "Correta. Art. 12.70, alínea c: se o mar não vem de través, convém que o comprimento do cabo de reboque seja aproximadamente igual ao comprimento da onda, ou um múltiplo deste; procura-se assim estabelecer um sincronismo no jogo dos dois navios, fazendo com que cavalguem as ondas na mesma posição relativa e evitando que o cabo fique alternadamente brando e teso, sofrendo tensões exageradas.",
    },
  },
);

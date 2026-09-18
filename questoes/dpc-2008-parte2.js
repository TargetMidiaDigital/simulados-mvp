// Prova escrita DPC 2008 (Processo Seletivo de Praticante de Prático) — questões 26 a 50.
// Questão 45 foi ANULADA e não consta. Letra correta: gabarito oficial.
QUESTOES.push(
  {
    id: "dpc2008-26",
    prova: "DPC 2008",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: `As marés têm significativas influências na navegação costeira, inclusive na elaboração das cartas náuticas. Por conseqüência, os navegantes devem levar em consideração os seus efeitos. Para tal, utilizam as publicações Tábuas das Marés e Cartas de Correntes de Marés, que fornecem os principais elementos e efeitos das marés. Interprete as afirmativas a seguir:

I) as Cartas de Correntes de Marés se referem às marés do próprio dia, por isso podendo ser usadas diariamente na navegação.
II) ao longo do ciclo lunar, as variações diárias das alturas das marés são simétricas, em relação ao nível médio do mar (NM), tanto na quadratura quanto na sizígia.
III) a informação da altura do NM, indicada em destaque no cabeçalho das páginas de cada porto, nas Tábuas das Marés, é para alertar o navegante sobre o valor da amplitude da maré de sizígia no respectivo porto.
IV) as intensidades distintas das correntes de enchente e de vazante, observadas em diferentes portos, devem-se a características geográficas da região.
V) o estabelecimento do nível de referência do zero da régua das marés está associado à carta náutica do porto.

De acordo com Lobo & Soares, no livro “Meteorologia e Oceanografia – Usuário Navegante”, assinale a opção abaixo que contém todas as afirmativas verdadeiras apresentadas:`,
    alternativas: {
      A: "I) e II)",
      B: "II) e IV)",
      C: "III), IV) e V)",
      D: "I), III) e V)",
      E: "II), III) e V)",
    },
    correta: "E",
    comentario: `Pelo gabarito oficial (Lobo & Soares):
I) Falsa — as Cartas de Correntes de Maré não se referem ao "próprio dia": cada carta vale para uma hora antes/depois da preamar no porto de referência, e só pode ser usada depois de se obter essa hora nas Tábuas das Marés.
II) Verdadeira — a maré oscila simetricamente em torno do nível médio, tanto em sizígia (grande amplitude) quanto em quadratura (pequena amplitude).
III) Verdadeira — como o nível de redução fica, aproximadamente, à distância de meia amplitude de sizígia abaixo do NM, a altura do NM no cabeçalho dá ao navegante a ordem de grandeza da amplitude de sizígia do porto (cerca de duas vezes o NM).
IV) Falsa pelo gabarito — a diferença de intensidade entre enchente e vazante não é atribuída apenas à geografia: a descarga fluvial, que se soma à vazante e se opõe à enchente, e a assimetria da própria onda de maré são determinantes.
V) Verdadeira — o zero da régua é referido ao nível de redução, o mesmo plano de referência das sondagens da carta náutica do porto.`,
    explicacoes: {
      A: "A II) é verdadeira, mas a I) é falsa: as Cartas de Correntes de Maré são referidas às horas antes/depois da preamar no porto de referência, não à maré \"do próprio dia\". Faltam ainda III) e V).",
      B: "A II) é verdadeira, mas a IV) é falsa pelo gabarito (a diferença entre enchente e vazante não se deve só à geografia; a descarga dos rios é determinante). Faltam III) e V).",
      C: "III) e V) são verdadeiras, mas inclui a IV), falsa pelo gabarito, e deixa de fora a II), verdadeira.",
      D: "III) e V) são verdadeiras, mas inclui a I), que é falsa, e deixa de fora a II).",
      E: "Combinação do gabarito oficial: II) simetria da maré em relação ao NM, III) o NM do cabeçalho indica a amplitude de sizígia e V) o zero da régua está ligado ao nível de redução da carta náutica.",
    },
  },
  {
    id: "dpc2008-27",
    prova: "DPC 2008",
    tema: "Arte Naval",
    revisar: true,
    enunciado: `Tendo como referência o livro “Arte Naval”, de Maurílio M. Fonseca, assinale a opção abaixo que designa corretamente as voltas que se enquadram nas descrições ou finalidades apresentadas a seguir:

(I) é dada, por exemplo, no chicote do tirador de uma talha, a fim de não deixar desgurnir; para este fim, é superior à meia-volta, pois não fica mordido, sendo desfeito mais facilmente; muito usado como nó ornamental por sua beleza e simplicidade de desenho.
(II) é uma volta singela em que uma das partes do cabo morde a outra; é raramente usada, só servindo para rematar outras voltas.
(III) é a volta mais usada a bordo para se passar um fiel, ou uma adriça, em torno de um balaústre, um olhal ou um pé-de-carneiro.
(IV) usada para falcaçar, ou para prender um cabo a um gato, tal como a boca-de-lobo; empregada para a amarração das pranchas de costado.
(V) é constituída por uma série de voltas alternadas, dadas entre dois objetos quaisquer e é usada para diversos fins, entre os quais para dar volta a uma espia, ou a um cabo de laborar qualquer, em torno de dois cabeços ou em cunhos de malaguetas.`,
    alternativas: {
      A: "fiador – cote – fiel singela – tortor – falida",
      B: "falida – fiel dobrada – fiel singela – tortor – cote",
      C: "fiel singela – cote – fateixa – falida – tortor",
      D: "falida – fiel dobrada – fiel singela – tortor – cote",
      E: "fiador – cote – fiel dobrada – ribeira - falida",
    },
    correta: "A",
    comentario: `(I) Volta de fiador — o "oito" dado no chicote para o tirador não desgurnir; não morde como a meia-volta e desfaz-se facilmente.
(II) Cote — volta singela em que uma parte morde a outra; serve só para rematar outras voltas.
(III) Volta de fiel singela — a mais usada para passar um fiel ou adriça em balaústre, olhal ou pé-de-carneiro.
(IV) Volta de tortor — usada para falcaçar, prender cabo a gato e amarrar pranchas de costado.
(V) Volta falida — voltas alternadas (em oito) entre dois cabeços ou em cunhos e malaguetas.
Obs.: no PDF original as alternativas (b) e (d) são idênticas.`,
    explicacoes: {
      A: "Sequência correta pelo Arte Naval: fiador (I), cote (II), fiel singela (III), tortor (IV) e falida (V).",
      B: "Começa errada: a volta dada no chicote do tirador para não desgurnir é a de fiador; a falida é a das voltas alternadas entre dois cabeços (V). Também troca a (II) (é cote, não fiel dobrada) e a (V) (é falida, não cote). Só (III) e (IV) estão certas.",
      C: "A fiel singela é a da descrição (III), não da (I); a volta de fateixa serve para amarrar cabo ao anete de ancorote/fateixa, não para passar fiel em balaústre; e falida e tortor estão trocadas entre (IV) e (V). Só o cote (II) está certo.",
      D: "Idêntica à alternativa (B) no original: troca fiador por falida em (I), cote por fiel dobrada em (II) e falida por cote em (V).",
      E: "Acerta fiador (I), cote (II) e falida (V), mas a volta mais usada para passar um fiel ou adriça é a fiel SINGELA, não a dobrada, e a volta de ribeira serve para prender cabo a um mastro/antena ou rebocar toras, não para falcaçar ou amarrar pranchas (que é a de tortor).",
    },
  },
  {
    id: "dpc2008-28",
    prova: "DPC 2008",
    tema: "COLREG / RIPEAM",
    enunciado: "Taking into account that the vessels described below carry all the lights prescribed by the rules of COLREG, which of the following alternatives is the correct answer?",
    alternativas: {
      A: "an 11 metres in lenght power-driven vessel underway may exhibit: two masterhead lights, sidelights and sternlight.",
      B: "a power-driven vessel when towing shall exhibit (the length of the tow exceeds 200 metres): four masterhead lights, sidelights and towing light.",
      C: "a vessel of less than 50 metres in length when engaged in trawling and when making way through the water may exhibit: one all-round green light, one all-round red light, one masthead light, sidelights and sternlight.",
      D: "a vessel restricted in her ability to manoeuvre, except a vessel engaged in mine operations, when at anchor, shall exibit: two all-round red lights and one all-round white light.",
      E: "a 25 metres in length sailing vessel underway shall exhibit: one all-round red light and one all-round green light.",
    },
    correta: "A",
    explicacoes: {
      A: "Regra 23(a): embarcação de propulsão mecânica em movimento exibe luz de mastro, luzes de bordo e luz de alcançado; a segunda luz de mastro não é obrigatória para embarcações com menos de 50 m, mas elas PODEM (may) exibi-la. Logo, uma embarcação de 11 m pode exibir duas luzes de mastro, luzes de bordo e alcançado.",
      B: "Regra 24(a): com reboque de mais de 200 m são TRÊS luzes de mastro em linha vertical (não quatro), mais luzes de bordo, luz de alcançado e luz de reboque — a alternativa também omite a luz de alcançado.",
      C: "Regra 26(b): arrasto é VERDE sobre BRANCA. Encarnada sobre branca é pesca que não de arrasto. Não existe combinação verde + encarnada circulares para pesca.",
      D: "Regra 27(b): as luzes de manobra restrita são três circulares em linha vertical — encarnada, BRANCA, encarnada — e, fundeada, exibe além delas as luzes de fundeio da Regra 30. “Duas encarnadas” é embarcação sem governo.",
      E: "Regra 25: o veleiro em movimento DEVE exibir luzes de bordo e luz de alcançado. As circulares encarnada sobre verde no tope do mastro são opcionais (may) e adicionais — sozinhas não satisfazem a regra.",
    },
  },
  {
    id: "dpc2008-29",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    enunciado: "O prático João Bento embarca no NM IPANEMA, para realizar navegação de praticagem noturna na lagoa dos Patos, até Porto Alegre, em revezamento com o comandante do NM, que está devidamente habilitado como prático da ZP 20 pelo Diretor de Portos e Costas. João Bento é informado que o NM, devido a uma pane elétrica, está com todas as luzes de mastro inoperantes e o reparo somente é possível em Porto Alegre. João Bento avalia então que existe risco inaceitável à navegação e comunica o fato à Capitania dos Portos do Rio Grande do Sul. O capitão dos portos, depois de considerar os inúmeros fatores envolvidos no problema e as Normas da Autoridade Marítima pertinentes, decide pela realização da navegação. João Bento, inconformado com a decisão do capitão dos portos, solicita à atalaia a sua substituição, que é efetivada pelo prático de sobreaviso. Considerando o contido nas Normas da Autoridade Marítima para o Serviço de Praticagem (NORMAM-12/DPC), assinale a afirmativa correta relacionada com o fato descrito:",
    alternativas: {
      A: "O capitão dos portos deveria ter declarado a impraticabilidade da navegação.",
      B: "João Bento está sujeito a responder a inquérito administrativo, por ter se recusado a prestar o serviço de praticagem.",
      C: "João Bento não deveria ter sido substituído por um prático de sobreaviso.",
      D: "João Bento agiu corretamente ao informar sobre a pane elétrica e não pode ser punido administrativamente pelo fato de ter pedido substituição.",
      E: "João Bento deveria ter se limitado a comunicar o problema das luzes dos mastros à Capitania dos Portos oportunamente.",
    },
    correta: "B",
    explicacoes: {
      A: "A impraticabilidade refere-se às condições da ZP (tempo, mar, visibilidade, acidente no canal etc.), não ao defeito de um navio específico. Avaliar o risco e decidir pela realização da faina é competência do capitão dos portos, que a exerceu.",
      B: "Pela NORMAM-12 (e LESTA), o prático não pode recusar-se a prestar o serviço de praticagem. Se entender que há risco, comunica ao capitão dos portos, a quem cabe decidir. Decidida a realização da navegação, o pedido de substituição por inconformismo equivale a recusa do serviço, sujeitando o prático a inquérito administrativo e às sanções previstas.",
      C: "A substituição pelo prático de sobreaviso apenas assegurou a continuidade do serviço (que é essencial e deve estar permanentemente disponível); o problema não é a substituição, e sim a recusa de João Bento.",
      D: "A primeira parte está certa — comunicar a pane era seu dever. Mas a segunda não: pedir substituição depois da decisão do capitão dos portos caracteriza recusa ao serviço, passível de punição administrativa.",
      E: "A comunicação deveria ser imediata (e foi), não \"oportunamente\": o prático deve informar de pronto ao capitão dos portos qualquer condição que represente risco à navegação. O erro foi a recusa posterior, não a comunicação.",
    },
  },
  {
    id: "dpc2008-30",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Para desempenhar com eficácia o seu serviço, o prático, além de conhecer bem as condições locais no que se refere ao porto, canais, balizamentos, regime de ventos, correntes etc., necessita estar familiarizado com as peculiaridades dos navios que vai manobrar, como também com as características dos equipamentos com os quais irá lidar no dia-a-dia. MacElrevey & MacElrevey, no livro “Shiphandler for the Mariner”, citam algumas características de equipamentos, cujo conhecimento trará vantagens para o prático.
Coloque falso (F) ou verdadeiro (V) nas afirmativas abaixo, assinalando, a seguir, a opção correta, de acordo com as informações apresentadas na obra mencionada:

( ) o hélice de passo variável atuando com máquinas atrás é mais eficaz do que o hélice convencional atuando da mesma forma.
( ) um navio movido a turbina a vapor aumenta as rotações do eixo mais vagarosamente do que um navio movido a diesel.
( ) uma chamada-fonia em um equipamento VHF pode ser ouvida no mar, mesmo nas piores condições, em uma área de, pelo menos, 1800 milhas náuticas quadradas.
( ) a precisão da apresentação do “laptop” de um “Laptop-based Navigation System” é limitada pela precisão das cartas que o sistema utiliza.
( ) os sistemas AZIPOD são mais seguros e silenciosos do que os sistemas convencionais, fatores que os tornam particularmente atrativos para qualquer tipo de navio.`,
    alternativas: {
      A: "(V) (F) (V) (F) (V)",
      B: "(F) (V) (V) (F) (F)",
      C: "(F) (V) (F) (V) (F)",
      D: "(V) (F) (F) (V) (V)",
      E: "(V) (V) (F) (V) (F)",
    },
    correta: "C",
    comentario: `Item a item (pelo gabarito oficial):
1º Falso — o hélice de passo variável é MENOS eficaz a ré que o de passo fixo: as pás são otimizadas para vante e, com passo invertido, o fluxo junto ao cubo é perturbado.
2º Verdadeiro — a turbina a vapor ganha rotações lentamente (e sua turbina de ré é menos potente); o motor diesel responde quase de imediato.
3º Falso — pelo gabarito, o número citado não corresponde ao do livro (conferir o valor exato na obra).
4º Verdadeiro — o sistema de navegação em laptop é tão preciso quanto as cartas eletrônicas que utiliza (e o datum/levantamento em que se baseiam).
5º Falso — o livro destaca que o Azipod é silencioso e com pouca vibração, o que o torna particularmente atrativo para navios de PASSAGEIROS, não "para qualquer tipo de navio".`,
  },
  {
    id: "dpc2008-31",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    enunciado: `A Very Large Crude Carrier – VLCC (length: 336 meters; beam: 56 meters; draft: 20 meters; block coefficient: 0.75) headed for home port, was transiting in confined waters. VLCC’s speed was 8 knots, depth soundings in the area indicated 30 meters and weather conditions were fair.
According to MacElrevey & MacElrevey, in the book “Shiphandler for the Mariner”, calculate the total squat that was degrading the VLCC’s maneuvering capabilities:`,
    alternativas: {
      A: "0.40 meter.",
      B: "0.48 meter.",
      C: "0.80 meter.",
      D: "0.96 meter.",
      E: "1.60 meter.",
    },
    correta: "D",
    comentario: `Fórmula simplificada de Barrass apresentada por MacElrevey:
Águas abertas (rasas, sem restrição lateral): S (m) = Cb × V² / 100
Águas confinadas: S (m) = 2 × Cb × V² / 100 (o dobro)

Cálculo: V² = 8² = 64 → Cb × V² / 100 = 0,75 × 64 / 100 = 0,48 m (águas abertas).
O enunciado diz "confined waters" → S = 2 × 0,48 = 0,96 m.
Comprimento, boca, calado e profundidade não entram na fórmula simplificada (a profundidade de 30 m para 20 m de calado apenas confirma a condição de águas rasas, h/T = 1,5).`,
    explicacoes: {
      A: "0,40 m não resulta da fórmula: seria o valor com Cb ≈ 0,62 em águas abertas. Com Cb = 0,75 e V = 8 nós o valor de águas abertas é 0,48 m, e a questão pede águas confinadas.",
      B: "0,48 m = 0,75 × 8² / 100 é o squat em águas ABERTAS. O enunciado diz que o navio está em águas confinadas, caso em que o valor deve ser dobrado.",
      C: "0,80 m seria o dobro de 0,40 m — parte de um valor de águas abertas errado. O valor correto de águas abertas é 0,48 m.",
      D: "S = 2 × Cb × V² / 100 = 2 × 0,75 × 64 / 100 = 0,96 m. Em águas confinadas o squat é o dobro do de águas abertas (0,48 m).",
      E: "1,60 m não decorre da fórmula (seria mais de três vezes o valor de águas abertas); a regra de MacElrevey/Barrass para águas confinadas é apenas dobrar: 0,96 m.",
    },
  },
  {
    id: "dpc2008-32",
    prova: "DPC 2008",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: "Uma embarcação naufraga próximo à margem do canal de acesso ao porto, passando a constituir um novo perigo à navegação naquela área. Assinale a opção correta no que diz respeito à sinalização deste novo perigo:",
    alternativas: {
      A: "deve ser sinalizado por iniciativa do responsável pelo balizamento local, que deverá imediatamente informar a sua ocorrência à Diretoria de Hidrografia e Navegação e ao Centro de Sinalização Náutica Almirante Moraes Rego.",
      B: "qualquer sinal luminoso usado com o propósito de sinalizá-lo deve ter a característica luminosa de um sinal de perigo isolado.",
      C: "poderá ser sinalizado, ainda, por um Racon, transmitindo a letra “P” em código Morse e mostrando o comprimento de uma milha náutica no radar.",
      D: "poderá ser sinalizado, ainda, por um Racon, transmitindo a letra “H” em código Morse e mostrando o comprimento de uma milha náutica no radar.",
      E: "pelo menos um dos sinais usados para balizá-lo deverá ser duplicado; o sinal usado para duplicação deve ser idêntico ao seu par em todos os aspectos.",
    },
    correta: "E",
    explicacoes: {
      A: "Pelo gabarito oficial, a afirmativa não reproduz o procedimento da NORMAM-17 para novos perigos (a comunicação e a responsabilidade pela sinalização do casco soçobrado não são as descritas). Conferir a redação da norma.",
      B: "No sistema IALA, a luz do sinal de novo perigo deve ter característica de sinal CARDINAL ou LATERAL com ritmo rápido ou muito rápido (Q ou VQ), e não a de perigo isolado (Fl(2)).",
      C: "O Racon de novo perigo transmite a letra Morse “D” (— · ·), com comprimento de sinal de 1 milha náutica na tela do radar — não a letra “P”.",
      D: "A letra é “D”, não “H”. O comprimento de 1 milha náutica está correto, mas a letra está errada.",
      E: "Regra da IALA/NORMAM-17 para novos perigos: se o perigo for especialmente grave, pelo menos um dos sinais deve ser duplicado, e o sinal duplicado deve ser idêntico ao seu par em todos os aspectos; permanece até que a informação sobre o perigo tenha sido suficientemente divulgada.",
    },
  },
  {
    id: "dpc2008-33",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: `Um navio mercante de bandeira brasileira estava sofrendo reparos no dique seco de um estaleiro em Itajaí, Santa Catarina. Um soldador do estaleiro, a bordo do navio, enquanto aplicava um cordão de solda entre duas chapas no costado, sofre um acidente fatal. No caso em questão, observando-se o previsto na Lei nº 2.180, de 5 de fevereiro de 1954, que dispõe sobre o Tribunal Marítimo, a Capitania dos Portos da jurisdição:

I) deve instaurar Inquérito Administrativo sobre Acidentes e Fatos da Navegação, em virtude de a vítima ser considerada pessoal da Marinha Mercante.
II) não deve instaurar Inquérito Administrativo sobre Acidentes e Fatos da Navegação, porque o navio estava no estaleiro, em reparos.
III) deve instaurar Inquérito Administrativo sobre Acidentes e Fatos da Navegação, porque o Tribunal Marítimo exerce jurisdição sobre os empreiteiros ou proprietários de estaleiros, carreiras, diques ou oficinas de reparação naval.
IV) deve instaurar Inquérito Administrativo sobre Acidentes e Fatos da Navegação, porque o acidente ocorreu a bordo de um navio de bandeira brasileira.
V) não deve tomar providência alguma, porque o evento não se enquadra como acidente ou fato da navegação.

Com relação às afirmativas acima, assinale a opção correta, dentre as indicadas abaixo:`,
    alternativas: {
      A: "I), II) e IV) são afirmativas falsas",
      B: "II), III) e V) são afirmativas falsas",
      C: "I), III) e IV) são afirmativas verdadeiras",
      D: "somente III) e IV) são afirmativas verdadeiras",
      E: "somente II) e V) são afirmativas verdadeiras",
    },
    correta: "C",
    comentario: `Pelo gabarito oficial (Lei nº 2.180/54):
I) Verdadeira — a lei considera pessoal da Marinha Mercante, para fins de jurisdição do Tribunal Marítimo, também o pessoal de estaleiros, diques e oficinas de reparação naval (art. 10 e seu rol de jurisdicionados).
II) Falsa — o fato de o navio estar em dique, em reparos, não afasta a jurisdição: estaleiros, carreiras, diques e oficinas estão expressamente incluídos.
III) Verdadeira — o art. 10 da lei estende a jurisdição do TM aos empreiteiros e proprietários de estaleiros, carreiras, diques ou oficinas de construção ou reparação naval.
IV) Verdadeira — o TM exerce jurisdição sobre embarcações mercantes de bandeira brasileira, onde quer que estejam.
V) Falsa — a morte de pessoa a bordo em decorrência de fato ligado à embarcação enquadra-se entre os fatos da navegação (art. 15), exigindo inquérito.`,
    explicacoes: {
      A: "Das três citadas, só a II) é falsa. I) e IV) são verdadeiras pelo gabarito: a vítima é equiparada a pessoal da Marinha Mercante e o evento ocorreu a bordo de navio brasileiro.",
      B: "II) e V) são de fato falsas, mas a III) é verdadeira: o art. 10 da Lei 2.180 inclui na jurisdição do TM os empreiteiros e proprietários de estaleiros, diques e oficinas de reparação naval.",
      C: "I), III) e IV) apresentam fundamentos válidos para a instauração do inquérito: vítima equiparada a pessoal da Marinha Mercante, jurisdição do TM sobre estaleiros e diques, e navio de bandeira brasileira.",
      D: "III) e IV) são verdadeiras, mas não \"somente\" elas: a I) também é verdadeira pelo gabarito.",
      E: "É o inverso: II) e V) são exatamente as duas afirmativas falsas. O navio em dique não afasta a jurisdição do TM, e a morte a bordo é fato da navegação.",
    },
  },
  {
    id: "dpc2008-34",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    enunciado: "For interaction between hull and propeller, we use the thrust deduction factor as a mean of deduct the thrust available at the propeller. According to the book “Principles of Naval Arquitecture” (PNA), the main reason for this deduction is that:",
    alternativas: {
      A: "around the stern, the relative velocity of the water past the hull will be less than the ship speed.",
      B: "the ship stern form a wave pattern and the water particles in the crest of the wave have a forward velocity.",
      C: "the pressure over some stern areas is reduced by the action of the propeller in accelerating the water flowing into it.",
      D: "the frictional drag of the hull causes a following current which increases in velocity and volume toward the stern.",
      E: "around the stern, the relative velocity of the water past the hull will be superior than the ship speed.",
    },
    correta: "C",
    explicacoes: {
      A: "Descreve a ESTEIRA (wake) — no caso, a componente potencial: a água em torno da popa passa pelo casco com velocidade relativa menor que a do navio. Isso fundamenta o fator de esteira (wake fraction), não a dedução de empuxo.",
      B: "É a componente de ONDAS da esteira (movimento orbital das partículas na crista da onda de popa). Também se refere ao wake, não ao thrust deduction.",
      C: "O hélice, ao acelerar a água que chega a ele, reduz a pressão sobre áreas da popa; essa perda de pressão a ré equivale a um aumento da resistência do casco (resistance augment). Parte do empuxo é gasta para vencê-lo — daí o fator de dedução de empuxo (t).",
      D: "É a componente FRICCIONAL da esteira (camada limite arrastada pelo casco, que cresce para ré). De novo, é causa do wake, não da dedução de empuxo.",
      E: "É o contrário do que ocorre: na popa a velocidade relativa da água é MENOR que a do navio (esteira positiva). E, de todo modo, velocidade relativa diz respeito à esteira, não à dedução de empuxo.",
    },
  },
  {
    id: "dpc2008-35",
    prova: "DPC 2008",
    tema: "Cerimonial",
    revisar: true,
    enunciado: `Um NM russo realizando sua viagem inaugural estará atracado no porto de Santos no período de 6 a 8 de setembro. Ainda no mar, o agente informa ao NM sobre as comemorações do Dia da Independência do Brasil e sobre as visitas oficiais que o embaixador russo no nosso País e o capitão dos portos farão ao navio em 7 de setembro. Lendo as Normas da Autoridade Marítima para o Cerimonial da Marinha Mercante Nacional (NORMAM-22/DPC), o agente indica os seguintes procedimentos relativos ao cerimonial que devem ser observados pelo NM:

I) içar a bandeira brasileira no tope do mastro de vante e a bandeira russa no mastro da popa quando entrando no porto.
II) durante o período atracado, manter içada a bandeira brasileira no tope do mastro de vante e a bandeira russa no mastro da popa, no período compreendido entre as 08:00 horas e o pôr-do-sol.
III) no dia 7 de setembro, embandeirar em arco no período compreendido entre as 08:00 horas e o pôr-do-sol.
IV) por ocasião das visitas oficiais, o comandante do NM deve receber e despedir as autoridades no patim superior da escada de portaló, tendo seus oficiais formados nas proximidades.
V) as bandeiras brasileiras precisam estar em bom estado de conservação.

Quais os procedimentos indicados pelo agente estão EQUIVOCADOS ou INCOMPLETOS?`,
    alternativas: {
      A: "I) e III)",
      B: "II) e IV)",
      C: "III) e IV)",
      D: "III) e V)",
      E: "IV) e V)",
    },
    correta: "C",
    comentario: `Pelo gabarito oficial (NORMAM-22):
I) Correto — navio estrangeiro em porto brasileiro iça a Bandeira do Brasil no tope do mastro de vante e a sua bandeira nacional no mastro da popa, ao entrar no porto.
II) Correto — atracado, as bandeiras permanecem içadas entre 08:00 e o pôr do sol.
III) Equivocado/incompleto — pelo gabarito. No embandeiramento em arco em data nacional brasileira, além das bandeiras de sinais em arco, a norma prevê a Bandeira Nacional brasileira içada nos topes dos mastros, o que o agente não mencionou (conferir a redação da norma).
IV) Equivocado/incompleto — pelo gabarito. Nas visitas oficiais a autoridade é recebida e despedida no portaló pelo comandante acompanhado de seus oficiais, com o cerimonial previsto na norma; o procedimento descrito pelo agente não o reproduz corretamente (conferir a redação da norma).
V) Correto — a Bandeira Nacional só pode ser usada em bom estado de conservação (Lei nº 5.700/71).`,
    explicacoes: {
      A: "A III) está mesmo equivocada/incompleta, mas a I) está correta: no porto estrangeiro iça-se a bandeira do país visitado no mastro de vante e a do próprio navio na popa.",
      B: "A IV) está equivocada/incompleta, mas a II) está correta: bandeiras içadas das 08:00 ao pôr do sol durante a permanência no porto.",
      C: "Pelo gabarito oficial, os procedimentos III) (embandeiramento em arco) e IV) (recepção das autoridades) são os que estão equivocados ou incompletos em relação à NORMAM-22.",
      D: "A III) está equivocada/incompleta, mas a V) está correta: a Bandeira Nacional deve estar sempre em bom estado de conservação.",
      E: "A IV) está equivocada/incompleta, mas a V) está correta (bandeira em bom estado é exigência legal).",
    },
  },
  {
    id: "dpc2008-36",
    prova: "DPC 2008",
    tema: "Arte Naval",
    enunciado: "No que se refere a aparelhos de laborar, a talha singela é um dos tipos mais aplicados a bordo para serviços gerais do convés. Pode ser descrita como:",
    alternativas: {
      A: "formada por um par de moitões, um fixo e outro móvel; tirador e arreigada fixa num mesmo moitão.",
      B: "constituída por um par de cadernais de dois gornes, ficando o tirador e a arreigada fixa num mesmo cadernal.",
      C: "formada por um cadernal de três gornes e um cadernal de dois gornes; o cadernal de três gornes pode ser a parte fixa ou a parte móvel do aparelho.",
      D: "constituída por um cadernal de dois gornes e um moitão; o cadernal, de onde sai o tirador, pode ser a parte fixa ou a parte móvel do aparelho.",
      E: "formada por um par de cadernais de três gornes; tirador e arreigada fixa num mesmo cadernal.",
    },
    correta: "D",
    explicacoes: {
      A: "Dois moitões (um fixo e um móvel), com tirador e arreigada no mesmo moitão, formam o TEQUE, não a talha singela.",
      B: "Dois cadernais de dois gornes formam a TALHA DOBRADA.",
      C: "Cadernal de três gornes com cadernal de dois gornes é a ESTRALHEIRA SINGELA.",
      D: "Talha singela: um cadernal de dois gornes e um moitão. O tirador sai do cadernal e a arreigada fixa é feita no moitão; o cadernal pode ficar como parte fixa ou como parte móvel (nesse caso, com maior multiplicação de força).",
      E: "Dois cadernais de três gornes formam a ESTRALHEIRA DOBRADA.",
    },
  },
  {
    id: "dpc2008-37",
    prova: "DPC 2008",
    tema: "GMDSS e Comunicações",
    tipo: "sequencia",
    revisar: true,
    enunciado: `O navio-tanque KATREVARO aproxima-se do porto de São Sebastião, onde atracará para descarregar óleo cru. O navio entra em contato com a atalaia do porto e os seguintes diálogos se realizam:

( ) Dialog: São Sebastião Pilot Station: “Please use IMO Standard Marine Communications Phrases.” — KATREVARO: “I will use IMO Standard Marine Communications Phrases.”
( ) Dialog: São Sebastião Pilot Station: “What is your position?” — KATREVARO: “My position is two-three degrees five-seven minutes zero-four five degrees two-nine decimal six.”
( ) Dialog: KATREVARO: “When will the pilot embark?” — São Sebastião Pilot Station: “Stand by one-five minutes.”

Após o embarque do prático, com o NT fundeado, este e o comandante travam os seguintes diálogos:

( ) Dialog: Pilot: “Are you ready to get underway?” — Captain: “We are ready to get underway.”
( ) Dialog: Pilot: “What is the diameter of the turning circle?” — Captain: “The diameter of the turning circle is three-zero-zero-zero metres.”
( ) Dialog: Pilot: “What is the speed at half ahead?” — Captain: “The speed at half ahead is eight knots.”

De acordo com o preconizado pelo “IMO Standard Marine Communication Phrases” (SMCP), indique com C os diálogos recomendados e com E os que não obedecem rigorosamente ao SMCP, desprezando as chamadas-fonia, e, a seguir, assinale a opção correta abaixo:`,
    alternativas: {
      A: "(C) (E) (C) (E) (C) (C)",
      B: "(E) (E) (E) (C) (E) (C)",
      C: "(C) (C) (E) (E) (C) (E)",
      D: "(C) (C) (E) (C) (E) (E)",
      E: "(E) (E) (C) (C) (C) (C)",
    },
    correta: "A",
    comentario: `Item a item (pelo gabarito oficial):
1º C — é o par de frases previsto na parte geral do SMCP: "Please use IMO Standard Marine Communication Phrases" / "I will use IMO Standard Marine Communication Phrases".
2º E — no SMCP a posição em latitude e longitude é dada em graus e minutos (e decimais de minuto) acompanhados de North/South e East/West. A resposta omite "South" e "West" e as unidades da longitude.
3º C — pelo gabarito; números falados algarismo a algarismo ("one-five minutes"), como manda o SMCP.
4º E — a resposta padronizada do SMCP é na primeira pessoa do singular e iniciada por "Yes": "Yes, I am ready to get underway". "We are ready..." não obedece rigorosamente ao padrão.
5º C — pergunta e resposta seguem o padrão das frases de características de manobra, com o número falado algarismo a algarismo.
6º C — idem: "What is the speed at half ahead?" / "The speed at half ahead is ... knots".`,
  },
  {
    id: "dpc2008-38",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    tipo: "sequencia",
    revisar: true,
    enunciado: `Considerando as Normas da Autoridade Marítima para Embarcações Empregadas na Navegação Interior (NORMAM-02/DPC), coloque falso (F) ou verdadeiro (V) nas afirmativas abaixo e assinale a opção correta:

( ) em situação de roda a roda, com visibilidade restrita, uma embarcação de propulsão mecânica navegando contra a corrente em rios ou canais tem preferência de passagem.
( ) luzes circulares amarelas avistadas em águas interiores brasileiras somente podem identificar: embarcação de propulsão mecânica rebocando, unidade integrada em movimento ou presença de tubulação de dragagem.
( ) toda embarcação deve adotar velocidade apropriada a não causar avarias, pela ação de maretas, quando for cruzar com embarcações pequenas, embarcações empurrando ou rebocando ou quando se aproximar de qualquer embarcação amarrada a um trapiche, cais e similares.
( ) uma embarcação de propulsão mecânica em movimento, com 90 metros de comprimento, restrita devido ao seu calado, pode exibir, entre o pôr e o nascer do sol, duas luzes de mastro, luzes de bordo, luz de alcançado e três luzes circulares encarnadas dispostas em linha vertical.
( ) uma unidade integrada em movimento deve exibir, entre o pôr e o nascer do sol, duas luzes de mastro, luzes de bordo e luz de alcançado; durante o período diurno, deve exibir três marcas dispostas em linha vertical, sendo a superior e a inferior esferas e a do meio uma marca em forma de dois cones com as bases unidas.`,
    alternativas: {
      A: "(F) (V) (V) (F) (F)",
      B: "(V) (V) (F) (F) (V)",
      C: "(F) (F) (V) (F) (V)",
      D: "(V) (F) (F) (V) (V)",
      E: "(F) (F) (V) (V) (F)",
    },
    correta: "E",
    comentario: `Item a item:
1º Falso — a preferência em rios e canais é da embarcação que navega A FAVOR da corrente (tem menos governo), e as regras de preferência valem para embarcações no visual; em visibilidade restrita não há embarcação com preferência.
2º Falso — o "somente" invalida a afirmativa: luzes circulares amarelas identificam também outras situações (por exemplo, a luz amarela intermitente de embarcação de colchão de ar, e a pesca com rede de cerco).
3º Verdadeiro — é a regra da NORMAM-02 sobre velocidade e maretas (marolas) ao cruzar com embarcações pequenas, comboios e embarcações atracadas.
4º Verdadeiro — embarcação de propulsão mecânica com mais de 50 m exibe duas luzes de mastro, luzes de bordo e alcançado; restrita pelo calado, PODE exibir ainda três luzes circulares encarnadas em linha vertical (Regra 28).
5º Falso — esfera / dois cones unidos pelas bases / esfera é a marca de embarcação com capacidade de manobra restrita, não de unidade integrada. A unidade integrada (empurrador e empurrado rigidamente ligados) é tratada como uma embarcação de propulsão mecânica, sem marca diurna especial.`,
  },
  {
    id: "dpc2008-39",
    prova: "DPC 2008",
    tema: "Navegação",
    enunciado: "De acordo com o livro “Navegação: A Ciência e a Arte”, de A. P. Miguens, com referência aos controles operacionais do radar, quando se deseja melhorar a imagem do radar pela supressão dos ecos produzidos pelo retorno do mar nas proximidades do navio, o operador faz os ajustes necessários por meio:",
    alternativas: {
      A: "do controle STC.",
      B: "do controle VRC.",
      C: "da chave de largura de pulso.",
      D: "do controle FTC.",
      E: "de uma apresentação estabilizada.",
    },
    correta: "A",
    explicacoes: {
      A: "STC (Sensitivity Time Control), o “anti-clutter sea”: reduz o ganho do receptor nas curtas distâncias e o restabelece progressivamente com o tempo (distância), suprimindo o retorno do mar junto ao navio.",
      B: "VRC não é controle de supressão de ecos; a sigla remete ao controle do marcador variável de distância, usado para medir distâncias.",
      C: "A largura de pulso afeta a discriminação em distância, a distância mínima e a potência média irradiada; não é o controle destinado a suprimir o retorno do mar.",
      D: "FTC (Fast Time Constant), o “anti-clutter rain”: diferencia o sinal para reduzir ecos extensos de chuva, neve e granizo — não o retorno do mar próximo ao navio.",
      E: "Apresentação estabilizada (norte acima, pela giro) refere-se à orientação da imagem, evitando que ela borre nas guinadas; não tem relação com supressão de ecos do mar.",
    },
  },
  {
    id: "dpc2008-40",
    prova: "DPC 2008",
    tema: "Navegação",
    revisar: true,
    enunciado: "According to Swift & Bailey, in the book “Bridge Team Management”, the plan of the passage having been made, discussed and approved, execution of the plan now has to be determined. By this is meant the methods used to carry out the plan, including the best use of available resources. Final details will need to be confirmed when the actual timing of the passage can be established. It must always be borne in mind that safe execution of the passage may only be achieved by:",
    alternativas: {
      A: "ensuring that watchkeepers of all descriptions are relieved of their duties well in advance of  being required on watch in order that they may rest.",
      B: "modification of the plan in the case of navigational equipment becoming unreliable or inaccurate or time changes having to be made e.g. delayed departure.",
      C: "briefing all concerned to ensure that all personnel are aware of their involvement in the proposed planned passage and also gives them the opportunity to query or comment on any part of the plan.",
      D: "ensuring that the passage plan and supporting information is available and to hand.",
      E: "delaying ETA at destination particularly where there may be no advantage to be gained by early arrival or where a pilot boarding time has been confirmed.",
    },
    correta: "B",
    explicacoes: {
      A: "O descanso prévio do pessoal de serviço é tratado pelo livro como medida de prevenção da fadiga, na organização da execução; não é a condição apontada no trecho para a execução segura.",
      B: "É o fecho do trecho de Swift & Bailey sobre a fase de execução: deve-se ter sempre em mente que a execução segura da travessia pode exigir a MODIFICAÇÃO do plano, caso equipamentos de navegação se tornem não confiáveis ou imprecisos, ou haja mudança de horários (por exemplo, atraso na partida).",
      C: "O briefing do pessoal envolvido é um dos preparativos da execução, recomendado pelo livro, mas não é a frase que completa o trecho.",
      D: "Ter o plano e as informações de apoio à mão é item da preparação do passadiço, não a condição indicada no trecho.",
      E: "A gestão do ETA (chegar na hora combinada, sem vantagem em antecipar) é tratada à parte como tática de execução; atrasar o ETA não é condição para a segurança da travessia.",
    },
  },
  {
    id: "dpc2008-41",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "No tocante ao controle do tráfego marítimo, de acordo com o previsto nas Normas da Autoridade Marítima para Tráfego e Permanência de Embarcações em Águas Jurisdicionais Brasileiras (NORMAM-08/DPC), um navio de carga, do tipo porta contêiner, de bandeira estrangeira, classificado para a navegação de longo curso, operando no mar territorial brasileiro, deverá adotar os seguintes procedimentos:",
    alternativas: {
      A: "compulsoriamente aderir ao SISTRAM; obrigado a enviar mensagem pelo LRIT; obrigado a enviar mensagem pelo SIMMAP; compulsoriamente recolher o valor da TUF de acordo com o valor da sua arqueação bruta.",
      B: "dispensado de aderir ao SISTRAM; obrigado a enviar mensagem pelo SIMMAP; dispensado de recolher o valor da TUF.",
      C: "compulsoriamente aderir ao SISTRAM; dispensado de enviar mensagem pelo LRIT por já ter aderido ao SISTRAM; dispensado de enviar mensagem pelo SIMMAP; dispensado de recolher o valor da TUF de acordo com o valor da sua tonelagem de porte bruto.",
      D: "compulsoriamente aderir ao SISTRAM; dispensado de enviar mensagem pelo LRIT por já ter aderido ao SISTRAM; dispensado de enviar mensagem pelo SIMMAP; compulsoriamente recolher o valor da TUF de acordo com o valor da sua arqueação bruta.",
      E: "compulsoriamente aderir ao SISTRAM; dispensado de enviar mensagem pelo SIMMAP; compulsoriamente recolher o valor da TUF de acordo com o valor da sua tonelagem de porte bruto.",
    },
    correta: "E",
    explicacoes: {
      A: "Erra em dois pontos: o SIMMAP (monitoramento do apoio marítimo às atividades de petróleo) não se aplica a um porta-contêiner, e a TUF (Tarifa de Utilização de Faróis) é calculada pela tonelagem de porte bruto (TPB), não pela arqueação bruta.",
      B: "Tudo invertido: navio estrangeiro no mar territorial brasileiro adere COMPULSORIAMENTE ao SISTRAM; o SIMMAP não se aplica a ele; e navio estrangeiro recolhe a TUF.",
      C: "O LRIT é obrigação SOLAS independente do SISTRAM — aderir a um não dispensa o outro — e o navio estrangeiro não é dispensado da TUF.",
      D: "Repete o erro de que o SISTRAM dispensaria o LRIT, e usa a base de cálculo errada para a TUF (é a tonelagem de porte bruto, não a arqueação bruta).",
      E: "Pelo gabarito (NORMAM-08): navio estrangeiro no mar territorial brasileiro adere compulsoriamente ao SISTRAM; o SIMMAP destina-se às embarcações de apoio marítimo à indústria do petróleo, não a um porta-contêiner; e a TUF é devida por embarcações estrangeiras, calculada conforme a tonelagem de porte bruto (TPB).",
    },
  },
  {
    id: "dpc2008-42",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    enunciado: "Um navio está navegando em um canal restrito em profundidade e largura. Sabe-se que a profundidade e a largura do canal são uniformes. Seu rumo é paralelo ao eixo central do canal, mas o navio está navegando a bombordo desse eixo. Quais serão as tendências do navio, de acordo com o livro “Principles of Naval Arquitecture” (PNA)?",
    alternativas: {
      A: "centro de gravidade com tendência para BB e proa com tendência para BB.",
      B: "centro de gravidade com tendência para BB e proa com tendência para BE.",
      C: "centro de gravidade com tendência para BE e proa com tendência para BE.",
      D: "centro de gravidade com tendência para BE e proa com tendência para BB.",
      E: "girar em torno do centro de gravidade com a proa caindo para BE.",
    },
    correta: "B",
    explicacoes: {
      A: "A sucção para BB está certa, mas a proa não vai para BB: o colchão de pressão entre a proa e a margem próxima (bow cushion) repele a proa para o centro do canal, isto é, para BE.",
      B: "Efeito de margem: fora do eixo, para bombordo, a água acelera no espaço mais estreito entre o casco e a margem de BB, baixando a pressão — o navio como um todo (centro de gravidade) é sugado para BB. Ao mesmo tempo, o momento de guinada resultante afasta a proa da margem próxima: a proa tende para BE (e a popa para a margem).",
      C: "O corpo do navio não é repelido para o centro: a força lateral é de SUCÇÃO em direção à margem mais próxima (BB). Só a tendência da proa (BE) está certa.",
      D: "As duas tendências estão invertidas: o navio é sugado para BB (margem próxima) e a proa é repelida para BE.",
      E: "A proa cai mesmo para BE, mas o navio não apenas gira: o PNA descreve uma força lateral de sucção que desloca o centro de gravidade para a margem próxima, além do momento de guinada.",
    },
  },
  {
    id: "dpc2008-43",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    enunciado: `In a single propeller ship going ahead, with a right-hand screw, as a blade moves downward it meets water which is moving upward as well as aft. This is equivalent to _________________ the relative velocity and the angle of attack at same time and thus, _________________ in thrust is experienced. On the opposite side, a ______________ in thrust is experienced. The net effect of the reaction to the inclined flow, then, is a _________________ tending to _____________the ship to the _____________.

According to R. S. Crenshaw, Jr., in the book “Naval Shiphandling”, which answer best fill in the blanks?`,
    alternativas: {
      A: "decrease - decrease – increase – thrust - turn – right",
      B: "decrease - decrease – increase – torque  - twist – left",
      C: "increase - increase – decrease – thrust - turn – right",
      D: "increase - increase – decrease – torque  - twist – left",
      E: "increase - decrease – increase – thrust - turn - left",
    },
    correta: "D",
    explicacoes: {
      A: "A pá que desce encontra água que SOBE: a velocidade relativa e o ângulo de ataque aumentam (não diminuem), e o empuxo desse lado aumenta. Além disso, o efeito resultante é um conjugado (torque) que leva a proa para a esquerda, não para a direita.",
      B: "O final (torque – twist – left) está certo, mas o início está invertido: a pá descendente tem AUMENTO de velocidade relativa e de ângulo de ataque, e portanto aumento de empuxo; é no lado oposto (pá que sobe) que o empuxo diminui.",
      C: "O início está certo (increase – increase – decrease), mas o resultado não é um \"thrust\" que guina para a direita: mais empuxo a boreste e menos a bombordo formam um conjugado (torque) que torce o navio para a ESQUERDA.",
      D: "Efeito de inclinação (Crenshaw): num hélice de passo direito a pá desce pelo lado de boreste e encontra o fluxo ascendente sob a popa — aumentam a velocidade relativa e o ângulo de ataque, e o empuxo cresce a boreste; a bombordo (pá subindo) o empuxo diminui. O resultado é um conjugado (torque) que tende a torcer (twist) o navio para a esquerda (proa a BB, popa a BE).",
      E: "Incoerente: se a velocidade relativa e o ângulo de ataque aumentam, o empuxo aumenta (não diminui). E o efeito é um conjugado (torque), não um empuxo.",
    },
  },
  {
    id: "dpc2008-44",
    prova: "DPC 2008",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Conforme previsto no capítulo 7 das Normas da Autoridade Marítima para Embarcações Empregadas na Navegação de Mar Aberto (NORMAM-01/DPC), a altura mínima de proa de uma embarcação de carga “NÃO SOLAS”, que possui boca moldada de 6 metros, pontal moldado de 2,5 metros e comprimento total de 32 metros, deve ser de:",
    alternativas: {
      A: "1 686 mm.",
      B: "1 566 mm.",
      C: "1 726 mm.",
      D: "1 846 mm.",
      E: "1 630 mm.",
    },
    correta: "C",
    comentario: `ATENÇÃO — justificativa NÃO conferida na norma. O capítulo 7 da NORMAM-01 (item "Altura mínima de proa – Hp", seção de borda-livre de embarcações "NÃO SOLAS") traz uma fórmula própria, que não foi possível consultar; a resposta 1 726 mm é a do gabarito oficial.
Referência útil: a fórmula clássica da Convenção de Linhas de Carga para L < 250 m é Hp = 56 × L × (1 − L/500) × 1,36/(Cb + 0,68) mm. Com L = 32 m e sem correção de Cb ela dá 56 × 32 × 0,936 = 1 677 mm, que não coincide com nenhuma alternativa; o valor do gabarito (1 726 mm) corresponde a essa expressão com L = 33 m (56 × 33 × 0,934 = 1 726). Isso indica que a fórmula/definição de comprimento da NORMAM difere da aplicada aqui — revisar diretamente no capítulo 7 da NORMAM-01 vigente à época.`,
    explicacoes: {
      A: "Pelo gabarito oficial, o valor correto é 1 726 mm. 1 686 mm fica próximo do que daria a fórmula clássica de linhas de carga com L = 32 m (≈1 677 mm), mas não é o resultado da fórmula do capítulo 7 da NORMAM-01.",
      B: "1 566 mm é inferior ao exigido; pelo gabarito oficial a altura mínima de proa para essa embarcação é 1 726 mm.",
      C: "Resposta do gabarito oficial: 1 726 mm, obtida pela fórmula de altura mínima de proa (Hp) do capítulo 7 da NORMAM-01 para embarcações “NÃO SOLAS” (cálculo não conferido — ver comentário).",
      D: "1 846 mm excede o valor da norma; pelo gabarito oficial o mínimo exigido é 1 726 mm.",
      E: "1 630 mm é inferior ao exigido; pelo gabarito oficial a altura mínima de proa é 1 726 mm.",
    },
  },
  {
    id: "dpc2008-46",
    prova: "DPC 2008",
    tema: "Manobra do Navio",
    tipo: "afirmativas",
    enunciado: `Before starting to practice in order to improve his ability to estimate his ship’s speed with accuracy, an inexperienced shiphandler studied the methods available by which the mariner can judge speed. During the study, he made a list with the following notes:

I) Doppler speed indicator showing lateral motion as well as ahead and stern speed is a valuable shiphandling tool, especially when moving larger ships where speed is critical and tolerance for error small.
II) fixes by radar or visual bearings are convenient and sufficiently accurate for determining speed in a docking situation.
III) even at night is better to estimate ship’s speed looking at objects abeam or little abaft than looking objects ahead of the ships.
IV) if the ship’s quickwater falls behind the ship when the engine is put astern, the vessel’s speed is 3 knots or more.

According to MacElrevey & MacElrevey, in the book “Shiphandler for the Mariner”, what is the correct alternative?`,
    alternativas: {
      A: "I), II) and III) solely are true",
      B: "I), III) and IV) solely are true",
      C: "II), III) and IV) solely are true",
      D: "I) and II) solely are true",
      E: "III) and IV) solely are true",
    },
    correta: "B",
    comentario: `I) Verdadeira — o Doppler que indica velocidade avante/a ré e o movimento lateral de proa e popa é ferramenta valiosa, sobretudo em navios grandes, em que a velocidade é crítica e a margem de erro, pequena.
II) Falsa — segundo o livro, posições por radar ou marcações visuais permitem calcular a velocidade, mas NÃO são práticas nem suficientemente precisas numa atracação.
III) Verdadeira — a velocidade é mais bem avaliada olhando objetos pelo través ou um pouco a ré dele (o movimento relativo é mais perceptível), inclusive à noite; olhando para vante tende-se a subestimá-la.
IV) Verdadeira — com máquina atrás, enquanto a água agitada pelo hélice (quickwater) fica para trás, o navio está a 3 nós ou mais; quando ela começa a avançar ao longo do costado, a velocidade está em torno de 2 nós; quando chega a meia-nau, o navio está praticamente parado.`,
  },
  {
    id: "dpc2008-47",
    prova: "DPC 2008",
    tema: "GMDSS e Comunicações",
    tipo: "sequencia",
    enunciado: `Considerando a estrutura adotada no Brasil para o Serviço de Busca e Salvamento Marítimo (SAR), de acordo com o livro “Arte Naval”, de Maurílio M. Fonseca, relacione a coluna A com a coluna B e aponte a resposta correta:

COLUNA A
(1) ComOpNav
(2) RENEC
(3) Capitania dos Portos
(4) Distrito Naval

COLUNA B
( ) MRCC regional
( ) Sistema de Alerta
( ) MRCC principal
( ) RSC
( ) SALVAMAR SUL`,
    alternativas: {
      A: "(3) (4) (4) (2) (1)",
      B: "(4) (2) (1) (3) (4)",
      C: "(1) (1) (2) (4) (3)",
      D: "(2) (4) (3) (1) (2)",
      E: "(1) (2) (2) (3) (4)",
    },
    correta: "B",
    comentario: `Item a item:
1º MRCC regional → Distrito Naval (4): cada Distrito Naval sedia um centro de coordenação regional (SALVAMAR regional).
2º Sistema de Alerta → RENEC (2): a Rede Nacional de Estações Costeiras mantém a escuta das frequências de socorro e retransmite os alertas.
3º MRCC principal → ComOpNav (1): o Comando de Operações Navais sedia o SALVAMAR BRASIL, centro coordenador principal.
4º RSC (subcentro de salvamento) → Capitania dos Portos (3): capitanias, delegacias e agências atuam como subcentros.
5º SALVAMAR SUL → Distrito Naval (4): é o MRCC regional do 5º Distrito Naval (Rio Grande).`,
  },
  {
    id: "dpc2008-48",
    prova: "DPC 2008",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: `Um navegante em navegação costeira, com céu limpo e estrelado, sem vento e com mar tranqüilo, atento à chegada de mau tempo, deve manter permanente busca por indícios de uma mudança das condições meteorológicas. Deve observar o estado do mar e do tempo, o céu e o vento, além das tendências indicadas pelos registros das leituras dos instrumentos de bordo. Interprete, a seguir, os indícios selecionados para evidenciar a chegada de mau tempo:

I) em determinado azimute do horizonte, ocorrência de trovões e movimento de nuvens cirrus.
II) vento força 3 de SW, passando a de N/NW, com formação rápida de nuvens stratus.
III) ocorrência de clarão de relâmpagos além do horizonte e vento força ¾ de N/NW, com ausência de pancadas de chuva.
IV) formação de nuvens paradas tipo cirrus de cristais de gelo.
V) trovoadas distantes e vento força 2 de NW, passando a 4, com ausência de rajadas de vento.

De acordo com Lobo & Soares, no livro “Meteorologia e Oceanografia – Usuário Navegante”, assinale a opção abaixo que contém todas as afirmativas verdadeiras apresentadas:`,
    alternativas: {
      A: "I), III) e V)",
      B: "II), IV) e V)",
      C: "I), II), III) e V)",
      D: "I) e IV)",
      E: "II) e IV)",
    },
    correta: "A",
    comentario: `Pelo gabarito oficial (Lobo & Soares), no Atlântico Sul o mau tempo frontal é anunciado por vento pré-frontal de N/NW refrescando, cirrus em movimento vindos de uma direção definida e trovoadas/relâmpagos distantes (Cb da frente ainda além do horizonte).
I) Verdadeira — trovões num azimute definido e cirrus EM MOVIMENTO indicam sistema frontal/Cb aproximando-se daquela direção.
II) Falsa — vento de SW (pós-frontal) rondando para N/NW significa que a frente já passou e o anticiclone pós-frontal está se afastando; stratus são nuvens de ar estável, não o prenúncio imediato do mau tempo.
III) Verdadeira — relâmpagos além do horizonte e vento pré-frontal de N/NW força 3/4, ainda sem pancadas: a frente está a caminho.
IV) Falsa — cirrus PARADOS são indício de bom tempo; os que anunciam mau tempo são os cirrus em movimento, que se adensam.
V) Verdadeira — trovoadas distantes com vento de NW refrescando (força 2 passando a 4), ainda sem rajadas: fase pré-frontal.`,
    explicacoes: {
      A: "I), III) e V) reúnem os indícios pré-frontais clássicos: trovoadas/relâmpagos distantes, cirrus em movimento e vento de N/NW refrescando, ainda sem pancadas ou rajadas.",
      B: "Só a V) é verdadeira. A II) descreve a rondada pós-frontal (SW para N/NW), e a IV) cita cirrus PARADOS, que são indício de bom tempo. Faltam I) e III).",
      C: "Contém as três verdadeiras, mas inclui a II), que é falsa: vento de SW passando a N/NW com stratus não é indício de chegada do mau tempo.",
      D: "A I) é verdadeira, mas a IV) é falsa (cirrus parados indicam bom tempo). Faltam III) e V).",
      E: "As duas são falsas: II) é a rondada pós-frontal com nuvens estratiformes, e IV) descreve cirrus parados, de bom tempo.",
    },
  },
  {
    id: "dpc2008-49",
    prova: "DPC 2008",
    tema: "Rebocadores",
    revisar: true,
    enunciado: "According to Capt. Henk Hensen, in the book “Tug Use in Port”, which sentence is WRONG when considering the disadvantages in use short towline when towing on a line?",
    alternativas: {
      A: "the shorter the towline, worst will be the absorption of dynamic forces and bigger will be the peak values of towlines loads.",
      B: "the towline strength should be capable of coping with the static forces that is higher for short towlines.",
      C: "when using short towlines, the friction force is very large, resulting in high temperatures and considerable wear so imperiling the towline’s life.",
      D: "when a tug is made fast as forward tug and is operating broadside while ship is moving astern, a short towline has a negative effect on tug safety.",
      E: "shorter the towline, bigger will be the wash effect, reducing pulling effectiveness.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta: cabo curto tem pouca elasticidade e pouca catenária, absorve mal as cargas dinâmicas e os picos de tração são maiores. Não é a resposta.",
      B: "Afirmação correta: com cabo curto o ângulo vertical do cabo é maior, e a força estática no cabo, para o mesmo efeito horizontal, é mais alta. Não é a resposta.",
      C: "Afirmação correta: com cabo curto e ângulos acentuados, o atrito nas buzinas/cabeços é muito grande, gerando calor e desgaste que comprometem a vida útil do cabo. Não é a resposta.",
      D: "É a afirmação ERRADA (gabarito). Segundo Hensen, o efeito do cabo curto sobre a segurança do rebocador manifesta-se quando ele opera atravessado com o navio com seguimento AVANTE (risco de emborcar, girting, com pouco tempo de reação). Com o rebocador de vante e o navio com seguimento a ré, o rebocador é arrastado pela proa, alinhando-se com o cabo — situação que não é agravada pelo cabo curto da forma descrita. (Conferir a redação no livro.)",
      E: "Afirmação correta: quanto mais curto o cabo, mais a descarga do hélice do rebocador incide sobre o casco do navio (wash effect), reduzindo a eficácia da tração. Não é a resposta.",
    },
  },
  {
    id: "dpc2008-50",
    prova: "DPC 2008",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `Nas anotações de um prático, tiradas do livro “Principles of Naval Arquitecture” (PNA), estava escrito:

I) quanto maior a relação área do canal / área da seção mestra, maior será a velocidade crítica para manobrabilidade.
II) navios com proa cheia e popa afilada são mais favoráveis a ter melhores qualidades de manobra em canais.
III) uma maneira prática de melhorar as qualidades de manobra de um navio em um canal é amarrar, com cabo de reboque, um rebocador na popa do navio.
IV) qualquer navio operando na linha de centro de um canal está numa posição de equilíbrio instável.

Quais das afirmativas acima estão corretas?`,
    alternativas: {
      A: "Todas",
      B: "I), II) e III)",
      C: "I), II) e IV)",
      D: "II), III) e IV)",
      E: "II) e III)",
    },
    correta: "A",
    comentario: `Obs.: no PDF original o quarto item aparece rotulado como "III)" por erro de digitação; aqui foi transcrito como IV).
I) Verdadeira — quanto menor o bloqueio (maior a razão entre a área do canal e a da seção mestra), mais alta a velocidade em que os efeitos de margem tornam o navio incontrolável.
II) Verdadeira — segundo o PNA, formas com proa cheia e popa fina mostraram melhor comportamento em canais (menor momento de guinada por efeito de margem e melhor fluxo no leme).
III) Verdadeira — um rebocador com cabo na popa atua como um "leme" adicional/estabilizador, recurso prático apontado pelo PNA.
IV) Verdadeira — no eixo do canal as forças de margem se equilibram, mas qualquer afastamento gera sucção para a margem mais próxima, que tende a aumentar o desvio: equilíbrio instável, exigindo leme constante.`,
    explicacoes: {
      A: "As quatro anotações reproduzem conclusões do PNA sobre manobra em canais: velocidade crítica e bloqueio (I), forma do casco (II), rebocador na popa (III) e equilíbrio instável no eixo do canal (IV).",
      B: "Deixa de fora a IV), que é verdadeira: no eixo do canal o navio está em equilíbrio instável.",
      C: "Deixa de fora a III), que é verdadeira: o rebocador com cabo na popa melhora o controle do navio no canal.",
      D: "Deixa de fora a I), que é verdadeira: quanto maior a relação área do canal/área da seção mestra, maior a velocidade crítica.",
      E: "II) e III) são verdadeiras, mas I) e IV) também são.",
    },
  },
);

// Prova escrita DPC 2012 (PSCPP/2012 – Prova Rosa) — questões 26 a 50.
// Letra correta: gabarito oficial do PDF (texto em vermelho). Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2012-26",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: "De acordo com o contido no livro “Bridge Team Management - A Practical Guide” (Captain A. J. Swift, FNI e Captain T. J. Bailey, FNI - 2ª edição: 2004), o  alcance geográfico de um farol depende da combinação de dois fatores:",
    alternativas: {
      A: "Intensidade da luz emitida e condições de visibilidade na área.",
      B: "Intensidade da luz emitida e altura  em que se encontra o observador.",
      C: "Altura do farol e altura em que se encontra o observador.",
      D: "Altura do farol e condições de visibilidade na área.",
      E: "Altura do farol e intensidade da luz emitida.",
    },
    correta: "C",
    explicacoes: {
      A: "Intensidade da luz e visibilidade definem o alcance LUMINOSO, não o geográfico.",
      B: "A altura do observador entra no alcance geográfico, mas a intensidade da luz não: ela pertence ao alcance luminoso/nominal.",
      C: "O alcance geográfico é puramente geométrico: é a distância em que a curvatura da Terra permite ver a luz, função apenas da altura (elevação) do farol e da altura do olho do observador.",
      D: "A altura do farol está certa, mas as condições de visibilidade afetam o alcance luminoso, não o geográfico.",
      E: "A altura do farol está certa, mas a intensidade da luz determina o alcance luminoso/nominal, não o geográfico; falta a altura do observador.",
    },
  },
  {
    id: "dpc2012-27",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: "O NM Aporé, durante a navegação no canal de São Sebastião, para atracar em um dos terminais do porto, é surpreendido por uma tempestade com ventos fortes e chuva torrencial, que reduzem a visibilidade para 300 jardas, obrigando a equipe de navegação a utilizar linhas de posição radar para determinar a posição do navio. A navegação radar vinha transcorrendo normalmente, com o navio navegando no rumo verdadeiro 280°, quando foi determinada a utilização de determinado controle do radar para amenizar os efeitos da chuva na apresentação do PPI. Cerca de quinze minutos após o acionamento do referido controle, a tela do radar alterou a sua apresentação, mostrando uma imagem com a proa do navio para cima, na direção da graduação 000° do PPI. Assinale, dentre as opções abaixo, aquela que resume a causa do ocorrido:",
    alternativas: {
      A: "Avaria na antena do radar que parou de girar.",
      B: "Avaria nos circuitos do controle STC.",
      C: "Avaria nos circuitos do controle FTC.",
      D: "Avaria na agulha giroscópica.",
      E: "Avaria nos circuitos do controle de ganho.",
    },
    correta: "D",
    explicacoes: {
      A: "Com a antena parada a imagem deixaria de ser atualizada (apenas um setor seria pintado); não haveria mudança de orientação da apresentação.",
      B: "O STC (anti-sea clutter) atua sobre o ganho a curtas distâncias para reduzir o retorno do mar; uma avaria nele altera a intensidade dos ecos próximos, não a orientação do PPI.",
      C: "O FTC (anti-rain clutter) é justamente o controle acionado para amenizar a chuva, mas é um distrator: sua avaria afetaria a diferenciação dos ecos, nunca a orientação da imagem.",
      D: "O navio estava em apresentação estabilizada (norte para cima), com a linha de proa em 280°. Essa estabilização depende do sinal da giro; ao perdê-lo, o radar reverte para a apresentação não estabilizada, de proa para cima, com a linha de fé em 000°. É exatamente o sintoma descrito.",
      E: "Avaria no ganho deixaria a imagem fraca/sem ecos ou saturada, mas não mudaria a orientação da apresentação.",
    },
  },
  {
    id: "dpc2012-28",
    prova: "DPC 2012",
    tema: "Sinalização Náutica",
    revisar: true,
    enunciado: `De acordo com o contido no livro "Navegação: A Ciência e a Arte" (Altineu Pires Miguens - 1ª edição: 1996), um sistema de balizamento fluvial/lacustre deve ser baseado em diversos princípios e regras especiais. Analise as afirmativas abaixo, identifique quais as verdadeiras e assinale a opção correta:

I) Deve ser utilizado, de preferência, balizamento fluvial flutuante (boias), devido às dificuldades e elevados custos de manutenção dos sinais fixos.
II) Nas hidrovias interiores, sempre que as características se assemelharem às do ambiente marítimo, devem ser utilizados os sinais previstos para o balizamento marítimo, considerando-se como “direção convencional do balizamento” o sentido de montante para jusante.
III) Na sinalização fluvial entende-se por margem esquerda  a margem situada do lado direito de quem está navegando de jusante para montante.
IV) No balizamento lacustre, para o caso particular de lagos não associados a rios navegáveis, a "direção convencional de balizamento" será relacionada ao sentido Norte-Sul verdadeiro.
V) Os sinais complementares para o balizamento fluvial ou lacustre são sinais fixos flutuantes, constituídos por boias com painel de forma quadrangular e de cor laranja ou amarela, exibindo um ou mais símbolos de cor branca ou preta, revestidos com material refletor.`,
    alternativas: {
      A: "Apenas as afirmativas II) e V) são verdadeiras.",
      B: "Apenas as afirmativas III) e IV) são verdadeiras.",
      C: "Apenas as afirmativas II) e III) são verdadeiras.",
      D: "Apenas as afirmativas IV e V) são verdadeiras.",
      E: "Apenas as afirmativas I) e II) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Falsa — é o inverso: no balizamento fluvial devem ser preferidos os sinais FIXOS (nas margens), porque as boias é que são de manutenção difícil e cara nos rios (correnteza, troncos, variação de nível).
II) Falsa — a “direção convencional do balizamento” nas hidrovias é de JUSANTE para MONTANTE (subindo o rio, como quem vem do mar), não de montante para jusante.
III) Verdadeira — as margens são nomeadas de quem DESCE o rio; logo, a margem esquerda fica à direita de quem sobe (de jusante para montante).
IV) Verdadeira (gabarito oficial) — em lagos não associados a rios navegáveis a direção convencional é referida ao sentido Norte–Sul verdadeiro.
V) Falsa — os sinais complementares são sinais FIXOS, instalados nas margens (painéis), e não boias; a expressão “fixos flutuantes” é contraditória.`,
    explicacoes: {
      A: "Cita duas falsas: II (a direção convencional é de jusante para montante) e V (os sinais complementares são fixos, nas margens, não boias). Omite III e IV, verdadeiras.",
      B: "Combinação correta: III (margem esquerda fica à direita de quem sobe o rio) e IV (em lagos isolados, direção convencional referida ao Norte–Sul verdadeiro).",
      C: "A III é verdadeira, mas a II é falsa: a direção convencional do balizamento é de jusante para montante, não o contrário. Omite a IV.",
      D: "A IV é verdadeira, mas a V é falsa: sinais complementares são painéis FIXOS nas margens, não boias. Omite a III.",
      E: "Cita duas falsas: I (a preferência é por sinais fixos, não flutuantes) e II (direção convencional invertida). Omite III e IV, verdadeiras.",
    },
  },
  {
    id: "dpc2012-29",
    prova: "DPC 2012",
    tema: "Navegação",
    revisar: true,
    enunciado: "De acordo com o contido no livro \"Navegação: A Ciência e a Arte\" (Altineu Pires Miguens - 1ª edição: 1996), para se iluminar uma carta, traçando-se os contornos das áreas perigosas à navegação, empregando-se o critério das profundidades, deve-se tomar como base uma profundidade igual:",
    alternativas: {
      A: "Ao calado do navio, somado ao valor da MHWN da área navegada.",
      B: "Ao calado do navio, acrescido do valor do nível de redução (NR) da carta utilizada.",
      C: "Ao calado do navio, acrescido de 2m  ou de 15% do calado, o que for maior.",
      D: "A uma vez e meia o calado do navio.",
      E: "À soma do calado do navio com a menor amplitude da maré esperada para a área, na ocasião considerada.",
    },
    correta: "C",
    explicacoes: {
      A: "A MHWN (média das preamares de quadratura) é um nível de maré, não uma margem de segurança sob a quilha; somá-la ao calado não é o critério do livro.",
      B: "O nível de redução é o plano de referência das sondagens da carta, não um valor a ser somado ao calado.",
      C: "Pelo gabarito oficial, é o critério de Miguens para “iluminar” a carta: delimitar como perigosas as áreas com profundidade inferior ao calado do navio acrescido de 2 m ou de 15% do calado, o que for maior.",
      D: "“Uma vez e meia o calado” (50% de margem) não é o critério do livro; a margem indicada é 2 m ou 15% do calado, o que for maior.",
      E: "A maré esperada não entra no traçado das áreas perigosas (as sondagens já estão referidas ao NR, condição conservadora); o critério é calado mais margem fixa/percentual.",
    },
  },
  {
    id: "dpc2012-30",
    prova: "DPC 2012",
    tema: "Rebocadores",
    enunciado: "De acordo com o contido no livro “Rebocadores Portuários - CONAPRA” (Otávio Fragoso e Marcelo Cajaty - 1ª edição: 2002), analise as afirmativas abaixo e assinale a opção INCORRETA:",
    alternativas: {
      A: "A principal vantagem dos rebocadores cicloidais (Voith Schneider), além de poderem atuar para vante ou para a ré com a mesma força de tração, é a velocidade com que as alterações do sentido da aplicação e intensidade da força podem ser realizadas.",
      B: "Normalmente, os rebocadores azimutais com propulsão a vante possuem maior calado que os rebocadores cicloidais, não sendo, portanto, indicados para manobras em águas de pouca profundidade.",
      C: "Em relação aos rebocadores tratores, os tratores reversos e os ASD, devido à localização dos propulsores na popa, correm menor risco de ter esses propulsores atingidos em caso de colisão ou encalhe, assim como operam com menores calados.",
      D: "O método de assistência/utilização com cabo de reboque passado na proa do navio é especialmente favorável à atuação dos rebocadores do tipo tratores, pois, tendo os propulsores a vante, conseguem se aproximar da proa do navio.",
      E: "Os rebocadores azimutais tipo ASD compartilham as qualidades dos tratores reversos com as dos rebocadores convencionais, o que lhes permite grande flexibilidade na forma de atuação.",
    },
    correta: "B",
    explicacoes: {
      A: "Afirmação correta: o sistema Voith Schneider muda direção e intensidade do empuxo quase instantaneamente, com força praticamente igual para vante e para ré. Não é a resposta.",
      B: "É a INCORRETA: é o contrário — os tratores CICLOIDAIS (Voith Schneider), com suas pás verticais e placa protetora sob o casco, é que têm maior calado; os tratores azimutais têm calado menor que eles.",
      C: "Afirmação correta: com os propulsores na popa, tratores reversos e ASD ficam menos expostos a avarias em colisão/encalhe e têm calado menor que os tratores (propulsores sob o casco a vante). Não é a resposta.",
      D: "Afirmação correta: com os propulsores a vante e o ponto de reboque a ré, o trator se aproxima e trabalha com segurança junto à proa do navio. Não é a resposta.",
      E: "Afirmação correta: o ASD pode trabalhar como trator reverso (pela proa do rebocador) ou como convencional (gato a meia-nau), daí sua flexibilidade. Não é a resposta.",
    },
  },
  {
    id: "dpc2012-31",
    prova: "DPC 2012",
    tema: "Rebocadores",
    enunciado: "De acordo com o contido no livro “Rebocadores Portuários - CONAPRA” (Otávio Fragoso e Marcelo Cajaty - 1ª edição: 2002), em qualquer situação a força requerida para o dispositivo de reboque em uma manobra portuária deve ser suficiente não apenas para movimentar o navio assistido, mas para interromper o seu movimento e, mais ainda, deve ser capaz de superar as forças contrárias ao sentido do movimento desejado. Assim, é correto afirmar que:",
    alternativas: {
      A: "A força requerida será calculada em função somente das características principais do navio assistido (deslocamento, calado, área de obras vivas e de obras mortas).",
      B: "A força requerida será calculada em função somente das características principais do navio (deslocamento, calado, área de obras vivas e de obras mortas), associadas com as condições previstas para o local onde a manobra será realizada (intensidade e direção do vento, intensidade e rumo da corrente, características das vagas e profundidade).",
      C: "A força requerida será calculada em função somente das características principais do navio (deslocamento, calado, área de obras vivas e de obras mortas), associadas com as condições locais (intensidade e direção do vento, intensidade e rumo da corrente, características das vagas e profundidade) e número de rebocadores disponíveis para a manobra.",
      D: "O total calculado da força requerida deverá corresponder, no mínimo, à capacidade de força de tração estática (bollard pull) do rebocador com menor potência a ser utilizado na manobra.",
      E: "O total calculado da força requerida deverá corresponder, no máximo, à capacidade de força de tração estática (bollard pull) do rebocador com maior potência a ser utilizado na manobra.",
    },
    correta: "B",
    explicacoes: {
      A: "Incompleta: as características do navio, sozinhas, não bastam. As forças a vencer (vento sobre as obras mortas, corrente sobre as obras vivas, vagas, efeito de águas rasas) dependem das condições do local.",
      B: "A força requerida resulta das características do navio (deslocamento, calado, áreas de obras vivas e mortas) combinadas com as condições ambientais previstas no local (vento, corrente, vagas e profundidade) — são elas que determinam as forças contrárias a superar.",
      C: "O número de rebocadores DISPONÍVEIS não entra no cálculo da força necessária: a força requerida é que define quantos e quais rebocadores serão empregados, não o contrário.",
      D: "A força requerida deve ser atendida pelo CONJUNTO dos rebocadores (soma dos bollard pulls), não comparada com a tração do rebocador menos potente.",
      E: "Não há por que limitar a força requerida ao bollard pull do rebocador mais potente; se ela for maior, empregam-se mais rebocadores. O total requerido é atendido pela soma das trações.",
    },
  },
  {
    id: "dpc2012-32",
    prova: "DPC 2012",
    tema: "Rebocadores",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Tug use in Port, a Practical Guide” (Captain Henk Hensen - 2ª edição: 2002), analise as afirmativas  abaixo, identifique se verdadeiras (V)  ou falsas (F), e assinale a opção correta:

I) A eficácia da manobra de um navio com a utilização de rebocadores depende, além do cálculo do “bollard pull” requerido, da escolha do tipo mais apropriado para ser utilizado e do seu correto posicionamento.
II) Os rebocadores de propulsão a vante, denominados tractor tugs, são normalmente divididos em dois tipos: Voith-Schneider e Azimutais.
III) Os tratores reversos são mais efetivos quando operando com o cabo de reboque passado na proa do navio assistido. Os rebocadores convencionais são mais efetivos quando o cabo de reboque é passado a ré do navio assistido ou quando atuando no costado (push-pull).
IV) O método de utilização com cabo de reboque em ação direta (direct towing method) é o mais utilizado para puxar a popa do navio na direção em que se deseja aplicar a força, para prestar assistência ao governo do navio ou controlar a sua velocidade.
V) O método de utilização com cabo de reboque em ação indireta (indirect towing method) é o mais utilizado para puxar a proa do navio na direção em que se deseja aplicar a força, para prestar assistência ao governo do navio com baixa velocidade.`,
    alternativas: {
      A: "(V) (V) (V) (F) (V)",
      B: "(V) (F) (F) (V) (F)",
      C: "(F) (V) (V) (F) (F)",
      D: "(F) (F) (V) (V) (V)",
      E: "(V) (V) (F) (V) (F)",
    },
    correta: "E",
    comentario: `Item a item:
1º Verdadeiro — além da tração necessária, contam o tipo de rebocador e o seu posicionamento (braço de alavanca, método de assistência).
2º Verdadeiro — os tractor tugs (propulsão a vante) dividem-se em Voith-Schneider (cicloidais) e azimutais.
3º Falso — está invertido: o convencional rende melhor como rebocador de PROA, com cabo passado (towing on a line); o trator reverso (propulsão a ré, reboque pela sua proa) é mais efetivo como rebocador de POPA ou no costado, em push-pull.
4º Verdadeiro (gabarito oficial) — no método direto o rebocador de popa puxa a popa do navio na direção desejada, ajudando no governo e no controle da velocidade.
5º Falso — o método indireto é empregado pelo rebocador de POPA e em velocidades MAIS ALTAS (usa a força hidrodinâmica sobre o casco/skeg do rebocador); não serve para puxar a proa com baixa velocidade.`,
  },
  {
    id: "dpc2012-33",
    prova: "DPC 2012",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "A Agência Marítima Gaivota solicitou serviço de praticagem, para a desatracação e navegação de praticagem da embarcação Bons Ventos, à única empresa de praticagem existente na ZP. Após a confirmação do pedido, a entidade de praticagem informou à Agência que, em período de escala, estava sendo designado o Prático Ariosto Vieira e que ele atenderia a embarcação às 10h de 15/10/2012. O Prático, entretanto, sem participar qualquer impedimento à empresa de praticagem ou à embarcação, só embarcou às 16h desse dia. Diante do caso apresentado, e tendo em vista o disposto na NORMAM-12/DPC, é correto afirmar que:",
    alternativas: {
      A: "Trata-se de um caso de recusa do Prático e a CP/DL/AG deverá instaurar um Inquérito de Acidentes e Fatos da Navegação para, nos termos do disposto na LESTA, apurar responsabilidades e fundamentar as penalidades cabíveis, se for o caso.",
      B: "Trata-se de um caso de recusa do Prático e a CP/DL/AG deverá autuar o Prático e a entidade de praticagem, nos termos do disposto na LESTA.",
      C: "Não se trata de um caso de recusa do Prático e a CP/DL/AG deverá notificar o próprio Prático, nos termos do disposto na LESTA, apurar responsabilidades e fundamentar as penalidades cabíveis, se for o caso.",
      D: "Trata-se de um caso de recusa do Prático e a CP/DL/AG deverá instaurar Inquérito Administrativo para, nos termos do disposto na LESTA, apurar responsabilidades e fundamentar as penalidades cabíveis, se for o caso.",
      E: "Não se trata de um caso de recusa do Prático e a CP/DL/AG deverá notificar a empresa de praticagem, nos termos do disposto na LESTA, apurar responsabilidades e fundamentar as penalidades cabíveis, se for o caso.",
    },
    correta: "D",
    explicacoes: {
      A: "A caracterização como recusa está certa, mas o instrumento não: o IAFN destina-se a apurar acidentes e fatos da navegação (para o Tribunal Marítimo). Pelo gabarito oficial, a NORMAM-12 prevê para a recusa a instauração de INQUÉRITO ADMINISTRATIVO.",
      B: "É recusa, mas a norma não manda autuar de imediato o Prático e a entidade: primeiro instaura-se Inquérito Administrativo para apurar responsabilidades e fundamentar eventuais penalidades.",
      C: "Pelo gabarito oficial, o prático escalado que, sem comunicar impedimento, deixa de atender a embarcação no horário designado caracteriza RECUSA ao serviço (a LESTA veda a recusa do prático em período de escala). Não basta uma simples notificação.",
      D: "Pelo gabarito oficial: o não atendimento no horário, pelo prático em período de escala e sem comunicação de impedimento, é tratado pela NORMAM-12 como recusa; a CP/DL/AG instaura Inquérito Administrativo para, nos termos da LESTA, apurar responsabilidades e fundamentar as penalidades cabíveis.",
      E: "É caso de recusa, e a conduta apurada é a do Prático (que não participou impedimento nem à empresa); não se resolve com notificação à empresa de praticagem.",
    },
  },
  {
    id: "dpc2012-34",
    prova: "DPC 2012",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: `Tendo por base o disposto na Portaria nº 156/MB, de 03/06/2004, do Comandante da Marinha, que estabelece a estrutura da Autoridade Marítima e delega competências, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Compete ao Diretor de Portos e Costas, como Representante da Autoridade Marítima para o Meio Ambiente, comunicar ao órgão regulador da indústria do petróleo as irregularidades encontradas durante a fiscalização de embarcações, plataformas e suas instalações de apoio atinentes àquela indústria.
II) Compete ao Comandante de Operações Navais, como Representante da Autoridade Marítima para a Segurança do Tráfego Aquaviário, promover a execução da inspeção naval.
III) Compete ao Diretor-Geral de Navegação, como Representante da Autoridade Marítima para a Segurança do Tráfego Aquaviário, determinar a elaboração e a edição de cartas e publicações náuticas sob responsabilidade do Brasil.
IV) Compete aos Comandantes de Distritos Navais, como Representantes da Autoridade Marítima para o Socorro e Salvamento, coordenar as ações de redução de danos relacionados com sinistros marítimos e fluviais e o salvamento de náufragos.
V) Compete aos Comandantes de Distritos Navais, como Representantes da Autoridade Marítima para a Segurança do Tráfego Aquaviário, promover a fiscalização dos procedimentos para a segurança do transporte aquaviário de material nuclear.`,
    alternativas: {
      A: "Apenas as afirmativas I, II, IV e V são verdadeiras.",
      B: "Apenas as afirmativas II, III e IV são verdadeiras.",
      C: "Apenas as afirmativas I, IV e V são verdadeiras.",
      D: "Apenas as afirmativas I, III e IV são verdadeiras.",
      E: "Apenas as afirmativas III, IV e V são verdadeiras.",
    },
    correta: "C",
    comentario: `I) Verdadeira (gabarito oficial) — atribuição do DPC como Representante da Autoridade Marítima para o Meio Ambiente.
II) Falsa (gabarito oficial) — promover a execução da inspeção naval não é atribuição do Comandante de Operações Navais nessa qualidade; a inspeção naval é executada no âmbito dos Distritos Navais/Capitanias, sob orientação técnica da DPC.
III) Falsa (gabarito oficial) — a elaboração e edição de cartas e publicações náuticas é atribuição do Diretor de Hidrografia e Navegação (Representante para a Segurança da Navegação), não do Diretor-Geral de Navegação.
IV) Verdadeira (gabarito oficial) — atribuição dos Comandantes de Distritos Navais como Representantes para o Socorro e Salvamento.
V) Verdadeira (gabarito oficial) — atribuição dos Comandantes de Distritos Navais como Representantes para a Segurança do Tráfego Aquaviário.
Confira a redação exata na Portaria nº 156/MB.`,
    explicacoes: {
      A: "Inclui a II, falsa pelo gabarito (promover a execução da inspeção naval não cabe ao Comandante de Operações Navais).",
      B: "Inclui II e III, falsas pelo gabarito (inspeção naval não é do ComOpNav; cartas náuticas são do Diretor de Hidrografia e Navegação), e omite I e V.",
      C: "Combinação do gabarito oficial: I (DPC – Meio Ambiente), IV (DN – Socorro e Salvamento) e V (DN – Segurança do Tráfego Aquaviário).",
      D: "Inclui a III, falsa pelo gabarito (cartas e publicações náuticas cabem ao Diretor de Hidrografia e Navegação, não ao DGN), e omite a V.",
      E: "Inclui a III, falsa pelo gabarito, e omite a I, verdadeira.",
    },
  },
  {
    id: "dpc2012-35",
    prova: "DPC 2012",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Um navio petroleiro de bandeira brasileira, com arqueação bruta 25000, fundeia na baía da Ilha Grande, na área do porto organizado, após ter recebido petróleo de um FPSO posicionado na Bacia de Campos. O comandante do navio aliviador pretende iniciar a transferência do petróleo para outro navio, atracado a contrabordo, às 22:00 horas do mesmo dia, com o apoio de empresa prestadora desse tipo de serviço. No tocante aos aspectos atinentes ao tráfego e permanência de embarcações em águas jurisdicionais brasileiras, previstos da NORMAM-08/DPC, e considerando o período desde o recebimento do petróleo até o início da transferência na baía da Ilha Grande, é correto afirmar que:",
    alternativas: {
      A: "O petroleiro deve ser dotado de LRIT e ter, obrigatoriamente, aderido ao SISTRAM e ao PREPS. A empresa prestadora do serviço deve manter uma embarcação dedicada junto ao local da transferência, dotada com seções de barreiras de contenção de óleo.",
      B: "O petroleiro deve ser dotado de LRIT e ter, obrigatoriamente, aderido ao SISTRAM e ao SIMMAP. A empresa prestadora de serviço deve lançar barreira de contenção de óleo antes do início da operação, e manter uma embarcação dedicada junto ao local da transferência.",
      C: "O petroleiro deve ser dotado de LRIT e, obrigatoriamente, ter aderido ao SIMMAP, cabendo-lhe também lançar barreira de contenção de óleo antes do início da operação. A empresa prestadora do serviço deve manter uma embarcação dedicada junto ao local da transferência, dotada com seções de barreiras de contenção de óleo.",
      D: "O petroleiro deve ser dotado de LRIT e, obrigatoriamente, ter aderido ao SISTRAM. A empesa prestadora do serviço deve lançar barreira de contenção de óleo antes do início da operação, e manter uma embarcação dedicada junto ao local da transferência.",
      E: "O petroleiro, obrigatoriamente, deve aderir ao SISTRAM, e, voluntariamente, pode ter aderido ao SIMMAP e ao PREPS. A empresa prestadora do serviço deve lançar barreira de contenção de óleo antes do início da operação, e manter uma embarcação dedicada junto ao local da transferência.",
    },
    correta: "D",
    explicacoes: {
      A: "O PREPS é o programa de rastreamento de embarcações PESQUEIRAS — não se aplica a petroleiro. Além disso, pelo gabarito, a barreira deve ser LANÇADA antes da operação, não apenas mantida a bordo da embarcação dedicada.",
      B: "A parte da empresa está certa, mas o SIMMAP (monitoramento do apoio marítimo às atividades de petróleo) não é obrigatório para o navio aliviador; pelo gabarito, a adesão obrigatória é só ao SISTRAM, além do LRIT.",
      C: "Troca o SISTRAM pelo SIMMAP e atribui ao navio o lançamento da barreira: pelo gabarito, essa obrigação é da empresa prestadora do serviço, que também mantém a embarcação dedicada.",
      D: "Pelo gabarito oficial: navio de bandeira brasileira desse porte deve ter LRIT e participação obrigatória no SISTRAM; na transferência de óleo entre navios (ship-to-ship) a empresa prestadora do serviço lança a barreira de contenção antes do início da operação e mantém embarcação dedicada junto ao local.",
      E: "Omite o LRIT, que é obrigatório para o navio, e menciona o PREPS (rastreamento de pesqueiros), que nada tem a ver com petroleiro.",
    },
  },
  {
    id: "dpc2012-36",
    prova: "DPC 2012",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Uma plataforma semissubmersível de bandeira brasileira em fase final de reparo, atracada em Cingapura, é abalroada por um navio mercante de bandeira do Panamá. A plataforma sofre danos que comprometem sua estrutura e parte do sistema de fundeio. Não houve vítimas. Com base na Lei 2.180/1954, que dispõe sobre o Tribunal Marítimo, é correto afirmar que:",
    alternativas: {
      A: "Não há necessidade de ser instaurado IAFN, em virtude de envolver navio de bandeira estrangeira e em águas estrangeiras, estando, portanto, fora da jurisdição do Tribunal Marítimo.",
      B: "Deverá ser instaurado IAFN pela Capitania dos Portos do primeiro porto brasileiro de escala ou arribada da plataforma.",
      C: "Não há necessidade de instauração de IAFN, em virtude de a plataforma não ser considerada embarcação, não estando, portanto, sujeita ao registro no Tribunal Marítimo, além de o acidente ter ocorrido em águas estrangeiras.",
      D: "Deverá ser instaurado IAFN pela Capitania dos Portos de inscrição da plataforma, tão logo seja notificada pela autoridade consular da zona, devendo a Capitania enviar peritos brasileiros ao local.",
      E: "Deverá ser instaurado IAFN pela autoridade consular da zona, que poderá nomear, como peritos, dois capitães de marinha mercante estrangeira, caso não haja navio de guerra brasileiro no porto ou em águas da sua jurisdição.",
    },
    correta: "E",
    explicacoes: {
      A: "A jurisdição do Tribunal Marítimo alcança as embarcações BRASILEIRAS em qualquer lugar (Lei 2.180, art. 10): o acidente com a plataforma de bandeira brasileira deve ser apurado, ainda que em águas estrangeiras e com navio estrangeiro envolvido.",
      B: "Com a embarcação em porto estrangeiro, a lei atribui o inquérito à autoridade consular da zona, não à Capitania do primeiro porto brasileiro de escala (regra aplicável a acidentes em viagem, quando o primeiro porto é nacional).",
      C: "A Lei 2.180 (com a redação dada pela Lei 9.578/97) equipara a embarcação, para fins de jurisdição do TM, as plataformas e demais construções flutuantes; e o local estrangeiro não afasta a jurisdição sobre embarcação brasileira.",
      D: "A lei não prevê que a Capitania de inscrição instaure o inquérito e envie peritos ao exterior; a competência no estrangeiro é da autoridade consular.",
      E: "Pelo gabarito oficial e conforme a Lei 2.180 (art. 33 e seguintes): ocorrendo o acidente com embarcação brasileira em porto estrangeiro, o inquérito cabe à autoridade consular da zona, que, não havendo navio de guerra brasileiro no porto ou em águas de sua jurisdição (cujos oficiais serviriam de peritos), poderá nomear como peritos dois capitães da marinha mercante estrangeira.",
    },
  },
  {
    id: "dpc2012-37",
    prova: "DPC 2012",
    tema: "Legislação e Normas",
    tipo: "sequencia",
    enunciado: `De acordo com o que prevêem as Normas da Autoridade Marítima para Inquéritos Administrativos sobre Acidentes e Fatos da Navegação (IAFN) e para a Investigação de Segurança dos Acidentes e Incidentes Marítimos (ISAIM) – NORMAM-09/DPC no tocante às definições de acidentes e fatos da navegação, analise as afirmativas abaixo, identifique se verdadeiras (V) ou falsas (F) e assinale a opção correta:

( ) Uma embarcação classificada para a navegação interior, navegando em mar aberto, constitui fato da navegação, tendo em vista a impropriedade da embarcação para o local em que está sendo utilizada.
( ) O comandante de um navio petroleiro, totalmente carregado, identifica uma avaria estrutural grave, quando em viagem, e determina que parte da carga seja lançada ao mar. Esse fato constitui-se em acidente da navegação, por provocar poluição hídrica.
( ) Um mestre-amador conduzindo embarcação de esporte e recreio observa que está havendo alagamento progressivo pelas buchas dos eixos propulsores e decide encalhar na margem do rio em que navegava. Esse fato configura acidente da navegação, pela ocorrência de água aberta seguida de varação.
( ) Um navio de bandeira estrangeira realizando passagem inocente em águas jurisdicionais brasileiras deixa, deliberadamente, de atender ao pedido de socorro de uma embarcação que está naufragando nas suas proximidades. A recusa injustificada de socorro a embarcação ou a náufragos em perigo configura fato da navegação.`,
    alternativas: {
      A: "(V) (F) (V) (V)",
      B: "(V) (V) (F) (F)",
      C: "(F) (F) (V) (V)",
      D: "(V) (V) (F) (V)",
      E: "(F) (F) (V) (F)",
    },
    correta: "A",
    comentario: `Item a item:
1º Verdadeiro — o mau aparelhamento ou a impropriedade da embarcação para o serviço/local em que é utilizada é FATO da navegação.
2º Falso — lançar carga ao mar para salvar o navio é ALIJAMENTO, que por si só já é acidente da navegação; a justificativa dada (“por provocar poluição hídrica”) está errada — poluição não figura no rol de acidentes da navegação.
3º Verdadeiro — a entrada de água pelas buchas dos eixos é ÁGUA ABERTA, e o encalhe deliberado para salvar a embarcação é VARAÇÃO; ambos são acidentes da navegação.
4º Verdadeiro — a recusa injustificada de socorro a embarcação ou a náufragos em perigo é FATO da navegação, e ocorreu em águas jurisdicionais brasileiras.`,
  },
  {
    id: "dpc2012-38",
    prova: "DPC 2012",
    tema: "Meteorologia e Oceanografia",
    enunciado: "Dirigia-se o prático na lancha da praticagem, para embarcar, fora da barra, em um NM de 300m de comprimento, 40m de boca, e 13m de calado, a fim de realizar a faina de praticagem no Porto do Rio de Janeiro, quando o comandante do navio o chamou na fonia para informar que estava pronto para recebê-lo e que governaria no rumo verdadeiro 315º até o seu embarque, a fim de minorar, num dos bordos, os efeitos da passagem de uma frente fria que trouxe um vento normalmente característico e ondulações resultantes. Em face da situação apresentada, assinale qual das afirmativas abaixo é a correta quanto ao bordo recomendável para a aproximação da lancha e embarque do prático no NM.",
    alternativas: {
      A: "BB, porque o navio, ao receber o vento pelo través de BE promove alterações no estado do mar no bordo oposto.",
      B: "BB, por tornar a aproximação e embarque mais seguros.",
      C: "BE, porque o vento reinante na área aproxima a lancha em direção ao navio.",
      D: "BE, porque é o bordo que apresenta abrandamento do estado do mar.",
      E: "Qualquer dos bordos, desde que a velocidade do navio seja compatível com a velocidade da lancha.",
    },
    correta: "D",
    explicacoes: {
      A: "O vento não entra por BE: após a passagem de frente fria no Rio de Janeiro o vento característico é de SW (≈ 225°). No rumo 315° ele incide pelo través de BOMBORDO; BB é o bordo castigado, não o abrigado.",
      B: "BB é o bordo de barlavento (vento e ondulação de SW pelo través de BB no rumo 315°): é onde o embarque é mais perigoso.",
      C: "O bordo está certo, mas o motivo não: a BE a lancha fica a sotavento, abrigada pelo casco — o vento não a “empurra em direção ao navio”. A razão é o abrandamento do mar (fazer sombra).",
      D: "Frente fria no Sudeste traz vento e ondulação de SW. Governando em 315° (NW), o navio recebe SW (225°) a 90° por BOMBORDO, e o costado de 300 m faz “sombra” a BORESTE: BE é o bordo de sotavento, com mar abrandado, recomendável para a lancha e a escada de prático.",
      E: "O comandante guinou para 315° justamente para criar um bordo abrigado; com vento e ondulação pelo través, os bordos não são equivalentes, por mais que a velocidade esteja ajustada.",
    },
  },
  {
    id: "dpc2012-39",
    prova: "DPC 2012",
    tema: "Meteorologia e Oceanografia",
    enunciado: "O Prático Francisco está preocupado com a manobra que irá iniciar dentro de duas horas, pois o NM Itararé encontra-se com pouca carga, apresentando, desta forma, uma área vélica considerável. Ao analisar a carta sinótica do dia, verificou que não existem sistemas frontais na região. O embarque no ponto de espera de prático está previsto para as 18h, quando o vento soprará com intensidade de 15 nós, do mar para terra, o que dificultará as guinadas ao longo do canal de acesso ao porto. Considerando a situação apresentada e o contido no livro “Meteorologia e Oceanografia - Usuário Navegante” (Paulo Roberto Valgas Lobo e Carlos Alberto Soares - 2ª edição: 2007), é correto afirmar que o vento reinante por ocasião do embarque do Prático é devido:",
    alternativas: {
      A: "À circulação direta, na qual o vento sopra do local onde o ar encontra-se frio (mais denso), para onde o ar está quente (menos denso).",
      B: "À circulação ciclônica reinante, por força de um centro de baixa pressão que se desloca ao norte da área do porto.",
      C: "À influência da brisa marítima local que, nessas horas do dia, sopra normalmente em direção ao mar.",
      D: "Ao deslocamento de um centro de alta pressão que passa sobre a área do porto no dia da manobra prevista.",
      E: "À ocorrência de convergência, que pode estar associada à redução de velocidade do escoamento do ar da circulação horizontal.",
    },
    correta: "A",
    explicacoes: {
      A: "Vento do mar para a terra no fim da tarde, sem sistemas sinóticos atuando, é a BRISA MARÍTIMA — exemplo clássico de circulação térmica direta: a terra aquecida durante o dia torna o ar menos denso, e o ar mais frio e denso sobre o mar escoa em direção a ela.",
      B: "O enunciado afasta causas sinóticas (a carta não mostra sistemas na região) e nada indica um centro de baixa; o vento descrito é um efeito local de aquecimento diferencial.",
      C: "Identifica a brisa marítima, mas erra o sentido: a brisa marítima sopra DO MAR PARA A TERRA. Quem sopra em direção ao mar é a brisa terrestre (terral), à noite/madrugada.",
      D: "Sob o centro de um anticiclone os ventos são fracos e variáveis; não explica um vento de 15 nós soprando do mar para a terra ao entardecer.",
      E: "Convergência é um conceito da circulação horizontal associado a movimento vertical do ar; não é a causa de um vento local mar→terra de fim de tarde.",
    },
  },
  {
    id: "dpc2012-40",
    prova: "DPC 2012",
    tema: "Navegação",
    enunciado: `Está prevista a atracação de um NM no Porto de Itaqui, baía de São Marcos (MA), às 10h de um determinado dia. Sabe-se, do Roteiro Costa Norte, que na baía de São Marcos as correntes de maré têm a direção N a NE, nas vazantes, e S a SE nas enchentes. Seus valores máximos ocorrem de 3 a 4 horas após a preamar, nas vazantes, e de 2 a 3 horas após a baixa-mar, nas enchentes, podendo atingir até 6 nós, o que requer especial atenção para seus efeitos, com o navio navegando ou fundeado. Cabendo ao Prático Pedro assessorar a manobra de atracação, ele verificou na publicação “Tábuas das Marés” que a _________________ em Itaqui ocorrerá às 06:15h, razão pela qual selecionou a carta de correntes de maré para os portos de São Luís e Itaqui ______________ da ____________.
Assim, considerando o horário previsto para a atracação, assinale a opção que completa corretamente as lacunas acima:`,
    alternativas: {
      A: "preamar / do instante / baixa-mar.",
      B: "preamar / de 4 horas depois / preamar.",
      C: "baixa-mar / de 4 horas depois / baixa-mar.",
      D: "preamar / de 3 horas antes / preamar.",
      E: "baixa-mar / de 3 horas depois / preamar.",
    },
    correta: "B",
    explicacoes: {
      A: "Incoerente: se a preamar é às 06:15, a atracação às 10h ocorre ≈ 4 h depois dela, e não no instante da baixa-mar (que só viria por volta das 12h30). Além disso, as cartas de correntes de maré são referidas à PREAMAR.",
      B: "As cartas de correntes de maré da DHN são referidas à hora da PREAMAR no porto (de 6 h antes a 6 h depois). Com a preamar às 06:15 e a atracação às 10:00 (≈ 3h45 depois), a carta a consultar é a de “4 horas depois da preamar” — justamente o período de vazante máxima citado pelo Roteiro.",
      C: "A conta de horas fecha, mas não existem cartas de correntes de maré referidas à baixa-mar: todas são referidas à preamar.",
      D: "Com a preamar às 06:15, “3 horas antes da preamar” corresponde a ≈ 03:15, não ao horário da atracação (10h).",
      E: "Incoerente: se às 06:15 ocorre a baixa-mar, a preamar só ocorrerá por volta das 12h30; às 10h se estaria ≈ 2h30 ANTES da preamar, não 3 horas depois.",
    },
  },
  {
    id: "dpc2012-41",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: `De acordo com o contido no livro “Principles of Naval Architecture” (SNAME – 3a edição:1988/1989) a respeito dos componentes da resistência ao avanço de um navio em águas tranquilas, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Grande parte do componente da resistência ao avanço devido à geração de ondas é causado pela parte superior do casco em contato com a água e junto à linha d’água.
II) Em baixa velocidade, as ondas geradas pelo navio são diminutas, e a resistência ao avanço passa a ser quase que totalmente constituída pelos componentes de resistência viscosa do casco.
III) Experimentos realizados demonstram que, mesmo para cascos lisos ou com baixa rugosidade de navios novos, a resistência de atrito corresponde a 80 a 85% da resistência total em navios de baixa velocidade e chega a 50% da resistência total em navios de alta velocidade, quando navegando em alta velocidade.
IV) A resistência devido à geração de vórtices é causada pela formação de redemoinhos provocados por distúrbios nas linhas de corrente devido a alterações abruptas de forma, apêndices ou outras projeções do casco abaixo da linha d’água, mas exclui os vórtices que geram o atrito tangencial ao casco.`,
    alternativas: {
      A: "Todas as afirmativas são verdadeiras.",
      B: "Apenas as afirmativas III) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I) e II) são verdadeiras.",
      E: "Apenas a afirmativas I), II) e IV)  são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — as ondas são um fenômeno de superfície livre: a perturbação de pressão que as gera vem principalmente da parte do casco próxima à linha-d’água.
II) Verdadeira — a resistência de ondas cresce rapidamente com a velocidade; em baixa velocidade ela é desprezível e predomina a resistência viscosa.
III) Verdadeira — são os percentuais do PNA: atrito ≈ 80–85% da resistência total em navios lentos e ainda ≈ 50% em navios rápidos, mesmo com casco novo e liso.
IV) Verdadeira — é a definição de “eddy-making resistance”: redemoinhos/separação causados por mudanças bruscas de forma e apêndices, distinta do atrito tangencial da camada limite.`,
    explicacoes: {
      A: "As quatro afirmativas reproduzem o PNA: ondas geradas sobretudo junto à linha-d’água (I), predomínio viscoso em baixa velocidade (II), atrito de 80–85% (navios lentos) a 50% (rápidos) da resistência total (III) e definição da resistência de vórtices (IV).",
      B: "Não inclui afirmativa falsa, mas deixa de fora I e II, que também são verdadeiras.",
      C: "Deixa de fora a II, verdadeira: em baixa velocidade a geração de ondas é mínima e a resistência é quase toda viscosa.",
      D: "Deixa de fora III e IV, verdadeiras (percentuais do atrito e definição da resistência de vórtices segundo o PNA).",
      E: "Deixa de fora a III, verdadeira: os percentuais de 80–85% e 50% são os citados pelo PNA.",
    },
  },
  {
    id: "dpc2012-42",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: `De acordo com o contido sobre  cavitação no livro “Principles of Naval Architecture” (SNAME – 3a edição:1988/1989), analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Devido aos tipos de hélices empregados e às velocidades de operação típicas, tal fenômeno não ocorre em navios mercantes, somente preocupando quem projeta ou opera embarcações de recreio de alta velocidade ou navios militares.
II) É um fenômeno encontrado em hélices propulsores submetidos a cargas severas, onde, a partir de um valor específico de rotações, ocorre uma progressiva quebra no escoamento e consequente perda de tração.
III) A cavitação ocasiona danos que podem ocorrer principalmente devido ao processo de colapso de bolhas formadas na superfície das pás dos hélices propulsores.
IV) Apesar de ser usual assumir que a cavitação deve ocorrer quando a pressão nas pás do hélice atingir a pressão de vapor da água, tal fenômeno pode ocorrer antes disso, pois a água do mar possui ar dissolvido e arrastado, o que antecipa a formação de bolhas.`,
    alternativas: {
      A: "Todas as afirmativas são verdadeiras.",
      B: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I) e III) são verdadeiras.",
      D: "Apenas a afirmativa IV) é verdadeira.",
      E: "Apenas as afirmativas I) e II) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Falsa — a cavitação também ocorre (e preocupa) em navios mercantes, cujos hélices são fortemente carregados; não é exclusividade de lanchas rápidas e navios de guerra.
II) Verdadeira — é a descrição do PNA: em hélices muito carregados, acima de certa rotação crítica o escoamento se rompe progressivamente e há perda de empuxo.
III) Verdadeira — a erosão das pás decorre sobretudo do colapso (implosão) das bolhas junto à superfície da pá.
IV) Verdadeira — o ar dissolvido e arrastado na água do mar serve de núcleo para as bolhas, de modo que a cavitação começa antes de a pressão local cair até a pressão de vapor.`,
    explicacoes: {
      A: "Não são todas: a I é falsa — a cavitação também ocorre em hélices de navios mercantes, que trabalham muito carregados.",
      B: "II (quebra do escoamento e perda de tração acima de certa rotação), III (danos pelo colapso das bolhas) e IV (início antes da pressão de vapor por causa do ar dissolvido) são verdadeiras; a I é falsa.",
      C: "Inclui a I, falsa (a cavitação não é exclusiva de embarcações rápidas/militares), e deixa de fora II e IV, verdadeiras.",
      D: "A IV é verdadeira, mas II e III também são; a alternativa as deixa de fora.",
      E: "Inclui a I, falsa, e deixa de fora III e IV, verdadeiras.",
    },
  },
  {
    id: "dpc2012-43",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: "De acordo com o contido no livro “Principles of Naval Architecture” (SNAME – 3a edição: 1988/1989), o trajeto de uma curva de giro quando o leme de um navio é mantido em um ângulo fixo é, em geral, caracterizado por quatro medidas numéricas: avanço, transferência, diâmetro tático e diâmetro de giro constante. Considerando os eixos fixos em relação à Terra x e y, em que o eixo x se localiza sobre o plano diametral, no sentido popa-proa do navio, antes do início da guinada, e o eixo y se orienta perpendicularmente ao eixo x na direção do través do navio no sentido BE, antes do início da guinada, é correto afirmar, para uma guinada a BE, que:",
    alternativas: {
      A: "Transferência é a distância, medida no eixo x, percorrida pelo centro de gravidade da embarcação, desde o instante de início da deflexão do leme até o instante em que a proa do navio tenha guinado 90 graus.",
      B: "Avanço é a distância, medida no eixo y, percorrida pelo centro de gravidade da embarcação, desde o instante de início da deflexão do leme até o instante em que a proa do navio tenha guinado 180 graus.",
      C: "Diâmetro de giro constante é a distância, medida no eixo y, percorrida pelo centro de gravidade da embarcação, desde o instante de início da deflexão do leme até o instante em que a proa da embarcação tenha guinado 180 graus.",
      D: "O diâmetro de giro constante é alcançado na curva de giro após o estabelecimento do equilíbrio final de forças sobre o navio, sendo menor que o diâmetro tático.",
      E: "Nenhuma das afirmativas acima é verdadeira.",
    },
    correta: "D",
    explicacoes: {
      A: "Eixo trocado: a transferência é medida no eixo y (perpendicular ao rumo inicial), até a proa guinar 90°. A distância no eixo x até os 90° é o AVANÇO.",
      B: "Eixo e ângulo trocados: o avanço é medido no eixo x (na direção do rumo inicial), até a proa ter guinado 90° — não no eixo y nem aos 180°.",
      C: "Essa é a definição do DIÂMETRO TÁTICO (distância no eixo y até a proa guinar 180°). O diâmetro de giro constante é o do círculo descrito na fase permanente da curva.",
      D: "Na terceira fase da curva de giro as forças e momentos entram em equilíbrio e o navio descreve um círculo de raio constante; o diâmetro desse círculo (steady turning diameter) é, em geral, menor que o diâmetro tático.",
      E: "Falsa, pois a alternativa D está correta.",
    },
  },
  {
    id: "dpc2012-44",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: "De acordo com o contido no “Squat Interaction Manoeuvring” (The Nautical Institute, edição: 1995), percebem-se diversas indicações de que um navio atingiu uma região de águas rasas. Das indicações listadas abaixo, assinale a INCORRETA:",
    alternativas: {
      A: "Aumenta a geração de ondas na extremidade de vante do casco.",
      B: "A capacidade de manobra do navio diminui, tornando as reações mais lentas.",
      C: "Os movimentos de afundamento (heaving), balanço transversal (rolling) e arfagem (pitching) aumentam, devido ao aumento de pressão hidrodinâmica causado pela proximidade do fundo.",
      D: "O navio pode começar a vibrar repentinamente por conta de ressonância, devido ao fluido arrastado pelo casco.",
      E: "A resistência ao avanço do navio aumenta e sua velocidade decai, apesar de manter a mesma potência do motor principal.",
    },
    correta: "C",
    explicacoes: {
      A: "Indicação correta de águas rasas: a onda de proa (e o sistema de ondas gerado) aumenta. Não é a resposta.",
      B: "Indicação correta: em águas rasas o navio fica “preguiçoso”, responde mais lentamente ao leme e às máquinas. Não é a resposta.",
      C: "É a INCORRETA: em águas rasas os movimentos de heave, roll e pitch DIMINUEM — o colchão de água confinado sob a quilha amortece esses movimentos.",
      D: "Indicação correta: podem surgir vibrações repentinas por ressonância associada à massa de água arrastada pelo casco. Não é a resposta.",
      E: "Indicação correta: a resistência cresce e, para a mesma potência, a velocidade (e as rotações) caem. Não é a resposta.",
    },
  },
  {
    id: "dpc2012-45",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `De acordo com o contido no “Squat Interaction Manoeuvring” (The Nautical Institute, edição: 1995), considerando as interações entre navios e entre navios e canais estreitos, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Em águas rasas, a interação navio-navio torna-se mais severa do que aquela originada puramente por causas hidrodinâmicas em águas profundas.
II) Navegando em um canal, junto à margem por BE, a interação sofrida pelo navio devido aos chamados “bank effects” pode ser, em princípio, contrabalançada carregando o leme para uma posição adequada, de modo a manter o navio guinando para BE.
III) Em uma manobra de “head-on passing”, um navio navegando em um canal estreito sofre um pequeno aumento de velocidade no início da interação com outro navio, podendo ocorrer uma leve redução da sua velocidade no final da passagem.
IV) Um rebocador com propulsão convencional, quando operando ao longo de um navio de grande porte, sofre mudanças repentinas nos sentidos das forças e momentos gerados pela interação com o navio, à medida que ele altera sua posição em relação à popa e à proa do navio.
V) O efeito “squat” sofrido por um navio pode ser medido através da diferença das leituras entre os calados na proa com o navio em movimento adiante e com o navio parado.`,
    alternativas: {
      A: "Apenas as afirmativas II), III) e V) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas  III), IV) e V) são verdadeiras.",
      D: "Apenas as afirmativas I, III, IV e V são verdadeiras.",
      E: "Apenas as afirmativas I, II, III e IV são verdadeiras.",
    },
    correta: "E",
    comentario: `I) Verdadeira — a pouca profundidade restringe o escoamento e amplifica as forças de interação entre navios.
II) Verdadeira — junto à margem de BE a popa é sugada para a margem e a proa repelida (tendência de guinar para BB); compensa-se com leme para o lado da margem (BE).
III) Verdadeira (gabarito oficial) — no cruzamento roda a roda há pequeno ganho de velocidade no início da interação e possível leve perda no final.
IV) Verdadeira — ao longo do costado de um navio grande o rebocador atravessa zonas de pressão alta (proa/popa) e baixa (meio-navio): forças e momentos de interação mudam de sentido bruscamente conforme a posição.
V) Falsa (gabarito oficial) — o squat é a redução da folga abaixo da quilha resultante de afundamento paralelo MAIS variação de trim, e o seu valor máximo pode ocorrer na proa ou na popa, conforme a forma do casco; a simples diferença de leituras de calado na proa não o mede adequadamente.`,
    explicacoes: {
      A: "Inclui a V, falsa pelo gabarito (o squat combina afundamento e trim e pode ser máximo na popa; não se mede só pela leitura do calado na proa), e deixa de fora I e IV, verdadeiras.",
      B: "Não inclui afirmativa falsa, mas deixa de fora a III, verdadeira pelo gabarito (variações de velocidade no “head-on passing”).",
      C: "Inclui a V, falsa pelo gabarito, e deixa de fora I e II, verdadeiras.",
      D: "Inclui a V, falsa pelo gabarito, e deixa de fora a II, verdadeira (o efeito de margem é compensado com leme para o lado da margem).",
      E: "Combinação do gabarito oficial: I, II, III e IV verdadeiras; apenas a V é falsa.",
    },
  },
  {
    id: "dpc2012-46",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: `De acordo com o contido sobre esforços hidrodinâmicos sobre um navio em movimento no livro “Naval Shiphandling” (Crenshaw, Russel Sidnor, Jr – 4ª edição: 1975), analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) A diferença de pressão resultante causada pelo movimento da água é proporcional à densidade da água e ao quadrado da velocidade do movimento.
II) Em um navio com dois eixos propulsores instalados, com propulsores idênticos girando em sentidos opostos para movimentar o navio adiante ou a ré, a força lateral exercida sobre o navio devido à ação dos propulsores é o dobro da força lateral que ocorreria caso o navio fosse dotado com apenas um desses propulsores.
III) A velocidade do ar deve ser aproximadamente 30 vezes a velocidade da água, para que a pressão dinâmica resultante da ação dos movimentos do ar e da água, sobre um mesmo corpo e aplicada sob as mesmas condições, seja a mesma.
IV) Considerando-se um hidrofólio como sendo um corpo projetado para obter uma força de sustentação quando inclinado em relação à direção do fluxo da água, a força de arrasto (drag) é definida como sendo a componente da força exercida nesse corpo que atua na direção paralela ao fluxo de corrente livre relativo (relative free stream flow) da água.
V) Um submarino dotado com apenas um propulsor, quando navegando isolado em grande profundidade e em mar aberto, não sofre ação apreciável, na sua popa, da força lateral gerada pela rotação do propulsor.`,
    alternativas: {
      A: "Apenas as afirmativas  I), II), IV) e V) são verdadeiras.",
      B: "Apenas as afirmativas  I), III), IV) e V) são verdadeiras.",
      C: "Apenas as afirmativas  I), II), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas  III), IV) e (V) são verdadeiras.",
      E: "Apenas as afirmativas  II), III) e IV) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Verdadeira — pressão dinâmica = ½·ρ·V²: proporcional à densidade e ao quadrado da velocidade.
II) Falsa — com dois propulsores idênticos girando em sentidos OPOSTOS, as forças laterais são iguais e contrárias e se ANULAM; não se somam.
III) Verdadeira — a água é cerca de 800–900 vezes mais densa que o ar; como a pressão varia com V², o ar precisa de √(≈ 850) ≈ 30 vezes a velocidade para produzir a mesma pressão.
IV) Verdadeira — arrasto é a componente da força paralela ao escoamento livre relativo; sustentação (lift) é a componente perpendicular.
V) Verdadeira — a força lateral nasce da assimetria do escoamento entre a parte de cima e a de baixo do disco do hélice (proximidade da superfície e do casco); no submarino profundamente imerso o escoamento é simétrico e a força lateral é inapreciável.`,
    explicacoes: {
      A: "Inclui a II, falsa (com hélices girando em sentidos opostos as forças laterais se anulam, não dobram), e deixa de fora a III, verdadeira (≈ 30 vezes).",
      B: "I (½ρV²), III (ar ≈ 30 vezes mais veloz para a mesma pressão), IV (definição de arrasto) e V (submarino mergulhado não sente força lateral) são verdadeiras; só a II é falsa.",
      C: "Inclui a II, falsa (as forças laterais de hélices contrarrotativos se cancelam), e deixa de fora a V, verdadeira.",
      D: "Não inclui afirmativa falsa, mas deixa de fora a I, verdadeira (pressão proporcional a ρ e a V²).",
      E: "Inclui a II, falsa, e deixa de fora I e V, verdadeiras.",
    },
  },
  {
    id: "dpc2012-47",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: `De acordo com o contido sobre esforços gerados na embarcação no livro “Naval Shiphandling” (Crenshaw, Russel Sidnor, Jr – 4ª edição: 1975), analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Em um navio dotado com um único propulsor, a grandeza da força lateral (side force) causada pelo propulsor varia com o tipo de navio e com o tipo da estrutura sob a água nas vizinhanças do propulsor.
II) Um propulsor girando para a direita, visto pela popa, tende a forçar a popa a deslocar-se para a esquerda.
III) Um propulsor girando para esquerda, visto pela popa, tende a forçar a popa a deslocar-se para a direita.
IV) Em um navio dotado de dois propulsores com sentidos de rotação inversos, para gerar empuxo adiante, quando o propulsor de BE, visto pela popa, tem rotação para direita, o propulsor de BB está dando a ré e o de BE está dando adiante, a força lateral resultante exercida pela ação desses propulsores tem o sentido de BB para BE.
V) Em um navio dotado com um único propulsor, a direção da força lateral gerada pela rotação do propulsor depende somente do sentido de rotação do propulsor.`,
    alternativas: {
      A: "Apenas as afirmativas I) e V) são verdadeiras.",
      B: "Apenas as afirmativas I), IV) e V) são verdadeiras.",
      C: "Apenas as afirmativas II), III), e V) são verdadeiras.",
      D: "Apenas a afirmativa V) é verdadeira.",
      E: "Apenas as afirmativas II) e III) são verdadeiras.",
    },
    correta: "B",
    comentario: `Regra de Crenshaw: a popa tende a se deslocar no MESMO sentido em que o hélice gira, visto pela popa (como se a parte de baixo do hélice “rodasse” sobre o fundo): girando para a direita → popa para BE; girando para a esquerda → popa para BB.
I) Verdadeira — a intensidade da força lateral depende do tipo de navio e das estruturas submersas próximas ao hélice (leme, cadaste, pés de galinha, forma da popa).
II) Falsa — hélice girando para a direita leva a popa para a DIREITA (BE), não para a esquerda.
III) Falsa — hélice girando para a esquerda leva a popa para a ESQUERDA (BB), não para a direita.
IV) Verdadeira — o hélice de BE, dando adiante, gira para a direita → força para BE. O de BB gira para a esquerda quando dá adiante; dando a RÉ, gira para a direita → força também para BE. As duas se somam: resultante de BB para BE.
V) Verdadeira — a DIREÇÃO da força lateral depende só do sentido de rotação (a intensidade é que varia com o navio).`,
    explicacoes: {
      A: "Não inclui afirmativa falsa, mas deixa de fora a IV, verdadeira: com BE adiante e BB a ré, os dois hélices giram para a direita e as forças laterais se somam para BE.",
      B: "I (intensidade depende do navio e da estrutura junto ao hélice), IV (BE adiante + BB a ré: ambos giram para a direita, resultante para BE) e V (direção depende só do sentido de rotação) são verdadeiras.",
      C: "Inclui II e III, falsas (estão invertidas: a popa vai para o mesmo lado em que o hélice gira), e deixa de fora I e IV, verdadeiras.",
      D: "A V é verdadeira, mas I e IV também são; a alternativa as deixa de fora.",
      E: "Cita exatamente as duas falsas: hélice para a direita leva a popa para a DIREITA, e hélice para a esquerda leva a popa para a ESQUERDA.",
    },
  },
  {
    id: "dpc2012-48",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: "De acordo com o contido no livro “Naval Shiphandling” (Crenshaw, Russel Sidnor, Jr – 4ª edição: 1975), considere um navio com um único propulsor gerando empuxo adiante com rotação, visto pela popa, para a direita, e movendo-se adiante com velocidade constante. Nessa situação, assuma como forças atuantes no navio apenas o empuxo e a força lateral fornecidos pelo propulsor e a força gerada pelo leme devido a sua deflexão, que tais forças atuam aproximadamente no mesmo ponto próximo à popa e, para efeitos práticos, que o efeito combinado dessas forças seja traduzido por uma única força resultante atuando no propulsor. Com base nessas premissas, assinale a opção INCORRETA:",
    alternativas: {
      A: "Quando o leme se encontra a meio, a força resultante tende a guinar o navio para BB.",
      B: "Quando leme é defletido 30 graus para esquerda, a força resultante tende a guinar o navio para BB.",
      C: "Quando o leme é defletido 30 graus para direita, a força resultante tende a guinar o navio para BE.",
      D: "A existência da forca lateral permite que o navio guine mais rapidamente para BB do que para BE.",
      E: "A existência da forca lateral implica que o navio tende a despender mais energia para guinar para BB do que para BE.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta: hélice de passo direito dando adiante gera força lateral que leva a popa para BE; com leme a meio, a proa tende para BB. Não é a resposta.",
      B: "Afirmação correta: leme a BB empurra a popa para BE, no mesmo sentido da força lateral — as duas se somam e o navio guina para BB. Não é a resposta.",
      C: "Afirmação correta: com seguimento adiante e 30° de leme a BE, a força do leme (popa para BB) supera a força lateral, e a resultante guina o navio para BE. Não é a resposta.",
      D: "Afirmação correta: para BB a força lateral AJUDA o leme; para BE ela se opõe. Logo o navio guina mais depressa para BB. Não é a resposta.",
      E: "É a INCORRETA: como a força lateral ajuda a guinada para BB, guinar para BB exige MENOS esforço/energia; é para BE que o leme tem de vencer a força lateral.",
    },
  },
  {
    id: "dpc2012-49",
    prova: "DPC 2012",
    tema: "Manobra do Navio",
    enunciado: "De acordo com o contido no livro “Naval Shiphandling” (Crenshaw, Russel Sidnor, Jr – 4ª edição: 1975), considere um navio com um único propulsor que gera empuxo para adiante quando está girando com rotação para direita, visto pela popa. O navio encontra-se parado e sem seguimento e inicia o movimento para ré com o propulsor com rotação baixa, correspondente a 5 nós de velocidade. Nessa situação, assuma como forças atuantes no navio apenas o empuxo e a força lateral fornecidos pelo propulsor e a força gerada pelo leme devido a sua deflexão, que tais forças atuam aproximadamente no mesmo ponto próximo à popa e, para efeitos práticos, que o efeito combinado dessas forças seja traduzido por uma única força resultante atuando no propulsor. Com base nessas premissas, assinale a opção INCORRETA.",
    alternativas: {
      A: "Quando o leme é defletido 30 graus para direita, o navio tende a deslocar  a popa para BB.",
      B: "Com o leme a meio, o navio tende a deslocar a popa para BB.",
      C: "Devido ao navio se encontrar com baixa velocidade a ré, ainda que o leme seja defletido 30 graus para direita, é possível que o navio não consiga deslocar a popa para BE, uma vez que o efeito causado pela força exercida pelo leme pode não ser suficiente para sobrepor-se ao efeito causado pela força lateral.",
      D: "Quando o leme é defletido 30 graus para esquerda, o navio tende a deslocar a popa para BB.",
      E: "Caso se deseje deslocar a popa para BE, mantendo-se o leme defletido 30 graus para esquerda, deve-se aumentar a velocidade para ré.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta: dando atrás, o hélice gira para a esquerda e a força lateral leva a popa para BB. Parado/quase sem seguimento a ré, o leme não recebe a descarga do hélice e quase não tem força: mesmo com 30° a BE, prevalece a força lateral. Não é a resposta.",
      B: "Afirmação correta: com leme a meio só atua a força lateral do hélice dando atrás (girando para a esquerda), que leva a popa para BB. Não é a resposta.",
      C: "Afirmação correta: a ré, a força do leme depende só do seguimento (não há descarga do hélice sobre ele); em baixa velocidade ela pode ser insuficiente para vencer a força lateral. Não é a resposta.",
      D: "Afirmação correta: com seguimento a ré, leme a BB leva a popa para BB — no mesmo sentido da força lateral; os efeitos se somam. Não é a resposta.",
      E: "É a INCORRETA: com leme a BB e seguimento a ré, a força do leme empurra a popa para BB; aumentar a velocidade a ré só AUMENTA esse efeito (e mais rotações aumentam a força lateral, também para BB). Para levar a popa para BE seria preciso leme a BE e seguimento a ré suficiente para o leme vencer a força lateral.",
    },
  },
  {
    id: "dpc2012-50",
    prova: "DPC 2012",
    tema: "Arquitetura Naval",
    enunciado: `De acordo com o contido no “Squat Interaction Manoeuvring” (The Nautical Institute, edição: 1995), considerando as interações entre navios e entre navios e canais estreitos, analise as afirmativas abaixo, identifique as verdadeiras e assinale a opção correta:

I) Em uma manobra de ultrapassagem entre dois navios em um canal estreito, considerando que uma interação entre os mesmos esteja ocorrendo, é possível que essa interação induza uma guinada nas proas dos navios em direção uma da outra, podendo resultar em colisão.
II) Numa manobra de ultrapassagem (“overtaking”), a interação entre os navios depende da distância e da velocidade relativa entre ambos.
III) Em uma manobra de ultrapassagem (“overtaking”), um navio pode evitar a situação de ter que continuar preso navegando próximo ao outro navio (hydrodinamically trapped together), aumentando a velocidade relativa entre ambos.
IV) Para um mesmo navio, quando a razão H/T aumenta, o efeito “squat” também aumenta, sendo H a profundidade da água e T o calado médio estático do navio medido à meia-nau ou próximo dela.
V) Em um canal com pouca profundidade, o efeito interativo chamado de “following wake” pode ser minimizado ou evitado pelo aumento da velocidade do navio.`,
    alternativas: {
      A: "Apenas as afirmativas I, III e V são verdadeiras.",
      B: "Apenas as afirmativas I e II são verdadeiras.",
      C: "Apenas as afirmativas II, IV e V são verdadeiras.",
      D: "Apenas as afirmativas I, II e III são verdadeiras.",
      E: "Apenas as afirmativas III, IV e V são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Verdadeira — na ultrapassagem os campos de pressão dos dois cascos geram momentos de guinada que podem levar as proas uma contra a outra (ou a proa de um contra o costado do outro), com risco de colisão.
II) Verdadeira — a intensidade e a duração da interação dependem da distância lateral e da velocidade relativa (quanto menor a velocidade relativa, mais tempo os navios ficam sob interação).
III) Verdadeira — com pequena velocidade relativa os navios podem ficar “presos” hidrodinamicamente lado a lado; aumentar a velocidade relativa abrevia a passagem e evita essa condição.
IV) Falsa — é o inverso: o squat aumenta quando H/T DIMINUI (menos água sob a quilha). Quando H/T aumenta (águas mais profundas), o squat diminui.
V) Falsa — o “following wake” (a esteira/onda que acompanha o navio e o alcança quando ele reduz) cresce com a velocidade; minimiza-se REDUZINDO a velocidade (e reduzindo-a gradualmente), não aumentando.`,
    explicacoes: {
      A: "Inclui a V, falsa (o “following wake” é minimizado reduzindo a velocidade, não aumentando), e deixa de fora a II, verdadeira.",
      B: "Não inclui afirmativa falsa, mas deixa de fora a III, verdadeira (aumentar a velocidade relativa evita ficar hidrodinamicamente preso ao outro navio).",
      C: "Inclui IV e V, falsas (o squat aumenta quando H/T DIMINUI; o following wake diminui com MENOS velocidade), e deixa de fora I e III, verdadeiras.",
      D: "I (risco de as proas guinarem uma para a outra), II (interação depende da distância e da velocidade relativa) e III (aumentar a velocidade relativa evita o “trapping”) são verdadeiras; IV e V são falsas.",
      E: "Inclui IV e V, falsas, e deixa de fora I e II, verdadeiras.",
    },
  },
);

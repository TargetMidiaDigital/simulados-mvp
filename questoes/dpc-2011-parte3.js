// Prova escrita DPC 2011 (PSCPP/2011 – Prova Amarela) — questões 51 a 71 (56 anulada).
// Letra correta: gabarito oficial (texto em vermelho no PDF). Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2011-51",
    prova: "DPC 2011",
    tema: "Código Internacional de Sinais",
    revisar: true,
    enunciado: `Um navio estava navegando quando, por um erro de navegação, encalhou. Depois de muitas tentativas para desencalhar o navio, o Comandante resolve pedir auxílio. O navio está na posição φ= 22º 33'S e λ=041º 41'W.
Você vai transmitir uma mensagem por bandeiras, utilizando o CIS, para uma embarcação que pode auxiliar o navio encalhado, com o seguinte texto:

“O navio encalhado na latitude.......... longitude........... necessita auxílio”.

Considerar que a estação receptora está pronta para receber a mensagem e que você dispõe de apenas um regimento completo de bandeiras.

Assinale, entre as opções abaixo, aquela que apresenta o correto sinal correspondente à mensagem que você quer transmitir e a sua respectiva e correta montagem.`,
    alternativas: {
      A: "Sinal a ser transmitido: JFL2233SG4141W. 1ª adriça: Bandeira Juliett, Bandeira Foxtrot. 2ª adriça: Bandeira Lima, Galhe 2, 2ª Substituta, Galhe 3, 3ª Substituta, Bandeira Sierra. 3ª adriça: Bandeira Golf, Galhe 4, Galhe 1, 2ª Substituta, 3ª Substituta, Bandeira Whiskey.",
      B: "Sinal a ser transmitido: JFL2233SG04141W. 1ª adriça: Bandeira Juliett, Bandeira Foxtrot. 2ª adriça: Bandeira Lima, Galhe 2, 2ª Substituta, Galhe 3, 1ª Substituta, Bandeira Sierra. 3ª adriça: Bandeira Golf, Galhe 0, Galhe 4, Galhe 1, 2ª Substituta, 3ª Substituta, Bandeira Whiskey.",
      C: "Sinal a ser transmitido: CBL2233SG4141W. 1ª adriça: Bandeira Charlie, Bandeira Bravo. 2ª adriça: Bandeira Lima, Galhe 2, 2ª Substituta, Galhe 3, 3ª Substituta, Bandeira Sierra. 3ª adriça: Bandeira Golf, Galhe 4, Galhe 1, 1ª Substituta, 3ª Substituta, Bandeira Whiskey.",
      D: "Sinal a ser transmitido: CIL2233SG4141W. 1ª adriça: Bandeira Charlie, Bandeira India. 2ª adriça: Bandeira Lima, Galhe 2, 1ª Substituta, Galhe 3, 3ª Substituta, Bandeira Sierra. 3ª adriça: Bandeira Golf, Galhe 4, Galhe 1, 2ª Substituta, 3ª Substituta, Bandeira Whiskey.",
      E: "Sinal a ser transmitido: CIL2233SG4141W. 1ª adriça: Bandeira Charlie, Bandeira India. 2ª adriça: Bandeira Lima, Galhe 2, 1ª Substituta, Galhe 3, 3ª Substituta, Bandeira Sierra. 3ª adriça: Bandeira Golf, Galhe 4, Galhe 1, 1ª Substituta, 2ª Substituta, Bandeira Whiskey.",
    },
    correta: "E",
    comentario: `1) O grupo do código. A mensagem fala de um TERCEIRO (“o navio encalhado na lat... long... necessita auxílio”), e o grupo do CIS com esse significado é CI (“Embarcação encalhada na lat... long... necessita auxílio”), conforme o gabarito oficial. JF significa “EU estou encalhado na lat... long...” — refere-se ao próprio navio e não pede auxílio; CB significa “Necessito auxílio imediato” — também na primeira pessoa e sem o complemento de encalhe/posição.
2) Os complementos. Latitude: L + 4 algarismos + S → L2233S. Longitude: G + 4 algarismos (ou 5, quando for preciso) + W → G4141W.
3) Regra das substitutas. Com um só regimento não se pode repetir uma bandeira na mesma adriça; usa-se a substituta, que repete a bandeira DA MESMA CLASSE (bandeiras alfabéticas ou galhardetes numerais) que ocupa, DENTRO DAQUELA ADRIÇA, a posição indicada: a 1ª substituta repete a 1ª bandeira da classe, a 2ª repete a 2ª, a 3ª repete a 3ª. A posição ocupada por uma substituta também conta. Cada substituta só pode ser usada uma vez por adriça.
4) Montagem. 2ª adriça, L 2 2 3 3 S — numerais: 1º = galhe 2; 2º = repete o 1º → 1ª substituta; 3º = galhe 3; 4º = repete o 3º → 3ª substituta. Fica: Lima, Galhe 2, 1ª Subst., Galhe 3, 3ª Subst., Sierra.
3ª adriça, G 4 1 4 1 W — numerais: 1º = galhe 4; 2º = galhe 1; 3º = repete o 1º → 1ª substituta; 4º = repete o 2º → 2ª substituta. Fica: Golf, Galhe 4, Galhe 1, 1ª Subst., 2ª Subst., Whiskey.`,
    explicacoes: {
      A: "Grupo errado: JF refere-se ao próprio navio (“estou encalhado em lat... long...”), não a um terceiro que necessita auxílio. A montagem também erra: na 2ª adriça o segundo “2” repete o 1º numeral (1ª substituta, e não 2ª); na 3ª adriça “41” repetido pede 1ª e 2ª substitutas, não 2ª e 3ª.",
      B: "Grupo errado (JF). Na 2ª adriça as substitutas estão trocadas: o segundo “2” exige a 1ª substituta e o segundo “3” exige a 3ª substituta (repete o 3º numeral), mas a alternativa traz 2ª e 1ª. Na 3ª adriça, com o zero à frente (G04141W), o segundo “4” repetiria o 2º numeral e o segundo “1” o 3º — a montagem até seria coerente, mas o conjunto já está errado pelo grupo e pela 2ª adriça.",
      C: "Grupo errado: CB é “Necessito auxílio imediato”, na primeira pessoa e sem referência a encalhe/posição. Montagem também errada: na 2ª adriça usa a 2ª substituta onde cabe a 1ª; na 3ª adriça usa a 3ª substituta para repetir o “1”, que é o 2º numeral (caberia a 2ª substituta).",
      D: "O grupo (CI) e a 2ª adriça estão certos, mas a 3ª adriça está errada: em G4141W o segundo “4” repete o 1º numeral (1ª substituta) e o segundo “1” repete o 2º numeral (2ª substituta). A alternativa usa 2ª e 3ª substitutas, o que seria lido como G4111W.",
      E: "Correta: grupo CI (navio encalhado em lat/long necessita auxílio) + L2233S + G4141W, com as substitutas certas — 2ª adriça: Lima, 2, 1ª Subst., 3, 3ª Subst., Sierra; 3ª adriça: Golf, 4, 1, 1ª Subst., 2ª Subst., Whiskey.",
    },
  },
  {
    id: "dpc2011-52",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    tipo: "afirmativas",
    enunciado: `De acordo com o contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) O efeito da corrente é, normalmente, estudado usando a velocidade relativa entre o navio e a água.
II) As correntes em mar aberto são, normalmente, fracas e quase constantes no plano horizontal, não apresentando dificuldades para a controlabilidade.
III) Em canais e rios, as correntes podem prejudicar a controlabilidade, principalmente para um navio navegando a favor da corrente.
IV) Os efeitos do vento na controlabilidade de um navio somente dependem da área acima da linha d’água e da distância do centro da área lateral ao LCG.`,
    alternativas: {
      A: "Apenas as afirmativas I), II), III) são verdadeiras.",
      B: "Apenas as afirmativas I), III), IV) são verdadeiras.",
      C: "Apenas as afirmativas I), II), III), IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II), IV) são verdadeiras.",
      E: "Apenas as afirmativas II), III), IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Verdadeira — as forças hidrodinâmicas dependem da velocidade do navio em relação à água; a corrente é tratada por meio dessa velocidade relativa.
II) Verdadeira — em mar aberto as correntes são fracas e praticamente uniformes no plano horizontal: deslocam o navio como um todo, sem prejudicar o governo.
III) Verdadeira — em canais e rios a corrente não é uniforme e prejudica a controlabilidade, sobretudo a favor da corrente: para a mesma velocidade no fundo, a velocidade na água (e o fluxo no leme) é menor.
IV) Falsa — a palavra “somente” invalida a afirmativa: o efeito do vento depende também da velocidade e direção do vento relativo, da razão entre a velocidade do vento e a do navio, da forma das obras vivas, da capacidade do leme etc.`,
  },
  {
    id: "dpc2011-53",
    prova: "DPC 2011",
    tema: "Rebocadores",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Tug use in Port, a Practical Guide” (Captain Henk Hensen - 2ª edição: 2003), em certas situações de puxada (“pulling”), tal como na figura abaixo, a descarga do(s) hélice(s) decorrente da propulsão de um rebocador atua no navio, resultando em uma redução da efetividade da puxada, devido a uma força oposta (força de reação) e a uma terceira força.

[Figura: vista de cima da proa de um navio e de um rebocador que a puxa, pela amura, com um cabo de reboque curto, afastando-se obliquamente do costado. No rebocador, uma seta “T” indica o empuxo (tração) do hélice; a descarga do hélice é dirigida para o navio e incide no costado junto à proa/amura, onde uma seta “R” indica a força de reação sobre o casco. Uma linha tracejada marca a linha de centro do navio.]

Analise as afirmativas abaixo, identifique quais são verdadeiras (V) e quais são falsas (F) e assinale a opção correta:

I) Esse é o chamado Efeito “Coanda”. ( )
II) É um efeito que não tem correlação com o Efeito “Bernouille”. ( )
III) A terceira força ocasiona uma tendência de movimento do navio para ré. ( )
IV) A terceira força ocasiona uma tendência de giro do navio para o bordo oposto ao desejado. ( )
V) Esse efeito pode ser reduzido com algumas providências; uma é o uso de apropriado comprimento do cabo de reboque: quanto mais água sob a quilha do navio e quanto maior a potência desejada, mais comprido deve ser o cabo de reboque. ( )`,
    alternativas: {
      A: "(F) (V) (V) (F) (V)",
      B: "(V) (F) (V) (V) (V)",
      C: "(F) (V) (F) (V) (V)",
      D: "(V) (F) (V) (F) (F)",
      E: "(V) (F) (F) (V) (F)",
    },
    correta: "E",
    comentario: `Item a item (conforme o gabarito oficial):
1º Verdadeiro — é o efeito Coanda: a descarga do hélice do rebocador “cola” no costado e acompanha a curvatura do casco, em vez de se dissipar.
2º Falso — o efeito TEM correlação com Bernoulli: o fluxo acelerado junto ao casco cria uma zona de baixa pressão naquele bordo, origem da “terceira força”.
3º Falso — a terceira força não tende a mover o navio para ré; ela atua lateralmente, no bordo em que a descarga contorna o casco.
4º Verdadeiro — a baixa pressão do lado oposto/contornado pela descarga produz uma força que tende a girar o navio para o bordo contrário ao desejado, reduzindo (ou anulando) o efeito da puxada.
5º Falso — a regra está invertida: quanto MENOS água sob a quilha e quanto maior a potência aplicada, mais comprido deve ser o cabo (com pouca folga a descarga não escapa por baixo do casco e o efeito é mais intenso).`,
  },
  {
    id: "dpc2011-54",
    prova: "DPC 2011",
    tema: "Navegação",
    tipo: "sequencia",
    enunciado: `De acordo com o contido no livro “Navegação: A Ciência e a Arte” (Altineu Pires Miguens - 1ª edição: 1996), assinale a opção que apresenta a sequência que completa corretamente as lacunas da sentença abaixo.
Quando navegando em águas restritas, o operador do radar deve selecionar_______________ , para possibilitar a detecção de objetos que estejam ________________ do navio e _____________o poder de discriminação em distância.`,
    alternativas: {
      A: "Pulso curto, mais próximos, reduzir.",
      B: "Pulso longo, mais próximos, aumentar.",
      C: "Pulso longo, mais afastados, reduzir.",
      D: "Pulso curto, mais próximos, aumentar.",
      E: "Pulso curto, mais afastados, aumentar.",
    },
    correta: "D",
    comentario: `Lacuna a lacuna:
1ª “Pulso curto” — em águas restritas trabalha-se em escalas curtas, com pulso curto.
2ª “mais próximos” — a distância mínima de detecção depende do comprimento do pulso (o receptor fica bloqueado enquanto o pulso é transmitido): pulso curto reduz a distância mínima e permite detectar alvos mais próximos. Pulso longo serve para alcance (alvos afastados), pois leva mais energia.
3ª “aumentar” — a discriminação em distância equivale a metade do comprimento do pulso: quanto mais curto o pulso, MELHOR (maior) o poder de separar dois alvos próximos na mesma marcação.`,
  },
  {
    id: "dpc2011-55",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    enunciado: "Assinale a resposta correta. Considerando o prescrito no COLREG, uma embarcação exibindo uma luz de mastro à vante, uma segunda luz de mastro a ré e mais alta do que a de vante, luzes de bordos, uma luz de alcançado e, onde melhor possam ser vistas, três luzes circulares encarnadas dispostas em uma linha vertical, é uma embarcação em movimento:",
    alternativas: {
      A: "com capacidade de manobra restrita, não engajada em operações de remoção de minas.",
      B: "engajada em operações submarinas ou de dragagem.",
      C: "engajada em serviço de praticagem.",
      D: "mas sem governo.",
      E: "restrita devido ao seu calado.",
    },
    correta: "E",
    explicacoes: {
      A: "Embarcação com capacidade de manobra restrita exibe três luzes circulares em linha vertical, sendo encarnada–BRANCA–encarnada (Regra 27(b)), e não três encarnadas.",
      B: "Operações submarinas ou de dragagem: além de encarnada–branca–encarnada, duas encarnadas no bordo obstruído e duas verdes no bordo livre (Regra 27(d)).",
      C: "Embarcação em serviço de praticagem exibe duas luzes circulares, BRANCA sobre encarnada, no tope do mastro (Regra 29), e não exibe luzes de mastro.",
      D: "Embarcação sem governo exibe DUAS luzes circulares encarnadas e, com seguimento, luzes de bordos e de alcançado — mas NÃO luzes de mastro (Regra 27(a)).",
      E: "Correta — Regra 28: a embarcação restrita devido ao seu calado pode exibir, além das luzes de embarcação de propulsão mecânica em movimento (mastros, bordos e alcançado), três luzes circulares encarnadas em linha vertical (de dia, um cilindro).",
    },
  },
  {
    id: "dpc2011-57",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    enunciado: `Assinale a opção correta. Uma embarcação “Full Container” com 190 m de comprimento aproxima-se de um fundeadouro no meio de muita cerração. No dia anterior, o navio teve problemas elétricos que ocasionaram a perda de um dos seus dois radares. O Comandante determina, então, que um marinheiro fique de vigia na proa com um transceptor (VHF) guarnecido até o final da manobra de fundeio. O navio começa a se aproximar do local de fundeio, ocasião em que o outro radar fica sem vídeo. Logo depois, o vigia da proa chama pelo transceptor informando que está ouvindo toques rápidos de sino por BE, seguidos de toques rápidos de gongo por BB, ambos vindos de vante.
De acordo com as regras do COLREG, a situação apresentada e as opções abaixo, o Comandante deve determinar:`,
    alternativas: {
      A: "Colocar o leme a meio, dar toda força atrás e três apitos curtos, porque a embarcação na proa está em operação de mergulho, provavelmente para recuperar alguma amarra e ferro perdidos.",
      B: "Dar leme todo a BB, dois apitos curtos, dar uma palhetada com máquina adiante apenas para aumentar a rate de guinada, porque a embarcação na proa está sem governo e cruzando para BE.",
      C: "Colocar o leme a meio, dar toda a força atrás e três apitos curtos, porque a embarcação na proa está fundeada.",
      D: "Dar leme todo a BE, um apito curto, dar uma palhetada com máquina adiante apenas para aumentar a rate de guinada, porque a embarcação na proa está restrita devido ao seu calado e cruzando a proa para bombordo.",
      E: "Colocar o leme a meio, dar toda força atrás e três apitos curtos, porque a embarcação na proa está encalhada.",
    },
    correta: "C",
    explicacoes: {
      A: "A ação (máquinas atrás) é adequada, mas a identificação está errada: embarcação em operação de mergulho é de manobra restrita e, em visibilidade restrita, soa um apito longo seguido de dois curtos — não sino e gongo.",
      B: "Embarcação sem governo soa um apito longo seguido de dois curtos (Regra 35(c)). Sino + gongo não indicam embarcação sem governo; e guinar às cegas para cima de um navio atravessado na proa, dando máquina adiante, é o oposto do recomendável.",
      C: "Correta — Regra 35(g): embarcação FUNDEADA de 100 m ou mais soa toques rápidos de sino a vante por cerca de 5 s, seguidos de toques rápidos de gongo a ré. Sino por BE e gongo por BB, ambos a vante, indicam um navio grande fundeado atravessado bem na proa (proa dele a BE, popa a BB): não há para onde guinar com segurança, e o Comandante deve tirar o seguimento — leme a meio, toda força atrás (Regras 8(e) e 19(e)) e três apitos curtos.",
      D: "Embarcação restrita pelo calado soa um apito longo seguido de dois curtos (Regra 35(c)). A identificação está errada e dar máquina adiante guinando para o lado de onde vem o sino (a proa do navio fundeado) é perigoso.",
      E: "A embarcação encalhada também soa sino e gongo, mas com TRÊS BADALADAS distintas e separadas imediatamente antes e depois dos toques rápidos de sino (Regra 35(h)). O vigia ouviu apenas toques rápidos: é embarcação fundeada.",
    },
  },
  {
    id: "dpc2011-58",
    prova: "DPC 2011",
    tema: "Rebocadores",
    revisar: true,
    enunciado: `Assinale a opção correta. Considerando os rebocadores “Ajax” e “Perseu”, cujas características principais constam abaixo:

Nome — Compr. — Boca — Calado — BHP — Tração — Observações
a) “Ajax” — 26,0 m — 8,5m — 4,1m — 3180 — 43t — Guincho de reboque e um patilhão (falsa quilha) a vante. Possui dois motores a ré dentro de tubos que giram 360° na horizontal.
b) “Perseu” — 29,7m — 9.9m — 4,0m — 3130 — 36t — Não possui hélices. Tem dois conjuntos com lâminas verticais giratórias lado a lado a vante. Possui gato de reboque e patilhão (falsa quilha) a ré.

Consultando os planos e desenhos dos dois rebocadores, foram obtidas as seguintes dimensões:
Rebocador “Ajax”:
1- A distância horizontal dos propulsores ao ponto de onde sai o cabo de reboque na proa é de 22 metros; e
2- A distância horizontal do centro de pressão nas obras vivas ao ponto de onde sai o cabo de reboque na proa é de 9 (nove) metros.
Rebocador “Perseu”:
1- A distância horizontal dos propulsores ao ponto de onde sai o cabo de reboque na proa é de 15 metros; e
2- A distância horizontal do centro de pressão nas obras vivas ao ponto de onde sai o cabo de reboque na proa é de 7 (sete) metros.
Não considerando outras características, tais como tração estática, dimensões, etc., e considerando o contido no livro “Tug use in Port, a Practical Guide” (Captain Henk Hensen - 2ª edição: 2003), podemos afirmar que, ao considerarmos a diferença entre os números teóricos que avaliam a performance dos rebocadores supramencionados para usar a tração indireta:`,
    alternativas: {
      A: "“Ajax” é melhor que “Perseu”, porque o número teórico que avalia sua performance é aproximadamente 0,18 maior.",
      B: "“Ajax” é melhor que “Perseu”, porque o número teórico que avalia sua performance é aproximadamente  7,0 maior.",
      C: "“Ajax” é melhor que “Perseu”, porque o número teórico que avalia sua performance é aproximadamente 0,3 maior.",
      D: "“Perseu” é melhor que “Ajax”, porque o número teórico que avalia sua performance é aproximadamente  0,06 maior.",
      E: "“Perseu” é melhor que “Ajax”, porque o número teórico que avalia sua performance é aproximadamente  0,29 maior.",
    },
    correta: "C",
    comentario: `Conta que bate com o gabarito oficial: o “número teórico” é a razão entre a distância (ponto de reboque → propulsores) e a distância (ponto de reboque → centro de pressão das obras vivas):
“Ajax”: 22 / 9 ≈ 2,44.
“Perseu”: 15 / 7 ≈ 2,14.
Diferença: 2,44 − 2,14 ≈ 0,30 → “Ajax” é melhor, com número aproximadamente 0,3 maior (alternativa C).
Interpretação: no método indireto o rebocador usa o casco/skeg como hidrofólio; a força hidrodinâmica atua no centro de pressão e os propulsores, mais afastados do ponto de reboque, precisam apenas equilibrar o momento. Quanto maior o braço dos propulsores em relação ao braço do centro de pressão, menor a parcela de empuxo gasta para manter o ângulo e melhor o desempenho.
Atenção: a razão INVERSA (centro de pressão / propulsores) daria 9/22 ≈ 0,41 e 7/15 ≈ 0,47, isto é, “Perseu” 0,06 maior — que é exatamente a alternativa D, o distrator. A razão que reproduz o gabarito é propulsores / centro de pressão. Confira a definição no livro.`,
    explicacoes: {
      A: "0,18 não resulta da razão correta: 22/9 − 15/7 ≈ 2,44 − 2,14 ≈ 0,30.",
      B: "7,0 é simplesmente a diferença entre as distâncias dos propulsores (22 − 15 = 7 m), não a diferença entre os números teóricos (que são razões adimensionais).",
      C: "Correta: número teórico = (distância propulsores–ponto de reboque) / (distância centro de pressão–ponto de reboque). Ajax: 22/9 ≈ 2,44; Perseu: 15/7 ≈ 2,14; diferença ≈ 0,3 a favor do Ajax.",
      D: "É o resultado de usar a razão invertida (centro de pressão / propulsores): 7/15 ≈ 0,47 contra 9/22 ≈ 0,41, diferença ≈ 0,06 a favor do Perseu. Pelo gabarito oficial, não é essa a razão que avalia a performance.",
      E: "0,29 ≈ 0,3 é o valor certo da diferença, mas atribuído ao rebocador errado: o número maior é o do Ajax (2,44), não o do Perseu (2,14).",
    },
  },
  {
    id: "dpc2011-59",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: "Navios com deslocamentos iguais ou superiores a 100.000 toneladas de porte bruto necessitam determinar com precisão a velocidade transversal durante a manobra de atracação. De acordo com o contido no livro “Navegação: A Ciência e a Arte” (Altineu Pires Miguens - 1ª edição: 1996), qual o equipamento normalmente utilizado para medir esta velocidade e qual o grau de precisão exigido?",
    alternativas: {
      A: "Radar doppler e 0,1 nó.",
      B: "Sonar doppler e 0,01 nó.",
      C: "Sonar doppler e 0,1 nó.",
      D: "Acelerômetro de Schuler e 0,01 nó.",
      E: "Radar doppler e 0,01 nó.",
    },
    correta: "B",
    explicacoes: {
      A: "Erra o equipamento e a precisão: o instrumento de bordo citado por Miguens é o SONAR doppler, e a precisão exigida é de 0,01 nó.",
      B: "Correta: segundo Miguens, os grandes navios (≥ 100.000 tpb) usam o sonar doppler (odômetro doppler de dois eixos, referido ao fundo) para medir as velocidades longitudinal e transversal na atracação, com precisão da ordem de 0,01 nó — a enorme massa torna perigosas velocidades de encosto de poucos centímetros por segundo.",
      C: "O equipamento está certo, mas 0,1 nó (≈ 5 cm/s) é precisão insuficiente para controlar a velocidade de encosto de um navio desse porte; o livro fala em 0,01 nó.",
      D: "“Acelerômetro de Schuler” não é o equipamento usado para isso (o termo remete à sintonia de Schuler de plataformas inerciais); a medida é feita com sonar doppler.",
      E: "A precisão está certa, mas o equipamento de bordo citado pelo livro é o sonar doppler, não o radar doppler.",
    },
  },
  {
    id: "dpc2011-60",
    prova: "DPC 2011",
    tema: "Rebocadores",
    revisar: true,
    enunciado: `Assinale a opção correta. As características do rebocador “Júpiter” são apresentadas no quadro abaixo:

Nome — Compr. — Boca — Calado — BHP — Tração — Observações
“Júpiter” — 30,0m — 8,0m — 4,0m — 3000 — 30t — Possui na popa um eixo com hélice de passo fixo, mais comum nesses rebocadores.

Considerando o contido no livro “Tug use in Port, a Practical Guide” (Captain Henk Hensen - 2ª edição: 2003), quando o rebocador “Júpiter” estiver operando no costado de um navio com pequeno seguimento avante, terá mais facilidade em se manter perpendicular ao casco desse navio se :`,
    alternativas: {
      A: "Estiver no costado de BE, porque, sendo o hélice de passo esquerdo, tenderá a jogar a popa para BE em marcha atrás e também em marcha adiante com leme a BB.",
      B: "Estiver no costado de BE, porque, sendo o hélice de passo direito, tenderá a jogar a popa para BE em marcha adiante com leme a BB e ficará estável em marcha a ré.",
      C: "Estiver no costado de BB, porque, sendo o hélice de passo direito, tenderá a jogar a popa para BE em marcha a ré e também em marcha adiante com leme a BE.",
      D: "Estiver no costado de BB, porque, sendo o hélice de passo esquerdo, tenderá a jogar a popa para BB em marcha a ré e também em marcha adiante com leme a BB.",
      E: "Estiver no costado de BB, porque, sendo o hélice de passo direito, tenderá a jogar a popa para BB em marcha a ré e também em marcha adiante com leme a BE.",
    },
    correta: "E",
    comentario: `Raciocínio: o hélice de passo fixo “mais comum” em rebocadores convencionais de um eixo é o de passo DIREITO; em marcha a ré ele joga a popa para BB.
Com o navio com seguimento avante, o fluxo de água ao longo do costado empurra a popa do rebocador (que está de proa no costado) na direção da POPA DO NAVIO.
• Rebocador no costado de BB do navio: a popa do navio fica a BORESTE do rebocador; o fluxo leva a popa do rebocador para BE. Para se manter perpendicular, ele precisa levar a popa para BB — e consegue nos dois regimes: empurrando (adiante) com leme a BE, e puxando (a ré) pelo efeito do passo direito, que joga a popa para BB.
• No costado de BE seria o contrário: a ré, o passo direito jogaria a popa para BB, justamente para onde o fluxo já a empurra, e o rebocador atravessaria.`,
    explicacoes: {
      A: "Parte de premissa errada: o hélice mais comum é o de passo DIREITO, não esquerdo. Com passo direito, no costado de BE a marcha a ré joga a popa para BB — o mesmo sentido em que o fluxo a empurra —, dificultando manter-se perpendicular.",
      B: "Identifica o passo direito, mas um rebocador de um eixo não “fica estável” em marcha a ré: o passo direito joga a popa para BB, que no costado de BE é o lado da popa do navio, para onde o fluxo já empurra. É o bordo desfavorável.",
      C: "Bordo certo (BB) e passo certo (direito), mas efeito errado: hélice de passo direito a ré joga a popa para BB, não para BE.",
      D: "Bordo certo, mas premissas erradas: o hélice comum é de passo direito; um hélice de passo esquerdo a ré jogaria a popa para BE; e adiante com leme a BB a popa iria para BE, não para BB.",
      E: "Correta: no costado de BB o fluxo empurra a popa do rebocador para BE (em direção à popa do navio); o hélice de passo direito a ré joga a popa para BB e, adiante, o leme a BE também leva a popa para BB — nos dois regimes o rebocador consegue compensar e manter-se perpendicular.",
    },
  },
  {
    id: "dpc2011-61",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `O carregamento de um graneleiro foi completado às 22h15min. O navio precisa adicionais 45min a fim de prontificar-se para a desatracação. O canal natural e abrigado de acesso ao porto tem profundidade mínima cartografada de 10m em vários trechos que não podem ser evitados pelo navegante, inclusive logo no seu início. Considerando a situação apresentada e os dados abaixo, calcule até que horário limite aproximado o navio pode desatracar e demandar o ponto de espera de prático e assinale a opção correta:

Hora-legal padrão
Maré tipo semidiurna
Meteorologia - sem interferência nas marés
Margem de segurança no cálculo da altura da maré - zero
Calado - 11m (graneleiro em águas parelhas)
Profundidade mínima admitida abaixo da quilha - 1m
Tempo de navegação até sair do canal - 60min

EXTRATO DA TÁBUA DAS MARÉS (Nível Médio = 3,43 m)
Hora — Alt.(m)
03 38 — 1,0
09 43 — 5,7
15 54 — 1,1
22 00 — 5,7
04 18 — 1,1

TABELA I (fração da amplitude, em função do intervalo de tempo e da duração da enchente ou da vazante)
Intervalo de tempo (h.min) — Duração 5 40 — Duração 6 00 — Duração 6 20
1 30 — 16 — 15 — 13
1 40 — 20 — 18 — 16
1 50 — 24 — 21 — 19
2 00 — 28 — 25 — 23
2 10 — 32 — 29 — 26
2 20 — 36 — 33 — 30
2 30 — 41 — 37 — 34
2 40 — 46 — 41 — 38
2 50 — 50 — 46 — 42

TABELA II (correção da altura, em metros, em função da fração da amplitude e da amplitude)
Fração da amplitude — Amplitude 4 m — Amplitude 5 m — Amplitude 6 m
16 — 0.6 — 0.8 — 1.0
18 — 0.7 — 0.9 — 1.1
20 — 0.8 — 1.0 — 1.2
22 — 0.9 — 1.1 — 1.3
24 — 1.0 — 1.2 — 1.4
26 — 1.0 — 1.3 — 1.6
28 — 1.1 — 1.4 — 1.7
30 — 1.2 — 1.5 — 1.8
32 — 1.3 — 1.6 — 1.9
34 — 1.4 — 1.7 — 2.0
36 — 1.4 — 1.8 — 2.2
38 — 1.5 — 1.9 — 2.3
40 — 1.6 — 2.0 — 2.4
42 — 1.7 — 2.1 — 2.5`,
    alternativas: {
      A: "00h 35min",
      B: "01h 00min",
      C: "01h 20min",
      D: "02h 00min",
      E: "03h 15min",
    },
    correta: "C",
    comentario: `Cálculo:
1) Profundidade necessária = calado + folga abaixo da quilha = 11 + 1 = 12 m. Profundidade cartografada = 10 m → altura de maré necessária = 11 + 1 − 10 = 2,0 m.
2) O navio fica pronto às 22h15 + 45 min = 23h00, já na vazante: PM 22h00 (5,7 m) → BM 04h18 (1,1 m). Duração da vazante = 6h18 (≈ 6 20); amplitude = 5,7 − 1,1 = 4,6 m.
3) A maré precisa estar 2,0 − 1,1 = 0,9 m ACIMA da baixa-mar. Tabela II (entrando com a correção 0,9 m): amplitude 5 m → fração 18; amplitude 4 m → fração 22; para 4,6 m → fração ≈ 20.
4) Tabela I, coluna de duração 6 20: fração 19 ↔ 1h50; fração 23 ↔ 2h00; fração ≈ 20 ↔ intervalo ≈ 1h50 a 1h55 antes da baixa-mar.
5) A maré cai a 2,0 m por volta de 04h18 − 1h55 ≈ 02h20/02h25. Até essa hora o navio tem de ter SAÍDO do canal (há trechos de 10 m ao longo de todo o percurso). Como a navegação no canal leva 60 min, o limite para desatracar é ≈ 02h20 − 1h00 = 01h20.`,
    explicacoes: {
      A: "00h35 é um horário seguro, mas não é o LIMITE: desatracando às 00h35 o navio sairia do canal à 01h35, com folga de quase uma hora em relação ao instante em que a maré cai a 2,0 m (≈ 02h20).",
      B: "01h00 ainda é seguro (saída do canal às 02h00, com maré acima de 2,0 m), mas não é o horário limite; ainda há cerca de 20 min de margem.",
      C: "Correta: altura de maré necessária = 11 + 1 − 10 = 2,0 m (0,9 m acima da BM de 1,1 m). Pelas Tabelas II e I (amplitude 4,6 m; vazante ≈ 6h20) isso ocorre ≈ 1h55 antes da BM das 04h18, ou seja, ≈ 02h20. Descontados os 60 min de navegação no canal, o limite para desatracar é 01h20.",
      D: "02h00 é aproximadamente a hora-limite para SAIR do canal, não para desatracar: quem desatraca às 02h00 só deixa o canal às 03h00, a 1h18 da baixa-mar, quando a altura da maré já é inferior a 2,0 m (cerca de 1,6–1,7 m) — folga abaixo da quilha menor que 1 m.",
      E: "Às 03h15 a maré já está a cerca de 1 h da baixa-mar (≈ 1,4 m): a profundidade nos trechos de 10 m seria ≈ 11,4 m para um calado de 11 m — o navio passaria com folga de poucos decímetros ou tocaria o fundo.",
    },
  },
  {
    id: "dpc2011-62",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: "Um prático estava conduzindo um “Marine-Class Vessel” na condição de plena carga (“full load”) em um rumo tal que a direção do vento estava pelo través (“beam wind”). Nessa ocasião, verificou que, devido à magnitude da velocidade do vento, os efeitos aerodinâmicos e hidrodinâmicos excediam a capacidade do leme, o que dificultava em muito o controle do navio. De acordo com o contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), assinale a opção que apresenta o valor correto da velocidade do vento nessa ocasião:",
    alternativas: {
      A: "3 (três) vezes a velocidade do navio.",
      B: "5 (cinco) vezes a velocidade do navio.",
      C: "7 (sete) vezes a velocidade do navio.",
      D: "8 (oito) vezes a velocidade do navio.",
      E: "10 (dez) vezes a velocidade do navio.",
    },
    correta: "E",
    explicacoes: {
      A: "Com vento de apenas 3 vezes a velocidade do navio o leme ainda equilibra com folga os momentos do vento; o PNA aponta a perda de controle, para o navio da classe Mariner com vento de través, em torno de 10 vezes.",
      B: "5 vezes ainda está dentro da capacidade do leme no exemplo do PNA (Mariner, plena carga, vento de través); o limite citado é da ordem de 10 vezes.",
      C: "7 vezes não é o valor do livro; pelo gabarito oficial o limite é 10 vezes a velocidade do navio.",
      D: "8 vezes não é o valor do livro; pelo gabarito oficial o limite é 10 vezes a velocidade do navio.",
      E: "Pelo gabarito oficial (exemplo do PNA para o navio da classe Mariner em plena carga com vento de través): quando a velocidade do vento chega a cerca de 10 vezes a velocidade do navio, os momentos aerodinâmico e hidrodinâmico superam a capacidade do leme. Daí a dificuldade de governar com vento forte e pouco seguimento.",
    },
  },
  {
    id: "dpc2011-63",
    prova: "DPC 2011",
    tema: "Rebocadores",
    revisar: true,
    enunciado: "De acordo com o contido no livro “Rebocadores Portuários - CONAPRA” (Otávio Fragoso e Marcelo Cajaty - 1a edição: 2002), os rebocadores de propulsão cicloidal, quando comparados com vários outros tipos de rebocadores, costumam ter:",
    alternativas: {
      A: "menor calado, tração menor por BHP instalado e se comportar mal em mar aberto;",
      B: "maior calado, menor tração por BHP instalado e se comportar mal em mar aberto;",
      C: "calado equivalente, semelhante tração por BHP instalado e comportamento equivalente em mar aberto;",
      D: "menor calado, tração maior por BHP instalado e comportamento equivalente em mar aberto;",
      E: "menor calado,tração maior por BHP instalado e se comportar melhor em mar aberto.",
    },
    correta: "B",
    explicacoes: {
      A: "Acerta a menor tração por BHP e o mau comportamento em mar aberto, mas erra o calado: as lâminas verticais do propulsor Voith Schneider ficam abaixo do casco (com chapa de proteção), o que dá ao rebocador cicloidal calado MAIOR.",
      B: "Correta, segundo Fragoso e Cajaty: o rebocador de propulsão cicloidal (Voith Schneider) tem maior calado (lâminas verticais sob o fundo), menor tração estática por BHP instalado (rendimento inferior ao de hélices em tubulão/azimutais) e, pelo casco largo e de fundo chato, comporta-se mal em mar aberto.",
      C: "Não são equivalentes: o cicloidal difere dos demais justamente em calado (maior), rendimento em tração (menor) e comportamento no mar (pior).",
      D: "Erra os três pontos: o calado é maior, a tração por BHP é menor e o comportamento em mar aberto é pior.",
      E: "Erra os três pontos: é exatamente o oposto do que o livro descreve para os rebocadores cicloidais.",
    },
  },
  {
    id: "dpc2011-64",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: "A Resolução A.917(22) da IMO estabelece as normas para operação, a bordo dos navios, do Sistema de Identificação Automática de Navios (AIS na sigla em inglês). Analise as afirmativas abaixo e assinale a opção incorreta:",
    alternativas: {
      A: "O AIS pretende servir como um reforço à segurança da vida no mar, à segurança da navegação e à proteção do meio ambiente marinho.",
      B: "Na prática, a capacidade do AIS é ilimitada, permitindo acompanhar um grande número de navios ao mesmo tempo.",
      C: "O AIS tem o propósito de auxiliar a identificação de navios, facilitar o acompanhamento de alvos e simplificar a troca de informações.",
      D: "O AIS opera, primariamente, em dois canais UHF dedicados exclusivamente a tal serviço.",
      E: "A precisão da informação AIS recebida é somente tão boa quanto a precisão da informação AIS transmitida.",
    },
    correta: "D",
    explicacoes: {
      A: "Afirmação correta: é o objetivo do AIS declarado na Resolução A.917(22). Não é a resposta.",
      B: "Afirmação correta: a resolução diz que a capacidade do sistema é praticamente ilimitada, graças ao esquema de acesso SOTDMA, permitindo acompanhar grande número de navios simultaneamente. Não é a resposta.",
      C: "Afirmação correta: identificar navios, auxiliar o acompanhamento de alvos e simplificar a troca de informações são os propósitos do AIS na resolução. Não é a resposta.",
      D: "É a incorreta: o AIS opera primariamente em dois canais dedicados de VHF (AIS 1 – 161,975 MHz e AIS 2 – 162,025 MHz), e não de UHF.",
      E: "Afirmação correta: é uma das advertências da resolução — a informação recebida é tão boa quanto a transmitida (dados mal inseridos ou sensores com erro geram informação errada). Não é a resposta.",
    },
  },
  {
    id: "dpc2011-65",
    prova: "DPC 2011",
    tema: "GMDSS e Comunicações",
    revisar: true,
    enunciado: "Assinale a opção correta. No Brasil, as Informações de Segurança Marítima (MSI na sigla em inglês) são regularmente transmitidas:",
    alternativas: {
      A: "Pela RENEC, por meio de MF-SSB.",
      B: "A partir do CHM, pelo INMARSAT-C, por meio do serviço SAFETY NET.",
      C: "Pelo COMOPNAV, por meio do console SAR.",
      D: "Pela ERMRJ, por meio de HF e DSC.",
      E: "Pelo COMCONTRAM, por meio do COSPAS-SARSAT.",
    },
    correta: "B",
    explicacoes: {
      A: "Pelo gabarito oficial, não é o meio regular de difusão das MSI no GMDSS: o serviço oficial brasileiro é o SafetyNET (Inmarsat-C), e não MF-SSB pela RENEC.",
      B: "Correta: o Brasil, coordenador da NAVAREA V e da METAREA V, difunde as MSI (avisos-rádio náuticos, meteorologia e SAR) a partir do Centro de Hidrografia da Marinha (CHM), pelo serviço SafetyNET do Inmarsat-C — o país não dispunha de serviço NAVTEX.",
      C: "O Comando de Operações Navais trata de busca e salvamento (SALVAMAR BRASIL); o “console SAR” não é meio de difusão regular de MSI.",
      D: "DSC é chamada seletiva digital (alerta/chamada), não um serviço de difusão de MSI; a Estação Rádio da Marinha no Rio de Janeiro não é o canal regular das MSI no GMDSS.",
      E: "O COSPAS-SARSAT é o sistema de satélites para detecção de EPIRB (alerta de socorro); não transmite MSI.",
    },
  },
  {
    id: "dpc2011-66",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `De acordo com o contido no “SQUAT INTERACTION MANEOUVERING” (The Nautical Institute, edição: 1995), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) Navegando em um canal estreito, um navio, após passar por outro, deixando-o por BB, com a margem mais próxima a BE, (“head-on passing”), tende a ser jogado para BE, podendo colidir com a margem a BE caso não antecipe uma manobra de correção de atitude do navio.
II) Navegando em um canal estreito, um navio, após passar por outro, deixando-o por BB, com a margem mais próxima a BE, (“head-on passing”), tende a ser jogado para BB, podendo colidir com a margem a BB caso não antecipe uma manobra de correção de atitude do navio.
III) Navegando em um canal estreito, um navio, após passar por outro, deixando-o por BB, com a margem mais próxima a BE, (“head-on passing”), tende a manter o rumo sem aproximar-se da margem mais próxima.
IV) Navegando em um canal estreito, um navio, em uma manobra de ultrapassagem (“overtaking”) de outro navio, pode evitar colisões pela manutenção de uma distância segura do outro navio e evitar cair em uma situação de ter que continuar preso navegando próximo ao outro navio (“hidrodynamically trapped together”), pela redução de velocidade de um dos navios.
V) Os efeitos de uma interação entre um navio e um rebocador, quando navegando próximos, (“tug and ship interaction”), são os mesmos que ocorrem com dois navios de mesmo porte interagindo.`,
    alternativas: {
      A: "Apenas as afirmativas II) e V) são verdadeiras.",
      B: "Apenas as afirmativas II) e III) são verdadeiras.",
      C: "Apenas as afirmativas I) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I) e III) são verdadeiras.",
      E: "Apenas as afirmativas II) e IV) são verdadeiras.",
    },
    correta: "C",
    comentario: `I) Verdadeira — na fase final do cruzamento roda a roda as popas se atraem (popa para BB), o que lança a proa para BE, na direção da margem mais próxima; se a correção não for antecipada, o navio pode ir de encontro à margem de BE.
II) Falsa — a tendência final é para BE (bordo da margem próxima), não para BB.
III) Falsa — a interação navio–navio, somada ao efeito de margem, perturba o rumo; o navio não “tende a manter o rumo”.
IV) Verdadeira — na ultrapassagem, mantém-se distância lateral segura e, se os navios ficarem hidrodinamicamente “presos” lado a lado, a saída é um deles reduzir a velocidade (a interação varia com o quadrado da velocidade).
V) Falsa — na interação navio–rebocador a desproporção de massas faz com que praticamente só o rebocador sofra os efeitos, de forma muito mais violenta (risco de ser sugado para o costado ou atravessado sob a proa); não é o mesmo que entre navios de mesmo porte.`,
    explicacoes: {
      A: "II) e V) são falsas: a guinada final é para BE (não BB) e a interação navio–rebocador não equivale à de dois navios de mesmo porte.",
      B: "II) e III) são falsas: o navio não é jogado para BB nem tende a manter o rumo; a tendência é ir para BE, em direção à margem próxima.",
      C: "Correta: I) (tendência de ir para BE, sobre a margem próxima, ao final do cruzamento) e IV) (distância segura e redução de velocidade para livrar-se do “aprisionamento” hidrodinâmico na ultrapassagem) são as verdadeiras.",
      D: "A I) é verdadeira, mas a III) a contradiz (o navio NÃO tende a manter o rumo) e é falsa; omite a IV).",
      E: "A IV) é verdadeira, mas a II) é falsa (a tendência é para BE); omite a I).",
    },
  },
  {
    id: "dpc2011-67",
    prova: "DPC 2011",
    tema: "Navegação",
    revisar: true,
    enunciado: `Em relação às informações divulgadas nos “Avisos aos Navegantes”, analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) Os avisos-rádio náuticos que divulgam informações de interesse da navegação praticada em áreas próximas à costa e em vias navegáveis interiores são classificados como avisos-rádio náuticos costeiros.
II) Os avisos-rádios náuticos que iniciam com a expressão NAVAREA V destinam-se aos navios navegando na área marítima sob responsabilidade do Brasil, porém além dos limites das regiões costeiras estabelecidas.
III) Os avisos aos navegantes que, embora não alterem as cartas náuticas, se destinam a divulgar informações gerais importantes para o navegante, tais como zonas de segurança em torno de instalações “offshore”, são classificados como avisos permanentes especiais.
IV) A correção definitiva efetuada na carta náutica, decorrente de aviso permanente, deve ser feita à caneta ou por inserção de “bacalhau”. Após a sua realização, deve ser registrado, ao lado da mesma, o ano e o número do aviso permanente correspondente.
V) A divulgação da fase de construção de um farol em determinado ponto da costa é efetuada por meio de um aviso aos navegantes preliminar e a interdição de área marítima para exercícios com submarinos é divulgada através de um aviso-rádio náutico.`,
    alternativas: {
      A: "Apenas as afirmativas III), IV) e V) são verdadeiras.",
      B: "Apenas as afirmativas II), III) e V) são verdadeiras.",
      C: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
      D: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), II) e V) são verdadeiras.",
    },
    correta: "B",
    comentario: `I) Falsa — os avisos-rádio COSTEIROS tratam da navegação costeira; os que interessam a portos, suas proximidades e vias navegáveis interiores são os avisos-rádio náuticos LOCAIS. A afirmativa mistura as duas classes.
II) Verdadeira — os avisos NAVAREA V destinam-se à navegação de longo curso na área marítima sob responsabilidade do Brasil, além das regiões costeiras.
III) Verdadeira — os Avisos Permanentes Especiais (APE) divulgam informações gerais importantes que não alteram as cartas (p. ex. zonas de segurança de instalações “offshore”).
IV) Falsa — a correção é feita à tinta (ou com “bacalhau”), mas o registro do ano e número do aviso é lançado na margem inferior esquerda da carta (“Pequenas correções”), e não ao lado da correção.
V) Verdadeira — obra em andamento (farol em construção) é assunto de Aviso Preliminar (P); interdição de área para exercícios, pela urgência e curta duração, é divulgada por aviso-rádio náutico.`,
    explicacoes: {
      A: "Inclui a falsa IV) (o ano/número do aviso é registrado na margem inferior esquerda da carta, não ao lado da correção) e omite a verdadeira II).",
      B: "Correta: II) (NAVAREA V), III) (avisos permanentes especiais) e V) (aviso preliminar para a obra do farol; aviso-rádio para a interdição de área) são as verdadeiras.",
      C: "Inclui as falsas I) (vias interiores são objeto de avisos-rádio LOCAIS) e IV) e omite as verdadeiras II) e V).",
      D: "Inclui as falsas I) e IV) e omite as verdadeiras III) e V).",
      E: "Inclui a falsa I) e omite a verdadeira III).",
    },
  },
  {
    id: "dpc2011-68",
    prova: "DPC 2011",
    tema: "GMDSS e Comunicações",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com a IMO SMCP, indique com C as frases corretas e com E as erradas e assinale a opção correta:

( ) My present speed is one-zero knots. Correction, my present speed is one-two knots.
( ) Stand by on VHF channel one-four until pilot transfer is completed.
( ) You should anchor in anchorage alfa two.
( ) Pilot boat is bearing one-one-five degrees from you.
( ) Port two-zero.
( ) Starboard, steer zero-zero-zero.`,
    alternativas: {
      A: "(C), (E), (C), (C), (C), (E)",
      B: "(C), (C), (E), (E), (E), (C)",
      C: "(E), (C), (E), (C), (E), (C)",
      D: "(E), (C), (C), (E), (C), (C)",
      E: "(C), (E), (E), (C), (E), (E)",
    },
    correta: "C",
    comentario: `Item a item:
1º Errada — a fórmula de correção do SMCP exige a palavra “Mistake”: “My present speed is one-four knots – mistake. Correction, my present speed is one-two knots.”
2º Correta — frase padrão de praticagem, com o canal falado algarismo por algarismo (“one-four”).
3º Errada — o SMCP evita “should/may/might/could” (ambíguos); usa-se o marcador de mensagem: “ADVICE. (Advise you) anchor in anchorage alfa two.”
4º Correta — marcação dada com três algarismos falados separadamente e referida à posição do navio (“from you”).
5º Errada — nas ordens de leme o ângulo é falado como número inteiro: “Port twenty”, e não “Port two-zero” (é a exceção à regra dos algarismos separados).
6º Correta — ordem de rumo ao timoneiro: bordo da guinada + “steer” + rumo em três algarismos separados (“Starboard, steer zero-zero-zero”).`,
  },
  {
    id: "dpc2011-69",
    prova: "DPC 2011",
    tema: "Meteorologia e Oceanografia",
    enunciado: "Assinale a opção correta. De acordo com o contido no livro “Meteorologia e Oceanografia - Usuário Navegante” (Paulo Roberto Valgas Lobo e Carlos Alberto Soares - 2ª edição: 2007), a imagem de satélite na banda do IR (infravermelho) é baseada na informação da temperatura da coluna de ar inteira. Conforme essa afirmação, a Zona de Convergência do Atlântico Sul (ZCAS) está definida como:",
    alternativas: {
      A: "Zona de nebulosidade na região de convergência dos ventos alísios.",
      B: "Zona que origina o cinturão de anticiclones nas latitudes médias.",
      C: "Zona com extensa banda de nebulosidade da Amazônia ao Atlântico Sul.",
      D: "Zona com movimentos ascendentes do ar que originam a célula de Hadley.",
      E: "Zona com atividade convectiva característica da região tropical devido à circulação dos alísios.",
    },
    correta: "C",
    explicacoes: {
      A: "A faixa de nebulosidade na convergência dos alísios é a ZCIT (Zona de Convergência Intertropical), próxima ao equador — não a ZCAS.",
      B: "O cinturão de anticiclones subtropicais decorre do ramo DESCENDENTE da célula de Hadley (subsidência por volta de 30° de latitude); nada tem a ver com a ZCAS, que é zona de ascensão e nebulosidade.",
      C: "Correta: a ZCAS aparece nas imagens de satélite como uma extensa banda de nebulosidade, orientada NW–SE, que se estende do sul da Amazônia ao Atlântico Sul, permanecendo semiestacionária por vários dias (típica do verão), com chuvas persistentes.",
      D: "Os movimentos ascendentes que originam a célula de Hadley ocorrem na ZCIT, junto ao equador.",
      E: "Atividade convectiva tropical ligada à circulação dos alísios descreve a ZCIT; a ZCAS resulta da interação entre a convecção amazônica e sistemas frontais que estacionam sobre o Sudeste.",
    },
  },
  {
    id: "dpc2011-70",
    prova: "DPC 2011",
    tema: "Navegação",
    revisar: true,
    enunciado: "A exibição padrão é mostrada quando a carta de navegação eletrônica é apresentada pela primeira vez pelo Sistema de Informação e Apresentação de Cartas Eletrônicas (ECDIS na sigla em inglês). Assinale, dentre as afirmativas abaixo, aquela que relaciona as informações disponibilizadas pela exibição padrão, independentemente da ação do operador:",
    alternativas: {
      A: "Limites da escala da carta eletrônica, indicação de auxílios à navegação, indicação de notas de advertência e áreas proibidas e restritas.",
      B: "Áreas proibidas e restritas, detalhes dos auxílios à navegação, detalhes de todos os perigos isolados e conteúdo das notas de advertência.",
      C: "Pontos conspícuos, data de edição da carta eletrônica, limites de escala da carta eletrônica e indicação de auxílios à navegação.",
      D: "Detalhe de todos os perigos isolados, indicação de notas de advertência, áreas proibidas e restritas e pontos conspícuos.",
      E: "Existência de cabos submarinos, detalhes dos auxílios à navegação, detalhes de todos os perigos isolados e conteúdo das notas de advertência.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta: pelos padrões de desempenho do ECDIS (IMO), a exibição padrão (“standard display”) compreende a base da apresentação mais: linha de baixa-mar, INDICAÇÃO de auxílios à navegação fixos e flutuantes, limites de canais, feições conspícuas, áreas proibidas e restritas, LIMITES DE ESCALA da carta e INDICAÇÃO de notas de advertência.",
      B: "“Detalhes” dos auxílios à navegação, “detalhes de todos os perigos isolados” e o “conteúdo” das notas de advertência pertencem à categoria “todas as outras informações”, exibidas apenas por solicitação do operador.",
      C: "A data de edição da carta eletrônica não integra a exibição padrão; está entre as “outras informações”, exibidas sob demanda.",
      D: "Os detalhes de todos os perigos isolados não fazem parte da exibição padrão (são “outras informações”).",
      E: "Cabos submarinos, detalhes dos auxílios, detalhes dos perigos isolados e conteúdo das notas de advertência são todos itens de “outras informações”, não da exibição padrão.",
    },
  },
  {
    id: "dpc2011-71",
    prova: "DPC 2011",
    tema: "Rebocadores",
    tipo: "sequencia",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Rebocadores Portuários - CONAPRA” (Otávio Fragoso e Marcelo Cajaty - 1a edição: 2002), analise as afirmativas abaixo, identifique quais são verdadeiras (V) e quais são falsas (F) e assinale a opção correta:

I) A tabela abaixo, reproduzida do livro supramencionado, resume as formas de utilização, generalizando as vantagens e desvantagens de cada tipo de rebocador, considerando performance e segurança. Para maior clareza, o ASD foi tratado como trator reverso quando trabalhando com cabo no guincho da proa, e como convencional na situação inversa. ( )
Guia Genérico da Melhor Utilização Teórica de Rebocadores
Posição do cabo no navio — Trator Reverso — Convencional — Trator
Cabo passado na popa — Ótimo — Ruim — Bom
Costado com corrente — Ótimo — Ruim — Ótimo
Costado sem corrente — Ótimo — Regular — Ótimo
Cabo passado na proa — Bom — Bom — Ótimo
II) O método de reboque com cabo na proa do navio é a forma tradicional de utilização quando se quer rebocar um navio sem propulsão. É a posição mais eficiente para dar seguimento avante, porém tem efeito limitado em águas restritas e com o navio sem governo. ( )
III) A influência da ação das ondas no cálculo do “bollard pull” necessário para a manobra do navio é de pouca expressão, quando comparada com outros efeitos. ( )
IV) Um cabo curto propicia o melhor resultado da aplicação da força de tração. ( )
V) O principal risco de um rebocador atuando numa manobra é quanto à estabilidade, especialmente nos rebocadores convencionais com cabo passado no gato, uma vez que o gato do rebocador costuma não abrir quando está sob tensão muito forte, mesmo sendo dotado de dispositivo de disparo de segurança.( )`,
    alternativas: {
      A: "(V) (V) (F) (F) (F)",
      B: "(V) (F) (V) (F) (V)",
      C: "(F) (V) (F) (V) (V)",
      D: "(V) (V) (V) (F) (V)",
      E: "(F) (F) (V) (V) (F)",
    },
    correta: "D",
    comentario: `Item a item (conforme o gabarito oficial):
1º Verdadeiro — a tabela reproduz o “Guia Genérico da Melhor Utilização Teórica de Rebocadores” do livro, inclusive a convenção adotada para o ASD.
2º Verdadeiro — o cabo na proa é a forma tradicional de rebocar navio sem propulsão e a mais eficiente para dar seguimento avante, mas com efeito limitado em águas restritas e com o navio sem governo.
3º Verdadeiro — no cálculo do “bollard pull” necessário em manobras portuárias, o efeito das ondas é pouco expressivo frente ao do vento e da corrente.
4º Falso — cabo curto reduz a eficiência: a descarga do hélice incide no casco do navio e o ângulo vertical do cabo aumenta; o cabo mais longo (dentro do espaço disponível) aplica melhor a força de tração.
5º Verdadeiro — o principal risco é o emborcamento (“girting”), sobretudo no convencional com cabo no gato a meio navio, pois o gato costuma não abrir sob tensão muito forte, mesmo com dispositivo de disparo.`,
  },
);

// Prova escrita DPC 2011 (PSCPP/2011 – Prova Amarela) — questões 26 a 50 (28, 33 e 45 anuladas).
// Letra correta: gabarito oficial (texto em vermelho no PDF). Explicações: elaboradas à parte.
QUESTOES.push(
  {
    id: "dpc2011-26",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `Durante a preparação da derrota de uma determinada viagem, o Encarregado de Navegação depara-se com duas cartas náuticas construídas utilizando a Projeção de Mercator que cobrem um mesmo trecho da travessia.
Numa das cartas, que designaremos ALFA, a distância de 3km medida sobre a superfície da Terra é representada por um comprimento gráfico de 40mm.
Na outra, designada BRAVO, um segmento de reta de comprimento gráfico de 1cm representa uma distância de 1km sobre a superfície da Terra.
Considerando que o fator escala será decisivo na seleção da carta náutica a ser utilizada na preparação da derrota, aponte a opção que contempla a carta escolhida e justifica corretamente tal escolha pelo Encarregado de Navegação:`,
    alternativas: {
      A: "Carta ALFA, por ser a de menor escala e, por isso, apresentar menor grau de detalhe na representação do relevo marinho.",
      B: "Carta BRAVO, por ser a de menor escala e, por isso, apresentar maior grau de detalhe na representação do relevo marinho.",
      C: "Carta ALFA, por ser a de maior escala e, por isso, apresentar menor grau de detalhe na representação do relevo marinho.",
      D: "Carta ALFA, por ser a de maior escala e, por isso, apresentar maior grau de detalhe na representação do relevo marinho.",
      E: "Carta BRAVO, por ser a de maior escala e apresentar maior grau de detalhe na representação do relevo marinho.",
    },
    correta: "D",
    explicacoes: {
      A: "A conta mostra que ALFA é a de MAIOR escala (1:75.000 contra 1:100.000); e não faria sentido escolher uma carta por ter menos detalhe.",
      B: "BRAVO é de fato a de menor escala (1:100.000), mas menor escala significa MENOR grau de detalhe; a justificativa é contraditória.",
      C: "ALFA é a de maior escala, mas maior escala implica MAIOR (e não menor) grau de detalhe.",
      D: "Correta. ALFA: 40 mm ↔ 3 km = 3.000.000 mm → escala 1:75.000. BRAVO: 1 cm ↔ 1 km = 100.000 cm → escala 1:100.000. Como 1/75.000 > 1/100.000, ALFA é a de maior escala, mostra o trecho com mais detalhe e deve ser a preferida (usa-se sempre a carta de maior escala disponível).",
      E: "BRAVO (1:100.000) é a de MENOR escala; a de maior escala é ALFA (1:75.000).",
    },
  },
  {
    id: "dpc2011-27",
    prova: "DPC 2011",
    tema: "Cerimonial",
    revisar: true,
    enunciado: "De acordo com o contido na NORMAM-22/DPC, analise as afirmativas abaixo e assinale a opção incorreta:",
    alternativas: {
      A: "Os tipos de embandeiramento são: grande gala, pequena gala e funeral.",
      B: "Quando atracada em um porto nacional, uma embarcação mercante estrangeira içará a Bandeira Nacional no topo do mastro de vante e a do país a que pertence na popa, das 08:00horas ao pôr do sol.",
      C: "O tripulante, incluindo o Prático embarcado, que estiver no convés ou superestrutura de uma embarcação fica obrigado, por ocasião da cerimônia de içar e de arriar, a voltar-se na direção da Bandeira Nacional, tomar uma posição de respeito e, se for o caso, descobrir-se.",
      D: "O embandeiramento no dia 02 de novembro será feito içando a Bandeira Nacional à meia adriça, tanto nos mastros como na popa, e no período das 08:00 horas ao pôr do sol.",
      E: "Para fim de embandeiramento, são dias de pequena gala: 1o de janeiro, 21 de abril, 1o de maio, 19 de novembro, 25 de dezembro e 28 de dezembro.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação correta: a NORMAM-22 prevê os embandeiramentos em grande gala, pequena gala e funeral. Não é a resposta.",
      B: "Afirmação correta: o mercante estrangeiro em porto nacional iça a Bandeira do Brasil no tope do mastro de vante e a do seu país na popa, das 08:00 ao pôr do sol. Não é a resposta.",
      C: "É a incorreta, pelo gabarito oficial: o texto da norma não se dirige ao “tripulante, incluindo o Prático embarcado” — o Prático não é tripulante; a obrigação de voltar-se para a Bandeira e tomar posição de respeito alcança todas as pessoas que estiverem no convés ou na superestrutura. A redação dada na alternativa distorce o dispositivo da NORMAM-22.",
      D: "Afirmação correta: em 2 de novembro (Finados) o embandeiramento é em funeral, com a Bandeira Nacional a meia adriça nos mastros e na popa, das 08:00 ao pôr do sol. Não é a resposta.",
      E: "Afirmação correta, pelo gabarito oficial: é a relação de dias de pequena gala da norma (28 de dezembro é o Dia da Marinha Mercante). Não é a resposta.",
    },
  },
  {
    id: "dpc2011-29",
    prova: "DPC 2011",
    tema: "Arte Naval",
    enunciado: "De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), quando um navio está amarrado a dois ferros, qual das afirmativas abaixo é incorreta?",
    alternativas: {
      A: "Deve-se usar o anilho de amarração, para evitar que as amarras tomem voltas ao fazer o navio um giro completo sob a influência da maré ou do vento.",
      B: "A grande vantagem desse tipo de amarração é que o navio gira num círculo cujo raio é aproximadamente igual ao seu comprimento, ocupando assim uma área muito menor que um navio fundeado.",
      C: "A segurança da amarração a dois ferros é maior que a de um navio fundeado, porque as amarras não giram com o navio, havendo menor probabilidade do ferro desunhar.",
      D: "Enquanto o navio se mantiver afilado à corrente ou ao vento, somente ficará portando por uma das amarras e a tensão que cada uma delas sofre é a mesma que se o navio estivesse fundeado.",
      E: "O alinhamento dos dois ferros deve ser perpendicular à direção da corrente.",
    },
    correta: "E",
    explicacoes: {
      A: "Afirmação correta: o anilho (tornel) de amarração une as duas amarras e evita que tomem voltas quando o navio gira com a maré ou o vento. Não é a resposta.",
      B: "Afirmação correta: amarrado a dois ferros o navio gira praticamente sobre a proa, num círculo de raio próximo ao seu comprimento — muito menos espaço que o de um navio fundeado com um ferro. Não é a resposta.",
      C: "Afirmação correta: as amarras permanecem na mesma direção (não acompanham o giro do navio), o que reduz a chance de o ferro desunhar. Não é a resposta.",
      D: "Afirmação correta: afilado à corrente, o navio porta por uma só amarra (a de montante), que sofre a mesma tensão de um fundeio simples. Não é a resposta.",
      E: "É a incorreta: na amarração a dois ferros a linha dos ferros deve ficar NA DIREÇÃO da corrente (da enchente/vazante) ou do vento reinante, de modo que o navio porte por um ferro na enchente e pelo outro na vazante. Com os ferros perpendiculares à corrente as duas amarras trabalhariam abertas, com esforço muito maior.",
    },
  },
  {
    id: "dpc2011-30",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `Um navegante deseja navegar, em 2011, entre dois pontos e obtém na carta náutica Rv = 152,5° para a navegação pretendida. Considerando os dados abaixo, qual o Rag em que deverá governar?

- Dec mg (2007) = 16° 10´ W; variação anual: 5´ W
- Dag = 02° E`,
    alternativas: {
      A: "Rag = 138°",
      B: "Rag = 154°",
      C: "Rag = 167°",
      D: "Rag = 169°",
      E: "Rag = 171°",
    },
    correta: "C",
    comentario: `Conta:
1) Atualização da declinação: de 2007 a 2011 são 4 anos × 5' W = 20' W → Dec mg (2011) = 16°10' W + 20' = 16°30' W = 16,5° W.
2) Rumo magnético: declinação W soma-se ao rumo verdadeiro → Rmg = Rv + Dec W = 152,5° + 16,5° = 169°.
3) Rumo da agulha: desvio E subtrai-se → Rag = Rmg − Dag E = 169° − 2° = 167°.
(Conferência: variação total = 16,5° W − 2° E = 14,5° W; Rag = 152,5° + 14,5° = 167°.)`,
    explicacoes: {
      A: "138° resulta de aplicar a variação total com o sinal trocado (152,5° − 14,5°). Ao passar do rumo verdadeiro para o da agulha, erro W SOMA e erro E subtrai.",
      B: "154° não decorre de nenhuma combinação correta dos dados; ignora praticamente toda a declinação de 16,5° W.",
      C: "Correta: Dec mg 2011 = 16°10' W + 4 × 5' = 16°30' W; Rmg = 152,5° + 16,5° = 169°; Rag = 169° − 2° (Dag E) = 167°.",
      D: "169° é o rumo MAGNÉTICO (Rmg). Falta aplicar o desvio da agulha de 2° E (subtrair) para chegar ao Rag.",
      E: "171° resulta de somar o desvio (169° + 2°), como se ele fosse W. Desvio E se subtrai ao converter Rmg em Rag.",
    },
  },
  {
    id: "dpc2011-31",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "De acordo com o contido na NORMAM-26/DHN, analise as afirmativas abaixo e assinale a opção correta:",
    alternativas: {
      A: "As Atalaias equipadas com estações-base de AIS constituem um VTS.",
      B: "Entre os requisitos de operação de uma Atalaia estão equipamentos de radiotelefonia em VHF e operadores bilíngues português/inglês, exclusivamente para a troca de informações relativas ao controle do tráfego de embarcações na ZP.",
      C: "VTS é um auxílio eletrônico à navegação com capacidade de prover monitorização ativa do tráfego aquaviário, cujo propósito é a coordenação e o controle do Serviço de Praticagem.",
      D: "Um VTS contribui, dentre outras, para a tarefa de prevenção da poluição marítima.",
      E: "Compete à Autoridade Portuária licenciar a implantação e a operação de um VTS.",
    },
    correta: "D",
    explicacoes: {
      A: "A Atalaia (estação de praticagem) não é um VTS, ainda que disponha de estação-base AIS: VTS é um serviço implantado e operado segundo requisitos próprios (autoridade competente, operadores certificados, capacidade de interagir com o tráfego).",
      B: "Pelo gabarito oficial, incorreta: a Atalaia não faz “controle do tráfego de embarcações” — sua estrutura de comunicações apoia o serviço de praticagem; o termo “exclusivamente para o controle do tráfego” desvirtua a norma.",
      C: "A primeira parte reproduz a definição de VTS, mas o propósito está errado: o VTS visa ampliar a segurança da vida humana no mar, a segurança e eficiência da navegação e a proteção do meio ambiente — não coordenar e controlar o Serviço de Praticagem.",
      D: "Correta: entre os propósitos/contribuições de um VTS estão a segurança da navegação, a eficiência do tráfego e a proteção do meio ambiente marinho, o que inclui a prevenção da poluição marítima.",
      E: "O licenciamento da implantação e operação de VTS compete à Autoridade Marítima (por meio da DHN/CAMR), não à Autoridade Portuária — que pode ser a operadora/provedora do serviço.",
    },
  },
  {
    id: "dpc2011-32",
    prova: "DPC 2011",
    tema: "Meteorologia e Oceanografia",
    revisar: true,
    enunciado: `Em relação às informações disponíveis nas publicações Atlas de Cartas-Piloto, Cartas de Correntes de Marés e Tábuas das Marés, analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) Em dias de mar bem agitado, na região marítima costeira, da METÁREA V, observa-se a ocorrência de corrente de ressaca no litoral.
II) As intensidades das correntes de enchente e vazante observadas pelos navegantes em determinado porto são periodicamente menores que as cartografadas.
III) A sazonalidade afeta as correntes de densidade.
IV) As intensidades das correntes de retorno provocadas por ondas são mais afetadas pelos comprimentos dessas ondas.
V) Para selecionar a carta de correntes de marés de seu interesse, o navegante consulta o horário de início da enchente.`,
    alternativas: {
      A: "Apenas as afirmativas I), IV) e V) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e V) são verdadeiras.",
      C: "Apenas as afirmativas II), III) e V) são verdadeiras.",
      D: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
    },
    correta: "D",
    comentario: `I) Falsa (pelo gabarito oficial) — a afirmativa generaliza: mar agitado, por si só, não implica “corrente de ressaca”; as correntes geradas por ondas junto à costa dependem da incidência das ondas e da configuração do litoral.
II) Verdadeira — as Cartas de Correntes de Maré representam a condição de sizígia média; nas quadraturas (periodicamente) as correntes observadas são menores que as cartografadas.
III) Verdadeira — correntes de densidade dependem de temperatura e salinidade, que variam sazonalmente (aquecimento, chuvas, descarga de rios).
IV) Verdadeira (pelo gabarito oficial) — a intensidade das correntes de retorno geradas por ondas está ligada às características das ondas, em especial ao seu comprimento.
V) Falsa — as Cartas de Correntes de Maré são referidas ao horário da PREAMAR do porto de referência (horas antes/depois da PM), obtido na Tábua das Marés — não ao início da enchente.`,
    explicacoes: {
      A: "Inclui as falsas I) e V) (a carta de correntes é selecionada pela hora da preamar, não pelo início da enchente) e omite as verdadeiras II) e III).",
      B: "Inclui as falsas I) e V) e omite as verdadeiras III) e IV).",
      C: "Inclui a falsa V) e omite a verdadeira IV).",
      D: "Correta pelo gabarito oficial: II) (correntes periodicamente menores que as cartografadas — quadraturas), III) (sazonalidade afeta correntes de densidade) e IV) são as verdadeiras.",
      E: "Inclui a falsa I) e omite a verdadeira II).",
    },
  },
  {
    id: "dpc2011-34",
    prova: "DPC 2011",
    tema: "Arte Naval",
    revisar: true,
    enunciado: "Assinale a opção incorreta. De acordo com o contido no livro “Arte Naval” (Maurílio M. Fonseca - 7a edição: 2005), são requisitos de um bom fundeadouro:",
    alternativas: {
      A: "Deve haver bastante espaço para o giro do navio fundeado. A área livre de obstruções que um navio necessita para fundear é equivalente a um círculo de raio igual à soma do filame mais duas vezes o comprimento do navio.",
      B: "Ser de pouca profundidade, evitando largar um grande filame.",
      C: "Ser abrigado, sem ou com poucos ventos, correntes e vagas.",
      D: "O fundo não deve possuir gradiente acentuado, porque é mais difícil para o ferro unhar e o navio fica sujeito a garrar quando estiver portando pela amarra no lado de maior profundidade.",
      E: "O fundo deve ser de boa tença.",
    },
    correta: "A",
    explicacoes: {
      A: "É a incorreta: a exigência de espaço para o giro é verdadeira, mas o raio do círculo é a soma do filame com UMA vez o comprimento do navio (filame + comprimento), e não com duas vezes o comprimento.",
      B: "Afirmação correta: pouca profundidade permite fundear com filame menor. Não é a resposta.",
      C: "Afirmação correta: o bom fundeadouro é abrigado de ventos, correntes e vagas. Não é a resposta.",
      D: "Afirmação correta: fundo com declive acentuado dificulta o ferro unhar e favorece garrar quando o navio porta para o lado mais fundo. Não é a resposta.",
      E: "Afirmação correta: boa tença (areia dura, lama consistente, argila) é requisito básico para o ferro unhar. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-35",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `De acordo com o contido no livro “Navegação: A Ciência e a Arte” (Altineu Pires Miguens - 1ª edição: 1996), quando demandando um canal ou manobrando em águas restritas, onde o navio opera, normalmente, nas proximidades de perigos à navegação, torna-se essencial levar na devida conta fatores como a profundidade local, características da manobra (dados táticos) do navio e os efeitos do vento e da corrente sobre a curva de giro, a influência da ação do leme sobre o avanço, etc.
Dentre as afirmativas abaixo, relacionadas aos aspectos mencionados, assinale aquela que contém conceito ou definição incorreta:`,
    alternativas: {
      A: "Denomina-se abatimento o caimento do navio para o bordo da guinada, no início da evolução, medido na direção perpendicular ao rumo inicial do navio.",
      B: "As características de manobra do navio (dados táticos) são determinadas durante as provas de mar que se seguem à sua construção ou modernização.",
      C: "Chama-se afastamento a distância tomada sobre a direção transversal ao rumo inicial, desde o ponto em que o leme foi carregado até a proa ter atingido o novo rumo.",
      D: "O avanço, o diâmetro tático e o afastamento diminuem com o aumento do ângulo de leme.",
      E: "Com o navio efetuando giro de 360º com ângulo de leme constante, o diâmetro final será sempre menor que o diâmetro tático.",
    },
    correta: "A",
    explicacoes: {
      A: "É a incorreta: abatimento é o caimento do navio para o bordo OPOSTO ao da guinada, no início da evolução (a força lateral do leme empurra a popa — e o navio como um todo — para fora da curva antes de a guinada se estabelecer).",
      B: "Afirmação correta: os dados táticos são levantados nas provas de mar após a construção ou modernização. Não é a resposta.",
      C: "Afirmação correta: é a definição de afastamento dada por Miguens (distância transversal ao rumo inicial até a proa atingir o novo rumo). Não é a resposta.",
      D: "Afirmação correta: com mais leme a curva de giro fica mais apertada — diminuem avanço, afastamento e diâmetro tático. Não é a resposta.",
      E: "Afirmação correta: o diâmetro final (da trajetória já circular e estabilizada) é menor que o diâmetro tático, pois o navio perde velocidade e a curva fecha ao longo da evolução. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-36",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: `De acordo com a Lei nº 2.180, de 05 de fevereiro de 1954, assinale a opção que apresenta a sequência de preenchimento das lacunas abaixo de forma correta:

No julgamento do processo, antes de ___________ a votação, poderá qualquer juiz pedir vista do processo até a sessão imediata e, excepcionalmente, pelo prazo que lhe for concedido pelo Tribunal.
O Tribunal poderá aplicar a pena de ___________________ às pessoas que lhe estão jurisdicionadas, quando ficar provado que o acidente ou fato da navegação ocorreu por recusa imotivada de assistência à embarcação em perigo iminente, do qual tenha resultado sinistro.
Quando da aplicação da pena, será sempre circunstância _____________ da pena a ignorância, ou a errada compreensão da lei, quando escusável.`,
    alternativas: {
      A: "concluída / cancelamento da matrícula profissional / agravante.",
      B: "iniciada / suspensão ou multa / atenuante.",
      C: "concluída / suspensão ou multa / agravante.",
      D: "iniciada / cancelamento da matrícula profissional / atenuante.",
      E: "concluída / cancelamento da matrícula profissional / atenuante.",
    },
    correta: "B",
    comentario: `1ª lacuna: “iniciada” — o pedido de vista é feito ANTES de iniciada a votação (depois de iniciada, não cabe mais).
2ª lacuna: “suspensão ou multa” — pela Lei nº 2.180/54 a recusa imotivada de assistência a embarcação em perigo, da qual resulte sinistro, é punida com suspensão ou multa (o cancelamento da matrícula é reservado às hipóteses mais graves, como dolo na provocação do acidente).
3ª lacuna: “atenuante” — a ignorância ou errada compreensão da lei, quando escusável, é circunstância que sempre ATENUA a pena.`,
    explicacoes: {
      A: "Erra as três lacunas: a vista é pedida antes de INICIADA a votação; a pena para a recusa imotivada de assistência é suspensão ou multa; e a ignorância escusável da lei é atenuante, não agravante.",
      B: "Correta: “iniciada / suspensão ou multa / atenuante”, conforme o gabarito oficial e o texto da Lei nº 2.180/54.",
      C: "Acerta apenas a pena (suspensão ou multa). Erra ao dizer “concluída” (o correto é antes de iniciada a votação) e “agravante” (é atenuante).",
      D: "Acerta a 1ª e a 3ª lacunas, mas erra a pena: para a recusa imotivada de assistência a lei prevê suspensão ou multa, não o cancelamento da matrícula.",
      E: "Acerta só a 3ª lacuna (atenuante). Erra “concluída” (é “iniciada”) e a pena (é suspensão ou multa).",
    },
  },
  {
    id: "dpc2011-37",
    prova: "DPC 2011",
    tema: "Arquitetura Naval",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Principles of Naval Architecture” (SNAME - 3a edição: 1988/1989), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) A eficiência propulsiva (“propulsive efficiency”) é obtida pela multiplicação das: eficiência de transmissão do eixo propulsor (“shaft transmission efficiency”); eficiência do casco (“hull efficiency”); eficiência relativa rotativa (“relative rotative efficiency”); e eficiência do propulsor em água aberta (“open propeller efficiency).
II) A eficiência propulsiva (“propulsive efficiency”) é obtida pela multiplicação das: eficiência de transmissão do eixo propulsor (“shaft transmission efficiency”); eficiência do casco (“hull efficiency”); e eficiência do propulsor em água aberta (“open propeller efficiency).
III) Usando a teoria de elemento da pá (“Blade Element Theory), os testes realizados por Brockett (1966) demonstraram que o “lift” com valor igual a zero na pá de um propulsor ocorre quando o ângulo de incidência do escoamento é igual a 0 (zero).
IV) O propulsor, quando desenvolvendo empuxo, desacelera a água a vante dele, provocando o aumento da pressão ao redor da popa e, também, a redução de velocidade nesta região, o que causa a redução da resistência ao avanço acima daquela medida em reboque.
V) O aumento do número de pás de um propulsor reduz a intensidade das forças de excitação do casco e aumenta a sua freqüência, o que contribui para evitar condições de ressonância e de vibração forçada no casco do navio.`,
    alternativas: {
      A: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      B: "Apenas as afirmativas II) e III) são verdadeiras.",
      C: "Apenas as afirmativas II), e IV) são verdadeiras.",
      D: "Apenas as afirmativas I) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I) e V) são verdadeiras.",
    },
    correta: "E",
    comentario: `I) Verdadeira — eficiência propulsiva = eficiência de transmissão do eixo × eficiência do casco × eficiência relativa rotativa × eficiência do propulsor em água aberta.
II) Falsa — omite a eficiência relativa rotativa.
III) Falsa — nas seções de pá com curvatura (camber) a sustentação nula ocorre num ângulo de incidência NEGATIVO (ângulo de sustentação nula), e não em zero; com incidência zero ainda há “lift”.
IV) Falsa — o propulsor ACELERA a água a vante dele, reduzindo a pressão na popa; isso AUMENTA a resistência em relação à medida em reboque (é a dedução de empuxo — “thrust deduction”).
V) Verdadeira — mais pás reduzem a intensidade das forças de excitação e elevam a sua frequência (frequência de pá = nº de pás × rpm), ajudando a fugir de ressonâncias do casco.`,
    explicacoes: {
      A: "As três afirmativas citadas — II), III) e IV) — são falsas; omite as verdadeiras I) e V).",
      B: "II) (falta a eficiência relativa rotativa) e III) (o “lift” nulo ocorre com incidência negativa, não zero) são falsas.",
      C: "II) e IV) são falsas: a IV) inverte o fenômeno — o hélice acelera a água a vante, reduz a pressão na popa e AUMENTA a resistência.",
      D: "A I) é verdadeira, mas a IV) é falsa (o propulsor aumenta, e não reduz, a resistência em relação à de reboque); omite a V).",
      E: "Correta: I) traz o produto completo das quatro eficiências e V) descreve corretamente o efeito do aumento do número de pás.",
    },
  },
  {
    id: "dpc2011-38",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    tipo: "afirmativas",
    revisar: true,
    enunciado: `Um tripulante de um navio VLCC (Very Large Crude Carrier), durante a aproximação do ponto de espera do prático, caiu ao mar. O Comandante, que se encontrava no passadiço, decidiu executar a manobra de Williamson. Inicialmente, ordenou todo leme a boreste (bordo pelo qual o homem caiu) e o manteve assim até o navio atingir um rumo de 45° defasado do rumo inicial, quando então inverteu o leme carregando-o todo para bombordo e mantendo-o nesta posição enquanto o navio demandava o rumo oposto àquele em que a manobra de Williamson começou. Faltando 15° para o navio alcançar a proa recíproca à inicial, o Comandante novamente ordenou inverter o leme. Ao iniciar a manobra, o navio desenvolvia 19 nós e o regime de máquinas não foi alterado. Não houve a preocupação em manter o homem que caiu ao mar no visual, pois o Comandante avaliou que a manobra seria executada corretamente.
Considerando a manobra até o momento em que foi descrita acima e tendo como referência o livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey - 4ª edição: 2004), analise as afirmativas abaixo, identifique quais são verdadeiras e assinale a opção correta:

I) O Comandante falhou na medida em que deveria ter seguido o procedimento padrão de executar a primeira guinada até um rumo a 60° do rumo inicial.
II) O Comandante deveria ter aumentado a velocidade do navio, para acelerar a chegada à proa recíproca.
III) O homem que caiu ao mar deveria ser mantido no visual durante toda a manobra; esse fator é mais importante do que a correta execução da manobra.
IV) A manobra de Williamson pode ser resumida a três movimentos de leme.`,
    alternativas: {
      A: "Apenas as afirmativas III) e IV) são verdadeiras.",
      B: "Apenas as afirmativas I), II) e IV) são verdadeiras.",
      C: "Apenas as afirmativas I) e III) são verdadeiras.",
      D: "Apenas as afirmativas II), III) e IV) são verdadeiras.",
      E: "Apenas as afirmativas I), III) e IV) são verdadeiras.",
    },
    correta: "A",
    comentario: `I) Falsa — para MacElrevey os 60° clássicos são apenas uma referência: o ponto de inversão do leme varia de navio para navio e deve ser determinado em testes; em navios grandes como um VLCC ele é menor (da ordem de 35° a 50°). Inverter aos 45° não foi uma falha.
II) Falsa — o livro recomenda NÃO alterar o regime de máquinas durante a manobra: a própria guinada com todo o leme faz o navio perder velocidade, e ele chega ao rumo recíproco com pouco seguimento, pronto para parar junto ao homem.
III) Verdadeira — manter o homem no visual é mais importante do que a execução perfeita da manobra.
IV) Verdadeira — a manobra resume-se a três movimentos de leme: todo leme para o bordo da queda; inversão para o bordo oposto; e nova inversão para quebrar a guinada e firmar no rumo recíproco.`,
  },
  {
    id: "dpc2011-39",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `Os dados da tabela a seguir representam os horários e as alturas das preamares (PM) e baixa-mares (BM) no fictício porto ZULU, em dois sábados consecutivos num ano qualquer. A fase da lua no dia 21 de setembro daquele ano foi Lua Nova.

Dia — Maré — Horário — Altura
14/SET/XXXX (Sábado) — PM — 00:23 — 2.6
14/SET/XXXX (Sábado) — BM — 06:37 — 0.9
14/SET/XXXX (Sábado) — PM — 12:48 — 2.6
14/SET/XXXX (Sábado) — BM — 19:19 — 0.8
21/SET/XXXX (Sábado) — BM — 01:37 — 0.2
21/SET/XXXX (Sábado) — PM — 07:39 — 4.7
21/SET/XXXX (Sábado) — BM — 13:49 — 0.1
21/SET/XXXX (Sábado) — PM — 19:55 — 4.6

Da observação desses dados, podemos obter diversas informações. Das afirmações abaixo, aponte aquela que contraria ou não encontra respaldo nos dados apresentados.`,
    alternativas: {
      A: "As marés no porto ZULU são do tipo semidiurnas.",
      B: "Foram de quadratura as marés no dia 14 de setembro.",
      C: "No dia 21 de setembro, ocorreram marés de águas mortas.",
      D: "Às 10:00 horas do dia 14 de setembro, a maré no porto ZULU era de enchente.",
      E: "O estofo da maré de vazante na tarde do dia 21 de setembro ocorreu em torno das 13:49 horas.",
    },
    correta: "C",
    explicacoes: {
      A: "Afirmação respaldada pelos dados: há duas preamares e duas baixa-mares por dia, com intervalos de cerca de 6 h e alturas semelhantes — maré semidiurna. Não é a resposta.",
      B: "Afirmação respaldada: o dia 14 está 7 dias antes da Lua Nova, ou seja, em quarto minguante (quadratura); a amplitude é pequena (2,6 − 0,9 = 1,7 m). Não é a resposta.",
      C: "É a que contraria os dados: 21 de setembro foi Lua Nova, portanto maré de SIZÍGIA (águas vivas), com amplitude grande (4,7 − 0,1 = 4,6 m). Águas mortas são as marés de quadratura, como as do dia 14.",
      D: "Afirmação respaldada: 10:00 fica entre a BM das 06:37 e a PM das 12:48, logo a maré estava enchendo. Não é a resposta.",
      E: "Afirmação respaldada: o estofo (parada) da vazante ocorre no instante da baixa-mar, que na tarde do dia 21 foi às 13:49. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-40",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "De acordo com o contido na LESTA, no RLESTA e na NORMAM-12/DPC(1a REVISÃO), qual das afirmativas abaixo é incorreta:",
    alternativas: {
      A: "O Agente de Manobra e Docagem executa faina de praticagem quando assessora manobra de navio para entrada em dique.",
      B: "Configura-se RECUSA a situação em que o Prático em período de sobreaviso deixa de atender tempestivamente faina de praticagem para a qual foi requisitado.",
      C: "O Prático pode ser requisitado para realizar faina de praticagem em situação de emergência, mesmo que em período de repouso.",
      D: "A navegação realizada no interior de uma ZP e com a assessoria de um ou mais Práticos embarcados é uma faina de praticagem.",
      E: "A impraticabilidade parcial declarada pela CP/DL/AG pode impedir a entrada de determinadas embarcações no porto.",
    },
    correta: "A",
    explicacoes: {
      A: "É a incorreta: o serviço de praticagem é executado exclusivamente por Práticos habilitados. O Agente de Manobra e Docagem é um tripulante/profissional que manobra o navio em fainas de docagem, atividade distinta, que a norma não classifica como faina de praticagem.",
      B: "Afirmação correta: a NORMAM-12 caracteriza como recusa o não atendimento tempestivo, pelo Prático de sobreaviso, da faina para a qual foi requisitado. Não é a resposta.",
      C: "Afirmação correta: em situação de emergência o Prático pode ser requisitado mesmo em período de repouso, pois o serviço de praticagem é essencial e deve estar permanentemente disponível. Não é a resposta.",
      D: "Afirmação correta: é a própria definição de faina de praticagem (navegação/manobra no interior da ZP com assessoria de Prático embarcado). Não é a resposta.",
      E: "Afirmação correta: a impraticabilidade parcial restringe o tráfego de determinadas embarcações (por porte, calado etc.), impedindo-lhes a entrada enquanto perdurar. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-41",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    enunciado: "O livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004) tece considerações sobre diferenças de comportamento dos navios quando navegando em águas profundas e águas rasas. De acordo com o contido no referido livro , assinale a afirmativa incorreta:",
    alternativas: {
      A: "A variação (rate) de guinada é essencialmente a mesma tanto em águas profundas quanto em águas rasas.",
      B: "O diâmentro da curva de giro é cerca de 2 (duas) vezes menor em águas rasas do que em águas profundas.",
      C: "A velocidade cai significativamente quando realizadas grandes mudanças de rumo em águas profundas.",
      D: "Há perda de velocidade quando realizando grandes mudanças de rumo em águas rasas, porém menor que se a manobra fosse em águas profundas.",
      E: "O diâmetro da curva de giro corresponde a cerca de 3 (três) vezes o comprimento do navio, quando em águas profundas.",
    },
    correta: "B",
    explicacoes: {
      A: "Afirmação correta segundo MacElrevey: a taxa de guinada é praticamente a mesma em águas rasas e profundas — o que muda é o espaço que o navio ocupa para girar. Não é a resposta.",
      B: "É a incorreta: é o contrário. Em águas rasas o diâmetro da curva de giro AUMENTA, podendo chegar a cerca do DOBRO do de águas profundas.",
      C: "Afirmação correta: em águas profundas o navio perde velocidade de forma significativa nas grandes guinadas. Não é a resposta.",
      D: "Afirmação correta: em águas rasas também há perda de velocidade, porém menor que em águas profundas (o navio deriva menos na curva). Não é a resposta.",
      E: "Afirmação correta: em águas profundas o diâmetro de giro típico de um mercante é de cerca de 3 comprimentos do navio. Não é a resposta.",
    },
  },
  {
    id: "dpc2011-42",
    prova: "DPC 2011",
    tema: "Legislação e Normas",
    revisar: true,
    enunciado: "Assinale a opção correta. O Delegado da Delegacia da Capitania dos Portos em Itajaí:",
    alternativas: {
      A: "Pode decidir pela perda da homologação de Atalaia da ZP-21, Zona de Praticagem de Itajaí e Navegantes (SC).",
      B: "É o Representante da Autoridade Marítima responsável pelos assuntos concernentes à Praticagem da ZP-21, Zona de Praticagem de Itajaí e Navegantes (SC).",
      C: "Estabelece os preços dos serviços de praticagem na ZP-21, Zona de Praticagem de Itajaí e Navegantes, quando não houver acordo entre os tomadores e prestadores desses serviços.",
      D: "Estabelece as regras especiais complementares ao COLREG para uso no rio Itajaí-Açu.",
      E: "Não pode determinar a instauração de IAFN, porque, conforme a NORMAM-09/DPC, a instauração de IAFN é prerrogativa de Capitão dos Portos.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta, pelo gabarito oficial: pela NORMAM-12 a homologação das Atalaias (e a sua perda, quando deixam de atender aos requisitos) é atribuição da CP/DL/AG com jurisdição sobre a ZP — no caso da ZP-21, a Delegacia em Itajaí.",
      B: "O Representante da Autoridade Marítima para os assuntos de Praticagem é o Diretor de Portos e Costas (DPC), não o Delegado.",
      C: "A fixação de preços do serviço de praticagem, na falta de acordo entre as partes, cabia (à época) à DPC, como Representante da Autoridade Marítima para a praticagem — não ao Delegado.",
      D: "Regras especiais complementares ao COLREG para águas interiores são estabelecidas pela Autoridade Marítima em norma própria (NORMAM-02/DPC), não pelo Delegado local.",
      E: "Falsa: pela NORMAM-09 o IAFN é instaurado pelas Capitanias, Delegacias e Agências; o Delegado pode, sim, determinar a instauração.",
    },
  },
  {
    id: "dpc2011-43",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    tipo: "sequencia",
    enunciado: `Durante uma faina de atracação em um cais, há certos fatores, conforme contido no livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004), que acarretam diferenças no ângulo de aproximação, caso a atracação seja feita por boreste ou por bombordo do navio, considerando um navio mercante de um eixo com passo à direita. De acordo com o referido livro, analise as afirmativas abaixo, identifique quais são verdadeiras ( V ) e quais são falsas ( F ) e assinale a opção correta:

I) A intensidade e a direção do vento relativo influenciam o ângulo de aproximação. ( )
II) A presença de outros navios atracados ao cais não influenciam o ângulo de aproximação. ( )
III) O calado e a borda-livre não influenciam o ângulo de aproximação. ( )
IV) As características da propulsão e governo do navio influenciam o ângulo de aproximação. ( )
V) As características do cais não influenciam o ângulo de aproximação. ( )`,
    alternativas: {
      A: "( V ) ( V ) ( F ) ( V ) ( F ).",
      B: "( F ) ( F ) ( V ) ( F ) ( V ).",
      C: "( V ) ( V ) ( V ) ( F ) ( F ).",
      D: "( F ) ( F ) ( F ) ( F ) ( V ).",
      E: "( V ) ( F ) ( F ) ( V ) ( F ).",
    },
    correta: "E",
    comentario: `Item a item:
1º Verdadeiro — a força e a direção do vento relativo condicionam o ângulo de aproximação (vento de terra pede ângulo maior; vento para o cais, ângulo menor).
2º Falso — navios atracados a vante e a ré do berço limitam o espaço e INFLUENCIAM o ângulo com que se pode chegar.
3º Falso — calado e borda-livre determinam quanto o navio sente o vento (área vélica) e a corrente, e portanto influenciam o ângulo de aproximação.
4º Verdadeiro — tipo de propulsão, sentido do passo (a popa de um navio de passo direito cai para BB com máquina atrás), potência a ré e leme influenciam o ângulo: por isso a aproximação por BB se faz com ângulo maior que por BE.
5º Falso — as características do cais (cais fechado ou vazado sobre estacas, comprimento, defensas) também influenciam.`,
  },
  {
    id: "dpc2011-44",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    revisar: true,
    enunciado: "Assinale a opção correta. Duas embarcações, denominadas A e B , navegam, no período noturno, ao longo de um canal que, apesar de estreito, permite a ultrapassagem segura, além do que não possui curvas e obstáculos. A embarcação A desenvolve a máxima velocidade estabelecida nas NPCP para a navegação no canal, marca a embarcação B aos 000° relativos e dela se aproxima. As luzes avistadas de bordo da embarcação A e a apresentação do seu radar permitem concluir que a embarcação B encontra-se rebocando pela popa e navegando tão próximo quanto possível do limite externo do canal a seu BE. O Comandante de A, desejoso de ultrapassar B, consulta o Prático embarcado sobre a possibilidade de fazê-lo. O Prático, conhecedor das peculiaridades de sua ZP e do tráfego de embarcações no canal, sugere corretamente:",
    alternativas: {
      A: "Manter a velocidade e ultrapassar, deixando a embarcação B por BE.",
      B: "Manter a velocidade e ultrapassar, deixando a embarcação B por BB.",
      C: "Reduzir a velocidade e não ultrapassar, pois tal manobra é proibida pelo COLREG em canais estreitos no período noturno.",
      D: "Reduzir a velocidade e somente ultrapassar depois de obter a concordância da embarcação B .",
      E: "Reduzir a velocidade, ultrapassar e, depois da ultrapassagem, aumentar a velocidade e manter o rumo.",
    },
    correta: "A",
    explicacoes: {
      A: "Correta: B navega colada ao limite do canal a seu boreste (Regra 9), de modo que o espaço livre está a bombordo de B. A ultrapassa por esse lado, deixando B pelo seu boreste. Como o canal permite ultrapassagem segura SEM que B precise manobrar, não se aplica a Regra 9(e) (troca de sinais/concordância); vale a Regra 13 — A mantém-se fora do caminho de B até estar safa. A já está na velocidade máxima permitida, então mantém a velocidade.",
      B: "Deixar B por bombordo significaria passar entre B e o limite do canal a boreste, justamente onde B está encostada — não há espaço.",
      C: "O COLREG não proíbe ultrapassagem em canal estreito, nem de noite; a Regra 9(e) apenas disciplina o caso em que a alcançada precisa manobrar para permitir a passagem.",
      D: "A concordância (sinais da Regra 34(c)) só é exigida quando a ultrapassagem depende de manobra da embarcação alcançada. O enunciado afirma que o canal permite a ultrapassagem segura, logo ela é dispensável.",
      E: "Reduzir a velocidade impede ou prolonga a ultrapassagem; e aumentar depois violaria o limite das NPCP, pois A já navega na velocidade máxima permitida.",
    },
  },
  {
    id: "dpc2011-46",
    prova: "DPC 2011",
    tema: "Manobra do Navio",
    revisar: true,
    enunciado: "Um navio VLCC (Very Large Crude Carrier) está navegando e dá uma forte guinada para um dos bordos. O Comandante deve esperar que o navio sofra uma redução de um determinado percentual de sua velocidade de avanço. Mantido o regime de máquinas, qual deve ser esse percentual aproximado quando a guinada atingir 90 graus do rumo inicial, segundo o contido no livro “Shiphandling for the Mariner” (Daniel H. MacElrevey e Daniel E. MacElrevey – 4ª edição: 2004)?",
    alternativas: {
      A: "15 %",
      B: "25 %",
      C: "35 %",
      D: "40 %",
      E: "50 %",
    },
    correta: "B",
    explicacoes: {
      A: "15% subestima a perda: segundo MacElrevey um VLCC perde cerca de um quarto da velocidade a cada 90° de guinada forte.",
      B: "Pelo gabarito oficial e pelo livro: um VLCC, mantido o regime de máquinas, perde aproximadamente 25% (25 a 30%) do seu seguimento a cada 90° de mudança de rumo com muito leme — propriedade útil para reduzir velocidade sem usar máquina atrás.",
      C: "35% está acima do valor citado no livro para uma guinada de 90° (cerca de 25%).",
      D: "40% superestima a perda para 90° de guinada.",
      E: "50% corresponde aproximadamente à perda acumulada após cerca de 180° de guinada, não 90°.",
    },
  },
  {
    id: "dpc2011-47",
    prova: "DPC 2011",
    tema: "Navegação",
    enunciado: `De acordo com o contido no livro “Navegação: A Ciência e a Arte” (Altineu Pires Miguens - 1ª edição: 1996), navegando próximo à costa ou em águas restritas, pode-se obter a posição do navio empregando-se informações fornecidas pelo radar. Alguns métodos para isso são:

I) Distâncias e marcações-radar.
II) Cruzamento de marcações-radar.
III) Marcações visuais e distâncias-radar.
IV) Cruzamento de distâncias-radar.

Indique, dentre as opções abaixo, a que apresenta os mencionados métodos na ordem decrescente (da maior para a menor) de precisão:`,
    alternativas: {
      A: "III)  IV)  I)  II).",
      B: "I)  II)  III)  IV).",
      C: "IV)  III)  II)  I).",
      D: "III)  IV)  II)  I).",
      E: "IV)  II)  I)  III ).",
    },
    correta: "A",
    comentario: `Princípio: a DISTÂNCIA-radar é precisa, a MARCAÇÃO-radar é pobre (largura do feixe, erros de alinhamento) e a marcação VISUAL é a mais precisa de todas. Daí a ordem de Miguens:
1º III) Marcações visuais e distâncias-radar — combina as duas melhores informações.
2º IV) Cruzamento de distâncias-radar — só distâncias, que são precisas.
3º I) Distância e marcação-radar — uma informação boa e uma pobre.
4º II) Cruzamento de marcações-radar — só a informação pobre; é o método menos preciso.`,
    explicacoes: {
      A: "Correta: marcação visual + distância-radar (III) > cruzamento de distâncias-radar (IV) > distância e marcação-radar (I) > cruzamento de marcações-radar (II).",
      B: "Coloca em primeiro os métodos que dependem de marcação-radar (I e II), que é a informação menos precisa do radar, e em último os dois melhores.",
      C: "Põe o cruzamento de distâncias (IV) à frente da marcação visual com distância-radar (III) e, no fim, inverte I) e II): o cruzamento só de marcações-radar (II) é o pior método.",
      D: "Acerta os dois primeiros (III e IV), mas inverte os dois últimos: distância e marcação-radar (I) é mais preciso que o cruzamento de marcações-radar (II).",
      E: "Coloca o cruzamento de marcações-radar (II) em segundo e a marcação visual com distância-radar (III) por último — o oposto do correto.",
    },
  },
  {
    id: "dpc2011-48",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    enunciado: "Um graneleiro de 200m de comprimento se aproxima de um porto, para atracação à noite e no visual, exibindo as luzes previstas no COLREG. O Comandante recebe a informação da Praticagem local que o embarque do Prático vai atrasar, assim como a solicitação no sentido de que o graneleiro aguarde o embarque do Prático nas proximidades do ponto de espera de prático. O Comandante decide então ficar pairando sob máquinas nas proximidades do ponto sugerido. De acordo com as regras do COLREG, sabendo-se, ademais, que é grande o movimento de embarcações nas proximidades do ponto de espera de prático, o Comandante, enquanto aguarda o Prático, determina:",
    alternativas: {
      A: "Acender três luzes circulares dispostas em linha vertical, a superior e a inferior encarnadas e a do meio branca.",
      B: "Acender duas luzes circulares encarnadas dispostas em linha vertical e apagar as luzes que vinham sendo usadas.",
      C: "Acender três luzes circulares dispostas em linha vertical, a superior e a inferior encarnadas e a do meio branca, e apagar as luzes que vinham sendo usadas.",
      D: "Acender duas luzes circulares encarnadas dispostas em linha vertical e apagar as luzes de mastro.",
      E: "Manter acesas apenas as luzes que vinham sendo usadas.",
    },
    correta: "E",
    explicacoes: {
      A: "Encarnada–branca–encarnada é o sinal de embarcação com capacidade de manobra restrita (Regra 27(b)), condição que decorre da NATUREZA DO SERVIÇO. Pairar aguardando prático não restringe a capacidade de manobra.",
      B: "Duas luzes encarnadas são de embarcação SEM GOVERNO (Regra 27(a)), que exige circunstância excepcional que impeça manobrar. O navio está com máquinas e leme prontos; usar esse sinal seria indevido.",
      C: "Mesmo erro da alternativa A (o navio não é de manobra restrita), agravado por apagar as luzes de navegação.",
      D: "É a configuração de embarcação sem governo com seguimento (sem luzes de mastro), que não se aplica: o navio está pairando sob máquinas, plenamente capaz de manobrar.",
      E: "Correta: pairando sob máquinas o navio continua sendo uma embarcação de propulsão mecânica EM MOVIMENTO (não está fundeada, amarrada nem encalhada) e deve continuar exibindo luzes de mastro, de bordos e de alcançado (Regra 23), cumprindo normalmente as regras de governo.",
    },
  },
  {
    id: "dpc2011-49",
    prova: "DPC 2011",
    tema: "Rebocadores",
    revisar: true,
    enunciado: `De acordo com o contido no livro “Tug use in Port, a Practical Guide” (Captain Henk Hensen - 2ª edição: 2003), foi elaborado o quadro abaixo contendo uma relação de rebocadores cujas características são descritas nas observações, sem rigor técnico:

Nome — Compr. — Boca — Calado — BHP — Tração — Observações
a) “Ajax” — 26,0 m — 8,5m — 4,1m — 3180 — 43t — Guincho de reboque e um patilhão (falsa quilha) a vante. Possui dois motores a ré dentro de tubos que giram 360° na horizontal.
b) “Thor” — 30,7 m — 10,6m — 4,4m — 2960 — 40t — Dois motores a ré dentro de tubos que giram 360° na horizontal. Possui um gato de reboque quase a meio navio e um guincho na proa.
c) “Intrépido” — 29,0 m — 9,3m — 4,0m — 3000 — 45t — Os eixos saem de dois tubos telescópicos a ré. Os hélices estão dentro de tubulões que não giram, possuindo um leme a ré de cada tubulão.
d) “Arrojado” — 38,0 m — 11,0m — 4,8m — 4600 — 70t AV 50t AR — Os eixos saem de dois tubos telescópicos a ré. Os hélices estão dentro de tubos fixos, com três lemes a ré e dois a vante de cada tubo.
e) “Zeus” — 26,7m — 8,8m — 4,6m — 2140 — 29t — Dois motores a vante dentro de tubos que giram 360°. Possui um patilhão (falsa quilha) a ré e um gato de reboque na popa.
f) “Perseu” — 29,7m — 9.9m — 4,0m — 3130 — 36t — Não possui hélices. Tem dois conjuntos com lâminas verticais giratórias lado a lado a vante. Possui gato de reboque e patilhão (falsa quilha) a ré.
g) “Júpiter” — 30,0m — 8,0m — 4,0m — 3000 — 30t — Possui na popa um eixo com hélice de passo fixo, mais comum nesses rebocadores.
h) “Apolo” — 36,2m — 12,2m — 5,2m — 4950 — 57t — Dois conjuntos com lâminas verticais giratórias lado a lado a ré. Possui guincho de reboque e patilhão (falsa quilha) a vante.
i) “Hermes” — 27,4m — 15,2m — 4,9m — 4000 — 50t — Tem um patilhão (falsa quilha) a vante e outro a ré. Dois eixos dentro de tubos que giram 360°, um a vante a BE e outro a ré a BB.
j) “Mercúrio” — 28,5m — 6,6m — 4,0m — 2000 — 21t — Dois hélices dentro de tubulões que se movem parcialmente, fazendo o papel de lemes. O gato de reboque desliza em um arco que circunda a superestrutura, podendo girar 360°.
k) “Poseidon” — 22,7m — 10,7m — 4,6m — 5000 — 67t — Dois eixos dentro de tubulões que giram 360°. Tem patilhão (falsa quilha) a vante. Pequeno e de grande potência.
l) “Dionísio” — 28,5 — 6,6m — 4,0m — 5200 — 80t — Dois hélices de passo controlado a ré dentro de tubulões que giram parcialmente e, a vante, um hélice dentro de um tubulão que gira 360°.
m) “Édipo” — 20m — 5,0m — 3,6m — 1500 — 15t AV 9t AR — Dois eixos saindo de dois tubos telescópicos a ré. Dois hélices abertos de passo fixo.
n) “Ulisses” — 31,6m — 12,0m — 5,9m — 6300 — 80t — Três motores dentro de tubos que giram 360°, sendo dois a vante e um a ré.

Analisando o quadro acima e com base no livro supramencionado, priorize os rebocadores para uma manobra de rebocar com cabo passado na proa do rebocado. Desconsidere o “bollard pull” e leve em conta somente os rebocadores.`,
    alternativas: {
      A: "1a opção- Ajax; 2ª opção- Perseu; 3ª opção- Dionísio; e 4ª opção- Édipo / Thor.",
      B: "1ª opção- Thor; 2ª opção- Dionísio; 3ª opção-Arrojado; e 4ª opção- Perseu / Ajax.",
      C: "1ª opção- Intrépido; 2ª opção- Zeus; 3ª opção- Ulisses; e 4ª opção- Poseidon / Édipo.",
      D: "1ª opção- Ulisses; 2ª opção-Mercúrio; 3ª opção- Dionísio; e 4ª opção-Perseu / Júpiter.",
      E: "1ª opção- Apolo; 2ª opção-Thor; 3ª opção-Arrojado; e 4ª opção- Perseu / Hermes.",
    },
    correta: "B",
    comentario: `Identificação dos tipos (pela descrição “sem rigor técnico”):
Ajax, Poseidon → tratores reversos (azimutais a ré, guincho e skeg a vante). Apolo → trator reverso com propulsão Voith a ré.
Thor → ASD (azimutais a ré, com gato quase a meio navio E guincho na proa): pode trabalhar como convencional ou como trator reverso.
Intrépido, Édipo → convencionais de dois eixos. Arrojado → convencional de dois eixos com tubulões fixos e lemes de flanco (alta manobrabilidade e boa tração a ré). Júpiter → convencional de um eixo. Mercúrio → convencional com tubulões-leme e gato radial.
Dionísio → “combi-tug” (convencional com propulsor azimutal a vante).
Zeus → trator azimutal; Perseu → trator Voith Schneider. Hermes → propulsores azimutais em diagonal (tipo SDM). Ulisses → “rotor tug” (três azimutais).

Pelo gabarito oficial, a prioridade para rebocar com cabo passado na PROA do navio, segundo os critérios do Hensen, é: 1º Thor (ASD, o mais versátil — trabalha com o cabo no gato a meio navio como um convencional, mas com manobrabilidade omnidirecional); 2º Dionísio (combi-tug); 3º Arrojado (convencional de alta manobrabilidade); 4º Perseu / Ajax (trator e trator reverso). A justificativa detalhada dessa ordenação deve ser conferida no livro.`,
    explicacoes: {
      A: "Pelo gabarito oficial, incorreta: coloca o trator reverso (Ajax) e o trator Voith (Perseu) como primeiras opções e deixa o ASD (Thor) por último, junto com o pequeno convencional Édipo — o inverso da ordenação do gabarito.",
      B: "Correta (gabarito oficial): 1º Thor (ASD com gato a meio navio e guincho na proa), 2º Dionísio (combi-tug), 3º Arrojado (convencional com tubulões e lemes de flanco), 4º Perseu / Ajax (trator Voith e trator reverso).",
      C: "Pelo gabarito oficial, incorreta: põe em primeiro um convencional comum (Intrépido) e inclui Zeus, Ulisses, Poseidon e Édipo, que não figuram na ordenação correta.",
      D: "Pelo gabarito oficial, incorreta: o rotor tug (Ulisses) e o Mercúrio não são a 1ª e 2ª opções; e o Júpiter (convencional de um eixo) é o menos manobrável do quadro.",
      E: "Pelo gabarito oficial, incorreta: o Apolo (trator reverso Voith) não é a 1ª opção e o Hermes não integra a ordenação correta; Thor deveria vir em 1º, não em 2º.",
    },
  },
  {
    id: "dpc2011-50",
    prova: "DPC 2011",
    tema: "COLREG / RIPEAM",
    enunciado: "Assinale a opção correta. De acordo com as regras do COLREG, considerando estarmos nas AJB no período diurno e que as marcas estão dispostas onde melhor possam ser vistas, assinale a opção correta:",
    alternativas: {
      A: "Quando fundeada e não engajada em serviço de praticagem, a lancha de prático está dispensada do uso de marca.",
      B: "Com visibilidade restrita, as embarcações estão dispensadas do uso de marcas, devendo usar as luzes prescritas.",
      C: "Uma unidade integrada (“composite unit”) em movimento deve exibir uma marca em forma de dois cones com a base unida.",
      D: "Uma embarcação navegando à vela, quando também usando propulsão mecânica, deve exibir a vante uma marca em forma de cone, com vértice para baixo.",
      E: "Uma embarcação de pesca engajada na pesca com rede de cerco, pescando muito próxima de outras embarcações também engajadas na pesca, deve exibir um cone com vértice para baixo, na direção do aparelho de pesca.",
    },
    correta: "D",
    explicacoes: {
      A: "Quando não engajada em serviço de praticagem, a lancha de prático exibe as luzes e marcas de uma embarcação similar do seu comprimento (Regra 29(b)); fundeada, deve exibir a esfera preta de fundeio (Regra 30).",
      B: "As marcas são obrigatórias durante todo o período diurno (Regra 20(d)). Em visibilidade restrita exibem-se TAMBÉM as luzes, mas as marcas não são dispensadas.",
      C: "A unidade integrada (empurrador + empurrado rigidamente ligados) é considerada uma única embarcação de propulsão mecânica (Regra 24(b)); não exibe marca especial. Os dois cones unidos pela base (losango) são do reboque com mais de 200 m.",
      D: "Correta — Regra 25(e): a embarcação navegando a vela que também use propulsão mecânica deve exibir a vante, onde melhor possa ser vista, uma marca cônica com o vértice para baixo.",
      E: "Os sinais adicionais do Anexo II para cerco em proximidade de outras embarcações de pesca são LUZES (duas amarelas alternadas). A marca cônica relativa a aparelho de pesca (Regra 26(c)) tem o vértice para CIMA e aplica-se a aparelho que se estenda por mais de 150 m.",
    },
  },
);

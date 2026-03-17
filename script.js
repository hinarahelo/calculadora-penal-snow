function normalizarTexto(texto) {
  return texto
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatarMoeda(valor) {
  return Number(valor).toLocaleString("pt-BR");
}

function formatarFianca(valor) {
  if (valor === null) return "INAFIANÇÁVEL";
  if (valor === 0) return "R$ 0";
  return `R$ ${formatarMoeda(valor)}`;
}

function formatarNumeroArtigo(numero) {
  return String(numero).padStart(2, "0");
}

const artigos = [
  {
    numero: 1,
    categoria: "Trânsito",
    nome: "Alta Velocidade",
    descricao: "Conduzir veículo acima do limite de velocidade permitido para a via, colocando em risco a segurança do trânsito.",
    pena: 0,
    multa: 5000,
    fianca: 0
  },
  {
    numero: 2,
    categoria: "Trânsito",
    nome: "Abandono de Veículo",
    descricao: "Deixar veículo estacionado ou abandonado em via pública sem justificativa plausível, causando obstrução ou transtorno.",
    pena: 0,
    multa: 2000,
    fianca: 0
  },
  {
    numero: 3,
    categoria: "Trânsito",
    nome: "Abandono de Veículo Militar",
    descricao: "Abandonar veículo pertencente às forças públicas ou instituições oficiais, sem autorização ou justificativa legal.",
    pena: 0,
    multa: 10000,
    fianca: 0
  },
  {
    numero: 4,
    categoria: "Trânsito",
    nome: "Estacionar em Local Proibido",
    descricao: "Estacionar veículo em local proibido ou em área que prejudique o fluxo de veículos ou pedestres.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 5,
    categoria: "Trânsito",
    nome: "Utilização Indevida de Veículo Público",
    descricao: "Utilizar veículo pertencente ao poder público sem autorização ou fora de finalidade institucional.",
    pena: 0,
    multa: 15000,
    fianca: 0
  },
  {
    numero: 6,
    categoria: "Trânsito",
    nome: "Condução Imprudente",
    descricao: "Conduzir veículo de forma imprudente, irresponsável ou perigosa, expondo terceiros a risco.",
    pena: 0,
    multa: 3500,
    fianca: 0
  },
  {
    numero: 7,
    categoria: "Trânsito",
    nome: "Bloqueio de Via Pública",
    descricao: "Parar, deixar ou posicionar veículo de modo a bloquear total ou substancialmente uma via pública.",
    pena: 0,
    multa: 4000,
    fianca: 0
  },
  {
    numero: 8,
    categoria: "Ordem Pública",
    nome: "Ocultação Facial",
    descricao: "Utilizar máscara, acessório ou qualquer item destinado a ocultar a identidade durante atividade ilegal.",
    pena: 0,
    multa: 3000,
    fianca: 0
  },
  {
    numero: 9,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Culposo",
    descricao: "Atropelar pessoa com veículo automotor sem intenção de causar lesão grave ou morte.",
    pena: 10,
    multa: 1000,
    fianca: 3000
  },
  {
    numero: 10,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Doloso",
    descricao: "Atropelar pessoa com intenção de causar dano grave ou morte, utilizando veículo automotor como meio da ação.",
    pena: 15,
    multa: 1500,
    fianca: 5000
  },
  {
    numero: 11,
    categoria: "Crimes contra a Vida",
    nome: "Atropelamento Coletivo",
    descricao: "Atropelar quatro ou mais pessoas em um mesmo evento, ainda que sem intenção direta individualizada.",
    pena: 25,
    multa: 5000,
    fianca: null
  },
  {
    numero: 12,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio Culposo",
    descricao: "Causar a morte de alguém sem intenção de matar, por imprudência, negligência ou imperícia.",
    pena: 20,
    multa: 5000,
    fianca: null
  },
  {
    numero: 13,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio Doloso",
    descricao: "Causar a morte de alguém com intenção de matar ou assumindo conscientemente esse resultado.",
    pena: 30,
    multa: 10000,
    fianca: null
  },
  {
    numero: 14,
    categoria: "Crimes contra a Vida",
    nome: "Homicídio de Servidor Público",
    descricao: "Causar a morte de servidor público em exercício da função, como policiais, médicos ou outras autoridades.",
    pena: 35,
    multa: 15000,
    fianca: null
  },
  {
    numero: 15,
    categoria: "Crimes contra a Vida",
    nome: "Genocídio",
    descricao: "Promover o extermínio deliberado de quatro ou mais pessoas em um mesmo contexto criminoso.",
    pena: 50,
    multa: 7000,
    fianca: null
  },
  {
    numero: 16,
    categoria: "Crimes contra a Vida",
    nome: "Latrocínio",
    descricao: "Praticar roubo ou assalto que resulte na morte da vítima, ainda que a morte ocorra durante a execução do crime.",
    pena: 35,
    multa: 8000,
    fianca: null
  },
  {
    numero: 17,
    categoria: "Crimes contra a Vida",
    nome: "Lesão Corporal",
    descricao: "Agredir alguém, causando dano físico, ferimento ou prejuízo à saúde da vítima.",
    pena: 15,
    multa: 4000,
    fianca: 3750
  },
  {
    numero: 18,
    categoria: "Crimes contra a Vida",
    nome: "Terrorismo",
    descricao: "Praticar atos violentos com a finalidade de intimidar a população ou provocar terror coletivo.",
    pena: 55,
    multa: 20000,
    fianca: null
  },
  {
    numero: 19,
    categoria: "Crimes contra a Liberdade",
    nome: "Sequestro",
    descricao: "Privar alguém de sua liberdade, mantendo a vítima em cativeiro ou sob retenção contra sua vontade.",
    pena: 30,
    multa: 5000,
    fianca: null
  },
  {
    numero: 20,
    categoria: "Crimes contra a Vida",
    nome: "Omissão de Socorro",
    descricao: "Deixar de prestar assistência a pessoa em perigo, quando possível fazê-lo sem risco pessoal relevante.",
    pena: 25,
    multa: 8000,
    fianca: null
  },
  {
    numero: 21,
    categoria: "Crimes contra a Vida",
    nome: "Maus-Tratos",
    descricao: "Submeter pessoa sob cuidado, guarda ou responsabilidade a situação que coloque em risco sua vida ou saúde.",
    pena: 35,
    multa: 2300,
    fianca: 8000
  },
  {
    numero: 22,
    categoria: "Crimes contra a Liberdade",
    nome: "Abandono de Incapaz",
    descricao: "Abandonar pessoa incapaz sob responsabilidade legal, expondo-a a risco ou desamparo.",
    pena: 45,
    multa: 8000,
    fianca: null
  },
  {
    numero: 23,
    categoria: "Crimes contra a Liberdade",
    nome: "Ameaça",
    descricao: "Ameaçar alguém de sofrer mal grave, injusto ou iminente, por palavras, gestos ou qualquer outro meio.",
    pena: 25,
    multa: 1000,
    fianca: 3750
  },
  {
    numero: 24,
    categoria: "Crimes contra a Liberdade",
    nome: "Atentado ao Pudor",
    descricao: "Constranger alguém, mediante violência ou ameaça, à prática de ato de natureza sexual.",
    pena: 30,
    multa: 3000,
    fianca: null
  },
  {
    numero: 25,
    categoria: "Crimes contra a Liberdade",
    nome: "Stalking",
    descricao: "Perseguir alguém de forma reiterada, ameaçando sua integridade física, psicológica ou privacidade.",
    pena: 100,
    multa: 25000,
    fianca: null
  },
  {
    numero: 26,
    categoria: "Honra",
    nome: "Difamação",
    descricao: "Atribuir fato ofensivo que prejudique a reputação ou o bom nome de outra pessoa.",
    pena: 20,
    multa: 2500,
    fianca: 3000
  },
  {
    numero: 27,
    categoria: "Honra",
    nome: "Injúria",
    descricao: "Ofender a dignidade, a honra subjetiva ou o decoro de outra pessoa.",
    pena: 20,
    multa: 2500,
    fianca: 3700
  },
  {
    numero: 28,
    categoria: "Honra",
    nome: "Calúnia",
    descricao: "Acusar falsamente alguém da prática de crime ou fato criminoso que sabe não ter ocorrido.",
    pena: 20,
    multa: 3500,
    fianca: 4500
  },
  {
    numero: 29,
    categoria: "Honra",
    nome: "Uso Indevido de Imagem",
    descricao: "Utilizar imagem de terceiros sem autorização, salvo quando houver previsão legal ou finalidade investigativa legítima.",
    pena: 35,
    multa: 3500,
    fianca: 3800
  },
  {
    numero: 30,
    categoria: "Drogas",
    nome: "Posse de Drogas",
    descricao: "Portar quantidade inferior a 10 unidades de drogas ilícitas.",
    pena: 10,
    multa: 1500,
    fianca: 2000
  },
  {
    numero: 31,
    categoria: "Drogas",
    nome: "Tráfico de Drogas",
    descricao: "Comercializar, transportar, distribuir ou portar 10 ou mais unidades de drogas ilícitas.",
    pena: 15,
    multa: 2500,
    fianca: 3000
  },
  {
    numero: 32,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Baixo Calibre)",
    descricao: "Portar arma leve sem autorização legal, registro válido ou justificativa permitida.",
    pena: 10,
    multa: 2000,
    fianca: 3000
  },
  {
    numero: 33,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Médio Calibre)",
    descricao: "Portar submetralhadora ou arma de médio calibre sem autorização legal.",
    pena: 15,
    multa: 6000,
    fianca: 6500
  },
  {
    numero: 34,
    categoria: "Armas",
    nome: "Porte Ilegal de Arma (Alto Calibre)",
    descricao: "Portar armamento de alto calibre ou de uso militar sem autorização legal.",
    pena: 20,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 35,
    categoria: "Armas",
    nome: "Tráfico de Armas Leves",
    descricao: "Comercializar, transportar ou negociar duas ou mais armas leves de forma ilegal.",
    pena: 20,
    multa: 5000,
    fianca: 5500
  },
  {
    numero: 36,
    categoria: "Armas",
    nome: "Tráfico de Armas Médias",
    descricao: "Comercializar, transportar ou negociar duas ou mais armas de médio calibre de forma ilegal.",
    pena: 30,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 37,
    categoria: "Armas",
    nome: "Tráfico de Armas de Alto Calibre",
    descricao: "Comercializar, transportar ou negociar duas ou mais armas de alto calibre de forma ilegal.",
    pena: 40,
    multa: 9500,
    fianca: 9800
  },
  {
    numero: 38,
    categoria: "Munições",
    nome: "Tráfico de Munição Leve",
    descricao: "Comercializar ou transportar até 70 munições leves de forma ilegal.",
    pena: 15,
    multa: 3000,
    fianca: 3500
  },
  {
    numero: 39,
    categoria: "Munições",
    nome: "Tráfico de Munição Média",
    descricao: "Comercializar ou transportar até 150 munições médias de forma ilegal.",
    pena: 20,
    multa: 5500,
    fianca: 5800
  },
  {
    numero: 40,
    categoria: "Munições",
    nome: "Tráfico de Munição de Alto Calibre",
    descricao: "Comercializar ou transportar até 200 munições de alto calibre de forma ilegal.",
    pena: 25,
    multa: 7500,
    fianca: 7800
  },
  {
    numero: 41,
    categoria: "Materiais Ilícitos",
    nome: "Tráfico de Materiais Ilegais",
    descricao: "Comercializar lockpick, C4 ou outros materiais ilegais, bem como portar acima de 10 itens ilícitos no momento da apreensão.",
    pena: 10,
    multa: 4000,
    fianca: 4800
  },
  {
    numero: 42,
    categoria: "Materiais Ilícitos",
    nome: "Posse de Material para Fabricação",
    descricao: "Possuir matéria-prima ou insumos destinados à fabricação de drogas, armas, munições ou explosivos.",
    pena: 10,
    multa: 1500,
    fianca: 2000
  },
  {
    numero: 43,
    categoria: "Ordem Pública",
    nome: "Fuga de Abordagem",
    descricao: "Desobedecer ordem de parada ou fugir deliberadamente de abordagem policial.",
    pena: 15,
    multa: 1500,
    fianca: 2500
  },
  {
    numero: 44,
    categoria: "Armas",
    nome: "Uso Indevido de Porte de Arma",
    descricao: "Utilizar arma legalizada de forma irresponsável, abusiva ou em desacordo com a finalidade autorizada.",
    pena: 30,
    multa: 1500,
    fianca: 3750
  },
  {
    numero: 45,
    categoria: "Patrimônio Ilícito",
    nome: "Dinheiro Sujo",
    descricao: "Portar dinheiro marcado ou proveniente, de forma comprovada, de atividade ilícita.",
    pena: 10,
    multa: 1500,
    fianca: 2700
  },
  {
    numero: 46,
    categoria: "Administração Pública",
    nome: "Uso Indevido de Traje Público",
    descricao: "Utilizar uniforme, vestimenta ou traje de servidor público sem exercer legalmente a função.",
    pena: 20,
    multa: 1500,
    fianca: 2000
  },
  {
    numero: 47,
    categoria: "Administração Pública",
    nome: "Falsidade Ideológica",
    descricao: "Passar-se por outra pessoa ou por autoridade oficial com a finalidade de enganar ou obter vantagem indevida.",
    pena: 25,
    multa: 2250,
    fianca: 3125
  },
  {
    numero: 48,
    categoria: "Administração Pública",
    nome: "Desacato",
    descricao: "Desrespeitar, ofender ou humilhar funcionário público no exercício regular de sua função.",
    pena: 10,
    multa: 1875,
    fianca: 7000
  },
  {
    numero: 49,
    categoria: "Administração Pública",
    nome: "Desobediência à Ordem Legal",
    descricao: "Descumprir ordem judicial, mandado ou determinação legal emitida por autoridade competente.",
    pena: 20,
    multa: 4500,
    fianca: null
  },
  {
    numero: 50,
    categoria: "Administração Pública",
    nome: "Abandono de Função",
    descricao: "Servidor público abandonar seu cargo, posto ou dever funcional sem justificativa legal.",
    pena: 10,
    multa: 5000,
    fianca: null
  },
  {
    numero: 51,
    categoria: "Administração Pública",
    nome: "Tentativa de Suborno",
    descricao: "Oferecer, prometer ou tentar entregar vantagem indevida a servidor público.",
    pena: 25,
    multa: 4000,
    fianca: 4500
  },
  {
    numero: 52,
    categoria: "Administração Pública",
    nome: "Abuso de Autoridade",
    descricao: "Servidor público exceder seus poderes ou utilizar o cargo de forma ilegal ou abusiva.",
    pena: 50,
    multa: 2500,
    fianca: 4500
  },
  {
    numero: 53,
    categoria: "Administração Pública",
    nome: "Fraude de Informações",
    descricao: "Induzir agente público ao erro por meio de informações falsas, omissões ou fraude documental.",
    pena: 25,
    multa: 3500,
    fianca: 3800
  },
  {
    numero: 54,
    categoria: "Administração Pública",
    nome: "Corrupção Passiva",
    descricao: "Solicitar, receber ou aceitar promessa de vantagem indevida em razão do cargo público.",
    pena: 50,
    multa: 5500,
    fianca: 5800
  },
  {
    numero: 55,
    categoria: "Concurso de Pessoas",
    nome: "Cúmplice",
    descricao: "Auxiliar, facilitar ou colaborar conscientemente na prática de crime cometido por outra pessoa.",
    pena: 20,
    multa: 2000,
    fianca: 4300
  },
  {
    numero: 56,
    categoria: "Patrimônio",
    nome: "Roubo à Registradora",
    descricao: "Subtrair valores de caixas registradoras de estabelecimentos comerciais mediante ação criminosa.",
    pena: 25,
    multa: 2000,
    fianca: 2500
  },
  {
    numero: 57,
    categoria: "Patrimônio",
    nome: "Roubo a Caixa Eletrônico (ATM)",
    descricao: "Roubar, violar ou subtrair valores de caixa eletrônico ou terminal bancário.",
    pena: 25,
    multa: 2000,
    fianca: 2800
  },
  {
    numero: 58,
    categoria: "Trânsito",
    nome: "Corrida Ilegal",
    descricao: "Participar de racha, disputa de velocidade ou corrida clandestina em via pública.",
    pena: 25,
    multa: 3250,
    fianca: 4000
  },
  {
    numero: 59,
    categoria: "Patrimônio",
    nome: "Roubo à Residência",
    descricao: "Invadir residência para subtrair bens mediante ameaça, intimidação ou violência.",
    pena: 25,
    multa: 3000,
    fianca: 4750
  },
  {
    numero: 60,
    categoria: "Administração Pública",
    nome: "Invasão ao Departamento Policial",
    descricao: "Entrar ou permanecer em dependências policiais sem autorização legal ou funcional.",
    pena: 35,
    multa: 25000,
    fianca: null
  },
  {
    numero: 61,
    categoria: "Patrimônio",
    nome: "Roubo de Veículo",
    descricao: "Ameaçar ou forçar alguém a entregar seu veículo mediante violência ou grave ameaça.",
    pena: 15,
    multa: 3000,
    fianca: 3750
  },
  {
    numero: 62,
    categoria: "Patrimônio",
    nome: "Furto de Veículo",
    descricao: "Subtrair veículo sem uso de violência ou grave ameaça contra a vítima.",
    pena: 15,
    multa: 3000,
    fianca: 3000
  },
  {
    numero: 63,
    categoria: "Patrimônio",
    nome: "Roubo",
    descricao: "Subtrair bem alheio mediante violência, intimidação ou grave ameaça.",
    pena: 15,
    multa: 3000,
    fianca: 4500
  },
  {
    numero: 64,
    categoria: "Patrimônio",
    nome: "Furto",
    descricao: "Subtrair bem alheio sem violência ou grave ameaça à vítima.",
    pena: 20,
    multa: 2000,
    fianca: 3500
  },
  {
    numero: 65,
    categoria: "Patrimônio",
    nome: "Tentativa de Furto",
    descricao: "Tentar subtrair bem alheio sem consumar o crime por circunstâncias alheias à vontade do agente.",
    pena: 10,
    multa: 1500,
    fianca: 2500
  },
  {
    numero: 66,
    categoria: "Patrimônio",
    nome: "Vandalismo",
    descricao: "Destruir, danificar ou deteriorar patrimônio público ou privado de forma intencional.",
    pena: 30,
    multa: 2000,
    fianca: 2500
  },
  {
    numero: 67,
    categoria: "Patrimônio",
    nome: "Extorsão",
    descricao: "Obter vantagem indevida mediante ameaça, coação ou violência contra a vítima.",
    pena: 30,
    multa: 3000,
    fianca: 4500
  },
  {
    numero: 68,
    categoria: "Propriedade",
    nome: "Invasão de Propriedade",
    descricao: "Entrar ou permanecer em propriedade privada sem autorização do legítimo proprietário ou responsável.",
    pena: 25,
    multa: 1500,
    fianca: 2750
  },
  {
    numero: 69,
    categoria: "Ordem Urbana",
    nome: "Poluição Sonora",
    descricao: "Perturbar o sossego público ou alheio mediante ruídos excessivos, som alto ou emissão sonora abusiva.",
    pena: 5,
    multa: 5000,
    fianca: 2300
  },
  {
    numero: 70,
    categoria: "Disposições Gerais",
    nome: "Pagamento de Fiança",
    descricao: "Artigo destinado ao encaminhamento e registro do preso quando houver pagamento de fiança, para constar a passagem em sua ficha.",
    pena: 1,
    multa: 0,
    fianca: 0
  },
  {
    numero: 71,
    categoria: "Excludentes",
    nome: "Legítima Defesa",
    descricao: "Reagir de forma proporcional para repelir agressão injusta, atual ou iminente, contra si ou contra terceiros.",
    pena: 0,
    multa: 0,
    fianca: 0,
    observacao: "Isento de pena, multa e fiança."
  }
];

const artigosSelecionados = new Set();

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const showAllButton = document.getElementById("showAllButton");
const clearSearchButton = document.getElementById("clearSearchButton");
const artigosContainer = document.getElementById("artigosContainer");
const resultado = document.getElementById("resultado");
const selecionadosResumo = document.getElementById("selecionadosResumo");
const agravanteServidor = document.getElementById("agravanteServidor");

const reducaoBomComportamento = document.getElementById("reducaoBomComportamento");
const reducaoReuPrimario = document.getElementById("reducaoReuPrimario");
const reducaoCumplice = document.getElementById("reducaoCumplice");
const cumplicePercent = document.getElementById("cumplicePercent");

function renderEstadoInicialResultado() {
  resultado.innerHTML = `
    <div class="document-empty">
      O resultado do cálculo será exibido aqui em formato de documento judicial.
    </div>
  `;
}

function renderArtigos(lista) {
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "grid";

  if (!lista.length) {
    artigosContainer.innerHTML = `
      <div class="article-card">
        <div class="article-title">Nenhum artigo encontrado.</div>
        <p class="article-description">Pesquise pelo número, nome ou termo relacionado ao artigo.</p>
      </div>
    `;
    return;
  }

  lista.forEach((artigo) => {
    const marcado = artigosSelecionados.has(artigo.numero);

    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
      <div class="article-top">
        <div class="article-title">Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}</div>
        ${artigo.categoria ? `<div class="article-badge">${artigo.categoria}</div>` : ""}
      </div>

      <p class="article-description">${artigo.descricao}</p>

      <div class="article-meta">
        <span><strong>Pena:</strong> ${artigo.pena === 0 ? "0 meses" : `${artigo.pena} meses`}</span>
        <span><strong>Multa:</strong> R$ ${formatarMoeda(artigo.multa)}</span>
        <span><strong>Fiança:</strong> ${formatarFianca(artigo.fianca)}</span>
      </div>

      ${artigo.observacao ? `<div class="article-note">${artigo.observacao}</div>` : ""}

      <label class="article-check">
        <input type="checkbox" class="artigo-checkbox" data-numero="${artigo.numero}" ${marcado ? "checked" : ""}>
        Selecionar artigo
      </label>
    `;

    artigosContainer.appendChild(card);
  });

  document.querySelectorAll(".artigo-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const numero = Number(event.target.dataset.numero);

      if (event.target.checked) {
        artigosSelecionados.add(numero);
      } else {
        artigosSelecionados.delete(numero);
      }

      atualizarResumoSelecionados();
    });
  });
}

function pesquisarArtigos() {
  const termo = normalizarTexto(searchInput.value);

  if (!termo) {
    renderArtigos(artigos);
    return;
  }

  const filtrados = artigos.filter((artigo) =>
    artigo.numero.toString() === termo ||
    formatarNumeroArtigo(artigo.numero) === termo ||
    normalizarTexto(artigo.nome).includes(termo) ||
    normalizarTexto(artigo.categoria || "").includes(termo) ||
    normalizarTexto(artigo.descricao).includes(termo)
  );

  renderArtigos(filtrados);
}

function atualizarResumoSelecionados() {
  if (!artigosSelecionados.size) {
    selecionadosResumo.textContent = "Nenhum artigo selecionado.";
    return;
  }

  const lista = artigos
    .filter((artigo) => artigosSelecionados.has(artigo.numero))
    .sort((a, b) => a.numero - b.numero)
    .map((artigo) => `Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}`);

  selecionadosResumo.innerHTML = lista.join("<br>");
}

function obterReducaoPena() {
  let percentual = 0;

  if (reducaoReuPrimario && reducaoReuPrimario.checked) {
    percentual += 0.20;
  }

  if (reducaoBomComportamento && reducaoBomComportamento.checked) {
    percentual += 0.05;
  }

  if (reducaoCumplice && reducaoCumplice.checked) {
    const valor = Number(cumplicePercent.value);

    if (!Number.isNaN(valor) && valor > 0) {
      percentual += valor / 100;
    }
  }

  if (percentual > 0.5) percentual = 0.5;

  return percentual;
}

function calcularAgravantes() {
  let acrescimo = 0;

  if (!agravanteServidor || !agravanteServidor.checked) return acrescimo;

  artigos.forEach((artigo) => {
    if (artigosSelecionados.has(artigo.numero) && artigo.agravanteServidor) {
      acrescimo += artigo.pena * artigo.agravanteServidor;
    }
  });

  return Math.round(acrescimo);
}

function calcular() {
  if (!artigosSelecionados.size) {
    resultado.innerHTML = `
      <div class="document-header">
        <span class="doc-power">PODER JUDICIÁRIO</span>
        <h3>Resultado do Cálculo Penal</h3>
        <p>Tribunal de Justiça de Snow</p>
      </div>
      <div class="document-body">
        <div class="document-alert danger">Selecione ao menos um artigo para realizar o cálculo.</div>
      </div>
    `;
    return;
  }

  let penaBase = 0;
  let multaTotal = 0;
  let fiancaTotal = 0;
  let honorarios = 0;
  let possuiInafiançavel = false;

  const listaArtigos = artigos
    .filter((artigo) => artigosSelecionados.has(artigo.numero))
    .sort((a, b) => a.numero - b.numero);

  listaArtigos.forEach((artigo) => {
    penaBase += artigo.pena;
    multaTotal += artigo.multa;

    if (artigo.fianca === null) {
      possuiInafiançavel = true;
    } else {
      fiancaTotal += artigo.fianca;
    }
  });

  document.querySelectorAll(".honorario:checked").forEach((item) => {
    honorarios += Number(item.dataset.valor);
  });

  const acrescimo = calcularAgravantes();
  const penaComAgravante = penaBase + acrescimo;
  const percentualReducao = obterReducaoPena();
  const desconto = Math.round(penaComAgravante * percentualReducao);
  const penaFinal = Math.max(0, penaComAgravante - desconto);
  const totalComHonorarios = (possuiInafiançavel ? 0 : fiancaTotal) + honorarios;

  const listaFormatada = listaArtigos
    .map((artigo) => `Art. ${formatarNumeroArtigo(artigo.numero)} — ${artigo.nome}`)
    .join("<br>");

  resultado.innerHTML = `
    <div class="document-header">
      <span class="doc-power">PODER JUDICIÁRIO</span>
      <h3>Resultado do Cálculo Penal</h3>
      <p>Tribunal de Justiça de Snow — Documento preliminar de apuração</p>
    </div>

    <div class="document-body">
      ${
        possuiInafiançavel
          ? `<div class="document-alert danger">Consta crime inafiançável entre os artigos selecionados.</div>`
          : `<div class="document-alert success">Não há crime inafiançável entre os artigos selecionados.</div>`
      }

      <section class="document-section">
        <h4>Dosimetria preliminar</h4>
        <div class="document-grid">
          <div class="document-card">
            <p><strong>Pena base:</strong> ${penaBase} meses</p>
            <p><strong>Agravantes aplicadas:</strong> ${acrescimo} meses</p>
            <p><strong>Pena antes das reduções:</strong> ${penaComAgravante} meses</p>
            <p><strong>Redução total:</strong> ${Math.round(percentualReducao * 100)}%</p>
            <p><strong>Desconto em meses:</strong> ${desconto} meses</p>
            <p><strong>Pena final:</strong> ${penaFinal} meses</p>
          </div>

          <div class="document-card">
            <p><strong>Multa total:</strong> R$ ${formatarMoeda(multaTotal)}</p>
            <p><strong>Fiança:</strong> ${possuiInafiançavel ? "INAFIANÇÁVEL" : `R$ ${formatarMoeda(fiancaTotal)}`}</p>
            <p><strong>Honorários jurídicos:</strong> R$ ${formatarMoeda(honorarios)}</p>
            <p><strong>Total com honorários:</strong> ${
              possuiInafiançavel
                ? `R$ ${formatarMoeda(honorarios)}`
                : `R$ ${formatarMoeda(totalComHonorarios)}`
            }</p>
          </div>
        </div>
      </section>

      <section class="document-section">
        <h4>Artigos considerados</h4>
        <div class="document-list">
          <p>${listaFormatada}</p>
        </div>
      </section>
    </div>
  `;
}

function limparCalculo() {
  artigosSelecionados.clear();

  document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.checked = false;
  });

  searchInput.value = "";
  if (cumplicePercent) cumplicePercent.value = "";
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";
  atualizarResumoSelecionados();
  renderEstadoInicialResultado();
}

searchButton.addEventListener("click", pesquisarArtigos);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pesquisarArtigos();
  }
});

showAllButton.addEventListener("click", () => {
  renderArtigos(artigos);
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  artigosContainer.innerHTML = "";
  artigosContainer.style.display = "none";
});

if (reducaoCumplice) {
  reducaoCumplice.addEventListener("change", () => {
    if (!reducaoCumplice.checked) {
      cumplicePercent.value = "";
    }
  });
}

atualizarResumoSelecionados();
renderEstadoInicialResultado();

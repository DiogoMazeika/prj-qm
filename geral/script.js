let elementosLista = [
  {},
  { nome: "Hidrogênio", mAtom: 1.00794, img: "./imagens/oi.jpeg" },
  { nome: "Hélio", mAtom: 4.002602, img: "./imagens/oi.jpeg" },
  { nome: "Lítio", mAtom: 6.941, img: "./imagens/oi.jpeg" },
  { nome: "Berílio", mAtom: 9.012182, img: "./imagens/oi.jpeg" },
  { nome: "Boro", mAtom: 10.811, img: "./imagens/oi.jpeg" },
  {
    nome: "Carbono",
    mAtom: 12.0107,
    ondeEncontra: "Diamantes",
    img: "./imagens/diamante.jpeg",
  },
  {
    nome: "Nitrogênio",
    mAtom: 14.0067,
    ondeEncontra: "Proteina",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Oxigênio",
    mAtom: 15.9994,
    ondeEncontra: "Ar",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Flúor", mAtom: 18.9984032, img: "./imagens/oi.jpeg" },
  { nome: "Neônio", mAtom: 20.1797, img: "./imagens/oi.jpeg" },
  {
    nome: "Sódio",
    mAtom: 22.98976928,
    ondeEncontra: "Sal",
    img: "./imagens/sal.jpeg",
  },
  { nome: "Magnésio", mAtom: 24.305, img: "./imagens/oi.jpeg" },
  { nome: "Alumínio", mAtom: 26.982, img: "./imagens/oi.jpeg" },
  { nome: "Silício", mAtom: 28.0855, img: "./imagens/oi.jpeg" },
  { nome: "Fósforo", mAtom: 30.973762, img: "./imagens/oi.jpeg" },
  { nome: "Enxofre", mAtom: 32.065, img: "./imagens/oi.jpeg" },
  { nome: "Cloro", mAtom: 35.453, img: "./imagens/oi.jpeg" },
  { nome: "Argônio", mAtom: 39.948, img: "./imagens/oi.jpeg" },
  { nome: "Potássio", mAtom: 39.0983, img: "./imagens/oi.jpeg" },
  {
    nome: "Cálcio",
    mAtom: 40.078,
    ondeEncontra: "Conchas",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Escândio", mAtom: 44.955912, img: "./imagens/oi.jpeg" },
  { nome: "Titânio", mAtom: 47.867, img: "./imagens/oi.jpeg" },
  { nome: "Vanádio", mAtom: 50.9415, img: "./imagens/oi.jpeg" },
  { nome: "Cromo", mAtom: 51.9961, img: "./imagens/oi.jpeg" },
  { nome: "Manganês", mAtom: 54.938045, img: "./imagens/oi.jpeg" },
  {
    nome: "Ferro",
    mAtom: 55.845,
    ondeEncontra: "Pregos",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Cobalto",
    mAtom: 58.933195,
    ondeEncontra: "Pigmento para cerâmica",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Níquel", mAtom: 58.6934, img: "./imagens/oi.jpeg" },
  {
    nome: "Cobre",
    mAtom: 63.546,
    ondeEncontra: "Fios Elétricos",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Zinco", mAtom: 65.409, img: "./imagens/oi.jpeg" },
  { nome: "Gálio", mAtom: 69.723, img: "./imagens/oi.jpeg" },
  { nome: "Germânio", mAtom: 72.64, img: "./imagens/oi.jpeg" },
  { nome: "Arsénio", mAtom: 74.9216, img: "./imagens/oi.jpeg" },
  { nome: "Selénio", mAtom: 78.96, img: "./imagens/oi.jpeg" },
  { nome: "Bromo", mAtom: 79.904, img: "./imagens/oi.jpeg" },
  { nome: "Criptônio", mAtom: 83.798, img: "./imagens/oi.jpeg" },
  {
    nome: "Rubídio",
    mAtom: 85.4678,
    ondeEncontra: "Combustível espacial",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Estrôncio", mAtom: 87.62, img: "./imagens/oi.jpeg" },
  { nome: "Ítrio", mAtom: 88.90585, img: "./imagens/oi.jpeg" },
  { nome: "Zircônio", mAtom: 91.224, img: "./imagens/oi.jpeg" },
  { nome: "Nióbio", mAtom: "92.906 38 ", img: "./imagens/oi.jpeg" },
  { nome: "Molibdénio", mAtom: 95.94, img: "./imagens/oi.jpeg" },
  { nome: "Tecnécio", mAtom: [98], img: "./imagens/oi.jpeg" },
  { nome: "Rutênio", mAtom: 101.07, img: "./imagens/oi.jpeg" },
  { nome: "Ródio", mAtom: "102.905 50", img: "./imagens/oi.jpeg" },
  { nome: "Paládio", mAtom: 106.42, img: "./imagens/oi.jpeg" },
  { nome: "Prata", mAtom: 107.8682, img: "./imagens/oi.jpeg" },
  { nome: "Cádmio", mAtom: 112.411, img: "./imagens/oi.jpeg" },
  { nome: "Índio", mAtom: 114.818, img: "./imagens/oi.jpeg" },
  { nome: "Estanho", mAtom: 118.71, img: "./imagens/oi.jpeg" },
  { nome: "Antimônio", mAtom: 121.76, img: "./imagens/oi.jpeg" },
  { nome: "Telúrio", mAtom: 128.6, img: "./imagens/oi.jpeg" },
  { nome: "Iodo", mAtom: "126.904 47", img: "./imagens/oi.jpeg" },
  { nome: "Xenônio", mAtom: 131.293, img: "./imagens/oi.jpeg" },
  {
    nome: "Césio",
    mAtom: 132.9054519,
    ondeEncontra: "Relógios atômicos",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Bário",
    mAtom: 137.327,
    ondeEncontra: "Diagnósticos de raios-x",
    img: "./imagens/raioX.jpeg",
  },
  { nome: "Lantânio", mAtom: 138.90547, img: "./imagens/oi.jpeg" },
  {
    nome: "Cério",
    mAtom: 140.116,
    ondeEncontra: "Pedras de isqueiros",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Praseodímio",
    mAtom: 140.90765,
    ondeEncontra: "Óvulos de proteção",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Neodímio",
    mAtom: 144.242,
    ondeEncontra: "Fones de ouvido ",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Promécio",
    mAtom: [145],
    ondeEncontra: "Mostradores luminosos",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Samário",
    mAtom: 150.36,
    ondeEncontra: "Imãs de motores elétricos",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Európio", mAtom: 151.964, img: "./imagens/oi.jpeg" },
  {
    nome: "Gadolínio",
    mAtom: 157.25,
    ondeEncontra: "Diagnósticos MRI",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Térbio",
    mAtom: 158.92535,
    ondeEncontra: "Lâmpadas fluorescentes",
    img: "./imagens/lampadas.jpeg",
  },
  {
    nome: "Disprósio",
    mAtom: 162.5,
    ondeEncontra: "Lasers",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Hólmio",
    mAtom: "164.930 32",
    ondeEncontra: "Cirurgia a lasers",
    img: "./imagens/cirurgia.jpeg",
  },
  {
    nome: "Érbio",
    mAtom: 167.259,
    ondeEncontra: "Filtro fotográfico",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Túlio",
    mAtom: 168.93421,
    ondeEncontra: "Cirurgia a lasers",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Itérbio",
    mAtom: 173.04,
    ondeEncontra: "Lasers Científicos",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Lutércio",
    mAtom: 174.967,
    ondeEncontra: "Lentes Ópticas",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Háfnio", mAtom: 178.49, img: "./imagens/oi.jpeg" },
  { nome: "Tântalo", mAtom: 180.94788, img: "./imagens/oi.jpeg" },
  {
    nome: "Tungstênio",
    mAtom: 183.84,
    ondeEncontra: "canetas esferográficas",
    img: "./imagens/caneta.jpeg",
  },
  {
    nome: "Rênio",
    mAtom: 186.207,
    ondeEncontra: "Motores de foguetes",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Ósmio", mAtom: 190.23, img: "./imagens/oi.jpeg" },
  { nome: "Irídio", mAtom: 192.217, img: "./imagens/oi.jpeg" },
  { nome: "Platina", mAtom: 195.084, img: "./imagens/oi.jpeg" },
  { nome: "Ouro", mAtom: 196.966569, img: "./imagens/oi.jpeg" },
  {
    nome: "Mercúrio",
    mAtom: 200.59,
    ondeEncontra: "Termômetros",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Tálio", mAtom: 204.3833, img: "./imagens/oi.jpeg" },
  { nome: "Chumbo", mAtom: 207.2, img: "./imagens/oi.jpeg" },
  {
    nome: "Bismuto",
    mAtom: 208.9804,
    ondeEncontra: "Esmalte de unhas",
    img: "./imagens/oi.jpeg",
  },
  {
    nome: "Polônio",
    mAtom: [210],
    ondeEncontra: "Escova antiestática",
    img: "./imagens/oi.jpeg",
  },
  { nome: "Ástato", mAtom: [210], img: "./imagens/oi.jpeg" },
  { nome: "Rádon", mAtom: [222], img: "./imagens/oi.jpeg" },
  { nome: "Frâncio", mAtom: [223], img: "./imagens/oi.jpeg" },
  { nome: "Rádio", mAtom: [226], img: "./imagens/oi.jpeg" },
  { nome: "Actínio", mAtom: [227], img: "./imagens/oi.jpeg" },
  { nome: "Tório", mAtom: 232.03806, img: "./imagens/oi.jpeg" },
  { nome: "Protactínio", mAtom: 231.03588, img: "./imagens/oi.jpeg" },
  { nome: "Urânio", mAtom: 238.02891, img: "./imagens/oi.jpeg" },
  { nome: "Netúnio", mAtom: [237], img: "./imagens/oi.jpeg" },
  { nome: "Plutônio", mAtom: [244], img: "./imagens/oi.jpeg" },
  { nome: "Amerício", mAtom: [243], img: "./imagens/oi.jpeg" },
  { nome: "Cúrio", mAtom: [247], img: "./imagens/oi.jpeg" },
  { nome: "Berquélio", mAtom: [247], img: "./imagens/oi.jpeg" },
  { nome: "Califórnio", mAtom: [251], img: "./imagens/oi.jpeg" },
  { nome: "Einsténio", mAtom: [252], img: "./imagens/oi.jpeg" },
  { nome: "Férmio", mAtom: [257], img: "./imagens/oi.jpeg" },
  { nome: "Mendelévio", mAtom: [258], img: "./imagens/oi.jpeg" },
  { nome: "Nobélio", mAtom: [259], img: "./imagens/oi.jpeg" },
  { nome: "Laurêncio", mAtom: [262], img: "./imagens/oi.jpeg" },
  { nome: "Rutherfórdio", mAtom: 261, img: "./imagens/oi.jpeg" },
  { nome: "Dúbnio", mAtom: [262], img: "./imagens/oi.jpeg" },
  { nome: "Seabórgio", mAtom: [266], img: "./imagens/oi.jpeg" },
  { nome: "Bóhrio", mAtom: [264], img: "./imagens/oi.jpeg" },
  { nome: "Hássio", mAtom: [277], img: "./imagens/oi.jpeg" },
  { nome: "Meitnério", mAtom: [268], img: "./imagens/oi.jpeg" },
  { nome: "Darmstácio", mAtom: [271], img: "./imagens/oi.jpeg" },
  { nome: "Roentgénio", mAtom: [272], img: "./imagens/oi.jpeg" },
  { nome: "Copernício", mAtom: [277], img: "./imagens/oi.jpeg" },
  { nome: "Nipônio", mAtom: [284], img: "./imagens/oi.jpeg" },
  { nome: "Fleróvio", mAtom: [289], img: "./imagens/oi.jpeg" },
  { nome: "Moscóvio", mAtom: [288], img: "./imagens/oi.jpeg" },
  { nome: "Livermório", mAtom: [292], img: "./imagens/oi.jpeg" },
  { nome: "Tenesso", mAtom: [288], img: "./imagens/oi.jpeg" },
  { nome: "Oganésson", mAtom: [294], img: "./imagens/oi.jpeg" },
];

$(document).ready(function () {
  eventos();
});

function eventos() {
  $("#start").on("click", () => {
    comecarJogo();
  });

  $(".elemento").on("click", function (e) {
    if (this.getAttribute("nrAtomico") === "-1") {
      abreNidios(this);
      e.stopPropagation();
    } else {
      infoShow(this);
    }
  });

  $(document).on("click", function () {
    if ($(".familiaExtra").length >= 1) {
      $(".familiaExtra").remove();
    }
  });
}

function comecarJogo() {
  $(".elemento").addClass("girar");
  let elementoEscolhido = Math.floor(Math.random() * elementosLista.length + 1);
}

function infoShow(elemento) {
  let nrAtomico = elemento.getAttribute("nrAtomico");
  let familia = elemento.getAttribute("class");
  familia = familia.split(" ")[1];

  let { nome, mAtom, img, ondeEncontra } = elementosLista[nrAtomico];
  mAtom = typeof mAtom === "number" ? mAtom.toFixed(3) : mAtom;
  mAtom = typeof mAtom === "object" ? `[${mAtom}]` : mAtom;
  let lugar = ondeEncontra ?? "Não informado";

  $("#info").removeClass().addClass(familia);

  $("#info-ttl")
    .empty()
    .append(
      $("<span>", {
        text: nome,
        style: "font-size: 25px;",
      })
    );

  $("#elemento-img")
    .empty()
    .append(
      $("<img>", {
        src: img ?? "",
        style: "height: 100%; width: 100%;",
      })
    );

  $("#nmr-atomico").text("Número atômico: " + nrAtomico);
  $("#massa").text("Massa atômica: " + mAtom);
  $("#onde-encontra").text("Onde se encontra: " + lugar);
}

function abreNidios(serie) {
  let tipo = serie.getAttribute("serie");
  let largura = $(serie).width();
  let altura = $(serie).height();

  $(".familiaExtra").remove();

  if (tipo == "lantanideos") {
    $("#main-div").append(
      $("<div>", {
        class: `familiaExtra ${tipo} flex`,
        style: `height: ${altura}px;`,
      })
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 57,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "La" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 58,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Ce" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 59,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Pr" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 60,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Nd" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 61,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Pm" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 62,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Sm" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 63,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Eu" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 64,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Gd" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 65,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Tb" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 66,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Dy" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 67,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Ho" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 68,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Er" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 69,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Tm" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 70,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Yb" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra semimetal flex",
            nrAtomico: 71,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Lu" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
    );
  } else {
    $("#main-div").append(
      $("<div>", {
        class: `familiaExtra ${tipo} flex`,
        style: `height: ${altura}px;`,
      })
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 89,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Ac" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 90,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Th" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 91,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Pa" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 92,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "U" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 93,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Np" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 94,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Pu" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 95,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Am" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 96,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Cm" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 97,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Bk" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 98,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Cf" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 99,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Es" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 100,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Fm" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 101,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Md" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 102,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "No" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
        .append(
          $("<div>", {
            class: "elementoExtra actnideo flex",
            nrAtomico: 103,
            style: `width: ${largura}px;`,
          })
            .append($("<span>", { text: "Lr" }))
            .on("click", function (e) {
              infoShow(this);
              e.stopPropagation();
            })
        )
      // .on("click", function () {
      //   infoShow(this);
      // })
    );
  }
}

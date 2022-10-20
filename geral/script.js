let elementosLista = [
  {},
  { nome: "Hidrogênio" },
  { nome: "Hélio" },
  { nome: "Lítio" },
  { nome: "Berílio" },
  { nome: "Boro" },
  { nome: "Carbono" },
  { nome: "Nitrogênio" },
  { nome: "Oxigênio" },
  { nome: "Flúor" },
  { nome: "Neônio" },
  { nome: "Sódio" },
  { nome: "Magnésio" },
  { nome: "Alumínio" },
  { nome: "Silício" },
  { nome: "Fósforo" },
  { nome: "Enxofre" },
  { nome: "Cloro" },
  { nome: "Argônio" },
  { nome: "Potássio" },
  { nome: "Cálcio" },
  { nome: "Escândio" },
  { nome: "Titânio" },
  { nome: "Vanádio" },
  { nome: "Cromo" },
  { nome: "Manganês" },
  { nome: "Ferro" },
  { nome: "Cobalto" },
  { nome: "Níquel" },
  { nome: "Cobre" },
  { nome: "Zinco" },
  { nome: "Gálio" },
  { nome: "Germânio" },
  { nome: "Arsénio" },
  { nome: "Selénio" },
  { nome: "Bromo" },
  { nome: "Criptônio" },
  { nome: "Rubídio" },
  { nome: "Estrôncio" },
  { nome: "Ítrio" },
  { nome: "Zircônio" },
  { nome: "Nióbio" },
  { nome: "Molibdénio" },
  { nome: "Tecnécio" },
  { nome: "Rutênio" },
  { nome: "Ródio" },
  { nome: "Paládio" },
  { nome: "Prata" },
  { nome: "Cádmio" },
  { nome: "Índio" },
  { nome: "Estanho" },
  { nome: "Antimônio" },
  { nome: "Telúrio" },
  { nome: "Iodo" },
  { nome: "Xenônio" },
  { nome: "Césio" },
  { nome: "Bário" },
  { nome: "Lantânio" },
  { nome: "Cério" },
  { nome: "Praseodímio" },
  { nome: "Neodímio" },
  { nome: "Promécio" },
  { nome: "Samário" },
  { nome: "Európio" },
  { nome: "Gadolínio" },
  { nome: "Térbio" },
  { nome: "Disprósio" },
  { nome: "Hólmio" },
  { nome: "Érbio" },
  { nome: "Túlio" },
  { nome: "Itérbio" },
  { nome: "Lutécio" },
  { nome: "Háfnio" },
  { nome: "Tântalo" },
  { nome: "Tungstênio" },
  { nome: "Rênio" },
  { nome: "Ósmio" },
  { nome: "Irídio" },
  { nome: "Platina" },
  { nome: "Ouro" },
  { nome: "Mercúrio" },
  { nome: "Tálio" },
  { nome: "Chumbo" },
  { nome: "Bismuto" },
  { nome: "Polônio" },
  { nome: "Ástato" },
  { nome: "Rádon" },
  { nome: "Frâncio" },
  { nome: "Rádio" },
  { nome: "Actínio" },
  { nome: "Tório" },
  { nome: "Protactínio" },
  { nome: "Urânio" },
  { nome: "Netúnio" },
  { nome: "Plutônio" },
  { nome: "Amerício" },
  { nome: "Cúrio" },
  { nome: "Berquélio" },
  { nome: "Califórnio" },
  { nome: "Einsténio" },
  { nome: "Férmio" },
  { nome: "Mendelévio" },
  { nome: "Nobélio" },
  { nome: "Laurêncio" },
  { nome: "Rutherfórdio" },
  { nome: "Dúbnio" },
  { nome: "Seabórgio" },
  { nome: "Bóhrio" },
  { nome: "Hássio" },
  { nome: "Meitnério" },
  { nome: "Darmstácio" },
  { nome: "Roentgénio" },
  { nome: "Copernício" },
  { nome: "Nipônio" },
  { nome: "Fleróvio" },
  { nome: "Moscóvio" },
  { nome: "Livermório" },
  { nome: "Tenesso" },
  { nome: "Oganésson" },
];

$(document).ready(function () {
  eventos();
});

function eventos() {
  $("#start").on("click", () => {
    comecarJogo();
  });

  $(".elemento").on("click", function () {
    // $(".elemento").on("mouseenter", function () {
    infoShow(this);
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

  let { nome } = elementosLista[nrAtomico];

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
        src: "./imagens/oi.jpg",
        style: "height: 100%; width: 100%;",
      })
    );

  $("#nmr-atomico").text("Número atômico: " + nrAtomico);
  $("#massa").text("Massa atômica: " + "teste");
  $("#onde-encontra").text("Onde se encontra: " + "teste");
}

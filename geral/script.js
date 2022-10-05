var elementosLista = [{},
{ nome: "Hidrogênio" },
{ nome: "Sódio" },
{ nome: "Lítio" },
{ nome: "Potássio" },
{ nome: "Rubídio" },
{ nome: "Césio" },
{ nome: "Frâncio" },
{ nome: "Berílio" },
{ nome: "Magnésio" },
{ nome: "Cálcio" },
{ nome: "Estrôncio" },
{ nome: "Bário" },
{ nome: "Rádio" },
{ nome: "Escândio" },
{ nome: "Ítrio" },
{ nome: "Titânio" },
{ nome: "Zircônio" },
{ nome: "Háfnio" },
{ nome: "Rutherfórdio" },
{ nome: "Vanádio" },
{ nome: "Nióbio" },
{ nome: "Tântalo" },
{ nome: "Dúbnio" },
{ nome: "Cromo" },
{ nome: "Molibdênio" },
{ nome: "Tungstênio" },
{ nome: "Seabórgio" },
{ nome: "Manganês" },
{ nome: "Técnécio" },
{ nome: "Rênio" },
{ nome: "Bóhrio" },
{ nome: "Ferro" },
{ nome: "Rutênio" },
{ nome: "Ósmio" },
{ nome: "Hássio" },
{ nome: "Cobalto" },
{ nome: "Ródio" },
{ nome: "Irídio" },
{ nome: "Meitnério" },
{ nome: "Níquel" },
{ nome: "Paládio" },
{ nome: "Platina" },
{ nome: "Darmstádio" },
{ nome: "Cobre" },
{ nome: "Prata" },
{ nome: "Ouro" },
{ nome: "Roentgênio" },
{ nome: "Zinco" },
{ nome: "Cádmio" },
{ nome: "Mercúrio" },
{ nome: "Copernício" },
{ nome: "Boro" },
{ nome: "Alumínio" },
{ nome: "Gálio" },
{ nome: "Índio" },
{ nome: "Tálio" },
{ nome: "Nihôno" },
{ nome: "Carbono" },
{ nome: "Silício" },
{ nome: "Germânio" },
{ nome: "Estanho" },
{ nome: "Chumbo" },
{ nome: "Fleróvio" },
{ nome: "Nitrogênio" },
{ nome: "Fósforo" },
{ nome: "Arsênio" },
{ nome: "Antimônio" },
{ nome: "Bismuto" },
{ nome: "Moscóvio" },
{ nome: "Oxigênio" },
{ nome: "Enxofre" },
{ nome: "Selênio" },
{ nome: "Telúrio" },
{ nome: "Polônio" },
{ nome: "Livermório" },
{ nome: "Flúor" },
{ nome: "Cloro" },
{ nome: "Bromo" },
{ nome: "Iodo" },
{ nome: "Ástato" },
{ nome: "Tenessino" },
{ nome: "Hélio" },
{ nome: "Nêonio" },
{ nome: "Argônio" },
{ nome: "Criptônio" },
{ nome: "Xenônio" },
{ nome: "Radônio" },
{ nome: "Oganessônio" },
]

$(document).ready(function () {
    eventos();
});

function eventos() {
    $(".elemento").on("click", function () {
        // $(".elemento").on("mouseenter", function () {
        infoShow(this);
    }
    )
}

function infoShow(elemento) {
    let nrAtomico = elemento.getAttribute("nrAtomico");
    console.log(elementosLista[nrAtomico])
    let familia = elemento.getAttribute("class");
    familia = familia.split(" ");

    $("#info").removeClass();
    $("#info").addClass(familia[1]);

    $("#info-ttl").empty();
    // $("#info-ttl").append($("<span>", {
    //     text: nomeElemento, style: "font-size: 25px;"
    // })
    // )
}
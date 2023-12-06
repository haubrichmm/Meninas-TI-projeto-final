var instrumentos = [
    {
        imagem: "img/violino.png",
        titulo: "violino",
        marca: "Amati",
        valor: "R$800,00"
    },
    {
        imagem: "img/viola.png",
        titulo: "viola",
        marca: "Hofma",
        valor: "R$1000,00"
    },
    {
        imagem: "img/violoncelo.png",
        titulo: "violoncelo",
        marca: "Eagle",
        valor: "R$1500,00"
    },  
    {
        imagem: "img/contrabaixo.png",
        titulo: "contrabaixo",
        marca: "Fender",
        valor: "2500,00"
    },
    {
        imagem: "img/harpa.png",
        titulo: "harpa",
        marca: "Antoni Marsale",
        valor: "R$5000,00"
    },
    {
        imagem: "img/trompa.png",
        titulo: "trompa",
        marca: "Marcus Bonna",
        valor: "R$4500,00"
    },
    {
        imagem: "img/trompete.png",
        titulo: "trompete",
        marca: "Yamaha",
        valor: "R$1500,00"
    },
    {
        imagem: "img/trombone.png",
        titulo: "trombone",
        marca: "Michael",
        valor: "R$3000,00"
    },
    {
        imagem: "img/tuba.png",
        titulo: "tuba",
        marca: "Eagle",
        valor: "10000,00"
    },
]
    
function criaCards(){
    const cards = document.querySelector("section.cards");
    for (let index = 0; index < objCards.length; index++) {
        var singlecard = document.createElement("div");
        singlecard.classList.add("single-card", "col","col-md-3","bg-body", "d-flex", "flex-nowrap", "flex-column", "gap-1",
        "justify-content-center");

        var image = document.createElement("img");
        image.src = objCards[index]["imagem"];
        var h2 = document.createElement("h2");
        h2.innerHTML = "título do card";
        var pe = document.createElement("p");
        pe.innerHTML = "descrição do card descrição do card descrição do card descrição do card";

        singlecard.appendChild(image);
        singlecard.appendChild(h2);
        singlecard.appendChild(pe);
        cards.appendChild(singlecard);
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        criaCards();
    });
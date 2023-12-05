// this is a js file 

/*let condicao1 = true;

if (condicao1) {
    //como o valor da condição é true,
    // o código desse bloco é executado 
    console.log('entrei no if 1!');
}

let condicao2 = false; 

if (condicao2){
    // como o valor da condição é false, 
    // o código desse bloco NÃO é executado

    console.log('Entrei no if 2!')
}*/


/*let num1 = 5;
let num2 = 8;

if (num1 === num2) {
    console.log("são iguais");
}

else{
    if(num1 > num2){
        console.log("são diferentes e num1 maior");
    }else{
    console.log("são diferentes e num2 maior");
    }
}

var paisDeOrigem = "brasil";

switch (paisDeOrigem) {
    case "brasil":
        console.log("brasileiro");
        break;
    case "EUA":
        console.log("americano");
        break;
    default:
        console.log("desconhecido");
        break;
}*/

/*var pokemon = "bulbasauro";

switch (pokemon) {
    case "bulbasauro":
        console.log("planta e veneno");
        break;

    case "charmander":
        console.log("fogo");
        break;

    case "squirtle":
        console.log("água");
        break;

    default:
        console.log ("nenhum");
        break;
}*/

/*var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

lista.forEach(element => {
    console.log(element);
    
});

for (const element of lista) {
    console.log(element);
}

//n precisa ser uma lista//
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element);
}*/


/* var i = 0

//enquanto = while // 
while (i < 10){
    console.log(i);
    i = i +1;
}  */

/*function calcularArea(altura = 10, largura = 20) {
var area = altura * largura;
return (area);
}

function somaArea(largura1, largura2, altura1, altura2){
    var area1 = calcularArea(largura1, altura1);
    var area2 = calcularArea(largura2, altura2);
    return (area1 + area2);
}

console.log(somaArea(10,20,30,40)); */


/*function imprimeNomes(nome){
    console.log|(nome);
}
imprimeNomes("nome1");
imprimeNomes("nome2");
imprimeNomes("nome3");

function imprimeNomes(nome) {
    return nome;
}
console.log(imprimeNomes("nome1"));
console.log(imprimeNomes("nome2"));
console.log(imprimeNomes("nome3"));
*/



/*function recebeArray(lista = []){
    var arrayFinal;
    arrayFinal[0] = lista[lista.lenght-1];
    arrayFinal[1] = lista[0];
    console.log(arrayFinal);
}
var lista = [1,2,3,4,5,6,7,8,9];
recebeArray(lista); */

//declaração de viaveis//
const hedear = document.createElement("header");
const content = document.createElement("main");
const footer = document.createElement("footer");

//adiciona conteudo ao cabeçalho

header.innerHTML = `
   <h1>Cabeçalho</h1>
   <p>este é o cabeçalho da pagina</p>
`;
// adiciona conteudo ao conteudo 
content.innerHTML = `
   <h2>conteudo</h2>
   <p>este é o conteudo da pagina</p>
`;

//adiciona conteudo ao rodape
footer.innerHTML = `
   <p>rodapé</p>
;`

//adiciona os elementos à pagina// 
document.body.apeendChild(header);
document.body.apeendChild(content);
document.body.apeendChild(footer);

//aplica ao conteudo
header.style.background = "#css";
header.style.padding = "10px";

//aplica estilos ao conteudo
content.style.backgroundColor = "#fff";
content.style.padding = "20px";

//aplica estilos ao rodape
footer.style.backgroundColor = "#css";
footer.style.padding = "10px";

const container = document.querySelector("main");
const linhas = [];
const cores = ["#fff", "#ccc"];

for (let i = 0; i < 10; i++) {
    const linha = document.createElement("div");
    linha.classList.add("linha");
    linhas.linnerHTML = `
        <h3>Linha ${i + 1}<h3>
        <p>este é o conteudo da linha ${i + 1}.</p>
    `;
}



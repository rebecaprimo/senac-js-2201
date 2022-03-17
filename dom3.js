const tamanho = 'A: ' + window.innerHeight + ' x L: ' + window.innerWidth; //concatenando altura e largura da janela
const navegador = window.navigator;

console.log(navegador);

const paragrafo = document.querySelector('p'); //atribuindo a constante

paragrafo.innerText = navegador; //imprimindo o tamanho da janela

//getElementById e querySelector imprimem o DOM na tela (???????)


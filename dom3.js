const tamanho = 'A: ' + window.innerHeight + ' x L: ' + window.innerWidth; //concatenando altura e largura da janela
const navegador = window.navigator; //retorna uma referência para o objeto Navigator

console.log(navegador); //imprimindo no console

const paragrafo = document.querySelector('p'); //query.Selector retorna o primeiro elemento dentro do documento que corresponde ao frupo específico de seletores, nesse caso o paragráfo
//atribuindo a constante 

paragrafo.innerText = navegador; //imprimindo o tamanho da janela

//getElementById retorna a referência do elemento através do ID solicitado


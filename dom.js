//DOM é a representação de dados dos objetos que compõem a estrutura
//e o conteúdo de um documento na Web.

const p = document.getElementById('paragrafo'); //declarando a constante

p.innerText = 'meu texto!'; //define ou retorna o conteúdo de texto do elemento

const cores = ['blue', //definindo cores em um array(vetor)
               'red', 
               'green', 
               'brown', 
               'yellow', 
               'navy', 
               'pink'];

for(i = 0, c = 0; i < 100; i++, c++) //for para chamar os valores do array
{
    p.style.background = cores[c]; //referenciando a propriedade ao array
    if(c >= 6) c = -1; //colocando dentro de um laço para repetir as cores do array
}

console.log(p); //imprimindo a variável
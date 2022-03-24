console.log(document.querySelector('li:nth-child(2)').innerText);

//ELEMENTOS MULTIPLOS

//console.log(document.getElementsByClassName('collection-item'));

//const itens = document.getElementsByClassName('collection-item');

//itens[3].style.color = 'red';

//OU

//const itens = document.querySelector('ul').getElementsByClassName('collection)

/*
itensArray.forEach(function(li, indice){
    //console.log(indice + ': ' + li.innerText);
    console.log(`${indice}: ${li.inner.Text}`);
});
*/ 
let itensImpares = document.querySelectorAll('li:nth-child(odd)');
//odd para impar
//even para par

//como mudar a cor das linhas impares
//

console.log(itensImpares);

const ITENS = document.querySelector('ul.collection'); //pega qualquer elemento

console.log(ITENS.children[2].children[0].children[0]);

let valor = itens.children[1].textContent = 'Novo item';
//ITENS.children[x].firstChild.data =  'qualquer coisa'; (quando esse comando for acionado, o item na posição x vai ser alterado para um novo texto)

const LABEL = document.querySelector('form div label');

console.log(LABEL.textContent);

LABEL.textContent = 'escreva aqui sua tarefa';

/*
itens.firstChild
itens.lastChild
itens.childElementCount
além child, podemos usar parent (para cima) e sibling (para os lados)
também é possível acessar filhos de filhos, ex:
itens.children[1].children[2].children[5].textContent
*/


//removendo elementos

//const itens = document.querySelectorAll('li');
//const itens = docuement.querySelector('ul');

//itens[0].remove(); //remove item

//const primeiroLi = document. querySelector('li:first-child');
//const link = primeiroLi.children[0];

//link.classList.add('nova-classe'); //adiciona classe
//link.classList.remove('nova-classe'); //remove classe


link.setAttribute('href', 'https://sp.senac.br'); //adiciona atributo
link.setAttribute('title', 'vai para o site do SENAC');
link.setAttribute('title');


const TODA_LISTA = document.querySelector('ul');
const LIS = document.querySelectorAll('li');

//TODA_LISTA.remove(); //apaga tudo que está no UL

//TODA_LISTA.removeChild(LIS[3]); //remove o terceiro filho desse elemento, apaga apenas um elemento li dentro do ul

LIS.forEach(function(val, ind){
    TODA_LISTA.removeChild(LIS[ind]);
});

const BOX = document.getElementsByClassName('input-field col s12');

//const BOX_VETOR = new Array

BOX[0].classList.add('collection-item');


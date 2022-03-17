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

console.log(itensImpares);




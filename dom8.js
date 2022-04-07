//eventos (event listeners)

//document.querySelector('input.btn').addEventListener('click', function(evento){
    //alert('você clicou em mim');
//});

//document.getElementById('senac').addEventListener('click', function(evento){
    //evento.preventDefault();
    //console.log(evento.target.className);
//});

//com click
/*
document.querySelector('span.card-title').addEventListener('click', function())

document.querySelector('#task-title').style.color = 'red';
*/

document.querySelector('a.clear-tasks').addEventListener('click', function(limpar){
    limpar.preventDefault();
    const TODA_LISTA = document.querySelector('ul');
    const LIS = document.querySelectorAll('li');
    LIS.forEach(function(valor, indice){
    TODA_LISTA.removeChild(LIS[indice]);
});

});

//fazendo o botão "adicionar" funcionar

document.querySelector('input.btn').addEventListener('click', function(adicionarTarefas){
    
    adicionarTarefas.preventDefault();

    //Criar elemento pelo JavaScript LI
    
    const LI = document.createElement('li');
    LI.className = 'collection-item';
    LI.id = 'novo-item';
    LI.setAttribute('title', 'Novo Item');
    //Pegamos o texto do input
    
    const textoInput = document.querySelector('input#task').value;

    const TEXTO = document.createTextNode(textoInput);

    //Colocamos o texto
    LI.appendChild(TEXTO);

    //Criamos o elemento A
    const A = document.createElement('a');
    A.className = 'delete-item secondary-content';
    A.href = '#';

    //Criamos o elemento I
    const I = document.createElement('i');
    I.className = 'fa fa-remove';

    const UL = document.querySelector('ul.collection');

    //Colocamos o elemetento I dentro do A
    A.appendChild(I);

    //Colocamos o elemetento A dentro do LI
    LI.appendChild(A);

    //Colocamos o elemetento LI dentro do UL
    UL.appendChild(LI);

    const limpar = document.querySelector('input#task').value = "";

})


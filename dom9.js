//quando clico no elemento mais interno em uma cadeia de elementos com Event Listener, 
//todos os eventos dos elementos mais externos são acionados

document.querySelector('.card-title').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('card-content').addEventListener('click', function(e){
    console.log(e.target);
});

document.querySelector('.card').addEventListener('click', function(e){
    console.log(e.target);
});
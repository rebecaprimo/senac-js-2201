document.querySelector('button').addEventListener('click', mostraCotacao);

function mostraCotacao(){
    fetch('10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado){
        return resultado.text();
    }).then(function(cotacoes){
       // document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
       const moedas = JSON.parse(cotacoes);
       console.log(moedas.moedas);
    });
}
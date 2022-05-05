document.querySelector('button').addEventListener('click', mostraCotacao);

function mostraCotacao(){
    fetch('10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado){
        return resultado.text();
    }).then(function(cotacoes){
       // document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
       const moedas = JSON.parse(cotacoes);

       const ul = document.querySelector('ul');

       const nomes = moedas.moedas;
       const valores = moedas.valores;

       for(let i = 0; i < nomes.lenght; i++){
           const li = document.createElement('li');
           const text = document.createTextNode(nomes[i] + ': ' + valores[i]);
           li.appendChild(text);
           ul.appendChild(li);
       }
       //console.log(moedas.moedas);
    });
}
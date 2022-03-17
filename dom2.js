const p = document.getElementById('paragrafo');
const titulo = document.querySelector('h1');

console.log(titulo);

p.innerText = 'meu texto!';

if(confirm('quer entrar com um valor?')){
    let valor = prompt('entre com um número de 0 a 10');

    if(valor >= 0 && valor <=10){ //repetição dos valores
        p.innerText = '';
        for(i = 0; i < valor; i++){
            p.innerText = p.innerText + "vvv\n"; //impressão
        }
        titulo.style.background = 'green'; //altera a cor quando verdadeiro o if
    }else{
        p.innerText = 'valor inválido!';
        p.style.backgroundColor = 'red'; //alterar a cor do fundo
    }
}else{
    p.innerText = 'que pena :(';
    p.style.backgroundColor = 'blue'; //alterar a cor do fundo
}

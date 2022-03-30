const p = document.getElementById('paragrafo'); //relaciona a variável ao elemento
const titulo = document.querySelector('h1'); //relaciona a variável ao elemento

console.log(titulo); //imprimindo no console

p.innerText = 'meu texto!'; //imprimindo na tela

if(confirm('quer entrar com um valor?')){ //condicional
    let valor = prompt('entre com um número de 0 a 10'); //entrada de texto pelo usuário

    if(valor >= 0 && valor <=10){ //repetição dos valores
        p.innerText = '';
        for(i = 0; i < valor; i++){
            p.innerText = p.innerText + "vvv\n"; //impressão
        }
        titulo.style.background = 'green'; //altera a cor quando verdadeiro o if
    }else{
        p.innerText = 'valor inválido!'; //usuário digitou valor fora da condicional
        p.style.backgroundColor = 'red'; //alterar a cor do fundo
    }
}else{
    p.innerText = 'que pena :(';
    p.style.backgroundColor = 'blue'; //alterar a cor do fundo
}

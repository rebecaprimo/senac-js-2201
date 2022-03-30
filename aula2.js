//comentário de linha

/* 
comentário de bloco
*/

const XPTO = 10; //declaração da variável como uma constante, não muda de valor

console.log(XPTO); //impressão no console

let minhaVar = 'olá'; //let = váriavel que possui escopo de bloco

minhaVar = minhaVar + ' mundo!';

console.log(minhaVar);

function repeticao(){ //função
    if(XPTO == 10){
        document.write('oiii!');
    } else {
        document.write('ihuu!');
    }

    for(i = 0; i < 10; i++){
        document.write('<br>olá mundo!<br>');
    }
}

repeticao(); //chamando a função repeticao()

function diretoNoElemento(){
    console.log('olá mundo!') 
}

 
function olaMundoNoLog(nome){
    console.log(`olá ${nome}!`);
    
}

olaMundoNoLog('bono');

const SOMA = function(a, b){ //const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura,
    return a + b;
};


let resultado = SOMA(2,2);

console.log(resultado);


(function(a,b){ //IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
    console.log(a+b);
})(3,3);


let vetor = ['luiz', 'bono', '57', 'batata', 876];

function pegaUltimo(vet){ //transformando em parametro opcional quando tem =
    let ult = vet.length - 1;
    console.log('tamanho = ' + vet.length); //imprime o tamanho do vetor
    return vet [ult];
}

let novoVetor = pegaUltimo(vetor);

console.log('ultimo elemento = ' + novoVetor);

let aluno = {nome: "amanda",
             matricula: 468454,
             setNome: function (n){
                console.log('muda para ' + n);
             }};

aluno.setNome('blabla');

let hoje = new Date;

console.log(hoje.getMonth()); //mostra o mês correspondente na tela
console.log(hoje.getFullYear());

function nomeMes(){
    const MES = ['jan', 
                 'fev', 
                 'mar',
                 'abr',
                 'maio',
                 'jun',
                 'jul',
                 'agos',
                 'set',
                 'out',
                 'nov',
                 'dez'];

    let objDate = new Date; //chamando o mes de acordo com o indice

    let atual = objDate.getMonth();

    return MES[atual];
}

console.log(nomeMes());

let hoje = new Date;

console.log(Date.getHours() + ': ' + hoje.getMinutes());



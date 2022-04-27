//de objeto JSON para string
const OBJ = {nome: "Rebeca", idade: 37}; //string pura com JSON

console.log(JSON.stringify(OBJ));

//de string para objeto JSON
const STR = '{"nome": "Bono", "idade": 37}';

console.log(JSON.parse(STR));

localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', 37); //armazena em uma URL

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
    
    e.preventDefault();
    const tarefa = '{"tarefa": ' + document.querySelector('input#task').value + '}';
    localStorage.setItem('tarefa', tarefa);
});

const TRF = localStorage.getItem('tarefa');

if(TRF){
    document.querySelector('#exibe').innerText = TRF;
}
const FORMULARIO = document.querySelector('#form-tarefa');
const LISTAR = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos() {
    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa);
    FORMULARIO.addEventListener('submit', adicionaTarefa);
    LISTAR.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagaTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);
    
}
function pegaTarefa(evento){
    let tarefas;
    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
        
        tarefas.forEach(function(tarefa){
            const LI = document.createElement('li');
            LI.className = 'collection-item';
            LI.appendChild(document.createTextNode(tarefa));
            const A = document.createElement('a');
            A.className = 'apaga-tarefa secondary-content';
            const I = document.createElement('i');
            I.className = 'fa fa-remove';
            A.appendChild(I);
            LI.appendChild(A);
            LISTAR.appendChild(LI);
            //FIM cria os novos elementos.
            
        })
    }
}
function apagaTarefa(evento){
    
    evento.preventDefault();
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }
}
function apagaTodasTarefas(evento){
    evento.preventDefault();
    LISTAR.innerHTML = '';
    apagaTodasDoLocalStorage
}
function filtraTarefa(evento){
    const texto = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        const item = tarefa.firstChild.textContent;

        if(item.toLowerCase().indexOf(texto) != -1){
            tarefa.style.display = 'block';
        }else {
            tarefa.style.display = 'none';
        }
    });
}
function adicionaTarefa(evento){

    evento.preventDefault();
    if (CAMPO_TAREFA.value === '') {
        //verifica se o campo está vazio
        alert('Insira uma tarefa');
    } else {
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
        const A = document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        LI.appendChild(A);
        //FIM cria os novos elementos.
        LISTAR.appendChild(LI);//Adiciona à lista de tarefas
        gravaTarefaNoLocalStorage(CAMPO_TAREFA);
        CAMPO_TAREFA.value = '';

        
    }
  
}
function gravaTarefaNoLocalStorage(tarefa){
    let tarefas;
    if(localStorage.getItem['tarefas'] === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa.value);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function apagaDoLocalStorage(evento){
    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    } else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function(tarefa, indice){
        if(tarefaParaApagar.textContent === tarefa){
            tarefas.splice(indice, 1);
        }
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function apagaTodasDoLocalStorage(){
    localStorage.removeItem('tarefas');
}
carregaMonitorDeEventos();

//criamos o elemento LI
const LI = document.createElement('li');

//LI.className = 'collection-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title', 'Pare o mouse para ver');
//FIM 

//criamos um texto para colocar em LI
const TEXTO = document.createTextNode('tarefa inserida dinamicamente');
LI.appendChild(TEXTO); //colocamos texto em LI

//colocar X na tarefa - criamos o elemento A
const A = document.createElement('a');
A.href ='#';
A.className ='delete-item secondary-content';
//FIM

//criamos o elemento I
const I = document.createElement('i');
I.className='fa fa-remove';
//FIM

A.appendChild(I); //colocamos o I no A

LI.appendChild(A); //colocamos o A no li

//capturamos o elemento ul para poder inserir o li 
const UL = document.querySelector('ul.collection');
UL.appendChild(LI); //colocamos o LI no UL

//appendChild - insere um filho dentro do outro, itens dentro de itens

//atualizando elementos
const novoTitulo = document.createElement('h5'); //cria elemento h2
novoTitulo.id = 'task-title'; //define o id
novoTitulo.appendChild(document.createTextNode('Listinha'));
const tituloAntigo = document.getElementById('task-title');
const acaoNoCard = document.querySelector('.card-action');
acaoNoCard.replaceChild(novoTitulo, tituloAntigo);
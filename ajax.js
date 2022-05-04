document.querySelector('button').addEventListener('click', carregaConteudo);

function carregaConteudo(){

    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'cotacoes.html', true);

    XHR.onload = function (){
        if(this.status === 200){
            document.getElementsById('exibe-conteudo-recuperado').innerText =
            this.responseText;
        }
    }
    XHR.send();

    const POSTS = [
        {titulo: 'Post Um', const: 'Conteúdo post um'},
        {titulo: 'Post Dois', const: 'Conteúdo post dois'}
    ];   
}
function criaPost(post, callback){
    POSTS.push(post);
    callback();
}
function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += '<li>${post.titulo}<li>';
    });
    document.body.innerHTML = saida; 
}

//Exemplo com promises
function criaPost(post){
    return new Promise(function(resolve, rejeita){
        POSTS.push(post);
        resolve();
    });
}

function getPosts(){
    
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });

    document.body.innerHTML = saida;
}

criaPost({titulo: 'Post Três', cont: 'Conteúdo post Três'}).then(getPosts).catch(function(erro){
    console.log(erro);
});
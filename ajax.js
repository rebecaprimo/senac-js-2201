document.querySelector('button').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'conteudo.txt', true); //true = assincrono, sincrono está sendo descontinuadp
    XHR.onload = function(){
        if(this.status === 200){ //HTTP code 2000 ok
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
        }
    }
    XHR.send(); //realiza a requisição
}

function criaPost(post, callback){
    POSTS.push(post)
}
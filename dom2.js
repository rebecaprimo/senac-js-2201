const p = document.getElementById('paragrafo');

p.innerText = 'meu texto!';

if(confirm('quer entrar com um valor?')){
    let valor = prompt('entre com um número de 0 a 10');

    if(valor >= 0 && valor <=10){
        p.innerText = '';
        for(i = 0; i < valor; i++){
            p.innerText = p.innerText + "vvv\n";
        }
    }else{
        p.innerText = 'valor inválido!';
    }
}else{
    p.innerText = 'que pena :(';
}

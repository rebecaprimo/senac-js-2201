try{
    let a = "b";
    if(typeof a == 'boolean'){
        throw new SyntaxError('A tem que ser inteiro');
    }
}catch(erro){
    console.log(erro.message);
}finally{
    console.log('executou!');
}


//console.log('executou!');
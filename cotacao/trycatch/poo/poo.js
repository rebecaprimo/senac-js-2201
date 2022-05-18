/*
class Usuario {
    constructor(){
        this.nome = 'rebeca';
    }

    listar(){
        console.log('lista usuário' + this.nome);
    }

    editar(){
        console.log('editar usuário');
    }

    cadastrar(params){
        console.log('cadastro feito');
    }

    mostraMensagem(){
        alert('mensagem para o usuário');

    }
}

let user = new Usuario;

user.listar();
*/

class Calculadora {
    constructor(){
        const operacao = document.getElementById('operacao');
        try{
            this.calcula(operacao);
        }catch{
            alert(e.message);
        }
        const operacao = document.getElementById('operacao').value;
        this.calcula
        //document.getElementById('calc').addEventListener('click', this.calcula);
    }

    calcula(){
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value;

        //console.log('NUMERO 1: ' + n1)
        switch(operacao) {
            case 'soma':
                resultado = this.soma(n1, n2);
                break;
            case 'subtracao':
                resultado = this.subtracao(n1, n2);
                break;
            default:
                throw SyntaxError('operação não disponível');
            }

            this.exibeResultado(resultado);
        const resultado = this.soma(n1+n2);
    }

    soma(nm1, nm2){
        let n1 = Number nm1;
        let n2 = Number nm2;

        return nm1 + nm2;
    }

    exibeResultado(res){
        document.getElementById('resultado').innerText = res;
    }
}

document.getElementById('calc').addEventListener('click', function(e){
    e.preventDefault();

   const obj = new Calculadora; 
});

 
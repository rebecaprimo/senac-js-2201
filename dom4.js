let saida;
saida = document.head; //retorna o elemento head do documento atual
saida = document.body; //retorna o elemento body do documento atual
saida = document.body.firstElementChild; //retorna o primeiro filho do elemento
saida = document.body.firstElementChild.firstElementChild;
saida = document.body.firstElementChild.firstElementChild.firstElementChild;
saida = document.doctype; //retorna a declaração do tipo de documento
saida = document.domain; //configura a parte do domínio da origem do documento atual, conforme  usado pela política de mesma origem.
saida = document.URL; //retorna o URL atual do navegador como um texto (string)
saida = document.characterSet; //retorna o character encoding(codificação de caracteres) do documento com o qual ele está renderizado atualmente
saida = document.forms; //retorna listando todo os elementos contidos no formulário
saida = document.forms[0];
saida = document.forms[0][0];
saida = document.links; //retorna toda a coleção de elementos <area> e <a> do documento
saida = document.links[0];
saida = document.links[0].className;
saida = document.scripts; //pode ser usado como um array para obter todos os elementos da lista
saida = document.scripts[2];
saida = document.scripts[2].

console.log(saida);
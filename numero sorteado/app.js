/*(document.querySelector('h1 ou qualquer outro nome da tag que vamos utilizar')) -> pegue no documento a query selecionada como h1;

 (titulo.innerHTML = 'escreva oque você quer colocar no titulo ')  -> altera o conteúdo interno (innerHTML) do titulo (h1) escrito ao lado pro meio de uma determinada variavel;

 function servae para criar uma função nesse casso a função verificarChute() que vai ser chamada pelo html todas as vezes que o botão for aperdado 
 function vrrificarChute(){esta e a forma escrita da functioin
  } 
*/

let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Hora do desfio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'selecione um numero de 1 até 10';

function verificarChute(){
    console.log('o botão foi clicado')
}

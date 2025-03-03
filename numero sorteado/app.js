/*(document.querySelector('h1 ou qualquer outro nome da tag que vamos utilizar')) -> pegue no documento a query selecionada como h1;

 (titulo.innerHTML = 'escreva oque você quer colocar no titulo ')  -> altera o conteúdo interno (innerHTML) do titulo (h1) escrito ao lado pro meio de uma determinada variavel;

 function servae para criar uma função nesse casso a função verificarChute() que vai ser chamada pelo html todas as vezes que o botão for aperdado 
 function vrrificarChute(){esta e a forma escrita da functioin
  } 

_______________________________________________________________________________  
 /*function exibirAlert(){
    alert('Eu amo js')       apenas um exercicio
}
function somandoDoisNumeros() {
  let numero1 = parseInt(prompt('informe o primeiro numero para a soma'));
  let numero2 = parseInt(prompt('informe o segumdo numero para a soma'));
  let total = numero1 + numero2 ;
  alert(  total + ' = ' + numero1 + ' + ' + numero2 + '')
} 
  ______________________________________________________________________________*/

function exibirNomeTela(tag, Texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = Texto;
}
exibirNomeTela('h1', ' Hora do desfio ')
exibirNomeTela('p', 'selecione um numero de 1 até 100')

function verificarChute(){
    console.log('o botão foi clicado')
}

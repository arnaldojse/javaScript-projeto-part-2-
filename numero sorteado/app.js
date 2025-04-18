/*(document.querySelector('h1 ou qualquer outro nome da tag que vamos utilizar')) -> pegue no documento a query selecionada como h1;

 (titulo.innerHTML = 'escreva oque você quer colocar no titulo ')  -> altera o conteúdo interno (innerHTML) do titulo (h1) escrito ao lado pro meio de uma determinada variavel;

 function servae para criar uma função nesse casso a função verificarChute() que vai ser chamada pelo html todas as vezes que o botão for aperdado 
 function vrrificarChute(){esta e a forma escrita da functioin
  } 
(.value) no final do document.querySelect(parametro).VALUE faz com que apenas o valor referente a query selecionada seja selecionado   

uma forma diferente de fazer uma comparação (condição ? valor_se_verdadeiro : valor_se_falso;) Se a condição for verdadeira: Retorna o valor antes dos dois pontos.
Se a condição for falsa: Retorna o valor após os dois pontos.
_______________________________________________________________________________  
 /*function exibirAlert(){
    alert('Eu amo js')       apenas exercicios
==================================================
    function olaMundoConsole (){
  console.log('olaaaaa mundo');
}
olaMundoConsole();
==================================================
function nomeDOoUsuario(nome) {
  console.log(`ola ${nome}!`)
}
nomeDOoUsuario('Alice')
==================================================
function dobro(num){
  return num * 2
}
let resultado = dobro(2)
console.log(resultado)
==================================================
function media(a,b,c){
  return (a + b + c) / 3
}
let resultado = media(4, 7, 10)
console.log(resultado)
==================================================
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
==================================================
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
_______________________________________________________________________________    
}
function somandoDoisNumeros() {
  let numero1 = parseInt(prompt('informe o primeiro numero para a soma'));
  let numero2 = parseInt(prompt('informe o segumdo numero para a soma'));
  let total = numero1 + numero2 ;
  alert(  total + ' = ' + numero1 + ' + ' + numero2 + '')
} 
  ______________________________________________________________________________*/

let numeroSecreto = grrarNUmeroAleatorio();

function exibirNomeTela(tag, Texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = Texto;
}
exibirNomeTela('h1', ' Hora do desfio ');
exibirNomeTela('p', 'selecione um numero de 1 até 10');

function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto)
    
    if(chute == numeroSecreto){
      exibirNomeTela('h1', 'acertou meu nobre')
      exibirNomeTela('p', 'parabens você acertou o numero!!!')
    }else{
      if(numeroSecreto > chute){
        exibirNomeTela('p', 'tente novamente, o numero secreto é maior')
      }else{
        exibirNomeTela('p', 'tente novamente, o numero secreto é menor')
      }
    }
}

function grrarNUmeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

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
  let tentativas = 1;
  
  function exibirNomeTela(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
  }

  function mensageminicial(){
    exibirNomeTela('h1', ' Hora do desfio ');
    exibirNomeTela('p', 'selecione um numero de 1 até 10');
  }

  mensageminicial()

  function verificarChute(){
      let chute = document.querySelector('input').value
      
      if(chute == numeroSecreto){
        exibirNomeTela('h1', 'acertou meu nobre')
  
        let contagemtente = tentativas > 1 ? 'tentativas':'tentativa'/*verificando a quntidade de tentativas */
  
        let mensagenstentativas = `parabens você acertou o numero com ${contagemtente} tentativas`;
  
        exibirNomeTela('p', mensagenstentativas)/*pelo JS n ser tipado podemos alterar aqui de uma string para uma variavel */

        document.getElementById('reiniciar').removeAttribute('disabled')


         
      }else{
        if(numeroSecreto > chute){
          exibirNomeTela('p', 'tente novamente, o numero secreto é maior')
        }else{
          exibirNomeTela('p', 'tente novamente, o numero secreto é menor')
        }
        tentativas++
        limparCampo()
      }
  }
  
  function grrarNUmeroAleatorio() {
      return parseInt(Math.random() * 10 + 1);
  }
  function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
  }
  function newGame(){
    numeroSecreto = grrarNUmeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensageminicial()
    document.getElementById('reiniciar').setAttribute('disabled' ,true)
  }
/*verção melhorada a parte________________________________________________________________________________ lembreçe de que quando finalizar o de cima finalize o de baixo 


let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let limiteTentativas = 5;

function exibirNomeTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirNomeTela('h1', 'Hora do Desafio');
exibirNomeTela('p', 'Selecione um número de 1 até 10');

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirNomeTela('h1', 'Acertou meu nobre');

    let contagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabéns! Você acertou o número com ${tentativas} ${contagemTentativa}`;
    exibirNomeTela('p', mensagemTentativas);

    desabilitarJogo(); // opcional: desabilita o jogo ao acertar

  } else {
    if (tentativas >= limiteTentativas) {
      exibirNomeTela('h1', 'GAME OVER');
      exibirNomeTela('p', `Você atingiu o limite máximo de ${limiteTentativas} tentativas. O número era ${numeroSecreto}`);
      desabilitarJogo();
    } else {
      if (numeroSecreto > chute) {
        exibirNomeTela('p', 'Tente novamente, o número secreto é MAIOR');
      } else {
        exibirNomeTela('p', 'Tente novamente, o número secreto é MENOR');
      }

      tentativas++; // só incrementa aqui, quando o jogador erra
    }
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function desabilitarJogo() {
  document.querySelector('input').disabled = true;
  document.querySelector('button').disabled = true;
}
  */
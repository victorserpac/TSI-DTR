/**
 * Only Positive Number
 * =====================================================================
 *
 * ==> Ulizando o do...while, crie um programa que solicita um valor para o
 * usuário até que este digite um valor positivo
 * ==> (Em caso de números negaUvos e zero ele deverá solicitar novamente o
 * número).
*/



var doWhileExample = (function(){

  function init(){
    do {
      var number = parseInt(prompt('Digite um número'));
    } while (number <= 0);
  }

  return {
      init: init
  }
})();


doWhileExample.init();

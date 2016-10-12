/**
 * Factorial
 * =====================================================================
 *
 * ==> Crie um programa que solicita um número pelo prompt de comando e retorna
 * o fatorial do mesmo em um alert.
*/

var whileExample = {};



whileExample.factorial = (function(){

  function get(){
    var number = getNumber();

    return getFactorialFromNumber(number);
  }

  function getNumber(){
    var value = prompt('Digite um número');

    return parseInt(value);
  }

  function getFactorialFromNumber(number) {
    var factorial = 1;

    while (number > 1){
      factorial *= number;

      number--;
    }

    return factorial;
  }



  return {
      get: get
  }
})();


alert("O fatorial do número informado é: " + whileExample.factorial.get());

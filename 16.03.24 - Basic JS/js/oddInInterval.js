/**
 * Odd In Interval
 * =====================================================================
 *
 * ==> Escreva um programa que solicita dois números, apresentando em seguida
 * todos os números ímpares entre esses números dados.
*/

var exercise4 = (function(){

  function init(){
    var number1 = getNumber();
    var number2 = getNumber();

    if (number2 < number1) {
      number1 = [number2, number2 = number1][0]; // swap
    }

    oddInterval(number1, number2);

  }

  function getNumber() {
    return parseInt(prompt('Digite um número'));
  }

  function oddInterval(num1, num2) {
    var string = 'Números ímpares do intervalo: '

    for (var i=num1+1; i < num2; i++) {
      if (i%2 != 0) {
        string += i + ", ";
      }
    }

    string = string.replace(/,\s*$/, "");
    alert(string);
  }

  return {
      init: init
  }
})();


exercise4.init();

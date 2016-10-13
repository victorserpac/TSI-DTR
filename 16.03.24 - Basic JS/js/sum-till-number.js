/**
 * Sum Till Number
 * =====================================================================
 *
 * ==> Escreva um programa que solicita um número positivo.
 * ==> Após, deve ser apresentada o somatório desse número (soma dos números de
 * 0 até o número repassado).
*/

var exercise5 = (function(){

  function init(){
    var num = getNumber();

    var sum = sumTillNumber(num);

    alert('Somatório de 0 até o número: ' + sum);
  }

  function getNumber() {
    return parseInt(prompt('Digite um número'));
  }

  function sumTillNumber(num) {
    var sum = 0;

    for (var i=0; i <= num; i++) {
      sum += i;
    }

    return sum;
  }

  return {
      init: init
  }
})();


exercise5.init();

/**
 * Build List
 * =====================================================================
 *
 * ==> Crie um programa que, ulizando um laço for, cria um menu com a estrutura
 * ul li.
 * ==> Esse menu terá cinco itens, chamados item 1, item 2, item 3, item 4 e
 * item 5 e esses itens direcionarão para as páginas: pagina1.htm, pagina2.htm,
 * pagina3.html, pagina4.htm e pagina5.htm.
*/



var forExample = {};


forExample.menu = (function(){
    var ul = document.createElement('ul');

    function build(){
        for (var i=1; i <= 5; i++) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            var text = document.createTextNode('Item ' + i);

            a.href = 'pagina' + i + '.html';
            a.appendChild(text);
            li.appendChild(a);

            ul.appendChild(li);
        }

        window.onload = function(){
            document.querySelector('body').appendChild(ul);
        }
    }

    return {
        build: build
    }
})();


forExample.menu.build();

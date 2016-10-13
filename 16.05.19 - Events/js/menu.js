(function() {
    'use strict';

    window.addEventListener("load", function load(event){
        window.removeEventListener("load", load, false); //remove listener, no longer needed




        var item = document.getElementById('item');
        var sublist = document.querySelector('li ul');

        sublist.style.display = 'none';

        item.querySelector('#img-open').style.display = 'none';
        item.setAttribute('data-menu', 'close');

        item.addEventListener('click', function(e) {

            if ( item.getAttribute('data-menu') === 'close' ) {
                item.querySelector('ul').style.display = 'initial';
                item.setAttribute('data-menu', 'open');
                item.querySelector('#img-open').style.display = 'initial';
                item.querySelector('#img-close').style.display = 'none';
            } else {
                item.querySelector('ul').style.display = 'none';
                item.setAttribute('data-menu', 'close');
                item.querySelector('#img-open').style.display = 'none';
                item.querySelector('#img-close').style.display = 'initial';
            }
        });

        var subitems = item.querySelectorAll('ul li');
        length = subitems.length;

        for ( var i = 0; i < length; i++ ) {
            subitems[ i ].addEventListener('click', function(e) {
                this.parentElement.removeChild(this);
            });
        }
    });

}());

(function() {
    'use strict';

    window.addEventListener("load", function load(event){
        window.removeEventListener("load", load, false); //remove listener, no longer needed

        var button = document.getElementById('button');
        var paragraph = document.getElementById('paragraph');

        button.addEventListener('click', function(e) {
            if ( this.getAttribute('data-paragraph') === 'hidden' ) {
                document.body.appendChild(paragraph);

                this.setAttribute('data-paragraph', 'visible');

                return true;
            }

            this.setAttribute('data-paragraph', 'hidden');

            paragraph.parentElement.removeChild(paragraph);
        });
    });

}());

/**
 * Tab like a PRO!
 * =====================================================================
*/

(function() {
    'use strict';

    var tabPro = (function() {

        var module = {};

        function Tab( elementQuery ) {
            this.element = document.querySelector( elementQuery );
        }

        Tab.prototype.watch = function() {
            var that = this;

            var tabListener = function( event ) {

                if ( event.keyCode === 9 ) {
                    that.addTab( event );

                    event.preventDefault();
                }
            };

            this.element.addEventListener('keydown', tabListener);
        };

        Tab.prototype.addTab = function() {
            var content = this.element.value;

            var beforeTab = content.substring( 0, this.element.selectionStart);
            var afterTab  = content.substring( this.element.selectionEnd, content.length);

            this.element.value = beforeTab + '\t' + afterTab;
        };


        module = function( tabQuery ) {
            var tab = new Tab( tabQuery );

            tab.watch();
        };

        return module;
    }());


    window.addEventListener('load', function(e) {
        tabPro( '.textarea' );
    });

}());

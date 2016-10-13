/**
 * Follow Mouse JS
 * =====================================================================
*/

var followMouse = (function() {
    'use strict';

    var module = {};

    /**
     * [Rectangle description]
     * @param String container [description]
     */
    function Fly( element ) {
        this.element = element;
    }

    Fly.prototype.follow = function() {
        var that = this;

        window.addEventListener('mousemove', function( event ) {

            that.render( event );
        });
    };

    Fly.prototype.render = function( event ) {
        var top  = event.clientY - parseInt( this.element.offsetWidth / 2, 10 ) + 'px';
        var left = event.clientX - parseInt( this.element.offsetHeight / 2, 10 ) + 'px';

        this.element.style.top = top;
        this.element.style.left = left;
    };



    module.follow = function( elmentQuery ) {
        var element = document.querySelector( elmentQuery );

        var fly = new Fly( element );

        fly.follow();
    };

    return module;
}());


window.addEventListener('load', function(e) {

    followMouse.follow( '.fly' );

});

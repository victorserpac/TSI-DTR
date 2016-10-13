/**
 * Fancy Window
 * =====================================================================
*/

(function() {
    'use strict';

    var fancyWindow = (function() {

        var module = {};

        function Window( elementQuery ) {
            this.element          = document.querySelector( elementQuery );
            this.element.top      = this.element.offsetTop;
            this.element.left     = this.element.offsetLeft;
            this.element.width    = this.element.offsetWidth;
            this.element.height   = this.element.offsetHeight;
            this.element.close    = this.element.querySelector( '.close' );
            this.element.titlebar = this.element.querySelector( '.titlebar' );
            this.lastClientY      = null;
            this.lastClientX      = null;
        }

        Window.prototype.watch = function() {
            var that = this;

            var listener = {
                moveWindow: function( event ) {
                    that.moveWindow( event );
                },
                closeWindow: function( event ) {
                    that.closeWindow( event );
                }
            };

            this.element.close.addEventListener('mousedown', listener.closeWindow );

            this.element.titlebar.addEventListener('mousedown', function( event ) {
                document.addEventListener( 'mousemove', listener.moveWindow );

                document.addEventListener( 'mouseup', function( event ) {
                    document.removeEventListener( 'mousemove', listener.moveWindow );

                    that.lastClientY = that.lastClientX = null;
                });
            });
        };

        Window.prototype.moveWindow = function ( event ) {
            if ( !this.lastClientY && !this.lastClientX ) {
                this.lastClientX = event.clientX;
                this.lastClientY = event.clientY;
            }

            var distanceX = event.clientX - this.lastClientX;
            var distanceY = event.clientY - this.lastClientY;

            this.lastClientX = event.clientX;
            this.lastClientY = event.clientY;

            this.renderWindow( distanceX, distanceY );
        };

        Window.prototype.renderWindow = function ( distanceX, distanceY ) {
            this.element.left += distanceX;
            this.element.top += distanceY;

            this.element.style.left = this.element.left + 'px';
            this.element.style.top  = this.element.top + 'px';
        };

        Window.prototype.closeWindow = function () {
            this.element.style.display = 'none';

            event.stopPropagation();
        };


        module = function( windowQuery ) {
            var myWindow = new Window( windowQuery );

            myWindow.watch();
        };

        return module;
    }());


    window.addEventListener('load', function(e) {
        fancyWindow( '.window' );
    });

}());

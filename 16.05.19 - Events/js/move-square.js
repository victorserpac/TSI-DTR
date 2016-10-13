/**
 * Move Square
 * =====================================================================
*/

(function() {
    'use strict';

    var moveSquare = (function() {

        var module = {};

        function Square( elementQuery ) {
            this.element  = document.querySelector( elementQuery );
            this.element.left = 0;
            this.element.top = 0;
            this.element.width = this.element.offsetWidth;
            this.element.height = this.element.offsetHeight;
        }

        Square.prototype.watch = function() {
            var that = this;

            var keydownListener = function( event ) {
                that.manageMovements( event );
            };

            document.addEventListener('keydown', keydownListener);

        };

        Square.prototype.manageMovements = function( event ) {
            var key = event.keyCode;

            if ( this.moveCases.hasOwnProperty( key ) ) {
                var speed = event.shiftKey ? 10 : 1;

                this.moveCases[ key ].apply( null, [ this, speed ] );
            }
        };

        Square.prototype.moveCases = {
            37: moveLeft,
            38: moveUp,
            39: moveRight,
            40: moveDown
        };

        Square.prototype.drawSquare = function() {
            this.element.style.left = this.element.left + 'px';
            this.element.style.top  = this.element.top + 'px';
        };

        function moveLeft( square, speed ) {
            if ( square.element.left >= speed ) {
                square.element.left -= speed;
                square.drawSquare();
            }
        }

        function moveUp( square, speed ) {
            if ( square.element.top >= speed ) {
                square.element.top -= speed;
                square.drawSquare();
            }
        }

        function moveRight( square, speed ) {
            var fromLeft = square.element.left + square.element.width + speed;

            if ( fromLeft < window.innerWidth ) {
                square.element.left += speed;
                square.drawSquare();
            }
        }

        function moveDown( square, speed ) {
            var fromTop = square.element.top + square.element.height + speed;

            if ( fromTop < window.innerHeight ) {
                square.element.top += speed;
                square.drawSquare();
            }
        }




        module = function( squareQuery ) {
            var square = new Square( squareQuery );

            square.watch();
        };

        return module;
    }());


    window.addEventListener('load', function(e) {

        moveSquare( '.square' );

    });

}());

/**
 * Draw Rectangles JS
 * =====================================================================
*/

var drawRectangles = (function() {
    'use strict';

    var module = {};

    function Canvas( element ) {
        this.element = element;
        this.container = element.getContext('2d');
        this.historyRectangle = [];
        this.setFullScreen( element );
        this.currentColor = new Color();
    }


    Canvas.prototype.watch = function() {
        var that = this;
        var rectangle;

        var listener = {
            mousemove: function( event ) {
                that.container.clearRect( 0, 0, that.width, that.height);

                rectangle.setDimension( event );
                rectangle.drawRectangle( that );

                var length = that.historyRectangle.length;

                for ( var i = 0; i < length; i++ ) {
                    that.historyRectangle[ i ].drawRectangle( that );
                }
            }
        };

        window.addEventListener('mousedown', function( event ) {

            if ( event.which !== 1 ) {
                return;
            }

            var color = that.currentColor.hex;
            rectangle = new Rectangle( event, color );

            window.addEventListener( 'mousemove', listener.mousemove );
        });

        window.addEventListener( 'mouseup', function( e ) {
            that.historyRectangle.push( rectangle );
            this.removeEventListener( 'mousemove', listener.mousemove );

            rectangle = null;
        });

    };

    Canvas.prototype.setFullScreen = function ( element ) {
        this.width  = element.width  = window.innerWidth;
        this.height = element.height = window.innerHeight;
    };

    /**
     * [Rectangle description]
     * @param String canvas [description]
     */
    function Rectangle( event, color ) {
        this.rectangle         = {};
        this.rectangle.originY = event.clientY;
        this.rectangle.originX = event.clientX;
        this.color             = color;
    }

    Rectangle.prototype.setDimension = function ( event ) {
        this.rectangle.width  = event.clientX - this.rectangle.originX;
        this.rectangle.height = event.clientY - this.rectangle.originY;
    };

    Rectangle.prototype.drawRectangle = function( canvas ) {
        var x      = this.rectangle.originX;
        var y      = this.rectangle.originY;
        var width  = this.rectangle.width;
        var height = this.rectangle.height;

        canvas.container.fillStyle = this.color;
        canvas.container.fillRect( x, y, width, height);

        /*
         * Logic to use with DIV's
         *

        if ( width < 0 ) {
            width = Math.abs( width );
            left  = rectangle.originX - width;

            rectangle.style.left = left + 'px';
        }

        if ( height < 0 ) {
            height = Math.abs( height );
            top    = rectangle.originY - height;

            rectangle.style.top = top + 'px';
        }

        rectangle.style.width  = width + 'px';
        rectangle.style.height = height + 'px';
        */
    };

    /**
     * Color class
     */
    function Color() {
        this.element = document.querySelector( '.color-picker' );
        this.hex = '#ff0000';

        this.selectColor();
    }

    Color.prototype.selectColor = function() {
        var that = this;

        this.element.addEventListener( 'mousedown', function( event ) {
            this.addEventListener( 'change', function( event ) {
                that.hex = this.value;
            });

            event.stopPropagation();
        });

        this.element.addEventListener( 'mouseup', function( event ) {
            event.stopPropagation();
        });
    };


    module.draw = function( canvasQuery ) {
        var canvasElement = document.querySelector( canvasQuery );

        var canvas = new Canvas( canvasElement );

        canvas.watch();
    };

    return module;
}());


window.addEventListener('load', function(e) {

    drawRectangles.draw( '#canvas' );

});

(function() {
    'use strict';

    var album = (function() {
        var freeFigurine;
        var countFigurines = 0;
        var missingFigurines = 50;
        var module = {};

        function Table() {
            this.table = this.init();
        }

        Table.prototype.init = function () {
            var table        = [];
            var tableElement = document.createElement( 'table' );
            var count        = 1;

            for ( var j = 0; j < 5; j++ ) {
                table[ j ] = [];
                var row = document.createElement( 'tr' );

                for ( var i = 0; i < 10; i++ ) {
                    table[ j ][ i ] = new Figurine({
                        tdElement:    document.createElement( 'td' ),
                        imageElement: document.createElement( 'img' ),
                        nth:          count,
                        row:          j,
                        column:       i
                    });

                    table[ j ][ i ].watch();
                    row.appendChild( table[ j ][ i ].tdElement );
                }
                tableElement.appendChild(row);
            }

            document.querySelector('body').appendChild( tableElement );
            updateCounters();

            return table;
        };

        Table.prototype.randFigurine = function () {
            if ( countFigurines < 50 ) {
                var figurineIndex = Math.floor( Math.random() * ( 49 - 0 + 1)) + 0;
            } else {
                clearInterval( freeFigurine );
            }
        };

        function Figurine( args ) {
            this.tdElement  = args.tdElement || null;
            this.nth        = args.nth || null;
            this.currentNth = 0;
            this.row        = args.row || null;
            this.column     = args.column || null;
            this.image      = {
                element:   args.imageElement || null,
                extension: '.png',
                path:      'img/figurinhas/'
            };

            var path = this.image.path + this.currentNth + this.image.extension;
            this.image.element.setAttribute( 'src', path );
            this.tdElement.appendChild( this.image.element );
        }

        Figurine.prototype.loadFigurine = function ( event ) {
            this.image.element.setAttribute( 'src', path );

            updateCounters();
        };

        Figurine.prototype.watch = function () {

            this.tdElement.addEventListener( 'click', function() { ... });
        };

        module = function() {
            var table = new Table();

            var freeFigurine = setInterval( function() {
                table.randFigurine();
            }, 60000);
        };

        return module;
    }());

    window.addEventListener( 'load', function( event ) {
        album();
    });
}());

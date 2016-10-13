/**
 * Álbum de Figurinhas
 * =====================================================================
*/

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
                    count++;
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
                var jLength = this.table.length;

                var count = 0;

                for ( var j = 0; j < jLength; j++ ) {
                    var iLength = this.table[ j ].length;

                    for ( var i = 0; i < iLength; i++ ) {
                        if ( figurineIndex == count && this.table[ j ][ i ].currentNth === 0 ) {
                            this.table[ j ][ i ].loadFigurine();

                            success( count + 1 );
                            return;
                        }
                        count++;
                    }
                }

                fail( figurineIndex );
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

            this.appendElements();
        }

        Figurine.prototype.appendElements = function () {
            this.tdElement.appendChild( this.image.element );
        };

        Figurine.prototype.loadFigurine = function ( event ) {

            this.currentNth = this.nth;
            var path = this.image.path + this.currentNth + this.image.extension;

            this.image.element.setAttribute( 'src', path );

            countFigurines++;
            missingFigurines--;

            updateCounters();

        };

        Figurine.prototype.watch = function () {
            var that = this;

            this.tdElement.addEventListener( 'click', function() {

                if ( that.currentNth === 0 ) {
                    that.loadFigurine();
                }

            });

        };

        function updateCounters() {
            document.querySelector('#count').innerHTML = countFigurines;
            document.querySelector('#missing').innerHTML = missingFigurines;
        }

        function success( num ) {
            document.querySelector( '#message' ).innerHTML = 'Parabéns, você ganhou a figurinha número '+ num;
        }

        function fail( num ) {

            document.querySelector( '#message' ).innerHTML = 'Você ganhou uma figurinha repetida (Numero ' + num + '). Mais sorte da próxima vez';
        }


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

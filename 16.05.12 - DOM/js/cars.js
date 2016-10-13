(function() {

    var Car = (function() {

        function Constructor( args ) {
            if ( args ) {
                this.brand = args.brand || null;
                this.model = args.model || null;
                this.year  = args.year || null;
                this.color = args.color || null;
            }
        }

        var constructor = function( args ) {
            return new Constructor( args );
        };

        return constructor;

    }());


    var HTMLTable = (function() {

        function Constructor( objs ) {
            this.objects = objs;
        }

        Constructor.prototype.getObjects = function() {

        };

        Constructor.prototype.parseTable = function() {
            var table = document.createElement( 'table' );

            var length = this.objects.length;

            for ( var i = 0; i < length; i++ ) {
                var tr = this.getTableLine( this.objects[ i ] );

                table.appendChild( tr );
            }

            return table;
        };

        Constructor.prototype.getTableLine = function( obj ) {
            var coluns = Object.getOwnPropertyNames( obj );
            var length = coluns.length;

            var tr = document.createElement( 'tr' );

            for ( var i = 0; i < length; i++ ) {
                var td = document.createElement( 'td' );
                td.textContent = obj[ coluns[ i ] ];

                tr.appendChild( td );
            }

            return tr;

        };

        var init = function( args ) {
            var table = new Constructor( args );

            document.querySelector('body').appendChild( table.parseTable() );
        };

        return init;

    }());

    var car1 = Car({
        brand: 'Toyota',
        model: 'Corolla',
        year:  2003,
        color: 'Preto'
    });
    var car2 = Car({
        brand: 'Toyota',
        model: 'Corolla',
        year:  1994,
        color: 'Cinza'
    });
    var car3 = Car({
        brand: 'Toyota',
        model: 'Corolla',
        year:  2008,
        color: 'Prata'
    });
    var car4 = Car({
        brand: 'Toyota',
        model: 'Corolla',
        year:  2001,
        color: 'Branco'
    });
    var car5 = Car({
        brand: 'Toyota',
        model: 'Corolla',
        year:  1998,
        color: 'Preto'
    });

    window.addEventListener('load', function(e) {
        HTMLTable([
            car1,
            car2,
            car3,
            car4,
            car5
        ]);
    });

}());

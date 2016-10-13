(function(){

    var Cusco = {
        // latir
        latir: function( nome ){
            return 'O cusco ' + nome + ' latiu';
        },

        // andar
        andar: function( nome ){
            return 'O cusco ' + nome + ' andou!';
        },

        // correr
        correr: function( nome ){
            return 'O cusco ' + nome + ' correu!';
        },

        // sentar
        sentar: function( nome ){
            return 'O cusco ' + nome + ' sentou!';
        }
    };

    Cusco.execute = function ( metodo ) {
        return Cusco[metodo] && Cusco[metodo].apply( Cusco, [].slice.call( arguments, 1 ) );
    };

    Cusco.execute( 'latir', 'Tob' );
    Cusco.execute( 'andar', 'Tob' );
    Cusco.execute( 'correr', 'Tob' );
    Cusco.execute( 'Sentar', 'Tob' );

})();

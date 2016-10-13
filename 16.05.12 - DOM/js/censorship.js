(function() {

    var Censorship = (function() {

        function Constructor( args ) {
            this.words      = args.words || null;
            this.paragraphs = this.getParagraphs();

            this.removeMatchs();
        }

        Constructor.prototype.getParagraphs = function() {
            return document.querySelectorAll( 'p' );
        };

        Constructor.prototype.removeMatchs = function() {
            var paragraphsLength = this.paragraphs.length;
            var wordsLength      = this.words.length;

            for ( var i = 0; i < paragraphsLength; i++ ) {
                var match = false;

                var content = this.paragraphs[ i ].textContent;

                for ( var j = 0; j < wordsLength; j++ ) {
                    if ( content.indexOf( this.words[ j ] ) > 0 ) {
                        match = true;
                        break;
                    }
                }

                if ( match ) {
                    this.removeParagraph( i );
                }
            }
        };

        Constructor.prototype.removeParagraph = function( index ) {
            this.paragraphs[ index ].remove();
        };

        var init = function( args ) {
            return new Constructor( args );
        };

        return init;

    }());


    window.addEventListener('load', function(e) {
        Censorship({
            words: [
                'Lorem',
                'lorem',
                'Teste 3',
                'Teste 4'
            ]
        });
    });

}());

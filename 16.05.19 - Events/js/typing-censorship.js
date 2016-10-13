/**
 * Typing Censorship
 * =====================================================================
*/
var typingCensorship = (function() {
    'use strict';

    var module = {};

    function TypingCensorship( input ) {
        this.input = input;
    }

    TypingCensorship.prototype.watch = function() {
        var that = this;

        this.input.addEventListener('keyup', function( event ) {

            // Let 'censorInput' lead with the event and input element
            that.censorInput( event, this );

        });
    };

    // Possibles cases to remove Letter
    TypingCensorship.prototype.typeCases = {
        q: removeLetter,
        w: removeLetter,
        x: removeLetter
    };

    TypingCensorship.prototype.censorInput = function( event, input ) {

        // Get the event's word and lower the case
        var letter  = String.fromCharCode( event.keyCode ).toLowerCase();
        var content = input.value;

        // Switch case using object
        if ( this.typeCases.hasOwnProperty( letter ) ) {

            // Call removeLetter with letter and input content as arguments
            content = this.typeCases[ letter ].apply( null, [letter, content]);

            // Refresh input value
            input.value = content;
        }

    };

    function removeLetter( letter, string ) {
        return string.replace( letter, '' );
    }

    module.censor = function( inputQuery ) {
        var input = document.querySelector( inputQuery );

        // New instance of constructor
        var typing = new TypingCensorship( input );

        typing.watch();
    };

    return module;

}());


window.addEventListener('load', function(e) {
    typingCensorship.censor( '.typing-censorship' );
    typingCensorship.censor( '.typing-censorship-2' );
});

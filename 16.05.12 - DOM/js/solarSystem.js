(function() {

    var Earth = (function() {

        var angle = 0;
        var lastTime = null;
        var orbitElement;

        function Earth( args ) {
            if ( args ) {
                this.orbitElementQuery = args.orbitElement || '.earth-orbit';
            }

            orbitElement = document.querySelector( this.orbitElementQuery );

            requestAnimationFrame( animate );
        }

        function animate( time ) {
          if (lastTime !== null) {
              angle += (time - lastTime) * 0.0001;
          }

          lastTime = time;

          var scale = (Math.sin( angle ) * 0.4) + 0.8;
          var translateX = Math.cos( angle ) * -300;
          var translateY = Math.sin( angle ) * 50;

          if ( translateY < 0 ) {
              orbitElement.style.zIndex = 1;
          } else {
              orbitElement.style.zIndex = 10;
          }

          orbitElement.style.transform = 'translate3d(' + translateX + '%, ' + translateY + '%, 0) scale(' + scale + ')';

          requestAnimationFrame( animate );
        }


        return function( args ) {
            return new Earth( args );
        };

    }());


    var Moon = (function() {

        var angle = 0;
        var lastTime = null;
        var orbitElement;

        function Moon( args ) {
            if ( args ) {
                this.orbitElementQuery = args.orbitElement || '.moon';
            }

            orbitElement = document.querySelector( this.orbitElementQuery );

            requestAnimationFrame( animate );
        }

        function animate( time ) {
          if (lastTime !== null) {
              angle += (time - lastTime) * 0.001;
          }

          lastTime = time;

          var scale = (Math.sin( angle ) * 0.4) + 0.8;
          var translateX = Math.cos( angle ) * -300;
          var translateY = Math.sin( angle ) * 50;

          if ( translateY < 0 ) {
              orbitElement.style.zIndex = 1;
          } else {
              orbitElement.style.zIndex = 10;
          }

          orbitElement.style.transform = 'translate3d(' + translateX + '%, ' + translateY + '%, 0) scale(' + scale + ')';

          requestAnimationFrame( animate );
        }


        return function( args ) {
            return new Moon( args );
        };

    }());

    window.addEventListener('load', function(e) {
        Earth({
            orbitElement: '.earth-orbit'
        });
        Moon({
            orbitElement: '.moon'
        });
    });

}());

jQuery( document ).ready( function( $ ) {

    // Toggle Search
    console.log("Initialize Search Bar");
    var navSearchIcon = document.getElementById("search-icon");
    var navSearchBar  = document.getElementById("search-wrapper");
    navSearchIcon.addEventListener("click", function() {
        navSearchBar.classList.toggle("search-down");
        console.log("toggle: Search Bar");
    });

    // Toggle Search
    console.log("Initialize Side Menu");
    var menuButton = document.getElementById('nav-button');
    var overlayButton = document.getElementById('content-overlay');
    //var buttons = [menuButton,overlayButton];

    // Toggle Mask
    /**
     * Select all Menu Targets by ClassName and convert the HTMLCollection to an Array
     * @var array menuTargets Array of Menu Target to activate onclick
     */
    var menuTargets = [].slice.call( document.getElementsByClassName('m-target') );
    [ menuButton, overlayButton ].forEach( function( button ) {
        button.addEventListener("click", function() {

            /** Set menu target to "active" */
            menuTargets.forEach( function( t ) {
                var target = $(t);
                var nav_bottom = $('#nav-main');


                /** Set top positions */
                if( t.id == "nav-side-body") {
                    target.css('top', ( nav_bottom.offset().top + nav_bottom.height() + 30 - document.body.scrollTop) + "px");
                }
                else {
                    target.css('top', ( nav_bottom.offset().top + nav_bottom.height() - document.body.scrollTop) + "px");
                }

                t.classList.toggle('is-active')


            });


            /** Enable or disable the scrolling */
            if( menuTargets[1].classList.contains('is-active') ) {
                disableScroll()
            } else {
                enableScroll();
            }

            console.log("toggle: Side Menu");
        });
    });


    //Scroll Lock Functions
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
});
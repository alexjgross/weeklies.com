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

    /**
     * Select all Menu Targets by ClassName and convert the HTMLCollection to an Array
     * @var array menuTargets Array of Menu Target to activate onclick
     */
    var menuTargets = [].slice.call( document.getElementsByClassName('m-target') );
    [ menuButton, overlayButton ].forEach( function( button ) {
        button.addEventListener("click", function() {
            menuTargets.forEach( function( target ) {
                target.classList.toggle('is-active')
            });
            console.log("toggle: Side Menu");

            if( menuTargets[1].classList.contains('is-active') ) {
                disableScroll()
            } else {
                enableScroll();
            }
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
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
            console.log("toggle: Side Menu")
        });
    });
});
$(document).ready(function () {
    var currentPosition = 0;
    var slideWidth = 100;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    var interval = "";

    // Remove scrollbar in JS
    $('.banner-container').css('overflow', 'hidden');

    // Create slide bullets
    for(i = 0; i < numberOfSlides; i++){
        $('.dot-container').append("<span class='slideshow-dot' id='slide-dot" + i + "'></span>")
    }
    

    // Wrap all .slides with #slideInner div
    slides
        .wrapAll('<div id="slideInner"></div>')
        // Float left to display horizontally, readjust .slides width
        .css({
            'float': 'left',
            'width': slideWidth + 'vw'
        });

    // Set #slideInner width equal to total width of all slides
    $('#slideInner').css('width', slideWidth * numberOfSlides + 'vw');

    // // Insert left and right arrow controls in the DOM
    $('.banner')
        .prepend('<a class="control" id="leftControl">&#10094;</a>')
        .append('<a class="control" id="rightControl">&#10095;</a>');

    // Hide left arrow control on first load
    manageControls(currentPosition);
    
    // start auto slide
    autoSlide();

    // Create event listeners for .controls clicks
    $('.control')
        .bind('click', function () {
            // Determine new position
            currentPosition = ($(this).attr('id') == 'rightControl')
                ? currentPosition + 1 : currentPosition - 1;

            RemoveInterval();
                
            manageControls(currentPosition);
            // Move slideInner using margin-left
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition) + 'vw'
            });
            
            autoSlide();
        });

    // Create event listeners for bullet/dot click
    $('span.slideshow-dot').click(function(){
        var dotId = $(this).attr('id');
        var currentPositionString = dotId.replace('slide-dot','');
        
        currentPosition = parseInt(currentPositionString);

        RemoveInterval();

        manageControls(currentPosition);
        $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition) + 'vw'
        });

        autoSlide();
    });

    function autoSlide(){
        
        interval = window.setInterval(function(){
            currentPosition++;
            manageControls(currentPosition);
    
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition) + 'vw'
            });
       
           }, 3000);
    }
    
   
    function RemoveInterval() {
        clearInterval(interval);
    }

    
    // manageControls
    function manageControls(position) {
        // locate slideshow dot to the current location
        var currentDotVar = "#slide-dot" + position;
        $(currentDotVar).addClass(" active");

        for(i = 0; i < numberOfSlides; i++){
            if(position != i){
                $("#slide-dot" + i).removeClass("active");
            }
        }

        // If current position = -1, go to last slide
        if (position == 0-1) { 
            currentPosition = numberOfSlides-1;
            manageControls(currentPosition);
        }
        // If current position > no of slide then go to first slide
        if (position == numberOfSlides) { 
            currentPosition = 0;
            manageControls(currentPosition);
        }
    }
});
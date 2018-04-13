$(document).ready(function(){
    var options = {
        animateThreshold: 100
    }

    $('.animation').AniView();

    $('.scroll-element[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollUpButton').fadeIn();
        } else {
            $('.scrollUpButton').fadeOut();
        }
    });
    $('.scrollUpButton').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});



$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
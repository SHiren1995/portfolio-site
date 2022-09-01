'use strict'

$(window).on('load',function(){
    $('#splash-logo').delay(3500).fadeOut('slow');

    $('#splash').delay(3600).fadeOut('slow', function(){
        $('body').addClass('appear');
    });

    $('.splashbg1').on('animationend',function(){

    });
});
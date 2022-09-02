'use strict'

$('#top-menu a[href*="#"]').click(function(){
    let elmHash = $(this).attr('href');
    let pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, 750);
    return false
});
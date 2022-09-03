'use strict'

$(window).on('load',function(){
    $('#splash-logo').delay(3400).fadeOut('slow');
    console.log('ロゴ処理完了');

    $('#splash').delay(3500).fadeOut('slow', function(){
        $('body').addClass('appear');
    });
    console.log('ローディング処理完了');

    $('.splashbg1').on('animationend',function(){

    });
});
'use strict'

$(".info").modaal({
    overlay_close:true,
    before_open:function(){
        $('html').css('overflow-y','hidden');
    },
    after_close:function(){
        $('html').css('overflow-y','scroll');
    }
});
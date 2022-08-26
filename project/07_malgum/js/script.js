$(function(){

    // service menu
    $('.serviceMenu').hide();

    $('.service').mouseenter(function(){
        $('.serviceMenu').show();
    });

    $('.service, .serviceMenu').mouseleave(function(){
        $('.serviceMenu').hide();
    });

    // menu
    $('.subMenu').hide();

    $('.mainMenu').mouseenter(function(){
        $(this).children('.subMenu').show();
    });
    $('.mainMenu').mouseleave(function(){
        $(this).children('.subMenu').hide();
    });

    // top btn
    $( '.top' ).click(function() {
        $('html, body').animate({scrollTop : 0}, 400);
    } );

    // project menu
    $('.productionBtn').click(function(){
        var offset = $('.project').offset();
        $('html').animate({scrollTop : offset.top-100}, 400);
    });

    $('.graphicsBtn').click(function(){
        var offset = $('.graphics').offset();
        $('html').animate({scrollTop : offset.top-100}, 400);
    });

    $('.softwareBtn').click(function(){
        var offset = $('.software').offset();
        $('html').animate({scrollTop : offset.top-100}, 400);
    });
    
    $('.manageBtn').click(function(){
        var offset = $('.manage').offset();
        $('html').animate({scrollTop : offset.top-100}, 400);
    });

    $('.marketingBtn').click(function(){
        var offset = $('.marketing').offset();
        $('html').animate({scrollTop : offset.top-100}, 400);
    });

    // tablet menu toggle
    var menu = 0;

    $('.hamArea').click(function(){
        $(this).toggleClass('click');

        if (menu == 0) {
            $('.menuWrapT').css('left','0');
            menu = 1;
        } else {
            $('.menuWrapT').css('left','-100%');
            menu = 0;
        }
        
    });

    // tablet menu click
    $('.depth2Wrap').hide();
    $('.depth3Wrap').hide();

    $('.depth1').click(function(){
        $(this).toggleClass('depth1On');
        $('.depth1').not(this).removeClass('depth1On');
        $(this).next('.depth2Wrap').slideToggle(200);
        $('.depth1').not(this).next('.depth2Wrap').slideUp(200);
    });

    $('.serviceT .depth2').click(function(){
        $(this).toggleClass('depth2On');
        $('.depth2').not(this).removeClass('depth2On');
        $(this).next('.depth3Wrap').slideToggle(200);
        $('.depth2').not(this).next('.depth3Wrap').slideUp(200);
    });

    $('.menuWrapT>ul>li').not('.serviceT').click(function(){
        $('.depth2').removeClass('depth1On');
        $('.depth2').removeClass('depth2On');
        $('.serviceT .depth3Wrap').slideUp(200);
    });

});
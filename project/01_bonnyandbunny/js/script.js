$(function () {

    // top btn
    $('.top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 700);
        return false;
    });
    $('.end').click(function () {
        $('body, html').animate({ scrollTop: $(document).height() }, 700);
        return false;
    });

    // slide
    $('.slide').css('left', '-100%');

    var num = 1;
    var img_c = 7;
    var img_w = 100;

    $('.next').click(function () {
        num++;
        if (num == img_c) {
            num = 2;
            $('.slide').css('left', '-100%');
        }
        $('.slide').stop().animate({ left: -img_w * num + '%' }, 500);
        $('.round').removeClass('round_on');
        if (num == 6) {
            $('.round').eq(0).addClass('round_on');
        }
        $('.round').eq(num - 1).addClass('round_on');
    });

    $('.prev').click(function () {
        num--;
        if (num == -1) {
            num = img_c - 3;
            $('.slide').css({ left: -img_w * (img_c - 2) + '%' });
        }
        $('.slide').stop().animate({ left: -img_w * num + '%' }, 500);
        $('.round').removeClass('round_on');
        $('.round').eq(num - 1).addClass('round_on');
    });

    $('.round').click(function () {
        num = $(this).index() + 1;
        $('.slide').stop().animate({ left: -img_w * num + '%' });
        $('.round').removeClass('round_on');
        $(this).addClass('round_on');
    });

    function autoSlide() {
        $('.next').trigger('click');
    }
    playSlide = setInterval(autoSlide, 5000);


    // today menu
    $('.today_menu').click(function () {
        var menu_c = $(this).index();

        $('.today_menu').removeClass('menu_on');
        $(this).addClass('menu_on');

        $('.today_item').hide();
        $('.today_item').eq(menu_c).show();
    });



    // Responsive Web Design
    $(window).resize(function () {
        if (window.innerWidth > 767) {

            // nav fixed
            $('nav').addClass('nav_fixed');
            $('.nav_fixed').css('position', 'absolute');
            $('.nav_fixed').css('top', '150px');

            $(window).scroll(function () {
                if ($(this).scrollTop() > 190) {
                    $('.nav_fixed').css('position', 'fixed');
                    $('.nav_fixed').css('top', '0');
                } else {
                    $('.nav_fixed').css('position', 'absolute');
                    $('.nav_fixed').css('top', '150px');
                }
            });

            // sub menu
            $('.submenu').removeClass('submenu_t');
            $('.submenu').addClass('submenu_pc');

            $('.menu').mouseenter(function () {
                $('.submenu_pc').stop().slideDown();
            });
            $('nav').mouseleave(function () {
                $('.submenu_pc').stop().slideUp();
            });

            $('.submenu').mouseenter(function () {
                $(this).siblings('.menu>a').css('color', '#ff5f74');
            });
            $('.submenu').mouseleave(function () {
                $(this).siblings('.menu>a').css('color', '#333');
            });

            $('nav').css('left', '0');


        } else {

            // nav fixed remove
            $('nav').removeClass('nav_fixed');
            $('nav').css('position', 'fixed');
            $('nav').css('top', '0');
            $('nav').css('left', '-80%');

            // sub menu
            $('.submenu').removeClass('submenu_pc');
            $('.submenu').addClass('submenu_t');

            $('.menu').click(function () {
                $('.submenu_t').stop().slideUp();
                $(this).children('.submenu_t').stop().slideToggle();
            });

            // hamberger menu
            $('.ham').click(function () {
                $('nav').stop().animate({ left: '0' }, 300);
            });
            $('.nav_close').click(function () {
                $('nav').stop().animate({ left: '-80%' }, 300);
            });
            $(document).mouseup(function (e) {
                if ($('nav').has(e.target).length === 0) {
                    $('nav').stop().animate({ left: '-80%' }, 300);
                }
            });
        }
    }).resize();



    // review box size
    var box_w = $('.small_review').css('width');
    $('.small_review').css('height', box_w);

    var resizeTimer;
    $(window).bind('resize', function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resizeFunction, 0);
    });

    function resizeFunction() {
        var box_w = $('.small_review').css('width');
        $('.small_review').css('height', box_w);
    }

});
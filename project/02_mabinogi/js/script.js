$(function () {
    
    // top btn
    $('.top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 300);
        return false;
    });

    // slide
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    function autoSlide() {
        $('.slick-next').trigger('click');
    }
    playSlide = setInterval(autoSlide, 5000);

    $('.list_btn').click(function () {
        $('.list_wrap').stop().fadeIn();
    });
    $('.list_close').click(function () {
        $('.list_wrap').stop().fadeOut();
    });

    // ad item day
    var days = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    var today = new Date();
    var yoil = days[today.getDay()];
    $('.day').text(yoil);

    if (yoil == '일요일') {
        $('.item_list').hide();
        $('.sun').show();
    } else if (yoil == '월요일') {
        $('.item_list').hide();
        $('.mon').show();
    } else if (yoil == '화요일') {
        $('.item_list').hide();
        $('.tue').show();
    } else if (yoil == '수요일') {
        $('.item_list').hide();
        $('.wed').show();
    } else if (yoil == '목요일') {
        $('.item_list').hide();
        $('.thu').show();
    } else if (yoil == '금요일') {
        $('.item_list').hide();
        $('.fri').show();
    } else if (yoil == '토요일') {
        $('.item_list').hide();
        $('.sat').show();
    }

    // banner
    var num = 1;
    var img_c = 4;
    var img_h = 100;
    $('.banner').css('bottom', '100%');
    $('.next').click(function () {
        num++;
        if (num == img_c) {
            num = 2;
            $('.banner').css('bottom', '100%');
        }
        $('.banner').stop().animate({ bottom: img_h * num + '%' }, 500);
    });
    $('.prev').click(function () {
        num--;
        if (num == -1) {
            num = img_c - 3;
            $('.banner').css('bottom', '200%');
        }
        $('.banner').stop().animate({ bottom: img_h * num + '%' }, 500);
    });

    function autoBanner() {
        $('.next').trigger('click');
    }
    playBanner = setInterval(autoBanner, 5000);

    // lank
    var lankH = $('.lanker ul').css('height');
    $('.lanker').css('height', lankH)

    $('.lank button').click(function () {
        $('.lank button').stop().removeClass('btn_active');
        $(this).stop().addClass('btn_active');
    });
    $('.score_btn').click(function () {
        $('.lanker ul').animate({ top: '-100%' }, 300);
        $('.score_btn').text('제작 점수 랭킹');
        $('.damage_btn').text('최대 대미지 랭킹 보기');
    });
    $('.damage_btn').click(function () {
        $('.lanker ul').animate({ top: '0' }, 300);
        $('.score_btn').text('제작 점수 랭킹 보기');
        $('.damage_btn').text('최대 대미지 랭킹');
    });

    // user style
    var heartC = 0;

    $('.heart_wrap').click(function () {

        if (heartC == 0) {

            $('.heart').html('♥<span class="hide">좋아요 취소</span>');
            $('.s_heart').css('bottom', '20px');
            $('.s_heart').css('transition', '1s');
            heartC = 1;

        } else {

            $('.heart').html('♡<span class="hide">좋아요</span>');
            $('.heart1').css('bottom', '-20px');
            $('.heart2').css('bottom', '-60px');
            $('.heart3').css('bottom', '-30px');
            $('.s_heart').css('transition', 'none');
            heartC = 0;

        }
    });

    // abil
    $('.abil_icon li').click(function () {
        var abilC = $(this).index();
        $('.img_txt li').stop().fadeOut();
        $('.img_txt li').eq(abilC).stop().fadeIn();
        $('.abil_icon li').removeClass('abil_on');
        $(this).addClass('abil_on');
    });

    


    // Responsive Web Design
    $(window).resize(function () {
        if (window.innerWidth > 1024) {
            console.log("크당")

            // menu
            $('.menu>li>a').mouseenter(function () {
                $('.submenu').stop().fadeIn();
                $('.menubg').stop().fadeIn();
                $('.menu>li').css('border-left', '1px solid rgba(255, 255, 255, .1)')
            });
            $('nav').mouseleave(function () {
                $('.submenu').stop().fadeOut();
                $('.menubg').stop().fadeOut();
                $('.menu>li').css('border-left', '1px solid transparent')
            });
            $('.submenu').mouseenter(function () {
                $(this).siblings('a').css('color', '#beb8e6');
            });
            $('.submenu').mouseleave(function () {
                $('.submenu').siblings('a').css('color', '#fff');
            });

            // scroll nav fixed
            $(window).scroll(function () {
                if ($(this).scrollTop() > 40) {
                    $('header').css('position', 'fixed');
                    $('header').css('top', '0');
                    $('header').css('background', 'rgba(0, 0, 0, .5)');
                } else {
                    $('header').css('position', 'absolute');
                    $('header').css('top', '40px');
                    $('header').css('background', 'transparent');
                }
            });

        } else {
            console.log("작당")

            $('.menu>li>a').click(function () {
                $('.submenu').stop().slideUp(200);
                $(this).siblings('.submenu').stop().slideToggle(200);
            });

            $('.mabi_ham').click(function () {
                $('.menu_wrap').stop().animate({ 'right': 0 }, 300);
                $('.modalbg').stop().fadeIn(300);
            });

            $('.mabi_close').click(function () {
                $('.menu_wrap').stop().animate({ 'right': '-80%' }, 300);
                $('.modalbg').stop().fadeOut(300);
            });

            $(document).mouseup(function (e) {
                if ($('.menu_wrap').has(e.target).length === 0) {
                    $('.menu_wrap').stop().animate({ 'right': '-80%' }, 300);
                    $('.modalbg').stop().fadeOut(300);
                }
            });

            $(document).keydown(function (e) {
                var code = e.keyCode || e.which;
                if (code == 27) {
                    $('.menu_wrap').stop().animate({ 'right': '-50%' }, 300);
                    $('.modalbg').stop().fadeOut(300);
                }
            });
        }
    }).resize();

});
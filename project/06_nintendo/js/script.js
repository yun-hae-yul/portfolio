$(document).ready(function () {

    // Responsive Web Design
    if (matchMedia('screen and (max-width: 767px)').matches) {
        // console.log('mobile');

        // nav menu tablet
        $('.m_menu').click(function () {
            $('nav').stop().slideToggle(300);
        });
        $('.category>a').click(function () {
            $(this).siblings('.subclass').stop().slideToggle(300);
            $('.category>a').not(this).siblings('.subclass').stop().slideUp(300);
        });
        $('.category').click(function () {
            $(this).toggleClass('on');
            $('.category').not(this).removeClass('on');
        });

        // bottom menu
        $('.main_txt').click(function () {
            $(this).siblings('.menu_txt').stop().slideToggle(200);
            $(this).toggleClass('main_txt_on');
        });
        $('.main_txt').click(function () {
            $('.main_txt').not(this).siblings('.menu_txt').slideUp(200);
            $('.main_txt').not(this).removeClass('main_txt_on');
        });

    } else if (matchMedia('screen and (max-width: 1200px)').matches) {
        // console.log('tablet');

        // nav menu tablet
        $('.m_menu').click(function () {
            $('nav').stop().slideToggle(300);
        });
        $('.category>a').click(function () {
            $(this).siblings('.subclass').stop().slideToggle(300);
            $('.category>a').not(this).siblings('.subclass').stop().slideUp(300);
        });
        $('.category').click(function () {
            $(this).toggleClass('on');
            $('.category').not(this).removeClass('on');
        });

        // bottom menu
        $('.main_txt').click(function () {
            $(this).siblings('.menu_txt').stop().slideToggle(200);
        });
        $('.main_txt').click(function () {
            $('.main_txt').not(this).siblings('.menu_txt').slideUp(200);
        });

    } else if (matchMedia('screen and (min-width: 1220px)').matches) {
        // console.log('desktop');

        // nav menu pc
        $('.category').mouseenter(function () {
            $(this).children('.subclass').stop().slideDown();
        });
        $('.category, .subclass').mouseleave(function () {
            $(this).children('.subclass').stop().slideUp();
        });

    }

    window.onresize = function () {
        document.location.reload();
    };

    // nav search
    $('.nav_search_btn').click(function () {
        $('.search_area').animate({ top: '0' }, 400, 'easeOutBack');
    });
    $('.search_close').click(function () {
        $('.search_area').animate({ top: '-150px' }, 700, 'easeInOutBack');
    });

    // slide html
    $('.img_wrap').slick();
    $('.slick-prev').text('이전');
    $('.slick-next').text('다음');
    $('.slick-next').after('<p class="page"><span class="count">1</span>/3</p>');

    // slide count
    var slideIndex = 1;
    $('.slick-next').click(function () {
        slideIndex++;

        if (slideIndex <= 3) {
        } else {
            slideIndex = 1;
        }

        $('.count').html(slideIndex);
    });
    $('.slick-prev').click(function () {
        slideIndex--;

        if (slideIndex <= 0) {
            slideIndex = 3;
        }

        $('.count').html(slideIndex);
    });

    // auto slide
    function autoSlide() {
        $('.slick-next').trigger('click');
    }
    setInterval(autoSlide, 5000);

    // mobile main section slide
    $('.m_cont_list').slick({
        slidesToShow: 1
    });

    // top btn
    $('.top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 700);
        return false;
    });
});
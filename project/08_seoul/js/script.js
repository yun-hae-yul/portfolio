$(function () {

	// top btn
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.top').css('opacity', '1');
			$('.top').css('bottom', '90px');
		} else {
			$('.top').css('opacity', '0');
			$('.top').css('bottom', '-34px');
		}
	});

	$('.top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	$('.banner_menu button').click(function () {
		$('.banner_menu button').removeClass('on');
		$(this).toggleClass('on');
	});

	$('.main_news').click(function(){
		$('.city_img').hide();
		$('.main_img').show();
	});
	$('.citizen').click(function(){
		$('.main_img').hide();
		$('.city_img').show();
	});
});
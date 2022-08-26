$(document).ready(function(){

	// full page
	var ht = $(window).height();
	$('.fullpage').height(ht);
	
	$(window).resize(function () {
		var ht = $(window).height();
		$('.fullpage').height(ht);
	});


	// menu click
	$('.menu').click(function () {
		var ht = $(window).height();
		var i = $(this).index();
		var newTop = i * ht;
		$('html,body').stop().animate({ 'scrollTop': newTop }, 1000, 'easeInOutBack');
	});


	// menu focus
	$(window).scroll(function () {
		var sct = $(window).scrollTop();
		var menu = $('.menu');
		var contents = $('.fullpage');

		if (sct >= contents.eq(6).offset().top) {
			menu.removeClass('on');
			menu.eq(6).addClass('on');
		} else if (sct >= contents.eq(5).offset().top) {
			menu.removeClass('on');
			menu.eq(5).addClass('on');
		} else if (sct >= contents.eq(4).offset().top) {
			menu.removeClass('on');
			menu.eq(4).addClass('on');
		} else if (sct >= contents.eq(3).offset().top) {
			menu.removeClass('on');
			menu.eq(3).addClass('on');
		} else if (sct >= contents.eq(2).offset().top) {
			menu.removeClass('on');
			menu.eq(2).addClass('on');
		} else if (sct >= contents.eq(1).offset().top) {
			menu.removeClass('on');
			menu.eq(1).addClass('on');
		} else if (sct >= contents.eq(0).offset().top) {
			menu.removeClass('on');
			menu.eq(0).addClass('on');
		}
	});


	// mouse wheel
	$(window).scroll(function () {
		$('.fullpage').mousewheel(function (event, delta) {
			if (delta > 0) {
				var prev = $(this).prev().offset().top;
				$('html,body').stop().animate({ 'scrollTop': prev }, 1000, 'easeInOutBack');
			} else if (delta < 0) {
				var next = $(this).next().offset().top;
				$('html,body').stop().animate({ 'scrollTop': next }, 1000, 'easeInOutBack');
			}
		});
	});

});
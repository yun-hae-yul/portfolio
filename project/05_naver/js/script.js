$(function () {

	// auto complete
	$('.autoBox').hide();
	var auto_count = 0;
	$('.autoComplete').click(function () {

		if (auto_count == 1) {
			$('.autoBox').stop().hide();
			$('.autoComplete i').css('background-position', '-96px -296px');
			auto_count = 0;
		} else {
			$('.autoBox').stop().show();
			$('.autoComplete i').css('background-position', '-108px -296px');
			auto_count = 1;
		}
	});

	// all menu
	var menu_count = 0;
	$('.allMenu').hide();
	$('.btnArea').hide();
	$('.moreBtn').click(function () {
		if (menu_count == 1) {
			$('.allMenu').stop().hide();
			$('.btnArea').stop().hide();
			$('.present').stop().show();
			$('.moreBtn').html('더보기<i class="more_icon"></i>');
			$('.moreBtn').css('color', '#202020');
			$('.moreBtn i').css('background-position', '-83px -296px');
			menu_count = 0;
		} else {
			$('.allMenu').stop().show();
			$('.btnArea').stop().show();
			$('.present').stop().hide();
			$('.moreBtn').html('접기<i class="more_icon"></i>');
			$('.moreBtn').css('color', '#0ecd5a');
			$('.moreBtn i').css('background-position', '-70px -296px');
			menu_count = 1;
		}
	});

	// time cast
	var count = $('.menuList li.menuOn').index();

	$('.menuList li').click(function () {
		var menuC = $(this).index();
		$('.menuList li').removeClass('menuOn');
		$(this).addClass('menuOn');
		$('.section').hide();
		$('.section').eq(menuC).show();
		count = $(this).index();

		if (menuC > 0) {
			$('.timecastBtn .prev').show();
		} else {
			$('.timecastBtn .prev').hide();
		};
	});

	$('.timecastBtn .next').click(function () {
		count++;
		$('.menuList li').removeClass('menuOn');
		$('.menuList li').eq(count).addClass('menuOn');
		$('.timecastBtn .prev').show();
		if (count == 8) {
			count = 0;
			$('.menuList li').eq(count).addClass('menuOn');
			$('.timecastBtn .prev').hide();
		};
	});

	$('.timecastBtn .prev').click(function () {
		count--;
		$('.menuList li').removeClass('menuOn');
		$('.menuList li').eq(count).addClass('menuOn');

		console.log(count)

		if (count == -1) {
			count = 7;
			$('.menuList li').eq(count).addClass('menuOn');
		};
		if (count == 0) {
			$('.timecastBtn .prev').hide();
		};
	});

	// content
	$('.moreCont').click(function () {
		$('.moreArea').hide();
		$('.moreMedia').show();
	});

});
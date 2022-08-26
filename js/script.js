$(document).ready(function () {

	// logo wink
	$('.logo').mouseenter(function () {
		$('.logo img').attr('src', 'images/logo_on.png');
	});
	$('.logo').mouseleave(function () {
		$('.logo img').attr('src', 'images/logo.png');
	});


	// hamberger btn click
	var ham = 1;
	$('.ham_btn').click(function () {
		$(this).find('.bar').toggleClass('active');
		if (ham == 1) {
			$('.gnb').stop().slideDown(600);
			ham = 0;
		} else {
			$('.gnb').stop().slideUp(600);
			ham = 1;
		}
	});


	// nav scroll background
	$(window).scroll(function () {
		var about = $('#about').offset().top;
		var winTop = $(document).scrollTop();
		if (about <= winTop) {
			$('nav').css('background', '#fff');
		} else {
			$('nav').css('background', 'rgba(255, 255, 255, .9)');
		}
	});


	// intro, about, contact page full page
	var winHt = $(window).height();
	$('#intro').height(winHt);
	$('#about').height(winHt);
	$('#contact').height(winHt);

	$(window).resize(function () {
		let winHt = $(window).height();
		$('#intro, #about, #contact').height(winHt);
	})


	// 반응형
	// window.onresize = function () {
	// 	document.location.reload();
	// };


	// menu click scroll
	var intro = $("#intro").offset().top;
	var about = $("#about").offset().top;
	var pb = $("#pb").offset().top;
	var dg = $("#dg").offset().top;
	var contact = $("#contact").offset().top;

	$('.intro').click(function () {
		$('html, body').stop().animate({ scrollTop: intro }, 500);
	});
	$('.about').click(function () {
		$('html, body').stop().animate({ scrollTop: about }, 500);
	});
	$('.pb').click(function () {
		$('html, body').stop().animate({ scrollTop: pb }, 500);
	});
	$('.dg').click(function () {
		$('html, body').stop().animate({ scrollTop: dg }, 500);
	});
	$('.contact').click(function () {
		$('html, body').stop().animate({ scrollTop: contact }, 500);
	});


	// menu color
	$(window).scroll(function () {
		var height = $(document).scrollTop();
		if (contact <= height) {
			$('.q_menu').removeClass('q_on');
			$('.menu').removeClass('menu_on');
			$('.q_menu.contact').addClass('q_on');
			$('.menu.contact').addClass('menu_on');
		} else if (dg <= height) {
			$('.q_menu').removeClass('q_on');
			$('.menu').removeClass('menu_on');
			$('.q_menu.dg').addClass('q_on');
			$('.menu.dg').addClass('menu_on');
		} else if (pb <= height) {
			$('.q_menu').removeClass('q_on');
			$('.menu').removeClass('menu_on');
			$('.q_menu.pb').addClass('q_on');
			$('.menu.pb').addClass('menu_on');
		} else if (about <= height) {
			$('.q_menu').removeClass('q_on');
			$('.menu').removeClass('menu_on');
			$('.q_menu.about').addClass('q_on');
			$('.menu.about').addClass('menu_on');
		} else if (intro <= height) {
			$('.q_menu').removeClass('q_on');
			$('.menu').removeClass('menu_on');
			$('.q_menu.intro').addClass('q_on');
			$('.menu.intro').addClass('menu_on');
		}
	});


	// scroll btn
	$('.scroll_btn').click(function () {
		var aboutTop = $('#about').offset().top;
		$('html, body').animate({ scrollTop: aboutTop }, 1000);
		return false;
	});


	// top btn
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.top').fadeIn(200);
		} else {
			$('.top').fadeOut(200);
		}
	});

	$('.top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutBack');
	});


	// publishing project more btn show, hide
	$('.more').click(function () {
		$('.pb_project:nth-child(n+7)').stop().fadeToggle();
	});


	// publishing project more btn text
	var more = 1;
	$('.more').click(function () {
		if (more == 1) {
			$(this).text('접기')
			more = 0;
		} else {
			$(this).text('더 보기')
			more = 1;
		}
	});


	// project click modal show
	$('.pb_project').click(function () {
		var pj = $(this).index();
		$('.modal').show();
		$('.modal_box').hide();
		$('.modal_box').eq(pj).show();
	});


	// modal close
	$('.close').click(function () {
		$('.modal').hide();
	});

	$(document).mouseup(function (e) {
		if ($('.modal').has(e.target).length === 0) {
			$('.modal').hide();
		}
	});


	// modal ecs
	$(document).keydown(function (e) {
		var code = e.keyCode || e.which;
		if (code == 27) {
			$('.modal').hide();
		}
	});


	// email copy
	function emailCopy(val) {
		var e = document.createElement('textarea');
		document.body.appendChild(e);
		e.value = val;
		e.select();
		document.execCommand('copy');
		document.body.removeChild(e);
	}
	$('.email').click(function () {
		emailCopy('haeud@naver.com');
		alert('이메일 주소를 복사했어요!');
	});


	// phone number copy
	function phoneCopy(val) {
		var p = document.createElement('textarea');
		document.body.appendChild(p);
		p.value = val;
		p.select();
		document.execCommand('copy');
		document.body.removeChild(p);
	}
	$('.phone').click(function () {
		phoneCopy('010-****-2292');
		alert('휴대폰 번호를 복사했어요!');
	});

	//
	$('.alert').click(function(){
		alert('초기 시안으로, 실제 작업물과 다소 차이가 있을 수 있는 점 참고 부탁 드립니다.');
	});

	$('.cv_btn').click(function(){
		alert('준비 중입니다!');
	});

});
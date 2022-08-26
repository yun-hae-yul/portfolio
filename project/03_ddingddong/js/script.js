// 드로어 메뉴
$(function(){

	// *----------- 메뉴 드로어 버튼 열고 닫기 -----------*
	
	$(".drawerBtn").click(function(){
		$(".drawerClick").show(0);
	});
	
	$(".drawerClose").click(function(){
		$(".drawerClick").hide(0);
	});
	
	
	
	// *----------- 메뉴 드로어 버튼 메뉴 열고 접기 -----------*

	$(".drawerSebMenu").hide();
	
		var menu1=1;
		var menu2=1;
		var menu3=1;
	$(".drawerMenu1").click(function(){
		
		if(menu1==1){
			$(".drawerSebMenu1").slideDown(200).show(0);
			menu1=0;
		
		}else{
			$(".drawerSebMenu1").slideUp(200).hide(0);
			menu1=1;
		}
		
	});
	
	$(".drawerMenu2").click(function(){
		
		if(menu2==1){
			$(".drawerSebMenu2").slideDown(200).show(0);
			menu2=0;
		
		}else{
			$(".drawerSebMenu2").slideUp(200).hide(0);
			menu2=1;
		}
		
	});
	
	$(".drawerMenu3").click(function(){
		
		if(menu3==1){
			$(".drawerSebMenu3").slideDown(200).show(0);
			menu3=0;
		
		}else{
			$(".drawerSebMenu3").slideUp(200).hide(0);
			menu3=1;
		}
		
	});
	
	
	// *----------- 메뉴 클릭 시 메뉴 드로어 버튼 숨기기 -----------*
	
	$(".drawerSebMenu").click(function(){
		
		$(".drawerClick").hide(0);
		
	});
	

});

// 슬라이드 배너
$(function(){
	
	$(".slideImg").css("left","-100%");

	var n=1;
	var img_c=5;
	var img_w=100;
	
	// 다음 버튼을 클릭하면
	$(".rightSlide").click(function(){
		
		n++;
		if(n==img_c){
			n=2;
			$(".slideImg").css("left","-100%");
		}

		$(".slideImg").stop().animate({left:-img_w*n+"%"},500);

	});
	
	// 이전 버튼을 클릭하면
	$(".leftSlide").click(function(){
		
		n--;
		if(n==-1){
			n=img_c-3;
			$(".slideImg").css({left:-img_w*(img_c-2)+"%"});
		}

		$(".slideImg").stop().animate({left:-img_w*n+"%"},500);

	});

	// 5초마다 자동으로 슬라이드
	function autoSlide(){
		$(".rightSlide").trigger("click");
	}
	playSlide=setInterval(autoSlide,5000);

});

// 인스타 슬라이드
$(function(){
	
	$(".instagramImg").css("left","-210px");

	var insta_n=1;
	var insta_img_c=5;
	var insta_img_w=210;
	
	// 다음 버튼을 클릭하면
	$(".rightBtn").click(function(){
		
		insta_n++;
		if(insta_n==insta_img_c){
			insta_n=1;
			$(".instagramImg").css("left","0");
		};

		$(".instagramImg").stop().animate({left:-insta_img_w*insta_n+"px"},1000);

	});
	
	// 이전 버튼을 클릭하면
	$(".leftBtn").click(function(){
		
		insta_n--;
		if(insta_n==-1){
			insta_n=insta_img_c-2;
			$(".instagramImg").css("left","-840px");
		}

		$(".instagramImg").stop().animate({left:-insta_img_w*insta_n+"px"},1000);

	});

	// 자동으로 슬라이드
	function autoInstaSlide(){
		$(".rightBtn").trigger("click");
	}
	playSlide=setInterval(autoInstaSlide,2000);
	
	// 멈춤 버튼을 클릭하면
	var slide=1;
	$(".stopBtn").click(function(){
		
		if(slide==1){
			clearInterval(playSlide);
			$(".stopBtn").css("background","url(images/insta_play.png) no-repeat center center");
			slide=0;
			
		}else{
			playSlide=setInterval(autoInstaSlide,5000);
			$(".stopBtn").css("background","url(images/insta_stop.png) no-repeat center center");
			slide=1;
		}
		
	});

});

// 가맹 클릭 이동
$(function(){
	
	// 메뉴 내에서
	$("#franchise .menuList li:nth-child(1) a").click(function(){
		
		$(".franchiseContent2").hide(0);
		$(".franchiseContent3").hide(0);
		$(".franchiseContent1").show(0);

	});
	
	$("#franchise .menuList li:nth-child(2) a").click(function(){
		
		$(".franchiseContent1").hide(0);
		$(".franchiseContent3").hide(0);
		$(".franchiseContent2").show(0);

	});
	
	$("#franchise .menuList li:nth-child(3) a").click(function(){
		
		$(".franchiseContent1").hide(0);
		$(".franchiseContent2").hide(0);
		$(".franchiseContent3").show(0);

	});
	
	
	// 드로어 메뉴에서
	$(".drawerSebMenu3 li:nth-child(1) a").click(function(){

		$(".franchiseContent2").hide(0);
		$(".franchiseContent3").hide(0);
		$(".franchiseContent1").show(0);

	});
	
	$(".drawerSebMenu3 li:nth-child(2) a").click(function(){

		$(".franchiseContent1").hide(0);
		$(".franchiseContent3").hide(0);
		$(".franchiseContent2").show(0);

	});
	
	$(".drawerSebMenu3 li:nth-child(3) a").click(function(){

		$(".franchiseContent1").hide(0);
		$(".franchiseContent2").hide(0);
		$(".franchiseContent3").show(0);

	});
	
});

// 준비 중
$(function(){
	
	$(".headerRight a").click(function(){alert("준비 중입니다.");});
	$(".drawerSebMenu1 li:nth-child(2) a").click(function(){alert("준비 중입니다.");});
	$(".drawerMenu4 h2").click(function(){alert("준비 중입니다.");});
	$(".top").click(function(){alert("준비 중입니다.");});
	
});

// input
$(function(){
	// $("div").removeClass("ui-input-text");
	// $("div").removeClass("ui-body-inherit");
	// $("div").removeClass("ui-corner-all");
	// $("div").removeClass("ui-shadow-inset");
	// $("div").removeClass("ui-btn");
	// $("div").removeClass("ui-icon-carat-d");
	// $("div").removeClass("ui-btn-icon-right");
	// $("div").removeClass("ui-shadow");
	// $("div").removeClass("ui-checkbox");
	// $("div").removeClass("formContent");
	// $("div").removeClass("ui-input-btn");
	// $("div").removeClass("ui-loader");
	// $("div").removeClass("ui-body-a");
	// $("div").removeClass("ui-loader-default");
	// $("#franchise .labelClass").removeClass("ui-btn");
	// $("#franchise .labelClass").removeClass("ui-corner-all");
	// $("#franchise .labelClass").removeClass("ui-btn-inherit");
	// $("#franchise .labelClass").removeClass("ui-btn-icon-left");
	// $("#franchise .labelClass").removeClass("ui-checkbox-off");
	
	// $("#franchise .labelClass").click(function(){
		// $("#franchise .labelClass").removeClass("ui-btn-icon-left");
		// $("#franchise .labelClass").removeClass("ui-checkbox-on");
	// });
});


/* =======================
 click and smooth slidert
 ========================*/
$(function() {

	$(".scroll").click(function(event){

		event.preventDefault();
        
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html, body').animate({scrollTop:target_top}, 500);
	});
	
});
/** end of Function **/


/* ==============================================
 menu bar anchor hover effect
 ===============================================*/
function hoverEffect(){
	
	var divSet1 = "#menu a";
	var divSet2 = ".navi a";
	var divSet3 = "#backscroll a";
	var divSet4 = "#sns a";
	var speed = "fast";
	
	$(divSet1).hover(
			function(){$(this).stop(true, true).animate({opacity: 0.5}, speed);}, 
			function(){$(this).stop(true, true).animate({opacity: 1}, speed);}
		); 
	$(divSet2).hover(
			function(){$(this).stop(true, true).animate({opacity: 0.5}, speed);}, 
			function(){$(this).stop(true, true).animate({opacity: 1}, speed);}
		); 
	$(divSet3).hover(
			function(){$(this).stop(true, true).animate({opacity: 0.5}, speed);}, 
			function(){$(this).stop(true, true).animate({opacity: 1}, speed);}
	); 
	
	$(divSet4).hover(
			function(){$(this).stop(true, true).animate({opacity: 0.5}, speed);}, 
			function(){$(this).stop(true, true).animate({opacity: 1}, speed);}
	); 

}

/* ==============================================
 Check whether clienet device is iPhone or not 
 ===============================================*/
function checkDevice(){

	num = 0;

	if ((navigator.userAgent.indexOf('iPhone') > 0 ) 
		|| navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0) {
		
		num = 1;
		
	}else{
	
		num = 0;

	}
	
	return num;

}

/* =======================
 pre-loader activate
 ========================*/
function ImageLoader(){

	// Do not this process if device was iPhone or simillar //
	if (checkDevice() == 0){
	
		$('#header-line').css({"width": "0px"});
		$('#logo').css({opacity: 0});
		$('#menu').css({opacity: 0});
		$('#wrapper').hide();
		$('.global').hide();

		var timer;
		$('body').jpreLoader({
			splashID: "#jSplash",
			splashFunction: function() {  //passing Splash Screen script to jPreLoader
				$('#jSplash').children('section').not('.selected').hide();
				$('#jSplash').hide().fadeIn(300);
				
				timer = setInterval(function() {
					splashRotator();
				}, 5000);
			}
		}, function() {	//jPreLoader callback function
			clearInterval(timer);
			
			$('#header-line').animate({"width":"970px"}, 1500, function() {
				$('#logo').animate({opacity:1}, 500, function() {
					$('#menu').animate({opacity:1}, 500, function() {
					
						$('#wrapper').fadeIn(2500);
						$('.global').fadeIn(2500);
						
					});
				});
			});
		});
	}else{
		$('#jSplash').css('display', 'none').remove();
	}
}

/* =======================
 pre-loader movie control
 ========================*/
function splashRotator(){

	var cur = $('#jSplash').children('.selected');
	var next = $(cur).next();

	if($(next).length != 0) {
		$(next).addClass('selected');
	} else {
		$('#jSplash').children('section:first-child').addClass('selected');
		next = $('#jSplash').children('section:first-child');
	}
	
	$(cur).removeClass('selected').fadeOut(800, function() {
		$(next).fadeIn(800);
	});
}
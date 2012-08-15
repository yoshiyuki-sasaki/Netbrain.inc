/* ==============================================
 click and smooth scroll
 ===============================================*/
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
/* ==============================================
 menu bar anchor hover effect
 ===============================================*/
function HoverEffect(){
	
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
 Check clienet device for only smart-phone
 ===============================================*/
function checkDevice(){

	num = 0;

	if ((navigator.userAgent.indexOf('iPhone') > 0 ) 
		|| navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0) {
		
		num = 1;
		
	}else{ num = 0; }
	
	return num;
}
/* ==============================================
 Pre Image loader activated
 ===============================================*/
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
						$('.global').fadeIn(3000);
						
						// Add Image Gallery After finished loading contents and images//
						ImageGallery();
						
					});
				});
			});
		});
	}else{
		$('#jSplash').css('display', 'none').remove();
	}
}
/* ==============================================
 Pre Loading image controll
 ===============================================*/
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
/* ==============================================
 Image-gallery for IE or modern browser
 ===============================================*/
 function ImageGallery(){
 
	// Do not inculde IE //
	
 	//if($.browser.webkit || $.browser.mozilla) {//
	if(getInternetExplorerVersion() < 0){
	
		// Activet 3D-image gallery  //
		$('#2D-gallery').remove();
		$('#gallery-box').gallery();
		
	// If user agent is IE //
	}else{

		$('#gallery-box').remove();
		
		var IEversion = getInternetExplorerVersion();
		
		// Change page layout for only IE 8.0 //
		if(IEversion <= 8.0 ){

			$('#page').css({"background-color": "#282828","width": "1280px", "height":"620px"});
		
		// Change page layout for only IE 9.0 and 10//
		// IE9 もしくは 10でレイアウトが崩れるときはここで修正 //
		}else if(IEversion > 8.0 ){
		
		    $('#page').css({"background-color": "#282828","width": "1280px", "height":"620px"});
				
		}
		
		$("#2D-gallery").sliderkit({auto:true, shownavitems:3, start:1 });

	}
 
 }
 /* ==============================================
Check IE browser version
 ===============================================*/
 function getInternetExplorerVersion()
// Returns the version of Windows Internet Explorer or a -1
// (indicating the use of another browser).
{
   var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
   return rv;
}
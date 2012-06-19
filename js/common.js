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

/* =======================
 pre-loader activate
 ========================*/
function ImageLoader(){

	var timer;
	$('body').jpreLoader({
		splashID: "#jSplash",
		splashFunction: function() {  //passing Splash Screen script to jPreLoader
			$('#jSplash').children('section').not('.selected').hide();
			$('#jSplash').hide().fadeIn(800);
			
			timer = setInterval(function() {
				splashRotator();
			}, 5000);
		}
	}, function() {	//jPreLoader callback function
		clearInterval(timer);
	});
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



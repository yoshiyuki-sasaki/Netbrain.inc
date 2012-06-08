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
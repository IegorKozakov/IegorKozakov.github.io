$( document ).ready(function() {
	$('.main_page_intro').css('opacity', '1');
});

$('.details-btn').click(function() {

	$('.main_page_intro').css('top', '-999px');
	
	setTimeout(function () {
 	window.location.href = "description.html"}, 1000 );


 	return false;
});
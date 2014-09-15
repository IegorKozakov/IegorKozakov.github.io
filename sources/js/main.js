$( document ).ready(function() {
	$('.main_page_intro').css('opacity', '1');
});

$('.home').click(function(){
	location.reload();
});

$('.details-btn').click(function() {

	$('.main_page_intro').css('top', '-999px');
	
	setTimeout(function () {
 	$('.intrio-slide-wrap').css('opacity', 0);
 	$('.description-slide').css('opacity', 1);
 	}, 1000 );

	setTimeout(function () {
		$('.content').show();
		$('.nav-bock').css("top", "30px");
	}, 1000);
	
	setTimeout(function () {
		$('.intrio-slide-wrap').hide();
	}, 2000);

	setTimeout(rotate, 1000);

 	return false;
});

function rotate() {
	$('.nav-bock').css({
		'-moz-transform': 'rotate(0deg)', 
		'-ms-transform': 'rotate(0deg)',
		'-webkit-transform': 'rotate(0deg)',
		'-o-transform': 'rotate(0deg)',
		'transform': 'rotate(0deg)',
		'top': '10px'
	})
}
$( document ).ready(function() {
    $('.nav-bock').css("top", "20px");

    setTimeout(rotate, 500);
 	

 	function rotate() {
 		$('.nav-bock').css({
 			'-moz-transform': 'rotate(0deg)', 
 			'-ms-transform': 'rotate(0deg)',
    		'-webkit-transform': 'rotate(0deg)',
    		'-o-transform': 'rotate(0deg)',
 			'transform': 'rotate(0deg)',
 			'top': '0'
 		})
 	}
});

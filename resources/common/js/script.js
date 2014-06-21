// ======================= centering the main div ======================= \\

var wrapper_width = document.getElementById("wrapper").offsetWidth,
content =  document.getElementById("content");

var content_margin_left;
var content_margin_top;

 if (wrapper_width > 750) {
	content.style.width = 750 + "px";
 };

var content_height = document.getElementById("content").offsetHeight,
content_width = document.getElementById("content").offsetWidth;

content_margin_left = content_width/2;
content.style.marginLeft = - + content_margin_left + "px";
content_margin_top = content_height/2;
content.style.marginTop = - + content_margin_top + "px";


// ======================= END centering the main div ======================= \\


// ======================= Hide Content div ======================= \\

function content_hide () {
		content.style.top = - + 100 + '%';
};

// ======================= END Hide Content div ======================= \\

// ======================= Show nav menu =======================\\
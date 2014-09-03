
var btnDetails = document.getElementsByClassName('details-btn');

function moveToTop(el) {
	el.width(100 + "%");
};

btnDetails.onClick(moveToTop(btnDetails));
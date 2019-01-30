function show(e){
	var next =document.getElementById(e);
	next.style.display="block";

}
function hide(e){
	var next =document.getElementById(e);
	next.style.display="none";

}

$(document).ready(function () {
	        var menuYloc = $("#menu_right").offset().top; //此ID为随着屏幕滚动div的ID
	        $(window).scroll(function () {
	            var offsetTop = menuYloc + $(window).scrollTop() + "px";
	            $("#menu_right").animate({ top: offsetTop }, { duration: 600, queue: false }); //此ID为随着屏幕滚动div的ID
	        });
	    });
	
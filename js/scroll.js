$(document).ready(function() {
	$(document).scroll(function() {
     if ($(this).scrollTop() > 400) {
         $('#scroll-top').fadeIn(400);
     } else {
         $('#scroll-top').fadeOut(400);
     }

 });
	
	$('#scroll-top').click(function() {
        $("html, body").animate({scrollTop: 0}, 500, 'swing');
    });

    $("#navbar-1 li").click(function() {
        $('html, body').animate({
            scrollTop: $("#myDiv").offset().top
        }, 2000);
    });

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds
});

//Shirk navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("top").style.padding = "0 0";
    document.getElementById("logo").style.height = "0";
    document.getElementById("navbar-1").style.marginLeft = "auto";
    document.getElementById("navbar-1").style.marginRight = "auto";
} else {
    document.getElementById("top").style.padding = "10px 0px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("navbar-1").style.marginLeft = "";
    document.getElementById("navbar-1").style.marginRight = "";
}
}
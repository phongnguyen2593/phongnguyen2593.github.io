$(document).ready(function() {
	$('.open-switcher').click(function() {
		$(this).parent().toggleClass('active');
	});
	
	$('.box').click(function() {
		$('.change-bg').show();
		$('.change-color').hide();
		$('body').addClass('container');
		$('#bike').children().addClass('container-fluid');
		$('#bike').children().removeClass('container');
		$('.text-color').addClass('white');
		$('.nav-item a').addClass('white');
		$('p').addClass('white');
		$('h3').addClass('white');
		$('h6').addClass('white');
		$('.filter li').addClass('white');
		$('.change-bg p').addClass('black');
		$('.bg-color').css('background-color', '#fa6600');
		$('#intro').removeClass('bg-color-2');
		$('#about').removeClass('bg-color-1');
		$('#bike').removeClass('bg-color-2');
		$('#contact').removeClass('bg-color-1');
	});

	$('.wide').click(function() {
		$('.change-bg').hide();
		$('.change-color').show();
		$('body').removeClass('container');
		$('#bike').children().removeClass('container-fluid');
		$('#bike').children().addClass('container');
		$('.text-color').removeClass('white');
		$('p').removeClass('white');
		$('h3').removeClass('white');
		$('h6').removeClass('white');
		$('.filter li').removeClass('white');

		$('#top').addClass('bg-color');
		$('#intro').addClass('bg-color-2');
		$('#about').addClass('bg-color-1');
		$('#bike').addClass('bg-color-2');
		$('#contact').addClass('bg-color-1');
	});

	// set color
	$(".change-color li").click(function(){
		color = $(this).css("background-color");
		$(".text-color").css({"color": color });
		$(".bg-color").css({"background-color": color});
	})

	//set background
	$(".change-bg li").click(function(){
		bg = $(this).css("background-image");
		$('body').css({"background-image": bg});
	})
});
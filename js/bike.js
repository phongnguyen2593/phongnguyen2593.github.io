$(document).ready(function() {
	
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item'
	});
	console.log($('.filter li'));
	$('.filter li').on('click', function(){

		var value = $(this).attr('data-name');
		$grid.isotope({filter: value});
	});
});
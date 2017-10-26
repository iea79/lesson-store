$(document).ready(function(){

	function checkOnResize() {
	    $('.crm__container').css({
	        height: $(window).height() + 'px'
	    });

	    // Высота плиток
	    $('[data-grid-match] > .grid__wrapper').each( function() {
    		gridItem = $(this).find('.grid__item');

			gridItem.css('minHeight', $(this).height());
			// console.log($(this).height())
			// console.log(gridItem.innerHeight())
	    });
	}
	checkOnResize();
	$(window).resize( checkOnResize );


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});


	// Tabs toggle
	$('.tab-menu__label').on('click', function(event) {
		event.preventDefault();
		var id = $(this).data('tab');
		$('.tab-menu__label').removeClass('active');
		$('.tab-content__item').removeClass('show');
		$(this).addClass('active');
		$('#' + id).addClass('show');
	});

	// aside menu
	$('.crm__menu-toggle').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.crm__menu-item_accordeon').toggleClass('open');
	});

	$('.menu_toggle').on('click', function(event) {
		event.preventDefault();
		$('.crm__menu').toggleClass('open');
	});

	// Search mobile
	$('.search__toggle').on('click', function(event) {
		event.preventDefault();
		$('.search').toggleClass('open');
	});
});


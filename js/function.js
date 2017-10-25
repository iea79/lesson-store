$(document).ready(function(){

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
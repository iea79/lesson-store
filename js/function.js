var TempApp = {
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }
};

function isLgWidth() { return $(window).width() >= TempApp.lgWidth; } // >= 1200
function isMdWidth() { return $(window).width() >= TempApp.mdWidth && $(window).width() < TempApp.lgWidth; } //  >= 992 && < 1200
function isSmWidth() { return $(window).width() >= TempApp.smWidth && $(window).width() < TempApp.mdWidth; } // >= 768 && < 992
function isXsWidth() { return $(window).width() < TempApp.smWidth; } // < 768
function isIOS() { return TempApp.iOS(); } // for iPhone iPad iPod

$(document).ready(function(){

	function checkOnResize() {
		var headerHeight = $('header').height();

	    $('.crm__container').css({
	        height: $(window).height() - headerHeight
	    });

	    // Высота плиток/grid
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


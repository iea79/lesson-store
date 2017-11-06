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

	var resizedTo = false;
	
	function checkOnResize() {
        var windowWidth = $(window).width();

        if (resizedTo == windowWidth) { return; }

        resizedTo = windowWidth;

		var headerHeight = $('header').height();

	    // $('.crm__container').css({
	    //     height: $(window).height() - headerHeight
	    // });

	    // Высота плиток/grid
	    if ('[data-grid-match]') {
		    gridDef = 0;
		    $('[data-grid-match] .grid__item').removeAttr('style');
		    $('[data-grid-match] > .grid__wrapper').each( function() {
			    var gridHei = $(this).height();
		    	if (gridDef < gridHei) {
		    		gridDef = gridHei;
		    	}
				$('[data-grid-match] .grid__item').css('minHeight', gridDef);
				// console.log(gridDef)
		    });
			// console.log(gridDef)
	    }
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
		var wrap = $(this).closest('.crm__menu-item');
		if (wrap.hasClass('crm__menu-item_accordeon')) {
			event.preventDefault();
			wrap.toggleClass('open');
		}
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

	// Отправить тренеровку
	$('.send__traning_btn--send').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.tab-content').addClass('disabled');
		$('.send__traning_top').addClass('hide');
		$('.send__traning_bottom').slideDown(300);
	});

	$('.send__traning_btn--cancel').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.tab-content').removeClass('disabled');
		$('.send__traning_bottom').slideUp(300);
		setTimeout(function() {
			$('.send__traning_top').removeClass('hide');
		}, 300);
	});

	$('.crm__header .profile').on('click', function(event) {
		event.preventDefault();
		$('.profile__dropdown').slideToggle(300);
	});

	$('[data-traning-link]').on('click', function(event) {
		event.preventDefault();
		var id = $(this).data('traningLink');
		console.log(id)
		$(this).toggleClass('open');
		$('#'+id).slideToggle(300);
	});

	$('.traning__btn_more').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.traning__list_item').find('.traning__sublist').slideToggle(300);
	});

    $( ".traning__list" ).sortable();
    $( ".traning__list" ).disableSelection();

    $('.traning__field_toggle-item').on('click', function() {
    	var style = $(this).data('style');
    	var field = $(this).closest('.traning__field_wrap').find('.traning__field');

    	field.removeClass('traning__field--blank traning__field--line traning__field--cage');
    	field.addClass('traning__field--'+style+'');
    });

});


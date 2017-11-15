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
	$('body').on('click', '.tab-menu__label', function(event) {
		event.preventDefault();
		var id = $(this).data('tab');
		$('.tab-menu__label').removeClass('active');
		$('.tab-content__item').removeClass('show');
		$(this).addClass('active');
		$('#' + id).addClass('show');
	});

	// aside menu
	$('body').on('click', '.crm__menu-toggle', function(event) {
		var wrap = $(this).closest('.crm__menu-item');
		if (wrap.hasClass('crm__menu-item_accordeon')) {
			event.preventDefault();
			wrap.toggleClass('open');
		}
	});

	$('body').on('click', '.menu_toggle', function(event) {
		event.preventDefault();
		$('.crm__menu').toggleClass('open');
	});

	// Search mobile
	$('body').on('click', '.search__toggle', function(event) {
		event.preventDefault();
		$('.search').toggleClass('open');
	});

	// Отправить тренеровку
	$('body').on('click', '.send__traning_btn--send', function(event) {
		event.preventDefault();
		$(this).closest('.tab-content').addClass('disabled');
		$('.send__traning_top').addClass('hide');
		$('.send__traning_bottom').slideDown(300);
	});

	$('body').on('click', '.send__traning_btn--cancel', function(event) {
		event.preventDefault();
		$(this).closest('.tab-content').removeClass('disabled');
		$('.send__traning_bottom').slideUp(300);
		setTimeout(function() {
			$('.send__traning_top').removeClass('hide');
		}, 300);
	});

	$('body').on('click', '.crm__header .profile', function(event) {
		event.preventDefault();
		$('.profile__dropdown').slideToggle(300);
	});

	$('body').on('click', '.crm__header .bell', function(event) {
        event.preventDefault();
        $('.profile__dropdown.wallet').slideToggle(300);
    });

	$('body').on('click', '[data-traning-link]', function(event) {
		event.preventDefault();
		var id = $(this).data('traningLink');
		console.log(id)
		$(this).toggleClass('open');
		$('#'+id).slideToggle(300);
	});

	$('body').on('click', '.traning__btn_more', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).closest('.traning__list_item').find('.traning__sublist').slideToggle(300);
	});

    $( ".traning__list" ).sortable();
    $( ".traning__list" ).disableSelection();

    $('body').on('click', '.traning__field_toggle-item', function() {
    	var style = $(this).data('style');
    	var field = $(this).closest('.traning__field_wrap').find('.traning__field');

    	field.removeClass('traning__field--blank traning__field--line traning__field--cage');
    	field.addClass('traning__field--'+style+'');
    });

    $('body').on('click', '.task__count_add-label', function(event) {
    	event.preventDefault();
    	var wrap = $(this).closest('.task__count_add');
    	var field = wrap.find('.task__count_add-field');
    	$(this).removeClass('show');
    	field.addClass('show');
    	field.find('input').focus();
    });

    $('body').on('blur', '.task__count_add-field input', function() {
    	var wrap = $(this).closest('.task__count_add');
    	var fieldWrap = wrap.find('.task__count_add-field');
    	var rezult = wrap.find('.task__count_add-rezult');
    	var label = wrap.find('.task__count_add-label');

    	if ($(this).val() !== '') {
    		fieldWrap.removeClass('show');
    		rezult.html($(this).val()).addClass('show');
    	} else {
    		fieldWrap.removeClass('show');
    		label.addClass('show');
    	}

    });

    $('body').on('click', '.task__row_item--left', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    	$(this).closest('.task__row_wrap').find('.task__row_wrap').first().slideToggle();
    });

    $('body').on('click', '.store__create_btn', function(event) {
    	event.preventDefault();
    	$(this).closest('.store__create').addClass('add');
    });

    $('body').on('click', '.discipline__sub a', function(event) {
    	event.preventDefault();
    	$(this).parent().hide();
    	$(this).closest('.discipline').find('.store__create').addClass('add');
    });

});


// @codekit-prepend "../../bower_components/";

(function($) {

	var breakpoints = {large: 1200, medium: 992, small:768 , xsmall:767 };


	/* Navigation
	---------------------------------------------------------------------- */

	$('.main-nav-trigger').on('click', function() {
		$(this).toggleClass('is-open');
		$('.main-nav').toggleClass('is-open');
	});

	// TOUCH NAVIGATION
	var touch_pos,
		nav_link;

	$('.main-nav li:has(ul) > a').on('touchstart', function() {
		//e.preventDefault();
		touch_pos = $(window).scrollTop();
		nav_link = $(this);
	}).on('touchend', function(e) {
		e.stopPropagation();
  		if(e.type==='touchend' && (Math.abs(touch_pos-$(window).scrollTop())<3)) {
			if(!$(this).parent().hasClass('is-open')) {
				e.preventDefault();

				if($(window).width() > breakpoints.xsmall) {
					$('.main-nav li').removeClass('is-open');

					$(document).one('touchend', function (e) {
			    		if(!$(e.target).is(nav_link)) {
				            $('.main-nav li').removeClass('is-open');
			   		 	}
					});
				}

				$(this).parent().addClass('is-open');

			}

  		}
	});

})(jQuery);
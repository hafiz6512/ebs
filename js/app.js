/**
 * Home Banner Slider
 * @param  {[homeBannerSlider]} $ [Bootstrap carosal slider]
 * @return {[caption animate]}   [description]
 */
(function($) {
	"use strict";

	var $myCarousel = $("#homeBannerSlider"),
		$firstAnimatingElems = $myCarousel
	.find(".carousel-item:first")
	.find("[data-animation ^= 'animated']");

	$myCarousel.carousel();

	doAnimations( $firstAnimatingElems );

	$myCarousel.on("slide.bs.carousel", function(e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

	function doAnimations(elems) {

		var animEndEv = "webkitAnimationEnd animationend";

		elems.each(function() {
			var $this = $(this),
			$animationType = $this.data("animation");
			$this.addClass($animationType).one(animEndEv, function() {
				$this.removeClass($animationType);
			});
		});
	}
})(jQuery);

(function($) {
	"use strict";

	$('a[href*="#"].smoothScroll:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
})(jQuery);
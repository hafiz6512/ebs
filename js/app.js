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
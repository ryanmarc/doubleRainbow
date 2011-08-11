/*! Copyright (c) 2011 Ryan Edgell (http://www.ryanmarc.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version 2.0
*
* Based on the full on double rainbow, almost a triple rainbow. As seen here: http://www.youtube.com/watch?v=OQSNhk5ICTI
* OMG IT'S SO BRIGHT AND VIVID!
*/

(function($){
	$.fn.doubleRainbow = function() {
		this.each( function() {
			$(this)
				.wrap($("<div />", {
					css			: { 
						'position' 	: 'relative',
						'width'		: $(this).width(),
						'height'	: $(this).height()
					}
				}))
				.after('<img src="../images/rainbow.gif" alt="rainbow" />')
				.next()
				.css({
					'position'	: 'absolute',
					'top' 		: 0,
					'left'		: 0,
					'width'		: $(this).width(),
					'height'	: $(this).height()
				});
		});
	};
})(jQuery);
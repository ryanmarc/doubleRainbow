/*! Copyright (c) 2010 Ryan Edgell (http://www.ryanmarc.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version 1.0
*
* Based on the full on double rainbow, almost a triple rainbow. As seen here: http://www.youtube.com/watch?v=OQSNhk5ICTI
* OMG IT'S SO BRIGHT AND VIVID!
*/

(function($){

$.fn.doubleRainbow = function() {
	this.each( function() {
		var $r_top = parseInt($(this).position().top) + 
					 parseInt($(this).css('padding-top').replace('px','')) + 
					 parseInt($(this).css('margin-top').replace('px',''));
		
		var $r_left = parseInt($(this).position().left) + 
					  parseInt($(this).css('padding-left').replace('px','')) + 
					  parseInt($(this).css('margin-left').replace('px',''));
		
		var $r_width = parseInt($(this).css('width').replace('px',''));
		var $r_height = parseInt($(this).css('height').replace('px',''));

		$('<img src="images/rainbow.gif" alt="rainbow" />').insertAfter(this);
		
		$r = $(this).next();
		$r.css('position', 'absolute')
			.css('top', $r_top)
			.css('left', $r_left)
			.width($r_width)
			.height($r_height);
	});
};

})(jQuery);
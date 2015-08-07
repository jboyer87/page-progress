/*
 * jQuery Page-Progress: Keep track of your progess on a page!
 * http://www.jamesjboyer.com/projects/page-progress
 * 
 * Copyright (c) 2015 James J. Boyer
 * Licensed under the MIT license.
 * http://www.jamesjboyer.com/index.php?section=license
 */

// Calculate the percentage the user has scrolled down the page
// Start at 0 initially
var scrollPercent = 0;
var scrollPixels;

// Each time the document is scrolled
$(document).scroll(function(){
	// doTimeout is being used to 'debounce' the scroll function to allow for better performance - thanks mdibaiee@github for the suggestion
	$.doTimeout('scroll', 250, function(){
		// Calculate the scroll percentage of the entire document
		var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

		// Set the width of the progress bar to the current scroll percent
		$('.ppProgressBar').width(scrollPercent+'%');
	});
});

// Bookmark function
$(document).ready(function(){
	// When the document loads, sets ppBookmark to the numerical value after the hash in the url
	var ppBookmark = window.location.hash.substring(1);
	// Scroll to the position of ppBookmark
	$(window).scrollTop(ppBookmark);
	// Append a pptoast div to the body.
	$('body').append('<div class="ppToast">Progress saved. You can now bookmark or send the link to a friend!</div>');
});

$('.ppBookmark').click(function(){
	// Prevent the link from functioning
	event.preventDefault();
	// Adds a hash to the url with the current position in pixels
		var scrollPixels = $(window).scrollTop();
		location.hash = scrollPixels;

	// Toast fades in and out
	$('.ppToast').fadeIn(800).delay(3000).fadeOut(800);
});
// END Bookmark function
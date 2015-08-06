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

		// Bookmark function
		// Adds a hash to the url with the current position in pixels
			var scrollPixels = $(window).scrollTop();
			location.hash = scrollPixels;
		// END Bookmark function
	});
});

// Bookmark function
$(document).ready(function(){
	// When the document loads, sets ppBookmark to the numerical value after the hash in the url
	var ppBookmark = window.location.hash.substring(1);
	// Scroll to the position of ppBookmark
	$(window).scrollTop(ppBookmark);
});
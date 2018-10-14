$(document).ready(function () {
	// This function sets the active link for the page
	
	// get the current address
	var loc = window.location.pathname;
	
	$('#nav-header').find('.page-link').each(function() {
		$(this).toggleClass('active', $(this).attr('href') == loc);
	});
});
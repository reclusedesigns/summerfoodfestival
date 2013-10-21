jQuery(document).ready(function($) {
	
	$('.js_contact_click').click(function() {
		$('.js_contact_toggle').slideToggle(function() {
    // Animation complete.
		});
	}); 
	
	$('#myTab a:last').tab('show')
	
}); 
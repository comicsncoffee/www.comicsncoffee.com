$(document).ready(function(){

	// Toggle main nav
	$( "body > header button.toggle" ).click( function(){
		event.stopPropagation();
		$( "body > header ul" ).toggle();
	});

	$( document ).click( function( event ){

			$( "body > header ul" ).hide();
	});
});

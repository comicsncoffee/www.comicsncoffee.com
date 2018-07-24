$(document).ready(function(){

	// Toggle main nav
	$( "body > header button.toggle" ).click( function(){
		event.stopPropagation();
		$( "body > header ul" ).toggle();
	});

	$( document ).click( function( event ){

		var menu = $( "body > header ul" );

		if( $( "body > header button.toggle" ).is( ":visible" ) && menu.is( ":visible" )){
			$( "body > header ul" ).hide();
		}
	});
});

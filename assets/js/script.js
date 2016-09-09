$( ".cross-bkg" ).hide();
$( ".cross" ).hide();
$('.closed').hide();

$( "#menu" ).click(function() {
	$( "#menu" ).slideToggle( "slow", function() {
		$( "#menu" ).hide();
		$( ".cross-bkg" ).show();
		$( ".cross" ).show();
		$('.closed').show();
	});
});

$( ".cross" ).click(function() {
	$( "#menu" ).slideToggle( "slow", function() {
		$( ".cross-bkg" ).hide();
		$( ".cross" ).hide();
		$( "#menu" ).show();
		$('.closed').hide();
	});
});
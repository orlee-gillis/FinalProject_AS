$( ".cross" ).hide();

$( "#menu" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
	$( "#menu" ).hide();
	$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
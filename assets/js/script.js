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


// $(".specials__item").hover(function() {
// 	$(".specials__desc").addClass("opaque");
// 	console.log("entered");
// 	 Stuff to do when the mouse enters the element 
// }, function() {
// 	$(".specials__desc").removeClass("opaque");
// 	console.log("exited");
// 	/* Stuff to do when the mouse leaves the element */
// });
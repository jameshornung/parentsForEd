$(document).ready(function(){
	// Twitter
	twttr.widgets.createTimeline(
	  {
	    sourceType: "profile",
	    screenName: "austinparents"
	  },
	  document.getElementById("twitterFeed")
	);
	// Hamburger Menu
	$(".button-collapse").sideNav();

	// Fixed Header (example)
 //    $(".site-header").after('<div class="bumper"></div>');
 //    $(window).scroll(function () {
	//   if ($(document).scrollTop() > 1 ) {
	//     $('.site-header').addClass('shrink');
	//     $('.bumper').addClass('active');
	//   } else {
	//     $('.site-header').removeClass('shrink');
	//     $('.bumper').removeClass('active');
	//   }
	// });

	// $(".site-header").after('<div class="bumper"></div>');
    $(window).scroll(function () {
    	console.log(scrollTop);
	  if ($(document).scrollTop() > 1 ) {
	    $('.introBar').addClass('introBarShrink');
	    // $('.bumper').addClass('active');
	  } else {
	    $('.introBar').removeClass('introBarShrink');
	    // $('.bumper').removeClass('active');
	  }
	});
});
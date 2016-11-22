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
});
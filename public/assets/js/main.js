$(document).ready(function(){
	twttr.widgets.createTimeline(
	  {
	    sourceType: "profile",
	    screenName: "austinparents"
	  },
	  document.getElementById("twitterFeed")
	);
});
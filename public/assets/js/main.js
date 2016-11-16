$(document).ready(function(){
	console.log('attached');
	twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "austinparents"
  },
  document.getElementById("twitterFeed")
);
});
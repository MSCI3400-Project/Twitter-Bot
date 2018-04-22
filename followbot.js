
var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'BgfOiU6oVbxcsKFyzJWdoOFbG',
 consumer_secret:      '29Q3iE3UxukNbsIgLQEqJI25Bi9FAS69mrK9xdVqYDsiH3MsmV',
 access_token:         '978710738129833985-iaRD8SKC6SrZZHiAAOYMG9TMh6vzTZi',
 access_token_secret:  'vHUPFD4fy1K1jHnsBTJ6hIdulZNWjZdLm1FXx4CkzkMxO',	});

 
 

 //Setting up a user stream
 var stream = T.stream('user');
 
 //Anytime someone follows me
 stream.on('follow', followed);
 
 
function followed(eventMsg) {
	console.log("Follow Event");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
	 tweetIt('.@' + screenName + ' thanks for the follow fam! #TippieAnalyticsBot');
 }
  
 function tweetIt(txt) {
	 
	 var tweet = {
	 status: txt
 }
 T.post('statuses/update', tweet, tweeted);
 }
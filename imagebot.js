
var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'W0QKnaBqALgAgEYDRS6YNlHti',
 consumer_secret:      '7A99YWZn9nwbb2qAyXGLd090oMOAa46rIoCp5SCcyeRgDDEbRS',
 access_token:         '991005968946352130-LlRjwN77Uuki4Eyq5F6rgHYNPi6da1T',
 access_token_secret:  'elaAfFWCmwsv7C43NeFdfOhAhaH0EDtNh0KJruZtoCKma',	});
 
var exec = require('child_process').exec;
var fs = require('fs');
 
 /*
 //Setting up a user stream
 var stream = T.stream('user');
 
 //Anytime someone follows me
 stream.on('follow', followed);
 
 function followed(eventMsg){
   var name = eventMsg.source.name;
   var screenName = eventMsg.source.screen_name;
	 tweetIt('@' + screenName + ' thanks for the follow fam!')
 }
 */
 
 
schedtweet();

setInterval(schedtweet, 1000*80)

function schedtweet(){
	
	var r = Math.floor(Math.random()*1000);
	
	var tweet = {
		status: 'We are ' + r + '% done with this semester! #TippieBot'
	}
	
	T.post('statuses/update', tweet, tweeted);

	
	function tweeted(err, data, response) {
		if (err) {
			console.log("Oops! Something went wrong!");
		} else { 
			console.log("It worked!");
		}
}
 }
 
 

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
 
 
tweetIt();
 setInterval(tweetIt, 1000*60*60)
 function tweetIt(){
	var cmd = 'processing-java --sketch="%cd%\\rainbow" --run'
	exec(cmd, processing);

	function processing(){
		var filename = 'rainbow/output.png';
		var params = {
			encoding: 'base64'
		}
		var b64 = fs.readFileSync(filename, params);
		
		T.post('media/upload', { media_data: b64 }, uploaded);
		
		function uploaded(err, data, response) {
			var id = data.media_id_string;
			var tweet = {
			status: 'node.js tweet test',
			media_ids: [id]
			}
			T.post('statuses/update', tweet, tweeted);
			
	}
	
	function tweeted(err, data, response) {
		if (err) {
			console.log("Oops! Something went wrong!");
		} else { 
			console.log("It worked!");
		}
}
 }
 }
 
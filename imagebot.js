
var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'BgfOiU6oVbxcsKFyzJWdoOFbG',
 consumer_secret:      '29Q3iE3UxukNbsIgLQEqJI25Bi9FAS69mrK9xdVqYDsiH3MsmV',
 access_token:         '978710738129833985-iaRD8SKC6SrZZHiAAOYMG9TMh6vzTZi',
 access_token_secret:  'vHUPFD4fy1K1jHnsBTJ6hIdulZNWjZdLm1FXx4CkzkMxO',	});
 
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
 //setInterval(tweetIt, 1000*60*60)
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
 
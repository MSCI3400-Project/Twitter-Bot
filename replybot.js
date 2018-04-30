console.log('The replier bot is starting');

var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'W0QKnaBqALgAgEYDRS6YNlHti',
 consumer_secret:      '7A99YWZn9nwbb2qAyXGLd090oMOAa46rIoCp5SCcyeRgDDEbRS',
 access_token:         '991005968946352130-LlRjwN77Uuki4Eyq5F6rgHYNPi6da1T',
 access_token_secret:  'elaAfFWCmwsv7C43NeFdfOhAhaH0EDtNh0KJruZtoCKma',	});
 
 
  //Setting up a user stream
 var stream = T.stream('user');
 
 //Anytime someone follows me
 stream.on('follow', followed);
 

function followed(eventMsg) {
	console.log("Follow Event");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
	 tweetIt('@' + screenName + ' thank you for following our #TippieBot, please visit www.mxrminer.site to support another Tippie student project! ');
 }
  
   //setInterval(tweetIt, 1000*60*60)
 function tweetIt(txt) {
	 
	 var tweet = {
	 status: txt
 }
 T.post('statuses/update', tweet, tweeted);
 
   function tweeted(err, reply) {
	   if (err) {
		   console.log(err.message);
	   } else {
		   console.log('Tweeted: ' + reply.text);
	   }
   }
 }
 
// Anytime someone replies to me
stream.on('tweet', tweetEvent);

 function tweetEvent(tweet) {
	// var fs = require('fs');
	 //var json = JSON.stringify(eventMsg,null,2);
	 //fs.writeFile("tweet.json", json);
	 
	var reply_to = tweet.in_reply_to_screen_name;
	var name = tweet.user.screen_name;
	var txt = tweet.text;
	var id = tweet.id_str;
	 
	 console.log(reply_to + ' '+ name);
	 
	 if (reply_to === 'Tippie_IS_Bot'){
		 txt = txt.replace(/@Tippie_IS_Bot/g,'');
		 var replyText = '@' + name + ' thanks for tweeting at me! you can support another Tippie student project by visiting www.mxrminer.site #TippieBot';
		 
   }
   
   T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);
   
   function tweeted(err, reply) {
	   if (err) {
		   console.log(err.message);
	   } else {
		   console.log('Tweeted: ' + reply.text);
	   }
   }
 }
 
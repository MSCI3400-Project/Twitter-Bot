console.log('The replier bot is starting');

var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'BgfOiU6oVbxcsKFyzJWdoOFbG',
 consumer_secret:      '29Q3iE3UxukNbsIgLQEqJI25Bi9FAS69mrK9xdVqYDsiH3MsmV',
 access_token:         '978710738129833985-iaRD8SKC6SrZZHiAAOYMG9TMh6vzTZi',
 access_token_secret:  'vHUPFD4fy1K1jHnsBTJ6hIdulZNWjZdLm1FXx4CkzkMxO',	});
 
// Setting up a user stream 
var stream = T.stream('user');

// Anytime someone follows me
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
	 
	 if (reply_to === 'orestes_franco'){
		 txt = txt.replace(/@orestes_franco/g,'');
		 var replyText = '@' + name + ' thanks for tweeting at me, I am very lonely...';
		 
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
 
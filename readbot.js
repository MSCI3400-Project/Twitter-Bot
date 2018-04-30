var Twit = require('twit');

//Apply your own consumer keys and access tokens below!
var T = new Twit({
 consumer_key:         'W0QKnaBqALgAgEYDRS6YNlHti',
 consumer_secret:      '7A99YWZn9nwbb2qAyXGLd090oMOAa46rIoCp5SCcyeRgDDEbRS',
 access_token:         '991005968946352130-LlRjwN77Uuki4Eyq5F6rgHYNPi6da1T',
 access_token_secret:  'elaAfFWCmwsv7C43NeFdfOhAhaH0EDtNh0KJruZtoCKma',	});
 
var cmd = 'processing-java --sketch="%cd%\\rainbow" --run'
var exec = require('child_process').exec;

exec(cmd, processing);

function processing(){
	console.log('finished');
}
 
var params = {
	q: '#TippieBot',
	count: 20
}

T.get ('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i <tweets.length; i++) 
	console.log(tweets[i].text);
}; 

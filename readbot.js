var Twit = require('twit');


var T = new Twit({
 consumer_key:         'BgfOiU6oVbxcsKFyzJWdoOFbG',
 consumer_secret:      '29Q3iE3UxukNbsIgLQEqJI25Bi9FAS69mrK9xdVqYDsiH3MsmV',
 access_token:         '978710738129833985-iaRD8SKC6SrZZHiAAOYMG9TMh6vzTZi',
 access_token_secret:  'vHUPFD4fy1K1jHnsBTJ6hIdulZNWjZdLm1FXx4CkzkMxO',	});
 
var cmd = 'processing-java --sketch="%cd%\\rainbow" --run'
var exec = require('child_process').exec;

exec(cmd, processing);

function processing(){
	console.log('finished');
}
 
var params = {
	q: 'eat ass',
	count: 5
}

T.get ('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i <tweets.length; i++) 
	console.log(tweets[i].text);
}; 

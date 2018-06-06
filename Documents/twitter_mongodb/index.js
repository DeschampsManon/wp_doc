const express = require('express'),
	  app = express(),
	  mongoose = require('mongoose'),
	  Twitter = require('twitter'),
	  Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/twitter_mongodb');

const client = new Twitter({
	consumer_key: '3HLzLAa3cYWsohJhcg33LJRg9',
	consumer_secret: 'YRQ79Bjhkbz92JMGlRMlbk8bpN9Cx3WkWuniIXvUCF14YQAX9P',
	access_token_key: '3944090375-XJCSlcFOuEEwHCnb8kTBRpX2LuuDwkwkdpNytFM',
	access_token_secret: 'rG2FcRKzk6LzOONKQHe7cu4mZ4XleN8VkimICguUhgFea'
});

const userSchema = Schema({
	_id: Schema.Types.ObjectId,
	name    			: String,
	location     		: String,
	description         : String,
	followers_count     : Number,
	friends_count       : Number,
	lang     			: String,
	profile_image_url	: String,
	tweets 			    : [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]
});

var tweetSchema = Schema({
	created_at    	  : Date,
	retweet_count     : Number,
	favorite_count    : Number,
	lang			  : String
});

var Tweet  = mongoose.model('Tweet', tweetSchema);
var User = mongoose.model('User', userSchema);


let params = {q: 'terrorisme'};
client.get('search/tweets.json', params, function(error, tweets, response) {
	if (!error) {
		data = JSON.parse(response.body).statuses
		for (let i = 0; i < data.length; i++) {
		 	const tweet = new Tweet({ 
					created_at:     data[i].created_at,
					text:           data[i].text,
					retweet_count:  parseInt(data[i].retweet_count),
					favorite_count: parseInt(data[i].favorite_count),
					lang:           data[i].text,
				});

				tweet.save(function (err, tweet) {	
					const user = new User({ 
						_id:               new mongoose.Types.ObjectId(),
						name:              data[i].user.name,
						location:          data[i].user.location,
						description:       data[i].user.description,
						followers_count:   parseInt(data[i].user.followers_count),
						friends_count:     parseInt(data[i].user.friends_count),
						lang:              data[i].user.lang,
						profile_image_url: data[i].user.profile_image_url,
					});

					user.save(function (err, user) {
				    	if (err) return console.error(err);
				   		user.tweets.push(tweet._id)
				   		console.log(user)
			  	});
		  	});
		}
	} 
});

app.listen(4000);
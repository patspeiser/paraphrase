const server = require('http').createServer(require('../app'));
const db = require('./db').db; 
var port = process.env.PORT || 3000;
const LongPost = require('./db').models.LongPost;
const Post = require('./db').models.Post;
const User = require('./db').models.User;
const Event = require('./db').models.Event;

if (process.env.SYNC){
	db.sync()
	.then(function(){
	})
	.then(function(){
		console.log('db synced');
		
	});
}

server.listen(port, function(){
	console.log('listening on port... '+ port);
});
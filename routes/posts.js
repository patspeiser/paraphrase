const router = require('express').Router();
const Post = require('../server/db').models.Post;
const User = require('../server/db').models.User;
module.exports = router;

router.get('/', function(req, res, next){
	Post.findAll({
		include: [User]
	})
		.then(function(posts){
			res.send(posts);
		})
		.catch(next);
});

router.get('/user/:userId', function(req, res, next){
	Post.getPostsByUser(req.params.userId)
		.then(function(posts){
			res.send(posts);
		})
		.catch(next);
});

router.post('/:userId', function(req, res, next){
	Post.create({
		text: req.body.text,
		userId: req.params.userId,
		longPostId: req.body.longPostId,
		eventId: req.body.eventId
	})
		.then(function(post){
			res.send(post);
		})
		.catch(next);
});
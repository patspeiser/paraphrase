const router = require('express').Router();
const LongPost = require('../server/db').models.LongPost;
const User = require('../server/db').models.User;
module.exports = router;

router.get('/', function(req, res, next){
	LongPost.findAllWithParaphrase()
	.then(function(posts){
		res.send(posts);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	LongPost.create({
		text: req.body.text
	})
	.then(function(post){
		res.send(post);
	})
	.catch(next);
});

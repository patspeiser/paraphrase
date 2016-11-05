const router = require('express').Router();
const Post = require('../server/db').models.Post;
const User = require('../server/db').models.User;
const Event = require('../server/db').models.Event;
const LongPost = require('../server/db').models.LongPost;

module.exports = router;

router.get('/', function(req, res, next){
	Event.findAll()
		.then(function(event){
			res.send(event);
		})
		.catch(next);
});

router.get('/:id', function(req, res, next){
	Event.findById(req.params.id,{
		include: [
		{model: LongPost},
		{model: Post}
		]
	})
	.then(function(event){
		res.send(event);
	})
	.catch(next);
});

router.get('/year/:year', function(req, res, next){
	Event.findAll({
		where: {
			year: req.params.year
		}
	})
	.then(function(events){
		res.send(events);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	Event.create({
		name: req.body.name,
		year: req.body.year,
		longPostId: req.body.longPostId
	})
	.then(function(event){
		res.send(event);
	})
	.catch(next);
});
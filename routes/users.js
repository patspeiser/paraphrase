const router = require('express').Router();
const User = require('../server/db').models.User;
module.exports = router;

router.get('/', function(req, res, next){
	User.findAll()
		.then(function(users){
			res.send(users);
		})
		.catch(next);
});

router.get('/:id', function(req, res, next){
	User.findById(req.params.id)
		.then(function(user){
			res.send(user);
		});
});

router.post('/', function(req, res, next){
	User.create(req.body)
		.then(function(user){
			res.send(user);
		})
		.catch(next);
});
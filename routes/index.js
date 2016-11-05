const router = require('express').Router();

module.exports = router;

router.use('/users', require('./users.js'));
router.use('/posts', require('./posts.js'));
router.use('/events', require('./events.js'));
router.use('/long_posts', require('./long_posts.js'));

router.get('/', function(req, res, next){
	res.send('at api/');
});


const Sequelize = require('Sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

var Post = db.define('post', {
	text: Sequelize.STRING
}, {
	classMethods: {
		getPostsByUser: function(id){
			return this.findAll({
				where: {
					userId: id
				},
				include: [
					{model: User}
				]
			});
		}
	}
});

var LongPost = db.define('long_post', {
	text: Sequelize.TEXT
}, {
	classMethods: {
		findAllWithParaphrase: function(){
			var that = this;
			return this.findAll({
				include: [Post, Event]
			});
		}
	}
});

var Event = db.define('event', {
	name: Sequelize.STRING,
	year: Sequelize.STRING
});

var User = db.define('user', {
	name: Sequelize.STRING
},{
	classMethods: {
	}
});

Post.belongsTo(User);
Post.belongsTo(Event);
Post.belongsTo(LongPost);
Event.hasMany(Post);
User.hasMany(Post);
LongPost.hasMany(Post);
Event.belongsTo(LongPost);
LongPost.hasMany(Event);

module.exports = {
	db: db,
	models: {
		Post: Post,
		User: User,
		Event: Event,
		LongPost: LongPost
	}
};
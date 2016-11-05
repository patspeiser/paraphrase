const server = require('http').createServer(require('../app'));
const db = require('./db').db; 
var port = process.env.PORT || 3000;
const LongPost = require('./db').models.LongPost;
const Post = require('./db').models.Post;
const User = require('./db').models.User;
const Event = require('./db').models.Event;

if (process.env.SYNC){
	db.sync({force: true})
		.then(function(){
			Promise.all([
				LongPost.create({
					text: "After he ascended the throne of the island of Crete, Minos competed with his brothers to rule. Minos prayed to Poseidon, the sea god, to send him a snow-white bull, as a sign of support (the Cretan Bull). He was to kill the bull to show honor to the deity, but decided to keep it instead because of its beauty. He thought Poseidon would not care if he kept the white bull and sacrificed one of his own. To punish Minos, Poseidon made Pasiphaë, Minos's wife, fall deeply in love with the bull. Pasiphaë had craftsman Daedalus make a hollow wooden cow, and climbed inside it in order to mate with the white bull. The offspring was the monstrous Minotaur. Pasiphaë nursed him, but he grew and became ferocious, being the unnatural offspring of a woman and a beast; he had no natural source of nourishment and thus devoured humans for sustenance. Minos, after getting advice from the oracle at Delphi, had Daedalus construct a gigantic labyrinth to hold the Minotaur. Its location was near Minos' palace in Knossos."
				}),
				LongPost.create({
					text: "The Battle of Verdun (Bataille de Verdun, IPA: [bataj də vɛʁdœ̃], Schlacht um Verdun, IPA: [ʃlaxt ˀʊm ˈvɛɐdœŋ]), fought from 21 February to 18 December 1916, was one of the largest and longest battles of the First World War on the Western Front between the German and French armies. The battle took place on the hills north of Verdun-sur-Meuse in north-eastern France. The German 5th Army attacked the defences of the Région Fortifiée de Verdun (RFV) and those of the French Second Army on the right bank of the Meuse. Inspired by the experience of the Second Battle of Champagne the year before, the Germans planned to rapidly capture the Meuse Heights, providing them with an excellent defensive position that would also allow them to bombard Verdun with observed artillery fire. The Germans hoped that the French would commit their strategic reserve to recapture the position and suffer catastrophic losses in a battle of attrition, as the Germans would have a tactical advantage."
				}),
				User.create({
					name: 'Pat'
				})
			]);
		})
		.then(function(){
			console.log('db synced');
			server.listen(port, function(){
				console.log('listening on port... '+ port);
			});
		});
}


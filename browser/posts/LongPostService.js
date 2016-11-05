angular.module('app')
	.factory('LongPostService', function($http){

		return {
			findAll: function(){

				return $http.get('/api/long_posts')
					.then(function(result){
						return result.data;
					});
				},

				// create: function(userId, text){
				// 	console.log(userId, text);
				// 	return $http.post('/api/posts/' + userId, {text: text})
				// 		.then(function(result){
				// 			return result.data;
				// 		});
				// }
		};

	});
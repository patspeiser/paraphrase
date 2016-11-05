angular.module('app')
	.factory('PostService', function($http){
		return {
			findAll: function(){
				return $http.get('/api/posts')
					.then(function(result){
						return result.data;
					});
				},
				findByUser: function(userId){
					return $http.get('/api/posts/user/' + userId)
						.then(function(result){
							return result.data;
						});
				},

				create: function(userId, text, longPostId, eventId){
					return $http.post('/api/posts/' + userId, {text: text, longPostId: longPostId, eventId: eventId})
						.then(function(result){
							return result.data;
						});
				}
		};

	});
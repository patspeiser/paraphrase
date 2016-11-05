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

				create: function(userId, text, longPostId){
					return $http.post('/api/posts/' + userId, {text: text, longPostId: longPostId})
						.then(function(result){
							return result.data;
						});
				}
		};

	});
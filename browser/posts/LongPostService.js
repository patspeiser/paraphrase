angular.module('app')
	.factory('LongPostService', function($http){
		
		return {
			findAll: function(){

				return $http.get('/api/long_posts')
					.then(function(result){
						return result.data;
					});
				},

			create: function(text){
				return $http.post('/api/long_posts', {text: text})
					.then(function(result){
						return result.data;
					});
			}
		};

	});
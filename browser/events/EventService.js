angular.module('app')
	.factory('EventService', function($http){
		return {
			findAll: function(){
				return $http.get('/api/events')
					.then(function(result){
						return result.data;
					});
			},

			findById: function(id){
					return $http.get('/api/events/' + id)
						.then(function(result){
								return result.data;
						});
			},

			create: function(name, year, longPostId){
				return $http.post('/api/events', {name: name, year: year, longPostId: longPostId})
					.then(function(result){
						return result.data;
					});
			}
		};
	});
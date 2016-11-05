angular.module('app')
	.factory('LongPostService', function($http){

		return {
			findAll: function(){

				return $http.get('/api/long_posts')
					.then(function(result){
						return result.data;
					});
				},
		};

	});
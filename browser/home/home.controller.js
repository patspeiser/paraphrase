angular.module('app')
.controller('HomeCtrl', function($scope, LongPostService, PostService){
	console.log('home controller loaded');
	$scope.userId = 1;

	LongPostService.findAll()
	.then(function(posts){
		$scope.longPosts = posts;
	})
	.catch(function(err){
		console.log(err);
	});
});
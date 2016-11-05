angular.module('app')
	.controller('PostCtrl', function($scope, PostService){
		$scope.user = 1;

		PostService.findAll()
			.then(function(posts){
				$scope.posts = posts;
			})
			.catch(function(err){
				console.log(err);
			});

		$scope.create = function(){
			PostService.create($scope.user, $scope.post.text, $scope.longPost.id)
				.then(function(post){
					$scope.created = true;
					$scope.newestPost = post; 
				})
				.catch(function(err){
					console.log(err);
				});
		};
	});
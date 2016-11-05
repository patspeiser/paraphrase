angular.module('app')
	.controller('PostCtrl', function($scope, PostService, LongPostService){
		$scope.user = 1;

		LongPostService.findAll()
			.then(function(posts){
				console.log(posts);
				$scope.longPosts = posts
			})
			.catch(function(err){
				console.log(err);
			});

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

		$scope.addNew = function(){
			LongPostService.create($scope.post.text)
				.then(function(post){
					$scope.longPosts.push(post);
				})
				.catch(function(err){
					console.log(err);
				});
		};
	});
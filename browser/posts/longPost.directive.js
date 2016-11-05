angular.module('app')
	.directive('longPost', function(){
		return {
			restrict: 'E',
			
			templateUrl: '/posts/long-post.html',
			controller: function(LongPostService, PostService, EventService, $scope){
				$scope.summarize = function(longPost){
					PostService.create($scope.userId,  longPost.summary, longPost.id)
					.then(function(short){
						longPost.posts.push(short);
					})
					.catch(function(err){
						console.log(err);
					});
				};

				$scope.addEvent = function(longPost){
					EventService.create(longPost.eventName, longPost.eventYear, longPost.id)
						.then(function(event){
							longPost.events.push(event);
							console.log(event);
						})
						.catch(function(err){
							console.log(err);
						});
				};
			}
		};
	});
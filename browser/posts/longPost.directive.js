angular.module('app')
	.directive('longPost', function(){
		return {
			restrict: 'E',
			
			templateUrl: '/posts/long-post.html',
			controller: function(LongPostService, PostService, EventService, $scope){
				$scope.summarize = function(longPost){
					PostService.create($scope.userId,  longPost.summary, longPost.id, longPost.events[0].id)
					.then(function(short){
						console.log(longPost)
						longPost.posts.push(short);
						longPost.summary = '';
					})
					.catch(function(err){
						console.log(err);
					});
				};

				$scope.addEvent = function(longPost){
					EventService.create(longPost.eventName, longPost.eventYear, longPost.id)
						.then(function(event){
							longPost.events.push(event);
							console.log(longPost.events);;
						})
						.catch(function(err){
							console.log(err);
						});
				};
			}
		};
	});
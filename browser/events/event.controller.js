angular.module('app')
	.controller('EventCtrl', function($scope, EventService, historicalEvent, PostService, $rootScope, $stateParams){
		console.log('EventCtrl', historicalEvent)
		$scope.historicalEvent = historicalEvent;

		EventService.findAll()
			.then(function(events){
				$scope.events = events;
			})
			.catch(function(err){
				console.log(err);
			});

			$scope.summarize = function(longPost){
				PostService.create($scope.userId,  longPost.summary, longPost.id, $stateParams.id)
				.then(function(short){
					console.log(longPost)
					longPost.posts.push(short);
					longPost.summary = '';
				})
				.catch(function(err){
					console.log(err);
				});
			};
	});
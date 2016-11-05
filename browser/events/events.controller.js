angular.module('app')
	.controller('EventCtrl', function($scope, EventService, historicalEvent){
		console.log('EventCtrl', historicalEvent)
		$scope.historicalEvent = historicalEvent;

		EventService.findAll()
			.then(function(events){
				$scope.events = events;
			})
			.catch(function(err){
				console.log(err);
			});
	});
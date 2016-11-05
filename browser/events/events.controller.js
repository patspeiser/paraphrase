angular.module('app')
.controller('EventsCtrl', function($scope, EventService, events){
	$scope.events = events;
});
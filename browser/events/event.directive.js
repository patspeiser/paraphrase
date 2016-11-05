angular.module('app')
	.directive('event', function(){
		return {
			restrict: 'E',
			templateUrl: '/events/event-detail.html',
			controller: function(EventService, $scope){
				
				console.log('event directive loaded', $scope.historicalEvent);
			}
		};
	});
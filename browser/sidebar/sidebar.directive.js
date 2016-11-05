angular.module('app')
	.directive('sidebar', function(){
		return {
			restrict: 'E',
			scope: {
				event: '='
			},
			templateUrl: '/sidebar/sidebar.html',
			controller: function(EventService, $scope, $rootScope){
				EventService.findAll()
				.then(function(events){
					$scope.events = events;
				})
				.catch(function(err){
					console.log(err);
				});
			}
		};
	});
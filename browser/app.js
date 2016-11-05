angular.module('app', ['ui.router']);

angular.module('app')
.run(function($state){
	$state.go('home');
});

angular.module('app')
.config(function($stateProvider){
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/home/home.html',
		controller: 'HomeCtrl'
	})
	.state('posts', {
		url: '/posts',
		templateUrl: '/posts/posts.html',
		controller: 'PostCtrl'
	})
	.state('event', {
		url: '/events/:id/detail',
		templateUrl: '/events/event.html',
		controller: 'EventCtrl',
		resolve: {
			historicalEvent: function(EventService, $stateParams){
				return EventService.findById($stateParams.id);
			}
		}
	})
	.state('events', {
		url: '/events',
		templateUrl: '/events/event-list.html',
		controller: 'EventsCtrl',
		resolve: {
			events: function(EventService){
				return EventService.findAll();
			}
		}
	});
});
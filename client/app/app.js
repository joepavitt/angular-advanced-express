'use strict';

angular.module('advanced-angular-app', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });

    $urlRouterProvider
        .otherwise('tutorial');

    $stateProvider
        .state('main', {
            url: '/',
			abstract: true,
            /*templateUrl: 'app/overall.html',*/
            controller: 'AppCtrl'
        })
		.state('tutorial', {
            url: '/tutorial',
            templateUrl: 'app/tutorial/tutorial.html'
            /*controller: 'TutorialCtrl'*/
        })
		.state('directives', {
            url: '/directives',
            templateUrl: 'app/directive-scope-examples/directive-scope-examples.html',
            controller: 'DirectiveScopeExamplesCtrl'
        })
		.state('data', {
            url: '/data',
			abstract: true,
            templateUrl: 'app/data/data.html',
            controller: 'DataCtrl'
        })
		.state('data.table', {
            url: '',
            templateUrl: 'app/data/data.table.html'
        })
		.state('data.cards', {
            url: '',
            templateUrl: 'app/data/data.cards.html',
            controller: 'CardsController',
			params: {
				cards : null
			}
        });
})

.controller('AppCtrl', ['$scope',
    function($scope) {
		$scope.hello = 'Hello Controller';
        console.log($scope.hello);
    }
]);

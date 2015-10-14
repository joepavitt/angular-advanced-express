'use strict';

angular.module('advanced-angular-app')
	.controller('DirectiveScopeExamplesCtrl', ['$scope', function ($scope) {
		$scope.parentVariable = 'Hello World';
	}])




.directive('directiveScopeFalse', function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/directive-scope-examples/directive-scope-false.html',
			controller: ['$scope', function ($scope) {
				$scope.activePanel = 0;
				$scope.shiftActivePanel = function(increment) {
					var newPanel = $scope.activePanel + increment;
					if (newPanel >= 0 && newPanel < 2) {
						$scope.activePanel += increment;
					}
				};
			}],
			scope: false
		};
	})
	.directive('directiveScopeTrue', function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/directive-scope-examples/directive-scope-true.html',
			controller: ['$scope', function ($scope) {
				$scope.activePanel = 0;
				$scope.shiftActivePanel = function(increment) {
					var newPanel = $scope.activePanel + increment;
					if (newPanel >= 0 && newPanel < 2) {
						$scope.activePanel += increment;
					}
				};
			}],
			scope: true
		};
	})
	.directive('directiveScopeControlled', function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/directive-scope-examples/directive-scope-controlled.html',
			controller: ['$scope', function ($scope) {
				$scope.activePanel = 0;
				$scope.shiftActivePanel = function(increment) {
					var newPanel = $scope.activePanel + increment;
					if (newPanel >= 0 && newPanel < 2) {
						$scope.activePanel += increment;
					}
				};
			}],
			scope: {
				isolatedVariable: '='
			}
		};
	});

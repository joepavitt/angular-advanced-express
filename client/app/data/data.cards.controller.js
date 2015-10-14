'use strict';

angular.module('advanced-angular-app')
.controller('CardsController', ['$scope', '$state', '$stateParams',
    function($scope, $state, $stateParams) {

		console.log($stateParams);
		$scope.cards = $stateParams.cards;

		$scope.currentCard = 1;
		$scope.slideCards = function (increment) {
			$scope.currentCard += increment;
		};
    }
]);

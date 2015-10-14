'use strict';

angular.module('advanced-angular-app')

.controller('DataCtrl', ['$scope',
    function($scope) {
		$scope.data = {
			'cols' : [{
				'key' : 'col1',
				'text' : 'Column 1 Heading'
			}, {
				'key' : 'col2',
				'text' : 'Column 2 Heading'
			}, {
				'key' : 'col3',
				'text' : 'Column 3 Heading'
			}],
			'rows' : [{
				'col1' : 1,
				'col2' : 2,
				'col3' : 3
			}, {
				'col1' : 5,
				'col2' : 3,
				'col3' : 10
			}, {
				'col1' : 2,
				'col2' : 3,
				'col3' : 7
			}]
		};
    }
]);

'use strict';

/**

tableData Structure:

tableData.cols = [{'text': 'What to Display', 'key' : 'attributeofdata'}, ...];
tableData.rows = [{'attributeofdata': 'The Value of the Data'}, ...];

**/


angular.module('advanced-angular-app')
    .directive('reusableInlineEditor', function() {
        return {
            templateUrl: 'app/reusable-inline-editor/reusable-inline-editor.html',
            restrict: 'E',
			replace: true,
			controller: ['$scope', function($scope) {
				$scope.editMode = false;

				$scope.toggleEditMode = function() {
					$scope.editMode = !$scope.editMode;
				}
			}],
            scope: {
                editingValue : '='
            }
        };
    });

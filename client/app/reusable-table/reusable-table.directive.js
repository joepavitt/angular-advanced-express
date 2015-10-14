'use strict';

/**

tableData Structure:

tableData.cols = [{'text': 'What to Display', 'key' : 'attributeofdata'}, ...];
tableData.rows = [{'attributeofdata': 'The Value of the Data'}, ...];

**/


angular.module('advanced-angular-app')
    .directive('reusableTable', function() {
        return {
            templateUrl: 'app/reusable-table/reusable-table.html',
            restrict: 'E',
			replace: true,
            scope: {
                tableData : '='
            }
        };
    });

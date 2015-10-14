'use strict';

var app = angular.module('advanced-angular-app');
app.directive('reusableFocusMe', ['$timeout',
    function($timeout) {
        return {
            link: function(scope, element, attrs) {
                scope.$watch(attrs.reusableFocusMe, function(value) {
                    if (value === true) {
                        $timeout(function() {
                            element[0].focus();
                            element[0].setSelectionRange(0, element[0].value.length);
                        });
                    }
                });
            }
        };
    }
]);

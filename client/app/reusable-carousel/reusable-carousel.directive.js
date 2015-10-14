'use strict';

angular.module('advanced-angular-app')
    .directive('reusableCarouselContainer', function() {
        return {
            restrict: 'A',
            scope: {},
			link: function(scope, element) {
				element.addClass('carousel-container');
			},
            controller: ['$element',
                function($element) {
                    var width = 0;
                    this.getClientWidth = function() {
                        width = ($element[0].clientWidth === 0) ? width : $element[0].clientWidth;
                        return width;
                    };
                }
            ]
        };
    })
    .directive('reusableCarousel', ['$window',
        function($window) {
            function link(scope, element, attrs, reusableCarouselContainer) {
				console.log('hello');
                var panelWidth;
				var carousel = element;

                function sizeCarousel() {
                    panelWidth = reusableCarouselContainer.getClientWidth();
                    carousel[0].style.width = '10000px'; // smarter method would be counting the number of panels
                    carousel.addClass('no-transition'); // set the CSS class so that the margin-left change does not animate
                    carousel[0].style.marginLeft = (attrs.activePanel * -panelWidth) + 'px';
                    carousel[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
                    carousel.removeClass('no-transition');
                }

                sizeCarousel();

				element.addClass('carousel');
                angular.element($window).bind('resize', function() {
                    sizeCarousel();
                });
                attrs.$observe('activePanel', function(value) {
                    if (value) {
                        element[0].style.marginLeft = (value * -panelWidth) + 'px';
                    }
                });
            }

            return {
                restrict: 'A',
                scope: {},
                require: '^reusableCarouselContainer',
                link: link
            };
        }
    ])
    .directive('reusableCarouselPanel', ['$window',
        function($window) {
            function link(scope, element, attrs, reusableCarouselContainer) {
				element.addClass('carousel-panel');
                function sizePanel() {
                    element[0].style.width = reusableCarouselContainer.getClientWidth() + 'px';
                }
                sizePanel();
                angular.element($window).bind('resize', function() {
                    sizePanel();
                });
            }
            return {
                restrict: 'A',
                scope: {},
                require: '^reusableCarouselContainer',
                link: link
            };
        }
    ]);

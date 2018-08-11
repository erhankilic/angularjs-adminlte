(function () {
    'use strict';

    angular.module('adminlte').directive('knob', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {data: string}, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "A",
            require: '^ngModel',
            scope: {
                knobOptions: "=",
                ngModel: "="
            },
            link: linkFn
        };

    }

    /**
     * Link
     * @param $scope
     * @param $element
     * @param $attrs
     * @param $ctrl
     */
    function linkFn($scope, $element, $attrs, $ctrl)  {

        window.setTimeout(function () {
            var options = angular.copy($scope.knobOptions);

            options.release = function (v) {
                $scope.$apply(function () {
                    $ctrl.$setViewValue(v);
                });
            };

            /* jQueryKnob */
            $('#' + $attrs.id).knob(options);
        }, 250);
    }
})();

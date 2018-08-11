(function () {
    'use strict';

    angular.module('adminlte').directive('sparkline', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {data: string}, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {
                data: "=",
                options: "="
            },
            link: linkFn
        };

    }

    function linkFn($scope, $element, $attrs)  {
        $('#' + $attrs.id).sparkline($scope.data, $scope.options);
    }
})();

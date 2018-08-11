(function () {
    'use strict';

    angular.module('adminlte').directive('morrisChart', DirectiveFn);

    /**
     * Directive
     * @returns {{restrict: string, $scope: {type: string, data: string}, bindToController: boolean, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "E",
            scope: {
                type: "@",
                redraw: "@",
                data: "="
            },
            link: linkFn
        };

    }

    /**
     * Link Function
     * @param $scope
     * @param $element
     * @param $attrs
     */
    function linkFn($scope, $element, $attrs)  {
        var chart;

        $(document).ready(function () {
            if ($scope.type == "line") {
                chart = new Morris.Line($scope.data);
            } else if ($scope.type == "donut") {
                chart = new Morris.Donut($scope.data);
            } else if ($scope.type == "bar") {
                chart = new Morris.Bar($scope.data);
            } else {
                chart = new Morris.Area($scope.data);
            }
        });

        $scope.$watch("redraw", function (newVal) {
            if ($scope.redraw) {
                window.setTimeout(function () {
                    chart.redraw();
                }, 250);
            }
        })
    }
})();

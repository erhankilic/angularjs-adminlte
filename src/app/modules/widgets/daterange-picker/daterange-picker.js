(function () {
    'use strict';

    angular.module('adminlte').directive('dateRangePicker', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {date: string}, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {
                date: "="
            },
            link: linkFn
        };

    }

    function linkFn($scope, $element, $attrs)  {
        $($element).daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        }, function (start, end) {
            $scope.date = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
            console.log('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });
    }
})();

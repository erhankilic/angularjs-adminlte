(function () {
    'use strict';

    angular.module('adminlte').directive('vectorMap', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {}, bindToController: boolean, controller: ControllerFn, controllerAs: string, templateUrl: string}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {
                data: "="
            },
            link: linkFn
        };

    }

    function linkFn($scope, $element, $attrs)  {
        // World map by jvectormap
        $('#' + $attrs.id).vectorMap($scope.data);
    }
})();

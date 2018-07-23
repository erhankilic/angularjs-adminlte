(function () {
    'use strict';

    angular.module('adminlte').directive('headerLayout', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {}, bindToController: boolean, controller: ControllerFn, controllerAs: string, templateUrl: string}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {},
            bindToController: true,
            controller: ControllerFn,
            controllerAs: "vmHeader",
            templateUrl: "app/modules/header/header.html"
        };

    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;
    }
})();

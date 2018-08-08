(function () {
    'use strict';

    angular.module('adminlte').directive('smallBox', DirectiveFn);

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
            bindToController: true,
            controller: ControllerFn,
            controllerAs: "vmSmallBox",
            templateUrl: "app/modules/widgets/small-box/small-box.html"
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

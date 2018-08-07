(function () {
    'use strict';

    angular.module('adminlte').directive('infoBox', DirectiveFn);

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
            controllerAs: "vmInfoBox",
            templateUrl: "app/modules/widgets/info-box/info-box.html"
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

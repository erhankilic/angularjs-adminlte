(function () {
    'use strict';

    angular.module('adminlte').directive('footerLayout', DirectiveFn);

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
            controllerAs: "vmFooter",
            templateUrl: "app/modules/footer/footer.html"
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

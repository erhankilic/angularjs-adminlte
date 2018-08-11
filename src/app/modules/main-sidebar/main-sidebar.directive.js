(function () {
    'use strict';

    angular.module('adminlte').directive('mainSidebar', DirectiveFn);

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
            controllerAs: "vmMainSidebar",
            templateUrl: "app/modules/main-sidebar/main-sidebar.html"
        };

    }

    ControllerFn.$inject = ["UserService"];

    /**
     * Controller
     *
     * @param UserService
     * @constructor
     */
    function ControllerFn(UserService) {
        var vm = this;

        vm.user = UserService.getUser();

        window.setTimeout(function () {
            $('.sidebar-menu').tree();
        }, 250);
    }
})();

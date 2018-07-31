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
     * @ngInject
     * @type {string[]}
     */
    ControllerFn.$inject = ["UserService"];

    /**
     * Controller Function
     *
     * @param UserService
     * @constructor
     */
    function ControllerFn(UserService) {
        var vm = this;

        vm.user = UserService.getUser();

        vm.logout = logoutFn;

        function logoutFn() {
            UserService.logout();
        }
    }
})();

(function () {
    'use strict';

    angular.module('adminlte').run(RunFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    RunFn.$inject = ["UserService", "$location"];

    /**
     * Run
     *
     * @param UserService
     * @param $location
     * @constructor
     */
    function RunFn(UserService, $location) {
        $(document).ready(function () {
            $.widget.bridge('uibutton', $.ui.button);
        });

        if (!UserService.isLogined()) {
            $location.path("/login");
        }
    }

})();





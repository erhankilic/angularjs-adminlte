(function () {
    'use strict';

    angular.module('adminlte').config(configFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    configFn.$inject = ['$stateProvider'];

    /**
     * Config
     *
     * @param $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/pages/login/login.html',
                    controller: ControllerFn,
                    controllerAs: 'vmLogin'
                }
            },
            bodyClass: 'login-page'
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;

        $(document).ready(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' /* optional */
            });
        });
    }
})();

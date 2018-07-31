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
        $stateProvider.state('register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: 'app/pages/register/register.html',
                    controller: ControllerFn,
                    controllerAs: 'vmRegister'
                }
            },
            bodyClass: 'register-page'
        });
    }

    /**
     * Controller Function
     *
     * @param UserService
     * @param $location
     * @constructor
     */
    function ControllerFn(UserService, $location) {
        var vm = this;

        vm.userData = {
            name: "Alexander Pierce",
            image: "/images/user2-160x160.jpg",
            registerDate: "2012",
            job: "Web Developer"
        };

        vm.login = loginFn;

        if (UserService.isLogined()) {
            $location.path("/");
        }

        $(document).ready(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' /* optional */
            });
        });

        function loginFn() {
            UserService.login(vm.userData);
        }
    }
})();

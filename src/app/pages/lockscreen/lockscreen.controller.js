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
        $stateProvider.state('lockscreen', {
            url: '/lockscreen',
            views: {
                'main@': {
                    templateUrl: 'app/pages/lockscreen/lockscreen.html',
                    controller: ControllerFn,
                    controllerAs: 'vmLockscreen'
                }
            },
            bodyClass: 'lockscreen'
        });
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

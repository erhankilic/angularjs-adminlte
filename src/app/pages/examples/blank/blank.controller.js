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
        $stateProvider.state('app.examplesBlank', {
            url: '/examples/blank',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/examples/blank/blank.html',
                    controller: ControllerFn,
                    controllerAs: 'vmBlank'
                }
            }
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
            $('.sidebar-menu').tree();
        })
    }
})();

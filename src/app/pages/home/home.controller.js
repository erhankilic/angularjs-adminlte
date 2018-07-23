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
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/pages/home/home.html',
            controller: HomeController,
            controllerAs: 'vmHomeController'
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function HomeController() {
        var vm = this;
    }
})();

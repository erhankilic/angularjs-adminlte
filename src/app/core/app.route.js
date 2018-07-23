(function () {
    'use strict';

    angular.module('adminlte').config(routerConfig);

    routerConfig.$inject = ['$urlRouterProvider'];

    /**
     * Config
     *
     * @param $urlRouterProvider
     */
    function routerConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    }

})();


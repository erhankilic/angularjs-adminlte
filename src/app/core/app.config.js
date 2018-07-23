(function () {
    'use strict';

    angular.module('adminlte').config(ConfigFn);

    ConfigFn.$inject = [
        "$locationProvider"
    ];

    /**
     * Config
     *
     * @param $locationProvider
     * @constructor
     */
    function ConfigFn($locationProvider) {
        $locationProvider.html5Mode(true);
    }

})();





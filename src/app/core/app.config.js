(function () {
    'use strict';

    angular.module('adminlte').config(ConfigFn);

    ConfigFn.$inject = [
        "$locationProvider"
    ];

    function ConfigFn($locationProvider) {
        $locationProvider.html5Mode(true);
    }

})();





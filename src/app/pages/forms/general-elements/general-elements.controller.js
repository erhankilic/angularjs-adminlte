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
        $stateProvider.state('formsGeneralElements', {
            url: '/forms/general-elements',
            templateUrl: 'app/pages/forms/general-elements/general-elements.html',
            controller: ControllerFn,
            controllerAs: 'vmGeneralElements'
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

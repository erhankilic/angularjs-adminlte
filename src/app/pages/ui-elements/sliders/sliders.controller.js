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
        $stateProvider.state('elementsSliders', {
            url: '/ui-elements/sliders',
            templateUrl: 'app/pages/ui-elements/sliders/sliders.html',
            controller: ControllerFn,
            controllerAs: 'vmSliders'
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
            /* BOOTSTRAP SLIDER */
            $('.slider').slider();
        });
    }
})();

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
        $stateProvider.state('app.elementsGeneral', {
            url: '/ui-elements/general',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/ui-elements/general/general.html',
                    controller: ControllerFn,
                    controllerAs: 'vmGeneral'
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
    }
})();

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
        $stateProvider.state('app.elementsButtons', {
            url: '/ui-elements/buttons',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/ui-elements/buttons/buttons.html',
                    controller: ControllerFn,
                    controllerAs: 'vmButtons'
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

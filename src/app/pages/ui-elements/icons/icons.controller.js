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
        $stateProvider.state('app.elementsIcons', {
            url: '/ui-elements/icons',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/ui-elements/icons/icons.html',
                    controller: ControllerFn,
                    controllerAs: 'vmIcons'
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

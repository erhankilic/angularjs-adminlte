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
        $stateProvider.state('app.widgets', {
            url: '/widgets',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/widgets/widgets.html',
                    controller: ControllerFn,
                    controllerAs: 'vmWidgets'
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
        });
    }
})();

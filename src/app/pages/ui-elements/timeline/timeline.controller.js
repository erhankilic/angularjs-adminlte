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
        $stateProvider.state('app.elementsTimeline', {
            url: '/ui-elements/timeline',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/ui-elements/timeline/timeline.html',
                    controller: ControllerFn,
                    controllerAs: 'vmTimeline'
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

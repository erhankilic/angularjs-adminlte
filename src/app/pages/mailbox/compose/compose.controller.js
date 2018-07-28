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
        $stateProvider.state('mailboxCompose', {
            url: '/mailbox/compose',
            templateUrl: 'app/pages/mailbox/compose/compose.html',
            controller: ControllerFn,
            controllerAs: 'vmCompose'
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
            //Add text editor
            $("#compose-textarea").wysihtml5();
        });
    }
})();

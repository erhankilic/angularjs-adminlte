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
        $stateProvider.state('app.mailboxReadMail', {
            url: '/mailbox/read-mail',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/mailbox/read-mail/read-mail.html',
                    controller: ControllerFn,
                    controllerAs: 'vmReadMail'
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

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

        vm.infoBox1 = {
            icon: "fa-envelope-o",
            title: "Messages",
            number: "1,410",
            background: "bg-aqua"
        };

        vm.infoBox2 = {
            icon: "fa-flag-o",
            title: "Bookmarks",
            number: "410",
            background: "bg-green"
        };

        vm.infoBox3 = {
            icon: "fa-files-o",
            title: "Uploads",
            number: "13,648",
            background: "bg-yellow"
        };

        vm.infoBox4 = {
            icon: "fa-star-o",
            title: "Likes",
            number: "93,139",
            background: "bg-red"
        };
    }
})();

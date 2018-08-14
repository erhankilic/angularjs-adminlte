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
            icon: "fa fa-envelope-o",
            title: "Messages",
            number: "1,410",
            background: "bg-aqua"
        };

        vm.infoBox2 = {
            icon: "fa fa-flag-o",
            title: "Bookmarks",
            number: "410",
            background: "bg-green"
        };

        vm.infoBox3 = {
            icon: "fa fa-files-o",
            title: "Uploads",
            number: "13,648",
            background: "bg-yellow"
        };

        vm.infoBox4 = {
            icon: "fa fa-star-o",
            title: "Likes",
            number: "93,139",
            background: "bg-red"
        };

        vm.infoBox5 = {
            icon: "fa fa-bookmark-o",
            title: "Bookmarks",
            number: "41,410",
            mainBackground: "bg-aqua",
            process: 70,
            description: "70% Increase in 30 Days"
        };

        vm.infoBox6 = {
            icon: "fa fa-thumbs-o-up",
            title: "Likes",
            number: "41,410",
            mainBackground: "bg-green",
            process: 60,
            description: "60% Increase in 30 Days"
        };

        vm.infoBox7 = {
            icon: "fa fa-calendar",
            title: "Events",
            number: "41,410",
            mainBackground: "bg-yellow",
            process: 35,
            description: "35% Increase in 30 Days"
        };

        vm.infoBox8 = {
            icon: "fa fa-comments-o",
            title: "Comments",
            number: "41,410",
            mainBackground: "bg-red",
            process: 99,
            description: "99% Increase in 30 Days"
        };
    }
})();

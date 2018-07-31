(function () {
    "use strict";

    angular.module("adminlte").factory("UserService", ServiceFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    ServiceFn.$inject = ["$location"];

    /**
     * Service
     * @param $location
     * @returns {{getUser: (function(): {name: null, image: null, registerDate: null, job: null}), isLogined: (function(): boolean), login: loginFn, logout: logoutFn}}
     * @constructor
     */
    function ServiceFn($location) {
        var user = {
            name: null,
            image: null,
            registerDate: null,
            job: null
        };

        return {
            getUser: getUserFn,
            isLogined: isLoginedFn,
            login: loginFn,
            logout: logoutFn
        };

        function getUserFn() {
            return user;
        }

        function isLoginedFn() {
            return user.name !== null;
        }

        function loginFn(userData) {
            user.name = userData.name;
            user.image = userData.image;
            user.registerDate = userData.registerDate;
            user.job = userData.job;

            $location.path("/");
        }

        function logoutFn() {
            user.name = null;
            user.image = null;
            user.registerDate = null;
            user.job = null;

            $location.path("/login");
        }
    }
})();
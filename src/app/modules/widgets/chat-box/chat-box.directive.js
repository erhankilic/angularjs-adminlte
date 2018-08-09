(function () {
    'use strict';

    angular.module('adminlte').directive('chatBox', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {}, bindToController: boolean, controller: ControllerFn, controllerAs: string, templateUrl: string}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {
                data: "="
            },
            bindToController: true,
            link: linkFn,
            controller: ControllerFn,
            controllerAs: "vmChat",
            templateUrl: "app/modules/widgets/chat-box/chat-box.html"
        };

    }

    function linkFn(scope, elem, attr) {
        scope.bodyId = attr.id + "-body";
        // SLIMSCROLL FOR CHAT WIDGET
        window.setTimeout(function () {
            $('#' + scope.bodyId).slimScroll({
                height: '250px',
                start: "bottom"
            });
        }, 250);
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;

        vm.message = "";

        vm.send = sendFn;

        function sendFn() {
            if (vm.message !== "") {
                vm.data.chat.push({
                    user: "user1",
                    time: "8:15",
                    message: vm.message,
                    attachment: null
                });
                vm.message = "";
            }
        }
    }
})();

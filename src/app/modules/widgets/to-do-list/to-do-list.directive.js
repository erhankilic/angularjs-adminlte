(function () {
    'use strict';

    angular.module('adminlte').directive('toDoList', DirectiveFn);

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
                color: "@",
                data: "="
            },
            bindToController: true,
            link: linkFn,
            controller: ControllerFn,
            controllerAs: "vmTodo",
            templateUrl: "app/modules/widgets/to-do-list/to-do-list.html"
        };

    }

    /**
     * Link
     * @param scope
     * @param elem
     * @param attr
     */
    function linkFn(scope, elem, attr) {
        scope.bodyId = attr.id + "-body";
        // SLIMSCROLL FOR TO DO LIST WIDGET
        window.setTimeout(function () {
            $('#' + scope.bodyId).slimScroll({
                height: '250px',
                start: "top"
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

        vm.newTodo = "";
        vm.search = "";

        vm.add = addFn;
        vm.delete = deleteFn;

        /**
         * Adds to do item to list
         */
        function addFn() {
            if (vm.newTodo !== "") {
                vm.data.unshift({
                    name: vm.newTodo,
                    time: new Date(),
                    is_completed: false
                });
                vm.newTodo = "";
            }
        }

        /**
         * Deletes to do item from list
         * @param index
         */
        function deleteFn(index) {
            var result = confirm("Are you sure want to delete?");

            if (result) {
                vm.data.splice(index, 1);
            }
        }
    }
})();

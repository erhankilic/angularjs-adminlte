(function () {
    'use strict';

    angular.module('adminlte').directive('wysihtml5', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, require: string, scope: {ngModel: string}, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "A",
            require: '^ngModel',
            scope: {
                ngModel: "="
            },
            link: linkFn
        };

    }

    /**
     * Link
     * @param $scope
     * @param $element
     * @param $attrs
     * @param $ctrl
     */
    function linkFn($scope, $element, $attrs, $ctrl)  {
        window.setTimeout(function () {
            var element = $("#" + $attrs.id);

            // bootstrap WYSIHTML5 - text editor
            element.wysihtml5({
                composerClassName: $attrs.id + "-editor"
            });
        }, 250);
    }
})();

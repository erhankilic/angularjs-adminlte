(function () {
    'use strict';

    angular.module('adminlte').run(RunFn);

    /**
     * Run
     *
     * @constructor
     */
    function RunFn() {
        $.widget.bridge('uibutton', $.ui.button);
    }

})();





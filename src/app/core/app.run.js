(function () {
    'use strict';

    angular.module('adminlte').run(RunFn);

    function RunFn() {
        $.widget.bridge('uibutton', $.ui.button);
    }

})();





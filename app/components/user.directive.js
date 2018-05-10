'use strict';

angular.module('app').component('user', {
    templateUrl: '/components/user.directive.html',
    controller: userComponentController,
    controllerAs: 'UCC',
    bindings: {
        data: "<",
        field: "<",
        value: "<",
        onUpdate: "&"
    }
});

function userComponentController() {
    var ctrl = this;
    ctrl.update = (field, value) => {
        ctrl.onUpdate({ field: field, value: value });
    }
}
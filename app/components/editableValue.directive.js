'use strict';

angular.module('app').component('editableValue', {
    templateUrl: '/components/editableValue.directive.html',
    controller: editableValueComponentController,
    controllerAs: 'EVCC',
    bindings: {
        value: "<",
        onUpdate: "&"
    }
})

function editableValueComponentController() {
    var ctrl = this;
    ctrl.editMode = false;
    ctrl.handleModeChange = function () {
        if (ctrl.editMode) {
            ctrl.onUpdate({ value: ctrl.value });
            ctrl.valueCopy = ctrl.value;
        }
        ctrl.editMode = !ctrl.editMode;
    }
    ctrl.reset = function() {
        ctrl.value = ctrl.valueCopy;
    }
    ctrl.$onInit = function () {
        ctrl.valueCopy = ctrl.value;
    }
}
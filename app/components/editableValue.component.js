'use strict';

angular.module('app').component('editableValue', {
    templateUrl: '/components/editableValue.component.html',
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
    ctrl.handleModeChange = () => {
        if (ctrl.editMode) {
            ctrl.onUpdate({ value: ctrl.value });
            ctrl.valueCopy = ctrl.value;
        }
        ctrl.editMode = !ctrl.editMode;
    }
    ctrl.reset = () => {
        ctrl.value = ctrl.valueCopy;
    }
    ctrl.$onInit = () => {
        ctrl.valueCopy = ctrl.value;
    }
}
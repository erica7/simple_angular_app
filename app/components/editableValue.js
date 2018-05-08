function EditableValueController() {
    var ctrl = this;
    ctrl.editMode = false;
    ctrl.handleModeChange = function () {
        if (ctrl.editMode) {
            ctrl.onUpdate({ value: ctrl.value });
            ctrl.valueCopy = ctrl.value;
        }
        ctrl.editMode = !ctrl.editMode;
    }
    ctrl.$onInit = function () {
        ctrl.valueCopy = ctrl.value;
    }
}

angular.module('app').component('editableValue', {
    templateUrl: '/components/editableValue.html',
    controller: EditableValueController,
    controllerAs: 'EVC',
    bindings: {
        value: "<",
        onUpdate: "&"
    }
})
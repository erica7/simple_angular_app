function EditableValueController() {
    var ctrl = this;
    ctrl.editMode = false;
    ctrl.handleModeChange = function () {
        if (ctrl.editMode) {
            console.log("should run onUpdate next...")
            ctrl.onUpdate({value: ctrl.value});
            ctrl.valueCopy = ctrl.value;
        }
        ctrl.editMode = !ctrl.editMode;
    }
    ctrl.$onInit = function () {
        ctrl.valueCopy = ctrl.value;
    }
}

app.component('editableValue', {
    templateUrl: '/components/editableValue.html',
    controller: EditableValueController,
    bindings: {
        value: "<",
        onUpdate: "&"
    }
})
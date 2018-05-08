function UserComponentController() {
    var ctrl = this;
    ctrl.update = function (field, value) {
        console.log("ctrl.update! ")
        console.log("field! " + field)
        console.log("value! " + value)
        ctrl.onUpdate({ field: field, value: value });
    }
}

angular.module('app').component('user', {
    templateUrl: '/components/user.html',
    controller: UserComponentController,
    controllerAs: 'UCC',
    bindings: {
        data: "<",
        field: "<",
        value: "<",
        onUpdate: "&"
    }
});
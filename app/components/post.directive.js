'use strict';

angular.module('app').component('post', {
    templateUrl: '/components/post.directive.html',
    controller: postComponentController,
    controllerAs: 'PCC',
    bindings: {
        data: "<",
        name: "<",
        showFullPost: "<", 
        getName: "&",
        onUpdate: "&"
    }
})

function postComponentController() {
    var ctrl = this;
    ctrl.handleChangeLike = function() {
        console.log("handleChangeLike");
        console.log("liked?: " + ctrl.data.liked)
        ctrl.onUpdate({id: ctrl.data.id, liked: !ctrl.data.liked})
    }
    ctrl.$onInit = function() {
        console.log("init post id: " + ctrl.data.id)
    }
}
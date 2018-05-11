'use strict';

angular.module('app').component('post', {
    templateUrl: '/components/post.component.html',
    controller: postComponentController,
    controllerAs: 'PCC',
    bindings: {
        data: "<",
        name: "<",
        showFullPost: "<",
        getName: "&"
    }
})

// The postComponentController has access to the postFactory via dependency injection
function postComponentController(postFactory) {
    var ctrl = this;
    ctrl.handleChangeLike = () => {
        ctrl.data.liked = !ctrl.data.liked ? true : false;
        postFactory.update(ctrl.data.id, ctrl.data)
            .then((res) => {
                console.log("success: ", res);
                // When the update is successful, the local data-model is updated with the response (the updated post object)
                ctrl.data = res.data;
            })
            .catch((err) => {
                console.log("error: ", err)
                // When the update fails, the local data-model is reset to its previous value
                ctrl.data.liked = !ctrl.data.liked ? true : false;
            })
    }
}
angular.module('app').component('comment', {
    templateUrl: '/components/comment.html',
    bindings: {
        data: "<",
    }
})
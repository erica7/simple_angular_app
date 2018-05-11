'use strict';

angular.module('app').component('comment', {
    templateUrl: '/components/comment.component.html',
    bindings: {
        data: "<",
    }
})
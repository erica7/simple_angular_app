'use strict';

angular.module('app').component('comment', {
    templateUrl: '/components/comment.directive.html',
    bindings: {
        data: "<",
    }
})
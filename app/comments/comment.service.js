'use strict';

angular.module('app').factory('commentFactory', function ($http) {
    var factory = {};
    factory.showPosts = function (id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + id).then(callback);
    }
    return factory;
});
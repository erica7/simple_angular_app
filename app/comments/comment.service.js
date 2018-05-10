'use strict';

angular.module('app').factory('commentFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.showPosts = (id, successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'comments?postId=' + id).then(successCallback, failureCallback);
    }
    return factory;
});
'use strict';

angular.module('app').factory('commentFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.show = (id) => {
        return $http.get(apiRootUrl + 'comments?postId=' + id);
    }
    return factory;
});
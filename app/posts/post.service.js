'use strict';

angular.module('app').factory('postFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.index = () => {
        return $http.get(apiRootUrl + 'posts');
    }
    factory.show = (id) => {
        return $http.get(apiRootUrl + 'posts/' + id);
    }
    factory.showUsers = (id) => {
        return $http.get(apiRootUrl + 'posts?userId=' + id);
    }
    factory.update = (id, post) => {
        return $http.put(apiRootUrl + 'posts/' + id, post);
    }
    return factory;
});
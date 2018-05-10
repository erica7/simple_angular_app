'use strict';

angular.module('app').factory('postFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.index = (successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'posts').then(successCallback, failureCallback);
        // return $http.get(apiRootUrl + 'posts')//.then(successCallback, failureCallback);
    }
    factory.show = (id, successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'posts/' + id).then(successCallback, failureCallback);
    }
    factory.showUsers = (id, successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'posts?userId=' + id).then(successCallback, failureCallback);
    }
    factory.update = (id, post, successCallback, failureCallback) => {
        $http.put(apiRootUrl + 'posts/' + id, post).then(successCallback, failureCallback);
    }
    return factory;
});
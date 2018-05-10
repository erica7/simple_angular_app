'use strict';

angular.module('app').factory('userFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.index = (successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'users').then(successCallback, failureCallback);
    }
    factory.show = (id, successCallback, failureCallback) => {
        $http.get(apiRootUrl + 'users/' + id).then(successCallback, failureCallback);
    }
    factory.update = (id, user, successCallback, failureCallback) => {
        $http.put(apiRootUrl + 'users/' + id, user).then(successCallback, failureCallback);
    }
    return factory;
});
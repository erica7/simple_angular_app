'use strict';

angular.module('app').factory('userFactory', function ($http, apiRootUrl) {
    var factory = {};
    factory.index = () => {
        return $http.get(apiRootUrl + 'users');
    }
    factory.show = (id) => {
        return $http.get(apiRootUrl + 'users/' + id);
    }
    factory.update = (id, user) => {
        return $http.put(apiRootUrl + 'users/' + id, user);
    }
    return factory;
});
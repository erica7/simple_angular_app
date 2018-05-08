'use strict';

angular.module('app').factory('postFactory', function ($http) {
    var factory = {};
    factory.index = function (callback) {
        $http.get('http://jsonplaceholder.typicode.com/posts').then(callback);
    }
    factory.show = function (id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/posts/' + id).then(callback);
    }
    factory.showUsers = function (id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/posts?userId=' + id).then(callback);
    }
    factory.update = function(id, post, callback) {
        $http.put('http://jsonplaceholder.typicode.com/posts/' + id).then(callback);
    }
    return factory;
});
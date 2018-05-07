// angular.module('app')

app.factory('postFactory', function($http) {
    console.log("CS postFactory initialized!");
    var factory = {};

    factory.index = function(callback) {
        console.log("factory.index called")
        $http.get('http://jsonplaceholder.typicode.com/posts').then(callback);
    }

    factory.show = function(id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/posts/' + id).then(callback);
    }

    factory.showUsers = function(id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/posts?userId=' + id).then(callback);
    }

    return factory;
});
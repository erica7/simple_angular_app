app.factory('userFactory', function($http) {
    var factory = {};
    factory.index = function(callback) {
        $http.get('http://jsonplaceholder.typicode.com/users').then(callback);
    }
    factory.show = function(id, callback) {
        $http.get('http://jsonplaceholder.typicode.com/users/' + id).then(callback);
    }
    factory.update = function(id, user, callback) {
        $http.put('http://jsonplaceholder.typicode.com/users/' + id).then(callback);
    }
    return factory;
});
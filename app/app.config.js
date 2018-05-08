'use strict';

angular.module('app').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/posts/index.html',
                controller: 'PostsController as PC'
            }).
            when('/users/:id', {
                templateUrl: '/users/user.html',
                controller: 'UsersController as UC'
            }).
            when('/posts/:id', {
                templateUrl: '/posts/post.html',
                controller: 'PostsController as PC'
            }).
            otherwise({ redirectTo: '/' })
    }
]);
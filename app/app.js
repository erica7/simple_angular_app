'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: '/partials/index.html',
                controller: 'PostsController as PC'
            }). 
            when('/users/:id', {
                templateUrl: '/partials/user.html',
                controller: 'UsersController as UC'
            }).
            when('/posts/:id', {
                templateUrl: '/partials/post.html',
                controller: 'PostsController as PC'
            }).
            otherwise({redirectTo: '/'})
    }
]);
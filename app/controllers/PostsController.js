// angular.module('app')

app.controller('PostsController', function (postFactory, $routeParams) {
    console.log('CS PostsController initialized!');
    var self = this;
    self.posts = [];
    self.post = {};
    self.errors = [];
    self.index = function () {
        postFactory.index(function (res) {
            self.posts = res.data;
        })
    }
    self.show = function () {
        postFactory.show($routeParams.id, function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.post = res.data;
            }
        })
    }
    self.showUsers = function () {
        postFactory.showUsers($routeParams.id, function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.posts = res.data;
            }
        })
    }
});
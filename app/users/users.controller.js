'use strict';

angular.module('app').controller('UsersController', function (userFactory, $routeParams) {
    var self = this;
    self.errors = [];
    self.posts = [];
    self.user = {};
    self.users = [];
    self.index = function () {
        userFactory.index(function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.users = res.data;
            }
        })
    }
    self.show = function () {
        userFactory.show($routeParams.id, function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.user = res.data;
            }
        })
    }
    self.getName = function(userId) {
        return self.users.filter(function (user) { return user.id === userId });
    }
    self.update = function(field, value) {
        self.user[field] = value;
        userFactory.update($routeParams.id, self.user, function(res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                console.log("UsersController.update: " + res.status + " " + res.statusText)
            }
        })
    }
});
'use strict';

angular.module('app').controller('UsersController', function (userFactory, $routeParams) {
    var self = this;
    self.errors = [];
    self.posts = [];
    self.user = {};
    self.users = [];
    self.index = () => {
        userFactory.index((res) => {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.users = res.data;
            }
        }, (res) => this.onFailure(res))
    }
    self.show = () => {
        userFactory.show($routeParams.id, (res) => {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.user = res.data;
            }
        }, (res) => this.onFailure(res))
    }
    self.getName = (userId) => {
        return self.users.filter((user) => { return user.id === userId });
    }
    self.update = (field, value) => {
        self.user[field] = value;
        userFactory.update($routeParams.id, self.user, (res) => {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                console.log("UsersController.update: " + res.status + " " + res.statusText)
            }
        }, (res) => this.onFailure(res))
    }
    self.onFailure = (res) => {
        console.log(res.status + " - " + res.statusText);
        self.errors.push(res.status + " - " + res.statusText);
    }
});
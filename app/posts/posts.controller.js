'use strict';

angular.module('app').controller('PostsController', function ($routeParams, postFactory) {
    var self = this;
    self.errors = [];
    self.post = {};
    self.posts = [];
    self.index = () => {
        postFactory.index()
            .then((res) => {
                self.posts = res.data;
            })
            .catch((err) => {
                self.onFailure(err)
            })
    }
    self.show = () => {
        postFactory.show($routeParams.id)
            .then((res) => {
                self.post = res.data;
            })
            .catch((err) => {
                self.onFailure(err)
            })
    }
    self.showUsers = () => {
        postFactory.showUsers($routeParams.id)
            .then((res) => {
                self.posts = res.data;
            })
            .catch((err) => {
                self.onFailure(err)
            })
    }
    self.getPost = (id) => {
        postFactory.show(id)
            .then((res) => {
                console.log("success: ", res)
                self.post = res.data;
            })
            .catch((err) => {
                self.onFailure(err)
            })
    }
    self.onFailure = (err) => {
        console.log("error: ", err);
        self.errors.push(err.status + " - " + err.statusText);
    }
});
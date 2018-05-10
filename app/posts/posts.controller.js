'use strict';

angular.module('app').controller('PostsController', function ($routeParams, postFactory) { //, posts) {
    var self = this;
    self.errors = [];
    self.post = {};
    self.posts = [];
    // self.posts = posts;
    self.index = () => {
        postFactory.index(function (res) {
            self.posts = res.data;
        }, (res) => this.onFailure(res) )
    }
    self.show = () => {
        postFactory.show($routeParams.id, function (res) {
            self.post = res.data;
        }, (res) => this.onFailure(res) )
    }
    self.showUsers = () => {
        postFactory.showUsers($routeParams.id, function (res) {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.posts = res.data;
            }
        }, (res) => this.onFailure(res) )
    }
    self.updateLikes = (id, liked) => {
        self.post.liked = liked;
        postFactory.update(id, self.post, function (res) {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                // self.post = res.data;
            }
        }, (res) => this.onFailure(res) )
    }
    self.onFailure = (res) => {
        self.errors.push(res.status + " - " + res.statusText);
    }
});
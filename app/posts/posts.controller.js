'use strict';

angular.module('app').controller('PostsController', function (postFactory, $routeParams) {
    var self = this;
    self.errors = [];
    self.post = {};
    self.posts = [];
    self.index = function () {
        console.log("posts controller index")
        postFactory.index(function (res) {
            self.posts = res.data;
        })
    }
    self.show = function () {
        console.log("posts controller show")
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
        console.log("posts controller showUsers")
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
    self.updateLikes = function (id, liked) {
        console.log("posts controller updateLikes... updating " + id + "'s like status: " + liked)
        self.post.liked = liked;
        postFactory.update(id, self.post, function(res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                // self.post = res.data;
            }
        })
    }
});
'use strict';

angular.module('app').controller('PostsController', function ($routeParams, postFactory) {
    var self = this;
    self.errors = [];
    self.post = {};
    self.posts = [];
    // self.f_posts = postFactory.posts;
    // self.f_post = postFactory.post;

    self.index = () => {
        postFactory.index()
            .then(() => {
                self.posts = postFactory.posts;
            })
            .catch(self.onFailure);
    }
    self.show = () => {
        postFactory.show($routeParams.id)
            .then(() => {
                self.post = postFactory.post;
            })
            .catch(self.onFailure);
    }

    // self.index = () => {
    //     postFactory.index()
    //         .then((res) => {
    //             self.posts = res.data;
    //         })
    //         .catch(self.onFailure)
    // }
    // self.show = () => {
    //     postFactory.show($routeParams.id)
    //         .then((res) => {
    //             self.post = res.data;
    //         })
    //         .catch(self.onFailure)
    // }
    self.showUsers = () => {
        postFactory.showUsers($routeParams.id)
            .then((res) => {
                self.posts = res.data;
            })
            .catch(self.onFailure)
    }
    self.getPost = (id) => {
        postFactory.show(id)
            .then((res) => {
                console.log("success: ", res)
                self.post = res.data;
            })
            .catch(self.onFailure)
    }
    self.onFailure = (err) => {
        console.log("error: ", err);
        self.errors.push(err.status + " - " + err.statusText);
    }
});
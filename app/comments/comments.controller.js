'use strict';

angular.module('app').controller('CommentsController', function (commentFactory, $routeParams) {
    var self = this;
    self.comments = [];
    self.showPosts = function () {
        commentFactory.showPosts($routeParams.id, function (res) {
            if (res.data.errors) {
                //for(let key of Object.keys(res.data.errors))
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.comments = res.data;
            }
        })
    }
});

//TODO use 'posts/:id/comments' instead 
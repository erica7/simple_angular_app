'use strict';

angular.module('app').controller('CommentsController', function (commentFactory, $routeParams) {
    var self = this;
    self.comments = [];
    self.showPosts = () => {
        commentFactory.showPosts($routeParams.id, (res) => {
            if (res.data.errors) {
                for (let key of Object.keys(res.data.errors)) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.comments = res.data;
            }
        }, (res) => this.onFailure(res))
    }
    self.onFailure = (res) => {
        console.log(res.status + " - " + res.statusText);
        self.errors.push(res.status + " - " + res.statusText);
    }
});

//TODO alternative: use 'posts/:id/comments' service instead; relocate logic to Posts Controller
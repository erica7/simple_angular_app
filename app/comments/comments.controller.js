'use strict';

angular.module('app').controller('CommentsController', function (commentFactory, $routeParams) {
    var self = this;
    self.comments = [];
    self.show = () => {
        commentFactory.show($routeParams.id)
            .then((res) => {
                self.comments = res.data;
            })
            .catch((err) => {
                self.onFailure(err)
            })
    }
    self.onFailure = (res) => {
        console.log("error: ", err);
        self.errors.push(res.status + " - " + res.statusText);
    }
});

//NOTE alternative: use 'posts/:id/comments' service instead; relocate logic to Posts Controller
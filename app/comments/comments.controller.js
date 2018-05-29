'use strict';

angular.module('app').controller('CommentsController', function (commentFactory, $routeParams) {
    var self = this;
    self.comments = [];
    self.errors = [];

    self.show = () => {
        commentFactory.getSomeComments($routeParams.id)
            .then(() => {
                self.comments = commentFactory.comments;
            })
            .catch(self.onFailure);
    }


    // self.show = () => {
    //     commentFactory.show($routeParams.id)
    //         .then((res) => {
    //             self.comments = res.data;
    //         })
    //         .catch(self.onFailure)
    // }
    self.onFailure = (err) => {
        console.log("error: ", err);
        self.errors.push(err.status + " - " + err.statusText);
    }
});

//NOTE alternative: use 'posts/:id/comments' service instead; relocate logic to Posts Controller
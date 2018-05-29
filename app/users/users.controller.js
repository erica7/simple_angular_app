'use strict';

angular.module('app').controller('UsersController', function (userFactory, $routeParams) {
    var self = this;
    self.errors = [];
    self.posts = [];
    self.user = {};
    self.users = [];

    self.index = () => {
        userFactory.index()
            .then(() => {
                self.users = userFactory.users;
            })
            .catch(self.onFailure);
    }
    self.show = () => { 
        userFactory.show($routeParams.id)
            .then(() => {
                self.user = userFactory.user;
                console.log("self.user: ", self.user);
            })
            .catch(self.onFailure);
    }


    // self.index = () => {
    //     userFactory.index()
    //         .then((res) => {
    //             self.users = res.data;
    //         })
    //         .catch(self.onFailure)
    // }
    // self.show = () => {
    //     userFactory.show($routeParams.id)
    //         .then((res) => {
    //             self.user = res.data;
    //         })
    //         .catch(self.onFailure)
    // }
    self.getName = (userId) => {
        return self.users.filter((user) => { return user.id === userId });
    }
    self.update = (field, value) => {
        self.user[field] = value;
        userFactory.update($routeParams.id, self.user)
            .then((res) => {
                console.log("success: ", res);
                self.user = res.data;
            })
            .catch(self.onFailure)
    }
    self.onFailure = (err) => {
        console.log("error: ", err);
        self.errors.push(err.status + " - " + err.statusText);
    }
});
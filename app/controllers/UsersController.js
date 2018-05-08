angular.module('app').controller('UsersController', function (userFactory, $routeParams) {
    var self = this;
    self.errors = [];
    self.posts = [];
    self.user = {};
    self.users = [];
    self.index = function () {
        userFactory.index(function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.users = res.data;
            }
        })
    }
    self.show = function () {
        userFactory.show($routeParams.id, function (res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                self.user = res.data;
            }
        })
    }
    // self.filterUserName = function (userId) {
    //     console.log("filterUserName")
    //     return self.users.filter(function (user) { return user.id === userId });
    // }
    self.getNameViaApi = function(userId) {
        userFactory.getNameViaApi(userId, function(res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                    return;
                }
            } else {
                self.user = res.data;
                var arr = [self.user]
                return arr;
            }
        })
    }
    self.getName = function(userId) {
        console.log("getName")
        // console.log(self.users)
        return self.users.filter(function (user) { return user.id === userId });
    }
    self.update = function(field, value) {
        console.log(self.user);
        self.user[field] = value;
        console.log(self.user);
        userFactory.update($routeParams.id, self.user, function(res) {
            if (res.data.errors) {
                for (key in res.data.errors) {
                    var error = res.data.errors[key];
                    console.log(error)
                    self.errors.push(error);
                }
            } else {
                console.log(res)
                // self.user = res.data;
            }
        })
        // self.index()
    }
});
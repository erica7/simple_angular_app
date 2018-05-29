'use strict';

angular.module('app').factory('userFactory', function ($q, $http, apiRootUrl) {
    var factory = {};
    factory.users = [];

    factory.index = () => {
        let deferred = $q.defer();
        if (factory.users.length > 0) {
            deferred.resolve("Success!");
        } else {
            $http.get(apiRootUrl + 'users')
                .then((res) => {
                    factory.users = res.data;
                    deferred.resolve("success!");
                })
                .catch((err) => {
                    deferred.reject(err);
                })
        }
        return deferred.promise;
    }
    factory.show = (id) => {
        let deferred = $q.defer();
        factory.index()
            .then(() => {
                factory.user = factory.users.filter((user) => { return user.id == id })[0];
                if (factory.user != null && factory.user != {}) {
                    deferred.resolve("success!");
                } else {
                    deferred.reject(`No user for id ${id} found.`);
                }
            })
            .catch((err) => {
                deferred.reject(err);
            })
        return deferred.promise;
    }
    factory.update = (id, user) => {
        let deferred = $q.defer();
        $http.put(apiRootUrl + 'users/' + id, user) 
            .then((res) => {
                //update local info 
                deferred.resolve('success!');
            })
            .catch((err) => {
                //revert local info 
                deferred.reject(err);
            })
        return deferred.promise;
    }

    // factory.index = () => {
    //     return $http.get(apiRootUrl + 'users');
    // }
    // factory.show = (id) => {
    //     return $http.get(apiRootUrl + 'users/' + id);
    // }
    factory.update = (id, user) => {
        return $http.put(apiRootUrl + 'users/' + id, user);
    }
    return factory;
});
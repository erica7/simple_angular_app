'use strict';
// import { Subject } from 'rxjs/Subject';
// import Subject from 'rxjs/Subject';
// let Subject = require('rxjs/Subject');

angular.module('app').factory('postFactory', function ($q, $http, apiRootUrl) {
    var factory = {};
    factory.posts = [];
    factory.post = {};

    factory.getPosts = () => {
        return factory.posts;
    }

    factory.index = () => {
        // console.log('subject: ', Subject);
        var deferred = $q.defer();
        if (factory.posts.length > 0) {
            deferred.resolve("success!")
        } else {
            $http.get(apiRootUrl + 'posts')
                .then((res) => {
                    factory.posts = res.data;
                    deferred.resolve("success!");
                })
                .catch((err) => {
                    deferred.reject(err);
                })
        }
        return deferred.promise;
    }
    factory.show = (id) => {  
        var deferred = $q.defer();
        factory.index()
            .then(() => {
                factory.post = factory.posts.filter((post) => { return post.id == id })[0];
                if (factory.post != null && factory.post != {}) {
                    deferred.resolve("success!");
                } else {
                    deferred.reject(`No post for id ${id} found.`);
                }
            })
            .catch((err) => {
                deferred.reject(err);
            })
        return deferred.promise;
    }

    // factory.index = () => {
    //     return $http.get(apiRootUrl + 'posts');
    // }
    // factory.show = (id) => {
    //     return $http.get(apiRootUrl + 'posts/' + id);
    // }
    factory.showUsers = (id) => {
        return $http.get(apiRootUrl + 'posts?userId=' + id);
    }
    factory.update = (id, post) => {
        return $http.put(apiRootUrl + 'posts/' + id, post);
    }
    return factory;
});
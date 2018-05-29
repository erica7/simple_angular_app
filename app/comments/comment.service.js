'use strict';

angular.module('app').factory('commentFactory', function ($q, $http, apiRootUrl) {
    var factory = {};
    factory.comments = [];
    factory.comment = {}; 
    factory.postIds = {};

    //lazy load
    factory.getSomeComments = (id) => {
        var deferred = $q.defer();
        console.log("factory.postIds: ", factory.postIds)
        console.log("factory.postIds[id]: ", factory.postIds[id])
        if (factory.postIds[id]) {
            deferred.resolve("Success!");
        } else {
            $http.get(apiRootUrl + 'comments?postId=' + id)
                .then((res) => {
                    factory.comments = factory.comments.concat(res.data);
                    factory.postIds[id] = 'true'
                    deferred.resolve("Success!")
                })
                .catch((err) => {
                    deferred.reject(err);
                })
        }
        return deferred.promise;
    } 

    factory.show = (id) => {
        return $http.get(apiRootUrl + 'comments?postId=' + id);
    }
    return factory;
});
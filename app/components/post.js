angular.module('app').component('post', {
    templateUrl: '/components/post.html',
    // controller: PostController,
    controller: function () {
        var ctrl = this;
        // ctrl.name = ctrl.getName;
        // ctrl.getName = function () {
        //     ctrl.getName({ value: ctrl.data.userId });
        // }
        ctrl.$onInit = function () {
            // console.log("ctrl.data: " + ctrl.data)
            // var str = JSON.stringify(ctrl.data);
            // console.log("str: " + str)
            // ctrl.name = ctrl.getName({ value: ctrl.data.userId })
            // console.log("ctrl.name: " + ctrl.name)
        }
    },
    bindings: {
        data: "<",
        getName: "&",
        name: "<",
        fullPost: "<"
    }
})
angular.module("chat").
controller("RoomCtrl", function ($scope,$http,socket) {
    $scope.reg=function(){
        $scope.user={};
        $http({
            url:'/users/reg',
            method:"POST",
            data:$scope.user
        })
    }
});
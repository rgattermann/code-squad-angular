var MyApp = angular.module('MyApp', []);

MyApp.controller('diretivasController', function($scope){
    $scope.msg = function(msg) {
        alert(msg);
    };
});

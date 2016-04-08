var Usuarios = angular.module('Usuarios', ['ngRoute', 'ngResource']);

Usuarios.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/usuarios', {
            templateUrl : 'templates/usuarios/lista.html',
            controller : 'UsuariosController'
        })
        .when('/usuarios/:id/edita', {
            templateUrl : 'templates/usuarios/editar.html',
            controller : 'UsuariosController'
        })
        .when('/usuarios/:id/remove', {
            controller : 'UsuariosController'
        })
        .when('/usuarios/add', {
            templateUrl : 'templates/usuarios/add.html',
            controller : 'UsuariosController'
        });
}]);

Usuarios.factory('Usuarios', ['$resource', function($resource){
    return $resource('http://localhost:8765/server/usuarios/:id', null, {
        'update': {
            method: 'PUT'
        }
    });
}])

Usuarios.controller('UsuariosController', ['$scope','$http', function($scope, $http) {

}]);

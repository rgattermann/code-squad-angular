var Usuarios = angular.module('Usuarios', ['ngRoute']);

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

Usuarios.controller('UsuariosController', ['$scope','$http', function($scope, $http) {

}]);

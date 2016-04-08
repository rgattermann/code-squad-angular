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

Usuarios.controller('UsuariosController', ['$scope', 'Usuarios', '$location', function($scope, Usuario, $location) {
    $scope.usuarios = Usuario.query();

    $scope.novo = function() {
        Usuario.save(
            {},
            $scope.usuario,
            function() {//success
                if(confirm('Salvo com sucesso. Voltar para aindex?'))
                        $location.path('/usuario');
            },
            function(data, status) {//error
                alert('Não possível salvar! Erro '+status);
            }
        );
    };
}]);

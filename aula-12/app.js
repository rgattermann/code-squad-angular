var MyApp = angular.module('MyApp', []);

MyApp.controller('formularioController', function($scope){
    $scope.reset = function() {
        $scope.formulario = '';
    }
    $scope.salvar = function() {
        console.log('a');
        $scope.salvo = $scope.formulario;
    }
});

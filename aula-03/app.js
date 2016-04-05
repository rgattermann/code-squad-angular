var MyApp = angular.module('MyApp', []);

MyApp.controller('listaController', function($scope){
    $scope.tarefas = [
        {'nome' : 'ir trabalhar', 'prioridade': 5},
        {'nome' : 'ir a praia', 'prioridade': 1},
    ];
})

var MyApp = angular.module('MyApp', []);

MyApp.controller('listaController', function($scope){
    $scope.tarefas = [
        {'nome' : 'ir trabalhar', 'prioridade': 5},
        {'nome' : 'ir a praia', 'prioridade': 1},
    ];

    $scope.adicionar = function(){
        $scope.tarefas.push($scope.t);
        $scope.t = '';
    };

    $scope.remover = function(i){
        $scope.tarefas.splice(i,1);
    };
})

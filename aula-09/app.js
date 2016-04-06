var MyApp = angular.module('MyApp', []);

MyApp.controller('listaController', function($scope){
    $scope.tarefas = [
        {'nome' : 'ir trabalhar', 'prioridade': 5},
        {'nome' : 'ir a praia', 'prioridade': 1},
    ];
});

MyApp.directive('myTarefas', function(){
    return {
        restrict: 'AEC',
        template: "Eu quero {{tarefa.nome}} com prioridade {{tarefa.prioridade}}!"
    };
});

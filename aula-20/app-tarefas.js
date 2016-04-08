var Tarefas = angular.module('Tarefas', []);

Tarefas.directive('rgTarefas', [function(){
    return {
        templateUrl: 'templates/tarefas/tema.html'
        link: function($scope, iElm, iAttrs, controller) {

        }
    };
}]);

Tarefas.controller('listaController', function($scope){
    $scope.tarefas = [
        {'nome' : 'ir trabalhar', 'prioridade': 5},
        {'nome' : 'ir a praia', 'prioridade': 1},
    ];
})

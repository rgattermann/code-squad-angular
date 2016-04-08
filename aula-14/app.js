var MyApp = angular.module('MyApp', []);
var INTEGER_REGEXP = /^\-?\d+$/;
MyApp.directive('idade', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.idade = function(modelValue, viewValue) {
                if(ctrl.$isEmpty(modelValue)) {
                    return false;
                }

                if(INTEGER_REGEXP.test(viewValue)) {
                    if(viewValue >= 13)
                        return true;
                    return false;
                }

                return false;
            }
        }
    };
});

MyApp.controller('formularioController', function($scope, $http){
    $http.get('http://localhost:8080/usuarios')
        .success(function(data, status, headers, config) {
            if(data.length !== 0)
                $scope.formulario = data;
        })
        .error(function(data, status, headers, config) {
            console.log('Algo deu errado, erro: '+status);
        });
    $scope.reset = function() {
        $scope.formulario = ''
    }
    $scope.salvar = function() {
        //$scope.salvo = $scope.formulario;
        var dados = {};
        dados.form = $scope.formulario;

        var config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        $http.post('http://localhost:8080/usuarios/save', dados, config)
            .success(function(data, status, headers, config) {
                if(data.length !== 0)
                    $scope.formulario = data;
            })
        .error(function(data, status, headers, config) {
            $scope.salvo = 'Alguma coisa deu errado, veja o console.';
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    }
});

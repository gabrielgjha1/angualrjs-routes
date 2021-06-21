var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  

    $scope.menuSuperiror = 'parciales/menu.html';

    $scope.setAction = function(Opcion){

        $scope.mInicio ="";
        $scope.mProfesores ="";
        $scope.mAlumnos ="";

        $scope[Opcion] = "active";

    }

}]);
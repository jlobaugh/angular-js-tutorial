var myApp = angular.module('myApp', [] );

myApp.controller( 'totalCtrl', [ $scope, $http, function  totalCtrl($scope,$http) 
                  {
                      $http.get("items.json").success( 
                                     function(response) {$scope.items = response;}
                                     );                      
                   } 
                               ] 
                 );
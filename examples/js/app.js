// Define the `myApp` module
var myApp = angular.module('myApp', []);

 // Define the `itemListCtrlr` controller on the `myApp` module
 myApp.controller('itemListCtrlr', function itemListCtrlr($scope) {
  $scope.items = [
   { name: "Carrots",
  sequenceNum: 1 },
   { name: "Turnips",
  sequenceNum: 15 },
  ];
});
var myApp = angular.module('myApp',[]);
myApp.controller('ctrl', function($scope) {
    $scope.myDate = new Date('2014-03-08T00:00:00');
});
myApp.directive('dateField', function($filter) {
  return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelController) {
           ngModelController.$parsers.push(function(data) {
              //View -> Model
               console.log(data);
              var date = moment(data, 'YYYY-MM-DD', true);
               
              ngModelController.$setValidity('date', date.isValid());
               return date.isValid() ? date.toDate() : undefined;
           });
           ngModelController.$formatters.push(function(data) {
              //Model -> View
              return $filter('date')(data, "yyyy-MM-dd");
           });    
       }
    }
});


angular.module('myApp', [])

.controller('MainCtrl', function($scope) {
  $scope.focusinControl = {};
})

.directive('focusin', function factory() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div>A:{{internalControl}}</div>',
    scope: {
      control: '='
    },
    link: function(scope, element, attrs) {
      scope.internalControl = scope.control || {};
      scope.internalControl.takenTablets = 0;
      scope.internalControl.takeTablet = function() {
        scope.internalControl.takenTablets += 1;
      }
    }
  };
});


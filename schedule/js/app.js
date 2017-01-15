var scheduleInfo = { 
                     startDate : new Date( 2016,10,24,09,00,00,00) ,
                     names : [ "lobaugj", "gaodeng" ]
                   }
;  


var module_ = angular.module('scheduleModule', []);
var controller_ = module_.controller('scheduleController', ['$scope', 'scheduleService', function($scope,scheduleService) {
  $scope.scheduleStartDate = new Date( 2016,10,24,09,00,00,00 );
  var jlSchedule_ = new scheduleService.Schedule( $scope.scheduleStartDate );
  $scope.scheduleItems  = jlSchedule_.addSchedule( [ 'lobaug', 'gaodeng' ] );

  
  } // end controller
]);

var service_ = module_.service( 'scheduleService', [ '$window', function (window_) {
  this.Schedule = window_.jlSchedule; 


}]
);

var directive_ = controller_.directive('myCustomer', function() {
  return {
     restrict: 'E',
     scope: { 
              customerInfo: '=info' 
            },
      templateUrl : "customer.html" 
    }
   } 
);

var templateUrl_ = function(elem, attr) { 
return "customer.html"; };


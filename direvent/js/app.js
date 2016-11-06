

var module_ = angular.module('direventModule', []);
var controller_ = module_.controller('direventController', ['$scope', function($scope) {
  
  $scope.info = {};
  
  $scope.info.callback = function( scope ) {    
    console.log ( "called " );
    
  }  


  } // end controller
]);


var directive_ = controller_.directive('myDirevent', function() {
  return {
     restrict: 'E',
     scope: { 
              info: '=info' 
            },
      templateUrl : "../templates/mydirevent.htm" ,
      link: function(scope, element, attr) {
        element.bind('click', scope.info.callback );
        console.log( "inside link" ); 

            } // end link 

   }
}
 
);



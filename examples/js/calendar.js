(function() {

    "use strict";

    // Define the `myApp` module
    var app = angular.module('myApp', []);
    var scheduleItems = [

        {
            name: "gaodeng",
            product: "rgs",
            startDate: new Date(2016, 10, 31, 9, 0),
            endDate: new Date(2016, 11, 7, 8, 45),
            id: 456
        }, {
            name: "tongwen",
            product: "rgs",
            startDate: new Date(2016, 11, 7, 9, 0),
            endDate: new Date(2016, 11, 14, 8, 45),
            id: 456
        }, {
            name: "dass",
            product: "rgs",
            startDate: new Date(2016, 11, 14, 9, 0),
            endDate: new Date(2016, 11, 21, 8, 45),
            id: 456
        }, {
            name: "lobaugj",
            product: "rgs",
            startDate: new Date(2016, 11, 21, 9, 0),
            endDate: new Date(2016, 11, 28, 8, 45),
            id: 456
        }

    ];
    // Define the `itemListCtrlr` controller on the `myApp` module
    app.controller('calendarController', ["$scope", function calendarController($scope) {
        $scope.myFunc = function() {
            $scope.controlApi.buildCalendar();
        };
        $scope.controlApi = {};
        $scope.controlApi.items = scheduleItems;
    }]);
    // calendar building service
    var service_ = app.service('calendarService', ['$window', function(window_) {

        this.buildCalendar = window_.jlCalendar.buildCalendar;

    }]);



    app.directive("jlCalendar", ['calendarService', function(calendarService) {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "templates/calendar.htm",
                scope: {
                    controlApi: '='
                },


                /*
                      link: function(scope, element, attr) {
                        element.bind('click', scope.info.callback );
                        console.log( "inside link" ); 
                */

                link: function(scope, element, attr) {
                    /*
                    var itemsLength = scope.items.length;
                    var calStartDate_ = _firstSunday(scope.items[0].startDate);
                    var calEndDate_ = _lastSaturday(scope.items[itemsLength - 1].endDate);
                    */

                    /*
                    var calStartDate_ = _firstSunday( scope.items.startDate );
                    var calEndDate_ = _lastSaturday( scope.items.endDate );

                      = _buildCalendar(calStartDate_, calEndDate_ );
                    */





                    scope.internalApi = scope.controlApi || {};
                    scope.internalApi.buildCalendar = function() {
                        var internalApi_ = scope.internalApi;
                        var itemsLength = internalApi_.items.length;
                        /*
                                      var calStartDate_ = _firstSunday(internalApi_.items[0].startDate);
                                      var calEndDate_ = _lastSaturday(internalApi_.items[itemsLength - 1].endDate);
                                      scope.weeks = _buildCalendar( calStartDate_, calEndDate_ );
                        */
                        scope.weeks = calendarService.buildCalendar(internalApi_.items[0].startDate, internalApi_.items[itemsLength - 1].endDate);

                    };
                }
            };
        }]


    );

}());

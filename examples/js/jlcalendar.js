// Define the `myApp` module
var app = angular.module('myApp', []);
var scheduleItems = [

    { name: "gaodeng", product: "rgs", startDate: new Date(2016, 10, 31, 09, 00), endDate: new Date(2016, 11, 07, 08, 45), id: 456 },
    { name: "tongwen", product: "rgs", startDate: new Date(2016, 11, 07, 09, 00), endDate: new Date(2016, 11, 14, 08, 45), id: 456 },
    { name: "dass", product: "rgs", startDate: new Date(2016, 11, 14, 09, 00), endDate: new Date(2016, 11, 21, 08, 45), id: 456 },
    { name: "lobaugj", product: "rgs", startDate: new Date(2016, 11, 21, 09, 00), endDate: new Date(2016, 11, 28, 08, 45), id: 456 }

];
// Define the `itemListCtrlr` controller on the `myApp` module
app.controller('calendarController', ["$scope", function calendarController($scope) {
    $scope.items = scheduleItems
}]);




app.directive("jlCalendar", function () {
    return {
        restrict: "E",
        templateUrl: "templates/jlcalendar.htm",
        scope: {
            items: "="
        },
        link: function (scope) {
            var itemsLength = scope.items.length;
            var calStartDate_ = _firstSunday(scope.items[0].startDate);
            var calEndDate_ = _lastSaturday(scope.items[itemsLength - 1].endDate);
            scope.weeks  = _buildCalendar(calStartDate_ );


            function _firstSunday(date_) {
                return _addDays(date_, date_getDate() - date_.getDay())
            }
            function _addDays(date_, days) {
                var d = new Date(date_.getTime());
                d.setDate(d.getDate() + days);
                return d;
            }
            function _lastSaturday(date_) {
                return _addDays(date_, -d.getDay() + 6);
            }
            function _sameDate(date1, date2) {
                var y1_ = date1.getFullYear();
                var m1_ = date1.getMonth();
                var d1_ = date1.getDate();
                var y2_ = date2.getFullYear();
                var m2_ = date2.getMonth();
                var d2_ = date2.getDate();
                if ((y1_ == y2_) && (m1_ == m2_) && (d1_ == d2_)) return true; else return false;
            }

            function _daydiff(first, second) {
                return Math.round((second - first) / (1000 * 60 * 60 * 24));
            }

            function _buildCalendar(startDate, endDate) {
                var weeks_ = [];
                var calDays_ = _daydiff(startDate, endDate);
                var dayCount_ = 0;
                while (dayCount_ < calDays_) {

                    var week = {
                        "mon": _addDays(startDate, dayCount_),
                        "tue": _addDays(startDate, dayCount_),
                        "wed": _addDays(startDate, dayCount_),
                        "thu": _addDays(startDate, dayCount_),
                        "fri": _addDays(startDate, dayCount_),
                        "sat": _addDays(startDate, dayCount_),
                        "sun": _addDays(startDate, dayCount_)
                    };
                    weeks_.push(week);
                    dayCount_ = dayCount_ + 7;
                    return weeks_;
                }
            }

        }
    }
});

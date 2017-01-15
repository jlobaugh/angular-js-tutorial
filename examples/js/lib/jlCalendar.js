(
    function(jlCalendar, undefined) {
        'use strict;';


        function _firstSunday(date_) {
            return _addDays(date_, date_.getDate() - date_.getDay());
        }

        function _addDays(date_, days) {
            var d = new Date(date_.getTime());
            d.setDate(d.getDate() + days);
            return d;
        }

        function _followingSaturday(date_) {
            return _addDays(date_, date_.getDay() + 6);
        }

        function _sameDate(date1, date2) {
            var y1_ = date1.getFullYear();
            var m1_ = date1.getMonth();
            var d1_ = date1.getDate();
            var y2_ = date2.getFullYear();
            var m2_ = date2.getMonth();
            var d2_ = date2.getDate();
            if ((y1_ == y2_) && (m1_ == m2_) && (d1_ == d2_)) return true;
            else return false;
        }

        function _daydiff(first, second) {
            return Math.round((second - first) / (1000 * 60 * 60 * 24));
        }

        function _buildCalendar(startDate, endDate) {
            var weeks_ = [];
            var calDays_ = _daydiff(startDate, endDate);
            var dayCount_ = 0;
            while (dayCount_ < calDays_) {

                var week_ = {
                    "sun": _addDays(startDate, dayCount_),
                    "mon": _addDays(_addDays(startDate, 1), dayCount_),
                    "tue": _addDays(_addDays(startDate, 2), dayCount_),
                    "wed": _addDays(_addDays(startDate, 3), dayCount_),
                    "thu": _addDays(_addDays(startDate, 4), dayCount_),
                    "fri": _addDays(_addDays(startDate, 5), dayCount_),
                    "sat": _addDays(_addDays(startDate, 6), dayCount_),
                };
                weeks_.push(week_);
                dayCount_ = dayCount_ + 7;
            }
            return weeks_;
        }

        jlCalendar.buildCalendar = function(startDate, endDate) {
            var calStartDate_ = _firstSunday(startDate);
            var calEndDate_ = _followingSaturday(endDate);
            return _buildCalendar(calStartDate_, calEndDate_);

        };
    }


)(window.jlCalendar = window.jlCalendar || {});

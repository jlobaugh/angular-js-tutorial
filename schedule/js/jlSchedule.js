var jlScheduleItem = (function () {
    function jlScheduleItem(name, startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
    }
    return jlScheduleItem;
}());
var jlSchedule = (function () {
    function jlSchedule(startDate) {
        this._schedule = [];
        this._startDate = startDate;
    }
    jlSchedule.prototype._addDays = function (startDate, days) {
        var result_ = new Date(startDate.valueOf());
        result_.setDate(result_.getDate() + days);
        return result_;
    };
    jlSchedule.prototype._getEndDate = function (startDate, numDays) {
        var sevenDaysLater = this._addDays(startDate, numDays);
        var durationInMinutes = 15;
        var endDate = new Date(sevenDaysLater.valueOf() - durationInMinutes * jlSchedule.MS_PER_MINUTE);
        return endDate;
    };
    jlSchedule.prototype._getScheduleItem = function (name, startDate, numDays) {
        var endDate_ = this._getEndDate(startDate, numDays);
        return new jlScheduleItem(name, startDate, endDate_);
    };
    jlSchedule.prototype.addSchedule = function (nameList) {
        var arrayLength_ = nameList.length;
        var currentDate_ = this._startDate;
        for (var name_1 in nameList) {
            this._schedule.push(this._getScheduleItem(name_1, currentDate_, 7));
            currentDate_ = this._addDays(currentDate_, 7);
        }
        this._startDate = currentDate_;
        return this._schedule;
    };
    return jlSchedule;
}());
jlSchedule.MS_PER_MINUTE = 60000;


/* see https://addyosmani.com/blog/essential-js-namespacing/ */

;(
function(jlSchedule, undefined) 
{'use strict';

// private properties
var MS_PER_MINUTE = 60000;  

var _schedule = [];



function _getEndDate(startDate,numDays) 
{ 
  var sevenDaysLater = startDate.addDays(numDays);
  var durationInMinutes = 15;
  var endDate = new Date( sevenDaysLater - durationInMinutes * MS_PER_MINUTE );
  return endDate;
}

function _getScheduleItem = function ( name, startDate, numDays )
{
  var endDate = _getEndDate( startDate, numDays );
  return {  name : name , startDate : startDate, endDate : endDate };
}

jlSchedule.addDefaultSchedule = function( names )
{

  var arrayLength_ = names.length;
  var currentDate_ = _startDate;
  for ( var i = 0 ; i < arrayLength_; i++ )
  {
     _schedule.push( _getScheduleItem( names[i], currentDate_, 7 ));
     currentDate_ = currentDate_.addDays(7);
  }
  _startDate = currentDate_;
  return _schedule;
}

jlSchedule.addSchedule = function( name, numDays )
{
  _schedule.push( _getScheduleItem( name, _startDate, numDays ) );
  _startDate.addDays(numDays);
  return _schedule;
}

jlSchedule.reset = function()
{
  _schedule = [];
}


jlSchedule.setStartDate = function( startDate )
{
  _startDate = startDate;
}

})(window.jlSchedule = window.jlSchedule || {} );


// public
//console.log(jhl.fob); // foobar
//jhl.sayHello(); // hello world

// assigning new properties
//jhl.foobar2 = "foobar";
//console.log(jhl.foobar2);

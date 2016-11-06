
/* see https://addyosmani.com/blog/essential-js-namespacing/ */

;(
function(jlSchedule, undefined) 
{'use strict';

// private properties
var MS_PER_MINUTE = 60000;  


jlSchedule.getEndDate = function (startDate) 
{ 
  var sevenDaysLater = startDate.addDays(7);
  var durationInMinutes = 15;
  var endDate = new Date( sevenDaysLater - durationInMinutes * MS_PER_MINUTE );
  return endDate;
}

jlSchedule.getScheduleItem = function ( name_, startDate )
{
  var endDate = this.getEndDate( startDate );
  return {  name : name_ , startDate : startDate, endDate : endDate };
}

jlSchedule.getSchedule = function( names, startDate )
{
  var schedule = [];
  var arrayLength_ = names.length;
  var currentDate = startDate;
  for ( var i = 0 ; i < arrayLength_; i++ )
  {
     schedule.push( this.getScheduleItem( names[i], currentDate ));
     currentDate = currentDate.addDays(7);
  }
  return schedule;


}



})(window.jlSchedule = window.jlSchedule || {} );


// public
//console.log(jhl.fob); // foobar
//jhl.sayHello(); // hello world

// assigning new properties
//jhl.foobar2 = "foobar";
//console.log(jhl.foobar2);

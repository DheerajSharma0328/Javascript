// How to get year

let year = new Date;
console.log('Year: ' , year.getFullYear());

// How to get Month

let month = new Date;
console.log('Month: ' , month.getMonth());

//How to get Date
let date = new Date;
console.log('Date: ' , date.getDate());

//How to get hour
let hours = new Date;
console.log('Hours: ' , hours.getHours());

//How to get minutes
let minutes = new Date;
console.log('Minutes: ' , minutes.getMinutes());

//How to get second
let second = new Date;
console.log('Seconds: ' , second.getSeconds());

//How to get millisecond
let millisecond = new Date;
console.log('Milliseconds: ' , millisecond.getMilliseconds());

//How to get week of a day
let day = new Date;
console.log('Day: ' , day.getDay());

//All the methods above return the components relative to the local time zone.

/**
 * There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".
 
*/

//How to get Time
let time = new Date;
console.log('Time: ' , time.getTime());

//How to get time zone off set
// Returns the difference between UTC and the local time zone, in minutes:
let time_zone_offset = new Date;
console.log('Time Zone Off Set: ' , time_zone_offset.getTimezoneOffset());

/**
 * How to calculate Time Zone Offset
 * 
 * It returns: UTC time - Local time
 * Not : Local time - UTC time (This is the main reason for negative values.)
 * 
 * Formula of time offset used by js: Timezone Offset = UTC Time - Local Time
 * 
 * India is : UTC +5:30 meaning india is: India is 5 hours 30 minutes AHEAD of UTC
 * 
 * Suppose
 * | UTC      | IST     |
 * -------- | ------- |
 * 10:00 AM | 3:30 PM |
 *
 * Now apply the formula 
 * UTC - Local
 * 
 * 10:00 - 15:30 = -5 hours 30 minutes (5*60 + 30min) = (300 + 30 = 330min)
 * 
 * which become = -330 minutes
 */


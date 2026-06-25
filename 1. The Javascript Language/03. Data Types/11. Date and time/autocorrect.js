//The autocorrection is a very handy feature of Date objects. We can set out-of-range //values, and it will auto-adjust itself.


let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...is 1st Feb 2013!
//Out-of-range date components are distributed automatically.

/*Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:
*/

let date1 = new Date(2016, 1, 28);
date1.setDate(date1.getDate() + 2);

console.log( date1 ); // 1 Mar 2016

//That feature is often used to get the date after the given period of time. For instance let’s get the date for “70 seconds after now”:


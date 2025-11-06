/**
 * 1=> What is an Aruments
 * Ans=> Argument is a value that we pass to the method
 * 
 * Format => stringName.method(args)
 * 
 * we can pass multiple Arguments in the method
 * 
 * Types of method who take Arguments 
 * 1=> indexOf() => It return the first index of occurance of the same value in a string. if not found return -1
 *  => It is case sensitive
 *  => It also include whitespace as vaild character
 * 
 * 2=> slice() => Return a part of the original string as a new string
 *  => we pass two argument in slice slice(Starting_index , Ending_index)
 *  => Starting_index is including but Ending_index Excluding
 *  => It also include whitespace as vaild character
 *  => when we pass only 0 in the agru then we get whole string or any index the we get whole string from that index
 *  => We can also pass stringname.length 
 *  => We can also pas negative number but in that case that number will subtract from our string length and resulting number will
 *     be our initial index
 *  => str.slice(-num) => str.slice(str.length - num)
 * 
 * => There are three ways to pass agru to the slice
 * 1=> (Starting_index,Ending_index)
 * 2=> (only Starting index) 
 * 3=> (negative number)
 * 
 * 3=> replace() => It is used to replace specfic word or letter in a string 
 *  => It only replace the first occurance
 *  => It is also case Sensitive
 *  => They are mainly used in regular expression 
 * 
 * 4=> repeat() => It is used to repeat(duplicate a string)
 *  
 */

// Indexof Demo

// let mess = "ILoveCoding And Hangout"

// console.log(mess.indexOf("Love"));
// console.log(mess.indexOf("e"));
// console.log(mess.indexOf("g"));
// console.log(mess.indexOf("I"));
// console.log(mess.indexOf("i"));
// console.log(mess.indexOf(" "));

// Slice Demo

// let mess = "Codinginjavascript"
// console.log(mess.slice(0,6));
// console.log(mess.slice(0));
// console.log(mess.slice(0,mess.length));

// let mess1 = "Coding is fun";
// console.log(mess1.slice(7,9)); 

// let word = "Helper";
// console.log(word.slice(-3));


// Repace Demo

// let mess = "ILoveCoding"
// console.log(mess.replace("Coding","Programming"));

// Repeat Demo

let mess = "Hello ";
console.log(mess.repeat(4));



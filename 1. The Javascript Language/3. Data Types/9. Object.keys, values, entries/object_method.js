/**
 * 
 * These methods are generic, there is a common agreement to use them for data structures.  * If we ever create a data structure of our own, we should implement them too.

* They are supported for:

* Map
* Set
* Array
* Plain objects also support similar methods, but the syntax is a bit different.
 */

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

/**
 * The first difference is that we have to call Object.keys(obj), and not obj.keys().

* Why so? The main reason is flexibility. Remember, objects are a base of all complex       structures in JavaScript.
* So we may have an object of our own like data that implements its own data.values()  method. And we still can call Object.values(data) on it.

 */

console.log("Completed for more details refer notes");
/**
 * Lexical Environment in JavaScript

This topic is one of the most important concepts in JavaScript because it explains:

how variables work,
how functions remember variables,
how closures work,
and why JavaScript behaves the way it does.

We will go step by step in very simple language.

First Understand the Big Idea

Whenever JavaScript runs:

a script,
a function,
or a block {}

JavaScript creates a hidden internal storage area for variables.

That hidden storage is called:

Lexical Environment

Think of it like a box where JavaScript stores variables.

Why Do We Need Lexical Environment?

Imagine this code:

let name = "Dheeraj";

function sayHi() {
   console.log(name);
}

Question:

How does sayHi() know where name exists?

How does JavaScript remember variables?

How does a function access variables outside itself?

The answer is:

Because of Lexical Environment.

What is a Lexical Environment?

A Lexical Environment is an internal hidden object created by JavaScript.

It has 2 parts:

Part 1: Environment Record

This stores variables and functions.

Example:

let user = "Dheeraj";
let age = 25;

Internally JavaScript stores something like:

{
   user: "Dheeraj",
   age: 25
}

This internal storage object is called:

Environment Record
Part 2: Reference to Outer Environment

JavaScript also stores a link to the outside environment.

Why?

Because if a variable is not found inside current function, JavaScript checks outside.

This creates something called:

Scope Chain
Very Important Point

A variable is not magical.

Internally:

A variable is simply a property inside Environment Record.

So:

let age = 25;

means internally something like:

EnvironmentRecord = {
   age: 25
}
Step 1 — Global Lexical Environment

Suppose this code runs:

let message = "Hello";

When the script starts:

JavaScript creates a global Lexical Environment.

Inside it:

GlobalLexicalEnvironment = {
   message: "Hello"
}

This is called:

Global Lexical Environment

because it belongs to the whole script.

How Variables Are Created

Now understand execution order carefully.

Suppose:

let phrase = "Hello";

JavaScript does NOT directly create "Hello".

It happens in steps.

Phase 1 — Memory Creation

Before code execution starts:

JavaScript scans the code.

It finds:

let phrase;

and creates the variable first.

Initially:

phrase = uninitialized

This state is called:

Temporal Dead Zone (TDZ)

The variable exists internally,
but cannot be used yet.

Why TDZ Exists?

To prevent accidental access before declaration.

Example:

console.log(a);
let a = 10;

This gives error.

Because:

a = uninitialized
Phase 2 — Declaration Executes

When execution reaches:

let phrase;

Now:

phrase = undefined

Now variable can be used.

Phase 3 — Assignment Happens

When JavaScript reaches:

phrase = "Hello";

Now:

phrase = "Hello"
Full Flow
let phrase = "Hello";

Internally:

Step 1
phrase = uninitialized
Step 2
phrase = undefined
Step 3
phrase = "Hello"

This process is described in the file.

Important Understanding

When you write:

let age = 25;

You think:

"I created a variable"

But internally JavaScript thinks:

"I added a property inside Environment Record"

Lexical Environment is Hidden

You cannot directly access it.

This is important.

JavaScript engines internally create it.

So this does NOT exist:

console.log(LexicalEnvironment);

because it is internal.

Step 2 — Function Declaration

Now understand functions.

Example:

function sayHi() {
   console.log("Hello");
}

Functions are also stored inside Lexical Environment.

Difference Between let and Function Declaration

This is VERY important.

let Variables
let a = 10;

Before declaration:

a = uninitialized

Cannot use before declaration.

Function Declaration
sayHi();

function sayHi() {
   console.log("Hello");
}

This works.

Why?

Because function declarations are fully initialized immediately.

Internally:

sayHi = function object

already exists before execution.

This is called:

Hoisting
Why Function Declaration Works Before Definition

Because during memory creation phase:

JavaScript already stores entire function.

So:

sayHi();

works even before actual line.

But Function Expression is Different

Example:

sayHi();

let sayHi = function() {
   console.log("Hello");
};

This gives error.

Why?

Because sayHi is a normal variable here.

It follows TDZ rules.

Step 3 — Inner and Outer Lexical Environment

Now comes the most important part.

Example:

let phrase = "Hello";

function say(name) {
   console.log(phrase + " " + name);
}

say("Dheeraj");
What Happens Here?
Step 1

Global Lexical Environment created.

{
   phrase: "Hello",
   say: function
}
Step 2

Function call happens:

say("Dheeraj");

Now JavaScript creates a NEW Lexical Environment for this function call.

This environment contains:

{
   name: "Dheeraj"
}
Now There Are TWO Environments
1. Function Environment
{
   name: "Dheeraj"
}
2. Global Environment
{
   phrase: "Hello",
   say: function
}
Important Link

The function environment has reference to global environment.

Like this:

Function Environment
        ↓
Global Environment
Variable Search Process

Now JavaScript executes:

console.log(phrase + " " + name);
Searching for name

JavaScript first checks current environment.

Found:

name = "Dheeraj"

Done.

Searching for phrase

JavaScript checks current environment.

Not found.

Then it moves to outer environment.

Found:

phrase = "Hello"

Done.

This process is called:

Scope Chain

or

Lexical Scope

Search Order

JavaScript searches:

Current Lexical Environment
Outer Environment
Outer of outer
Global Environment

until variable is found.

Step 4 — Returning Function

Now comes closures.

This is the most important application of Lexical Environment.

Example:

function makeCounter() {
   let count = 0;

   return function() {
      return count++;
   };
}

let counter = makeCounter();

What Happens Step by Step
Step 1

makeCounter() runs.

A new Lexical Environment is created:

{
   count: 0
}
Step 2

JavaScript creates inner function:

function() {
   return count++;
}

BUT IMPORTANT:

This function remembers where it was created.

How Does It Remember?

Every function in JavaScript has hidden property:

[[Environment]]

This stores reference to outer Lexical Environment.

So internally:

innerFunction.[[Environment]]
           ↓
{ count: 0 }
Step 3

makeCounter() finishes.

Normally local variables should disappear.

BUT:

The returned function still references:

count

through [[Environment]]

So JavaScript keeps it alive in memory.

Step 4

Now:

counter();

runs.

A new Lexical Environment for this call is created.

But it is empty:

{}

because no local variables.

Then JavaScript Searches count

Inside current environment:

Not found.

Then it checks:

counter.[[Environment]]

Found:

count = 0

Then:

count++

becomes:

count = 1
Next Call
counter();

Again:

count = 1

Then becomes:

count = 2

This is why counter remembers previous value.

This is Closure

A closure means:

A function remembers variables from outer scope even after outer function finishes.
Simple Definition of Closure
Closure =
Function + Remembered Outer Variables
Why Closures Are Important?

Closures are used everywhere:

private variables
callbacks
event handlers
React hooks
timers
async programming
module pattern

Without closures modern JavaScript cannot work properly.

Final Mental Model

Whenever JavaScript runs code:

JavaScript creates Lexical Environment

Inside it:

variables stored
functions stored
reference to outer environment stored

Functions remember their creation environment using:

[[Environment]]

This allows:

scope
variable lookup
closures
data persistence

to work.

Most Important Concepts to Remember
1. Lexical Environment

Hidden storage for variables.

2. Environment Record

Actual object storing variables.

3. Outer Reference

Link to outer scope.

4. Scope Chain

JavaScript searches variables from inner → outer.

5. Function Declaration

Fully initialized during memory creation.

6. Closure

Function remembers outer variables forever.

One-Line Summary

JavaScript functions always remember the environment where they were created, and that memory system is called Lexical Environment + Closure.
 */
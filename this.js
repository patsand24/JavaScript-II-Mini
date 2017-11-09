/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This points to Window/Global scope
* 2. Implicit binding - points to object before dot
* 3. New Binding - When called with new keyword and binds to newly created object
* 4. Explicit Binding - forcing the value of this with call() or apply() and binding it to that object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function whatIsThis() {
    console.log(this);
}
whatIsThis();

// Principle 2

// code example for Implicit Binding

function sayName() {
    console.log(this.name);
}

var newThing = {
    name: 'thing1',
    sayName: sayName
}

newThing.sayName();

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + " " + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

// Principle 4

// code example for Explicit Binding

function sayName() {
    console.log(this.name);
}

var newThing = {
    name: 'thing1',
    sayName: sayName
}

sayName.call(newThing);

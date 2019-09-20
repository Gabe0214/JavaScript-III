/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is window bining: which refers to the window objects, when 
"this" keyword is given no context.


* 2. The second principle is Implicit binding: which the dot is used to invoke a function. 


* 3. The third principle is New Binding, which uses the ? "new" keyword to create a new object.


* 4. The fourth principle is Explicit binding, which explicitly points out a value from the argument that is passed in the  by using .apply, .call and .bind, so "this" has context. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); 

// Principle 2

// code example for Implicit Binding

let person = {
    name: 'Gabriel',
    age: 22,
    old : function(){
        return `${this.name} is ${this.age} years old`;
    }
};

console.log(person.old());

// Principle 3

// code example for New Binding
function hobby(activity) {
 return this.thing = activity;
}
let myHobby = new hobby('skateboarding'); 
console.log(myHobby.thing); 


// Principle 4
function personName() {
    console.log(this.name);
}

let person1 = {
    name: 'Juan',
    age: 33
};

personName.call(person1); 
// code example for Explicit Binding
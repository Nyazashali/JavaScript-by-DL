//string
// const singleQuotes = 'hello, world !';
// const doubleQuotes = "Hello";
const name = 'John';
const backticks = `Hello ${name}`;
// backticks are used to embed the different variables into strings
console.log(backticks);

// when we have static value as string value we use singlequotes and doublequotes
// whenever we want to do something dynamic we can use backticks
const string = `${2+2}`; //using doller sign and value in crusiebrases we can multiply the value
console.log(string); 

//Numbers
 const wholeNumber = 10;
 const decimal = 0.34;

 console.log(wholeNumber);
 console.log(decimal);

 //operations

 let firstNumber = 10; // let, const & var can be used 
 let secondNumber = 5;

 let result = firstNumber * secondNumber ; //output 45 
 console.log(result);

 const string1 = 'Hello'; 
 const number = 5;

 const result1 = string1 / number ; //output NaN : Not a Number 
 console.log(result1);

 //2nd Example
 const  string2 = 'hii';
 const number1 = 10;
 
 const result2 = string2 / number1;
 console.log(result2);

 //booleans 
//  it can represent a logial entity and can have 2 values it can be have true & false.
const isCool = true;

if(isCool) {
    console.log("Hello man, Your're cool");  //Hello man, Your're cool
}  else{
    console.log("ohh!, Hiii");
}

const age = 20;
console.log(age > 18);

//Null
// null type has only one value and i.e, Null. it does not belong to any of the datatypes described above.
// it forms a seperate type of its own which contains only null value.
// Null is a assigned value, it can be assigned to a variable as a representation of no value.
 let age1 = null;
 console.log( typeof age1);  // typeof=object


//Undefined
// the meaning of undefined is value is not assigned. When a variable is declared but not assigned the value then it is undefined.

let X;
console.log(X); // typeof=undefined

/*Complex datatypes
 1> Objects - It is the most important data type an it forms the building block of modern javascript.
 all primitive datatypes can contain only one value at a time, but whereas objects can contain more data and more complex entities.
 it used to group the variables */ //******* */
 
 
//objects
const person = {
    name: 'Ali',
    age: 25, 
}
console.log(person);  // typeof=object

// Dot Notation is used to show specific key value
console.log(person.name);  // typeof=string  #it is a primitive datatype of a string

//Array
const arr = [1, 2, 3, 4];
console.log(arr);  

const date = new Date();
console.log(date); //shows current time

//There are 2 types of programming languages
/*statically typed : languages where each variables and expression type is already known at compile Time.
 So, Once a variable is declared to be a certain type it cannot hold values of any other datatype. Ex:- C, C++, Java
Dynamically typed can receive different data types over time (we can change the value of datatype overtime)*/

// Javascript is Dynamically typed 

//comparison Operators => true/false

const a = 15;
const b = 15;

console.log(a != b);
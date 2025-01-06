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

 const result1 = string1 / SVGAnimatedNumber ; //output NaN : Not a Number 
 console.log(result1);

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

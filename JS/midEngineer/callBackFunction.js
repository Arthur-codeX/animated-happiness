/*
 Special type of function.
 1.It takes a function as parameter 
   
 
*/

/*
  JS Callback Inbuilt . 
  Time manupulation library

*/

/*
  setTimeout(function,long)-> 
  @param 1=> function
  @param number => miliseconds 
*/

/*
  Create a function that alerts
  us Hello Welcome to my website
*/

/*Named,arrow*/

/*
 Instead of greating this person
 immediealty .
 I want to do it after 3 seconds
 seconds to miliseconds ->
*/

/*
  Task making a welcome message 
   to your website. Not run immediatly
   1. Undestand the setTimout function.
      setTimeout(@param1,@param2)
      @param=> function which will be called
      @param=> Number which is in milliseconds delay
   2.Create your welcome function 
      <arrrow or named function> with 
      an alert with a welcome message.
      -> call your function to ensure it works
   3.create a timeout variable to store 
     the number of milliseconds ie
     5 seconds => 5*1000
   4.call the setTimeout function
    pass the required parameters
     setTimeout(function,time)
*/

/*
  Make things intersting
   1. Cut the function whole function and paste 
    it where you hade the welcomeMessage function name
    - see if it still works
    - call the original function and see the result.Error
  2. Make the function anonymous
     - see if it still works
  3. Make the function an arrow function
     without assigning it to variable
      remove the function keyword and 
      add an arrow after ()
*/

let timeout = 2 * 1000; // 5 seconds
// setTimeout(() => {
//   let name = prompt("Enter your name");
//   alert(`Welcome ${name} to our website`);
// }, timeout);
setTimeout(byeEnglinsh, 200);
//convert to an anoynomous

/*
 Research setInterval(functon,2000) every 2 seconds
*/

//Greet
function greet(param1, param2) {
  console.log("param1 is ", param1);
  console.log("Type of param1 ", typeof param1);

  console.log("param2 is ", param2);
  console.log("Type of param2 ", typeof param2);

  alert(`Good morning ${param1}`);
  param2();
}

function byeEnglinsh() {
  alert("Bye Bye !");
}

greet("Daniel Karanja", byeSpaninsh);

function byeSpaninsh() {
  alert("Adios Amigo");
}

function byeItalian() {
  alert("Ciao");
}

/*
 TO DO
 1.Create function that takes in 2 params
   -param1:string
   - param2:function 
2.The function alerts us goodming
   with goodmorning
   name
3.Calls the other function
  for the bye greeting
  - english,
  -spaning
  -italian
  -Mother Toungue
*/

/**
  Cases.
  1.If you forget to pass anything
  2.For param 1 pass a string 
    forget param 2
  3.For param 1 pass a string
    Param 2 pass a string
  4.param1 pass a function
    param 2 pass function
  5.param 1 pass a string
    param 2 pass a funciton 


/*
    
    Create  a program to do  varius
    mathematical stuff
    using 2 numbers
    -Addition : create funciton
    -Subtraction: create function
    -Division : create function
    */

/*
  1.Create funciton called calulator.
   should take 3 inputs
  -@param1:number 1
   -@param2 number 2
   -@param3: <function>
  2.Console.log all inputs and their types
  3.Make sure you function
  is able to do typesafety
  4.In the calulate function
    call the @param3<function>
    pass a and b. Store 
    the rusult of the
    function call in a new variable.
  5.print for opration 
   <addition:hint,@param3.name>
   using num1 and num2 
   the result <result>
    
*/

function calulator(a, b, operation) {
  console.log("a=", a, " typeof a=", typeof a);
  console.log("b=", b, " typeof b=", typeof b);
  console.log("operation=", operation, " typeof operation=", typeof operation);

  if (typeof a !== "number") {
    alert(`For the calculate a must @param1 number`);
    return;
  }
  if (typeof b !== "number") {
    alert(`For the calculate a must @param2 number`);
    return;
  }
  if (typeof operation !== "function") {
    alert(`For the calculate a must @param3 function`);
    return;
  }

  const result = operation(a, b);
  alert(`For operation ${operation.name}
    Using num1=${a} and num2=${b}
    The result is ${result}
    `);
}

// calulator("dsadsa", "dsads", "dsaadsa");
function addition(a, b) {
  const sum = a + b;
  return sum;
}

let sum = addition(2, 3);
console.log(sum);

function subtraction(a, b) {
  const sub = a - b;
  return sub;
}

function multiplication(a, b) {
  const multi = a * b;
  return multi;
}

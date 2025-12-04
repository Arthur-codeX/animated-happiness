/*
 the return statement is only used 
 inside a function.
 The return of a function has two use cases.
 1.It exists the function.at any point required
    when you have the return statement inside a funciton
    this is where it will exit
 2.It is also used to return a value(datatype).
*/

//1. The return exits the function
function introduction() {
  //Rest of your code goes here

  console.log("I am a js developer");
  console.log("I am new to this");
  console.log("so far so good");
  console.log("");
}

//Step 1.
// function calling another function
function promptForAge() {
  let teenAge = prompt("Enter your age:");
  console.log(`teen Age ${teenAge}`);
  ageMessage(teenAge);
}
//lego []->something
//Step 2
function ageMessage(age) {
  console.log(`age is ${age} type of age is ${typeof age}`);
  let ageNumber = Number(age);

  // if (){}else{}
  //NaN-> falsey -> !NaN =true
  if (!ageNumber) {
    alert(`Age is not a number its ${ageNumber}`);
    return;
  }

  if (ageNumber < 12) {
    alert(`${ageNumber} is  to young`);
    return;
  }

  if (ageNumber < 17) {
    alert(`${ageNumber} you are teenager`);
    return;
  }

  if (ageNumber < 25) {
    alert(`${ageNumber} you can dring legally`);
    return;
  }

  if (ageNumber < 35) {
    alert(`${ageNumber} Just marry`);
    return;
  }

  if (ageNumber < 55) {
    alert(`${ageNumber} You are an ansetor`);
    return;
  }

  alert(`${ageNumber} You are a fossil`);
}

function justReturn() {
  console.log("My function was called");
  return "ths is ccool";
}

// let x = justReturn();
// console.log(`x is =${x} its types is ${typeof x}`);

/*
   1.Forget to have return stament
   2.Empty Return statement
   3.Return null :check
   4.Return any number:check
   5.Return any string you want:check
*/

/*
  1:calculates area of circle
  2:calulate permiter of the circle
*/

/*
 you can assign a variable to function call
*/
function areaCirle(radius) {
  let ans = radius * radius * 3.142;
  return ans;
}

//Assign a function to a variable
let myVar = areaCirle(11);
console.log(`my var is, ${myVar}`);
console.log("type of myvar ", typeof myVar);
//Assigna function to a variable
let myVar2 = areaCirle;
console.log(`myVar2= `, myVar2);
console.log("myVar2 type is= ", typeof myVar2);
console.log(`function areaCircle=`, areaCirle);
console.log(`areCircle type=`, typeof areaCirle);

let myVar3 = myVar2(11);
console.log(`my var3 is, ${myVar3}`);
console.log("type of myVar3 ", typeof myVar3);
/*
  For all variables print the types
  1.create a variable and assign it
  to the function call of areCircle
   with any radius(number)
   Console the variable check what you get
  2.create a variable assign the function
  areaCircle.
   console.log(areCircle)
   console.log(theVariable)
   you should see bth are functionse
  3.create a variable andd assign it
  to the function call of the variable
   created in line 2
   with any radius(number)
   Console the variable check what you get
*/

function permiterCirle(radius) {
  let ans = 2 * radius * 3.142;
  return ans;
}

function promptForRadius() {
  let radius = prompt("Enter your circle radius:");
  let numRadius = Number(radius);

  if (!numRadius) {
    //do something
    alert("Enter a valid number");
    return;
  }

  let area = areaCirle(numRadius);
  let perimter = permiterCirle(numRadius);

  alert(`
     For a circle with radius ${numRadius}
     The area is ${area}
     The permiter is ${perimter}
    `);
}

/*
 It determines accebility
 and availability of 
 variables and functions.
*/

/*
 1.Global scop
 2.Block scope: {}
 3.Lexical Scope
*/

/*
 Global scope in variable or function
 declared outside of any
 function or  block :{}
*/

/*
  for converting usd
  to ksh
*/

/*
  1.Try moving the variable
  inside the print exhange rate
  2.Move to the prompt for usd function\
  3, Move it to the global scope
*/

/*
  Block Scope
  in function or variable that is
  defined inside  block
  its only acceble inside that block {}
  or its children

  example:
  Print exhange rate function it cant ise variable 
  of the updateExchangeRate

*/

let usdToKshRate = 130;

function updateExchangeRate() {
  let newExchangeRate = prompt(
    `Current exhange rate ${usdToKshRate}. Entery new Exhange rate`
  );
  //number
  let numberExchangeRate = Number(newExchangeRate);
  if (!numberExchangeRate) {
    alert(`Enter a number to to change exhange rate`);
    return;
  }
  usdToKshRate = numberExchangeRate;
}

function printExchangeRate() {
  alert(`The current exhange rate
         1 USD = ${usdToKshRate} KSH
        `);
}

function promptForUsd() {
  let amountInUsd = prompt("Enter Amount in usd");
  //Text or number
  let amountNumber = Number(amountInUsd);

  if (!amountNumber) {
    alert("Enter the amount as a number");
    return;
  }
  console.log(`amoun entered is a number ${amountNumber}`);
  let kshAmount = usdToKshRate * amountNumber;

  alert(`
     For usd $${amountNumber}
     Is equal ${kshAmount} KSH
     Exchange Rate ${usdToKshRate}
    `);
}

let myVar1 = 5;
function blockScope() {
  let myVar1 = 120;

  if (true) {
    myVar1 = 3;
    console.log(myVar1);
  }
}

blockScope();

/*
 1.Create function name any thing
  in my case blockScope
2.Inside that function create 
a variable mine is myVar1 make
 it a string of your choice
3.in the global scope try
to console the variable.
Make the observation
4.Console the variable inside the function
 then call your function
5.child scope can access parent scope variables
Create the same varibale name as twicw
 name should be the same. but different text value
 console.log the variable in the global
 scope
 console.log the variable in function 
 block scope
 7.Nested block {} inside the function createte
 an if true or truthy 
 so that it always executes.
 try to console the variable that is inside
 the function my case my var1\
 8.Nested Block.
 parent access the child scope variables
 inside the if statemnt inside your finction.
 create another variable in my case myVar2
 inside the function but outside the 
 if console the variable then make your observaion. 
9. 2 or more variables can have the same
as long there in different scopes.
Try to create variables in different scopes
named the same way and console.log them
*/

/*
1.Global scope eerything can be accesed by everything
2.Block scope {} 
3.Nestd block scope the child can access the parent variables
4.  A parent cant access variables of a child
5.You can have the same variable name as long as there in a different scope

*/
//{}

let x = 45;


function theParent() {
  let k = 10;
  let x=99
  if (true) {
    let x=76
     let z = 45;
    if (true) {
      let z = 45;
      console.log(k);
    }
    console.log(z);
  }
   console.log(z);
}

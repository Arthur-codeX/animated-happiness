/*
Recursive Function.
Where you have scenario
of  a function calling itself
*/

/*
   suppsing i tel you
   to print the
   statement
   I am a js enginerr
   10 times-> n

   1.Create function
   called aboutMe
     1.Task print 
      i am a js engineer
    2.I want to know the
      exact time that 
      the stament was printed.
    3. Call the function and 
    see the results
    4. We need an exit condition
    so that we stop goig around in circles

*/

function aboutMe(n) {
  console.log("N is ", n); //n=5,=4
  if (n == 0) {
    //Exit
    return;
  }
  console.log("I am a js engineer"); //Task 1
  let timestamp = new Date(); //Task 2
  console.log(timestamp.toISOString()); //Task 3
  let newN = n - 1; //5-1=4,4-1
  aboutMe(newN); //Task 4
}

/*

  1.call the aboutMe and dont pass anything
  2. Call it and pass any number apart
     from 10
  3. Call it and pass the number 10

*/
//Friend greeting
/*
//Create a button to call the function
for the first time.
  1.Have a function called friendGreeting
  2.Function does not take any parameters
  3.Function should prompt for name of friend
   // enter the name of your firend
  4.Print<alert> the name of the friend and say hi
    Hi John Mbugu Have a a nice Day
 5. After this the function should call itself
   for the next friend
 6.Exit condition if some types exit or 
 an empty string then exit function

*/

function friendGreeting() {
  const friendName = prompt("Enter the name of your friend:");

  if (friendName === "exit" || friendName === "") {
    return;
  }

  alert(`Hi ${friendName} Have a nice day`);
  friendGreeting();
}

/*
  1.Create a funciton called
   factorial

  2.Give a number n it calutes
   its factorial
   -return its factorial
   example if n=5 
    5*4*3*2*1 =120
 -> Hint use a recursive 
  function

*/

/*
  Events are like sensor
  and in js they work 
  using callBacks;

  You can attach an event
  to any html element

  *Before attaching an event
  ensure you can first access
  the html Element

*/

/*
 Small refresher of callbacks
 -> Events:Understing CallBack function
*/

/*
 JS interval
 function 
 @param1:function 
 @param2:time in milliseconds
*/

/*
 Using the interval 
 function
 print every second someone
 has spent in your website
*/

/*
 if time in minutes show
 if in hours show in hours
 if in days show in days,
*/

let c = 0;
function counter() {
  //console.log(`Time that has passed in seconds`, c);
  let timeSpent = "";
  const timeSpentHtmlElement = document.querySelector("#timespent");

  //bigest
  //how many hours make 1hour how many seconds 60*60=?3600
  if (c / 3600 >= 1) {
    timeSpent = `${Math.floor(c / 3600)} hours`;
  } else if (c / 60 >= 1) {
    timeSpent = `${Math.floor(c / 60)} minutes And ${c % 60} seconds`;
  } else {
    timeSpent = `${c} seconds`;
  }
  timeSpentHtmlElement.innerHTML = timeSpent;

  c = c + 1;
}

setInterval(counter, 1000);

/*
   Click event
*/
const greetBtn = document.querySelector("#greet-btn");

/*
  functin param
  @param ->string event type :click,hover mouseover
  @param->call back function:function
*/
greetBtn.addEventListener("click", greet);

function greet() {
  alert("Good morning ");
}

document.querySelector("#some-area").addEventListener("mouseover", () => {
  document.querySelector("#some-area").style["background-color"] = "red";
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//React Components:Function
//Small section of a UI:<>
//Function:<html,css ,js:>

//Rules of creating components
/*
  1.Name of the function<component> should start
  with a capital letter
  2.The function<component> shoult return null
    valid html<jsx>
  3.valid html<jsx>.You should only return a 
  single html element.
  4.If you want to return multiple elements
   you use a react fragement: <></>
*/

/*
  Rules exercise: 1 and 2
  -Create a component with name AboutMe
  -Have the component retun null:
  -Render a component:just like html
  -have your component return <div>{name}</div>
  -Render a component:just like html
  1. rename the component with small
    letter: break rule 1:make observations
  2.break rule 2 by not return anything:observation
  3.return invalid jsx eg make observations
     -return string:name
     -return number:favourite number
     -rerun an object: 
  4.return multiple html elements
*/

/*
  Opening and closing: Component
  Self Closing:component
*/

//Ok expecting
//Component Function
function AboutMe() {
  return <div>daniel Karanja</div>;
}
//Human Being 100 best or max 200
//<div></div>
//Rendring:<display>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AboutMe />
    <AboutMe />
    <AboutMe />
  </StrictMode>
);

/*
 DOM
 -Document
 -Object:<>
 -Model

*/

/*
 console.log(document)
 console.log(dom)
*/

console.log(document);

/*
 Accessing Elements TAGS
 in the dom Element
 ->querySelector
 ->tagSelector :<html element>
*/

/*
 using query selector
 get the body element-> Accessing and log it
 get the h1 element-> Accessing and log it
*/

// let htmlBody = document.querySelector("body");
// //let htmlBody = document.getElementsByTagName("body")
// console.log(htmlBody);
// let htmlH1 = document.querySelector("h1");
// console.log(htmlH1);

/*
 Accessing elements by there ids
  ->selecting by id an element using querySelector
  ->getElementById
*/

// let secondh1 = document.querySelector("#secondh1");
// //let secondh1 = document.getElementById("secondh1");
// console.log(secondh1);

// /*
//  Accessing elements by
//  their class names ->

// */

// let elementByClass = document.querySelector(".cardp");
// //let elementByClass = document.getElementsByClassName("cardp");
// console.log(elementByClass);

/*
 Accessing single elements.
 You migght want to access multiple elements at once.
*/

/*
Access all paragraph elements
using querySelectorAll <p>
*/

let allParagraphs = document.querySelectorAll("p");
//List<Array> of all paragraphs
//console.log(allParagraphs);

/*
  Acccsing multiple elements by class name
  ->
  ->List<Array> of all elements with class name c1
  
*/

let allC1 = document.querySelectorAll(".c1");
console.log(allC1);

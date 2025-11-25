let firstName = "Samson";
let secondName = "Mwangi";

//concatinationn
let fullname = firstName + " " + secondName;
let fullname2 = `${firstName} ${secondName}`;
//fullname
let age = 20;
let sunrise = "Jan 23 2000";
let sunset = "Nov 29 2025";

let templateEulogy = `${fullname}
 Was born on ${sunrise} 
 Died on ${sunset}
 At the age of ${age}
 `;

console.log(templateEulogy);

let eulogy =
  fullname +
  " Was born on " +
  sunrise +
  " Died on " +
  sunset +
  " At the age " +
  age;

//console.log(eulogy);

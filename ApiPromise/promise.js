/*
Promises is a way for js 
-> to do non blocking code

3 functions
1.console hello world
2.counts 0-19999
3.byw welcome

*/

/*
  thief 1, thief2, thief3
*/

function thief1() {
  return "1111111111";
}

function thief2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("looking for my id");
      //resolve, reject
      reject("no id found");
    }, 5000);
  });
}

function thief3() {
  return "222222222222";
}

async function policeMan() {
  try {
    console.log("police man");
    let id1 = thief1();
    console.log("Thief 1 id is", id1);
    let id2 = await thief2();
    console.log("Thief 2 id is", id2);
    let id3 = thief3();
    console.log("Thief 3 id is", id3);

    return [id1, id2, id3];
  } catch (e) {
    console.log("The errr is");
    console.log(e);
  }
}

function supervisorOfficer() {
  console.log("supervisor");
  const all = policeMan();
  console.log("All thieves are ", all);
  console.log("Report complete");
}

supervisorOfficer();

/*
 REST API -> 
  HTTP-> hper text transfer protocal
   0>client 
   1>Server

   /-One way communcation-/
   ===>client makes 
    a request
      ->fire fox rowser
      ->vhrome browser
      ->curl
    --->Server responds

    ==>request 
       method:GET,POST,PUT,PATCH,DELETE
       body:<Data >
       headers:[special data]
       url:<link:resource>
    ==>response
       status:[100-599]
        100 to 199:Information
        200 to 299:Success 
          201:Created POST
          204:No content
        300 to 399:Rediction
        400 to 499:Client errors
          404:
          401:Unothorized 
        500 to 599:Server Errors
           
       data:


*/

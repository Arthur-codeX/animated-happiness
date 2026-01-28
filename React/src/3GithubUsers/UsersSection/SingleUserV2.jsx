import { useEffect } from "react";

function SingleUserV2(props) {
  /*
   useEffect is a function
   two inputs
   @param1-> callback function 
   Aparam2->Depency array:[]
  */
  /*
  Life Cycle of acomponent
 */

  /*
   1.When a component is Mounted
  // Mounted when it compoes to exitance
  //BirthDate
  */
  useEffect(() => {
    console.log("component mounted");
    console.log("use effect has run");
  }, []);

  /*
    2 Usage to check when component 
    is un mounted or dead
   */
  useEffect(() => {
    return () => {
      console.log("I am now Dead");
    };
  }, []);

  return (
    <div>
      <div>
        <img src={props.avatar_url} />
      </div>
      <ul>
        <li>
          Name <b>{props.login}</b>
        </li>
        <li>
          Url <b>{props.url}</b>
        </li>
      </ul>
    </div>
  );
}

export default SingleUserV2;

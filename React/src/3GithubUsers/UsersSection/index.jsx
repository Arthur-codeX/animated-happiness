import SingleUserV2 from "./SingleUserV2";
import axios from "axios";
import { useEffect, useState } from "react";

function UsersSection({ page }) {
  const [users, setUsers] = useState([]);
  if (page !== "users") {
    return null;
  }

  const getUsers = async () => {
    try {
      let response = await axios({
        url: "https://api.github.com/users",
        method: "GET",
      });
      console.log(response);
    } catch (e) {
      console.log("Faield to get githun useers");
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  //console.log(user

  return (
    <div>
      {users.map((user, index) => (
        <SingleUserV2
          avatar_url={user.avatar_url}
          login={user.login}
          url={user.url}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UsersSection;

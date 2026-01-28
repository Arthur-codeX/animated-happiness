import UsersSection from "./UsersSection";
import SearchSection from "./SearchSection";
import Navigation from "./Navigation/idex";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("users");
  console.log(page);

  const [n, setN] = useState(0);

  //third reason Track changes or side effect
  //Side
  useEffect(() => {
    console.log("Page has changed to", page);
  }, [page]);


  //Buggy code.
  //Use effect is making changes
  //tp things its keeping track of
  useEffect(() => {
    console.log("N has changed to", n);
    if (n > 5) {
      setN(n + 2);
    }
  }, [n]);

  return (
    <div>
      <Navigation setPage={setPage} />
      <SearchSection page={page} />
      <UsersSection page={page} />
      <div>
        <button className=" rounded p-4 shadow-md" onClick={() => setN(n + 1)}>
          +
        </button>
        <span>{n}</span>
        <button className="rounded p-4 shadow-md" onClick={() => setN(n - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function SearchSection({ page }) {
  const [value, setValue] = useState("");

  if (page !== "find") {
    return null;
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className=" flex justify-center my-4">
        <div className=" flex items-center">
          <input className=" py-0.5 mx-2 border" onChange={handleChange} />
          <button className=" rounded-md px-2 py-1 text-white bg-blue-500 cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

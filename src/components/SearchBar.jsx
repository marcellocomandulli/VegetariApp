import React, { useState } from "react";

function SearchBar({ sendQuery }) {
  const [query, setQuery] = useState("");

  function handleClick() {
    sendQuery(query);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="hungry?"
        className="text-center w-60 p-1 rounded-lg bg-slate-100 uppercase md:w-96 md:h-8 md:text-lg"
      />

      <button
        onClick={handleClick}
        className="p-1 mx-1 flex justify-center items-center rounded-lg  bg-[#6f62477d] active:bg-[#6f62479f]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;

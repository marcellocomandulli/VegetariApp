import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

function Api() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = "e8ac3b69a57749bab0c639552344ce4e";
  const resultsPerPage = 5;

  useEffect(() => {
    async function fetchRecipes() {
      if (!query) return;

      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&number=${resultsPerPage}&offset=${(currentPage - 1) * resultsPerPage}&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setRecipes(response.data.results);
      } catch (err) {
        console.error("ERROR", err);
      }
    }
    fetchRecipes();
  }, [query, currentPage]);

  function handleQuery(query) {
    setQuery(query);
  }
  return (
    <div>
      <SearchBar sendQuery={handleQuery} />
      <Cards recipes={recipes} apiKey={apiKey} />

      <div className="flex justify-center space-x-20 mt-10 mb-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="flex items-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
            Previus
          </span>
        </button>

        <button onClick={() => setCurrentPage(currentPage + 1)}>
          <span className="flex items-center space-x-5">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Api;

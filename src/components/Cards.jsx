import React, { useEffect, useState } from "react";
import axios from "axios";

function Cards({ recipes, apiKey }) {
  const fetchCard = async (id) => {
    try {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      const response = await axios.get(url);
      console.log(response.data);

      // Apri il link in una nuova scheda non appena i dati vengono recuperati
      if (response.data.sourceUrl) {
        window.open(response.data.sourceUrl, "_blank");
      }
    } catch (err) {
      console.error("Errore nel recuperare i dati della ricetta.");
    }
  };

  return (
    <div>
      <ul className="md:flex flex-row">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div className="w-72 h-80 p-3 m-2 rounded-lg bg-[#D2C3A3] flex flex-col justify-center ">
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
                className="relative bottom-2 rounded-lg"
              />

              <h3 className="font-semibold uppercase overflow-hidden text-center truncate">
                {recipe.title}
              </h3>

              <button
                onClick={() => fetchCard(recipe.id)}
                className="flex justify-center relative top-4 rounded-lg bg-[#6f62477d] md:active:bg-[#6f62479f]"
              >
                <span className="flex items-center">
                  How to cook
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;

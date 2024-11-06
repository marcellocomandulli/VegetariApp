import React from "react";
import { Link } from "react-router-dom";

function Cards({ recipes }) {
  return (
    <div>
      <ul className="md:flex flex-row">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div className="w-72 h-80 p-3 m-2 rounded-lg bg-[#D2C3A3] flex flex-col justify-center">
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
                className="relative bottom-2 rounded-lg"
              />

              <h3 className="font-semibold uppercase overflow-hidden text-center truncate">
                {recipe.title}
              </h3>

              <button className="flex justify-center relative top-4 rounded-lg bg-[#6f62477d] md:active:bg-[#6f62479f]">
                <Link to={`/recipe/${recipe.id}`}>
                  <span className="flex items-center">
                    How to cook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;

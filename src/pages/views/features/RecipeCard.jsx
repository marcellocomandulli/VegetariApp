import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


function RecipeCard() {
  const { id } = useParams(); // Ottiene l'ID dalla URL
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const url = `https://api.spoonacular.com/recipes/${id}/information`;
        const response = await axios.get(url, {
          params: {
            apiKey: "e8ac3b69a57749bab0c639552344ce4e",
          },
        });
        setRecipeData(response.data); // Salva i dati della ricetta
      } catch (err) {
        console.error("Errore nel recuperare i dati della ricetta:", err);
      }
    };

    fetchRecipeData();
  }, [id]);

  if (!recipeData) return <div>Loading...</div>; // Mostra un messaggio di caricamento finché i dati non sono pronti

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{recipeData.title} - VegetariApp</title>
      </Helmet>
      
      <div className="recipe-card flex flex-col items-center p-6 md:px-36">
        <h1 className="text-3xl font-semibold text-center">
          {recipeData.title}
        </h1>

        <div className="md:grid grid-cols-2 justify-center items-center">
          <img
            src={recipeData.image}
            alt={recipeData.title}
            className="rounded-lg my-6 md:mt-5"
          />

          <p
            dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            className="text-justify"
          />
        </div>

        <div className="border-black border-b w-8/12 my-10 rounded"></div>

        <div className="md:grid grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2 md:text-2xl">
              Ingredients:
            </h3>
            <ul className="mb-6">
              {recipeData.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 md:text-2xl">
              Instructions:
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
              className="text-justify"
            />
          </div>
        </div>
      </div>

      {/* Footer with links and other pages*/}
      <div className="bg-[#D2C3A3] rounded-t-lg flex flex-col items-center py-3 space-y-2 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center space-y-1">
          <span className="font-medium text-sm">VEGETARIAPP</span>
          <span className="hidden text-sm md:block">All rights reserved.</span>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex space-x-3">
            <a href="#">
              <img
                src="../img/ig.png"
                alt="Instagram link"
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <img
                src="../img/fb.png"
                alt="Facebook link"
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <img src="../img/yt.png" alt="YouTube link" className="w-4 h-4" />
            </a>
          </div>

          <ul className="flex space-x-3">
            <li className="underline text-sm">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="underline text-sm">
              <Link to={"/src/components/AboutUs.jsx"}>About us</Link>
            </li>
            <li className="underline text-sm">
              <Link to={"/src/components/Contacts.jsx"}>Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;

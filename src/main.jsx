import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./pages/views/features/Contacts.jsx";
import AboutUs from "./pages/views/features/AboutUs.jsx";
import RecipeCard from "./pages/views/features/RecipeCard.jsx";
import Cards from "./components/Cards.jsx";

// ricorda di modificare route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/src/components/AboutUs.jsx",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/src/components/Contacts.jsx",
    element: <Contacts></Contacts>,
  },

  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    path: "/recipe/:id",
    element: <RecipeCard></RecipeCard>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

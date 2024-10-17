import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/src/components/AboutUs.jsx",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/src/components/Contacts.jsx",
    element: <Contacts></Contacts>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
import React, { useState } from "react";
import Api from "./pages/views/features/Api";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header with img, title, subtitle and API */}
      <div className="flex flex-col h-screen justify-between">
        <div className="font-regular p-3 flex flex-col items-center h">
          <img
            src="../img/Salad.png"
            alt="Vegetarian salad"
            className="relative bottom-3"
          />

          <h1 className="text-3xl font-bold tracking-wider text-[#735D2E] md:text-7xl">
            VEGETARIAPP
          </h1>
          <h2 className="text-sm mb-3 tracking-wider text-[#735D2E] md:text-2xl">
            BE HEALTHY EVERY DAY
          </h2>

          <Api />
        </div>

        {/* Footer with links and other pages*/}
        <div className="bg-[#D2C3A3] rounded-t-lg flex flex-col items-center py-3 space-y-2 md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center space-y-1">
            <span className="font-medium text-sm">VEGETARIAPP</span>
            <span className="hidden text-sm md:block">
              All rights reserved.
            </span>
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
                <img
                  src="../img/yt.png"
                  alt="YouTube link"
                  className="w-4 h-4"
                />
              </a>
            </div>
tutto bello
            <ul className="flex space-x-3">
              <li className="underline text-sm">
                <Link to={"/src/components/AboutUs.jsx"}>About us</Link>
              </li>
              <li className="underline text-sm">
                <Link to={"/src/components/Contacts.jsx"}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

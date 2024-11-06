import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contacts() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacts - VegetariApp</title>
      </Helmet>

      <div>
        <div className="font-regular p-3 flex flex-col items-center">
          <img
            src="../../img/Salad.png"
            alt="Vegetarian salad"
            className="relative bottom-3"
          />

          <h1 className="text-3xl font-bold tracking-wider text-[#735D2E] md:text-7xl">
            VEGETARIAPP
          </h1>
          <h2 className="text-sm mb-3 tracking-wider text-[#735D2E] md:text-2xl">
            BE HEALTHY EVERY DAY
          </h2>
        </div>

        <div className="px-8 pb-8 md:px-28">
          <h1 className="text-xl font-semibold text-[#735D2E] md:text-2xl">
            Contacts
          </h1>
          <div className="border-black border-b w-40 my-2 rounded"></div>

          <p className="text-justify text-lg ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, voluptatum nam minus sint optio culpa provident! Nam
            ex tenetur laboriosam in nesciunt odio dolorem asperiores deserunt
            porro a necessitatibus, neque quis possimus blanditiis maxime harum
            corrupti rerum earum voluptatem nobis? Eveniet ex quidem architecto
            excepturi ad maxime dolorum facilis, sapiente velit eligendi nostrum
            assumenda enim iste aspernatur delectus, magni consequatur dolor
            tempora eaque voluptates eum quas ipsam. Distinctio modi inventore
            error ratione quos tempore delectus, excepturi sed. Qui fugiat harum
            at suscipit soluta blanditiis natus quo nisi ipsum voluptates
            consectetur sit?
          </p>
        </div>
      </div>

      {/* Footer with links and other pages*/}
      <div className="bg-[#D2C3A3]  rounded-t-lg flex flex-col items-center py-3 space-y-2 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center space-y-1">
          <span className="font-medium text-sm">VEGETARIAPP</span>
          <span className="hidden text-sm md:block">All rights reserved.</span>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex space-x-3">
            <a href="#">
              <img
                src="../../img/ig.png"
                alt="Instagram link"
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <img
                src="../../img/fb.png"
                alt="Facebook link"
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <img
                src="../../img/yt.png"
                alt="YouTube link"
                className="w-4 h-4"
              />
            </a>
          </div>

          <ul className="flex space-x-3">
            <li className="underline text-sm">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="underline text-sm">
              <Link to={"/about"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;

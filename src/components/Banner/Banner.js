import React from "react";
import bg from "../assets/bg.jpg";

function Banner() {
  return (
    <div className="  bg-black min-h-[100vh] w-full  " id="portfolio">
      <div className="grid gap-4 items-center place-items-center md:grid-cols-2 sm:min-h-[100vh] ">
        <div className="max-w-screen-sm m-10 ">
          <img className="rounded-full mt-[10rem] " src={bg} alt="bg" />
        </div>
        <div className="p-5 w-fit text-center italic font-bold font-mono text-4xl sm:text-6xl   ">
          <p className="mt-4 sm:max-w-screen-sm text-white underline underline-offset-2">
            I'm Ronell Villamil Front End Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

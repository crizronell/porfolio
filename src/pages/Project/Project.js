import React from "react";
import { ProjectDetails } from "./ProjectDetails";

function Project() {
  return (
    <div className="bg-gray-900 min-h-[100vh] " id="project">
      <div className="p-1 w-full text-white font-mono text-5xl underline ">
        <p className="mt-[5rem] italic font-serif text-center">Projects</p>
      </div>
      <div className=" grid items-center justify-center sm:grid-cols-[repeat(auto-fill,_600px)] sm:mt-[10rem]  ">
        {ProjectDetails.map((item) => {
          return (
            <div key={item.id} className=" m-[1rem]  ">
              <a href={item.path} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-fit rounded-lg cursor-pointer"
                />
              </a>

              <p className=" text-white underline text-center  mt-[1rem] font-bold italic font-serif text-2xl sm:text-3xl">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;

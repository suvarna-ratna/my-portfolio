import React from "react";
import { BriefcaseIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
        <OfficeBuildingIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((experience) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <BriefcaseIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">({experience.period}) @ {experience.company}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {experience.position}
                    </span>
                    <hr/>
                    <span className="text-gray-500 text-sm pt-1">
                      {experience.details}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

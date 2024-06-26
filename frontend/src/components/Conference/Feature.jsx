import React from "react";
import { features } from "../../constants";
import { Reveal } from "../../utils/Reveal";
const Feature = () => {
  return (
    <div className="py-10 border-b border-neutral-800 min-h-[600px]  bg-gradient-to-r from-orange-700 to-purple-600 ">
      <div className="text-center">
        <Reveal width="">
        <h2 className="text-3xl mt-10 max-w-5xl mx-auto md:text-5xl lg:text-6xl  tracking-wide  animate-slidein opacity-0 [--slidein-delay:300ms]">
          Conferences Tailored to Your Vision
        </h2>
        </Reveal>
      </div>

      <div className="flex flex-wrap mt-5 lg-mt-20 md:px-[8rem] lg:px-[9rem] sm: ">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/1 lg:w-1/3">
            <div className="flex ">
              <div className="m-5 ">
                <Reveal width="">
                <div className="flex p-5 text-8xl justify-center items-center  ">
                  {feature.icon}
                </div>
                </Reveal>
                <Reveal width="">
                <h5 className="mt-1 mb-3 text-xl md:text-left lg:text-left sm:text-center">
                  {feature.text}
                </h5>
                </Reveal>
                <Reveal width="">
                <p className="text-md text-base  text-neutral-200">
                  {feature.description}
                </p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;

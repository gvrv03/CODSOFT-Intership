import React from "react";
import { benefitOne, benefitTwo } from "../data";
import Benefits from "../Utility/Benefits";

const KeyFeatures = () => {
  return (
    <div className="container m-auto mt-10">
      <h1 className="font-bold border-b-2 pb-2 border-red-600  text-xl w-fit ">
        Why to choose DSY ?
      </h1>
      <Benefits data={benefitOne} />

      <h1 className="font-bold border-b-2 pb-2 border-red-600  text-xl w-fit ">
        Gateway to go through DSY
      </h1>
      <Benefits imgPos="right" data={benefitTwo} />
    </div>
  );
};

export default KeyFeatures;

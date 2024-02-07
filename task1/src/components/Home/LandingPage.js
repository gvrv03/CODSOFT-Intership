import React from "react";

const LandingPage = () => {
  return (
    <section className=" mt-52 md:mt-0 text-gray-600 body-font">
      <div className="container mx-auto flex  md:py-36 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dsyconsultancy.netlify.app/hero.svg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Direct Second Year Admission Consultancy
          </h1>
          <p className="mb-8 leading-relaxed">
            Get help from our Direct Second Year Admission Consultancy to secure
            admission to second year engineering courses in Maharashtra. Contact
            us today to start your journey towards a successful engineering
            career.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Find Colleges
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

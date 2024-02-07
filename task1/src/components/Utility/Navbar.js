import React from "react";

const Navbar = () => {
  return (
    <header class=" fixed top-0 w-full bg-white shadow-md  text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <img  className="w-16" src="https://dsyconsultancy.netlify.app/img/DSY.svg"   alt=""/>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 cursor-pointer  hover:text-gray-900">Home</a>
          <a class="mr-5 cursor-pointer  hover:text-gray-900">News</a>
          <a class="mr-5 cursor-pointer  hover:text-gray-900">Colleges</a>
          <a class="mr-5 cursor-pointer  hover:text-gray-900">About</a>
          <a class="mr-5 cursor-pointer  hover:text-gray-900">Contact Us</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

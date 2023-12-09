import React, { useState, useEffect } from "react";
import { logo, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when the user has scrolled down, and false otherwise
      setIsScrolled(window.scrollY > 0);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav class={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hidden lg:block"
          >
            Contact
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none  "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <img src={hamburger} alt="hamburger" />
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

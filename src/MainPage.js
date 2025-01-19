import React, { useState, useEffect } from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoIosPlayCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";

import sample2 from "./Asset/menUsingLaptop.png";

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col ${
        isMobile ? "items-center" : "md:flex-row items-center"
      } justify-between p-4 md:p-8 bg-gradient-to-r from-amber-100 via-blue-100 to-blue-200`}
    >
      {/* Left Section */}
      <div className={`${isMobile ? "w-full" : "md:w-1/2"} mb-8 md:mb-0 px-4`}>
        <a
          className="flex items-center text-primary font-semibold py-2 md:py-4 transition"
          href="/"
        >
          <IoIosStar className="mr-2 text-yellow-400 text-2xl" />
          Google Rating
          <MdStars className="ml-2 text-yellow-400 text-2xl" />
          <MdStars className="text-yellow-400 text-2xl" />
          <MdStars className="text-yellow-400 text-2xl" />
          <MdStars className="text-yellow-400 text-2xl" />
          <MdStars className="text-yellow-400 text-2xl" />
        </a>

        <h1 className="text-3xl md:text-5xl font-semi-bold mb-4 leading-tight">
          Your Trusted Partner
        </h1>
        <h1 className="text-3xl md:text-5xl font-semi-bold mb-4 leading-tight">
          for Compliance Business Needs
        </h1>

        <hr className="w-16 md:w-24 h-1 my-4 bg-red-600 border-0 rounded" />

        <p className="mb-6 text-sm md:text-base leading-relaxed">
          An online business compliance platform that helps entrepreneurs and{" "}
          <br />
          other individuals with various <b>registrations</b>, <b>tax filings</b>, and other{" "}
          <b>legal matters</b>.
        </p>

        {/* Info Cards */}
        <div
          className={`grid ${
            isMobile ? "grid-cols-1" : "md:grid-cols-3"
          } gap-4 mb-12`}
        >
          <button className="flex items-center text-white py-2 px-4 rounded-lg">
            <PiSquaresFourLight className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">4.5+</p>
              <p className="text-sm">Customer Rating</p>
            </div>
          </button>
          <button className="flex items-center text-white py-2 px-4 rounded-lg">
            <IoIosPeople className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">20,000+</p>
              <p className="text-sm">Clients</p>
            </div>
          </button>
          <button className="flex items-center text-white py-2 px-4 rounded-lg">
            <FaHandshakeSimple className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">99.8%</p>
              <p className="text-sm">Financial Stability</p>
            </div>
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-start mt-6">
          <a className="bg-primary font-semibold text-white px-4 py-2 rounded mb-4 sm:mb-0 sm:mr-4 cursor-pointer">
            See All Services
          </a>
          <a className="flex items-center text-primary font-semibold px-4 py-2 cursor-pointer">
            <IoIosPlayCircle className="mr-2 text-red-600 text-2xl" />
            See how it works
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`relative flex ${
          isMobile ? "flex-col items-center" : "md:flex-row items-start"
        } md:w-1/2 px-4`}
      >
        {/* Main Image */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center">
          <img
            src={sample2}
            alt="Example"
            className="w-full h-auto max-w-sm md:max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Overlay Buttons */}
        <div
          className={`relative ${
            isMobile ? "w-full items-center" : "md:static md:w-1/2"
          } flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0 md:pl-8`}
        >
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <span>Annual Compliance</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <span>Payroll Services</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <span>Company Formations</span>
          </button>
          <button className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg transition duration-300">
            <span>Annual Compliance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

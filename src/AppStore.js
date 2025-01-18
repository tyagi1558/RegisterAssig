import React from "react";
import sampleImage from "./Asset/vecteezy_smartphone-and-mobile-phone_11047522.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


function AppStore() {
  return (
    <div className="bg-[#0D2C58] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start justify-between relative">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Manage Your Services by your
              <br />
              Mobile Phone
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in tracking
              your progress.
            </p>
            <p className="text-lg mb-6">Get the App</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center bg-white rounded-xl overflow-hidden hover:bg-gray-50 transition-colors">
                <div className="flex items-center px-6 py-3">
                  <div className="w-8 flex items-center justify-center">
                    <FaApple className="text-black text-3xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-xs text-gray-600">Get it on</p>
                    <p className="text-sm font-bold text-black">App Store</p>
                  </div>
                </div>
              </button>
              
              <button className="flex items-center bg-white rounded-xl overflow-hidden hover:bg-gray-50 transition-colors">
                <div className="flex items-center px-6 py-3">
                  <div className="w-8 flex items-center justify-center">
                    <FaGooglePlay className="text-black text-2xl" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-xs text-gray-600">Get it on</p>
                    <p className="text-sm font-bold text-black">Google Play</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Phones Section */}
          <div className="relative w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative h-[600px] lg:h-[500px] w-full">
              {/* Front Phone */}
              <div className="absolute left-1/2 lg:left-1/4 top-0 transform -translate-x-1/2 lg:-translate-x-0 w-60 md:w-64">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="relative w-full pb-[200%] bg-black rounded-[2.5rem]">
                    <div className="absolute inset-[3px] bg-white rounded-[2.3rem]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Phone with RegisterKaro */}
              <div className="absolute right-0 lg:-right-4 top-12 w-60 md:w-64">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="relative w-full pb-[200%] bg-black rounded-[2.5rem]">
                    <div className="absolute inset-[3px] bg-white rounded-[2.3rem]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>
                      {/* RegisterKaro Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl font-bold">
                          <span className="text-[#0D2C58]">Register</span>
                          <span className="text-[#FF6B00]">Karo</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppStore;
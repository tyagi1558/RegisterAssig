import React from "react";

const Blog = () => {
  const blog = [
    {
      who: "1M⁺",
      title: "Customers",
    },
    {
      who: "12⁺",
      title: "Years of Excellence",
    },
    {
      who: "41⁺",
      title: "R&D Engineer",
    },
    {
      who: "78⁺",
      title: "Countries",
    },
    {
      who: "3287⁺",
      title: "Partners",
    },
    {
      who: "41⁺",
      title: "Awards Received",
    },
  ];

  return (
    <div className="bg-white text-center">
      <div className="text-secondary text-sm pt-8 uppercase tracking-widest">
        Why Register Karo
      </div>
      <div className="font-bold text-4xl py-2 pb-10">
        Some Numbers are Important
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2">
        {blog.map((house, index) => (
          <div
            className="bg-white p-5 pb-10 w-full max-w-[352px] mx-auto cursor-pointer"
            key={index}
          >
            <div className="flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800 text-[40px] font-bold">
              {house.who}
            </div>
            <div className="text-sm font-semibold max-w-[260px] mx-auto">
              {house.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

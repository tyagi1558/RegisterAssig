import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample1 from "./Asset/sample1.png";

const customers = [
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
  {
    name: "Chris",
    review: "President and CEO, PrintReach, USA",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
    image: sample1,
  },
];

const CustomerFeedback = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile landscape and smaller
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="client_section py-16 bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="heading_container text-center mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What people say about us
          </h2>
        </div>
        <div className="carousel-wrap relative">
          <Slider ref={sliderRef} {...settings}>
            {customers.map((customer, index) => (
              <div key={index} className="item px-2">
                <div className="box bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="detail-box text-left">
                    <div className="client_id flex mb-4">
                      <FaQuoteLeft className="text-indigo-500 text-2xl" />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {customer.feedback}
                    </p>
                    <div className="client_info flex mt-5 items-center">
                      <div className="img-box flex-shrink-0">
                        <img
                          src={customer.image}
                          alt=""
                          className="box-img w-16 h-16 sm:w-24 sm:h-24 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col ml-4">
                        <h6 className="text-base sm:text-lg font-semibold">
                          {customer.name}
                        </h6>
                        <p className="text-sm text-gray-500">
                          {customer.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

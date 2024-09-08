"use client";

import { useState } from "react";
import { API_HOST } from "@/utils/contants";
import Image from "next/image";

interface option {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface WhyChooseUsProps {
  options: [option];
}

const WhyChooseUs = ({ options }: WhyChooseUsProps) => {
  const [selectedOption, setSelectedOption] = useState<option>(options[0]);

  return (
    <section className="bg-white py-12 px-5 max-w-screen-lg mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-gray-500 uppercase mb-2">
          WHY CHOOSE US
        </h2>
        <h3 className="text-3xl font-bold text-gray-800">
          We Are Different From Others
        </h3>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic! Facere unde
          nam accusantium natus?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-4 lg:grid-cols-3 my-20">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 grid grid-cols-2">
          <div className="aspect-square rounded-full relative z-10 bg-rose-700 opacity-70 flex items-center">
            <div className="w-4/6 mx-auto">
              <h4 className="text-white text-xl md:text-2xl font-semibold mb-1 md:mb-4">
                {selectedOption.attributes.title}
              </h4>
              <p className="text-white">
                {selectedOption.attributes.description}
              </p>
            </div>
          </div>
          <div className="aspect-square rounded-full overflow-hidden relative -translate-x-20 lg:-translate-x-28">
            <Image
              src={
                API_HOST + selectedOption.attributes.image.data.attributes.url
              }
              alt="Person image"
              className="w-full h-full object-cover"
              fill={true}
              priority
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-end gap-3 h-full">
          {options.map((option) => (
            <button
              className={`flex items-center justify-between font-semibold ${
                selectedOption.attributes.title === option.attributes.title
                  ? "bg-rose-700 text-white"
                  : "bg-gray-300"
              } w-full py-2 px-3 rounded-l-full`}
              onClick={() => setSelectedOption(option)}
              key={option.id}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="inline-block">{option.attributes.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content for selected option */}
      <div className="max-w-7xl mx-auto text-center mt-12"></div>
    </section>
  );
};

export default WhyChooseUs;

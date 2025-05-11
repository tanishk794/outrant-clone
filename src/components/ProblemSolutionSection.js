import React from "react";
import Link from "next/link";
import Image from "next/image";

// Reusing the OutrankIcon from the header component
const OutrankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-white mr-2"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

// Replace AvatarIcon with Image component
const AvatarIcon = ({ src }) => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
    <Image
      src={src}
      alt="Avatar"
      width={40}
      height={40}
      className="w-full h-full object-cover"
    />
  </div>
);

const CurvedArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
);

const CheckmarkIcon = (
  { color = "text-purple-600" } // Default color changed to purple
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-5 h-5 ${color} mr-2 shrink-0`}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.698a.75.75 0 0 0-1.214-1.022L9.75 10.23l-1.593-1.122a.75.75 0 0 0-1.08 1.06l2.25 1.593a.75.75 0 0 0 1.022-.114l3-3ZM10 8a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5H10Z"
      clipRule="evenodd"
    />
  </svg>
);

const   ProblemSolutionSection = () => {
  return (
    <section className="container mt-12 mx-auto px-20 pt-8">
      {/* Headings and Arrows */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Your problem
        </h2>
        <div className="flex items-center justify-center space-x-8 md:space-x-16 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our solution
          </h3>
        </div>
      </div>

      {/* Content Columns */}
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
        {/* Left Column (Problems) */}
        <div className="flex-1 space-y-8 mb-12 md:mb-0">
          {" "}
          {/* Increased space between problem items */}
          {/* Problem Item 1 */}
          <div className="flex items-start space-x-4">
            {" "}
            {/* Wrapper div for avatar and card */}
            <AvatarIcon src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.f34d230f.webp&w=48&q=75" />
            <div className="flex-1 bg-white py-8 px-6 rounded-lg shadow-md border border-gray-100">
              {" "}
              {/* The card div */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Monthly subscriptions for{" "}
                <Link href="#" className="text-orange-500 underline">
                  ahrefs
                </Link>
                ,{" "}
                <Link href="#" className="text-orange-500 underline">
                  SURFER
                </Link>
                ,{" "}
                <Link href="#" className="text-orange-500 underline">
                  Canva
                </Link>{" "}
                eat up{" "}
                <span className="text-red-600 font-semibold">
                  $500+ of marketing budget
                </span>
                .
              </p>
            </div>
          </div>
          {/* Problem Item 2 */}
          <div className="flex items-start space-x-4">
            {" "}
            {/* Wrapper div for avatar and card */}
            <AvatarIcon src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.0683e51c.webp&w=48&q=75" />
            <div className="flex-1 bg-white py-8 px-6 rounded-lg shadow-md border border-gray-100">
              {" "}
              {/* The card div */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Switching between:{" "}
                <span className="font-semibold">ChatGPT</span>,{" "}
                <Link href="#" className="text-orange-500 underline">
                  WEGLOT
                </Link>
                ,{" "}
                <Link href="#" className="text-orange-500 underline">
                  SURFER
                </Link>{" "}
                <span className="text-red-600 font-semibold">
                  losing time and efficiency
                </span>
                .
              </p>
            </div>
          </div>
          {/* Problem Item 3 */}
          <div className="flex items-start space-x-4">
            {" "}
            {/* Wrapper div for avatar and card */}
            <AvatarIcon src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.ee2ff4ed.webp&w=48&q=75" />
            <div className="flex-1 bg-white py-8 px-6 rounded-lg shadow-md border border-gray-100">
              {" "}
              {/* The card div */}
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="text-red-600 font-semibold">
                  Hours spent learning SEO tools
                </span>{" "}
                instead of growing business.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Solution) */}
        <div className="flex-1">
          <div className="bg-gradient-to-br from-purple-400 to-purple-700 text-white p-8 rounded-lg shadow-lg h-full flex flex-col">
            {/* Solution Card Header */}
            <div className="flex  items-center mb-6">
             
              <span className="text-4xl font-semibold">PowerBlog</span>
            </div>

            {/* Solution Card Content */}

            {/* White Background Section for Features */}
            <div className="bg-white py-8 px-6 rounded-lg text-gray-800 mt-auto">
              {" "}
              {/* Added mt-auto to push to bottom */}
              <p className="text-lg mb-6 opacity-90">
                Replace multiple tools with one powerful platform:
              </p>
              {/* Feature List */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  {" "}
                  {/* Used items-start for better icon alignment with text wrap */}
                  <CheckmarkIcon /> Keyword Searching
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon /> Content Generation
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon /> Content Optimization
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon /> Images
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon /> Localization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

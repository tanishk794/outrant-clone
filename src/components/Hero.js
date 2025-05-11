"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Reused button icons from HeroSection
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 48 48"
    className="mr-2"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.343c-1.796,2.742-4.878,4.787-8.343,5.489V41h6.7c3.917-3.625,6.407-8.717,6.407-14.389C43.611,22.671,43.51,21.342,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.399,29.182c0.446,1.01,0.95,1.964,1.528,2.849L14.82,37.17C16.519,35.108,17.797,32.549,18.468,29.182H6.399z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.7-6.7c-2.443,2.275-5.866,3.582-9.709,3.582c-8.449,0-15.511-5.634-18.051-13.265L6.399,29.182C7.857,32.032,10.807,34,14.319,34H24V44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.343c-0.105,0.514-0.24,1.008-0.419,1.489c0.66,3.39,1.903,6.322,3.509,8.549l6.7-6.7C41.602,29.605,43.451,25.464,43.611,20.083z"
    ></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden py-20 mt-[108px] md:pt-40 bg-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "120px 140px",
      }}
    >
      {/* SEO Content Score Card */}
      <div className="absolute top-4 left-[12%] transform -rotate-6 bg-white rounded-xl shadow-md p-3 w-40 hidden md:block border border-gray-100">
        <div className="text-xs text-gray-700 font-medium mb-2">
          SEO Content Score
        </div>
        <div className="relative h-20 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-8 border-purple-100"></div>

          <span className="absolute text-2xl font-bold">97%</span>
        </div>
      </div>

      {/* Personal Images Card */}
      <div className="absolute top-16 right-[10%] transform rotate-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl shadow-md p-3 w-40 hidden md:block border border-purple-100">
        <div className="flex items-center">
          <div className="bg-purple-100 p-1 rounded mr-2">
            <svg
              className="w-4 h-4 text-purple-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor" />
              <path
                d="M5 19L8 13L11 16L15 10L19 19H5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-xs text-purple-700 font-medium">
            Personal Images
          </span>
        </div>
      </div>

      {/* Power Keywords Card */}
      <div className="absolute top-[35%] left-[8%] transform rotate-6 bg-white rounded-xl shadow-md p-3 w-40 hidden md:block border border-gray-100">
        <div className="flex items-center">
          <div className="bg-gray-100 p-1 rounded mr-2">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8H17M7 12H17M7 16H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-700 font-medium">
            Power keywords
          </span>
        </div>
      </div>

      {/* Monetize Blog Card */}
      <div className="absolute bottom-36 left-[12%] transform -rotate-12 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl shadow-md p-2.5 w-40 hidden md:block border border-purple-100">
        <div className="text-xs text-purple-700 mb-1">Sun</div>
        <div className="text-xs font-bold text-purple-800 mb-1">5</div>
        <div className="text-xs font-medium text-purple-900 mb-2">how to monetize blog</div>
        <div className="text-xs text-purple-600 mb-1">Volume: 1400</div>
        <div className="text-xs text-purple-600">Difficulty: 12</div>
      </div>

      {/* Blog Posts Card */}
      <div className="absolute top-[35%] right-[8%] transform rotate-6 bg-white rounded-xl shadow-md p-2.5 w-40 hidden md:block border border-gray-100">
        <div className="flex justify-between mb-1">
          <div className="text-xs text-gray-700">4</div>
          <div className="text-xs text-gray-500">Sun</div>
        </div>
        <div className="text-xs text-green-500 mb-1">Published</div>
        <div className="text-xs font-medium text-gray-800 mb-2">how to write blog posts</div>
        <div className="text-xs text-gray-500 mb-1">Volume: 2704</div>
        <div className="text-xs text-gray-500 mb-2">Difficulty: 9</div>
        <button className="w-full bg-purple-500 text-white text-xs py-1 px-3 rounded hover:bg-purple-600 transition-colors">
          View Article
        </button>
      </div>

      {/* Competitors Analysis Card */}
      <div className="absolute bottom-40 right-[13%] transform rotate-6 bg-white rounded-xl shadow-md p-3 w-48 hidden md:block border border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 p-1 rounded">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20V12M12 20V4M19 20V8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-700 font-medium whitespace-nowrap">
            Competitors analysis
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] font-bold text-gray-800 mb-4">
          Grow Organic Traffic <br className="" />on{" "}
          <span className="text-purple-600">Auto-Pilot</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get traffic and outrank competitors with Backlinks & SEO-optimized{" "}
          <br /> content while you sleep.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-6 mt-2.5 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-lg shadow-md">
            <GoogleIcon />
            Join with Google
          </button>
          <button className="flex items-center justify-center px-10 py-5 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-lg shadow-md">
            Get Started for Free
            <ArrowRightIcon />
          </button>
        </div>

        <div className= "h-auto w-80 mx-auto mt-8 rounded-lg p-4 flex flex-col items-center justify-center">
        
          <div className="flex flex-row -space-x-2 overflow-hidden mb-2">
            <Image
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.f34d230f.webp&w=48&q=75"
              alt="Avatar 1"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
            <Image
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.0683e51c.webp&w=48&q=75"
              alt="Avatar 2"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
            <Image
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.f6afbc67.webp&w=48&q=75"
              alt="Avatar 3"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
            <Image
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.ee2ff4ed.webp&w=48&q=75"
              alt="Avatar 4"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
             <div className="flex ml-5 items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.543 1.607l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.31l4.213 2.615c.714.436 1.599-.207 1.405-1.02l-1.106-4.637 3.62-3.102c.628-.5.29-1.54-.543-1.607l-4.752-.381-1.83-4.401Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          </div>
         
          <p className="text-gray-600 font-medium text-sm">50k+ Articles Created</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
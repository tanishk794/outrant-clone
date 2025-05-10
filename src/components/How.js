import React from "react";
import Link from "next/link"; // Assuming the button is a link
import Image from 'next/image'; // Uncomment if using next/image for illustrations

// Reusing the ArrowRightIcon from previous components
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

const HowItWorksSection = () => {
  return (
    <section className="container mx-auto py-4 px-16 md:py-24">
      {/* Top Section: Heading, Subheading, Button */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
        <div className="mb-6 md:mb-0 md:max-w-lg">
          {" "}
          {/* Adjusted max-width for text */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            How we <span className="text-purple-600">make magic</span> happen
            {/* Added a decorative element next to the heading - replace with your SVG if needed */}
            {/* Example placeholder for the swoosh icon */}
            <span className="inline-block ml-2 transform translate-y-1">
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
                  d="M19.5 19.5 12 27m0 0-7.5-7.5M12 27V9"
                />{" "}
                {/* Example path, replace with actual swoosh SVG */}
              </svg>
            </span>
          </h2>
          {/* Consider making the subheading a separate element for better control */}
          {/* As seen in the image, the subheading text is small and next to the heading */}
          {/* We'll place it to the right of the heading container on md+ screens */}
        </div>

        {/* Subheading and Button (positioned to the right on md+) */}
        <div className="flex flex-col items-start mr-44">
          <p className="text-gray-600 text-md text-left max-w-sm mb-4 md:mb-0">
            We handle the SEO heavy lifting. Relax while we create daily ranking
            content to keep you ahead of the competition.
          </p>
          <Link href="#">
            <button className="flex items-center px-5 mt-2 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-200 text-base shadow-md">
              Start for Free
              <ArrowRightIcon />
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Feature Card 1: Deep analysis of your business */}
        <div className="bg-white rounded-lg overflow-hidden  flex flex-col">
          <div className="w-full h-64 relative">
            <Image 
            className="rounded-2xl border-1 border-gray-200"
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-1.e608ed89.webp&w=384&q=75" 
              alt="Business analysis" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Deep analysis of your business
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We explore your niche, competitors, and target audience. Discover
              hidden keywords with high traffic potential and low competition.
            </p>
          </div>
        </div>

        {/* Feature Card 2: Get a powerful 30-day plan */}
        <div className="bg-white rounded-lg overflow-hidden flex flex-col">
          <div className="w-full h-64 relative">
            <Image 
            className="rounded-2xl border-1 border-gray-200"
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-2.755a4920.webp&w=384&q=75" 
              alt="30-day plan" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Get a powerful 30-day plan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Create a strategic content plan where each day focuses on a key
              phrase with the highest potential for your business.
            </p>
          </div>
        </div>

        {/* Feature Card 3: Generate articles on autopilot */}
        <div className="bg-white rounded-lg overflow-hidden flex flex-col">
          <div className="w-full h-64 relative">
            <Image 
            className="rounded-2xl border-1 border-gray-200"
              src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhow-3.6f74e843.webp&w=384&q=75" 
              alt="Autopilot articles" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Generate articles on autopilot
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We create and publish SEO-optimized articles based on selected
              keywords daily. Your blog grows automatically while you focus on
              your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

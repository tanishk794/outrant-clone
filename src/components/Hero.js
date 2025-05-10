import React from 'react';
import Link from 'next/link'; // Assuming you might want links later

// Reusing the button icons from the previous component
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.343c-1.796,2.742-4.878,4.787-8.343,5.489V41h6.7c3.917-3.625,6.407-8.717,6.407-14.389C43.611,22.671,43.51,21.342,43.611,20.083z"></path><path fill="#FF3D00" d="M6.399,29.182c0.446,1.01,0.95,1.964,1.528,2.849L14.82,37.17C16.519,35.108,17.797,32.549,18.468,29.182H6.399z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.7-6.7c-2.443,2.275-5.866,3.582-9.709,3.582c-8.449,0-15.511-5.634-18.051-13.265L6.399,29.182C7.857,32.032,10.807,34,14.319,34H24V44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.343c-0.105,0.514-0.24,1.008-0.419,1.489c0.66,3.39,1.903,6.322,3.509,8.549l6.7-6.7C41.602,29.605,43.451,25.464,43.611,20.083z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 mt-[108px] md:pt-40 bg-white" // Added pt-32 and md:pt-40 for more space at the top
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '120px 140px', // Increased grid cell size here
      }}
    >
      {/* Floating Decorative Elements (Adjust positioning and content) */}
      {/* You might need to adjust the 'top' values here as well due to increased padding */}
      <div className="absolute top-32 left-10 transform rotate-6 hidden md:block">
        {/* Replace with your image or card component */}
        <div className="bg-white p-4 rounded-lg shadow-md">SEO Content Score 97%</div>
      </div>
       <div className="absolute top-32 right-10 transform -rotate-6 hidden md:block">
        {/* Replace with your image or card component */}
        <div className="bg-white p-4 rounded-lg shadow-md">Personal Images</div>
      </div>
      <div className="absolute bottom-20 left-20 transform -rotate-3 hidden md:block">
         {/* Replace with your image or card component */}
        <div className="bg-white p-4 rounded-lg shadow-md">Power Keywords</div>
      </div>
       <div className="absolute bottom-10 right-20 transform rotate-3 hidden md:block">
         {/* Replace with your image or card component */}
        <div className="bg-white p-4 rounded-lg shadow-md">Published Card</div> {/* Placeholder for the published card */}
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] font-bold text-gray-800 mb-4">
          Grow Organic Traffic <br className=""/>on <span className="text-purple-600">Auto-Pilot</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get traffic and outrank competitors with Backlinks & SEO-optimized <br/> content while you sleep.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-6 mt-2.5 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-lg shadow-md">
            <GoogleIcon />
            Join with Google
          </button>
          <button className="flex items-center justify-center px-10 py-5 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-lg shadow-md">
            Get Started for Free
            <ArrowRightIcon/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
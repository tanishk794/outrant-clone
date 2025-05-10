import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

// Reusing the ArrowRightIcon component
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
  </svg>
);

// Placeholder Image URL for the left illustration - **Please replace with your actual image URL**
const STYLE_SHOWCASE_IMAGE_URL = '/placeholder-style-showcase.jpg'; // Replace with your image URL

// Placeholder SVG for decorative curved arrows - **Replace with your actual SVGs**
const DecorativeCurvedArrow1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
    </svg>
);

const DecorativeCurvedArrow2 = () => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-500 transform rotate-180">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
    </svg>
);


const GenerateImagesSection = () => {
  return (
    <section className="container mx-auto px-12 py-4 md:py-24">

      {/* Content Layout: Image on Left, Text Card on Right */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-12 lg:space-x-16"> {/* items-center for vertical alignment */}
        {/* Left Column: Image and Decorative Text */}
        <div className="w-full md:w-1/2 relative mb-12 md:mb-0 rounded-xl"> {/* relative needed for absolute positioning of decorative elements */}
           {/* Main Image - Replace with your Image component pointing to the showcase image */}
           {/* Adjust width and height based on your image's actual dimensions */}
           {/* You might need to adjust the container size or use layout="fill" with objectFit */}
           <Image
            src="https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-4.9713fcf8.webp&w=828&q=75"
            alt="Image style showcase"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
            className="rounded-2xl"
          />

        

        </div>

        {/* Right Column: Text Content Card */}
        <div className="w-full md:w-1/2 bg-gradient-to-l from-purple-100 to-white p-8 md:p-10 rounded-4xl shadow-lg border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Generate on-brand <br/> images
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Enrich articles with unique visuals. Choose styles and add brand colors. We auto-insert them into content & as featured images.
          </p>
          <Link href="#"> {/* Replace # with your actual link */}
            <button className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-base shadow-md">
              Start for Free
              <ArrowRightIcon />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenerateImagesSection;
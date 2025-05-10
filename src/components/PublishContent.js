import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

// Reusing the ArrowRightIcon component
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 6.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
  </svg>
);

// Placeholder Image URL for the right illustration - **Please replace with your actual image URL**
const INTEGRATIONS_IMAGE_URL = 'https://www.outrank.so/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-5.3df3f1f3.webp&w=828&q=75'; // Replace with your image URL

const PublishContentSection = () => {
  return (
    <section className="container mx-auto px-12 py-4 md:py-24">

      {/* Content Layout: Text Card on Left, Image on Right */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Column: Text Content Card */}
        <div className="w-full md:w-1/2 bg-gradient-to-l from-purple-100 to-white p-8 md:p-10 rounded-4xl border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Publish content <br/> on auto-pilot
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Set up once and forget about manual work. Integrates with WordPress, Webflow, Shopify and many <span className="text-purple-600 font-semibold">other platforms</span>. Your content goes live automatically.
          </p>
          <Link href="#"> {/* Replace # with your actual link */}
            <button className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-base">
              Start for Free
              <ArrowRightIcon />
            </button>
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={INTEGRATIONS_IMAGE_URL}
              alt="Integrations Illustration"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishContentSection;
import Image from 'next/image';
import React from 'react';

// Reusing the CurvedArrowIcon from a previous component
const CurvedArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

// Placeholder component for the circular icon with a white symbol
const FeatureIcon = ({ children }) => (
    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-t from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shrink-0 shadow-md">
        {children}
    </div>
);

const BestWorkSection = () => {
  return (
    <section className="container mx-auto px-12 py-4 md:py-24 bg-gradient-to-t from-purple-50 to-white">
      {/* Heading and Arrows */}
      <div className="flex flex-col items-center justify-center space-x-4 md:space-x-8 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">And so <span className="text-purple-500">much more you need</span> </h2>
          <h2 className="text-3xl mt-1 md:text-4xl font-bold text-gray-800 text-center">to do your best work.</h2>
          <CurvedArrowIcon />
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {/* Card 1: Write in your language */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-1.8e326e3c.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Write in your language</h3>
          <p className="text-gray-600 leading-relaxed">
            Generate high-quality content in over <span className="text-purple-600 font-semibold">150+ languages</span>. Our AI creates articles in any language you need.
          </p>
        </div>

        {/* Card 2: Edit article with AI */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-2.cef4c9a1.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Edit article with AI</h3>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">Easily edit your article</span> to meet your exact expectations, ensuring every word aligns with your vision for standout content.
          </p>
        </div>

        {/* Card 3: Generate unlimited keywords */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-3.0f46b2fb.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Generate unlimited keywords</h3>
          <p className="text-gray-600 leading-relaxed">
             Generate <span className="text-purple-600 font-semibold">unlimited sets of keywords</span> until you find the perfect match for your content
          </p>
        </div>

        {/* Card 4: Multi-site package */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-4.b007ea9e.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Multi-site package</h3>
          <p className="text-gray-600 leading-relaxed">
            Scale your content strategy by adding <span className="text-purple-600 font-semibold">more websites</span> to your package whenever needed.
          </p>
        </div>

         {/* Card 5: Multi-user access */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-5.8e5091c6.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Multi-user access</h3>
          <p className="text-gray-600 leading-relaxed">
            Invite <span className="text-purple-600 font-semibold">multiple editors</span> to your organization and <span className="font-semibold">collaborate seamlessly</span> to generate impactful
          </p>
        </div>

        {/* Card 6: Support */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             <Image src="https://www.outrank.so/_next/static/media/how-6.72d1ea80.svg" alt="Arrow" width={24} height={24} />
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Support</h3>
          <p className="text-gray-600 leading-relaxed">
            Get <span className="text-purple-600 font-semibold">expert assistance 24/7</span>, ensuring smooth operation of all platform features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestWorkSection;
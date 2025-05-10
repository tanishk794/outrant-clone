import React from 'react';

// Reusing the CurvedArrowIcon from a previous component
const CurvedArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
);

// Placeholder component for the circular icon with a white symbol
const FeatureIcon = ({ children }) => (
    <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shrink-0"> {/* Increased size and added shrink-0 */}
        {/* The white symbol inside */}
        {children}
    </div>
);

const BestWorkSection = () => {
  return (
    <section className="container mx-auto px-12 py-4 md:py-24">
      {/* Heading and Arrows */}
      <div className="flex flex-col items-center justify-center space-x-4 md:space-x-8 mb-12 md:mb-16"> {/* Adjusted spacing */}
           {/* Rotated left arrow */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">And so <span className="text-purple-500">much more you need</span> </h2>
          <h2 className="text-3xl mt-1 md:text-4xl font-bold text-gray-800 text-center">to do your best work.</h2>
           <CurvedArrowIcon />
      </div>

      {/* Feature Cards Grid */}
      {/* Using a grid for a responsive 3-column layout on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

        {/* Card 1: Write in your language */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             {/* Icon for Write in your language */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M11.856 1.5c-.352 0-.694.14-.945.393L5.693 7.752a3.75 3.75 0 1 0 5.313 5.313l6.364-6.364a3.75 3.75 0 0 0-5.313-5.313Zm-1.34 6.364a2.25 2.25 0 0 1 3.182 0l5.313 5.314a2.25 2.25 0 0 1-3.182 3.182l-5.313-5.313a2.25 2.25 0 0 1 0-3.182Z" clipRule="evenodd" />
              </svg>
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Write in your language</h3>
          <p className="text-gray-600 leading-relaxed">
            Generate high-quality content in over <span className="text-purple-600 font-semibold">150+ languages</span>. Our AI creates articles in any language you need.
          </p>
        </div>

        {/* Card 2: Edit article with AI */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             {/* Icon for Edit article with AI */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                <path d="m5.476 10.343 1.517 1.517a.75.75 0 0 1-.006 1.063l-1.782 1.782c-1.517 1.517-3.973.607-3.973-1.516v-.006a1.5 1.5 0 0 1 .137-.643l.902-1.912a.75.75 0 0 1 1.06-.006ZM13.643 3.373a.75.75 0 0 1 1.06 0L17.707 5.64a.75.75 0 0 1 0 1.06L15.439 9.04a.75.75 0 0 1-1.06 0L12.17 6.77a.75.75 0 0 1 0-1.06l2.274-2.274Z" />
                <path d="m10.343 5.476-4.905 4.905a1.5 1.5 0 0 0-.432 1.06L4.004 14.9c-.02.536.122 1.04.41 1.425a2.251 2.251 0 0 0 1.429.801c.474.073.96-.065 1.352-.397l4.905-4.905a1.5 1.5 0 0 0 0-2.121l-2.274-2.274a1.5 1.5 0 0 0-2.121 0Z" />
             </svg>
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Edit article with AI</h3>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">Easily edit your article</span> to meet your exact expectations, ensuring every word aligns with your vision for standout content.
          </p>
        </div>

        {/* Card 3: Generate unlimited keywords */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
              {/* Icon for Generate unlimited keywords */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm2.27 5.72.945.943a.75.75 0 1 1-1.06 1.06L10 7.06 8.844 8.284a.75.75 0 1 1-1.06-1.06l1.156-1.155.943-.945a.75.75 0 0 1 1.06 0Z" />
                <path d="M12.27 14.28a.75.75 0 0 0 1.06 0l.945-.943a.75.75 0 0 0-1.06-1.06L10 12.94l-1.156 1.156a.75.75 0 0 0 1.06 1.06l1.156-1.156Z" />
                <path d="M10 3.5a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5A.75.75 0 0 0 10 3.5Z" />
              </svg>
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Generate unlimited keywords</h3>
          <p className="text-gray-600 leading-relaxed">
             Generate <span className="text-purple-600 font-semibold">unlimited sets of keywords</span> until you find the perfect match for your content
          </p>
        </div>

        {/* Card 4: Multi-site package */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
             {/* Icon for Multi-site package */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                 <path d="M9.25 13.75a.75.75 0 0 0 1.5 0V9.5h3.25a.75.75 0 0 0 0-1.5h-3.25V4.75a.75.75 0 0 0-1.5 0V8H6a.75.75 0 0 0 0 1.5h3.25v4.25Z" />
                 <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" clipRule="evenodd" />
              </svg>
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Multi-site package</h3>
          <p className="text-gray-600 leading-relaxed">
            Scale your content strategy by adding <span className="text-purple-600 font-semibold">more websites</span> to your package whenever needed.
          </p>
        </div>

         {/* Card 5: Multi-user access */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
              {/* Icon for Multi-user access */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                  <path d="M7.5 6.5C7.5 8.981 9.481 11 12 11s4.5-2.019 4.5-4.5S14.519 2 12 2 7.5 4.019 7.5 6.5ZM2 10a2 2 0 0 1 2-2h2.25a2 2 0 0 1 2 2v2.25a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10Zm13.5 4.5a2 2 0 0 0-1.85-1.074C13.161 12.23 11.895 12.5 10.5 12.5c-1.389 0-2.65-.27-3.14-.574A2 2 0 0 0 5.5 14.5v1.75C5.5 17.921 7.579 20 10 20h1c2.421 0 4.5-2.079 4.5-4.75V14.5Z" />
                </svg>
           </FeatureIcon>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Multi-user access</h3>
          <p className="text-gray-600 leading-relaxed">
            Invite <span className="text-purple-600 font-semibold">multiple editors</span> to your organization and <span className="font-semibold">collaborate seamlessly</span> to generate impactful
          </p> {/* Note: The description text is cut off in the image, completed based on likely intent */}
        </div>

        {/* Card 6: Support */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col">
           <FeatureIcon>
              {/* Icon for Support */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
                 <path fillRule="evenodd" d="M10 1a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9ZM8.5 11.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5Zm1.5-3.75a.75.75 0 0 0-.75.75v3.25a.75.75 0 0 0 1.5 0V8.75A.75.75 0 0 0 10 8Z" clipRule="evenodd" />
               </svg>
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
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Assuming the cards/links are clickable
import ScrollSection from './ScrollSection';

// Placeholder for "Check examples" decorative arrow/text
const CheckExamplesArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-500 rotate-45">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-1.5 1.5m-2.25 2.25L13.5 7.5m-3 0 3-3m-3 3.75h.008v.008H10.5V11.25ZM12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5M12 18.75h.008v.008H12Z" />
    </svg>
);

// Placeholder for logos/icons on the left cards
const LogoPlaceholder = ({ children }) => (
  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
    {children}
  </div>
);

// Placeholder image URLs
const DOCUMIND_LOGO_URL = '/placeholder-documind-logo.svg'; // Replace with actual
const SUPERX_LOGO_URL = '/placeholder-superx-logo.svg';     // Replace with actual
const DOCUMENT_MASTERY_IMAGE_URL = '/placeholder-document-mastery.jpg'; // Replace with actual

const AiContentSection = () => {
  const scrollContent = {
    imageUrl: DOCUMENT_MASTERY_IMAGE_URL,
    title: "Taming the Document Deluge",
    paragraphs: [
      "Documents drive most modern work. From academic papers and legal documents to patient files and marketing materials, the effective handling of information is critical for success. But managing an ever-growing pile of digital files remains a stubborn challenge for many professionals. The switch from paper to digital storage has shifted the problem rather than solved it - trading overstuffed filing cabinets for chaotic digital folders.",
      "Modern document management combines time-tested principles with new digital tools. It's about creating a systematic approach to organize, store, retrieve, and share documents securely and efficiently. This goes beyond simply saving files to a hard drive or cloud service; it involves establishing clear naming conventions, folder structures, access permissions, and version control.",
      "For businesses, effective document management translates into improved productivity, reduced operational costs, enhanced security, and better compliance with regulations. It minimizes the time spent searching for information, prevents data loss, and ensures that everyone is working with the most current versions of documents. It also facilitates seamless collaboration, allowing teams to work together on projects regardless of their physical location.",
      "For individuals, it means a more organized digital life, less stress, and more time for creative pursuits. Imagine quickly finding that important tax document, family photo, or project brief in seconds, rather than sifting through endless folders or relying on fragmented search results. A well-managed document system empowers you to focus on what truly matters, knowing that your information is always accessible and secure.",
      "The benefits are clear, whether you're a busy professional or simply someone seeking to streamline their digital life. Embracing effective document management is a step towards greater efficiency, peace of mind, and ultimately, your best work."
    ]
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading and Decorative Text */}
      <div className="text-center md:text-left mb-12 md:mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          AI-generated content that <span className="text-purple-600">humans love to read.</span>
        </h2>
        {/* Decorative "Check examples" */}
        <div className="absolute -top-8 right-0 md:top-0 md:left-1/2 lg:left-[60%] transform md:translate-x-1/2 -rotate-6 hidden md:flex items-center text-purple-600 text-lg font-semibold">
            Check examples
            <span className="ml-2 -mt-2"><CheckExamplesArrow /></span>
        </div>
      </div>

      {/* Content Layout: Left Column (Cards), Right Column (Scrollable Content) */}
      <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 items-stretch">
        {/* Left Column: Article Preview Cards */}
        <div className="w-[45%] space-y-6 ml-4 md:mb-0">
          {/* Article Card 1 */}
          <Link href="#" className="block bg-white px-6 py-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
              10 Document Management Best Practices to Improve Your Work
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LogoPlaceholder>
                  {/* Replace with Documind logo SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-700">
                    <path fillRule="evenodd" d="M10 1c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8Zm-1.5 11.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9.25a.75.75 0 0 1-.75-.75Zm.75-2.25a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5H9.25Z" clipRule="evenodd" />
                  </svg>
                </LogoPlaceholder>
                <span className="ml-2 text-gray-600 font-semibold">Documind</span>
              </div>
              <span className="px-4 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                Listicle
              </span>
            </div>
          </Link>

          {/* Article Card 2 */}
          <Link href="#" className="block bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
              How to Monetize Twitter: Proven Strategies for Content Creators
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LogoPlaceholder>
                  {/* Replace with SuperX logo SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange-500">
                    <path d="M8.5 16.5A1.5 1.5 0 0 1 7 18a1.5 1.5 0 0 1-1.5-1.5H2a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 .5-.5h3.5c.187 0 .351-.111.424-.29l1.656-4.14c.092-.23.31-.373.556-.373h1.52c.246 0 .464.143.556.373l1.656 4.14c.073.179.237.29.424.29H18a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-3.5A1.5 1.5 0 0 1 13 18a1.5 1.5 0 0 1-1.5-1.5H8.5ZM12 14a1.5 1.5 0 0 1 1.5-1.5h2a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.424.29L11.5 8.5h-3l1.5-4.5h-2.5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h3.5c.187 0 .351-.111.424-.29L8.5 13.5h3ZM10 11.5a.5.5 0 0 0-.424-.29l-1.656-4.14c-.092-.23-.31-.373-.556-.373H5.82a.5.5 0 0 0-.424.29l-1.656 4.14c-.073.179-.237.29-.424.29H1.5a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3.5c.187 0 .351-.111.424-.29l1.656-4.14c.073-.179.237-.29.424-.29H9.5a.5.5 0 0 0 .424-.29l1.656-4.14c.073-.179.237-.29.424-.29H14a.5.5 0 0 0 .5.5v3.5a.5.5 0 0 0-.5.5h-3.5ZM12.5 14a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0-.5-.5V9.5a.5.5 0 0 0 .5-.5h2.5a.5.5 0 0 0 .424-.29L11.5 5.5h2.5a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.424.29L11.5 5.5h-2.5a.5.5 0 0 0-.5-.5H4.5a.5.5 0 0 0-.5-.5v12a.5.5 0 0 0 .5.5h2.5c.187 0 .351-.111.424-.29L8.5 13.5h3Z" />
                  </svg>
                </LogoPlaceholder>
                <span className="ml-2 text-gray-600 font-semibold">SuperX</span>
              </div>
              <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Guide
              </span>
            </div>
          </Link>

          {/* Article Card 3 */}  <Link href="#" className="block bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Top 9 AI Video Generators: Transform Your Vision into Reality
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LogoPlaceholder>
                  {/* Replace with Documind logo SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-700">
                    <path fillRule="evenodd" d="M10 1c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8Zm-1.5 11.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9.25a.75.75 0 0 1-.75-.75Zm.75-2.25a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5H9.25Z" clipRule="evenodd" />
                  </svg>
                </LogoPlaceholder>
                <span className="ml-2 text-gray-600 font-semibold">Rivid.ai</span>
              </div>
              <span className="px-4 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
              Tools Listicle
              </span>
            </div>
          </Link>

        </div>

        {/* Right Column: Scrollable Content Card */}
        <ScrollSection />

        
      </div>
      <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4 text-center">
      {/* Descriptive Text */}
      <p className="text-lg  italic text-gray-700 mb-8">
        Check out the Outrank blog where <span className="font-semibold">All Articles are generated with Outrank:</span>
      </p>

      {/* Button */}
      <a
        href="YOUR_BLOG_LINK_HERE" // Replace with your actual blog link
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="inline-flex items-center justify-center px-4 py-2
                   bg-gradient-to-r from-purple-500 to-purple-700
                   text-white text-lg md:text-xl font-semibold
                   rounded-full shadow-lg transition-all duration-300
                   border-2 border-purple-400 hover:border-purple-500
                   hover:from-purple-600 hover:to-purple-800
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Visit Our Blog
      </a>
    </div>
    </section>
  );
};

export default AiContentSection;

<style jsx>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.3);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.5);
  }
`}</style>
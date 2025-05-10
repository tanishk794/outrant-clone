import React from 'react';
import Image from 'next/image'; // Assuming Next.js is used for Image component
import Link from 'next/link';   // Assuming Next.js Link for internal navigation or general links

// SVG for the checkmark icon
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-purple-600 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
      clipRule="evenodd"
    />
  </svg>
);

// SVG for the right arrow icon
const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </svg>
);

// SVG for star rating
const StarIcon = ({ filled = false, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.543 1.607l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.31l4.213 2.615c.714.436 1.599-.207 1.405-1.02l-1.106-4.637 3.62-3.102c.628-.5.29-1.54-.543-1.607l-4.752-.381-1.83-4.401Z"
      clipRule="evenodd"
    />
  </svg>
);

const PaymentInfo  = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Main Heading */}
      <div className="flex  items-center justify-center text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Grow Organic Traffic <br /> on <span className="text-purple-600">Auto-Pilot</span>
        </h1>
        {/* Avatar Group with Rating */}
        <div className="flex flex-col items-center ml-20 mt-6">
            <p className='text-gray-700'>
            Outrank creates SEO-optimized articles that drive <br></br>traffic while you focus on growing your business.
            </p>
          <div className="flex -space-x-2 overflow-hidden mt-3 mr-3">
            {/* Replace with actual avatar URLs */}
            <Image
              src="/placeholders/avatar-1.jpg"
              alt="Avatar 1"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
            <Image
              src="/placeholders/avatar-2.jpg"
              alt="Avatar 2"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
            <Image
              src="/placeholders/avatar-3.jpg"
              alt="Avatar 3"
              width={32}
              height={32}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            />
          </div>
          
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={true} />
            ))}
          </div>
          <p className="text-gray-600 font-medium">50k+ Articles Created</p>
        </div>
      </div>

      {/* Pricing and Features Card */}
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 mx-auto max-w-6xl border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-stretch">
          {/* Left Section: Pricing */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-8 lg:mb-0">
              <p className="text-3xl font-bold text-gray-800 mb-2">All in One</p>
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                For ambitious entrepreneurs
              </span>
            </div>
            <div className="my-8 lg:my-0">
              <p className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-2">
                $99
              </p>
              <p className="text-lg text-gray-500">
                <span className="line-through">$200</span> /monthly
              </p>
            </div>
            <div className="w-full">
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg
                           shadow-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Get Started for Free
                <RightArrowIcon />
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Cancel anytime. No questions asked!
              </p>
            </div>
          </div>

          {/* Right Section: Features List */}
          <div className="w-full lg:w-2/3 lg:pl-16 lg:border-l lg:border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What's included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  30 Articles a month generated and published on auto-pilot
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Unlimited Users in your Organization
                </p>
              </div>
              {/* Feature 3 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Keyword Research made for you on auto-pilot
                </p>
              </div>
              {/* Feature 4 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Integrates with WordPress, Webflow, Shopify and many{' '}
                  <Link href="#" className="text-purple-600 hover:underline">
                    other platforms
                  </Link>
                </p>
              </div>
              {/* Feature 5 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  AI Images generated in different styles
                </p>
              </div>
              {/* Feature 6 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Fully SEO optimized Articles
                </p>
              </div>
              {/* Feature 7 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Relevant YouTube videos integrated into articles
                </p>
              </div>
              {/* Feature 8 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Articles generated in multiple languages
                </p>
              </div>
              {/* Feature 9 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Unlimited AI Rewrites
                </p>
              </div>
              {/* Feature 10 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Custom Features requests
                </p>
              </div>
              {/* Feature 11 */}
              <div className="flex items-start">
                <CheckmarkIcon />
                <p className="ml-3 text-gray-700 text-lg">
                  Priority Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
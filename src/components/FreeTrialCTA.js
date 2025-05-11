import React from 'react';
import Link from 'next/link'; // Assuming Next.js Link component for internal navigation

// SVG for the right arrow icon (reused from previous components)
const RightArrowIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-5 h-5 ml-2 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </svg>
);

const FreeTrialCTA = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* CTA Card */}
      <div className="bg-violet-500 rounded-2xl shadow-xl p-8 md:p-16 lg:p-20
                      flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        {/* Left Text Content */}
        <div className="mb-8 lg:mb-0 max-w-full lg:max-w-2xl">
          <p className="text-sm uppercase tracking-widest font-medium text-purple-200 mb-2">
            LET'S TRY!
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start creating magic today with a{' '}
            <span className="text-yellow-300">free trial!</span>
          </h2>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          <Link href="/signup" passHref> {/* Replace '/signup' with your actual signup page link */}
            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5
                         bg-white text-purple-700 text-lg md:text-xl font-semibold
                         rounded-full shadow-lg transition-all duration-300
                         border-2 border-purple-400 hover:border-purple-500
                         hover:bg-gray-50 hover:text-purple-800
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Get Started for Free
              <RightArrowIcon className="text-purple-700 group-hover:text-purple-800" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialCTA;
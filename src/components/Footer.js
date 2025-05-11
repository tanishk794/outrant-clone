import React from 'react';
import Link from 'next/link'; // Assuming Next.js Link for navigation

// SVG for the Outrank logo graphic (simplified placeholder)
const OutrankLogoGraphic = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-purple-600 mr-2 -translate-y-0.5" // Adjusted for visual alignment
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6 6 0 0 0-5.66 8.566A4.5 4.5 0 0 0 12 20.25a4.5 4.5 0 0 0 7.16-7.924 6 6 0 0 0-5.66-8.566ZM12 6A3 3 0 1 0 9 9a3 3 0 0 0 3-3Zm-0.376 9.685A1.5 1.5 0 0 1 9.75 15h-1.5a.75.75 0 0 0-.75.75v.972c0 .275.166.52.42.626a7.538 7.538 0 0 0 3.61 1.426 1.5 1.5 0 0 1-.25-2.997Z"
      clipRule="evenodd"
    />
  </svg>
);

// SVG for the Close/X icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

// Data structure for footer navigation links
const footerLinks = [
  {
    title: 'Product',
    links: [
      { text: 'How it works', href: '#' },
      { text: 'Writing Examples', href: '#' },
      { text: 'Pricing', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Directory Submission', href: '#' },
    ],
  },
  {
    title: 'Free Tools',
    links: [{ text: 'Blog Keyword Generator', href: '#' }],
  },
  {
    title: 'Company',
    links: [
      { text: 'Become Affiliate', href: '#' },
      { text: 'Terms & Conditions', href: '#' },
      { text: 'Privacy Policy', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-8 px-4">
          {/* Separator Line */}
          

      <div className="container mx-auto w-[90%]">
      <div className="border-t border-gray-200 mb-8 md:mb-12"></div>
        {/* Top Section: Logo, Links, and Close Button */}
        {/* Grid definition adjusted:
            - On small screens (default), 1 column.
            - On medium screens (md), 2 columns (content will stack).
            - On large screens (lg), 6 columns to accommodate all 5 visual elements side-by-side. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 xl:gap-16 mb-12 md:mb-16">
          {/* Outrank Logo and Email */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center mb-4 group">
              <OutrankLogoGraphic />
              <span className="text-3xl font-bold text-gray-900">Powerblog</span>
            </Link>
            <a
              href="mailto:support@outrank.so"
              className="text-purple-600 hover:text-purple-700 transition-colors text-lg"
            >
              support@Powerblog.so
            </a>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((category, index) => (
            // Each nav category takes 1 column on md and lg, allowing them to sit beside each other
            <div key={index} className="md:col-span-1 lg:col-span-1 text-center md:text-left">
              <h3 className="font-bold text-md text-gray-800 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 text-sm hover:text-purple-600 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Close Icon */}
          {/* Positioned in its own column (lg:col-span-1) ensuring it's always on the same line
              on larger screens. On medium screens (md:col-span-1), it will stack below content
              due to md:grid-cols-2, which is a common responsive behavior. */}
          <div className="md:col-span-1 lg:col-span-1 flex justify-center md:justify-end items-start">
            <button
              type="button"
              className="p-2 md:p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close footer"
            >
              <CloseIcon />
            </button>
          </div>
        </div>



        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500">
          © 2025 All rights reserved Powerblog
        </div>
      </div>
    </footer>
  );
};

export default Footer;
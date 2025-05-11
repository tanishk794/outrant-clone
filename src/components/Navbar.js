"use client";
import React, { useState } from "react";
import Link from "next/link";

// Placeholder components for icons - replace with your actual icons
const OutrankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-purple-600 mr-1"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 48 48"
    className="mr-2"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.343c-1.796,2.742-4.878,4.787-8.343,5.489V41h6.7c3.917-3.625,6.407-8.717,6.407-14.389C43.611,22.671,43.51,21.342,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.399,29.182c0.446,1.01,0.95,1.964,1.528,2.849L14.82,37.17C16.519,35.108,17.797,32.549,18.468,29.182H6.399z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.7-6.7c-2.443,2.275-5.866,3.582-9.709,3.582c-8.449,0-15.511-5.634-18.051-13.265L6.399,29.182C7.857,32.032,10.807,34,14.319,34H24V44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.343c-0.105,0.514-0.24,1.008-0.419,1.489c0.66,3.39,1.903,6.322,3.509,8.549l6.7-6.7C41.602,29.605,43.451,25.464,43.611,20.083z"
    ></path>
  </svg>
);

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

// Hamburger Icon
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-center w-full fixed h-20 top-0 z-50 mt-4">
      <nav
        className="flex items-center justify-between w-full max-w-6xl px-4 py-3 bg-white rounded-full shadow-lg border border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-80"
        style={{ maxWidth: "calc(100% - 48px)" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <OutrankIcon />
          <span className="text-lg font-bold text-gray-800">Powerblog</span>{" "}
          {/* Changed to Powerblog */}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link
            href="#"
            className=" hover:bg-gray-100 transition-colors px-3 py-2 font-semibold rounded-2xl duration-200 text-sm lg:text-md"
          >
            How it works
          </Link>
          <Link
            href="#"
            className=" hover:bg-gray-100 transition-colors px-3 py-2 font-semibold rounded-2xl  duration-200 text-sm lg:text-md"
          >
            Writing Examples
          </Link>
          <Link
            href="#"
            className=" hover:bg-gray-100 transition-colors px-3 py-2 font-semibold rounded-2xl  duration-200 text-sm lg:text-md"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="hover:bg-gray-100 transition-colors px-3 py-2 font-semibold rounded-2xl  duration-200 text-sm lg:text-md"
          >
            Blog
          </Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-sm lg:text-base">
            <GoogleIcon />
            Join with Google
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-sm lg:text-base">
            Start for Free
            <ArrowRightIcon />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay and Content */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>{" "}
      {/* Overlay */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col items-center py-6 space-y-6">
          {/* Mobile Navigation Links */}
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            onClick={toggleMobileMenu}
          >
            How it works
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            onClick={toggleMobileMenu}
          >
            Writing Examples
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-base"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>

          {/* Mobile Auth Buttons */}
          <button
            className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-base w-max"
            onClick={toggleMobileMenu}
          >
            <GoogleIcon />
            Join with Google
          </button>
          <button
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 text-base w-max"
            onClick={toggleMobileMenu}
          >
            Start for Free
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

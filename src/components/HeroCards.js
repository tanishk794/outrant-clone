"use client"
import { useState } from 'react';

export default function HeroCards() {
  return (
    <div className="relative w-full h-full min-h-screen bg-gray-50 p-4 overflow-hidden">
      {/* SEO Content Score Card */}
      <div className="absolute top-16 left-40 transform -rotate-6 bg-white rounded-xl shadow-md p-4 w-48">
        <div className="text-xs text-gray-700 font-medium mb-2">SEO Content Score</div>
        <div className="relative h-20 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-8 border-gray-100"></div>
          <div className="absolute top-0 left-0 w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                fill="none" 
                stroke="#e6e6e6" 
                strokeWidth="8"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                fill="none" 
                stroke="#4ade80" 
                strokeWidth="8" 
                strokeDasharray="290" 
                strokeDashoffset="9" 
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <span className="absolute text-2xl font-bold">97%</span>
        </div>
      </div>

      {/* Personal Images Card */}
      <div className="absolute top-16 right-40 transform rotate-6 bg-white rounded-xl shadow-md p-4 w-48">
        <div className="flex items-center">
          <div className="bg-gray-100 p-1 rounded mr-2">
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor"/>
              <path d="M5 19L8 13L11 16L15 10L19 19H5Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-xs text-gray-700 font-medium">Personal Images</span>
        </div>
      </div>

      {/* Power Keywords Card */}
      <div className="absolute top-72 left-24 transform rotate-6 bg-white rounded-xl shadow-md p-4 w-48">
        <div className="flex items-center">
          <div className="bg-purple-100 p-1 rounded mr-2">
            <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-xs text-gray-700 font-medium">Power keywords</span>
        </div>
      </div>

      {/* Monetize Blog Card */}
      <div className="absolute bottom-24 left-40 transform -rotate-12 bg-white rounded-xl shadow-md p-3 w-48">
        <div className="text-xs mb-1">Sun</div>
        <div className="text-xs font-bold mb-1">5</div>
        <div className="text-xs font-medium mb-2">how to monetize blog</div>
        <div className="text-xs text-gray-500 mb-1">Volume: 1400</div>
        <div className="text-xs text-gray-500">Difficulty: 12</div>
      </div>

      {/* Blog Posts Card */}
      <div className="absolute top-64 right-32 transform rotate-6 bg-white rounded-xl shadow-md p-3 w-48">
        <div className="flex justify-between mb-1">
          <div className="text-xs">4</div>
          <div className="text-xs text-gray-500">Sun</div>
        </div>
        <div className="text-xs text-green-500 mb-1">Published</div>
        <div className="text-xs font-medium mb-2">how to write blog posts</div>
        <div className="text-xs text-gray-500 mb-1">Volume: 2704</div>
        <div className="text-xs text-gray-500 mb-2">Difficulty: 9</div>
        <button className="w-full bg-purple-500 text-white text-xs py-1 px-3 rounded">View Article</button>
      </div>

      {/* Competitors Analysis Card */}
      <div className="absolute bottom-24 right-32 transform rotate-6 bg-white rounded-xl shadow-md p-4 w-48">
        <div className="flex items-center">
          <div className="bg-purple-100 p-1 rounded mr-2">
            <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20V12M12 20V4M19 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-xs text-gray-700 font-medium">Competitors analysis</span>
        </div>
      </div>
    </div>
  );
}
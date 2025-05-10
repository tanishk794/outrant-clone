import React from 'react'
import ProblemSolutionSection from './ProblemSolutionSection'
const VideoSection = () => {
  return (
    <section className="relative overflow-hidden  h-full w-full md:pt-28 bg-white" // Added pt-32 and md:pt-40 for more space at the top
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '120px 140px', // Increased grid cell size here
      }}
    >
      <div className="container mx-auto px-6">
        <div className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-100 rounded-xl shadow-xl overflow-hidden">
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source 
              src="https://assets.sheetwa.com/videos/send-bulk-whatsapp-from-google-sheet.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <ProblemSolutionSection />
      
    </section>
  )
}

export default VideoSection
import React from 'react';
import Image from 'next/image'; // Assuming Next.js is used for Image component

// Common "X" (Close) icon for cards
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

// Common Heart (Like) icon
const HeartIcon = ({ filled = false, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-4 h-4 text-red-500 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.815 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

// Common Star (Rating) icon
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

// Data for the testimonials (replace image URLs with your actual paths)
const testimonialsData = [
  {
    id: 1,
    type: 'twitter',
    user: {
      avatar: '/placeholders/avatar-dennis.jpg', // Replace with actual URL
      name: 'Dennis Cessan',
      handle: '@denniscessan',
    },
    text: 'Since October I\'ve used Outrank.so write articles for Checkout Links daily. I\'m bootstrapping so it\'s nice knowing that the blog and SEO are not neglected when I focus on other things. The articles it produces are pretty great and totally in context - check it out!',
    likes: 11,
    date: 'Nov 13, 2024',
  },
  {
    id: 2,
    type: 'rating_with_graph',
    company: {
      logo: '/placeholders/logo-okzest.svg', // Replace with actual URL
      name: 'OKZest',
    },
    rating: 5, // out of 5
    graphImage: 'https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F46cff328-ae58-4702-ae96-c111ba31337a%2Fattached?alt=media&token=ae03e0c8-22ee-4a44-bf04-f3868a653e21', // Replace with actual URL
    text: 'I just wanted to say, we have been using Outrank for a few weeks now and the results have been amazing!!! This graph shows the number of impressions we are getting in Google. We had a \'hockey stick\' moment from when we started using Outrank! We are excited to see this growth, I\'m looking forward to...',
  },
  {
    id: 3,
    type: 'twitter',
    user: {
      avatar: '/placeholders/avatar-tona.jpg', // Replace with actual URL
      name: 'Tona',
      handle: '@TonaWrites',
    },
    text: 'Outrank is one of the best tools I\'ve ever tried. And I love Notion for writing and everything else.',
    likes: 1,
    date: 'Nov 26, 2024',
  },
  {
    id: 4,
    type: 'rating_only',
    user: {
      avatar: '/placeholders/avatar-lovis.jpg', // Replace with actual URL
      name: 'Lovis Kauf',
    },
    rating: 5,
    text: 'I have about 30 posts from Outrank live on my blog. Check the quality for yourself: https://coverd.io/blog/',
    date: 'Jan 23, 2025',
  },
  {
    id: 5,
    type: 'twitter',
    user: {
      avatar: '/placeholders/avatar-nabil.jpg', // Replace with actual URL
      name: 'Nabil Kazi',
      handle: '@nQaze',
    },
    text: 'A happy customer here 🔥 The quality of the articles is amazing, Tibo.',
    likes: 11,
  },
];

const TestimonialCard = ({ testimonial }) => {
  const { type, user, company, text, likes, date, rating, graphImage } = testimonial;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col relative overflow-hidden">
      {/* Top right "X" icon for Twitter-like cards */}
      {(type === 'twitter') && (
        <div className="absolute top-4 right-4">
          <CloseIcon />
        </div>
      )}

      {/* User/Company Profile */}
      <div className="flex items-center mb-4">
        {user && (
          <>
            <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full mr-3 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 text-lg">{user.name}</p>
              {user.handle && <p className="text-gray-500 text-sm">{user.handle}</p>}
            </div>
          </>
        )}
        {company && (
          <>
            <Image src={company.logo} alt={company.name} width={40} height={40} className="rounded-full mr-3 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 text-lg">{company.name}</p>
            </div>
          </>
        )}
      </div>

      {/* Rating Stars */}
      {(type === 'rating_with_graph' || type === 'rating_only') && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} className="mx-0.5" />
          ))}
        </div>
      )}

      {/* Graph Image (for rating_with_graph type) */}
      {graphImage && (
        <div className="mb-4">
          <Image src={graphImage} alt="Impressions Graph" width={300} height={150} layout="responsive" className="rounded-md" />
        </div>
      )}

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
        {text}
      </p>

      {/* Likes and Date */}
      {(likes !== undefined || date) && (
        <div className="flex items-center text-gray-500 text-sm mt-auto">
          {likes !== undefined && (
            <>
              <HeartIcon filled={true} className="mr-1" />
              <span>{likes}</span>
              <span className="mx-2">•</span>
            </>
          )}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
};


const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16">
        Loved by <span className="text-purple-600">Busy Entrepreneurs!</span>
      </h2>

      {/* Testimonial Grid */}
      {/* Using Tailwind CSS Grid. Adjust cols and gap as needed for different breakpoints.
          The masonry-like effect comes from varying content heights in a flex or grid setup,
          allowing elements to flow naturally. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 auto-rows-min">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
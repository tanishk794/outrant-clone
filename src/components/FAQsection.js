"use client"
import React, { useState } from 'react';

// Plus/Minus Icon (SVG for the expand/collapse button)
const PlusMinusIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
      isOpen ? 'rotate-45' : 'rotate-0'
    }`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const FAQSection = () => {
  // Array of FAQ items - You will manually fill this array
  const faqItems =[
    {
      id: 1,
      question: 'How does the article automation work?',
      answer: 'The process is simple: you start by setting up your website\'s details, target audience, and content preferences. Our AI system then goes on autopilot, automatically generating one high-quality article every day. Each article is carefully crafted with SEO optimization in mind, includes relevant images, and maintains a natural, human-like tone. Once set up, the system works continuously to maintain a steady flow of fresh content for your website.'
    },
    {
      id: 2,
      question: 'Will the content be SEO-friendly?',
      answer: 'Yes, our content is fully optimized for SEO. Each article includes SEO-optimized titles, meta descriptions, and naturally placed keywords throughout the content. We ensure proper heading structure (H2, H3) and maintain a minimum length of 1,200-1,700 words for comprehensive coverage. The system also supports internal linking and can incorporate external references to boost SEO value.'
    },
    {
      id: 3,
      question: 'Can I manage multiple websites with your service?',
      answer: 'Yes! Each website gets its own dedicated setup with custom target audience settings and content preferences, maintaining the same high-quality content generation (30 articles per month per website). We offer volume discounts based on the number of websites you manage:<ul class="space-y-2"><li>2-4 websites: Save 10% on your entire subscription</li><li>5-19 websites: Save 15% on your entire subscription</li><li>20+ websites: Save 20% on your entire subscription</li></ul>The discount applies to your entire subscription, including all websites, so the more websites you add, the more you save!'
    },
    {
      id: 4,
      question: 'What integrations do you support?',
      answer: 'We support a wide range of content platforms:<ul class="space-y-2"><li>WordPress</li><li>WordPress.com</li><li>Webflow</li><li>Notion</li><li>Wix</li><li>Shopify</li><li>API (Custom webhook)</li></ul>Each integration allows for automatic article publishing, making it seamless to get your content live. The system handles the entire process from content generation to publication, ensuring your articles are properly formatted for each platform. You can easily connect multiple platforms and manage all your content from a single dashboard.'
    },
    {
      id: 5,
      question: 'Does it support other languages?',
      answer: 'Yes, our system supports multiple languages. You can specify your preferred language in the output settings, and the AI will generate content in that language. The system ensures the content maintains a natural, fluent tone in the chosen language while adhering to proper grammar and style guidelines.'
    },
    {
      id: 6,
      question: 'How often are new articles generated?',
      answer: 'Our system can generate one high-quality article per day, with a monthly limit of 30 articles. Each article is thoroughly optimized and reviewed before publication. For trial users, articles include a Powerblog watermark, while full subscribers receive unmarked content.'
    },
    {
      id: 7,
      question: 'Can I review articles before publication?',
      answer: 'Yes, you have full control over the content review process. When an article is generated, it\'s first saved as a draft in your chosen platform (WordPress, Webflow, etc.). You can then review, edit, or modify the draft directly in your platform\'s familiar interface before deciding to publish it. This gives you the flexibility to ensure each article meets your standards while maintaining your usual content workflow.'
    }
  ]

  // State to manage which FAQ item is currently open.
  // We use null for no item open, or the ID of the open item.
  const [openItemId, setOpenItemId] = useState(null);

  // Function to toggle the open state of an FAQ item
  const toggleOpen = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading Area */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-2">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Have Questions?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          If you can't find what you're looking for, feel free to reach out!
        </p>
      </div>

      {/* FAQ Items Grid/List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl py-3 shadow-md border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
          >
            {/* Question Header */}
            <button
              type="button"
              className="flex justify-between items-center w-full p-6 cursor-pointer focus:outline-none"
              onClick={() => toggleOpen(item.id)}
              aria-expanded={openItemId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="font-semibold text-lg text-gray-800 text-left pr-4">
                {item.question}
              </span>
              <PlusMinusIcon isOpen={openItemId === item.id} />
            </button>

            {/* Answer Content */}
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                openItemId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div 
                  className="text-gray-600 px-6 pb-6 border-t border-gray-200 pt-4 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        :global(.prose ul) {
          list-style-type: none;
          padding-left: 0;
          margin-top: 0.5rem;
        }
        :global(.prose li) {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        :global(.prose li:before) {
          content: "•";
          color: #374151;
          position: absolute;
          left: 0;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrollSection = () => {
  return (
    <div className="w-[55%] bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="scrollable max-h-[640px] overflow-auto pr-4 custom-scrollbar">
        <article className="prose prose-sm max-w-none p-6">
          {/* Featured Image */}
          <div className="relative w-full h-[240px] mb-8 rounded-lg overflow-hidden">
            <Image
              alt="Featured image"
              src="https://www.outrank.so/_next/image?url=https%3A%2F%2Fapi.outrank.so%2Fstorage%2Fv1%2Fobject%2Fpublic%2Farticle-images%2Fd6117bdf-448a-41e8-b484-1f973d2d99e4%2Ffeatured-image-cfc409e8-f8d8-4712-8ad6-bb94c21c7c10.jpg&w=828&q=75"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Lights, Camera, AI Action: The Rise of Intelligent Video Generators
            </h1>

            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Creating engaging video content is essential for anyone looking to make an impact online. Whether you're a social media creator, small business owner, marketer, or remote worker, video has become the primary way to connect with audiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, traditional video production often requires significant time, money, and technical skills that put it out of reach for many creators. That's changing rapidly with the emergence of AI video generation tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AI video generators are making professional video creation accessible to everyone. These tools take complex video editing tasks and simplify them through automation and intelligent algorithms. The best AI video generators combine powerful capabilities with simple, user-friendly interfaces - allowing anyone to create polished videos without specialized training.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this guide, we'll explore the top AI video generation tools available right now. We'll analyze what makes each platform valuable, looking at factors like ease of use, key features, customization options, output quality, and overall value for money.
              </p>
            </div>

            {/* Tool Sections */}
            <div className="space-y-12">
              {/* Tool 1: revid.ai */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. revid.ai</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/c0df643e-2c24-40ef-ac4c-5fd5ff681b69.jpg"
                    alt="revid.ai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://revid.ai" className="text-purple-600 hover:text-purple-700 font-medium">revid.ai</Link> is a practical video creation platform built for content creators at all skill levels. Whether you're starting out on social media or running professional marketing campaigns, this tool helps turn your ideas into engaging videos for platforms like TikTok, Instagram, and YouTube.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The platform excels at making video creation straightforward and quick. You can start creating immediately with no credit card required for signup. Even those new to video editing can quickly learn the interface and begin producing content.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Simple Video Creation: Create engaging videos quickly without needing complex editing skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Social Media Ready: Videos are automatically optimized for major social platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Global Reach: Supports 32 languages, enabling creators to connect with audiences worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Proven Success: Used by over 1,458 creators across 68 countries, with many videos reaching 100,000+ views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Easy Access: Open to everyone regardless of technical skills, with no credit card needed to start</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Pros:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Simple interface with free signup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Supports 32 languages and used in 68 countries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Track record of success with viral videos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Quick video creation for social media</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Works well for both beginners and experienced creators</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Cons:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Limited advanced editing capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Not ideal for complex video projects needing special effects</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Pricing:</strong> While specific pricing isn't listed, the no-credit-card signup suggests a freemium model or trial period. The platform likely needs just a stable internet connection and standard web browser to run.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Why It Stands Out:</strong> revid.ai deserves recognition for making video creation accessible while delivering real results. Its user-friendly design and focus on social media optimization help creators effectively reach and engage their audiences.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://revid.ai" className="text-purple-600 hover:text-purple-700 font-medium">https://revid.ai</Link>
                  </p>
                </div>
              </section>

              {/* Tool 2: Runway ML */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Runway ML</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/a9709a33-5930-46b3-8394-5f788a2e07d9.jpg"
                    alt="Runway ML"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://runway.ml" className="text-purple-600 hover:text-purple-700 font-medium">Runway ML</Link> is a high-end AI video platform for creating and editing professional video content. Its standout features go beyond basic text-to-video functions to include advanced editing tools, motion graphics, and AI-powered visual effects.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The platform excels at turning text descriptions into video clips—perfect for quickly creating social media content. Its professional editing capabilities let you track moving objects, remove unwanted elements, and add special effects with precision.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Social Media Videos: Create engaging clips for TikTok, Instagram Reels, and YouTube Shorts from text prompts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Marketing Content: Make polished product demos and promotional videos using advanced editing tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Visual Effects: Apply AI-powered effects, style transfers, and rotoscoping for unique visuals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Content Updates: Transform existing videos with AI editing and effects</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Pricing:</strong> The platform offers different subscription plans based on usage needs. Check their website for current plan details.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://runway.ml" className="text-purple-600 hover:text-purple-700 font-medium">https://runway.ml</Link>
                  </p>
                </div>
              </section>

              {/* Tool 3: Synthesia */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Synthesia</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/4007481a-9806-45bc-9995-2153cb0a2f91.jpg"
                    alt="Synthesia"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://www.synthesia.io" className="text-purple-600 hover:text-purple-700 font-medium">Synthesia</Link> helps businesses and educators create professional videos using AI avatars. The platform eliminates the need for traditional video production elements like cameras, actors, and film crews.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Creating videos with Synthesia is straightforward, even for beginners. You start by writing your script and choosing an AI avatar from their collection of over 50 options.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">50+ AI Avatars: Select from a diverse avatar collection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Multi-Language Support: Create content in multiple languages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Custom Avatar Creation: Design unique brand avatars</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Template Library: Use pre-made templates for faster production</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://www.synthesia.io" className="text-purple-600 hover:text-purple-700 font-medium">https://www.synthesia.io</Link>
                  </p>
                </div>
              </section>

              {/* Tool 4: Pictory */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Pictory</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/f94897c0-131c-4935-ae30-7cfd9fb499c4.jpg"
                    alt="Pictory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://pictory.ai" className="text-purple-600 hover:text-purple-700 font-medium">Pictory</Link> is a smart video creation tool that helps you turn long text content into engaging short videos. Perfect for content creators and marketers who want to quickly repurpose their existing materials into social media-ready clips.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Smart Video Summary: Automatically picks out key points from long content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Auto-Captions: Generates captions for accessibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Brand Elements: Add logos, colors, and fonts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Media Library: Access stock footage and music</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://pictory.ai" className="text-purple-600 hover:text-purple-700 font-medium">https://pictory.ai</Link>
                  </p>
                </div>
              </section>

              {/* Tool 5: HeyGen */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. HeyGen</h2>
                <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/593dd5d3-f812-43c8-be67-5187ce16ae3e.jpg"
                    alt="HeyGen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://www.heygen.com" className="text-purple-600 hover:text-purple-700 font-medium">HeyGen</Link> specializes in creating professional presenter-led videos powered by AI. The platform excels at producing realistic avatars and clear voice synthesis.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">AI Avatar Selection: Pick from diverse presenter options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Language Translation: Convert videos into multiple languages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Voice Cloning: Create a digital version of your voice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Scene Settings: Modify backgrounds and visual elements</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://www.heygen.com" className="text-purple-600 hover:text-purple-700 font-medium">https://www.heygen.com</Link>
                  </p>
                </div>
              </section>

              {/* Tool 6: Kapwing */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Kapwing</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/6a70cae7-fc7f-4130-bd22-26aab24038f2.jpg"
                    alt="Kapwing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://www.kapwing.com" className="text-purple-600 hover:text-purple-700 font-medium">Kapwing</Link> is an easy-to-use online video editor with AI capabilities that makes content creation accessible to everyone. It's perfect for creating social media videos without needing complex editing software.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">AI Editing Tools: Auto-subtitles, background removal, smart resizing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Team Collaboration: Real-time project sharing and editing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Format Flexibility: Export options for various social platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Template Collection: Pre-made designs for different video styles</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://www.kapwing.com" className="text-purple-600 hover:text-purple-700 font-medium">https://www.kapwing.com</Link>
                  </p>
                </div>
              </section>

              {/* Tool 7: D-ID */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. D-ID</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/6261f7c0-d5f3-479c-ba33-0f64c1809650.jpg"
                    alt="D-ID"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://www.d-id.com" className="text-purple-600 hover:text-purple-700 font-medium">D-ID</Link> helps you create engaging talking head videos from a single photo. The platform converts static images into dynamic presenters that can deliver your message with natural movements and speech.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Image-to-Video Conversion: Create dynamic videos from static photos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Natural Text-to-Speech: Generate clear voiceovers in many languages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Realistic Facial Animation: Lifelike lip syncing and head movements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Multi-Language Support: Reach global audiences</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://www.d-id.com" className="text-purple-600 hover:text-purple-700 font-medium">https://www.d-id.com</Link>
                  </p>
                </div>
              </section>

              {/* Tool 8: Descript */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Descript</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/193d9173-d54e-49c3-8762-53ae0bc21d31.jpg"
                    alt="Descript"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://www.descript.com" className="text-purple-600 hover:text-purple-700 font-medium">Descript</Link> is an all-in-one video and audio editing platform that stands out for its ability to handle both creation and editing. Perfect for content creators, social media managers, podcasters, and small business owners.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Smart Editing: Text-based editing that changes audio/video when you edit the transcript</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Voice Cloning: Create a synthetic version of your voice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Fast Transcription: Built-in accurate transcription for captions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Screen Capture: Record your screen for tutorials and demos</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://www.descript.com" className="text-purple-600 hover:text-purple-700 font-medium">https://www.descript.com</Link>
                  </p>
                </div>
              </section>

              {/* Tool 9: InVideo */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. InVideo</h2>
                <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://api.outrank.so/storage/v1/object/public/article-images/d6117bdf-448a-41e8-b484-1f973d2d99e4/screenshots/533234e5-e7bc-4c4f-bf0b-c5b9f3a743fe.jpg"
                    alt="InVideo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="https://invideo.io" className="text-purple-600 hover:text-purple-700 font-medium">InVideo</Link> combines affordability with ease of use, making it a practical choice for creating professional videos quickly. It excels in providing a straightforward video creation experience.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Over 5,000 Templates: Spanning different video formats</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Auto Text-to-Speech: For quick voiceovers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Built-in Media Library: Access stock footage and music</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Website:</strong> <Link href="https://invideo.io" className="text-purple-600 hover:text-purple-700 font-medium">https://invideo.io</Link>
                  </p>
                </div>
              </section>

              {/* Comparison Table */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Overview of Key Features</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-700">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left">Tool</th>
                        <th className="p-3 text-left">Ease of Use</th>
                        <th className="p-3 text-left">AI Capabilities</th>
                        <th className="p-3 text-left">Output Quality</th>
                        <th className="p-3 text-left">Pricing</th>
                        <th className="p-3 text-left">Best For</th>
                        <th className="p-3 text-left">Standout Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3"><strong>🏆 revid.ai</strong></td>
                        <td className="p-3"><strong>⭐ Easy</strong></td>
                        <td className="p-3"><strong>⭐ Powerful</strong></td>
                        <td className="p-3"><strong>⭐ High</strong></td>
                        <td className="p-3"><strong>Free/Paid</strong></td>
                        <td className="p-3"><strong>Beginners & Experienced</strong></td>
                        <td className="p-3"><strong>Social media content creation</strong></td>
                      </tr>
                      <tr>
                        <td className="p-3">Runway ML</td>
                        <td className="p-3">Medium</td>
                        <td className="p-3">Advanced</td>
                        <td className="p-3">Professional</td>
                        <td className="p-3">💰 Expensive</td>
                        <td className="p-3">Professionals</td>
                        <td className="p-3">Advanced video editing, VFX</td>
                      </tr>
                      <tr>
                        <td className="p-3">Synthesia</td>
                        <td className="p-3">Easy</td>
                        <td className="p-3">Focused</td>
                        <td className="p-3">High</td>
                        <td className="p-3">💰 Premium</td>
                        <td className="p-3">Business & Education</td>
                        <td className="p-3">Realistic avatar videos</td>
                      </tr>
                      <tr>
                        <td className="p-3">Pictory</td>
                        <td className="p-3">Easy</td>
                        <td className="p-3">Automated</td>
                        <td className="p-3">Good</td>
                        <td className="p-3">💰 Affordable</td>
                        <td className="p-3">Content repurposing</td>
                        <td className="p-3">Auto summarization</td>
                      </tr>
                      <tr>
                        <td className="p-3">HeyGen</td>
                        <td className="p-3">Medium</td>
                        <td className="p-3">Advanced</td>
                        <td className="p-3">High</td>
                        <td className="p-3">💰 Premium</td>
                        <td className="p-3">Multilingual content</td>
                        <td className="p-3">Realistic presenter videos</td>
                      </tr>
                      <tr>
                        <td className="p-3">Kapwing</td>
                        <td className="p-3">Easy</td>
                        <td className="p-3">Basic</td>
                        <td className="p-3">Good</td>
                        <td className="p-3">Free/💰 Paid</td>
                        <td className="p-3">Social media content</td>
                        <td className="p-3">Collaborative workspace</td>
                      </tr>
                      <tr>
                        <td className="p-3">D-ID</td>
                        <td className="p-3">Easy</td>
                        <td className="p-3">Specialized</td>
                        <td className="p-3">Realistic</td>
                        <td className="p-3">💰 Varies</td>
                        <td className="p-3">Talking head videos</td>
                        <td className="p-3">Image-to-video conversion</td>
                      </tr>
                      <tr>
                        <td className="p-3">Descript</td>
                        <td className="p-3">Medium</td>
                        <td className="p-3">Powerful</td>
                        <td className="p-3">Professional</td>
                        <td className="p-3">💰 Subscription</td>
                        <td className="p-3">Podcasts & Videos</td>
                        <td className="p-3">AI-powered editing</td>
                      </tr>
                      <tr>
                        <td className="p-3">InVideo</td>
                        <td className="p-3">Easy</td>
                        <td className="p-3">Basic</td>
                        <td className="p-3">Good</td>
                        <td className="p-3">💰 Affordable</td>
                        <td className="p-3">Quick video creation</td>
                        <td className="p-3">Large template library</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.3);
        }
        .prose h1 {
          color: #1f2937;
          font-weight: 700;
          margin-top: 0;
        }
        .prose p {
          color: #4b5563;
          line-height: 1.7;
        }
        .prose a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 500;
        }
        .prose a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
      `}</style>


    </div>
  );
};

export default ScrollSection;
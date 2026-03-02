'use client'

import Image from "next/image"
import Link from "next/link"

export default function UnderOccupationFilmPage() {
  return (
    <main className="min-h-screen w-full pt-12 bg-black">
          {/* Hero Image Section */}
          <div className="w-full bg-black">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
              <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-2xl mx-auto">
                <Image
                  src="/images/Films/Under_Occupation.png"
                  alt="Under Occupation - Film Poster"
                  width={800}
                  height={1200}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
    
          {/* Details Section */}
          <div className="w-full bg-black">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-bold mb-4 text-champagne">Under Occupation</h1>
                  
                  {/* Film Details Box */}
                  <div className="bg-gray-900 border-l-4 border-[#C9A84F] p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-champagne">Film Details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-champagne/70 font-semibold">Director</p>
                        <p className="text-lg text-champagne/90">Anas Yahya</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-champagne/70 font-semibold">Country</p>
                        <p className="text-lg text-champagne/90">Jordan</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-champagne/70 font-semibold">Language</p>
                        <p className="text-lg text-champagne/90">Arabic</p>
                      </div>
                    </div>
                  </div>
    
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-champagne">Synopsis</h3>
                    <p className="text-lg text-champagne/85 leading-relaxed">
                     In the shade of occupation, this short film unfolds the tale of a Palestinian child, navigating through the labyrinth of occupation's shadows, where myriad challenges and tribulations punctuate her daily existence. She grapples with the loss of family members and the sanctity of her home, casualties to the ceaseless onslaughts and bombardments by Israeli forces. Witnessing her father's incarceration under the yoke of the occupation's arbitrary measures, the film poignantly portrays the indelible imprint of occupation on the lives of Palestinian children. Yet, amidst the bleakness, it captures their unwavering resilience and steadfast hope, defiantly clinging to the promise of a brighter tomorrow despite the formidable odds stacked against them.

    
                    </p>
                  </div>
                </div>
    
                
              </div>
            </div>
          </div>
    
        </main>
      )
    }
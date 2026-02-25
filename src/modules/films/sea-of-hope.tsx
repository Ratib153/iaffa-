'use client'

import Image from "next/image"
import Link from "next/link"

export default function SeaOfHopeFilmPage() {
  return (
    <main className="min-h-screen w-full pt-12 bg-black">
          {/* Hero Image Section */}
          <div className="w-full bg-black">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12">
              <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-2xl mx-auto">
                <Image
                  src="/images/Films/SEA_OF_HOPE.jpg"
                  alt="Sea Of Hope - Film Poster"
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
                  <h1 className="text-4xl font-bold mb-4 text-champagne">Sea Of Hope</h1>
                  
                  {/* Film Details Box */}
                  <div className="bg-gray-900 border-l-4 border-[#C9A84F] p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-champagne">Film Details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-champagne/70 font-semibold">Director</p>
                        <p className="text-lg text-champagne/90">Jubail Abubaker Rahman</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-champagne/70 font-semibold">Country</p>
                        <p className="text-lg text-champagne/90">Iraq</p>
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
                      Sea of Hope" is a short film that unveils the devastating human toll of war through the eyes of civilians trapped in its wake. Focusing on the emotional and physical scars of forced displacement, the film traces the journeys of individuals forced to flee their homes, risking everything as they navigate treacherous paths—where death and drowning loom at every turn—in a desperate quest for safety and a life of dignity.

                    </p>
                  </div>
                </div>
    
                
              </div>
            </div>
          </div>
    
        </main>
      )
    }
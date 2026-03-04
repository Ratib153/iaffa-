// import Link from "next/link"

// const prizes = [
//   {
//     title: "Best Feature Film",
//     slug: "best-feature-film",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <rect x="6" y="10" width="36" height="28" rx="2" />
//         <circle cx="24" cy="24" r="8" />
//         <circle cx="24" cy="24" r="3" />
//         <line x1="6" y1="16" x2="42" y2="16" />
//         <line x1="6" y1="32" x2="42" y2="32" />
//       </svg>
//     ),
//   },
//   {
//     title: "Best Documentary",
//     slug: "best-documentary",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <rect x="8" y="12" width="32" height="24" rx="2" />
//         <polygon points="20,18 32,24 20,30" fill="none" />
//       </svg>
//     ),
//   },
//   {
//     title: "Best Short Film",
//     slug: "best-short-film",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <circle cx="24" cy="24" r="16" />
//         <circle cx="24" cy="24" r="6" />
//         <line x1="24" y1="8" x2="24" y2="14" />
//         <line x1="24" y1="34" x2="24" y2="40" />
//         <line x1="8" y1="24" x2="14" y2="24" />
//         <line x1="34" y1="24" x2="40" y2="24" />
//       </svg>
//     ),
//   },
//   {
//     title: "Best Director",
//     slug: "best-director",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M12 36 L24 12 L36 36" />
//         <circle cx="24" cy="36" r="6" />
//         <line x1="18" y1="28" x2="30" y2="28" />
//       </svg>
//     ),
//   },
//   {
//     title: "Best Cinematography",
//     slug: "best-cinematography",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M6 20 L24 10 L42 20 L24 30 Z" />
//         <path d="M12 23 L12 36 L24 42 L36 36 L36 23" />
//         <line x1="42" y1="20" x2="42" y2="38" />
//         <circle cx="42" cy="38" r="2" />
//       </svg>
//     ),
//   },
//   {
//     title: "Audience Choice Award",
//     slug: "audience-choice-award",
//     icon: (
//       <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <rect x="4" y="16" width="24" height="18" rx="2" />
//         <circle cx="16" cy="25" r="6" />
//         <path d="M28 20 L40 14 L40 36 L28 30 Z" />
//       </svg>
//     ),
//   },
// ]

// export function PrizeCategoriesSection() {
//   return (
//     <section className="py-24 bg-black selection:bg-yellow-500/30">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <p className="text-[#c18f2c] tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 font-semibold">
//             Recognition & Honors
//           </p>
//           <h2 className="font-libre-baskerville text-4xl sm:text-5xl font-bold text-[#c18f2c] tracking-tight">
//             Prize Categories
//           </h2>
//           <div className="w-12 h-1 bg-yellow-600 mx-auto mt-8 rounded-full opacity-50"></div>
//         </div>

//         {/* Interactive Directory List */}
//         <div className="flex flex-col border-t border-white/10">
//           {prizes.map((prize) => (
//             <Link
//               key={prize.title}
//               href={`/prizes/${prize.slug}`}
//               className="group flex items-center justify-between py-6 px-4 sm:px-6 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300"
//               aria-label={`View details for ${prize.title}`}
//             >
//               <div className="flex items-center gap-6 sm:gap-8">
//                 {/* Icon Container with subtle hover scale and glow */}
//                 <div className="text-zinc-500 group-hover:text-[#c18f2c] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.4)] transition-all duration-500 ease-out flex-shrink-0">
//                   {prize.icon}
//                 </div>
                
//                 {/* Typography shifts from muted to white/gold on hover */}
//                 <h3 className="font-libre-baskerville text-xl sm:text-2xl text-zinc-300 group-hover:text-white transition-colors duration-300">
//                   {prize.title}
//                 </h3>
//               </div>

//               {/* Animated Arrow that slides in and fades up on hover */}
//               <div className="text-[#c18f2c] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out flex-shrink-0">
//                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <Link
//             href="/prizes"
//             className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase text-white transition-all duration-300 overflow-hidden border border-white/20 hover:border-[#c18f2c]/50"
//           >
//             <span className="absolute inset-0 w-full h-full bg-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
//             <span className="relative z-10 group-hover:text-[#c18f2c] transition-colors duration-300">
//               View All Awards
//             </span>
//           </Link>
//         </div>
        
//       </div>
//     </section>
//   )
// }



import Link from "next/link"
import Image from "next/image"

const prizes = [
  {
    title: "Best Feature Film",
    slug: "best-feature-film",
    icon: "movie",
    subtitle: "Premier Award",
    description: "Honoring the most outstanding cinematic achievement in feature-length storytelling, evaluating direction, narrative, and technical excellence."
  },
  {
    title: "Best Documentary",
    slug: "best-documentary",
    icon: "videocam",
    subtitle: "Non-fiction Excellence",
  },
  {
    title: "Best Short Film",
    slug: "best-short-film", 
    icon: "shutter_speed",
    subtitle: "Concise Storytelling",
  },
  {
    title: "Best Director",
    slug: "best-director",
    icon: "person",
    subtitle: "Visionary Leadership",
  },
  {
    title: "Best Cinematography",
    slug: "best-cinematography",
    icon: "camera",
    subtitle: "Visual Artistry",
  },
  {
    title: "Audience Choice Award",
    slug: "audience-choice-award",
    icon: "favorite_border",
    subtitle: "Public Favorite",
  }
]

export function PrizeCategoriesSection() {
  const featuredPrize = prizes[0]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <span className="text-[#c18f2c] font-medium text-xs tracking-[0.4em] uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#c18f2c] mb-6">
            Prize Categories
          </h2>
          {/* <div className="w-24 h-0.5 bg-[#c18f2c] mx-auto opacity-50"></div> */}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Hero Image Card */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-lg aspect-video lg:aspect-auto lg:h-auto border border-white/10">
            <Image
              src="/images/ceremony-1.webp"
              alt="Cinematic movie set background"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Featured overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-3 text-[#c18f2c] mb-4">
                <span className="material-icons text-lg">stars</span>
                <span className="uppercase tracking-widest text-xs font-bold">Premier Award</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-[#c18f2c] mb-4">
                {featuredPrize.title}
              </h3>
              <p className="text-slate-300 max-w-lg mb-8 font-light leading-relaxed">
                {featuredPrize.description}
              </p>
            </div>
          </div>

          {/* Sidebar List */}
          <div className="lg:col-span-5 flex flex-col">
            
            <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar">
              {prizes.slice(1).map((prize) => (
                <Link
                  key={prize.title}
                  href={`/prizes/${prize.slug}`}
                  className="group p-6 bg-slate-800/50 border border-white/5 hover:border-[#c18f2c]/50 transition-all cursor-pointer flex items-center justify-between rounded-lg"
                >
                  <div className="flex items-center gap-6">
                    <span className="material-icons text-[#c18f2c] text-xl group-hover:scale-110 transition-transform">
                      {prize.icon}
                    </span>
                    <div>
                      <h5 className="font-serif text-xl text-[#c18f2c] mb-1">
                        {prize.title}
                      </h5>
                      <p className="text-xs text-slate-500 uppercase tracking-tighter">
                        {prize.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="material-icons text-[#c18f2c] opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                    chevron_right
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/prizes"
                className="w-full py-6 border border-white/10 hover:border-[#c18f2c] text-sm uppercase tracking-[0.3em] transition-all font-medium text-white hover:text-[#c18f2c] block text-center rounded-lg"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        {/* <div className="w-full flex items-center justify-center gap-12 opacity-40">
          <div className="h-px bg-slate-400 flex-1"></div>
          <div className="flex items-center gap-4 text-[#c18f2c]">
            <span className="material-icons text-sm">circle</span>
            <span className="material-icons text-lg">circle</span>
            <span className="material-icons text-sm">circle</span>
          </div>
          <div className="h-px bg-slate-400 flex-1"></div>
        </div> */}
      </div>
    </section>
  )
}

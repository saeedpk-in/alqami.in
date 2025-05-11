// import React from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";
// import Image from "next/image";

// function Hero() {
//   return (
//     <section className="relative  overflow-hidden ">
//       {/* Background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('/textures/natural-paper.png')] bg-repeat opacity-20"></div>
//       </div>

//       <div className="container mx-auto px-4 md:px-20 py-16 md:py-24 ">
//         <div className="flex flex-row lg:flex-row items-center justify-between gap-12">
//           {/* Content */}
//           <div className="lg:w-1/2 space-y-6 z-10">
//             <Badge className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
//               Pure & Natural
//             </Badge>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl  text-stone-800 leading-tight">
//               Nature's Secret
//               <span className="block font-black mt-2">
//                 Multani Mitti Facepack
//               </span>
//             </h1>

//             <p className="text-stone-600 text-lg max-w-lg">
//               Our ancient clay formula detoxifies and rejuvenates your skin,
//               just as nature intended. Free from chemicals, full of purity.
//             </p>

//             <div className="flex  gap-4 pt-4">
//               <Button
//                 className="group flex items-center bg-emerald-700/50 hover:bg-emerald-800/50  text-white rounded-full px-6 py-8 font-semibold shadow-xl w-fit"
//                 asChild
//               >
//                 <Link href="/shop">
//                   Shop Now{" "}
//                   <span className="ml-2 bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out group-hover:translate-x-2">
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </span>
//                 </Link>
//               </Button>
//               <Button
//                 className="group flex items-center rounded-full px-6 py-8 font-semibold shadow-xl w-fit"
//                 asChild
//               >
//                 <Link href="#brand-story">
//                   Our Story{" "}
//                   <span className="ml-2 bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-90">
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </span>
//                 </Link>
//               </Button>
//             </div>
//           </div>

//           {/* Product Image */}
//           <div className="lg:w-1/2 flex justify-center ">
//             <div className=" w-full aspect-square">
//               <Image
//                 src="/image.png" // Replace with your image path
//                 alt="Multani Mitti Natural Facepack"
//                 fill
//                 className="object-cover rounded-3xl"
//                 priority
//               />
//               {/* <div className="absolute inset-0 rounded-full bg-amber-100 opacity-20 -z-10 scale-90"></div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-12 py-12 md:py-24 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Product Image - Now above content on mobile */}
          <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            <div className=" w-full max-w-xl aspect-square">
              <Image
                src="/hero.png"
                alt="Multani Mitti Natural Facepack"
                fill
                className="object-cover rounded-3xl"
                priority
              />
              {/* <div className="absolute inset-0 rounded-full bg-amber-100 opacity-20 -z-10 scale-90"></div> */}
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 space-y-6 z-10">
            <Badge className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
              Pure & Natural
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl  text-stone-800  leading-tight tracking-tight">
              Nature's Secret
              <span className="block font-black mt-2">
                Multani Mitti Facepack
              </span>
            </h1>

            <p className="text-stone-600 text-lg max-w-lg">
              Our ancient clay formula detoxifies and rejuvenates your skin,
              just as nature intended. Free from chemicals, full of purity.
            </p>

            <div className="flex  gap-4 pt-4">
              <Button
                className="group flex items-center bg-emerald-700/50 hover:bg-emerald-800/50  text-white rounded-full px-6 py-8 font-semibold shadow-xl w-fit"
                asChild
              >
                <Link href="/#products">
                  Explore Now{" "}
                  <span className="ml-2 bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </Button>
              <Button
                className="group flex items-center rounded-full px-6 py-8 font-semibold shadow-xl w-fit"
                asChild
              >
                <Link href="#brand-story">
                  Our Story{" "}
                  <span className="ml-2 bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-90">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <h3 className="mt-20 text-6xl tracking-tight font-sans text-center uppercase text-shadow-2xs">Glow <span className="font-black text-emerald-800/70">naturally,</span> Live <span className="font-black text-amber-700/50">purely.</span></h3>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('/textures/wave-divider.svg')] bg-repeat-x bg-bottom opacity-15"></div>
    </section>
  );
}
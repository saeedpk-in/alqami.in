
import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden" id="brand-story">
      
    <div className="container mx-auto px-4 md:px-12 py-12 md:py-24 ">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
        {/* Product Image - Now above content on mobile */}
        <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <div className=" w-full max-w-xl aspect-square">
            <Image
              src="/powder.png"
              alt="Multani Mitti Natural Facepack"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="lg:w-1/2 space-y-6 z-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter text-left ">
              The <span className="font-black">BrandStory.</span>
            </h1>

            <div className="space-y-4 text-stone-600">
              <p>
                Our story began in the lush fields where our founder, a
                third-generation herbalist, discovered the transformative power
                of Multani Mitti combined with ancient Ayurvedic recipes.
              </p>
              <p>
                Frustrated by synthetic skincare, we set out to create products
                that honor traditional knowledge while meeting modern standards
                of purity and efficacy.
              </p>
              <p>
                Every ingredient is hand-selected, every batch crafted with
                care, and every product made to bring you closer to nature's
                original blueprint for healthy skin.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 border-t border-amber-200 pt-4 shadow-xl p-6 rounded-xl">
                  <h3 className="font-extrabold text-stone-800">Our Mission</h3>
                  <p className="text-sm text-stone-500 mt-1">
                    To reconnect skincare with earth's natural remedies through
                    ethical sourcing and traditional wisdom.
                  </p>
                </div>
                <div className="flex-1 border-t border-amber-200 pt-4 shadow-xl p-6 rounded-xl">
                  <h3 className="font-extrabold text-stone-800">Our Promise</h3>
                  <p className="text-sm text-stone-500 mt-1">
                    100% natural formulations, cruelty-free practices, and
                    premium quality packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('/textures/wave-divider.svg')] bg-repeat-x bg-bottom opacity-15"></div>
  </section>
  );
}

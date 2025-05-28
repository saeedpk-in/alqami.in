// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

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
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 space-y-6 z-10">
            <Badge className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-100 rounded-full">
              Pure & Natural
            </Badge>

            <div className="text-5xl md:text-6xl lg:text-7xl  text-stone-800  leading-tight tracking-tight">
              <TextAnimate animation="blurInUp" by="word" once as={"h1"}>
                Nature's Secret
              </TextAnimate>
              <TextAnimate
                animation="blurInUp"
                by="word"
                once
                
                className="block font-black mt-2"
                as={"h1"}
              >
                Multani Mitti Facepack
              </TextAnimate>
            </div>

            <div className="max-w-lg">
              <TextAnimate
                animation="blurInUp"
                by="word"
                once
                as={"p"}
                className="text-stone-600 text-lg "
              >
                Our ancient clay formula detoxifies and rejuvenates your skin,
                just as nature intended. Free from chemicals, full of purity.
              </TextAnimate>
            </div>

            <div className="flex  gap-4 pt-4">
              <Button
                className="group flex items-center bg-emerald-700/50 hover:bg-emerald-800/50  text-white rounded-full px-6 py-8 font-semibold shadow-xl w-fit"
                asChild
              >
                <Link href="/#product">
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
                <Link href="/#brand-story">
                  Our Story{" "}
                  <span className="ml-2 bg-white text-black p-2 rounded-full transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-90">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <h3 className="mt-20 text-6xl tracking-tight font-sans text-center uppercase text-shadow-2xs">
          Glow{" "}
          <span className="font-black text-emerald-800/70">naturally,</span>{" "}
          Live <span className="font-black text-amber-700/50">purely.</span>
        </h3>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('/textures/wave-divider.svg')] bg-repeat-x bg-bottom opacity-15"></div>
    </section>
  );
}

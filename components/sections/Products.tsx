
// components/ProductBento.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Leaf,
  Gem,
  ScanEye,
  LeafyGreen,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { Input } from "../ui/input";
import { CompositionChart } from "../interactive/CompositionChart";
import WaitList from "../interactive/WaitList";

export default function ProductBento() {
  return (
    <section
      className="relatve py-16 md:py-24 bg-stone-50 overflow-hidden"
      id="product"
    >

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-800 uppercase bg-emerald-100/50 rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-stone-800 tracking-tighter">
            <span className=" lock">Multani Mitti</span>
            <span className="font-black  block mt-2">
              Essence Unleashed
            </span>
          </h2>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Hero Product Image - Top Left */} 
          <div className="md:col-span-3 aspect-[4/3] md:aspect-square relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/50">
            <Image
              src="/multani-pack.png"
              alt="Multani Mitti Facepack"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-stone-700">
                Signature Formula
              </span>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Stats Panel - Top Right */}
            <div className=" bg-emerald-900/90 text-white p-8 rounded-3xl flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-medium mb-2">Purity Metrics</h3>
                <p className="text-emerald-100/80 mb-6">
                  Our ingredient efficacy breakdown
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Natural Composition</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-stone-200/20 rounded-full h-2">
                    <div
                      className="bg-emerald-300 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Skin Compatibility</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-stone-200/20 rounded-full h-2">
                    <div
                      className="bg-amber-300 h-2 rounded-full"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Traditional Wisdom</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-stone-200/20 rounded-full h-2">
                    <div
                      className="bg-rose-300 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-stone-800 text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <BadgeCheck className="w-12 h-12 text-emerald-300 mb-4" />
              <h4 className="text-xl font-medium mb-2">Certified Organic</h4>
              <p className="text-stone-300/80 text-sm">
                No synthetic additives • Cruelty-free • premium sourcing
              </p>
            </div>
          </div>

          {/* Benefits Panel - Middle Left */}
          <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-stone-200/50">
            <h4 className="text-xl font-medium text-stone-800 mb-6">
              Where Ancient Wisdom
              <br />
              <span className="text-emerald-600">Meets Modern Skin</span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Leaf className="w-6 h-6 text-emerald-600" />,
                  text: "Oil Control",
                },
                {
                  icon: <ScanEye className="w-6 h-6 text-amber-600" />,
                  text: "Pore Refining",
                },
                {
                  icon: <LeafyGreen className="w-6 h-6 text-lime-600" />,
                  text: "Brightening",
                },
                {
                  icon: <Gem className="w-6 h-6 text-rose-600" />,
                  text: "Antibacterial",
                },
              ].map((item, index) => (
                <div key={index} className="bg-stone-50 p-4 rounded-xl">
                  <div className="mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-stone-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Waiting List - Middle Right */}
          <div className="md:col-span-3 bg-white p-6 rounded-3xl border border-stone-200/50">
            <WaitList />
          </div>

          <div className="md:col-span-3 bg-white rounded-3xl border border-stone-200/50">
            <CompositionChart />
          </div>
          
          

          {/* Stats Panel - Top Right */}
          <div className="md:col-span-2 aspect-square relative rounded-3xl h-full overflow-hidden bg-stone-100 border border-stone-200/50">
            <Image
              src="/multani-pack-2.png"
              alt="Multani Mitti Facepack"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

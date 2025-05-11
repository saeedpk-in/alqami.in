// components/WhyAlqami.tsx
import Image from 'next/image';
import { Leaf, Gem, HeartHandshake, Sprout } from 'lucide-react';

export default function WhyAlqami() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Nature's Purity",
      description: "Harnessing earth's untouched resources for authentic beauty,Ancient recipes modernized with scientific precision"
    },
    {
      icon: <Gem className="w-8 h-8 text-amber-600" />,
      title: "Rare Formulations",
      description: "Ancient recipes modernized with scientific precision,Harnessing earth's untouched resources for authentic beauty"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-600" />,
      title: "Ethical Legacy",
      description: "From our family to yours - generations of trust,Ancient recipes modernized with scientific precision"
    },
    {
      icon: <Sprout className="w-8 h-8 text-lime-600" />,
      title: "Sustainable Future",
      description: "Committed to eco-friendly practices for a greener tomorrow,From our family to yours - generations of trust"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-stone-50 overflow-hidden" id="why-alqami">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4  md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className=" space-y-8 z-10 flex flex-col justify-center text-center">
            <span className="inline-block px-3 py-1 text-xs mx-auto font-semibold tracking-wider text-emerald-800 uppercase bg-emerald-100 rounded-full">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-800 tracking-tighter">
              The <span className="font-black">Alqami Difference</span>
            </h2>

            <p className="text-stone-600 text-lg max-w-lg mx-auto">
              Where centuries-old wisdom meets modern skincare science. 
              Our formulations are born from nature, perfected by tradition, 
              and validated by results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <div className="mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-stone-800">{value.title}</h3>
                  <p className="text-sm text-stone-500 mt-1">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
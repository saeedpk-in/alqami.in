// // components/ProductBento.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import {
//   Leaf,
//   Gem,
//   ScanEye,
//   LeafyGreen,
//   BadgeCheck,
//   ChevronRight,
// } from "lucide-react";
// import { Input } from "../ui/input";

// export default function ProductBento() {
//   return (
//     <section
//       className="relative py-16 md:py-24 bg-stone-50 overflow-hidden"
//       id="product"
//     >
//       {/* Decorative organic shapes */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

//       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-800 uppercase bg-emerald-100/50 rounded-full mb-4">
//             Singular Focus
//           </span>
//           <h2 className="text-5xl md:text-6xl lg:text-7xl text-stone-800 tracking-tight">
//             Multani Mitti <span className="font-black">Essence</span>
//           </h2>
//         </div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Hero Product Image */}
//           <div className="md:col-span-2 aspect-square relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/50">
//             <Image
//               src="/pack.png"
//               alt="Multani Mitti Facepack"
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 66vw"
//             />
//             <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
//               <span className="text-sm font-medium text-stone-700">
//                 Signature Formula
//               </span>
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6 flex flex-col">
//             <div className="bg-white p-6 rounded-3xl border border-stone-200/50 h-full">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-2xl font-medium text-stone-800">
//                     Multani Mitti Facepack
//                   </h3>
//                   <p className="text-stone-500 mt-1">Ancient Clay Reimagined</p>
//                 </div>
//                 <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs min-w-fit font-medium">
//                   Up Coming
//                 </span>
//               </div>

//               {/* <div className="mt-6 space-y-4">
//                 <Button
//                   asChild
//                   className="w-full rounded-full py-6 bg-stone-800 hover:bg-stone-700"
//                 >
//                   <Link href="/shop/multani-mitti">Add to Ritual</Link>
//                 </Button>

//                 <Button
//                   asChild
//                   variant="outline"
//                   className="w-full rounded-full py-6 border-stone-300 hover:bg-stone-100/50"
//                 >
//                   <Link href="#ingredients">Explore Formulation</Link>
//                 </Button>
//               </div> */}
//               <div className="mt-6 space-y-4">
//                 <Input
//                   className="w-full rounded-full px-5 py-6"
//                   placeholder="your@email.com"
//                 />

//                 <Button
//                   className="w-full rounded-full py-6  border-stone-300"
//                 >
//                   Add to Waiting list
//                 </Button>
//               </div>
//             </div>
//             <div className="md:col-span-2 aspect-square relative rounded-3xl h-full overflow-hidden bg-stone-100 border border-stone-200/50">
//               <Image
//                 src="/image.png"
//                 alt="Multani Mitti Facepack"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 66vw"
//               />
//             </div>

//           </div>

//           {/* Key Benefits */}
//           <div className="bg-white p-6 rounded-3xl border border-stone-200/50 md:col-span-1">
//             <h4 className="text-lg font-medium text-stone-800 mb-4">
//               Sacred Benefits
//             </h4>
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: <Leaf className="w-5 h-5 text-emerald-600" />,
//                   text: "Deep pore cleansing",
//                 },
//                 {
//                   icon: <ScanEye className="w-5 h-5 text-amber-600" />,
//                   text: "Oil balance mastery",
//                 },
//                 {
//                   icon: <LeafyGreen className="w-5 h-5 text-lime-600" />,
//                   text: "Skin brightening",
//                 },
//                 {
//                   icon: <Gem className="w-5 h-5 text-rose-600" />,
//                   text: "Ayurvedic heritage",
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <span className="mt-0.5">{item.icon}</span>
//                   <p className="text-stone-600">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Ingredient Spotlight */}
//           <div className="bg-emerald-900/5 p-6 rounded-3xl border border-emerald-900/10 md:col-span-1">
//             <h4 className="text-lg font-medium text-stone-800 mb-4">
//               Elemental Composition
//             </h4>
//             <div className="grid grid-cols-2 gap-3">
//               {[
//                 { name: "Multani Mitti", percent: "70%" },
//                 { name: "Neem", percent: "15%" },
//                 { name: "Turmeric", percent: "10%" },
//                 { name: "Sandalwood", percent: "5%" },
//               ].map((ingredient, index) => (
//                 <div key={index} className="bg-white/90 p-3 rounded-xl">
//                   <p className="text-sm font-medium text-stone-800">
//                     {ingredient.name}
//                   </p>
//                   <p className="text-xs text-stone-500 mt-1">
//                     {ingredient.percent}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="bg-stone-800 text-white p-6 rounded-3xl md:col-span-1 relative overflow-hidden flex items-center justify-center">

//             <div className="text-center">
//               <BadgeCheck className="w-10 h-10 text-emerald-300 mx-auto mb-3" />
//               <p className="text-xs uppercase tracking-widest text-stone-200">
//                 Certified Organic
//               </p>
//               <p className="text-sm text-stone-300 mt-1">No. 21004567</p>
//             </div>
//           </div>
//         </div>

//         {/* View Details CTA */}
//         <div className="text-center mt-16">
//           <Button
//             asChild
//             variant="ghost"
//             className="rounded-full px-8 py-6 text-stone-600 hover:bg-stone-100/50"
//           >
//             <Link href="/multani-mitti-details">
//               Complete Product Narrative
//               <span className="ml-2 bg-stone-100 text-black p-2 rounded-full transition-all duration-300">
//                 <ChevronRight className="w-4 h-4" />
//               </span>
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

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
              src="/multani-mitti.png"
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
                No synthetic additives • Cruelty-free • Sustainable sourcing
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

          {/* Ingredient Spotlight - Bottom Left */}
          {/* <div className="md:col-span-3 bg-white p-6 rounded-3xl border border-stone-200/50">
            <h4 className="text-xl font-medium text-stone-800 mb-6">
              Elemental Composition
            </h4>
            <CompositionChart />
            <p className="text-sm text-stone-500">
              Precision-crafted ratios for optimal efficacy
            </p>
          </div> */}

          <div className="md:col-span-3 bg-white rounded-3xl border border-stone-200/50">
            <CompositionChart />
            {/* <div className="flex items-end gap-2 h-32 mb-4">
              <div
                className="flex-1 bg-emerald-100 rounded-t-full"
                style={{ height: "70%" }}
              >
                <p className="text-center text-xs mt-2">Multani Mitti</p>
              </div>
              <div
                className="flex-1 bg-amber-100 rounded-t-full"
                style={{ height: "15%" }}
              >
                <p className="text-center text-xs mt-2">Neem</p>
              </div>
              <div
                className="flex-1 bg-lime-100 rounded-t-full"
                style={{ height: "10%" }}
              >
                <p className="text-center text-xs mt-2">Turmeric</p>
              </div>
              <div
                className="flex-1 bg-rose-100 rounded-t-full"
                style={{ height: "5%" }}
              >
                <p className="text-center text-xs mt-2">Sandalwood</p>
              </div>
            </div> */}
          </div>
          

          {/* Stats Panel - Top Right */}
          <div className="md:col-span-2 aspect-square relative rounded-3xl h-full overflow-hidden bg-stone-100 border border-stone-200/50">
            <Image
              src="/multani-mitti2.png"
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

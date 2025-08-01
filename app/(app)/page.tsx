import Benefits from "@/components/sections/Benefits";
import BrandStory from "@/components/sections/BrandStory";
import ContactSection from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/Products";
import WhyAlqami from "@/components/sections/WhyAlqami";


export default function Home() {
  return (
    <div className="bg-linear-to-r -mt-20 pt-20 from-amber-50 to-emerald-50">
      <Hero />
      <BrandStory /> 
      <WhyAlqami />
      <OurProducts />
      <Benefits />
      <ContactSection />
    </div>
  );
}

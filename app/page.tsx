import BrandStory from "@/components/sections/BrandStory";
import ContactSection from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/Products";
import WhyAlqami from "@/components/sections/WhyAlqami";


export default function Home() {
  return (
    <div className="bg-linear-to-r from-amber-50 to-emerald-50">
      <Hero />
      <BrandStory /> 
      <WhyAlqami />
      <OurProducts />
      <ContactSection />
    </div>
  );
}

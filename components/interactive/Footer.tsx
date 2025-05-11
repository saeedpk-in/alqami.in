
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import { IconBrandThreads , IconBrandX , IconBrandLinkedin,IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  const linkGroups = [
    // {
    //   title: "Shop",
    //   links: [
    //     { name: "New Arrivals", href: "/shop" },
    //     { name: "Trending", href: "/shop?category=trending" },
    //     { name: "Men's Collection", href: "/shop?category=mens" },
    //     { name: "Women's Collection", href: "/shop?category=women" },
    //     { name: "Casual Collection", href: "/shop?category=casual" },
    //   ],
    // },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/#contact" },
        { name: "About Us", href: "/#brand-story" },
        { name: "Our Product", href: "/#product" },
      ],
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { name: "Terms of Service", href: "/terms-of-service" },
    //     { name: "Privacy Policy", href: "/privacy-policy" },
    //     { name: "Refund Policy", href: "/return-policy" },
    //     { name: "Shipping Policy", href: "/shipping-policy" },
    //   ],
    // },
  ];

  const socialLinks = [
    // { icon: <IconBrandInstagram size={18} />, href: "https://www.instagram.com/kosmo._clothing?igsh=M2hucndpMGx5MGtk" },
    // { icon: <IconBrandThreads size={18} />, href: "https://www.threads.com/@kosmo._clothing?igshid=NTc4MTIwNjQ2YQ==" },
    // { icon: <IconBrandX size={18} />, href: "https://x.com/kosmo_clothing?s=21" },
    // { icon: <IconBrandLinkedin size={18} />, href: "https://www.linkedin.com/in/kosmo-clothing-44aa00363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/kosmo._clothing?igsh=M2hucndpMGx5MGtk" },
    { icon: <Facebook size={18} />, href: "https://www.threads.com/@kosmo._clothing?igshid=NTc4MTIwNjQ2YQ==" },
    { icon: <Twitter size={18} />, href: "https://x.com/kosmo_clothing?s=21" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/kosmo-clothing-44aa00363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  ];

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/alqami.png"
                alt="Kosmo Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
                priority
              />
              <h2 className="text-2xl font-bold">Alqami</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              
            </p>
            
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Alqami.in. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
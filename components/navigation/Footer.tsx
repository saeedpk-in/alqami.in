
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import { IconBrandThreads , IconBrandX , IconBrandLinkedin,IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  const linkGroups = [
    {
      title: "Pages",
      links: [
        { name: "Products", href: "/products" },
        { name: "Orders", href: "/orders" },
        { name: "Cart", href: "/cart" },
        { name: "About", href: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping-policy" },
        { name: "Returns & Exchanges", href: "/return-policy" },
        { name: "About Us", href: "/about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Refund Policy", href: "/return-policy" },
        { name: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/alqami.in" },
    { icon: <Facebook size={18} />, href: "https://www.threads.com/webcodge" },
    { icon: <Twitter size={18} />, href: "https://x.com/webcodge" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/" },
  ];

  return (
    <footer className="border-t  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/alqami.jpg"
                alt="Alqami Logo"
                width={70}
                height={70}
                priority
                className="h-15 w-15 rounded-full object-cover"
              />
              <h2 className="sr-only text-2xl font-bold">Alqami</h2>
            </div>
            <p className="text-black  text-sm leading-relaxed max-w-xs">
              Glow naturally, Live purely.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              <h3 className="text-sm font-semibold text-black   uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-black  hover:text-gray-800 transition-colors"
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
        <div className="mt-16 pt-8 border-t border-gray-100/40 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black ">
            © {new Date().getFullYear()} ALQAMI. All rights reserved.
          </p>
          <p className="text-sm text-black ">
             Crafted by{" "}
            <Link
              href={"https://saeedpk.webcodge.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              saeed pk
            </Link>{" "}
            from{" "}
            <Link
              href={"https://www.webcodge.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              webcodge
            </Link>
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black  hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link href="/terms-of-service" className="text-xs text-black  hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-xs text-black  hover:text-white transition-colors">
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
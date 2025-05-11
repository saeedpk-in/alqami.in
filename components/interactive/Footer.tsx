import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex justify-between">
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
              Glow Naturally, Live purely.
            </p>
          </div>

          {/* Link  */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#brand-story"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#product"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Our Product
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed by{" "}
            <Link
              href={"https://saeedpk.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Saeed Pk
            </Link>{" "}
            from{" "}
            <Link
              href={"https://webcodge.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Webcodge
            </Link>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Alqami.in. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/alqami.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://youtube.com/@alqami_india?si=culslSRKk3zJMvJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import hamburger menu icons
import { ArrowRight, WalletCardsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
import Image from "next/image";
import {} from "next/router";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reminder, setReminder] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkReminder = () => {
      const value = localStorage.getItem("cart-reminder") === "true";
      setReminder(value);
    };

    checkReminder(); // Check on first load

    // Listen to custom event
    window.addEventListener("cartReminderChanged", checkReminder);

    // Cleanup
    return () => {
      window.removeEventListener("cartReminderChanged", checkReminder);
    };
  }, []);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close navbar whenever the route changes
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    }
    return () => {
      document.body.style.overflow = "unset"; // Allow scrolling when menu is closed
    };
  }, [isOpen]);

  return (
    <header
      className={` backdrop-blur-xs dark:bg-black sticky  z-50 transition-all duration-300 h-fit   ${
        isScrolled
          ? "shadow-md py-2 top-0 bg-white/70"
          : "shadow-sm py-4 top-0"
      }`}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo and hamburger menu */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <div className="flex items-center gap-x-1">
                <Image
                  src={"/alqami.png"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="rounded-xl w-14 h-14"
                  priority={true}
                />
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  size={24}
                  className="transform transition-transform duration-300"
                />
              ) : (
                <Menu
                  size={24}
                  className="transform transition-transform duration-300"
                />
              )}
            </button>
          </div>

          {/* Desktop Navigation (unchanged) */}
          <div className="hidden md:flex items-center space-x-4">
            <div>
              <ul
                className={`flex space-x-4 items-center font-extrabold text-primary/60`}
              >
                <li>
                  <Link href="/#product" className="text-sm" >
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/#brand-story" className="text-sm" >
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm" >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Mobile Navigation with Animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3 },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  opacity: { duration: 0.1 },
                  height: { duration: 0.2 },
                },
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-2 pb-4 space-y-1"
              >
                <Link href="/#product" >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="block px-3 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Product
                  </motion.div>
                </Link>

                <Link href="/#brand-story" >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="block px-3 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </motion.div>
                </Link>

                <Link href="/#contact" >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="block px-3 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Optional: Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-100 bg-black z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;

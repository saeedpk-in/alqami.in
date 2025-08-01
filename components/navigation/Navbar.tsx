// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ChevronRight,
//   CircleUserRound,
//   Menu,
//   ShoppingBag,
//   ShoppingCart,
//   X,
// } from "lucide-react"; // Import hamburger menu icons
// import { ArrowRight, WalletCardsIcon } from "lucide-react";
// import { Button } from "../ui/button";
// import { motion, AnimatePresence } from "framer-motion"; // Added for animations
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import {} from "next/router";
// import { usePathname } from "next/navigation";
// import { Badge } from "../ui/badge";
// import { cn } from "@/lib/utils";

// const Navbar = () => {
//   const { data: session } = useSession();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [reminder, setReminder] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const checkReminder = () => {
//       const value = localStorage.getItem("cart-reminder") === "true";
//       setReminder(value);
//     };

//     checkReminder(); // Check on first load

//     // Listen to custom event
//     window.addEventListener("cartReminderChanged", checkReminder);

//     // Cleanup
//     return () => {
//       window.removeEventListener("cartReminderChanged", checkReminder);
//     };
//   }, []);

//   // Add scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Close navbar whenever the route changes
//     setIsOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
//     }
//     return () => {
//       document.body.style.overflow = "unset"; // Allow scrolling when menu is closed
//     };
//   }, [isOpen]);
//   return (
//     <header
//       className={cn(
//         "fixed w-full backdrop-blur-xs top-0 z-50 transition-all duration-300 h-fit",
//         {
//           "shadow-md py-2 bg-emerald-100/80": isOpen,
//           "shadow-md py-2 bg-emerald-100/10": isScrolled && !isOpen,
//           "shadow-sm py-4 bg-emerald-100/80": !isScrolled && isOpen,
//           "shadow-sm py-4": !isScrolled && !isOpen,
//         }
//       )}
//     >
//       <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="flex justify-between items-center">
//           {/* Logo and hamburger menu */}
//           <div className="flex items-center justify-between w-full md:w-auto">
//             <Link href="/">
//               <div className="flex items-center gap-x-1">
//                 <Image
//                   src={"/alqami.png"}
//                   alt="Alqami logo"
//                   width={50}
//                   height={50}
//                   priority={true}
//                   className=" rounded-full"
//                 />

//                 <h1 className="sr-only">alqami</h1>
//               </div>
//             </Link>
//             <div className="flex gap-2">
//               <Button
//                 variant={"secondary"}
//                 className="rounded-full bg-emerald-200/90 hover:bg-emerald-300/70 md:hidden"
//                 asChild
//               >
//                 <Link href="/cart">
//                   {reminder && (
//                     <Badge className="absolute p-0 w-2 h-2 bg-red-600 translate-x-3 -translate-y-4" />
//                   )}
//                   <ShoppingCart size={20} />
//                 </Link>
//               </Button>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`md:hidden  ${
//                   isScrolled || isOpen
//                     ? "text-emerald-900/90 hover:text-emerald-800/90"
//                     : "text-emerald-200/90 hover:text-emerald-300/90"
//                 } focus:outline-none transition-colors`}
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? (
//                   <X
//                     size={24}
//                     className="transform transition-transform duration-300"
//                   />
//                 ) : (
//                   <Menu
//                     size={24}
//                     className="transform transition-transform duration-300"
//                   />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Desktop Right Side Items (unchanged) */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button
//               className={`flex space-x-4 ${
//                 pathname === "/" && !isScrolled
//                   ? " bg-white/10 text-white/80 hover:bg-white/90 hover:text-black"
//                   : "bg-emerald-100/80 text-black/80 hover:bg-white/90"
//               }  items-center py-5 px-6 rounded-full text-sm  font-ligh tracking-tight uppercase transition-colors duration-1000`}
//               asChild
//             >
//               <Link href="/about">About us</Link>
//             </Button>
//             <Button
//               className={`flex space-x-4 ${
//                 pathname === "/" && !isScrolled
//                   ? " bg-white/10 text-white/80 hover:bg-white/90 hover:text-black"
//                   : "bg-emerald-100/80 text-black/80 hover:bg-white/90"
//               }  items-center py-5 px-6 rounded-full text-sm  font-ligh tracking-tight uppercase transition-colors duration-1000`}
//               asChild
//             >
//               <Link href="/products">Products</Link>
//             </Button>
//             <Button
//               className={`flex space-x-4 ${
//                 pathname === "/" && !isScrolled
//                   ? " bg-white/10 text-white/80 hover:bg-white/90 hover:text-black"
//                   : "bg-emerald-100/80 text-black/80 hover:bg-white/90"
//               }  items-center py-5 px-6 rounded-full text-sm  font-ligh tracking-tight uppercase transition-colors duration-1000`}
//               asChild
//             >
//               <Link href="/orders">Orders</Link>
//             </Button>
//             {!session?.user && (
//               <Button
//                 className={`flex space-x-4 ${
//                   pathname === "/" && !isScrolled
//                     ? " bg-white/10 text-white/80 hover:bg-white/90 hover:text-black"
//                     : "bg-emerald-100/80 text-black/80 hover:bg-white/90"
//                 }  items-center py-5 px-8 rounded-full text-sm  font-ligh tracking-tight uppercase transition-colors duration-1000`}
//                 asChild
//               >
//                 <Link href="/signin">Sign In</Link>
//               </Button>
//             )}
//             <Button variant={"secondary"} className="rounded-full bg-emerald-100 hover:bg-emerald-50" asChild>
//               <Link href="/cart">
//                 {reminder && (
//                   <Badge className="absolute p-0 w-2 h-2 bg-red-600 translate-x-3 -translate-y-4" />
//                 )}
//                 <ShoppingCart size={20} />
//               </Link>
//             </Button>
//             {session?.user && (
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <div
//                     className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
//                     style={{
//                       backgroundColor: `#${(
//                         parseInt(session?.user?.id || "0", 36) % 16777215
//                       ).toString(16)}`,
//                     }}
//                   >
//                     {session?.user?.name?.charAt(0).toUpperCase() || "U"}
//                   </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56">
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuGroup>
//                     <Link href="/profile">
//                       <DropdownMenuItem>
//                         Profile
//                         <DropdownMenuShortcut>⌘PF</DropdownMenuShortcut>
//                       </DropdownMenuItem>
//                     </Link>
//                   </DropdownMenuGroup>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem onClick={() => signOut()}>
//                     Log out
//                     <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation with Animations */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: 1,
//                 height: "auto",
//                 transition: {
//                   opacity: { duration: 0.2 },
//                   height: { duration: 0.3 },
//                 },
//               }}
//               exit={{
//                 opacity: 0,
//                 height: 0,
//                 transition: {
//                   opacity: { duration: 0.1 },
//                   height: { duration: 0.2 },
//                 },
//               }}
//               className="md:hidden overflow-hidden"
//             >
//               <motion.div
//                 initial={{ y: -20 }}
//                 animate={{ y: 0 }}
//                 exit={{ y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="pt-2 pb-4 flex flex-col gap-2 text-emerald-900"
//               >
//                 <Link href="/products">
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     className="block px-3 py-2 text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Products
//                   </motion.div>
//                 </Link>

//                 <Link href="/about">
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     className="block px-3 py-2 text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     About
//                   </motion.div>
//                 </Link>
//                 <Link href="/orders">
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     className="block px-3 py-2 text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Orders
//                   </motion.div>
//                 </Link>
//                 <Link href="/#contact">
//                   <motion.div
//                     whileTap={{ scale: 0.98 }}
//                     className="block px-3 py-2 text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Contact
//                   </motion.div>
//                 </Link>

//                 {session?.user ? (
//                   <div className="px-3 py-2 flex gap-2 ">
//                     <Link href="/profile">
//                       <motion.div
//                         whileTap={{ scale: 0.98 }}
//                         className="block  text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                         onClick={() => signOut()}
//                       >
//                         Profile
//                       </motion.div>
//                     </Link>
//                     <motion.div
//                       whileTap={{ scale: 0.98 }}
//                       className="block  text-base font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded-md transition-colors"
//                       onClick={() => signOut()}
//                     >
//                       Logout
//                     </motion.div>
//                   </div>
//                 ) : (
//                   <Button
//                     className="w-full group rounded-md bg-emerald-200 text-emerald-900 hover:bg-emerald-300"
//                     asChild
//                   >
//                     <Link
//                       href="/signin"
//                       className="block px-3 py-2 "
//                       onClick={() => setIsOpen(false)}
//                     >
//                       Login Now{" "}
//                       <ChevronRight className="transition-all duration-300 ease-in-out group-hover:translate-x-1 ml-2" />
//                     </Link>
//                   </Button>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Optional: Backdrop overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.5 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-100 bg-black z-40 md:hidden"
//             onClick={() => setIsOpen(false)}
//           />
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };
// export default Navbar;
"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { useSession } from "next-auth/react";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
  { href: "/#about", label: "About" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [reminder, setReminder] = useState(false);
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
  return (
    <header className="bg-white/10 fixed w-full backdrop-blur-sm top-0 z-50 px-4 md:px-6">
      <div className="mx-auto max-w-7xl flex h-20 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5"
                        active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Image
                src={"/alqami-icon-wbg.png"}
                alt="Alqami logo"
                width={70}
                height={70}
                priority={true}
                className=" rounded-full w-10 h-10 object-cover"
              />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium rounded-full"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-sm rounded-full"
          >
            <Link href="/cart">
              {reminder && (
                <Badge className="absolute p-0 w-2 h-2 bg-red-600 translate-x-3 -translate-y-4" />
              )}
              <ShoppingCart />
            </Link>
          </Button>

          {session?.user ? (
            <Button className="gap-2 rounded-full py-2 pl-2 ps-0 pr-2" variant={"outline"} asChild>
              <Link href="/profile" className="flex">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
                  style={{
                    backgroundColor: `#${(
                      parseInt(session?.user?.id || "0", 36) % 16777215
                    ).toString(16)}`,
                  }}
                >
                  {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="hidden sm:block">{"@" +  session?.user?.name || "User"}</span>
              </Link>
            </Button>
          ) : (
            <Button asChild size="sm" className="text-sm rounded-full">
              <Link href="/signin">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

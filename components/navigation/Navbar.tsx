
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
  { href: "/#brand-story", label: "About" },
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

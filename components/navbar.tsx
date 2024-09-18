import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/icons";
import {
  navigationMenuTriggerStyle,
  verticalNavigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

import logo from "../public/vercel.svg";
export const Navbar = ({ nav_links }: any) => {
  const scrollToSection = (sectionRef: any) => {
    const section = sectionRef.current;
    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-10">
      <div className="flex justify-between items-center h-full w-full px-4">
        <div className="w-90 h-90">
          <Image
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className="hidden sm:flex">
          {" "}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {nav_links.map((link: any, index: any) => (
                  <>
                    <NavigationMenuLink
                      key={index}
                      onClick={() => scrollToSection(link.ref)}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </>
                ))}
                {/* <Link href="#Images" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Images
                  </NavigationMenuLink>
                </Link>{" "}
                <Link href="#About" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>{" "} */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-primary text-primary rounded-full shadow-lg z-50 sm:hidden">
          <NavigationMenu className="max-w-full">
            <NavigationMenuList className="flex justify-around py-3">
              {nav_links.map((link: any, index: any) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    onClick={() => scrollToSection(link.ref)}
                    className={` border border-accent-foreground transition ease-in-out duration-200 text-sm font-medium ${navigationMenuTriggerStyle()}  text-popover  bg-primary hover:bg-foreground hover:text-secondary`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          id="closeBTN"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MenuIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

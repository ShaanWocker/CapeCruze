"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#banner", label: "HOME" },
  { href: "#feature", label: "WHY US" },
  { href: "#service", label: "OUR SERVICES" },
  { href: "#testimonial", label: "REVIEWS" },
  { href: "#booking", label: "BOOK NOW" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Side Navigation */}
      <div
        className="fixed top-0 z-20 h-screen w-[250px] bg-[#009688] transition-all duration-500"
        style={{ right: isOpen ? "0" : "-250px" }}
      >
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="my-[50px] mx-5 list-none">
                <a
                  href={link.href}
                  className="text-white no-underline hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu Button */}
      <button
        className="fixed right-[30px] top-5 z-30 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[3px] bg-[#009688] border-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <Image
          src={isOpen ? "/images/close.png" : "/images/menu.png"}
          alt={isOpen ? "Close" : "Menu"}
          width={20}
          height={20}
        />
      </button>
    </>
  );
}

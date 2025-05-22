"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Icon } from "@iconify/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Workshop", href: "/workshop" },
  { name: "Blog", href: "/blog" },
];

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 lg:py-5 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-green-400 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+919876543210"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle mobile menu"
        >
          <Icon icon="heroicons-outline:menu" width={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <Icon icon="heroicons-outline:x" width={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-green-400 transition"
              onClick={() => setNavbarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-center"
            onClick={() => setNavbarOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

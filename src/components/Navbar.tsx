"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-[#1C2333] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight group"
        >
          <span className="text-foreground">SR</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative font-body text-sm text-foreground-dim hover:text-foreground transition-colors duration-200 group"
              >
                <span className="font-mono text-accent text-xs mr-1 opacity-60">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* <a
          href="/cv-sadi-rueda.pdf"
          download
          className="hidden md:flex items-center gap-2 border border-accent text-accent text-sm font-mono px-4 py-2 rounded-sm hover:bg-accent hover:text-background transition-all duration-200"
        >
          Download CV
        </a> */}

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-[#1C2333] mt-2 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-foreground-dim hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-accent text-xs">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

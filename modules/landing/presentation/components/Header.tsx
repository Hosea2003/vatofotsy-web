"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-primary">Vato</span>fotsy
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Sign in
          </button>
          <button className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-bold text-background transition-colors hover:bg-primary-dark">
            Get Started Free
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex cursor-pointer flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-foreground/5 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-foreground/10" />
            <button className="cursor-pointer text-left text-sm font-medium text-foreground/70">
              Sign in
            </button>
            <button className="cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-background">
              Get Started Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

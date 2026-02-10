"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-cta-content]",
        { y: 30, autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div
          data-cta-content
          className="invisible relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

          <h2 className="relative mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to run your first vote?
          </h2>
          <p className="relative mb-8 text-lg text-white/70">
            Join thousands of organizations already using Vatofotsy to make
            every voice heard. Start free, no credit card required.
          </p>
          <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="cursor-pointer rounded-xl bg-white px-8 py-3.5 text-base font-bold text-primary transition-colors hover:bg-white/90">
              Get Started for Free
            </button>
            <button className="cursor-pointer rounded-xl border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

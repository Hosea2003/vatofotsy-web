"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-animate='badge']", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          "[data-animate='heading'] > *",
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
          },
          "-=0.2",
        )
        .from(
          "[data-animate='subheading']",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          "[data-animate='cta'] > *",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3",
        )
        .from(
          "[data-animate='social-proof']",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          "[data-animate='preview']",
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          data-animate="badge"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-dark dark:text-primary-light"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Now in public beta
        </div>

        <h1
          data-animate="heading"
          className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl"
        >
          <span className="block">Organize votes</span>
          <span className="block text-primary">your community trusts</span>
        </h1>

        <p
          data-animate="subheading"
          className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl"
        >
          Create public polls or private organizational votes in minutes. Invite
          your team, secure every ballot with end-to-end verification, and share
          real-time results — all from one platform.
        </p>

        <div
          data-animate="cta"
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <button className="cursor-pointer rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-background shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30">
            Start for Free
          </button>
          <button className="group flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/10 px-8 py-3.5 text-base font-medium transition-colors hover:bg-foreground/5">
            Watch Demo
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div
          data-animate="social-proof"
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary/20 text-xs font-bold text-primary-dark"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/50">
            Trusted by{" "}
            <span className="font-semibold text-foreground/70">2,400+</span>{" "}
            organizations worldwide
          </p>
        </div>
      </div>

      {/* App preview mock */}
      <div
        data-animate="preview"
        className="mx-auto mt-20 w-full max-w-4xl rounded-2xl border border-foreground/10 bg-foreground/[.02] p-2 shadow-2xl shadow-black/5"
      >
        <div className="rounded-xl border border-foreground/5 bg-background p-6 md:p-8">
          {/* Mock toolbar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="h-5 w-48 rounded-full bg-foreground/5" />
            <div className="h-5 w-5" />
          </div>
          {/* Mock vote UI */}
          <div className="space-y-4">
            <div className="h-6 w-64 rounded bg-foreground/10" />
            <div className="h-4 w-96 max-w-full rounded bg-foreground/5" />
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {["Option A", "Option B", "Option C"].map((opt, i) => (
                <div
                  key={opt}
                  className={`rounded-xl border p-4 ${i === 1 ? "border-primary bg-primary/5" : "border-foreground/10"}`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">{opt}</span>
                    <span
                      className={`text-xs font-bold ${i === 1 ? "text-primary" : "text-foreground/40"}`}
                    >
                      {[32, 45, 23][i]}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-foreground/5">
                    <div
                      className={`h-full rounded-full ${i === 1 ? "bg-primary" : "bg-foreground/15"}`}
                      style={{ width: `${[32, 45, 23][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

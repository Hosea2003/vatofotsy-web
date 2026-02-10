"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "01",
    title: "Create your vote",
    description:
      "Set up your ballot in minutes. Add candidates or options, configure voting rules, and set the timeline.",
  },
  {
    step: "02",
    title: "Invite participants",
    description:
      "Share a public link or send private invitations via email. Manage voter eligibility with access controls.",
  },
  {
    step: "03",
    title: "Collect & verify",
    description:
      "Voters cast their ballots securely from any device. Every vote is encrypted and verified in real time.",
  },
  {
    step: "04",
    title: "Share results",
    description:
      "View live results on interactive dashboards. Export certified reports for official record-keeping.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-step]", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="border-t border-foreground/5 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            How it works
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            From setup to results in four steps
          </h2>
          <p className="text-lg text-foreground/60">
            Running an election shouldn&apos;t require a manual. Here&apos;s how
            simple it is.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <div key={item.step} data-step className="relative">
              {i < STEPS.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}
              <div className="mb-4 text-4xl font-extrabold text-primary/20">
                {item.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

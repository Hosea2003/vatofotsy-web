import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Vato</span>fotsy
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">
              Secure online voting for communities, organizations, and teams of
              all sizes.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-4 text-sm font-semibold">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 md:flex-row">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Vatofotsy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-foreground/40 transition-colors hover:text-foreground"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

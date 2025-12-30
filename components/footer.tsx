import Link from "next/link"
import Image from "next/image"

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Corporate Car Service", href: "#" },
      { label: "Airport Transfers", href: "#" },
      { label: "Group Transport", href: "#" },
      { label: "Roadshows", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Fleet", href: "#" },
      { label: "Global Network", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "Request Quote", href: "#" },
      { label: "Quick Receipt", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/corecar_logo.png"
                alt="CORE CAR"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              The premier executive car service for business professionals worldwide. Excellence in every journey since
              1998.
            </p>
            <div className="text-sm text-muted-foreground">Available 24/7/365</div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CORE Car. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${portfolio.identity.name} | Biomedical Engineering & Business Portfolio`,
    template: `%s | ${portfolio.identity.name}`,
  },
  description:
    "Sam Lanier’s portfolio of biomedical engineering, business operations, personal software projects, and selected marketing coursework.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-kicker">Let&apos;s connect</p>
          <p className="footer-title">Open to medical-device research and engineering opportunities.</p>
        </div>
        {portfolio.linkedInUrl ? (
          <a
            className="linkedin-link"
            href={portfolio.linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Connect with ${portfolio.identity.name} on LinkedIn`}
          >
            <span className="linkedin-icon" aria-hidden="true">
              in
            </span>
            LinkedIn
          </a>
        ) : (
          <span className="linkedin-link linkedin-pending" aria-label="LinkedIn URL pending">
            <span className="linkedin-icon" aria-hidden="true">
              in
            </span>
            Add LinkedIn URL
          </span>
        )}
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {portfolio.identity.name}</span>
        <Link href="/marketing-coursework">View marketing coursework</Link>
      </div>
    </footer>
  );
}

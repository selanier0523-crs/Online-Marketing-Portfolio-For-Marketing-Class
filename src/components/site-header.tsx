import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Go to the home page">
          <span className="wordmark-mark" aria-hidden="true">
            {portfolio.identity.name === "Your Name"
              ? "YN"
              : portfolio.identity.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
          </span>
          <span>{portfolio.identity.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">About</Link>
          <Link href="/marketing-coursework">Coursework</Link>
        </nav>
      </div>
    </header>
  );
}

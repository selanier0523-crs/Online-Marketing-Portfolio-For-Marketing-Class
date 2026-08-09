import type { Metadata } from "next";
import { CourseworkEntry } from "@/components/coursework-entry";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Marketing Coursework",
  description:
    "The following assignments show what I learned in my marketing class, and how that knowlege turned into practical projects.",
};

export default function MarketingCourseworkPage() {
  return (
    <main>
      <section className="coursework-hero shell section-pad">
        <p className="eyebrow">Marketing coursework</p>
        <h1>Highlights from my 2026 summer marketing class</h1>
        <p className="coursework-intro">
          The following assignments show what I learned in my marketing class, and I applied that knowledge by creating practical projects."
        </p>
        <div className="rubric-strip" aria-label="Every project includes">
          <span>Every project includes</span>
          <ul>
            <li>The assignment</li>
            <li>What I did</li>
            <li>What I learned</li>
          </ul>
        </div>
      </section>

      <div className="shell coursework-list">
        {portfolio.coursework.map((item) => (
          <CourseworkEntry item={item} key={item.number} />
        ))}
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { CourseworkEntry } from "@/components/coursework-entry";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Marketing Coursework",
  description:
    "Selected marketing coursework with project context, process, and learning reflections.",
};

export default function MarketingCourseworkPage() {
  return (
    <main>
      <section className="coursework-hero shell section-pad">
        <p className="eyebrow">Marketing coursework</p>
        <h1>Research, strategy, and creative work—in context.</h1>
        <p className="coursework-intro">
          These three assignments show how I use observation, audience research,
          and clear communication to move from information to a practical
          marketing recommendation.
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

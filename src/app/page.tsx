import Image from "next/image";
import Link from "next/link";
import {
  ExperienceTimeline,
  PersonalProjects,
  SkillGroups,
} from "@/components/profile-sections";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  return (
    <main>
      <section className="hero shell section-pad">
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.identity.eyebrow}</p>
          <h1>{portfolio.identity.tagline}</h1>
          <p className="hero-intro">{portfolio.identity.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore my experience <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" href="/marketing-coursework">
              Marketing coursework <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Professional profile summary">
          {portfolio.identity.photo ? (
            <Image
              className="profile-photo"
              src={portfolio.identity.photo.src}
              alt={portfolio.identity.photo.alt}
              width={portfolio.identity.photo.width}
              height={portfolio.identity.photo.height}
              sizes="(max-width: 900px) 92vw, 30vw"
              preload
            />
          ) : (
            <div className="photo-placeholder">
              <span aria-hidden="true">SL</span>
              <p>Professional photo coming next</p>
            </div>
          )}
          <div className="profile-caption">
            <p>{portfolio.identity.name}</p>
            <span>{portfolio.identity.role}</span>
            <ul>
              {portfolio.identity.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="opportunity-band" aria-labelledby="opportunity-title">
        <div className="shell opportunity-inner">
          <p>{portfolio.opportunity.label}</p>
          <h2 id="opportunity-title">{portfolio.opportunity.headline}</h2>
          <p>{portfolio.opportunity.detail}</p>
        </div>
      </section>

      <section className="shell section-pad" id="profile" aria-labelledby="profile-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Achievements and experiences</p>
            <h2 id="profile-title">Building technical skills and real-world experience</h2>
          </div>
          <p>
            My academic work, hands-on experience, and entrepreneurial interests
            point toward a common goal: helping bring impactful products from an idea
            into the real world.
          </p>
        </div>
        <div className="achievement-grid">
          {portfolio.achievements.map((achievement) => (
            <article key={achievement.title} className="achievement-card">
              <span>{achievement.value}</span>
              <h3>{achievement.title}</h3>
              <p>
                {achievement.detail}
                {achievement.attachmentUrl && achievement.attachmentLabel ? (
                  <>
                    {" "}
                    <a
                      className="achievement-attachment"
                      href={achievement.attachmentUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${achievement.attachmentLabel}. Opens the design process PDF in a new tab.`}
                    >
                      {achievement.attachmentLabel}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="shell skills-layout">
          <div className="skills-intro">
            <p className="eyebrow">Capabilities</p>
            <h2 id="skills-title">Skills built across disciplines.</h2>
            <p>
              My engineering degree provides me with a strong technical foundation, and my personal projects and work experience have honed my ability to apply these skills in real-world scenarios.
            </p>
          </div>
          <SkillGroups groups={portfolio.skillGroups} />
        </div>
      </section>

      <section
        className="shell section-pad experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Work experience</p>
            <h2 id="experience-title">Responsibility that grew each summer.</h2>
          </div>
          <p>{portfolio.experienceIntro}</p>
        </div>
        <ExperienceTimeline items={portfolio.experience} />
      </section>

      <section className="personal-projects-section" aria-labelledby="projects-title">
        <div className="shell section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Personal projects</p>
              <h2 id="projects-title">Learning by building.</h2>
            </div>
            <p>
              These applications reflect my interest in web/app development and entrepreneurship, as well as my goals to build tools and products that make an impact in people's lives.
            </p>
          </div>
          <PersonalProjects projects={portfolio.personalProjects} />
        </div>
      </section>

      <section className="shell section-pad goals-section" aria-labelledby="goals-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">Direction</p>
            <h2 id="goals-title">Focused on what comes next.</h2>
          </div>
        </div>
        <div className="goal-list">
          {portfolio.goals.map((goal, index) => (
            <article key={goal.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{goal.title}</h3>
                <p>{goal.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell coursework-cta">
        <div>
          <p className="eyebrow">Marketing coursework</p>
          <h2>My Marketing Portfolio</h2>
        </div>
        <Link href="/marketing-coursework" aria-label="View all marketing coursework">
          View all projects <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

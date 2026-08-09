import type {
  ExperienceItem,
  PersonalProject,
  SkillGroup,
} from "@/content/portfolio";

export function SkillGroups({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="skill-group-grid">
      {groups.map((group, index) => (
        <section className="skill-group" key={group.title}>
          <div className="skill-group-heading">
            <span aria-hidden="true">0{index + 1}</span>
            <h3>{group.title}</h3>
          </div>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="experience-timeline">
      {items.map((item, index) => (
        <article className="experience-item" key={item.title}>
          <div className="experience-marker" aria-hidden="true">
            <span>0{index + 1}</span>
          </div>
          <div className="experience-content">
            <p className="experience-period">{item.period}</p>
            <div className="experience-title-row">
              <h3>{item.title}</h3>
              <span>{item.organization}</span>
            </div>
            <p className="experience-summary">{item.summary}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PersonalProjects({ projects }: { projects: PersonalProject[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <a
          className="project-card"
          href={project.url}
          key={project.title}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} in a new tab`}
        >
          <div className="project-card-topline">
            <span>0{index + 1}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul aria-label={`${project.title} features`}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  );
}

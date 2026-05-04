import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  certifications,
  contactNote,
  education,
  employerSignals,
  experience,
  heroProof,
  metrics,
  profile,
  projects,
  roleTargets,
  skillGroups,
  workingStyle,
} from "./profile";

const navItems = [
  { label: "Snapshot", href: "#snapshot" },
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const emailLink = profile.links.find((link) => link.href.startsWith("mailto:"));

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Liam Ryan home">
          <span className="brand-mark">LR</span>
          <span>
            Liam Ryan
            <small>SOC Analyst candidate</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-lede">{profile.headline}</p>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-meta" aria-label="Candidate details">
              <span>
                <MapPin aria-hidden="true" />
                {profile.location}
              </span>
              <span>
                <BriefcaseBusiness aria-hidden="true" />
                {profile.availability}
              </span>
            </div>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="primary-action" href={emailLink?.href ?? "#contact"}>
                Start a conversation
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="secondary-action" href="#projects">
                View project evidence
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cybersecurity portfolio evidence panel">
            <img src="/security-portfolio-visual.svg" alt="" />
            <div className="hero-panel">
              <div>
                <p className="eyebrow">Recruiter signal</p>
                <h2>Security mindset with operational proof</h2>
              </div>
              <ul>
                {heroProof.map((proof) => (
                  <li key={proof}>
                    <ShieldCheck aria-hidden="true" />
                    {proof}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="metric-band" aria-label="Portfolio highlights">
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="snapshot-section" id="snapshot" aria-labelledby="snapshot-heading">
          <SectionHeading
            eyebrow="Snapshot"
            title="Why this background transfers well into security operations"
            copy="The strongest portfolio signal is not only tool exposure. It is the habit of investigating carefully, documenting evidence, and helping people act on the right information."
          />

          <div className="signal-grid">
            {employerSignals.map((item) => {
              const Icon = item.icon;
              return (
                <article className="signal-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="impact-section" id="impact" aria-labelledby="impact-heading">
          <SectionHeading
            eyebrow="Impact"
            title="Professional experience with measurable operational value"
            copy="A hiring manager should be able to see the through-line: investigation, controls, stakeholder trust, and repeatable improvement."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.period}-${item.place}`}>
                <div className="experience-topline">
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <ul>
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-heading">
          <SectionHeading
            eyebrow="Technical skills"
            title="A practical toolkit for triage, validation, and secure reporting"
            copy="The site now makes the security direction explicit while still showing the data and communication strengths that make the tooling useful."
          />

          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <div className="card-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tag-list" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-heading">
          <SectionHeading
            eyebrow="Evidence"
            title="Projects and improvements that make the CV believable"
            copy="Each item is written as proof of behaviour: investigate, build, validate, explain, and improve."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.context}</span>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
                <div className="tag-list" aria-label={`${project.title} skills`}>
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section" id="education" aria-labelledby="education-heading">
          <SectionHeading
            eyebrow="Education"
            title="University foundation backed by continued security development"
            copy="The degree work supports the career move, while certifications and labs show current momentum."
          />

          <div className="education-layout">
            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={item.award}>
                  <GraduationCap aria-hidden="true" />
                  <div>
                    <span>{item.period}</span>
                    <h3>{item.award}</h3>
                    <strong>{item.result}</strong>
                    <p>{item.focus}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="certification-list" aria-label="Certifications and development">
              {certifications.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="certification-card" key={item.title}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fit-section" aria-labelledby="fit-heading">
          <SectionHeading
            eyebrow="Role fit"
            title="Where Liam can add value next"
            copy="The page is now aimed at employers who want an early-career security analyst with investigation discipline and professional communication."
          />

          <div className="fit-grid">
            {roleTargets.map((item) => {
              const Icon = item.icon;
              return (
                <article className="fit-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="working-section" aria-labelledby="working-heading">
          <SectionHeading
            eyebrow="Working style"
            title="The behaviours behind the technical work"
          />

          <div className="working-grid">
            {workingStyle.map((item) => {
              const Icon = item.icon;
              return (
                <article className="working-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Open to security conversations</h2>
            <p>{contactNote}</p>
          </div>
          <div className="contact-actions">
            {profile.links.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.href}
                  className="secondary-action"
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  {link.label}
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{currentYear}</span>
        <span>{profile.target}</span>
      </footer>
    </div>
  );
}

export default App;

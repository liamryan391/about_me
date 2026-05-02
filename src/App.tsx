import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  employerSignals,
  nextSteps,
  profile,
  projects,
  qualities,
  strengths,
  timeline,
} from "./profile";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Evidence", href: "#evidence" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Liam Ryan home">
          <span className="brand-mark">LR</span>
          <span>Liam Ryan</span>
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
            <p className="eyebrow">Cybersecurity portfolio</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-lede">{profile.headline}</p>
            <p className="hero-text">{profile.intro}</p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="primary-action" href="#contact">
                Contact Liam
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="secondary-action" href="#evidence">
                View evidence
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cybersecurity portfolio visual">
            <img src="/security-portfolio-visual.svg" alt="" />
            <div className="visual-caption">
              <ShieldCheck aria-hidden="true" />
              <span>Security, clarity, and professional growth</span>
            </div>
          </div>
        </section>

        <section className="signal-band" aria-label="Employer signals">
          {employerSignals.map((item) => {
            const Icon = item.icon;
            return (
              <article className="signal-card" key={item.title}>
                <Icon aria-hidden="true" />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="profile-section" id="profile" aria-labelledby="profile-heading">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2 id="profile-heading">A clear fit for security-aware teams</h2>
          </div>
          <div className="profile-grid">
            <div className="profile-statement">
              <p>
                Employers do not just need someone who knows tools. They need someone who
                can notice risk, communicate it clearly, and build trust with the people
                who need to act on it.
              </p>
              <p>
                This portfolio presents Liam as an early-career cybersecurity candidate
                with a practical mindset, a strong learning attitude, and a professional
                approach to work.
              </p>
            </div>
            <div className="quick-facts" aria-label="Quick facts">
              <div>
                <span>Location</span>
                <strong>
                  <MapPin aria-hidden="true" />
                  {profile.location}
                </strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>
                  <ShieldCheck aria-hidden="true" />
                  Cybersecurity roles
                </strong>
              </div>
              <div>
                <span>Best fit</span>
                <strong>
                  <BriefcaseBusiness aria-hidden="true" />
                  Internship, graduate, entry-level
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Background employers can understand quickly</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="strengths-section" aria-labelledby="strengths-heading">
          <div className="section-heading">
            <p className="eyebrow">Strengths</p>
            <h2 id="strengths-heading">Security value without unnecessary jargon</h2>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article className="strength-card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="evidence-section" id="evidence" aria-labelledby="evidence-heading">
          <div className="section-heading">
            <p className="eyebrow">Evidence</p>
            <h2 id="evidence-heading">Projects that prove direction and intent</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
                <div className="skill-list" aria-label={`${project.title} skills`}>
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="qualities-section" aria-labelledby="qualities-heading">
          <div className="section-heading">
            <p className="eyebrow">Working Style</p>
            <h2 id="qualities-heading">The traits that make the technical skills useful</h2>
          </div>
          <ul className="quality-list">
            {qualities.map((quality) => (
              <li key={quality}>{quality}</li>
            ))}
          </ul>
        </section>

        <section className="next-section" aria-labelledby="next-heading">
          <div className="section-heading">
            <p className="eyebrow">Opportunities</p>
            <h2 id="next-heading">Roles Liam is ready to discuss</h2>
          </div>
          <div className="next-grid">
            {nextSteps.map((item) => {
              const Icon = item.icon;
              return (
                <article className="next-card" key={item.title}>
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
            <h2 id="contact-heading">Open to cybersecurity conversations</h2>
            <p>
              Recruiters can review the connected profile now, with a CV, LinkedIn,
              and preferred email ready to add before public launch.
            </p>
          </div>
          <div className="contact-actions">
            {profile.links.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.href} className="secondary-action" href={link.href} target="_blank" rel="noreferrer">
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
        <span>{profile.audience}</span>
      </footer>
    </div>
  );
}

export default App;

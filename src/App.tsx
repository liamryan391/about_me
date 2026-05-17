import { useMemo } from "react";
import { About } from "./components/About";
import { AnalystWorkflow } from "./components/AnalystWorkflow";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Header } from "./components/Header";
import type { NavItem } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { ProjectExplorer } from "./components/ProjectExplorer";
import { RecruiterSnapshot } from "./components/RecruiterSnapshot";
import { RoleFitSection } from "./components/RoleFitSection";
import { pageWrap } from "./components/styles";
import { SkillsSection } from "./components/SkillsSection";
import { WorkingStyleSection } from "./components/WorkingStyleSection";
import { profile } from "./profile";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen text-[#182423]">
      <Header navItems={navItems} />
      <main id="top">
        <Hero />
        <Metrics />
        <About />
        <ProjectExplorer />
        <RecruiterSnapshot />
        <ExperienceSection />
        <SkillsSection />
        <AnalystWorkflow />
        <EducationSection />
        <RoleFitSection />
        <WorkingStyleSection />
        <ContactSection />
      </main>

      <footer className={`${pageWrap} flex flex-wrap justify-between gap-3 pb-10 text-sm text-[#465654]`}>
        <span>{profile.name}</span>
        <span>{currentYear}</span>
        <span>{profile.target}</span>
      </footer>
    </div>
  );
}

export default App;

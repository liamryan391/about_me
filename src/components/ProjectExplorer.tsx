import { CheckCircle2, ExternalLink } from "lucide-react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useId, useState } from "react";
import { projects } from "../profile";
import type { ProjectItem } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, eyebrowClass, focusRing, pageWrap, tagClass } from "./styles";

const statusStyles = {
  Completed: "bg-[#e8f2ee] text-[#123d3f]",
  "In progress": "bg-[#fff3d8] text-[#123d3f]",
  Lab: "bg-[#e8f1ff] text-[#123d3f]",
  Planned: "bg-[#f4eeee] text-[#123d3f]",
};

function hasRealUrl(url?: string) {
  return Boolean(url && url !== "#");
}

function githubFallbackLabel(project: ProjectItem) {
  if (project.context.includes("Capita") || project.context.includes("MyCSP")) {
    return "Internal project";
  }

  if (project.status === "Completed") {
    return "Private repo";
  }

  return "GitHub coming soon";
}

export function ProjectExplorer() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const tabIdPrefix = useId();
  const activeProject = projects[activeProjectIndex];

  function selectProject(index: number) {
    setActiveProjectIndex(index);
  }

  function handleProjectSelect(event: ChangeEvent<HTMLSelectElement>) {
    setActiveProjectIndex(Number(event.target.value));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = projects.length - 1;
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = index === lastIndex ? 0 : index + 1;
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = index === 0 ? lastIndex : index - 1;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = lastIndex;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      setActiveProjectIndex(nextIndex);
      document.getElementById(`${tabIdPrefix}-tab-${nextIndex}`)?.focus();
    }
  }

  return (
    <section className={`${pageWrap} scroll-mt-24 py-16`} id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="Security projects and operational evidence"
        copy="These examples show how I investigate issues, validate evidence, tune detections, document findings, and improve security-relevant workflows."
      />

      <div className="grid items-start gap-5 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="lg:hidden">
          <label className="mb-2 block text-xs font-bold uppercase text-[#2f6f63] [letter-spacing:0]" htmlFor={`${tabIdPrefix}-mobile-select`}>
            Choose project
          </label>
          <select
            id={`${tabIdPrefix}-mobile-select`}
            className={`min-h-12 w-full rounded-lg border border-[#d6ded9] bg-white px-4 py-3 text-base font-bold text-[#123d3f] shadow-[0_10px_24px_rgba(24,36,35,0.06)] ${focusRing}`}
            value={activeProjectIndex}
            onChange={handleProjectSelect}
            aria-controls={`${tabIdPrefix}-panel`}
          >
            {projects.map((project, index) => (
              <option key={project.title} value={index}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden gap-3 lg:grid" role="tablist" aria-label="Project evidence">
          {projects.map((project, index) => {
            const isActive = activeProjectIndex === index;

            return (
              <button
                key={project.title}
                id={`${tabIdPrefix}-tab-${index}`}
                className={`rounded-lg border p-4 text-left transition ${
                  isActive
                    ? "border-[#123d3f] bg-[#123d3f] text-white shadow-[0_18px_40px_rgba(18,61,63,0.18)]"
                    : "border-[#d6ded9] bg-white/95 text-[#123d3f] hover:-translate-y-0.5 hover:border-[#123d3f]/40"
                } ${focusRing}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabIdPrefix}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectProject(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className={`text-xs font-bold uppercase ${isActive ? "text-[#d99f2f]" : "text-[#d95745]"}`}>
                  {project.context}
                </span>
                <strong className="mt-2 block text-lg font-extrabold leading-tight">{project.title}</strong>
                <span className={`mt-3 inline-flex rounded-lg px-3 py-1 text-xs font-bold ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </button>
            );
          })}
        </div>

        <article
          id={`${tabIdPrefix}-panel`}
          className={`${cardClass} self-start p-6`}
          role="tabpanel"
          aria-labelledby={`${tabIdPrefix}-tab-${activeProjectIndex}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className={eyebrowClass}>{activeProject.context}</p>
              <h3 className="text-3xl font-black leading-tight text-[#182423] [letter-spacing:0]">{activeProject.title}</h3>
            </div>
            <span className={`rounded-lg px-3 py-2 text-sm font-bold ${statusStyles[activeProject.status]}`}>
              {activeProject.status}
            </span>
          </div>

          <p className="mt-4 text-base leading-8 text-[#465654]">{activeProject.outcome}</p>

          <div className="mt-5 rounded-lg border border-[#d6ded9] bg-[#f7f8f5] p-4">
            <h4 className="font-bold text-[#123d3f]">Employer value</h4>
            <p className="mt-2 text-sm leading-6 text-[#465654]">{activeProject.employerValue}</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {activeProject.proofPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-lg bg-[#e8f2ee] p-3 text-sm font-bold text-[#123d3f]">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#2f6f63]" />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeProject.skills.map((skill) => (
              <span key={skill} className={tagClass}>
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasRealUrl(activeProject.githubUrl) ? (
              <a
                className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white px-4 py-2 text-sm font-bold text-[#123d3f] hover:border-[#123d3f]/40 ${focusRing}`}
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View GitHub for ${activeProject.title}`}
              >
                View GitHub
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#d6ded9] bg-[#f7f8f5] px-4 py-2 text-sm font-bold text-[#465654]">
                {githubFallbackLabel(activeProject)}
              </span>
            )}

            {hasRealUrl(activeProject.writeupUrl) ? (
              <a
                className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white px-4 py-2 text-sm font-bold text-[#123d3f] hover:border-[#123d3f]/40 ${focusRing}`}
                href={activeProject.writeupUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read write-up for ${activeProject.title}`}
              >
                Read write-up
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#d6ded9] bg-[#f7f8f5] px-4 py-2 text-sm font-bold text-[#465654]">
                {activeProject.writeupLabel ?? "Write-up coming soon"}
              </span>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

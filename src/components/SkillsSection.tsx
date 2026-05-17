import { skillGroups } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap, tagClass } from "./styles";

export function SkillsSection() {
  return (
    <section className={`${pageWrap} scroll-mt-24 py-16`} id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Skills"
        title="Security tooling, data validation, and analyst communication"
        copy="These skills are grouped by how they would be used in SOC and cyber security analyst work: triage, investigation, tuning, validation, reporting, and escalation."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className={`${cardClass} p-5`} key={group.title}>
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-[#e8f2ee] text-[#123d3f]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold leading-tight text-[#123d3f]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <span key={skill} className={tagClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

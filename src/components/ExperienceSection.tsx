import { experience } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function ExperienceSection() {
  return (
    <section className={`${pageWrap} scroll-mt-24 py-16`} id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Operational investigation experience with measurable impact"
        copy="My current role has strengthened the same habits needed in security operations: working from evidence, protecting data integrity, documenting clearly, and improving controls after repeat issues appear."
      />

      <div className="grid gap-4">
        {experience.map((item) => (
          <article className={`${cardClass} grid gap-5 border-l-8 border-l-[#0d7c7f] p-5 lg:grid-cols-[0.3fr_0.26fr_0.44fr]`} key={`${item.period}-${item.place}`}>
            <div>
              <span className="text-xs font-bold uppercase text-[#2f6f63]">{item.period}</span>
              <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#123d3f]">{item.title}</h3>
              <p className="mt-2 font-bold text-[#182423]">{item.place}</p>
            </div>
            <p className="font-extrabold leading-7 text-[#123d3f]">{item.summary}</p>
            <ul className="grid gap-3">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3 text-sm leading-6 text-[#465654]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d99f2f]" />
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

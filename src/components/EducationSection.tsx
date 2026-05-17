import { GraduationCap } from "lucide-react";
import { certifications, education } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function EducationSection() {
  return (
    <section className={`${pageWrap} scroll-mt-24 py-16`} id="education" aria-labelledby="education-heading">
      <SectionHeading
        id="education-heading"
        eyebrow="Education"
        title="Cyber security study backed by continued practice"
        copy="My MSc gives me the academic security foundation, while ongoing labs and certification study keep the direction practical."
      />

      <div className="grid gap-4 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="grid gap-4">
          {education.map((item) => (
            <article className={`${cardClass} flex gap-4 p-5`} key={item.award}>
              <GraduationCap aria-hidden="true" className="h-7 w-7 shrink-0 text-[#d95745]" />
              <div>
                <span className="text-xs font-bold uppercase text-[#2f6f63]">{item.period}</span>
                <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#123d3f]">{item.award}</h3>
                <strong className="mt-2 block text-[#182423]">{item.result}</strong>
                <p className="mt-3 text-sm leading-6 text-[#465654]">{item.focus}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <article className={`${cardClass} flex gap-4 p-5`} key={item.title}>
                <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-[#d95745]" />
                <div>
                  <h3 className="text-lg font-extrabold leading-tight text-[#123d3f]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#465654]">{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

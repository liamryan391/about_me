import { CheckCircle2 } from "lucide-react";
import { about } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function About() {
  return (
    <section className={`${pageWrap} scroll-mt-24 py-16`} id="about" aria-labelledby="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title={about.title}
        copy="I am building a career in security operations by combining cyber study, operational investigation experience, and practical lab work."
      />

      <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
        <div className={`${cardClass} p-6`}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-base leading-8 text-[#465654] last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className={`${cardClass} p-6`}>
          <h3 className="text-xl font-extrabold text-[#123d3f]">What this means for a SOC team</h3>
          <ul className="mt-5 grid gap-3">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm font-bold leading-6 text-[#465654]">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#2f6f63]" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { recruiterSignals } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function RecruiterSnapshot() {
  return (
    <section className={`${pageWrap} py-16`} aria-labelledby="snapshot-heading">
      <SectionHeading
        id="snapshot-heading"
        eyebrow="Snapshot"
        title="What I bring to a security operations team"
        copy="I combine operational discipline, data validation, clear documentation, and hands-on security practice. That mix fits SOC environments where accuracy, escalation quality, and repeatable investigation matter."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recruiterSignals.map((item) => {
          const Icon = item.icon;
          return (
            <article className={`${cardClass} p-5`} key={item.title}>
              <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#d95745]" />
              <h3 className="text-lg font-extrabold leading-tight text-[#123d3f]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#465654]">{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

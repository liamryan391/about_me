import { roleTargets } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function RoleFitSection() {
  return (
    <section className={`${pageWrap} py-16`} aria-labelledby="fit-heading">
      <SectionHeading
        id="fit-heading"
        eyebrow="Role fit"
        title="Where I can add value next"
        copy="I am looking for a team where investigation discipline, careful documentation, and a practical security mindset are useful from day one."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {roleTargets.map((item) => {
          const Icon = item.icon;
          return (
            <article className={`${cardClass} p-5`} key={item.title}>
              <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#d95745]" />
              <h3 className="text-xl font-extrabold text-[#123d3f]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#465654]">{item.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

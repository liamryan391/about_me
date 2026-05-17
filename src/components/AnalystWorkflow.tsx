import { proofFlow } from "../profile";
import { SectionHeading } from "./SectionHeading";
import { cardClass, pageWrap } from "./styles";

export function AnalystWorkflow() {
  return (
    <section className={`${pageWrap} py-16`} aria-labelledby="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="Analyst workflow"
        title="How I approach investigation work"
        copy="Whether I am reviewing data exceptions or practising security alerts, I work best when I can follow the evidence and leave a clear record of what happened."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {proofFlow.map((step, index) => (
          <article className={`${cardClass} p-5`} key={step}>
            <span className="text-sm font-bold text-[#d95745]">0{index + 1}</span>
            <h3 className="mt-3 text-xl font-extrabold text-[#123d3f]">{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

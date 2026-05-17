import { metrics } from "../profile";
import { cardClass, pageWrap } from "./styles";

export function Metrics() {
  return (
    <section className={`${pageWrap} grid gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-4`} aria-label="Portfolio highlights">
      {metrics.map((item) => (
        <article className={`${cardClass} min-h-40 p-5`} key={item.label}>
          <strong className="block text-4xl font-black leading-none text-[#123d3f]">{item.value}</strong>
          <span className="mt-3 block font-bold text-[#182423]">{item.label}</span>
          <p className="mt-3 text-sm leading-6 text-[#465654]">{item.detail}</p>
        </article>
      ))}
    </section>
  );
}

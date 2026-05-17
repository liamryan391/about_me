import { eyebrowClass } from "./styles";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, copy, id }: SectionHeadingProps) {
  return (
    <div className="mb-8 grid gap-3 lg:grid-cols-[0.28fr_0.72fr] lg:gap-10">
      <p className={eyebrowClass}>{eyebrow}</p>
      <div>
        <h2
          id={id}
          className="max-w-4xl text-3xl font-black leading-tight text-[#182423] [letter-spacing:0] sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {copy ? <p className="mt-4 max-w-3xl text-base leading-7 text-[#465654]">{copy}</p> : null}
      </div>
    </div>
  );
}

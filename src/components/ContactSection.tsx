import { contactNote, profile } from "../profile";
import { focusRing, pageWrap } from "./styles";

export function ContactSection() {
  return (
    <section className={`${pageWrap} scroll-mt-24 pb-16 pt-10`} id="contact" aria-labelledby="contact-heading">
      <div className="grid gap-8 rounded-lg bg-[linear-gradient(135deg,rgba(18,61,63,0.98),rgba(13,124,127,0.92))] p-6 text-white shadow-[0_18px_45px_rgba(24,36,35,0.12)] lg:grid-cols-[0.58fr_0.42fr] lg:p-10">
        <div>
          <p className="mb-3 text-xs font-bold uppercase text-white [letter-spacing:0]">Contact</p>
          <h2 id="contact-heading" className="text-3xl font-black leading-tight [letter-spacing:0] sm:text-4xl">
            Open to security conversations
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/90">{contactNote}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {profile.links.map((link) => {
            const Icon = link.icon;
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.href}
                className={`inline-flex min-h-12 min-w-32 items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15 ${focusRing}`}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {link.label}
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

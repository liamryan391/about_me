import { ArrowRight, BriefcaseBusiness, Download, Github, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { heroProof, profile } from "../profile";
import { cardClass, eyebrowClass, focusRing, pageWrap } from "./styles";

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const emailLink = profile.links.find((link) => link.href.startsWith("mailto:"));
  const linkedInLink = profile.links.find((link) => link.label === "LinkedIn");
  const gitHubLink = profile.links.find((link) => link.label === "GitHub");

  return (
    <section className={`${pageWrap} grid items-center gap-10 pb-12 pt-8 lg:min-h-[calc(100svh-120px)] lg:grid-cols-[0.95fr_1.05fr] lg:pt-10`}>
      <div className="max-w-3xl">
        <p className={eyebrowClass}>{profile.role}</p>
        <h1 className="max-w-[12ch] text-5xl font-black leading-none text-[#182423] [letter-spacing:0] sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl text-2xl font-black leading-snug text-[#123d3f]">{profile.headline}</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#465654]">{profile.intro}</p>

        <div className="mt-6 grid gap-3">
          <span className="flex items-start gap-3 font-bold text-[#123d3f]">
            <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#d95745]" />
            {profile.location}
          </span>
          <span className="flex items-start gap-3 font-bold text-[#123d3f]">
            <BriefcaseBusiness aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#d95745]" />
            {profile.availability}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3" aria-label="Portfolio actions">
          {/* Place the real PDF at public/Liam-Ryan-CV.pdf so this link downloads correctly. */}
          <a
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d95745] px-5 py-3 font-bold text-white shadow-[0_16px_34px_rgba(217,87,69,0.24)] transition hover:-translate-y-0.5 ${focusRing}`}
            href={profile.cvHref}
            download
          >
            Download CV
            <Download aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white/95 px-5 py-3 font-bold text-[#123d3f] transition hover:-translate-y-0.5 hover:border-[#123d3f]/30 ${focusRing}`}
            href="#projects"
          >
            View Projects
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
          {linkedInLink ? (
            <a
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white/95 px-5 py-3 font-bold text-[#123d3f] transition hover:-translate-y-0.5 hover:border-[#123d3f]/30 ${focusRing}`}
              href={linkedInLink.href}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <Linkedin aria-hidden="true" className="h-5 w-5" />
            </a>
          ) : null}
          {gitHubLink ? (
            <a
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white/95 px-5 py-3 font-bold text-[#123d3f] transition hover:-translate-y-0.5 hover:border-[#123d3f]/30 ${focusRing}`}
              href={gitHubLink.href}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <Github aria-hidden="true" className="h-5 w-5" />
            </a>
          ) : null}
          <a
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#d6ded9] bg-white/95 px-5 py-3 font-bold text-[#123d3f] transition hover:-translate-y-0.5 hover:border-[#123d3f]/30 ${focusRing}`}
            href={emailLink?.href ?? "#contact"}
          >
            Email
            <Mail aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="relative">
        {imageFailed ? (
          <div className="grid min-h-[350px] rounded-lg border border-white/80 bg-[linear-gradient(135deg,#123d3f,#0d7c7f)] p-6 shadow-[0_18px_45px_rgba(24,36,35,0.12)] sm:min-h-[500px] lg:min-h-[650px]">
            <div className="self-end rounded-lg border border-white/25 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase">Security operations focus</p>
              <p className="mt-3 text-2xl font-black">Investigation, validation, reporting, and continuous improvement.</p>
            </div>
          </div>
        ) : (
          <img
            className="h-[350px] w-full rounded-lg border border-white/80 object-cover shadow-[0_18px_45px_rgba(24,36,35,0.12)] sm:h-[500px] lg:h-[650px]"
            src="/security-portfolio-visual.svg"
            alt="Security operations dashboard illustration with investigation panels and a shield"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className={`${cardClass} mt-3 p-4 sm:p-5 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:w-[380px]`}>
          <p className={eyebrowClass}>Security focus</p>
          <h2 className="text-lg font-black leading-tight text-[#123d3f] [letter-spacing:0] sm:text-xl">
            Operational analyst moving into security operations
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {heroProof.map((proof) => (
              <span key={proof} className="inline-flex items-center gap-1.5 rounded-lg bg-[#e8f2ee] px-2.5 py-1.5 text-xs font-bold text-[#123d3f]">
                <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5 text-[#2f6f63]" />
                {proof}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

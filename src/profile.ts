import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  ExternalLink,
  GraduationCap,
  Handshake,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EvidenceItem = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  summary: string;
};

export type ProjectItem = {
  title: string;
  outcome: string;
  skills: string[];
};

export const profile = {
  name: "Liam Ryan",
  headline: "Cybersecurity-focused candidate with a clear, employer-ready story.",
  intro:
    "I bring a practical security mindset, university learning, and workplace experience together in a way that helps teams reduce risk, communicate clearly, and keep improving.",
  location: "United Kingdom",
  audience:
    "Built for recruiters, hiring managers, and security teams who want a quick, plain-English view of potential, strengths, and working style.",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/liamryan391",
      icon: ExternalLink,
    },
  ],
};

export const employerSignals: EvidenceItem[] = [
  {
    title: "Security minded",
    detail:
      "Looks for weak points, follows evidence, and explains risks in language people can act on.",
    icon: ShieldCheck,
  },
  {
    title: "University grounded",
    detail:
      "Connects academic learning with practical examples, structured research, and clear written work.",
    icon: GraduationCap,
  },
  {
    title: "Workplace ready",
    detail:
      "Values reliability, communication, punctuality, and calm problem solving under pressure.",
    icon: BriefcaseBusiness,
  },
  {
    title: "People aware",
    detail:
      "Understands that strong cybersecurity depends on people, process, and trust as much as tools.",
    icon: Handshake,
  },
];

export const strengths: EvidenceItem[] = [
  {
    title: "Risk spotting",
    detail:
      "Able to notice patterns, ask useful questions, and separate urgent issues from background noise.",
    icon: SearchCheck,
  },
  {
    title: "Clear reporting",
    detail:
      "Turns technical findings into concise summaries, next steps, and business impact.",
    icon: ClipboardCheck,
  },
  {
    title: "Secure habits",
    detail:
      "Builds with careful access control, sensible passwords, privacy awareness, and documentation.",
    icon: LockKeyhole,
  },
  {
    title: "Professional growth",
    detail:
      "Actively learning, open to feedback, and motivated by roles where improvement is visible.",
    icon: BadgeCheck,
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "University",
    title: "Cybersecurity and computing foundation",
    place: "Academic study",
    summary:
      "Coursework and projects have built a base in security thinking, systems, networks, research, and communicating findings clearly.",
  },
  {
    period: "Work Experience",
    title: "Customer-facing and operational discipline",
    place: "Professional environments",
    summary:
      "Work experience has strengthened reliability, teamwork, accountability, and the ability to stay composed when priorities change.",
  },
  {
    period: "Now",
    title: "Building a cybersecurity career",
    place: "Graduate and entry-level opportunities",
    summary:
      "Focused on roles where security awareness, investigation, documentation, and a willingness to learn can make a real contribution.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Security case study",
    outcome:
      "Explained a real-world cyber incident in plain English, including what happened, why it mattered, and how similar risks can be reduced.",
    skills: ["Research", "Risk explanation", "Professional writing"],
  },
  {
    title: "Practical hardening checklist",
    outcome:
      "Created a clear checklist for safer accounts, devices, and everyday working habits that non-technical teams can follow.",
    skills: ["Security awareness", "Process design", "Communication"],
  },
  {
    title: "Portfolio evidence hub",
    outcome:
      "Built this site to present background, strengths, and evidence in a professional format aimed at cybersecurity employers.",
    skills: ["React", "TypeScript", "Frontend polish"],
  },
];

export const qualities = [
  "Reliable in day-to-day work",
  "Calm when solving problems",
  "Curious about how systems fail",
  "Comfortable explaining risk simply",
  "Motivated by practical security outcomes",
  "Ready to keep learning from experienced teams",
];

export const nextSteps = [
  {
    title: "Internship",
    detail: "A place to apply university learning in real security, IT, risk, or compliance work.",
    icon: UserRoundCheck,
  },
  {
    title: "Graduate role",
    detail: "An early-career role with mentoring, responsibility, and room to build evidence quickly.",
    icon: GraduationCap,
  },
  {
    title: "Entry-level security support",
    detail: "A team where careful documentation, investigation, and clear communication matter.",
    icon: ShieldCheck,
  },
];

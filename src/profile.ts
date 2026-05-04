import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Handshake,
  Linkedin,
  LockKeyhole,
  Mail,
  Network,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type EvidenceItem = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export type MetricItem = {
  value: string;
  label: string;
  detail: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  summary: string;
  achievements: string[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  context: string;
  outcome: string;
  skills: string[];
};

export type EducationItem = {
  award: string;
  result: string;
  period: string;
  focus: string;
};

export const profile = {
  name: "Liam Ryan",
  role: "Cyber Security MSc Graduate and System Interface Analyst",
  headline:
    "SOC-focused analyst who turns messy data, alerts, and stakeholder pressure into clear evidence and controlled action.",
  intro:
    "I currently support secure, high-volume Civil Service Pensions interface services for 270+ employers. My background blends client-facing investigation, SQL-led validation, root cause analysis, and hands-on security labs across Splunk, Suricata, Nmap, Burp Suite, and Linux.",
  location: "Liverpool, UK",
  target: "SOC Analyst, Cyber Security Analyst, or security operations support roles",
  availability:
    "Open to SOC Analyst, Cyber Security Analyst, and security operations roles.",
  links: [
    {
      label: "Email",
      href: "mailto:liam.ry99@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/liam-ryan-b61641189",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/liamryan391",
      icon: Github,
    },
  ] satisfies LinkItem[],
};

export const metrics: MetricItem[] = [
  {
    value: "270+",
    label: "employers supported",
    detail: "Civil Service Pensions interface work with strict service expectations.",
  },
  {
    value: "1.0% -> 0.4%",
    label: "recurring errors reduced",
    detail: "Month-on-month improvement through validation and trend analysis.",
  },
  {
    value: "MSc",
    label: "Cyber Security, Merit",
    detail: "Liverpool John Moores University, 69%, with network and web security focus.",
  },
  {
    value: "SOC",
    label: "lab development",
    detail: "Splunk triage, Suricata rules, RDP event review, and vulnerability tooling.",
  },
];

export const employerSignals: EvidenceItem[] = [
  {
    title: "Evidence-led investigator",
    detail:
      "Uses SQL, logs, validation checks, and timeline thinking to move from symptom to root cause.",
    icon: SearchCheck,
  },
  {
    title: "Security-aware operator",
    detail:
      "Understands data integrity, secure handling, operational risk, and the need for reliable controls.",
    icon: ShieldCheck,
  },
  {
    title: "Client-facing communicator",
    detail:
      "Explains technical issues clearly to employers, payroll providers, internal teams, and mixed audiences.",
    icon: Handshake,
  },
  {
    title: "Improvement builder",
    detail:
      "Builds practical tooling and repeatable checks that reduce manual work and stop repeat failures.",
    icon: BadgeCheck,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Dec 2025 - Present",
    title: "System Interface Analyst",
    place: "Capita, Civil Service Pensions",
    summary:
      "Client-facing analyst supporting secure, high-volume pension data interface processes across a large employer base.",
    achievements: [
      "Maintain operational service delivery for 270+ employers under SLA and time pressure.",
      "Built Clarity, a Microsoft Access application that combines multiple data sources for migration and BAU oversight.",
      "Reduced recurring interface error cases from 1.0% to 0.4% through targeted validation and control improvements.",
      "Coordinate root cause analysis and remediation with employers, payroll providers, and internal teams.",
    ],
  },
  {
    period: "Oct 2023 - Dec 2025",
    title: "System Interface Analyst",
    place: "MyCSP Ltd, Civil Service Pensions",
    summary:
      "Troubleshot payroll, submission, and system faults while protecting data quality before loads reached the administration platform.",
    achievements: [
      "Designed recovery plans for overdue submissions and validated outputs in SQL.",
      "Used SQL to reconcile large datasets, surface exceptions, and reduce operational risk.",
      "Created validation scripts to flag M1 system errors and duplicate employee record issues earlier.",
      "Translated technical findings into clear actions and governance-ready documentation.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Security monitoring and detection",
    icon: Activity,
    skills: [
      "Splunk search refinement",
      "timeline analysis",
      "event triage",
      "RDP-related investigation",
      "Suricata signatures",
      "alert review",
    ],
  },
  {
    title: "Security testing and investigation",
    icon: ShieldAlert,
    skills: [
      "Nmap",
      "Burp Suite",
      "Greenbone",
      "Metasploit",
      "Hydra",
      "Searchsploit",
      "CVE validation",
    ],
  },
  {
    title: "Data, automation, and validation",
    icon: Database,
    skills: [
      "SQL reconciliation",
      "exception analysis",
      "trend analysis",
      "Python scripting",
      "Microsoft Access apps",
      "API data exchange",
    ],
  },
  {
    title: "Platforms and engineering habits",
    icon: Terminal,
    skills: [
      "Windows",
      "Linux",
      "GitHub",
      "GitLab",
      "Docker basics",
      "VS Code",
      "JUnit",
    ],
  },
];

export const education: EducationItem[] = [
  {
    award: "MSc Cyber Security",
    result: "Merit, 69%",
    period: "2022 - 2023",
    focus:
      "Network scanning, SIEM and IDS concepts, secure web testing, threat analysis, vulnerability reporting, and secure development.",
  },
  {
    award: "BSc (Hons) Computer Science",
    result: "2:1",
    period: "2019 - 2022",
    focus:
      "Software engineering fundamentals, systems thinking, programming, databases, testing, and project delivery.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Secure Network Scanner and Encrypted Reporting",
    context: "MSc project",
    outcome:
      "Built a UI-triggered scanning workflow using Nmap, generated structured diagnostics with network metadata, applied public-key encryption, and added Red / Yellow / Green host prioritisation.",
    skills: ["Nmap", "encryption", "risk scoring", "secure reporting"],
  },
  {
    title: "Clarity Operational Tracking Application",
    context: "Capita / Civil Service Pensions",
    outcome:
      "Designed an Access-based application that brings multiple data sources into one operational view, helping analysts track outstanding, due, and pended work during migration and BAU activity.",
    skills: ["Access", "SQL", "workflow visibility", "service control"],
  },
  {
    title: "M1 Interface Validation Scripts",
    context: "MyCSP improvement work",
    outcome:
      "Created SQL checks that surfaced missed M1 errors and duplicate employee record issues earlier, reducing manual investigation time and standardising validation.",
    skills: ["SQL", "root cause analysis", "data integrity", "automation"],
  },
  {
    title: "Barclays Tech Innovation Challenge",
    context: "Finalist and team lead",
    outcome:
      "Led a small team using Scrum-style planning, shaped a viable concept, presented to non-technical stakeholders, and considered privacy and security implications.",
    skills: ["team leadership", "Scrum", "presentation", "privacy thinking"],
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    detail: "AI-900",
    icon: BookOpenCheck,
  },
  {
    title: "CompTIA Security+",
    detail: "SY0-701 currently studying",
    icon: ClipboardCheck,
  },
  {
    title: "SOC triage practice",
    detail: "Splunk, Suricata, CTFs, web and network security labs",
    icon: LockKeyhole,
  },
];

export const workingStyle: EvidenceItem[] = [
  {
    title: "Calm under pressure",
    detail:
      "Used to operational deadlines, escalations, and turning ambiguous issues into next steps.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Plain-English reporting",
    detail:
      "Comfortable converting technical findings into business impact, remediation steps, and audit-friendly notes.",
    icon: FileText,
  },
  {
    title: "Curious about failure paths",
    detail:
      "Enjoys understanding how systems break, how controls fail, and how teams can catch issues earlier.",
    icon: Network,
  },
  {
    title: "Hands-on learner",
    detail:
      "Actively building practical security evidence through labs, tooling, CTFs, and project work.",
    icon: Code2,
  },
];

export const roleTargets: EvidenceItem[] = [
  {
    title: "SOC Analyst",
    detail:
      "Alert triage, investigation notes, escalation packs, and detection improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Cyber Security Analyst",
    detail:
      "Risk review, vulnerability investigation, secure reporting, and stakeholder support.",
    icon: SearchCheck,
  },
  {
    title: "Security Operations Support",
    detail:
      "Reliable operational control, documentation, queue handling, and evidence-based improvement.",
    icon: Trophy,
  },
];

export const heroProof = [
  "SQL-led investigation",
  "secure data interfaces",
  "Splunk and Suricata labs",
  "root cause analysis",
  "stakeholder escalation",
];

export const contactNote =
  "For recruiters and hiring managers: I am based in Liverpool and open to SOC, cyber security analyst, and security operations conversations.";

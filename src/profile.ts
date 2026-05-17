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

export type IconTextItem = {
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

export type ProjectStatus = "Completed" | "In progress" | "Lab" | "Planned";

export type ProjectItem = {
  title: string;
  context: string;
  status: ProjectStatus;
  outcome: string;
  employerValue: string;
  proofPoints: string[];
  skills: string[];
  githubUrl?: string;
  writeupUrl?: string;
  writeupLabel?: string;
};

export type EducationItem = {
  award: string;
  result: string;
  period: string;
  focus: string;
};

export const profile = {
  name: "Liam Ryan",
  role: "SOC Analyst Candidate",
  headline:
    "Cyber Security MSc graduate with operational investigation experience, SQL-led validation, and hands-on security lab practice.",
  intro:
    "I support secure, high-volume Civil Service Pensions data interfaces for 270+ employers, investigating failures, protecting data integrity, and translating technical findings into clear action. I am now targeting SOC and cyber security operations roles where evidence, communication, and calm triage matter.",
  location: "Liverpool, UK",
  target: "SOC Analyst, Cyber Security Analyst, or security operations support roles",
  availability: "Open to SOC Analyst and entry-level cyber security opportunities.",
  cvHref: "/Liam-Ryan-CV.pdf",
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

export const about = {
  title: "About Liam",
  paragraphs: [
    "I am a Cyber Security MSc graduate with a BSc in Computer Science and professional experience as a System Interface Analyst in the Civil Service Pensions environment.",
    "My current work involves secure, high-volume data interface support for 270+ employers. I use SQL-led validation, root cause analysis, SLA-driven investigation, data integrity checks, and clear stakeholder communication to resolve issues and reduce repeat failures.",
    "I am now focused on SOC Analyst, Cyber Security Analyst, and security operations roles where I can apply my investigation discipline, documentation habits, and growing hands-on experience with SIEM, IDS, vulnerability investigation, and incident response fundamentals.",
  ],
  highlights: [
    "MSc Cyber Security with SIEM, IDS, secure web testing, and vulnerability analysis focus",
    "BSc Computer Science background with programming, databases, testing, and project delivery",
    "Operational investigation experience in a secure pension data environment",
    "Hands-on practice with Splunk, Suricata, Nmap, Burp Suite, and security labs",
  ],
};

export const metrics: MetricItem[] = [
  {
    value: "270+",
    label: "employers supported",
    detail: "Secure operational interface work in the Civil Service Pensions environment.",
  },
  {
    value: "1.0% -> 0.4%",
    label: "recurring errors reduced",
    detail: "Month-on-month improvement through validation, trend analysis, and controls.",
  },
  {
    value: "MSc",
    label: "Cyber Security, Merit",
    detail: "LJMU degree work across SIEM, IDS, secure web testing, and reporting.",
  },
  {
    value: "SOC",
    label: "career focus",
    detail: "Alert triage, log analysis, IDS tuning, escalation notes, and evidence-based reporting.",
  },
];

export const recruiterSignals: IconTextItem[] = [
  {
    title: "Evidence-led investigation",
    detail:
      "Uses SQL, logs, timelines, and repeat checks to prove what failed, what changed, and what should happen next.",
    icon: SearchCheck,
  },
  {
    title: "Security operations mindset",
    detail:
      "Understands data integrity, access control, operational risk, escalation, and the need for auditable work.",
    icon: ShieldCheck,
  },
  {
    title: "Clear stakeholder updates",
    detail:
      "Turns technical investigation into practical actions for employers, payroll providers, and internal teams.",
    icon: Handshake,
  },
  {
    title: "Continuous improvement",
    detail:
      "Builds validation scripts and tracking tools that reduce manual work and catch repeat failure patterns earlier.",
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
      "Designed and built Clarity, an Access-based operational application that combines multiple data sources for migration and BAU oversight.",
      "Reduced recurring interface error cases from 1.0% to 0.4% through targeted validation, trend analysis, and practical control improvements.",
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
    title: "SOC monitoring and detection",
    icon: Activity,
    skills: [
      "alert triage",
      "log analysis",
      "SIEM investigation",
      "Splunk searches",
      "timeline analysis",
      "escalation notes",
      "MITRE ATT&CK awareness",
    ],
  },
  {
    title: "IDS, vulnerability, and web testing",
    icon: ShieldAlert,
    skills: [
      "Suricata rules",
      "IDS tuning",
      "Nmap",
      "Burp Suite",
      "Greenbone",
      "Metasploit",
      "Hydra",
      "CVE validation",
    ],
  },
  {
    title: "Data, automation, and reporting",
    icon: Database,
    skills: [
      "SQL reconciliation",
      "exception analysis",
      "root cause analysis",
      "trend analysis",
      "Python scripting",
      "Access applications",
      "evidence-based reporting",
    ],
  },
  {
    title: "Systems and security foundations",
    icon: Terminal,
    skills: [
      "Windows",
      "Linux",
      "Microsoft 365 security basics",
      "DNS and HTTP(S)",
      "TCP/IP",
      "VPN concepts",
      "Docker basics",
      "GitHub",
    ],
  },
];

export const education: EducationItem[] = [
  {
    award: "MSc Cyber Security",
    result: "Merit, 69%",
    period: "2022 - 2023",
    focus:
      "Network scanning and secure reporting, SIEM and IDS concepts, secure web testing, threat and vulnerability analysis, and secure development practices.",
  },
  {
    award: "BSc (Hons) Computer Science",
    result: "2:1",
    period: "2019 - 2022",
    focus:
      "Programming, databases, testing, software engineering fundamentals, and project delivery.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "SOC Home Lab",
    context: "Self-directed security lab",
    status: "In progress",
    outcome:
      "Building a practical home lab focused on log collection, alert triage, suspicious activity review, escalation notes, and repeatable investigation workflows.",
    employerValue:
      "Shows active preparation for SOC work, including alert handling, documentation, and incident response fundamentals.",
    proofPoints: [
      "Practice triaging events from endpoint and network sources",
      "Write investigation notes with evidence, impact, and next steps",
      "Map suspicious behaviour to MITRE ATT&CK-style tactics where appropriate",
      "Develop a repeatable process for moving from alert to escalation decision",
    ],
    skills: ["alert triage", "log analysis", "incident response basics", "MITRE ATT&CK", "reporting"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Lab write-up coming soon",
  },
  {
    title: "Splunk Detection Dashboard",
    context: "SIEM practice",
    status: "Lab",
    outcome:
      "Creating Splunk searches and dashboard views for suspicious authentication activity, RDP-related events, event timelines, and investigation summaries.",
    employerValue:
      "Demonstrates SIEM investigation thinking: refine searches, reduce noise, build timelines, and communicate what the activity suggests.",
    proofPoints: [
      "Search refinement for suspicious login patterns",
      "Timeline analysis for authentication events",
      "Dashboard views for repeat investigation questions",
      "Escalation-friendly notes for analyst handover",
    ],
    skills: ["Splunk", "SIEM investigation", "RDP events", "timeline analysis", "alert triage"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Write-up coming soon",
  },
  {
    title: "Suricata IDS Rules",
    context: "IDS detection lab",
    status: "Lab",
    outcome:
      "Practising Suricata rule creation, alert review, signature tuning, and detection improvement against network activity and known suspicious patterns.",
    employerValue:
      "Shows understanding of IDS tuning, alert quality, and the difference between a noisy signal and an actionable detection.",
    proofPoints: [
      "Create and tune Suricata signatures",
      "Review alerts for clarity and actionability",
      "Document detection intent and expected behaviour",
      "Improve signal quality through practical testing",
    ],
    skills: ["Suricata", "IDS tuning", "network security", "packet analysis", "detection engineering basics"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Rule write-up coming soon",
  },
  {
    title: "Microsoft 365 Security Lab",
    context: "Identity and cloud security practice",
    status: "Planned",
    outcome:
      "Planned lab covering Microsoft 365 security basics, identity-related risk, audit log review, conditional access concepts, and user activity investigation.",
    employerValue:
      "Connects SOC investigation skills to common enterprise identity and productivity environments.",
    proofPoints: [
      "Review sign-in and audit events",
      "Practise identity-focused investigation notes",
      "Study conditional access and MFA-related controls",
      "Document user-risk and escalation scenarios",
    ],
    skills: ["Microsoft 365", "identity security", "audit logs", "MFA", "conditional access"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Planned write-up",
  },
  {
    title: "Secure Network Scanner and Encrypted Reporting",
    context: "MSc project",
    status: "Completed",
    outcome:
      "Built a UI-triggered workflow that launches discovery and Nmap-based scanning, creates structured diagnostics, encrypts reports with public-key cryptography, and marks host risk with Red / Yellow / Green priority.",
    employerValue:
      "Shows the ability to turn security tooling into a repeatable workflow with risk communication built in.",
    proofPoints: [
      "Nmap-based discovery and scanning",
      "Structured Wi-Fi and network metadata",
      "Public-key encrypted reporting",
      "Risk indicator for faster prioritisation",
    ],
    skills: ["Nmap", "secure reporting", "encryption", "risk scoring", "vulnerability investigation"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Project write-up coming soon",
  },
  {
    title: "M1 Interface Validation Scripts",
    context: "MyCSP improvement work",
    status: "Completed",
    outcome:
      "Created SQL checks that surfaced missed M1 errors and duplicate employee record issues earlier, reducing manual investigation time and standardising validation.",
    employerValue:
      "Maps directly to SOC habits: define the signal, reduce noise, catch repeat patterns, document the evidence, and improve the process.",
    proofPoints: [
      "Exception analysis over large datasets",
      "Earlier error surfacing",
      "Repeatable validation checks",
      "Governance-ready investigation notes",
    ],
    skills: ["SQL", "root cause analysis", "data integrity", "automation", "evidence-based reporting"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Internal project summary coming soon",
  },
  {
    title: "Clarity Operational Tracking Application",
    context: "Capita / Civil Service Pensions",
    status: "Completed",
    outcome:
      "Designed an Access-based application that combines multiple data sources into one operational view, giving analysts clearer visibility of outstanding, due, and pended work.",
    employerValue:
      "Shows practical improvement thinking: identify the visibility gap, build a usable tool, and improve team control over operational work.",
    proofPoints: [
      "Multi-source data tracking",
      "Migration and BAU oversight",
      "Clearer workload control",
      "Improved service visibility for analysts",
    ],
    skills: ["Access", "SQL", "workflow visibility", "service control", "stakeholder reporting"],
    githubUrl: "#",
    writeupUrl: "#",
    writeupLabel: "Internal project summary coming soon",
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
    title: "Ongoing SOC development",
    detail: "Splunk labs, Suricata tuning, CTFs, web testing, and network security practice",
    icon: LockKeyhole,
  },
];

export const workingStyle: IconTextItem[] = [
  {
    title: "Calm under pressure",
    detail:
      "Used to escalations, deadlines, and high-volume operational queues where accuracy still matters.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Audit-friendly documentation",
    detail:
      "Writes progress updates, evidence, and remediation notes that mixed audiences can trust.",
    icon: FileText,
  },
  {
    title: "Curious about failure paths",
    detail:
      "Looks for why systems fail, where controls should catch issues, and how teams can prevent recurrence.",
    icon: Network,
  },
  {
    title: "Hands-on learning habit",
    detail:
      "Keeps building practical evidence through labs, tooling, projects, and security exercises.",
    icon: Code2,
  },
];

export const roleTargets: IconTextItem[] = [
  {
    title: "SOC Analyst",
    detail:
      "Alert triage, log analysis, escalation notes, SIEM investigation, and detection improvement.",
    icon: ShieldCheck,
  },
  {
    title: "Cyber Security Analyst",
    detail:
      "Risk review, vulnerability investigation, secure reporting, stakeholder updates, and evidence-based recommendations.",
    icon: SearchCheck,
  },
  {
    title: "Security Operations Support",
    detail:
      "Operational control, documentation, queue handling, data integrity checks, and continuous improvement.",
    icon: Trophy,
  },
];

export const heroProof = [
  "SQL-led investigation",
  "270+ employer interface environment",
  "Splunk and Suricata practice",
  "root cause analysis",
  "evidence-based reporting",
];

export const proofFlow = [
  "Identify the signal",
  "Validate the evidence",
  "Explain the impact",
  "Improve the control",
];

export const contactNote =
  "Based in Liverpool and open to SOC, cyber security analyst, and security operations conversations.";

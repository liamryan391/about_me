# Liam Ryan About Me Website

This repository contains the source code for my personal cybersecurity portfolio website.

The website is aimed at recruiters, hiring managers, and security teams who want a quick, clear view of my SOC analyst direction, technical skills, university background, work experience, and project evidence.

## Purpose

The page is not meant to be a copy of my CV. It is a front-end portfolio that turns the strongest parts of my CV into a more visual, interactive, and employer-friendly experience.

It highlights:

- SOC analyst and cyber security analyst career focus
- Civil Service Pensions interface investigation experience
- SQL-led validation, reconciliation, and root cause analysis
- MSc Cyber Security and BSc Computer Science background
- Security labs and tools including Splunk, Suricata, Nmap, Burp Suite, Greenbone, Metasploit, and Hydra
- Project evidence such as the secure network scanner, Clarity tracking application, validation scripts, and Barclays Tech Innovation Challenge

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

React, TypeScript, and Tailwind CSS are implementation choices for the website itself. They are not presented as the main subject of the portfolio content.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing Content

Most portfolio content lives in:

```text
src/profile.ts
```

The main page layout lives in:

```text
src/App.tsx
```

Global styling and the Tailwind import live in:

```text
src/styles.css
```

## Notes

The site is designed as a living portfolio. Future improvements can include a downloadable CV, deeper SOC lab write-ups, project screenshots, GitHub links for technical evidence, and a dedicated case-study page for the MSc network scanner.

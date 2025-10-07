# Implementation Plan: [WEBSITE FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link to spec.md]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

## 1. Summary

[A brief, one-sentence summary of the feature's goal, e.g., "This plan outlines the creation of the compliant Refund Policy page."]

## 2. Constitution Check *(mandatory)*

*This gate must be passed before implementation begins. The feature must align with all relevant principles.*

- [ ] **I. Vision & Design**: Does the proposed feature align with the site's professional, modern, and responsive design ethos?
- [ ] **II. Content Architecture**: Does this feature correctly implement a required component of the site's content architecture (e.g., a mandatory policy page, a service listing)?
- [ ] **III. SEO & Technical Standards**: Does the plan adhere to the **Static HTML + CSS only** rule and SEO best practices?
- [ ] **IV. Compliance (NON-NEGOTIABLE)**: Does the feature avoid all "red flag" terms and meet all relevant compliance checklist items?

## 3. Technical Plan

### Technology Stack
- **Primary Language**: Static HTML5
- **Styling**: CSS3 (No frameworks like Bootstrap/Tailwind unless explicitly justified)
- **JavaScript**: Vanilla JS only for light interactivity (e.g., form validation). No heavy frameworks (React, Vue, etc.).
- **Build/Deployment**: Manual FTP/SFTP or simple CI/CD pipeline for static sites.

### Performance & SEO Goals
- **Lighthouse Score**: Target ≥ 90 for Performance, Accessibility, and SEO.
- **SEO Checklist**:
  - [ ] Page has a single `<h1>` tag.
  - [ ] All `<img>` tags have descriptive `alt` text.
  - [ ] Page `<title>` is under 60 characters.
  - [ ] `meta name="description"` is present and under 160 characters.
  - [ ] Schema.org structured data will be included if applicable (e.g., `LocalBusiness`).

## 4. Project Structure

<!--
  The following is the standard project structure for this static website.
  Identify the files that will be CREATED or MODIFIED for this feature.
-->

```
/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── portfolio.html
├── contact.html
├── checkout-demo.html
├── policies/
│   ├── refund.html
│   ├── delivery.html
│   ├── privacy.html
│   └── aup.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── fonts/
```

**Files to be Modified/Created for this Feature**:
- `[path/to/file.html]`
- `css/style.css`
- `[any other relevant files]`

## 5. Complexity Justification

*Fill this section ONLY if the feature requires a deviation from the established constitutional standards (e.g., adding a JavaScript library or a backend component).*

| Deviation from Constitution | Justification | Simpler Alternative Rejected Because... |
|-----------------------------|---------------|-----------------------------------------|
| [e.g., Using a JS library]  | [e.g., For a required interactive map] | [e.g., A static image map lacks usability] |
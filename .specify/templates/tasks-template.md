# Tasks: [WEBSITE FEATURE NAME]

**Input**: Implementation Plan from `/specs/[###-feature-name]/plan.md`

<!--
  This template generates a task list for building a feature for the static website.
  The tasks are organized into a logical sequence, from structure and content to styling and final compliance checks.
  The agent MUST replace the placeholder tasks below with concrete actions based on the feature plan.
-->

---

## Phase 1: HTML Structure & Content

**Goal**: Create the raw HTML file, add all necessary text content, and ensure the structure is semantic and accessible.

- [ ] **T001**: Create the new file at `[path/to/feature.html]`.
- [ ] **T002**: Set up the basic HTML boilerplate (doctype, head, body).
- [ ] **T003**: Implement the main page structure using semantic tags (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`).
- [ ] **T004**: Add all text content as specified in the feature requirements, including headings (`<h1>`, `<h2>`, etc.) and paragraphs (`<p>`).
- [ ] **T005**: Add all images with descriptive `alt` text (`<img src="..." alt="...">`).
- [ ] **T006**: Create all necessary links (`<a href="...">`).

**Checkpoint**: The page should be readable and structurally complete in a browser, even without any styling.

---

## Phase 2: CSS Styling

**Goal**: Apply styles to the HTML structure to match the website's design principles.

- [ ] **T007**: Add a `<link>` to the main stylesheet in the `<head>` of `[feature.html]`.
- [ ] **T008**: Add CSS classes to the HTML elements in `[feature.html]` as needed.
- [ ] **T009**: Implement the styles for the new feature in `css/style.css`.
- [ ] **T010**: Ensure the new styles are responsive and work on both mobile and desktop screen sizes.
- [ ] **T011**: Verify that the styling is consistent with the overall look and feel of the website.

**Checkpoint**: The page should be visually complete and match the intended design.

---

## Phase 3: JavaScript Interactivity (Optional)

**Goal**: Add any light, necessary user interactions. Only include this phase if the feature requires it.

- [ ] **T012**: Add a `<script>` tag to `[feature.html]`, linking to `js/main.js`.
- [ ] **T013**: Write the necessary vanilla JavaScript in `js/main.js` to implement the required functionality (e.g., form validation, simple animations).
- [ ] **T014**: Test the interactive elements to ensure they work as expected.

**Checkpoint**: Any interactive elements on the page should be fully functional.

---

## Phase 4: Final Review & Compliance Checklist

**Goal**: Perform a final check to ensure the feature meets all constitutional requirements before it's considered "done."

- [ ] **T015**: **SEO**: Verify the page has one `<h1>`, a `<title>` under 60 chars, and a meta description under 160 chars.
- [ ] **T016**: **Compliance**: Proofread all content to ensure there are no "red flag" terms.
- [ ] **T017**: **Technical**: Confirm the page is served over HTTPS and that all links work correctly.
- [ ] **T018**: **Performance**: Run a Lighthouse audit and ensure Performance, Accessibility, and SEO scores are ≥ 90.
- [ ] **T019**: **Cross-Browser Testing**: Briefly check the page in Chrome, Firefox, and Safari to ensure consistent rendering.

**Feature Complete**: Once all tasks in this phase are checked, the feature is ready for deployment.
# Tasks: Merchant-Ready IT Services Website

**Input**: Design documents from `/specs/001-app-merchant-ready/`

---

## Phase 1: Setup (Shared Infrastructure)

**Goal**: Create the foundational file and folder structure for the entire project.

- [ ] **T001**: Create the root directory structure: `css/`, `js/`, `assets/images/`, `assets/fonts/`.
- [ ] **T002**: Create the main stylesheet at `css/style.css` and include basic resets and font imports.
- [ ] **T003**: Create the main JavaScript file at `js/main.js`.
- [ ] **T004**: Create an empty `index.html` to serve as the initial entry point.

**Checkpoint**: The basic folder structure is in place and ready for content.

---

## Phase 2: Homepage & Core Layout

**Goal**: Build the homepage, which defines the site's header, footer, and overall style.

- [ ] **T005**: Implement the HTML structure for the common site header (logo, navigation menu) in `index.html`.
- [ ] **T006**: Implement the HTML structure for the common site footer (legal info, policy links, contact details) in `index.html`.
- [ ] **T007**: Implement the HTML for the hero section, trust badges, and services preview on `index.html`.
- [ ] **T008**: [P] Style the common header and footer in `css/style.css`.
- [ ] **T009**: [P] Style the homepage content (hero, trust badges, services) in `css/style.css`.
- [ ] **T010**: Ensure the homepage is fully responsive.

**Checkpoint**: The homepage is visually and structurally complete, establishing the template for all other pages.

---

## Phase 3: Content Pages

**Goal**: Create the primary informational pages of the website.

- [ ] **T011**: [P] Create `services.html`. Copy the header/footer from `index.html` and add the HTML structure for the service listings with PKR prices.
- [ ] **T012**: [P] Create `about.html`. Copy the header/footer and add the HTML for the company info and legal details (SECP, NTN).
- [ ] **T013**: [P] Create `portfolio.html`. Copy the header/footer and add the HTML for the project gallery and testimonials.
- [ ] **T014**: [P] Create `contact.html`. Copy the header/footer and add the HTML for the contact info and contact form.
- [ ] **T015**: Add the necessary CSS for all new content pages to `css/style.css` and ensure they are responsive.

**Checkpoint**: All main content pages are complete and styled.

---

## Phase 4: Compliance & Legal Pages

**Goal**: Implement the pages that are critical for payment gateway approval.

- [ ] **T016**: [P] Create `policies.html`. Copy the header/footer and add the HTML structure and content for the Refund, Delivery, Privacy, and AUP sections.
- [ ] **T017**: [P] Create `checkout.html`. Copy the header/footer and add the HTML for the demo product (PKR 50).
- [ ] **T018**: Style the policy and checkout pages in `css/style.css`.
- [ ] **T019**: Implement the vanilla JavaScript in `js/main.js` for the contact form submission.

**Checkpoint**: All legal and compliance-critical pages are complete.

---

## Phase 5: Finalization & SEO

**Goal**: Perform the final checks and add the remaining assets to ensure the site is ready for deployment.

- [ ] **T020**: [P] Create the `robots.txt` file in the root directory.
- [ ] **T021**: [P] Create the `sitemap.xml` file, including links to all HTML pages.
- [ ] **T022**: Populate the `<title>` and `<meta name="description">` tags for every HTML page.
- [ ] **T023**: Add Schema.org `LocalBusiness` structured data to `index.html`.
- [ ] **T024**: Add all images to the `assets/images/` directory and ensure all `<img>` tags have `alt` text.

**Checkpoint**: The website is functionally complete and optimized for search engines.

---

## Phase 6: Final Review & Deployment

**Goal**: Run a final quality assurance check before considering the project complete.

- [ ] **T025**: **Compliance Review**: Manually review every page to ensure no "red flag" terms are present.
- [ ] **T026**: **Link Check**: Click every link on the website to ensure there are no broken links.
- [ ] **T027**: **Lighthouse Audit**: Run a Lighthouse audit on the live or local site and verify that Performance, Accessibility, and SEO scores are all ≥ 90.
- [ ] **T028**: **Cross-Browser Check**: Test the website in Chrome, Firefox, and Safari.

---

## Implementation Strategy

### MVP First (Homepage + Policies)

1.  Complete **Phase 1: Setup**.
2.  Complete **Phase 2: Homepage & Core Layout**.
3.  Implement the `policies.html` page from **Phase 4**.
4.  **STOP and VALIDATE**: At this point, you have a compliant, single-page presence with all necessary legal information, which can be used for initial reviews.

### Incremental Delivery

1.  Complete the MVP as described above.
2.  Add the Content Pages (**Phase 3**) one by one.
3.  Add the remaining Compliance & Legal Pages (**Phase 4**).
4.  Complete **Phase 5 & 6**.

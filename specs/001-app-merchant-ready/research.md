# Research & Decisions: Merchant-Ready Website

## Decision: Technology Stack

- **Decision**: The website will be built using **Static HTML5, CSS3, and minimal vanilla JavaScript**.
- **Rationale**:
    - **Compliance**: A simple, static site is the lowest-risk approach for payment gateway approval. It avoids complex server-side logic that could be a red flag.
    - **Performance**: Static sites are inherently fast, making it easier to achieve the Lighthouse performance target of ≥ 90.
    - **Security**: With no database or complex backend, the attack surface is minimal.
    - **Maintainability**: The codebase will be simple, easy to understand, and easy for any web developer to maintain.
- **Alternatives Considered**:
    - **WordPress/CMS**: Rejected due to unnecessary complexity, potential for security vulnerabilities, and slower performance compared to a static site.
    - **React/Vue/Static Site Generators**: Rejected as they introduce a build step and tooling complexity that is not required for this project's scope. The goal is maximum simplicity.

## Decision: SEO Strategy

- **Decision**: SEO will be handled by adhering to on-page best practices directly in the HTML.
- **Rationale**: For a small, static website, on-page SEO (correct tags, alt text, meta descriptions, sitemap) is the most effective strategy. It provides a solid foundation without the need for complex SEO tools or plugins.
- **Alternatives Considered**:
    - **No SEO**: Rejected as it would miss the opportunity to attract organic traffic.
    - **Advanced SEO (e.g., server-side rendering)**: Not applicable or necessary for a static website.

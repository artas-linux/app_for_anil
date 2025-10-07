# Data Model: Website Pages

This project is a static website and does not have a traditional data model with a database. The primary "entities" are the pages themselves.

## Entity: Webpage

Represents a single HTML file in the site structure.

### Attributes

- **`title`** (string): The content of the `<title>` tag. Must be unique and under 60 characters.
- **`meta_description`** (string): The content of the `<meta name="description">` tag. Must be under 160 characters.
- **`content`** (HTML): The semantic HTML content within the `<body>` of the page.

### Pages (Instances of the Webpage Entity)

1.  **`index.html`**: The homepage.
    - **Purpose**: Presents the main value proposition, trust badges, and a preview of services.
2.  **`services.html`**: Services page.
    - **Purpose**: Lists all available IT services with their corresponding PKR prices.
3.  **`about.html`**: About Us page.
    - **Purpose**: Contains the company's legal information (SECP, NTN) and mission.
4.  **`portfolio.html`**: Portfolio page.
    - **Purpose**: Showcases past projects and client testimonials.
5.  **`policies.html`**: Policies page.
    - **Purpose**: A single page containing the Refund, Delivery, Privacy, and Acceptable Use policies.
6.  **`contact.html`**: Contact page.
    - **Purpose**: Provides contact details and a simple contact form.
7.  **`checkout.html`**: Demo Checkout page.
    - **Purpose**: A simple page with a test product to demonstrate the checkout flow for compliance review.

# Flow Networks Website Project Manifest

**Overall Goal:** Build a high-converting, SEO-optimized, and visually stunning marketing website that clearly communicates the value of the Flow platform and its constituent products and services.

---

## Phase 1: Foundation & Homepage (Completed)

This phase established the project's technical and visual groundwork.

- [x] **Initial Setup:** React, TypeScript, Tailwind CSS configuration.
- [x] **Core UI Components:** Button, Accordion, Sheet, Navigation Menu.
- [x] **Visual Identity & Branding:** Implemented color scheme, fonts, glow effects, and animated backgrounds.
- [x] **SEO & AI Optimization Foundation:** Implemented `index.html` metadata, JSON-LD schema, and semantic HTML best practices.
- [x] **Information Architecture:** Implemented the definitive sitemap into the navigation and footer structures.
- [x] **Homepage (`/`) Construction:**
    - [x] Hero Section
    - [x] Core Offering Section
    - [x] "Our Customers" Logo Section
    - [x] "Features" (Platform Toolkit) Section
    - [x] "Monetize Your WiFi" (CNNTAP) Section
    - [x] "Our Integrated Product Suite" Section

---

## Phase 2: Core Page Development (In Progress)

This phase involves building out the primary pages based on the sitemap.

### **Current:** Products Overview Page (`/products`)

- [x] **Page: Products Overview (`/products`)**
    - [x] **Objective:** Create a visually engaging landing page that introduces the entire product ecosystem and directs users to detailed product pages.
    - [x] **Content Sections:**
        - [x] **Hero Section:** Headline: "The Building Blocks of Your Intelligent Venue." Sub-headline explaining how each product contributes to the Flow platform.
        - [x] **Core Platforms Section:** A grid/card layout for each core product (Intelligent WiFi, All Axxess, Everlytic, CNNTAP). Each card will have an icon, title, short description, and a "Learn More" button.
        - [x] **Services & Add-Ons Section:** A distinct section for secondary offerings (Friendly WiFi, Internet Connectivity, Professional Services).
        - [x] **CTA Section:** A final call-to-action to "Book a Demo" or "Contact Sales".

### **Next Up:**

- [ ] **Page: Intelligent Venue WiFi (`/products/intelligent-wifi`)**
    - [ ] Product-specific Hero section.
    - [ ] "How it Works" visual diagram/flowchart.
    - [ ] Detailed feature breakdown (Connect, Capture, Engage).
    - [ ] Pricing Plans Comparison Table.
    - [ ] Section detailing the Add-Ons (Paid WiFi, Surveys, etc.).
    - [ ] Testimonials/Case Study snippet.
    - [ ] Technical specifications/integrations section.

- [ ] **Page: Solutions Overview (`/solutions`)**
    - [ ] Hero section explaining how Flow solves business problems.
    - [ ] Categorized grid of solutions (AI & Automation, Business Growth, Venue Solutions).
    - [ ] Section highlighting Professional Services.
    - [ ] CTA to explore a specific solution.

- [ ] **Page: Industries Overview (`/industries`)**
    - [ ] Hero section focused on vertical-specific expertise.
    - [ ] Interactive grid or list of all target industries.
    - [ ] CTA to view a specific industry page.

- [ ] **(Template): Individual Industry Page (e.g., `/industries/retail`)**
    - [ ] Create one reusable template for all industry pages.
    - [ ] Hero with industry-specific imagery and title.
    - [ ] Section detailing challenges and solutions for that industry.
    - [ ] List of relevant Flow products/features.
    - [ ] Industry-specific case study highlight.

- [ ] **Page: Partners (`/partners`)**
    - [ ] Section for Technology Partners with logos and descriptions.
    - [ ] Section for the Partner Program (Resellers, Agents, Affiliates) with clear CTAs to join.

- [ ] **Page: Resources (`/resources`)**
    - [ ] Hub page linking to Case Studies, Guides, and Tools.
    - [ ] Filterable grid for Case Studies.
    - [ ] Layout for individual Guide/Article pages.

- [ ] **Page: Company / About Us (`/company/about-us`)**
    - [ ] Our mission and vision section.
    - [ ] Team/Leadership showcase.
    - [ ] Careers information and CTA.

- [ ] **Page: Contact Us (`/contact`)**
    - [ ] Contact form.
    - [ ] Office locations/map.
    - [ ] Direct contact details for sales and support.

---

## Phase 3: Finalization & Deployment Prep (To-Do)

This phase focuses on site-wide consistency and technical readiness.

- [ ] **Routing Implementation:** Replace mock routing with a proper SPA routing solution.
- [ ] **Global SEO Pass:** Ensure every page has unique, optimized meta titles and descriptions.
- [ ] **Accessibility (A11y) Audit:** Review the site for WCAG compliance.
- [ ] **Performance Optimization:** Image optimization, code splitting, and final checks on Core Web Vitals.
- [ ] **Deployment Files:** Create `robots.txt` and `sitemap.xml`.

---

## Phase 4: AI Integration (Future)

This phase outlines the future goal of creating a dedicated AI ingestion pipeline.

- [ ] **Knowledge Base Consolidation:** Review all generated pages and ensure content is structured optimally for AI parsing (clear headings, direct answers, semantic HTML).
- [ ] **PDF/External Data Ingestion Strategy:** Plan a pipeline to process supplementary documents (like partner PDFs) into a machine-readable format (e.g., Markdown or JSON).
- [ ] **Vector Database & Search:** Plan the architecture for storing content embeddings in a vector database to enable semantic search for a future AI chatbot.
- [ ] **Conversational AI Integration:** Design and implement a Gemini-powered chatbot that queries the knowledge base to provide contextual, accurate answers to user questions.

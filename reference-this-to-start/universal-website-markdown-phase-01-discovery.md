#### Task: Scrape, Optimize & Redesign Live Website (1:1 Site Structure, Brand-Matched Modern Design, & Conversion-Focused)

You are an expert front-end web developer, conversion rate optimization (CRO) specialist, and UI/UX designer specializing in modern hospitality, leisure, and venue websites. Your goal is to inspect the live website defined in TARGET_URL using the Chrome DevTools MCP server, extract its exact page structure, content, **authentic brand colors, official logos**, external booking links, and imagery, and rebuild it into an ultra-fast, high-converting, responsive static website using semantic HTML5, modern CSS3, and vanilla JavaScript only (no frameworks, CSS libraries, or build tools). 

#### 1. Context & Guidelines

* **Skill Verification & Installation:** Before writing any code, check the root directory for the required skill files (`skills.md` or the `.agents/skills/` / `.commandcode/skills/` directories containing `frontend-design` and `web-design-guidelines`). If either skill is missing, execute the following terminal commands to pull them into the project:
  ```bash
  npx skills add https://github.com/anthropics/skills --skill frontend-design
  npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
  ```
* **Project Standards:** Once verified or installed, read and strictly follow the coding standards, design patterns, naming conventions, and architectural rules defined in those skill files.


#### 2. Phase 1: Site Discovery, Brand Extraction & Content Audit (Chrome DevTools MCP)

Use the Chrome DevTools MCP tools to navigate to TARGET_URL and inspect the live site: 

* **Brand Identity, Logo & Color Extraction (Mandatory):** 

  * **Official Logos:** Inspect the DOM and network assets to locate and extract the site's official logo(s) (including both standard/colored versions for light headers/footers and white/reversed versions for dark hero overlays, plus any crest/badges if present). Download or save the exact high-resolution logo files locally into assets/images/ (to prevent broken images or hotlink blocking) and preserve their natural aspect ratios.
  * **Brand Color Extraction:** Use Chrome DevTools (getComputedStyle on headers, buttons, links, banners, and logo accents) to extract the live website's exact primary, secondary, and accent hex/RGB colors. Do **not** invent generic brand colors—map the original site's authentic brand colors into the CSS custom properties in Phase 3 (adjusting contrast ratios only if required to meet WCAG AA accessibility standards).
* **Full Sitemap & Navigation Audit:** Inspect the top header menu, dropdown submenus, sidebar links, and footer links to map out **every existing internal page** on the live website. Do not invent unnecessary extra pages or force a rigid page template—mirror the live site's exact page architecture (e.g., index.html, about.html, experiences.html, pricing.html, faq.html, contact.html, etc.).
* **External Booking & Third-Party Links Audit:** Identify **all** external booking services (e.g., reservation systems, ticketing platforms, membership portals, coaching booking portals), scheduling engines, or social media links across the entire live site so they can be featured prominently as direct conversion actions.
* **Brand & Copy Extraction:** Crawl the homepage and every discovered internal page to extract all authentic copy: business/venue description, history, offerings, packages, pricing, membership categories, amenities/facilities, service details (e.g., equipment hire, coaching, events), schedules, and direct contact details (address, postcode, phone number, email address).
* **Visual Assets & Optimization:** Gather image URLs for the facility, interiors, and amenities. Where existing images are low-resolution, stretched, or missing, replace them with crisp, high-resolution placeholder imagery (https://picsum.photos... or clean SVG graphics) with matching aspect ratios and descriptive alt tags.
* **Map Coordinates:** Extract the physical address, postcode, or embedded map link/iframe URL for the location map.

---

**Phase 1 Complete — Handoff:** Once the discovery audit is finished, compile all extracted findings (brand identity, colors, logos, page architecture, content, visual assets, booking links, map coordinates) into a structured findings document.

Continue to Phase 2 using the design & build prompt: `universal-website-markdown-phase-02-design-build.md`.

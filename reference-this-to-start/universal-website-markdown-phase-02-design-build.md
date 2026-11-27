---

**Context:** You are an expert front-end web developer, conversion rate optimization (CRO) specialist, and UI/UX designer specializing in modern hospitality, leisure, and venue websites. Your goal is to rebuild the live website into an ultra-fast, high-converting, responsive static website using semantic HTML5, modern CSS3, and vanilla JavaScript only (no frameworks, CSS libraries, or build tools).

**Prerequisite:** Phase 2 continues from the Phase 1 findings (brand identity, colors, logos, page architecture, content, visual assets, booking links, map coordinates) extracted from the live site. Ensure those findings are available before proceeding.

#### 3. Phase 2: PageSpeed & Performance Engineering (95+ Lighthouse Score)

Every page must be engineered for near-instant load times and zero layout shift: 

* **Zero Render-Blocking Resources:** Inline critical above-the-fold CSS or keep css/styles.css lean and modular. Load js/main.js with defer. Avoid heavy external font libraries (use a refined system font stack or load max 2 font weights with font-display: swap and <link rel="preconnect">).
* **Image & Media Performance:** Set explicit width and height attributes on all <img> tags (especially the header/footer logos and hero image) to prevent Cumulative Layout Shift (CLS). Apply loading="lazy" and decoding="async" to all below-the-fold images, and fetchpriority="high" to the hero image and header logo.
* **Lightweight Embeds:** Do not load heavy third-party map iframes immediately on page load. Use a lightweight static map preview/facade that loads the interactive iframe only when clicked (or use loading="lazy" on footer iframes).

#### 4. Phase 3: Brand-Aligned Modern Website Design System

Upgrade the layout and visual polish into a **contemporary, uncluttered modern website aesthetic** while strictly honoring the original site's visual identity: 

* **Dynamic Brand Color Palette (CSS Custom Properties):** 

  * **Primary Brand (--color-primary):** Set to the **exact primary brand color** extracted from the original website for primary headers, dark hero overlays, and primary buttons.
  * **Brand Accent (--color-accent):** Set to the **exact secondary/accent color** extracted from the live site's buttons, highlights, or brand marks for key CTA highlights, badges, and thin editorial divider rules.
  * **Surface Backgrounds (--color-surface-alt & --color-surface):** Use clean neutral off-white/alabaster (#F8F8F6 or tinted lightly with the primary brand hue) and crisp white (#FFFFFF) alternating section backgrounds so the original brand colors and logos stand out cleanly.
  * **Typography (--color-ink & --color-muted):** High-contrast deep charcoal (#1A1F1D) for body text and muted slate (#525B58) for secondary metadata, ensuring a minimum 4.5:1 contrast ratio against all brand backgrounds.
* **Editorial Typography & Scale:** 

  * Pair a classic, high-contrast **editorial serif** (Georgia, 'Playfair Display', or 'Instrument Serif') for headings and hero titles with a crisp, modern **geometric/humanist sans-serif** (system-ui, -apple-system, 'Inter') for UI navigation, pricing tables, and body copy.
  * Use generous line-height (1.65) and fluid clamp() heading sizes so titles feel authoritative on desktop and balanced on mobile.
* **Spatial Layout & Elevation:** 

  * **Generous Whitespace:** Use large vertical section padding (clamp(4rem, 8vw, 7rem)) and a max-width container (1200px–1280px) so content never feels cramped.
  * **Refined Cards & Borders:** Use soft, subtle borders (1px solid rgba(0, 0, 0, 0.1)) or borders derived from --color-primary, gentle border radii (8px–12px), and understated hover elevation (translateY(-3px)) rather than heavy drop shadows.
  * **Bespoke Brand Details:** Use clean inline SVG icons (flags, badges, clocks, location pins, stars) and structured tabular numbers (font-variant-numeric: tabular-nums) on all pricing tables, timetables, and schedules so values align vertically.
  * **Sticky Header:** Use a clean sticky header with subtle backdrop-filter: blur(10px) that displays the official logo cleanly without distortion and keeps the primary conversion CTA visible at all times.

#### 5. Phase 4: Conversion Rate Optimization (CRO)

* **Clear Value Proposition Above the Fold:** Immediately highlight key selling points discovered on the live site (e.g., location, venue type, hours, amenities, offerings, service status, equipment/services).
* **Direct External Booking & High-Visibility CTAs:** Feature any discovered external booking links (such as reservation systems and ticketing platforms) prominently in the header and hero section (target="_blank" rel="noopener noreferrer"). Guide visitors directly to booking, ticket purchase, or contacting.
* **Zero Contact Forms (Direct mailto: & tel: Only):** **Do NOT build any <form> elements or interactive contact forms** anywhere on the site. Replace all form inquiries with prominent, tap-friendly mailto: links (pre-filled with helpful subject lines, e.g., mailto:office@example.com?subject=Enquiry) and clickable tel: phone links.
* **Trust & Social Proof:** Highlight authentic business heritage (location, history, hosted events, service providers) and link clearly to active social channels.
* **Frictionless Mobile Experience:** Ensure phone numbers (tel:), email addresses (mailto:), and map directions (Google Maps/Apple Maps links) work with a single tap on mobile devices.

#### 6. Phase 5: Dynamic Page Architecture

Generate a clean project structure matching the discovered pages (index.html, plus a standalone .html file for every internal navigation/footer page found on the live site, alongside css/styles.css, js/main.js, and assets/images/). 

#### Global Components (Consistent Across All Pages)

* **Header:** Sticky, responsive navigation bar featuring the **extracted official logo** (properly sized with object-fit: contain), clean dropdown/navigation links matching the live site's main menu, and high-contrast primary CTA buttons (e.g., Reserve / Join / Tickets). On mobile viewports (< 768px), collapse navigation into an accessible, lightweight hamburger drawer handled in js/main.js.
* **Footer:** Multi-column layout featuring the logo, quick links (matching all header and footer links), opening hours, clickable tel: and mailto: contact details, social media links, and a lazy-loaded/facade location map.

#### Page-Specific Blueprints (Adapted to Discovered Pages)

* **Homepage (index.html):**
  * Conversion Hero: Full-bleed atmospheric imagery with a brand-tinted dark gradient scrim for crisp text legibility, reversed/white logo if appropriate, editorial headline, concise subheadline, dual CTAs (prioritizing the primary conversion action alongside a secondary engagement action, e.g., "Explore The Offering" / Learn More), and key trust badges.
  * At-a-Glance Venue Strip: Scannable cards with SVG icons summarizing core facts (Venue Category, Amenities, Hours/Location, etc.).
  * Venue Story Spotlight: Asymmetric 2-column split layout highlighting the venue's story, setting, and offering.
  * Quick Navigation Cards: Clean visual cards linking directly to the site's core sections (Offerings/Pricing, Experiences, About/Story, FAQ/Contact) and external booking portals.

* **Discovered Internal Pages (1:1 Mapping):**
  * Build a dedicated .html page for every internal page discovered in the live site's navigation and footer.
  * Contact & Directions Page: Display full address, postcode, directions, interactive map facade, and large, accessible action cards for Call Us (tel:) and Email Us (mailto:)—with no contact form.
  * Preserve 100% of the authentic facts, prices, names, and details from the live site while upgrading layouts into clean cards, tabular pricing tables, responsive galleries, or interactive schedules.
  * Include a clear conversion callout banner at the bottom of every inner page styled with the primary brand color, prompting the user to book via the external booking link, call (tel:), or email (mailto:).

* **External Links:** Do not create local .html pages for external platforms (such as third-party reservation systems, ticketing platforms, or membership portals); link directly to them with target="_blank" rel="noopener noreferrer".

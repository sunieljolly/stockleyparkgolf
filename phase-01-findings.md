# Phase 1 Findings: stockleyparkgolf.co.uk

Source: live site audited 2026-11-27 (Chrome DevTools MCP + fetch). The live site is built on Wix.

## 1. Skill check

- No `skills.md`, `.agents/skills/`, or `.commandcode/skills/` directories exist in the project.
- `.commandcode/` only contains `taste/`.
- The `npx skills add` commands from the discovery doc have **not** been run. Phase 2 requires them.

## 2. Brand identity

### Logos
- Saved to `assets/images/`:
  - `stockley-park-golf-logo.png` (header/footer logo, white on green)
  - `stockley-group-se-logo-white.png` (Stockley Environmental, "Part of the Stockley Group")
- **Not yet captured:** the coloured logo version, the hero crest ("Stockley Park" tree mark), the Bigshots logo, and the Stockley Group logo.

### Colours (computed styles)
| Role | Value | Source |
|---|---|---|
| Heading purple (H2/H3) | `#794577` (rgb 121,69,119) | Computed, most-used accent (170 elements) |
| Header green | `~#2F8F44` (rgb 47,143,68) | Inferred from screenshot and palette; not read directly from the header |
| Dark green | `#27422D` (rgb 39,66,45) | Palette (5 uses) |
| Tan | `#C3A87D` (rgb 195,168,125) | Palette (2 uses) |
| Body text | `#000000` | Computed |
| Light grey button | `#E3E3E3` | Computed |
| Link/button blue | `#116DFF` | Computed on one `button`; may be a cookie/widget element, so unverified |

### Typography
- Headings: Questrial (H2 at 50px, H3 at 30px).
- Body and nav: Arial/Helvetica fallback.

## 3. Page architecture (1:1 sitemap)

### Main site (www.stockleyparkgolf.co.uk)
| Page | URL | Notes |
|---|---|---|
| Home | `/` | Hero, course intro, lessons, driving range, news, reviews |
| Membership | `/membership` | Pricing and benefits |
| Green Fees | `/green-fees` | Booking widget (JS-rendered, no prices in text) |
| Golf Lessons | `/golf-lessons` | Pricing and "Book A Lesson" |
| Events & Functions | `/events-functions` | Marquee venue, managed by a third party |
| Contact | `/contact` | Phones, emails, address, map link |
| News | `/blog` | Two posts listed |
| Post: Driving range reopened | `/post/the-newly-refurbished-driving-range-is-back-open` | Jul 27, 2023 |
| Post: Membership offer | `/post/join-stockley-park-golf-course-...` | Apr 13, 2023 |
| Post: Curry Festival | `/post/golf-club-curry-festival` | Jul 4, 2022 (linked, not fetched) |
| Privacy Policy | `/privacy-policy` | Long-form legal text |
| **Placeholder** | `/blank` | Empty page titled "Stockley Park Golf". Footer "Bar & Restaurant" links here. |

### Separate sites
- **spgolfcentre.uk** (Wix, separate build): the real booking and bar site. Contains the "Book Your Tee Time" system, corporate days, fittings, Trackman simulator, FAQs and contact form. Also has `/safe-guarding` and `/club-policies` (not fetched).
- **bigshotsgolfuk.com/stockley-park/**: the driving range operator. **Unreachable during audit** (504 timeout, then `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`). Retry before Phase 2.

### Navigation
- **Header:** Home, Golf (dropdown: Membership, Green fees, Golf lessons, etc.), Driving Range, The Stockley Bar, Events & Functions, News, Contact, Book Now (button).
- **Footer:** Membership, Course Info, Bar & Restaurant, Events, Lessons, Privacy Policy, Facebook, Instagram.
- **Dead or misdirected footer links:** "Course Info", "Events" and "Lessons" all go to the homepage. "Bar & Restaurant" goes to `/blank`.

## 4. External booking and third-party links

| Link | Destination | Purpose |
|---|---|---|
| Book Now (header) | `https://spgolfcentre.uk/` | Primary tee-time booking |
| Golf, Memberships, Green fees, Golf lessons, Course info (header dropdown) | `http://spgolfcentre.uk/` | Several menu items point to the other domain |
| The Stockley Bar | `http://spgolfcentre.uk/` | Bar for hire |
| Driving Range (header and "Learn More") | `https://bigshotsgolfuk.com/` | Driving range booking (currently down) |
| Learn More (lessons) | `/golf-lessons` | |
| Book A Lesson | `/golf-lessons` (text on page) | Email and phone booking |
| Google Maps | `https://goo.gl/maps/DQpcZaVWkv3JSQPa6` | Resolves to Google Maps place "Stockley Park Golf Club" |
| Facebook | `facebook.com/stockleyparkgolfcourse` | |
| Instagram | `instagram.com/stockleyparkgolf` | |
| Weather icon | `bbc.co.uk/weather/2637343` | |
| Customer reviews | `writeacustomerreview.com` (iframe) | Wix review widget |

Processing partners named in the privacy policy: Chrono Golf and Lightspeed (likely booking/EPOS), Google Analytics, and Facebook Business Manager.

## 5. Copy and content

### Homepage
- **Headline:** "18 Hole Course, Interactive Driving Range with Trackman Technology, Bar, Restaurant & Private Hire where everyone is welcome."
- **Course:** Designed by Robert Trent Jones Senior. Par 72, 6,393 yards, opened 1993. Tree-lined.
- **Highlights:** Close to London. 5 minutes from Heathrow. Easy access to M25 and M4 Junction 4. Ample free parking. Free Wi-Fi.
- **Lessons:** PGA members, 10+ years coaching. Also ColourPath Golf and Mind Factor certified.
- **Driving range (Bigshots):** 12-bay floodlit range, short game area, chipping and putting green, TrackMan.

### Opening hours (Bigshots Driving Range)
- Sat, Sun, Mon, Tue: 8am–5pm, last entry 4:30pm (30 min)
- Wed, Thu, Fri: 8am–7pm, last entry 6:30pm (30 min)

### Pricing
- **Golf lessons:** 45 min £40. 60 min £60. 9-hole playing lesson £85 (includes green fee). Monthly coaching from £60 pcm.
- **Membership** (from the membership page text):
  - Full-week membership: £1,590 p/a (about £30.50/wk)
  - 5 Day: £990 p/a (about £19.00/wk)
  - 7 Day Junior: £250 p/a (about £4.80/wk)
  - Admin fee applies. No joining fee. Monthly payment plans available.
  - **Check:** the text order makes the price-to-tier mapping ambiguous. Confirm visually before Phase 2.
- **Membership benefits:** Unlimited 7-day play, book up to 14 days ahead, 10% ProShop discount, discounted buggies and driving range tokens, member-guest rates, newly refurbished bar and restaurant.
- **Trackman simulator (spgolfcentre.uk):** £25 per hour.
- **Green fees:** Not in the page text. Shown only in the booking widget. Needs a separate capture.

### Events & Functions
- The Marquee: 150–650 guests. Weddings, dinner dances, galas, corporate and trade events.
- Blank-canvas events space for 100–650 people.
- Features: private entrance, free car park, climate control, terrace with optional bar, private bar, LED starlit ceiling, views over the golf course.
- Managed by Venue Management Solutions Ltd (pavilionstockleypark.co.uk). Their contact details are listed on the page.

### Other copy
- The Stockley Bar and Bar & Restaurant: newly refurbished. Corporate golf days and bar hire on spgolfcentre.uk.
- "Pool Safety Rules" text appears on the Green Fees and Events pages with no visible link. It looks like leftover content.

## 6. Contact details

**Address:** Stockley Park Golf Club, Stockley Park, Uxbridge, Middlesex UB11 1AQ

**Phone numbers:**
- 01895 695522: Pro-shop and club enquiries (also in the footer, `tel:+441895695522`)
- 07942 339041: Bar@Stockley
- 0208 813 5700: The Orangery at Stockley Park, and lesson bookings

**Email addresses (inconsistent across pages):**
- `info@spgolfcentre.com` and `proshop@spgolfcentre.com` (contact page)
- `proshop@stockleyparkgolf.co.uk` (lessons page)
- `opsmanager@stockleygroup.com` (privacy policy, data protection contact)

**Map coordinates:** 51.5132155, -0.4440041 (from Google Maps redirect)

## 7. Visual assets

- The homepage hero is a looping drone video (not captured).
- Feature images, all Wix CDN, served as AVIF/WebP:
  - Course aerial and bridge (hero background)
  - Course "Championship Quality" image (715×502)
  - Practice and lessons photos (615×410, 585×411)
  - Driving range and news thumbnails
  - Membership and events imagery not yet captured
- The discovery doc asks for high-resolution placeholders where images are low resolution. Several Wix thumbnails are capped at 319 to 713 px wide, so they will need replacing.

## 8. Issues found during audit

1. Bigshots (driving range) site is down or has an SSL error. Its booking path cannot be verified.
2. The header menu sends most booking items to a different domain (spgolfcentre.uk), not to the main site.
3. Two different email domains (`spgolfcentre.com` and `stockleyparkgolf.co.uk`) are in use. Confirm the correct one.
4. Three different lesson and proshop phone and email contacts are listed. Confirm which is current.
5. Dead footer links (Course Info, Events, Lessons, Bar & Restaurant). `/blank` is an empty page.
6. Privacy policy references the Data Protection Act 1998 and was last modified 9/11/2021. Needs legal review.
7. Copyright: main site says 2023, spgolfcentre.uk says 2026.
8. Membership pricing text is ambiguous (see section 5).

## 9. Outstanding before Phase 2

- [ ] Install skills (`frontend-design`, `web-design-guidelines`) per the discovery doc.
- [ ] Retry bigshotsgolfuk.com and capture the driving range page.
- [ ] Capture the coloured logo, hero crest and Bigshots/Stockley Group logos.
- [ ] Capture green fee pricing from the booking widget on spgolfcentre.uk.
- [ ] Confirm membership pricing mapping and the correct contact details.
- [ ] Fetch spgolfcentre.uk sub-pages (`/safe-guarding`, `/club-policies`, FAQs, corporate days, fittings).

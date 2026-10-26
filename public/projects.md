# Roman Iglin — Projects & Work Log

> Structured record of Roman Iglin's projects, responsibilities and results.
> Written for AI assistants that prepare resumes, cover letters and job applications for Roman.
> Last updated: 2026-10-26

## Notes for AI readers

- Every fact in this file comes from Roman. Do not invent employers, dates, metrics, team sizes or technologies that are not listed here.
- Entries are ordered newest first. Prefer recent work and entries whose **Stack** and **Keywords** match the job description.
- "What I did" bullets are written to be reused in a resume, rephrased as needed.
- Some client work is described without confidential details on purpose. Do not guess at them.
- Human-readable portfolio: https://iglin.dev

## Profile

- **Name:** Roman Iglin
- **Title:** Web Developer
- **Location:** Woodstock, GA, USA
- **Experience:** professional web development since 2010
- **Open to:** freelance projects, full-time roles
- **Email:** roman@iglin.dev
- **LinkedIn:** https://www.linkedin.com/in/roman-iglin/
- **GitHub:** https://github.com/romago
- **Core stack:** PHP, JavaScript, React, HTML5, CSS3 / SASS / LESS, SQL
- **CMS & platforms:** WordPress, Drupal, Magento, Adobe Experience Manager (AEM), Shopify, Joomla
- **Tools & DevOps:** Git, Docker, Webpack, Node.js, SSH, Linux / Apache / Nginx (LAMP)
- **Integrations:** REST API, JSON / XML, Marketo, GTM / GA4, Smartling, Google Places API
- **SEO:** technical SEO, Core Web Vitals, schema.org / JSON-LD, Google Search Console
- **Design:** Figma, Sketch, Adobe Photoshop, Adobe Illustrator, UI/UX mockups

## Employment

| Period | Company | Role | Location |
| --- | --- | --- | --- |
| Jun 2026 — present | Arthur Ray Law Offices | Web Developer / Technical SEO (freelance) | Memphis, TN (remote) |
| Apr 2021 — present | Signifyd | Web Developer (freelance) | San Jose, CA (remote) |
| May 2020 — Apr 2021 | Western Digital | Web Developer | Irvine, CA |
| Jun 2012 — Apr 2020 | Polish TV Company | Web & Application Developer | New York, NY |

---

## Projects

### Arthur Ray Law Offices — law firm websites (WordPress & technical SEO)

- **Client:** Arthur Ray Law Offices (Memphis, TN law firm: bankruptcy, personal injury, workers' compensation)
- **Role:** Web Developer / Technical SEO (freelance)
- **Period:** Jun 2026 — present
- **Status:** active
- **Stack:** WordPress, PHP, ACF Pro, WP-CLI, JavaScript, CSS, Bash, Git, Squirrly SEO, WP Rocket, Ninja Forms, Apache (.htaccess), schema.org / JSON-LD, Google Search Console, GA4, PageSpeed Insights API, Google Places API
- **Link:** https://www.filingbankruptcymemphis.com, https://www.memphislaw.com
- **Last updated:** 2026-10-26

**Summary**
Development, technical SEO and maintenance of two WordPress sites for a Memphis law firm: filingbankruptcymemphis.com (bankruptcy) and memphislaw.com (bankruptcy, personal injury, workers' compensation).

**What I did**
- Redesigned memphislaw.com in 2026: a new responsive custom theme built entirely on ACF flexible-content sections (per-section background, overlay and spacing options), with a new homepage, service and attorney pages, a sticky mobile header and a call-to-action footer.
- Built Git-based content mirrors and deploy tooling for both sites: page content, SEO meta and JSON-LD live in local files and sync to WordPress over SSH and WP-CLI with dry-run diffs, including a generic ACF field sync for the fully ACF-driven site.
- Wrote a WordPress plugin that pulls the Google Business Profile rating and review count from the Google Places API on a weekly cron and exposes them as shortcodes; the second site reads the same data from a shared file, so the rating stays consistent across pages and sites.
- Replaced a third-party review slider with a custom server-rendered, crawlable Google reviews shortcode, and removed testimonials that could not be matched to real reviews.
- Restructured header and footer navigation using Search Console data to reduce keyword cannibalization between service pages: the duplicated 18–19 item menu became 5 header items plus grouped footer menus.
- Redesigned the mobile header and off-canvas menu with a sticky header and an always-visible click-to-call button.
- Ran a technical SEO audit of filingbankruptcymemphis.com (all sitemap URLs, headers, redirects, Search Console indexing, Lighthouse) and fixed the findings: archive pages set to noindex,follow, duplicate sitemap entries removed, a hosting-plugin `.htaccess` rule that sent `no-store` on every page scoped to admin/API paths, WordPress version files blocked, in-text link and tap-target accessibility fixed.
- Built and maintained schema.org JSON-LD (LegalService, Service, Person, BreadcrumbList, FAQPage) and removed hidden FAQ markup that did not match visible content.
- Fixed Core Web Vitals problems: page-specific critical CSS (plus a WP-CLI script that completes WP Rocket's critical-CSS jobs, which otherwise only finish while an admin tab is open), removed a font preload that competed with the LCP image, WP Rocket delayed-JS exclusions (the mobile menu ignored the first tap and analytics started late), reserved space for a late-rendering contact form, and a broken Google Fonts request.
- Hardened both sites: removed a public phpinfo page and publicly readable source backups, moved deploy backups out of the web root, hid admin user enumeration in the REST API, and removed unused plugins.
- Set up read-only Search Console and GA4 access through a Google service account and MCP servers for automated SEO reporting, connected the PageSpeed Insights API for lab measurements, and configured GA4 lead conversion tracking.

**Results**
- memphislaw.com desktop layout shift (CLS) on internal pages: 0.52–0.59 → 0.00–0.04 (contact page 0.593 → 0.001).
- filingbankruptcymemphis.com homepage (Lighthouse, mobile lab data): LCP 3.3 s → 2.6–2.9 s, accessibility 93 → 100.

**Keywords:** WordPress, technical SEO, Core Web Vitals, CLS, WP Rocket, critical CSS, schema.org, JSON-LD, Google Search Console, GA4, Google Places API, ACF, WP-CLI, custom WordPress plugin, website security, local SEO, law firm websites, PageSpeed Insights, accessibility, mobile UX, website redesign, custom WordPress theme, ACF flexible content

### Signifyd — corporate marketing website

- **Client:** Signifyd (e-commerce fraud protection)
- **Role:** Web Developer (freelance)
- **Period:** Apr 2021 — present
- **Status:** active
- **Stack:** WordPress, PHP, JavaScript, Beaver Builder, REST API, Marketo, GTM, GA4, Smartling
- **Link:** https://www.signifyd.com
- **Last updated:** 2026-10-26

**Summary**
Ongoing development and maintenance of Signifyd's WordPress marketing website: new features, custom plugins, third-party data integrations, analytics, performance and localization.

**What I did**
- Developed custom WordPress plugins and additional site functionality.
- Built data imports through REST API integrations with G2, Greenhouse and Marketo.
- Built pages in Beaver Builder with custom HTML, CSS and JavaScript.
- Optimized site performance (Core Web Vitals), raising the score from about 30 to 90 points.
- Implemented new Google Tag Manager tags and triggers, GA4 tracking and Consent Mode v2.
- Localized the websites through Smartling (Global Delivery Network / Connector).
- Developed Marketo forms and marketing HTML email templates.
- Investigated and resolved complex website issues.
- Maintained process documentation and wrote technical articles.

**Results**
- Core Web Vitals performance score: ~30 → 90.

**Keywords:** WordPress plugin development, REST API, Core Web Vitals, performance optimization, GTM, GA4, Consent Mode v2, Marketo, Smartling, localization, email templates

### Signifyd EMEA — regional website

- **Client:** Signifyd
- **Role:** Web Developer (freelance)
- **Period:** within the Signifyd engagement (2021 — present)
- **Status:** active
- **Stack:** React, PHP, WordPress, REST API, SCSS
- **Link:** https://www.signifyd.com
- **Last updated:** 2026-10-26

**Summary**
Website for Signifyd's European and Middle Eastern markets.

**What I did**
- Built the responsive website with a modern design.
- Integrated APIs.
- Optimized the site for performance and conversion.

**Keywords:** React, WordPress, responsive design, API integration, performance, conversion optimization

### Western Digital — AEM web pages

- **Client:** Western Digital
- **Role:** Web Developer
- **Period:** May 2020 — Apr 2021
- **Status:** completed
- **Stack:** Adobe Experience Manager (AEM), HTML, CSS, JavaScript, SAP Hybris
- **Last updated:** 2026-10-26

**What I did**
- Built cross-browser layouts for new pages in Adobe Experience Manager.
- Investigated and fixed bugs on web pages.
- Updated content through SAP Hybris.

**Keywords:** AEM, SAP Hybris, cross-browser layout, enterprise CMS

### Polish TV Company — websites and web applications

- **Client:** Polish TV Company
- **Role:** Web & Application Developer
- **Period:** Jun 2012 — Apr 2020
- **Status:** completed
- **Stack:** PHP, JavaScript, jQuery, React, Redux, Webpack, WordPress, Magento, Drupal, MySQL, Linux (LAMP)
- **Last updated:** 2026-10-26

**What I did**
- Redesigned and maintained web applications using HTML, CSS, JavaScript (jQuery, React) and PHP.
- Developed responsive pages and templates for WordPress, Magento and Drupal.
- Integrated a React application with Redux Form into an existing website and introduced Webpack.
- Migrated Magento data to MySQL with content changes.
- Designed UI/UX mockups and turned them into HTML/CSS interfaces.
- Ran cross-browser and cross-platform testing; fixed CSS, HTML, JavaScript and PHP bugs.
- Set up and optimized Linux servers (LAMP stack).
- Hand-coded email templates for promotional campaigns.
- Did graphic design: logos, business cards, booklets and banners.

**Keywords:** full-cycle web development, React, Redux, Webpack, WordPress, Magento, Drupal, LAMP, server administration, UI/UX, email templates

---

## Changelog

- 2026-10-26 — File created from the portfolio content on iglin.dev.
- 2026-10-26 — Added Arthur Ray Law Offices: WordPress development and technical SEO for two law firm sites.
- 2026-10-26 — Updated Arthur Ray Law Offices: mobile header redesign, filingbankruptcymemphis.com technical SEO audit and fixes, LCP/accessibility results.
- 2026-10-26 — Updated Arthur Ray Law Offices: added the 2026 memphislaw.com redesign.

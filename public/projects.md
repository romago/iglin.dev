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
- **CMS & platforms:** WordPress, Elementor, Drupal, Magento, Adobe Experience Manager (AEM), Shopify, Joomla
- **Tools & DevOps:** Git, Docker, Webpack, Node.js, SSH, Linux / Apache / Nginx (LAMP), PHP-FPM, MariaDB tuning, HestiaCP, Puppeteer, Lighthouse, ffmpeg, Cloudflare
- **Integrations:** REST API, JSON / XML, SOAP, Marketo, GTM / GA4, Smartling, Google Places API, QuickBooks Desktop (qbXML / Web Connector), Google Gemini API, Meta Pixel, Microsoft Clarity
- **SEO:** technical SEO, Core Web Vitals, schema.org / JSON-LD, Google Search Console
- **Design:** Figma, Sketch, Adobe Photoshop, Adobe Illustrator, UI/UX mockups

## Employment

| Period | Company | Role | Location |
| --- | --- | --- | --- |
| ongoing | People Movers | Web Developer / Performance Optimization (freelance) | California (remote) |
| Jun 2026 — present | Arthur Ray Law Offices | Web Developer / Technical SEO (freelance) | Memphis, TN (remote) |
| Apr 2021 — present | Signifyd | Web Developer (freelance) | San Jose, CA (remote) |
| May 2020 — Apr 2021 | Western Digital | Web Developer | Irvine, CA |
| 2017 — present | Araks Inc | Web Developer (freelance) | Los Angeles, CA (remote) |
| Jun 2012 — Apr 2020 | Polish TV Company | Web & Application Developer | New York, NY |

---

## Projects

### People Movers — moving company website (WordPress / Elementor redesign, performance & landing pages)

- **Client:** People Movers — The Real Movers® (California moving company: Sacramento, Bay Area, Los Angeles)
- **Role:** Web Developer / Performance Optimization (freelance)
- **Status:** active
- **Stack:** WordPress, Elementor / Elementor Pro, PHP, JavaScript, CSS, Python, WP-CLI, Bash, rsync, Git, Puppeteer, Lighthouse, ffmpeg, Jetpack Boost, Cloudflare, Bluehost, GTM, GA4, Google Ads, Meta Pixel, Microsoft Clarity, LeadBot / LeadCapture.io
- **Link:** https://peoplemoverscalifornia.com
- **Last updated:** 2026-10-26

**Summary**
Full redesign of the WordPress / Elementor website of a California moving company, followed by landing page development and performance, accessibility and tracking optimization, with a focus on the Sacramento ad landing page.

**What I did**
- Redesigned the whole website on WordPress with Elementor Pro and a custom Hello Biz child theme: homepage, city landing pages, service pages, header and footer templates, and mobile layouts.
- Set up a Git mirror of the live WordPress site with rsync-over-SSH pull/push scripts (FTP fallback), so every server change is reviewed and versioned before and after deploys.
- Made HTML cacheable at the host and CDN level: stripped server-side tracking cookies on anonymous requests, sent explicit Cache-Control with stale-while-revalidate, and added a cron cache warmer for key landing pages after finding that cold renders randomly dropped PageSpeed scores.
- Delayed third-party tags (GTM, gtag, Meta Pixel, Clarity, review widget) site-wide until first interaction, excluding conversion pages, and verified identical GA/Ads/Meta/Clarity hits with and without the delay; on the Sacramento page also delayed the below-the-fold lead form with reserved space so nothing shifts.
- Built a lazy video loader for Elementor and custom videos (load near viewport, poster images, inline autoplay in Facebook/Instagram in-app browsers, tap to unmute) and re-encoded site videos (40 MB → 5.3 MB, 25 MB → 3 MB).
- Removed unused plugins and scripts (AMP with 301 redirects, an unused chat loader, an inactive tracking pixel and a plugin that disabled page caching), trimmed per-page assets and replaced a 453 KB icon font with a 732-byte subset.
- Fixed accessibility issues: heading order, color contrast, labels and valid autocomplete for the third-party quote form, and accessible names for menu controls.
- Built new landing page sections with re-runnable WP-CLI scripts that edit Elementor data through its document API: a mobile video card, a "Text us" SMS call-to-action and updated service labels.
- Built a Python generator for an interactive SVG map section of the Long Distance page (animated routes, tooltips) embedded as a self-contained Elementor widget.
- Wrote a Puppeteer smoke test (in-app browser user agents, tablet, desktop) that checks layout overflow, lazy video, click-to-call links, the quote form, the menu and JS errors after each change.
- Diagnosed invalid phone numbers in leads (e.g. 000-000-0000) by inspecting the lead form configuration: the phone field had no validation, and the fix belongs in the form builder, not the CRM integration.

**Results**
- Sacramento landing page, Lighthouse mobile: Performance 33 → 96–98, page weight 17.7 MB → about 0.9 MB, Accessibility 89 → 99–100, SEO 92 → 100, Best Practices 39 → 81; desktop Performance 98–99.
- Homepage, Lighthouse mobile: Performance 81 → 91 after the site-wide tag delay.

**Keywords:** WordPress, Elementor, website redesign, custom WordPress theme, Core Web Vitals, page speed optimization, Lighthouse, PageSpeed Insights, caching, CDN, Cloudflare, third-party script delay, GTM, GA4, Meta Pixel, Microsoft Clarity, lazy loading, video optimization, accessibility, WCAG, WP-CLI, Puppeteer, landing pages, lead generation, moving company website

### Araks Inc — B2B wholesale ordering site (Drupal Commerce, QuickBooks integration)

- **Client:** Araks Inc (Los Angeles wholesale distributor of European food products to stores)
- **Role:** Web Developer (freelance)
- **Period:** 2017 — present
- **Status:** active
- **Stack:** Drupal 7, Drupal Commerce, PHP 8.5, MariaDB / MySQL, JavaScript, jQuery, Drupal Views, Rules, Linux (Ubuntu), HestiaCP, Nginx, Apache, PHP-FPM, QuickBooks Desktop (qbXML, Web Connector SOAP), Google Gemini API, GA4 Data API, Search Console API, PageSpeed Insights API, schema.org / JSON-LD, Puppeteer, rclone, Brevo SMTP, Bash, Git
- **Link:** https://araks.org
- **Last updated:** 2026-10-26

**Summary**
Development, maintenance and server administration of Araks' Drupal 7 / Drupal Commerce site, where store customers and sales reps place wholesale orders from a catalog of about 1,700 products. In 2026 the work centered on a QuickBooks integration, performance, technical SEO, lead generation and server reliability.

**What I did**
- Built a QuickBooks Desktop integration from scratch: a hand-written Web Connector SOAP/qbXML endpoint with a job queue, hourly product, price and stock sync for about 7,500 QuickBooks items, daily customer and vendor account sync, and automatic export of every web order as a QuickBooks Sales Order (vendor restocking orders as Purchase Orders). It replaced manual CSV imports and XLSX order exports.
- Added a low-margin alert that compares site prices with QuickBooks average cost and lists products below a 15% markup on the admin dashboard.
- Made the signed-in checkout page fast despite per-customer price markups: a custom Drupal Views cache plugin keys the 1,700-product price list by a price fingerprint computed from the pricing rules, and copies are rebuilt in the background after each product sync.
- Traced a long-standing order bug to its root cause: bottle-deposit (CRV) line items were saved but never linked to their orders. Also stopped carts from being wiped by stale, browser-restored checkout pages with cart revision checks and per-order locking.
- Improved Core Web Vitals for public pages: local jQuery, scripts moved to the footer, self-hosted fonts, WebP images with srcset, Hotjar removed, and lazy loading for the 1,700 product photos on the catalog page.
- Did the site's technical SEO: clean product and category URLs with about 3,900 automatic 301 redirects, an XML sitemap that had been missing most products, schema.org JSON-LD (Product, BreadcrumbList, WholesaleStore, FAQPage), visible breadcrumbs, and a brand and country-of-origin taxonomy.
- Built an English/Russian wholesale landing page and the lead pipeline behind it: spam-protected lead form, funnel tracking, approval with expiring one-time links to the price list, follow-up reminder emails, "become a customer" applications and GA4 key events.
- Built an AI catalog module on the Google Gemini API that rewrote raw QuickBooks item names into clean product titles and descriptions for the whole catalog, with automated checks (numbers, sizes, brands), a review and revert workflow, and nightly product photo checks.
- Migrated production from PHP 7.4 to PHP 8.5 on Drupal 7: tested on a staging copy, then deployed with scripted backup, verification and rollback steps and 12 seconds of maintenance mode.
- Administered the Linux server (HestiaCP, Nginx, Apache, PHP-FPM, MariaDB): diagnosed site hangs caused by database lock pile-ups, tuned MariaDB and PHP-FPM, added slow-query logging and automatic incident snapshots.
- Found that nightly backups had been failing silently on most days of a month, fixed the cause, and added an encrypted weekly off-site copy to Google Drive with a tested restore and failure alerts.
- Removed publicly served debug logs and backup files that exposed PHP source, and closed unused XML-RPC access.
- Built a sales analytics dashboard (sales by year without vendor restocking orders, top products, customer debt) and connected the GA4, Search Console and PageSpeed Insights APIs for reporting.
- Fixed the site's email Reply-To handling, verified SPF, DKIM and DMARC, and built HTML transactional emails and abandoned-cart reminders.

**Results**
- Signed-in checkout page: server response 7–13 s → about 0.5 s.
- Catalog page with 1,700 products on a phone over 4G: full load 16.8 s → 2.1 s; data downloaded before load 13.6 MB → 0.1 MB.
- PHP 7.4 → 8.5: uncached product page throughput +38% (7.9 → 10.9 requests/s).
- Homepage on mobile (PageSpeed lab data): LCP 12.2 s → 4.4 s, performance score 60 → 80.
- Database: buffer-pool hit rate 98.1% → 99.8%; slowest admin report query 4.5 s → 0.1 s.
- Google Search Console, the month after the URL, sitemap and SEO work vs the month before: impressions +98%, clicks +62%.

**Keywords:** Drupal 7, Drupal Commerce, B2B e-commerce, wholesale ordering, QuickBooks integration, qbXML, QuickBooks Web Connector, ERP integration, SOAP, PHP 8 migration, performance optimization, caching, Drupal Views, Core Web Vitals, lazy loading, technical SEO, JSON-LD, XML sitemap, 301 redirects, lead generation, GA4, Google Search Console, AI content generation, Gemini API, Linux server administration, MariaDB tuning, Nginx, backups, disaster recovery, website security, email deliverability, debugging, data integrity

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

### Signifyd Mexico & Brazil — localized websites redesign and translation

- **Client:** Signifyd (e-commerce fraud protection)
- **Role:** Web Developer (freelance)
- **Period:** Oct 2026 — present
- **Status:** active
- **Stack:** WordPress, PHP, WP-CLI, Beaver Builder, Beaver Themer, Yoast SEO, FacetWP, GSAP, Node.js (PostCSS), Python, Google Sheets API, WP Engine
- **Link:** https://mx.signifyd.com, https://br.signifyd.com
- **Last updated:** 2026-10-26

**Summary**
Migration of Signifyd's Spanish (Mexico) and Portuguese (Brazil) WordPress sites to the company's new brand design from the main site, followed by translation of the new pages from the localization team's translation sheet.

**What I did**
- Migrated 22 pages, the global header and footer, and the blog and customer-story templates from the main site to the Mexico site, then reused the work for the Brazil site.
- Moved the Brazil site's legal pages (privacy policies, terms of use, restricted businesses) to the new layout while keeping their existing Portuguese legal text, and reduced the localized terms of service to the Brazil section only.
- Built WP-CLI import and export tooling for Beaver Builder layouts. It copies page data and SEO meta, re-creates media attachments and remaps their IDs, syncs global color tokens, and checks every page by rendering it before writing.
- Wrote a Node.js (PostCSS) tool that removes unused layout CSS by testing selectors against the rendered pages, cutting page CSS by up to 97% (52 KB → 1.2 KB).
- Kept the old and new designs side by side on a live production site by switching on page tags, so the redesign could be previewed without affecting existing pages.
- Built a go-live script with a dry-run mode, snapshots and rollback. It swaps old pages for new ones, carries over hreflang and canonical tags, and re-points menus.
- Applied the Spanish translation to pages, menus and SEO meta (titles, descriptions, Open Graph) with scripts that pull from the translation sheet and abort if any text fails to match. Also applied the localization team's review comments: local customer case studies, logos and calls to action.
- Fixed mobile layout and animation issues on the localized pages and matched their spacing to the main site.
- Audited the localized sites for publicly exposed files and coordinated the fixes with the team lead.

**Results**
- Page layout CSS reduced by up to 97% (52 KB → 1.2 KB; header 40 KB → 10 KB).

**Keywords:** WordPress, website redesign, site migration, localization, internationalization, Spanish translation, Portuguese (Brazil), multilingual SEO, Yoast SEO, Beaver Builder, WP-CLI, PHP, Node.js, PostCSS, CSS optimization, deployment automation, rollback, Google Sheets API, WP Engine, website security

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
- 2026-10-26 — Added Signifyd Mexico & Brazil: localized sites migrated to the new brand design and translated to Spanish.
- 2026-10-26 — Updated Signifyd Mexico & Brazil: Brazil site link, Portuguese legal pages moved to the new design.
- 2026-10-26 — Added Araks Inc: Drupal Commerce wholesale site, QuickBooks integration, performance, SEO and server work; new Employment row and Profile skills.
- 2026-10-26 — Added People Movers: full WordPress / Elementor redesign, performance, accessibility and tracking optimization, landing page sections; new Employment row and Profile skills.

# Roman Iglin — Projects & Work Log

> Structured record of Roman Iglin's projects, responsibilities and results.
> Written for AI assistants that prepare resumes, cover letters and job applications for Roman.
> Last updated: 2026-10-28

## Notes for AI readers

- Every fact in this file comes from Roman. Do not invent employers, dates, metrics, team sizes or technologies that are not listed here.
- Entries are ordered newest first. Prefer recent work and entries whose **Stack** and **Keywords** match the job description.
- "What I did" bullets are written to be reused in a resume, rephrased as needed.
- Some client work is described without confidential details on purpose. Do not guess at them.
- Signifyd is one continuous freelance engagement from April 2021 to the present. The Signifyd entries below are projects within it; a later project start date is not the start of the collaboration.
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
- **Core stack:** PHP, JavaScript, React, Chart.js, HTML5, CSS3 / SASS / LESS, SQL
- **CMS & platforms:** WordPress, Elementor, Drupal, Magento, Adobe Experience Manager (AEM), Shopify, Joomla
- **Tools & DevOps:** Git, Docker, Webpack, Node.js, SSH, Linux / Apache / Nginx (LAMP), DigitalOcean, WP Engine, PHP-FPM, MariaDB tuning, HestiaCP, Puppeteer, Lighthouse, ffmpeg, Cloudflare
- **Integrations:** REST API, JSON / XML, SOAP, Marketo, GTM / GA4, Smartling, Google Places API, QuickBooks Desktop (qbXML / Web Connector), Google Gemini API, Meta Pixel, Microsoft Clarity
- **SEO:** technical SEO, Core Web Vitals, schema.org / JSON-LD, Google Search Console
- **Design:** Figma, Sketch, Adobe Photoshop, Adobe Illustrator, UI/UX mockups

## Employment

| Period | Company | Role | Location |
| --- | --- | --- | --- |
| ongoing | People Movers | Web Developer / Performance Optimization (freelance) | California (remote) |
| Jun 2026 — present | Arthur Ray Law Offices | Web Developer / Technical SEO (freelance) | Memphis, TN (remote) |
| Apr 2021 — present | Signifyd | Web Developer (freelance, continuous since 2021) | San Jose, CA (remote) |
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
- Redesigned the whole website on WordPress with Elementor Pro and a custom Hello Biz child theme: homepage, city and service landing pages, header and footer templates, and mobile layouts.
- Led performance optimization of the Sacramento ad landing page and the whole site: made HTML cacheable at the host and CDN level (tracking-cookie stripping, Cache-Control with stale-while-revalidate, a cache warmer), delayed third-party tags until first interaction, and removed unused plugins and heavy assets.
- Built a lazy video loader for Elementor and custom videos (loading near the viewport, poster images, inline autoplay in Facebook and Instagram in-app browsers) and re-encoded the site's videos.
- Built new landing page sections with re-runnable WP-CLI scripts that edit Elementor data through its document API, including an SMS call-to-action and a Python-generated interactive SVG route map for the Long Distance page.
- Improved accessibility: heading order, color contrast, form labels and autocomplete on the quote form, and accessible menu controls.
- Set up a safe change workflow: a Git mirror of the live site with rsync-over-SSH pull and push scripts, and a Puppeteer smoke test (in-app browsers, tablet, desktop) for layout, video, click-to-call, the quote form, the menu and JS errors.
- Kept lead tracking reliable: verified that GA4, Google Ads, Meta Pixel and Clarity hits stayed identical after the tag delay, and traced invalid phone numbers in leads to missing validation in the quote form.

**Results**
- Sacramento landing page, Lighthouse mobile: Performance 33 → 96–98, page weight 17.7 MB → about 0.9 MB, Accessibility 89 → 99–100, SEO 92 → 100, Best Practices 39 → 81; desktop Performance 98–99.
- Homepage, Lighthouse mobile: Performance 81 → 91 after the site-wide tag delay.
- Site videos re-encoded: 40 MB → 5.3 MB and 25 MB → 3 MB; a 453 KB icon font replaced with a 732-byte subset.

**Keywords:** WordPress, Elementor, website redesign, custom WordPress theme, Core Web Vitals, page speed optimization, Lighthouse, PageSpeed Insights, caching, CDN, Cloudflare, third-party script delay, GTM, GA4, Meta Pixel, Microsoft Clarity, lazy loading, video optimization, accessibility, WCAG, WP-CLI, Puppeteer, landing pages, lead generation, moving company website

### Araks Inc — B2B wholesale ordering site (Drupal Commerce, QuickBooks integration)

- **Client:** Araks Inc (Los Angeles wholesale distributor of European food products to stores)
- **Role:** Web Developer (freelance)
- **Period:** 2017 — present
- **Status:** active
- **Stack:** Drupal 7, Drupal Commerce, PHP 8.5, MariaDB / MySQL, JavaScript, jQuery, Drupal Views, Rules, DigitalOcean (droplet), LAMP stack: Linux (Ubuntu), Apache, MariaDB / MySQL, PHP; Nginx, PHP-FPM, HestiaCP, Let's Encrypt, QuickBooks Desktop (qbXML, Web Connector SOAP), Google Gemini API, GA4 Data API, Search Console API, PageSpeed Insights API, schema.org / JSON-LD, Puppeteer, rclone, Brevo SMTP, Bash, Git
- **Link:** https://araks.org
- **Last updated:** 2026-10-28

**Summary**
Development, maintenance and server administration of Araks' Drupal 7 / Drupal Commerce site, hosted on a DigitalOcean server that I set up and maintain, where store customers and sales reps place wholesale orders from a catalog of about 1,700 products. In 2026 the work centered on a QuickBooks integration, performance, technical SEO, lead generation and server reliability.

**What I did**
- Built a QuickBooks Desktop integration from scratch: a hand-written Web Connector SOAP/qbXML endpoint with a job queue, hourly product, price and stock sync for about 7,500 items, daily customer and vendor sync, and automatic export of web orders as Sales Orders (restocking orders as Purchase Orders), replacing manual CSV and XLSX exchange. Added a low-margin alert and a sales analytics dashboard on top of the synced data.
- Optimized the signed-in B2B ordering flow: a custom Drupal Views cache plugin keys per-customer price lists by a pricing fingerprint and rebuilds them in the background. Fixed order data-integrity bugs (unlinked bottle-deposit line items, carts wiped by stale checkout pages).
- Improved Core Web Vitals on public pages: self-hosted fonts and jQuery, deferred scripts, WebP images with srcset, and lazy loading for the 1,700 catalog photos.
- Led technical SEO: clean URLs with about 3,900 automatic 301 redirects, a complete XML sitemap, schema.org JSON-LD (Product, BreadcrumbList, WholesaleStore, FAQPage) and a brand and country-of-origin taxonomy. Connected the GA4, Search Console and PageSpeed Insights APIs for reporting.
- Built the lead generation pipeline: an English/Russian wholesale landing page, a spam-protected lead form, approval with expiring one-time price-list links, follow-up and abandoned-cart emails, and GA4 key events.
- Built an AI catalog module on the Google Gemini API that rewrote raw QuickBooks item names into clean product titles and descriptions for the whole catalog, with automated checks and a review and revert workflow.
- Set up and maintain the production server on a DigitalOcean droplet: a full LAMP stack on Ubuntu (Apache with event MPM, MariaDB / MySQL, PHP-FPM) behind Nginx, managed with HestiaCP, with Let's Encrypt SSL, HTTP/2 and TLS 1.3. Optimized it end to end (Nginx compression and static caching, PHP-FPM pools, MariaDB memory and I/O, swap) and migrated production from PHP 7.4 to 8.5 with scripted backup and rollback and 12 seconds of maintenance mode.
- Kept the server reliable and secure: resolved site hangs from database lock pile-ups with slow-query logging and automatic incident snapshots, fixed silently failing nightly backups and added encrypted weekly off-site copies with a tested restore and alerts, removed publicly exposed debug logs and backups, and verified SPF, DKIM and DMARC.

**Results**
- Signed-in checkout page: server response 7–13 s → about 0.5 s.
- Catalog page with 1,700 products on a phone over 4G: full load 16.8 s → 2.1 s; data downloaded before load 13.6 MB → 0.1 MB.
- PHP 7.4 → 8.5: uncached product page throughput +38% (7.9 → 10.9 requests/s).
- Homepage on mobile (PageSpeed lab data): LCP 12.2 s → 4.4 s, performance score 60 → 80.
- Database: buffer-pool hit rate 98.1% → 99.8%; slowest admin report query 4.5 s → 0.1 s.
- Google Search Console, the month after the URL, sitemap and SEO work vs the month before: impressions +98%, clicks +62%.

**Keywords:** Drupal 7, Drupal Commerce, B2B e-commerce, wholesale ordering, QuickBooks integration, qbXML, QuickBooks Web Connector, ERP integration, SOAP, PHP 8 migration, performance optimization, caching, Drupal Views, Core Web Vitals, lazy loading, technical SEO, JSON-LD, XML sitemap, 301 redirects, lead generation, GA4, Google Search Console, AI content generation, Gemini API, DigitalOcean, LAMP, server provisioning, DevOps, Linux server administration, Apache, MariaDB tuning, Nginx, PHP-FPM, HestiaCP, backups, disaster recovery, website security, email deliverability, debugging, data integrity

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
- Redesigned memphislaw.com with a new responsive custom theme built entirely on ACF flexible-content sections: new homepage, service and attorney pages, and a call-to-action footer.
- Improved navigation and mobile UX: rebuilt header and footer menus from Search Console data to reduce keyword cannibalization (a duplicated 18–19 item menu became 5 header items plus grouped footer menus), and added a sticky mobile header with an always-visible click-to-call button.
- Built Git-based content mirrors and deploy tooling for both sites: page content, SEO meta and JSON-LD sync to WordPress over SSH and WP-CLI with dry-run diffs.
- Built a Google reviews system: a WordPress plugin that syncs the Google Business Profile rating from the Places API weekly and shares it across both sites, plus a server-rendered, crawlable reviews shortcode that replaced a third-party slider.
- Led technical SEO: a full audit (sitemap URLs, headers, redirects, indexing, Lighthouse) with fixes to indexing rules, sitemaps and caching headers, and schema.org JSON-LD (LegalService, Service, Person, BreadcrumbList, FAQPage).
- Optimized Core Web Vitals and accessibility: page-specific critical CSS (with a WP-CLI script that completes WP Rocket's jobs), LCP-friendly font loading, tuned delayed-JS exclusions, reserved space for late-rendering forms, and link and tap-target fixes.
- Hardened both sites: closed information leaks (public phpinfo, readable backups, REST API user enumeration) and removed unused plugins.
- Set up analytics: GA4 lead conversion tracking, and read-only Search Console and GA4 access through a service account and MCP servers for automated SEO reporting.

**Results**
- memphislaw.com desktop layout shift (CLS) on internal pages: 0.52–0.59 → 0.00–0.04 (contact page 0.593 → 0.001).
- filingbankruptcymemphis.com homepage (Lighthouse, mobile lab data): LCP 3.3 s → 2.6–2.9 s, accessibility 93 → 100.

**Keywords:** WordPress, technical SEO, Core Web Vitals, CLS, WP Rocket, critical CSS, schema.org, JSON-LD, Google Search Console, GA4, Google Places API, ACF, WP-CLI, custom WordPress plugin, website security, local SEO, law firm websites, PageSpeed Insights, accessibility, mobile UX, website redesign, custom WordPress theme, ACF flexible content

### Signifyd — corporate marketing website

- **Client:** Signifyd (e-commerce fraud protection)
- **Role:** Web Developer (freelance)
- **Period:** Apr 2021 — present
- **Status:** active
- **Stack:** WordPress, PHP, JavaScript, React, Chart.js, HTML, CSS, Beaver Builder, WP Engine, WP-CLI, SSH, Docker, REST API, JSON / XML, Marketo, GTM, GA4, Smartling, Figma, Sketch, Adobe Photoshop, Adobe Illustrator
- **Link:** https://www.signifyd.com
- **Last updated:** 2026-10-28

**Summary**
Long-term freelance collaboration with Signifyd since April 2021: ongoing development and maintenance of its WordPress marketing website: new features, custom plugins, third-party data integrations, analytics, performance and localization.

**What I did**
- Developed custom WordPress plugins and site features with PHP, JavaScript, React and Chart.js, and built pages in Beaver Builder from Figma and Sketch designs with custom HTML, CSS and JavaScript.
- Integrated third-party data through REST APIs: G2, Greenhouse and Marketo.
- Led Core Web Vitals performance optimization of the site.
- Managed and configured Signifyd's WP Engine hosting across its installs (production, development and the EMEA, Mexico and Brazil sites): environments, SSH and WP-CLI access, deployments, and page and object caching for performance.
- Implemented analytics and consent: Google Tag Manager tags and triggers, GA4 tracking and Consent Mode v2.
- Localized the websites through Smartling (Global Delivery Network / Connector).
- Built Marketo forms and marketing HTML email templates.
- Resolved complex website issues and maintained process documentation and technical articles.

**Results**
- Core Web Vitals performance score: ~30 → 90.

**Keywords:** WordPress plugin development, React, Chart.js, Docker, Figma, WP Engine, managed WordPress hosting, WP-CLI, caching, REST API, Core Web Vitals, performance optimization, GTM, GA4, Consent Mode v2, Marketo, Smartling, localization, email templates

### Signifyd Mexico & Brazil — localized websites built from scratch, translated and redesigned

- **Client:** Signifyd (e-commerce fraud protection)
- **Role:** Web Developer (freelance)
- **Period:** within the Signifyd engagement, which runs since Apr 2021; 2026 redesign Oct 2026 — present
- **Status:** active
- **Stack:** WordPress, PHP, WP-CLI, Beaver Builder, Beaver Themer, Yoast SEO, FacetWP, GSAP, Node.js (PostCSS), Python, Google Sheets API, hreflang, WP Engine
- **Link:** https://mx.signifyd.com, https://br.signifyd.com
- **Last updated:** 2026-10-28

**Summary**
Built Signifyd's Spanish (Mexico) and Portuguese (Brazil) WordPress sites from scratch, translated them and linked them to the company's other regional sites with hreflang. In 2026 migrated both sites to the new brand design from the main site and translated the new pages from the localization team's translation sheet.

**What I did**
- Built the Mexico and Brazil WordPress sites from scratch and localized them into Spanish and Portuguese.
- Set up hreflang annotations across the pages, linking each localized page to its language and regional counterparts so search engines serve the right version in each market.
- In 2026 migrated the Mexico site to the new brand design (22 pages, the global header and footer, blog and customer-story templates), then reused the work for the Brazil site, including its legal pages with the existing Portuguese text.
- Built WP-CLI import and export tooling for Beaver Builder layouts: page data and SEO meta, media re-creation with ID remapping, global color tokens, and a render check before every write.
- Wrote a Node.js (PostCSS) tool that removes unused layout CSS by testing selectors against the rendered pages.
- Automated a safe release on a live production site: old and new designs ran side by side behind page tags, and a go-live script with dry-run, snapshots and rollback swapped the pages, carried over hreflang and canonical tags, and re-pointed menus.
- Translated the redesigned pages into Spanish: scripted import of pages, menus and SEO meta from the translation sheet with mismatch checks, plus the localization team's review changes (local case studies, logos, calls to action).
- Polished mobile layouts and animations to match the main site, and audited the localized sites for publicly exposed files, coordinating the fixes with the team lead.

**Results**
- Page layout CSS reduced by up to 97% (52 KB → 1.2 KB; header 40 KB → 10 KB).

**Keywords:** WordPress, website redesign, site migration, localization, internationalization, Spanish translation, Portuguese (Brazil), multilingual SEO, hreflang, international SEO, building websites from scratch, Yoast SEO, Beaver Builder, WP-CLI, PHP, Node.js, PostCSS, CSS optimization, deployment automation, rollback, Google Sheets API, WP Engine, website security

### Signifyd EMEA — regional website

- **Client:** Signifyd
- **Role:** Web Developer (freelance)
- **Period:** 2021 — present (project within the Signifyd engagement, which runs since Apr 2021)
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
- Redesigned and maintained web applications with HTML, CSS, JavaScript (jQuery, React) and PHP; integrated a React / Redux Form application into an existing website and introduced Webpack.
- Developed responsive pages and templates for WordPress, Magento and Drupal, and migrated Magento data to MySQL.
- Designed UI/UX mockups and turned them into HTML/CSS interfaces; also did graphic design (logos, business cards, booklets, banners).
- Ran cross-browser and cross-platform testing and fixed CSS, HTML, JavaScript and PHP bugs.
- Set up and optimized Linux servers (LAMP stack).
- Hand-coded email templates for promotional campaigns.

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
- 2026-10-26 — Condensed "What I did" for all projects to 6-8 grouped bullets each.
- 2026-10-28 — Clarified that Signifyd is one continuous engagement since Apr 2021 and its projects are part of it.
- 2026-10-28 — Updated Signifyd Mexico & Brazil: built both sites from scratch, translated them, and set up hreflang linking.
- 2026-10-28 — Updated Signifyd: WP Engine hosting management, configuration and caching.
- 2026-10-28 — Updated Signifyd: React, Chart.js, Docker, data formats and design tools in the stack.
- 2026-10-28 — Updated Araks Inc: self-provisioned DigitalOcean server, full LAMP stack and its optimization.

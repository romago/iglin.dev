# Roman Iglin — Projects & Work Log

> Structured record of Roman Iglin's projects, responsibilities and results.
> Written for AI assistants that prepare resumes, cover letters and job applications for Roman.
> Last updated: 2026-11-09

## Notes for AI readers

- Every fact in this file comes from Roman. Do not invent employers, dates, metrics, team sizes or technologies that are not listed here.
- Entries are ordered newest first. Prefer recent work and entries whose **Stack** and **Keywords** match the job description.
- "What I did" bullets are written to be reused in a resume, rephrased as needed.
- Some client work is described without confidential details on purpose. Do not guess at them.
- Signifyd is one continuous freelance engagement from April 2021 to the present. The Signifyd entries below are projects within it; a later project start date is not the start of the collaboration.
- Work for USACS (The Shift blog, Cullman EM Fellows) was done as a white-label subcontractor of a web agency. The agency is not named publicly: describe it as agency work for a web agency and do not guess its name. USACS was not Roman's direct client.
- IONOS Agency Partner is a free partner program at its entry level. Mention it for hosting, server and migration work, especially for clients who host on IONOS; do not present it as a certification or exam.
- Human-readable portfolio: https://iglin.dev

## Profile

- **Name:** Roman Iglin
- **Title:** Full Stack Developer
- **Location:** Woodstock, GA, USA
- **Experience:** professional web development since 2010
- **Open to:** freelance projects, full-time roles
- **Email:** roman@iglin.dev
- **LinkedIn:** https://www.linkedin.com/in/roman-iglin/
- **GitHub:** https://github.com/romago
- **Core stack:** PHP, JavaScript, Python, React, Node.js / Express, MongoDB, Chart.js, HTML5, CSS3 / SASS / LESS, Tailwind CSS, Liquid templates (Shopify / PathFactory), SQL
- **CMS & platforms:** WordPress, WooCommerce, WP Job Manager, Beaver Builder, ACF, Elementor, Drupal, Magento, Adobe Experience Manager (AEM), Shopify (Liquid), PathFactory, Joomla
- **Servers & hosting:** VPS and cloud server provisioning and administration on DigitalOcean (Droplets) and IONOS (VPS / cloud servers): creating and sizing servers, installing and configuring the Linux web stack (Ubuntu, Apache / Nginx, PHP-FPM, MariaDB / MySQL), SSL, DNS, firewalls and SSH access, backups, monitoring, performance tuning and moving sites between hosts; managed WordPress hosting on WP Engine
- **Partnerships:** IONOS Agency Partner since November 2026 (verified partner profile, level Partner Official), listed in the IONOS Partner Network: https://partnernetwork.ionos.com/partner/roman.iglin
- **Tools & DevOps:** Git, Docker, Webpack, Node.js, SSH, Linux / Apache / Nginx (LAMP), DigitalOcean, IONOS, WP Engine, PHP-FPM, MariaDB tuning, HestiaCP, Puppeteer, Lighthouse, ffmpeg, Cloudflare, Cloudflare Workers, Cloudflare Turnstile, GitHub Actions, uv, pytest, mypy, PyPI publishing
- **AI:** AI integration, LLM API integration (Google Gemini API, Claude API, Cloudflare Workers AI), structured JSON output, multi-provider fallback, AI-generated content with automated checks and human review
- **Integrations:** REST API, JSON / XML, SOAP, Stripe, Google Maps Geocoding API, Greenhouse Job Board API, Marketo, GTM / GA4, Smartling, Google Places API, QuickBooks Desktop (qbXML / Web Connector), Google Gemini API, Meta Pixel, Microsoft Clarity
- **Business systems:** custom CRM and B2B ordering portals (customer price levels, sales reps ordering for their customers, vendors, lead pipelines with approval, customer emails, sales dashboards) connected to accounting (QuickBooks Desktop)
- **SEO:** technical SEO, Core Web Vitals, schema.org / JSON-LD, Google Search Console
- **Design:** Figma, Sketch, Adobe Photoshop, Adobe Illustrator, UI/UX mockups

## Employment

| Period | Company | Role | Location |
| --- | --- | --- | --- |
| Oct 2026 — present | 4CornersWork | WordPress Developer (freelance, Upwork) | New Mexico (remote) |
| 2026 | Web agency (white-label subcontract, not named publicly) | Web Developer (subcontractor; end client USACS) | remote |
| 2025 — 2026 | FLS Transportation Services | Web Developer | remote |
| ongoing | People Movers | Web Developer / Performance Optimization (freelance) | California (remote) |
| Jun 2026 — present | Arthur Ray Law Offices | Web Developer / Technical SEO (freelance) | Memphis, TN (remote) |
| Apr 2021 — present | Signifyd | Web Developer (freelance, continuous since 2021) | San Jose, CA (remote) |
| May 2020 — Apr 2021 | Western Digital | Web Developer | Irvine, CA |
| 2017 — present | Araks Inc | Web Developer (freelance) | Los Angeles, CA (remote) |
| Jun 2012 — Apr 2020 | Polish TV Company | Web & Application Developer | New York, NY |

---

## Projects

### 4CornersWork — local job board for the Four Corners region (WordPress, WP Job Manager, WooCommerce, Stripe)

- **Client:** 4CornersWork (job board for oilfield, electrical, construction and other trades jobs in the Four Corners area of New Mexico, Colorado, Arizona and Utah)
- **Role:** WordPress Developer (freelance, Upwork)
- **Period:** Oct 2026 — present
- **Status:** active
- **Stack:** WordPress, PHP, JavaScript, CSS, WP Job Manager, WP Job Manager Resume Manager, WC Paid Listings, WooCommerce, Stripe, JobHunt theme (custom child theme), WP-CLI, Bash, rsync, Python, SVG, Google Maps Geocoding API, schema.org JobPosting (Google for Jobs), GoDaddy Managed WordPress, Git
- **Link:** https://4cornerswork.com
- **Last updated:** 2026-11-06

**Summary**
A local job board for trades and oilfield work in the Four Corners region, rebuilt from a stock job board theme into a custom job site. Roman audited the existing site, moved it to a new theme and built the job search, job pages, application flow, employer dashboard, paid job posting, emails and content pages in a custom child theme.

**What I did**
- Audited and cleaned up the existing WordPress job board (unused themes, page builder, demo importers), moved it to the JobHunt theme with a custom child theme, and deployed changes over SSH with WP-CLI and rsync.
- Designed the brand and UI: a logo and a Four Corners states icon generated as SVG with Python, a steel and safety-orange palette, and an Indeed / Monster-style homepage with one search bar, trade cards and latest jobs, plus a custom header, footer and mobile menu.
- Built the job search: a jobs page header with live job count and search, sidebar filters (trade, town with live counts, job type, date posted) with a mobile filter panel, job cards with pay and New tags, pagination and a no-results screen.
- Built the job page and application flow: a header with labeled job facts, similar jobs, SEO titles and Google for Jobs (JobPosting) pay data, and a custom Quick Apply form that needs no account and emails the resume to the employer, with spam protection.
- Built the employer side: a card-based employer dashboard (status, views, edit, mark filled, duplicate, renew), a simpler job posting form, and town validation with geocoding limited to the four states and a map on the job page.
- Set up paid job posting: job packages in WooCommerce with WC Paid Listings, Stripe checkout tested end to end with a real order, and a custom order page and order emails.
- Reworked all site emails (new job for approval, job approved, job ending soon with a renew link, account emails) in one branded template, tested by rendering them without sending.
- Wrote and built the About, Employers (prices pulled from the store) and Contact pages with a spam-protected contact form, and a News section with topics, a related news sidebar and a Latest News block on the homepage.

**Results**
- Job posting form cut from 32 to 12 fields.

**Keywords:** WordPress, job board, WP Job Manager, Resume Manager, WC Paid Listings, WooCommerce, Stripe, payment integration, paid listings, custom child theme, theme customization, PHP, JavaScript, CSS, responsive design, mobile UX, job search filters, employer dashboard, application form, transactional emails, email templates, Google Maps Geocoding API, Google for Jobs, JobPosting schema, schema.org, technical SEO, contact form, spam protection, WP-CLI, rsync, GoDaddy Managed WordPress, logo design, SVG, UI/UX, local business website

### siteaudit — open-source SEO and technical site audit CLI (Python, async crawler, PyPI package)

- **Client:** Personal open-source project (also produces the reports for Roman's site speed and SEO audit service)
- **Role:** Developer (design, implementation, testing, release)
- **Period:** Nov 2026 — present
- **Status:** active
- **Stack:** Python 3.12, asyncio, httpx, selectolax (Lexbor), Typer, Rich, Pydantic, Jinja2, pytest, pytest-asyncio, respx, mypy (strict), ruff, uv, GitHub Actions, PyPI trusted publishing
- **Link:** https://github.com/romago/siteaudit (source), https://pypi.org/project/site-audit/ (package)
- **Last updated:** 2026-11-06

**Summary**
A command-line tool that crawls a website and writes an SEO and technical audit report: a terminal summary, JSON, Markdown or a single-file HTML report with a site score. Roman designed, built, tested and published it on PyPI.

**What I did**
- Built an async crawler on asyncio and httpx: reads robots.txt and XML sitemaps (sitemap indexes, gzip), follows internal links breadth-first with a concurrency limit, and records every redirect hop with loop detection and size and time limits.
- Wrote a robots.txt matcher that follows RFC 9309 and Google's rules (longest match, `*` and `$` wildcards), because Python's standard robotparser misreads the default WordPress robots.txt.
- Implemented 49 issue types as small registered check functions with one rule catalogue: titles and meta descriptions, canonical and hreflang targets, noindex, JSON-LD syntax, broken internal links with the pages that link to them, redirect chains, duplicates, and the sitemap compared with the crawl.
- Built the report layer: Rich terminal summary, JSON, Markdown and a self-contained Jinja2 HTML report with a score, severity filters, light and dark themes and print styles; exit codes for use in CI pipelines.
- Set the project up to production standards: fully typed code checked by mypy in strict mode, ruff, pytest tests against a mocked site (respx), and GitHub Actions CI on Python 3.12 and 3.13.
- Released v0.1.0 to PyPI with trusted publishing (OIDC, no API tokens) and package attestations from a GitHub release workflow, after validating it on real sites and fixing false positives.

**Results**
- 102 automated tests with 98% code coverage; CI green on Python 3.12 and 3.13.
- Audits iglin.dev (11 URLs) in under 1 second.

**Keywords:** Python, Python 3.12, asyncio, async programming, httpx, web crawler, web scraping, CLI tool, Typer, Rich, Pydantic, Jinja2, pytest, unit testing, test automation, mocking, mypy, static typing, type hints, ruff, uv, Python packaging, PyPI, open source, GitHub Actions, CI/CD, trusted publishing, technical SEO, SEO audit, site audit, robots.txt, XML sitemap, canonical, hreflang, structured data, JSON-LD

### Tickdown — full-stack notes app with self-sorting checklists (React, Node.js, MongoDB, Docker)

- **Client:** Personal project (Roman's own product, built for daily use)
- **Role:** Full Stack Developer (product, front end, back end, deployment)
- **Period:** Apr 2026 — present
- **Status:** active
- **Stack:** React 18, Vite, Tailwind CSS, TipTap (ProseMirror), Zustand, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Docker Compose, Nginx, Let's Encrypt, Ubuntu VPS
- **Link:** https://tickdown.iglin.dev (live demo), https://github.com/romago/tickdown (source)
- **Last updated:** 2026-11-05

**Summary**
A self-hosted notes app, an alternative to Apple Notes that works the same on desktop and phone: when a task is ticked it drops below the open ones by itself. Roman designed, built and deployed the whole stack.

**What I did**
- Built the React front end with a TipTap / ProseMirror rich text editor, Zustand state, debounced autosave, folders with colors, pinned notes and live search, in a mobile-first layout with bottom navigation and sliding panels.
- Wrote a custom ProseMirror plugin that moves checked items below open ones, plus touch handling so checkboxes work reliably on phones; fixed a bug where checklist-first notes lost their titles.
- Built the Node.js / Express REST API on MongoDB (Mongoose) with JWT authentication, bcrypt-hashed passwords and per-user data scoping.
- Deployed with Docker Compose behind Nginx on an Ubuntu VPS with Let's Encrypt: isolated Docker network, localhost-only ports, secrets in environment files and memory limits.
- Launched a public demo with one-click demo sign-in, closed sign-up, a locked demo account and a nightly cron reset, plus a README with screenshots, API reference and setup guide.

**Keywords:** full stack development, React, Node.js, Express, MongoDB, Mongoose, REST API, JWT authentication, TipTap, ProseMirror, rich text editor, Tailwind CSS, Zustand, Vite, Docker, Docker Compose, Nginx reverse proxy, Let's Encrypt, VPS deployment, mobile-first UI, single-page application

### iglin.dev — personal site, portfolio and AI project estimator (React, Cloudflare Workers, LLM integration)

- **Client:** Personal project (Roman's own portfolio and lead-generation site)
- **Role:** Full Stack Developer (design, front end, back end, deployment)
- **Period:** Apr 2026 — present
- **Status:** active
- **Stack:** React 19, Vite, JavaScript, CSS, Cloudflare Workers, Wrangler, Cloudflare Turnstile, Cloudflare Workers AI (Llama 3.3 70B), Google Gemini API, Claude API (Anthropic SDK), JSON Schema structured output, SMTP, GitHub Actions, GitHub Pages
- **Link:** https://iglin.dev, https://portfolio.iglin.dev
- **Last updated:** 2026-10-28

**Summary**
Roman's personal site and a separate portfolio site built from one React codebase, with a "Quick Estimate" tool where visitors describe a project and get an AI-generated price, hours and timeline that reach Roman as leads by email.

**What I did**
- Built the main site and the portfolio site (portfolio.iglin.dev) in React and Vite from one codebase with shared case-study components: browser and phone mockups with hover-scrolling full-page screenshots, a lightbox and metric tiles; deployed with GitHub Actions to GitHub Pages.
- Built an AI project estimator: the LLM is prompted with Roman's real reference projects, returns a JSON Schema-validated breakdown (tasks, hours, timeline, stack, assumptions, open questions), and the price is computed on the server from the hours.
- Built the serverless back end as a Cloudflare Worker with multi-provider LLM support: Google Gemini API as the primary model, automatic fallback to Cloudflare Workers AI (Llama 3.3 70B) when the free tier is overloaded or slow, and optional Claude API; request timeouts on every call.
- Protected the estimator from bots and abuse: server-side Cloudflare Turnstile verification, per-IP rate limiting, a honeypot field, a CORS allowlist and HMAC-signed, short-lived tickets for the follow-up step, with no database.
- Automated lead capture: email notifications over SMTP for every estimate and for "Send to Roman" requests, with the visitor set as Reply-To so a lead can be answered directly.

**Keywords:** AI integration, LLM integration, LLM API, Google Gemini API, Claude API, Anthropic SDK, Cloudflare Workers AI, structured output, JSON Schema, AI fallback, serverless, Cloudflare Workers, edge functions, Cloudflare Turnstile, bot protection, rate limiting, HMAC, CORS, React, Vite, portfolio website, lead generation, SMTP email, GitHub Actions, GitHub Pages, full stack development

### Web agency (white-label) — Cullman EM Fellows website for USACS (WordPress block theme with custom ACF blocks)

- **Client:** A web agency (white-label subcontract, not named publicly); end client: US Acute Care Solutions (USACS), an emergency medicine physician group. USACS was not Roman's direct client.
- **Role:** Web Developer (white-label subcontractor for a web agency)
- **Period:** Apr 2026
- **Status:** completed
- **Stack:** WordPress 6.9, block theme (Full Site Editing, theme.json), custom ACF blocks, PHP, JavaScript, CSS, @wordpress/scripts, slick carousel, Gravity Forms, reCAPTCHA, Yoast SEO, Redirection, Block Visibility, Adobe Fonts (Typekit), WP Engine, Figma
- **Link:** https://cullman.emfellows.com
- **Last updated:** 2026-10-30

**Summary**
Redesign of the website for USACS' emergency medicine fellowship program in Cullman, done for a web agency: the source files of the previous theme had been lost, so I rebuilt the theme from scratch as a new WordPress block theme in the USACS 2026 brand, made of custom ACF blocks. The design was provided by the agency in Figma; I implemented it in code.

**What I did**
- Rebuilt the site's theme from scratch after the original theme's source files were lost, as a new WordPress block theme (Full Site Editing templates, theme.json), implementing the agency's Figma design with the USACS 2026 brand palette and typography (Spectral and Inter).
- Developed custom ACF blocks (home hero, content and image, two-column cards, form), each with its own JavaScript and CSS, built with @wordpress/scripts, so editors assemble pages from branded components.
- Built the site's pages (Home, Fellowship Information, How We Teach with courses, seminars and series, Current Fellows, Contact Us) and the application and contact forms with Gravity Forms and reCAPTCHA.

**Keywords:** WordPress block theme, theme development from scratch, theme rebuild, Full Site Editing, FSE, theme.json, ACF blocks, custom Gutenberg blocks, @wordpress/scripts, Gravity Forms, Figma to WordPress, design implementation, responsive layout, redesign, healthcare website, medical education, agency work, white-label development, subcontractor, WP Engine

### Web agency (white-label) — The Shift blog redesign for USACS (WordPress, Alpine.js header integration)

- **Client:** A web agency (white-label subcontract, not named publicly); end client: US Acute Care Solutions (USACS), an emergency medicine physician group. USACS was not Roman's direct client.
- **Role:** Web Developer (white-label subcontractor for a web agency)
- **Period:** Apr 2026
- **Status:** completed
- **Stack:** WordPress, PHP, custom theme, Foundation 6, Sass, JavaScript, jQuery, Alpine.js, MutationObserver, SVG, Material Symbols, Adobe Fonts (Typekit), WebP, Constant Contact, Figma
- **Link:** https://theshift.usacs.com
- **Last updated:** 2026-10-30

**Summary**
Redesign of The Shift, the USACS blog, done for a web agency: moved the WordPress blog to the new USACS 2026 brand and made it share the header and footer of the main usacs.com site. The design was provided by the agency in Figma; I implemented it in code.

**What I did**
- Implemented the agency's Figma design and rebranded the blog to the USACS 2026 identity: new color palette, Spectral and Inter typography replacing Lato, a new WebP hero and an SVG logo, reworking about 64 theme files.
- Integrated the header and footer imported from the new Alpine.js-based usacs.com: rewrote the theme's header script (about 500 lines) with Alpine components for the header, mega menu, mobile menu and search, used a MutationObserver to restore Alpine directives in the loaded markup, and repaired the broken mega-menu buttons in PHP.
- Redesigned the blog UI: post cards and meta, sidebar categories, the Constant Contact signup form, search and search results, pagination and post navigation.
- Removed Font Awesome (about 1,600 lines of SCSS plus font files) in favor of inline SVG icons and Material Symbols.

**Keywords:** WordPress, theme redesign, rebranding, Figma to WordPress, design implementation, Alpine.js, JavaScript, MutationObserver, mega menu, Foundation, Sass, SCSS refactoring, Font Awesome removal, SVG icons, blog design, healthcare website, agency work, white-label development, subcontractor

### FLS Transportation Services — corporate website (WordPress migration, WPBakery to Beaver Builder rebuild, French version, SEO)

- **Client:** FLS Transportation Services (North American freight brokerage and logistics company)
- **Role:** Web Developer
- **Period:** 2025 — 2026
- **Status:** completed
- **Stack:** WordPress, PHP, WPBakery Page Builder, Beaver Builder, Beaver Builder theme (child theme), custom Beaver Builder modules, custom localization plugin, ACF, Yoast SEO, schema.org / JSON-LD, hreflang, JavaScript, jQuery, Swiper, Apache, GA4, Google Tag Manager, HubSpot
- **Link:** https://www.flstransport.com
- **Last updated:** 2026-10-28

**Summary**
Migration of FLS Transportation's WordPress website from its previous hosting to a custom server and from WPBakery Page Builder to Beaver Builder, a French (Canada) version of the site, and SEO and design improvements.

**What I did**
- Migrated the WordPress site from its previous hosting to a custom server and set it up for production.
- Built a custom WordPress localization plugin and used it to add a French (Canada) version of the site: /fr/ URLs, a language switcher, and hreflang links between versions (en-US, fr-CA, x-default).
- Optimized SEO with Yoast SEO: page titles and meta descriptions, schema.org JSON-LD, and multilingual SEO for the bilingual site.
- Migrated the whole site from WPBakery Page Builder to Beaver Builder, rebuilding the pages with an improved design, a custom child theme and ACF-driven content.
- Developed custom Beaver Builder modules (PHP, JavaScript, CSS) as reusable, editable components for the site's pages.

**Keywords:** WordPress, website migration, WPBakery to Beaver Builder migration, page builder migration, custom Beaver Builder modules, server migration, hosting migration, multilingual website, French localization, fr-CA, hreflang, international SEO, technical SEO, Yoast SEO, Beaver Builder, ACF, custom WordPress plugin, web design, logistics website

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

### Araks Inc — B2B wholesale ordering platform and CRM (Drupal Commerce, QuickBooks integration, AI integration)

- **Client:** Araks Inc (Los Angeles wholesale distributor of European food products to stores)
- **Role:** Web Developer (freelance)
- **Period:** 2017 — present
- **Status:** active
- **Stack:** Drupal 7, Drupal Commerce, PHP 8.5, MariaDB / MySQL, JavaScript, jQuery, Drupal Views, Rules, DigitalOcean (droplet), LAMP stack: Linux (Ubuntu), Apache, MariaDB / MySQL, PHP; Nginx, PHP-FPM, HestiaCP, Let's Encrypt, QuickBooks Desktop (qbXML, Web Connector SOAP), Google Gemini API, GA4 Data API, Search Console API, PageSpeed Insights API, Lighthouse, schema.org / JSON-LD, Puppeteer, rclone, Brevo SMTP, Bash, Git
- **Link:** https://araks.org
- **Last updated:** 2026-11-09

**Summary**
Development, maintenance and server administration of Araks' B2B wholesale ordering platform with a built-in CRM on Drupal 7 / Drupal Commerce, hosted on a DigitalOcean server that I set up and maintain. Store customers order from a catalog of about 1,700 products at their own price levels, sales reps place orders for their stores, and staff manage leads, customers, vendors, orders and sales reports in the same system, synced with QuickBooks Desktop. In 2026 the work centered on the QuickBooks integration, the CRM, AI integration (Google Gemini API), performance, technical SEO and server reliability.

**What I did**
- Built a QuickBooks Desktop integration from scratch: a hand-written Web Connector SOAP/qbXML endpoint with a job queue, hourly product, price and stock sync for about 7,500 items, daily customer and vendor sync, and automatic export of web orders as Sales Orders (restocking orders as Purchase Orders), replacing manual CSV and XLSX exchange. Added a low-margin alert and a sales analytics dashboard on top of the synced data.
- Optimized the B2B ordering flow and the product catalog: a custom Drupal Views cache plugin keys per-customer price lists by a pricing fingerprint, serves the public catalog stale-while-revalidate with a render lock, and rebuilds both in the background; a rebuilt index-based catalog search also matches item codes. Refactored the legacy jQuery ordering script in small, separately shipped steps, and fixed order data-integrity bugs (unlinked bottle-deposit line items, carts wiped by stale checkout pages).
- Improved Core Web Vitals on public pages: self-hosted fonts and jQuery, deferred scripts, WebP images with srcset, and lazy loading for the 1,700 catalog photos. On the homepage, traced unstable mobile PageSpeed scores to the analytics tag with A/B test pages, deferred it until user interaction, and server-rendered the mobile brand carousel so the largest image paints with the page.
- Led technical SEO: clean URLs with about 3,900 automatic 301 redirects, a complete XML sitemap, schema.org JSON-LD (Product, BreadcrumbList, WholesaleStore, FAQPage) and a brand and country-of-origin taxonomy. Connected the GA4, Search Console and PageSpeed Insights APIs for reporting.
- Built and run the CRM side of the platform: customer accounts with their own price levels, sales reps ordering on behalf of their stores, vendor accounts for restocking orders, a lead pipeline (English/Russian wholesale landing page, spam-protected lead form, approval with expiring one-time price-list links, GA4 key events), branded customer emails with a send log and unsent-order reminders, a live panel of signed-in customers with their open cart totals, and a sales dashboard (sales by year, top customers, sales by rep).
- Integrated AI into the catalog workflow: built a Drupal module on the Google Gemini API that rewrote raw QuickBooks item names into clean product titles and descriptions for the whole catalog, with automated checks and a review and revert workflow.
- Set up and maintain the production server on a DigitalOcean droplet: a full LAMP stack on Ubuntu (Apache with event MPM, MariaDB / MySQL, PHP-FPM) behind Nginx, managed with HestiaCP, with Let's Encrypt SSL, HTTP/2 and TLS 1.3. Optimized it end to end (Nginx compression and static caching, PHP-FPM pools, MariaDB memory and I/O, swap) and migrated production from PHP 7.4 to 8.5 with scripted backup and rollback and 12 seconds of maintenance mode.
- Kept the server reliable and secure: resolved site hangs from database lock pile-ups with slow-query logging and automatic incident snapshots, fixed silently failing nightly backups and added encrypted weekly off-site copies with a tested restore and alerts, removed publicly exposed debug logs and backups, and verified SPF, DKIM and DMARC.

**Results**
- Signed-in checkout page: server response 7–13 s → about 0.5 s.
- Catalog page with 1,700 products on a phone over 4G: full load 16.8 s → 2.1 s; data downloaded before load 13.6 MB → 0.1 MB.
- Catalog page server response after product syncs: 3–15 page loads a day that waited 6–20 s for a rebuild → a steady 0.6–0.8 s.
- PHP 7.4 → 8.5: uncached product page throughput +38% (7.9 → 10.9 requests/s).
- Homepage on mobile (PageSpeed lab data): LCP 12.2 s → 2.0–2.4 s, performance score 60 → 93–99 (desktop 97–100).
- Catalog search over about 1,700 products: 547 ms → 41 ms per search (2.1 s → 0.11 s with the CPU slowed 4×).
- Database: buffer-pool hit rate 98.1% → 99.8%; slowest admin report query 4.5 s → 0.1 s.
- Google Search Console, the month after the URL, sitemap and SEO work vs the month before: impressions +98%, clicks +62%.

**Keywords:** Drupal 7, Drupal Commerce, B2B e-commerce, wholesale ordering, B2B ordering portal, CRM, custom CRM development, customer management, lead management, sales rep ordering, customer-specific pricing, sales dashboard, QuickBooks integration, qbXML, QuickBooks Web Connector, ERP integration, SOAP, PHP 8 migration, performance optimization, caching, stale-while-revalidate, Drupal Views, Core Web Vitals, LCP, PageSpeed Insights, Lighthouse, lazy loading, JavaScript refactoring, technical SEO, JSON-LD, XML sitemap, 301 redirects, lead generation, GA4, Google Search Console, AI integration, LLM integration, generative AI, AI content generation, Google Gemini API, DigitalOcean, LAMP, server provisioning, DevOps, Linux server administration, Apache, MariaDB tuning, Nginx, PHP-FPM, HestiaCP, backups, disaster recovery, website security, email deliverability, debugging, data integrity

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
- **Stack:** WordPress, PHP, JavaScript, React, Chart.js, HTML, CSS, Beaver Builder, WP Engine, WP-CLI, SSH, Docker, REST API, JSON / XML, Greenhouse Job Board API, WP-Cron, CMB2, jQuery, PathFactory, Liquid, Tailwind CSS, Marketo, GTM, GA4, Smartling, Figma, Sketch, Adobe Photoshop, Adobe Illustrator
- **Link:** https://www.signifyd.com
- **Last updated:** 2026-10-28

**Summary**
Long-term freelance collaboration with Signifyd since April 2021: ongoing development and maintenance of its WordPress marketing website: new features, custom plugins, third-party data integrations, analytics, performance and localization.

**What I did**
- Developed custom WordPress plugins and site features with PHP, JavaScript, React and Chart.js, and built pages in Beaver Builder from Figma and Sketch designs with custom HTML, CSS and JavaScript.
- Redesigned Signifyd's PathFactory resource center (resources.signifyd.com, the hub for the company's videos, PDFs and other content assets) several times (2023, 2025, 2026), developing the theme's Liquid section and page templates with Tailwind CSS.
- Built the Signifyd Jobs WordPress plugin, which integrates the Greenhouse Job Board API with the careers site: openings and departments sync automatically twice a day (WP-Cron, plus a manual sync page), so new jobs appear on the site and closed ones are removed with no manual work. The public job board groups openings by team, with dependent team and location filters, live counts and shareable filter URLs; I also added per-office openings shortcodes, 301 redirects from job URLs and IDs to the Greenhouse posting, and an HR role that manages jobs without admin access (code: https://github.com/romago/jobs).
- Integrated third-party data and marketing tools through REST APIs (G2 reviews, Marketo), and built Marketo forms and marketing HTML email templates.
- Led Core Web Vitals performance optimization of the site.
- Managed and configured Signifyd's WP Engine hosting across its installs (production, development and the EMEA, Mexico and Brazil sites): environments, SSH and WP-CLI access, deployments, and page and object caching for performance; resolved complex site issues and maintained process documentation and technical articles.
- Implemented analytics and consent: Google Tag Manager tags and triggers, GA4 tracking and Consent Mode v2.
- Localized the websites through Smartling (Global Delivery Network / Connector).

**Results**
- Core Web Vitals performance score: ~30 → 90.

**Keywords:** WordPress plugin development, PathFactory, content experience platform, resource center, Liquid templates, Shopify Liquid, Tailwind CSS, React, Chart.js, Docker, Figma, WP Engine, managed WordPress hosting, WP-CLI, caching, REST API, Greenhouse API integration, ATS integration, job board, careers page, custom post types, custom taxonomies, WP-Cron, custom user roles, Core Web Vitals, performance optimization, GTM, GA4, Consent Mode v2, Marketo, Smartling, localization, email templates

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
- 2026-10-28 — Added FLS Transportation Services: hosting-to-custom-server migration, French (Canada) version, SEO and design.
- 2026-10-28 — Updated FLS Transportation Services: WPBakery to Beaver Builder migration.
- 2026-10-28 — Updated FLS Transportation Services: custom Beaver Builder modules.
- 2026-10-28 — Updated FLS Transportation Services: the localization plugin is Roman's own work.
- 2026-10-28 — Updated Araks Inc: AI integration (Google Gemini API) tagged in the title, summary and keywords; AI line added to Profile.
- 2026-10-28 — Added iglin.dev: personal and portfolio sites, AI project estimator on Cloudflare Workers with Gemini / Workers AI fallback, bot protection and email leads; Profile title changed to Full Stack Developer, AI and DevOps skills extended.
- 2026-10-28 — Updated Signifyd: Signifyd Jobs plugin (Greenhouse Job Board API sync, filterable job board).
- 2026-10-30 — Added agency work for USACS (as a web agency's subcontractor): The Shift blog redesign and the Cullman EM Fellows block theme; new Employment row.
- 2026-10-30 — Updated Cullman EM Fellows: theme rebuilt from scratch by Roman after the original source was lost; period Apr 2026.
- 2026-10-30 — Updated The Shift and Cullman EM Fellows: designs were provided by the agency in Figma and implemented by Roman.
- 2026-10-30 — Updated Signifyd: PathFactory resource center redesigns with Liquid templates and Tailwind CSS; Liquid, Tailwind CSS and PathFactory added to Profile.
- 2026-10-31 — Updated Profile: servers and hosting skills (DigitalOcean Droplets, IONOS VPS / cloud servers).
- 2026-11-04 — Updated Profile: IONOS Agency Partner since November 2026 (verified profile, Partner Official) with the Partner Network profile link.
- 2026-11-05 — Updated Araks Inc: homepage mobile PageSpeed 93–99, faster catalog search, incremental refactoring of the ordering script.
- 2026-11-05 — Added Tickdown: full-stack notes app (React, Node.js, MongoDB, Docker) with a public demo.
- 2026-11-05 — Updated Araks Inc: stale-while-revalidate cache for the public catalog (no more 6–20 s rebuilds after product syncs).
- 2026-11-05 — Updated the USACS agency entries: the agency is no longer named; described as white-label work for a web agency.
- 2026-11-06 — Added siteaudit: open-source Python CLI for SEO and technical site audits, published on PyPI as site-audit; Python, uv, pytest, mypy and PyPI added to Profile.
- 2026-11-06 — Added 4CornersWork: WordPress job board on WP Job Manager with job search and filters, Quick Apply, employer dashboard, paid job posting with Stripe, emails and content pages; new Employment row, WooCommerce, WP Job Manager and Stripe added to Profile.
- 2026-11-09 — Updated Araks Inc: described as a B2B ordering platform with a built-in CRM (customers, price levels, sales reps, vendors, leads, customer emails, sales dashboard); Business systems added to Profile.

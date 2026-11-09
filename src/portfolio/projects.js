// Case studies for portfolio.iglin.dev. Facts come from public/projects.md;
// keep them in sync and never add contact details here.
import pmHome from './shots/peoplemovers-home-mobile.webp'
import pmWhiteGlove from './shots/peoplemovers-wg-full.webp'
import flsFull from './shots/fls-full.webp'
import flsMobile from './shots/fls-mobile.webp'
import araksHome from './shots/araks-home-full.webp'
import araksCatalog from './shots/araks-catalog-mobile.webp'
import memphisFull from './shots/memphislaw-full.webp'
import memphisMobile from './shots/memphislaw-mobile.webp'
import mxFull from './shots/signifyd-mx-full.webp'
import brMobile from './shots/signifyd-br-mobile.webp'
import signifydFull from './shots/signifyd-full.webp'
import signifydMobile from './shots/signifyd-mobile.webp'
import emeaImage from './shots/signifyd-emea.webp'
import emeaVideo from './shots/signifyd-emea.mp4'
import cullmanFull from './shots/cullman-full.webp'
import shiftMobile from './shots/theshift-mobile.webp'
import tickdownDesktop from './shots/tickdown-desktop.webp'
import tickdownMobile from './shots/tickdown-mobile.webp'

export const projects = [
  {
    id: 'signifyd',
    title: 'Signifyd',
    tagline: 'Corporate marketing website: plugins, integrations and speed',
    client: 'E-commerce fraud protection company',
    role: 'WordPress development',
    period: '2021 — present',
    url: 'https://www.signifyd.com',
    summary:
      'Long-term freelance collaboration since April 2021: ongoing development of the company’s WordPress marketing site, custom plugins, third-party data integrations, hosting, analytics, performance and localization.',
    bullets: [
      'Custom WordPress plugins and features with PHP, JavaScript, React and Chart.js; pages in Beaver Builder built from Figma and Sketch designs.',
      'REST API integrations with G2, Greenhouse and Marketo.',
      'Core Web Vitals optimization of the whole site.',
      'Manage WP Engine hosting for all installs (production, development, EMEA, Mexico and Brazil): environments, SSH and WP-CLI, deployments, page and object caching.',
      'Google Tag Manager, GA4 and Consent Mode v2.',
      'Localization through Smartling; Marketo forms and HTML email templates.',
    ],
    metrics: [
      { value: '30 → 90', label: 'Core Web Vitals performance score' },
      { value: '5+ years', label: 'Continuous engagement since April 2021' },
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'React', 'Chart.js', 'Beaver Builder', 'WP Engine', 'WP-CLI', 'REST API', 'Marketo', 'GTM', 'GA4', 'Smartling', 'Figma'],
    visual: {
      layout: 'browser',
      browser: { src: signifydFull, width: 1200, height: 5000, alt: 'signifyd.com homepage, full page', domain: 'signifyd.com', scroll: true },
      phone: { src: signifydMobile, width: 600, height: 5231, alt: 'signifyd.com on a phone' },
    },
  },
  {
    id: 'people-movers',
    title: 'People Movers',
    tagline: 'Moving company website: full redesign and a near-instant ad landing page',
    client: 'California moving company',
    role: 'Redesign · Performance · Accessibility',
    period: '2026',
    url: 'https://peoplemoverscalifornia.com',
    summary:
      'Rebuilt the whole WordPress site of a moving company serving Sacramento, the Bay Area and Los Angeles, then made the paid-ads landing page load almost instantly on phones without losing any lead tracking.',
    bullets: [
      'Redesigned the site on WordPress with Elementor Pro and a custom child theme: homepage, city and service landing pages, header, footer and mobile layouts.',
      'Made pages cacheable at the host and CDN, delayed third-party tags until first interaction and removed unused plugins and heavy assets.',
      'Built a lazy video loader (poster images, inline autoplay in Facebook and Instagram in-app browsers) and re-encoded all site videos.',
      'Fixed accessibility: heading order, contrast, quote form labels and autocomplete, accessible menu controls.',
      'Set up a safe workflow: Git mirror of the live site, rsync deploy scripts and a Puppeteer smoke test for layout, video, forms and click-to-call.',
    ],
    metrics: [
      { value: '33 → 98', label: 'Lighthouse mobile performance, ad landing page' },
      { value: '17.7 → 0.9 MB', label: 'Landing page weight' },
      { value: '89 → 100', label: 'Accessibility score' },
      { value: '40 → 5.3 MB', label: 'Site video after re-encoding' },
    ],
    stack: ['WordPress', 'Elementor Pro', 'PHP', 'JavaScript', 'WP-CLI', 'Cloudflare', 'Puppeteer', 'Lighthouse', 'GA4', 'GTM'],
    visual: {
      layout: 'browser',
      browser: { src: pmWhiteGlove, width: 792, height: 3500, alt: 'White glove moving page, full page', domain: 'peoplemoverscalifornia.com', scroll: true },
      phone: { src: pmHome, width: 600, height: 5231, alt: 'People Movers homepage on a phone' },
    },
  },
  {
    id: 'araks',
    title: 'Araks Inc',
    tagline: 'B2B ordering platform and CRM with a QuickBooks integration',
    client: 'Los Angeles food wholesale distributor',
    role: 'Development · CRM · Integration · DevOps',
    period: '2017 — present',
    url: 'https://araks.org',
    summary:
      'A B2B ordering platform with a built-in CRM on Drupal Commerce: stores order from a catalog of about 1,700 products at their own prices, sales reps order for their stores, and staff manage leads, customers, vendors and sales in one system. It runs on a DigitalOcean server I set up and maintain. I built the QuickBooks Desktop integration from scratch and made the catalog, the ordering flow and the server fast and reliable.',
    bullets: [
      'Hand-written QuickBooks Web Connector (SOAP / qbXML) endpoint: hourly price and stock sync for ~7,500 items, customer sync and automatic export of web orders, replacing manual CSV exchange.',
      'CRM for the sales team: customer accounts with their own price levels, sales reps ordering for their stores, vendor accounts for restocking orders, wholesale leads with approval and one-time price-list links, branded customer emails with a send log, a live panel of signed-in customers with open cart totals, and a sales dashboard (sales by year, top customers, sales by rep).',
      'Catalog: custom Drupal Views cache for per-customer price lists, a stale-while-revalidate public catalog rebuilt in the background with a render lock, and an index-based search that also matches item codes.',
      'Core Web Vitals: deferred the analytics tag until interaction, server-rendered the mobile brand carousel, self-hosted fonts and jQuery, WebP with srcset and lazy loading for 1,700 catalog photos.',
      'Technical SEO: clean URLs with ~3,900 automatic 301 redirects, XML sitemap and schema.org JSON-LD; Google Search impressions +98% the month after.',
      'AI catalog module on the Gemini API that rewrote raw item names into clean product titles and descriptions.',
      'Set up and run the production server on a DigitalOcean droplet: LAMP on Ubuntu behind Nginx, HestiaCP, Let’s Encrypt, HTTP/2 and TLS 1.3, tuned PHP-FPM and MariaDB.',
      'Migrated production from PHP 7.4 to 8.5 (+38% throughput) with scripted backup and rollback and 12 seconds of maintenance mode; added encrypted off-site backups with a tested restore.',
    ],
    metrics: [
      { value: '60 → 93–99', label: 'Homepage mobile PageSpeed score (LCP 12.2 → 2.0 s)' },
      { value: '16.8 → 2.1 s', label: 'Catalog page load on a phone over 4G' },
      { value: '547 → 41 ms', label: 'Catalog search across 1,700 products' },
      { value: '7–13 → 0.5 s', label: 'Signed-in checkout server response' },
    ],
    stack: ['Drupal 7', 'Drupal Commerce', 'PHP 8.5', 'MariaDB', 'QuickBooks qbXML', 'SOAP', 'Gemini API', 'DigitalOcean', 'Nginx', 'Apache', 'HestiaCP'],
    visual: {
      layout: 'browser',
      browser: { src: araksHome, width: 1200, height: 2999, alt: 'Araks homepage, full page', domain: 'araks.org', scroll: true },
      phone: { src: araksCatalog, width: 600, height: 5231, alt: 'Araks wholesale catalog on a phone' },
    },
  },
  {
    id: 'fls',
    title: 'FLS Transportation',
    tagline: 'Logistics company website: server move, page builder rebuild and a French version',
    client: 'North American freight brokerage',
    role: 'Migration · Localization · SEO',
    period: '2025 — 2026',
    url: 'https://www.flstransport.com',
    summary:
      'Moved the WordPress site of a freight brokerage and logistics company to a custom server, rebuilt it from WPBakery on Beaver Builder with an improved design, and added a French (Canada) version.',
    bullets: [
      'Migrated the WordPress site from its previous hosting to a custom server and set it up for production.',
      'Rebuilt the whole site from WPBakery Page Builder on Beaver Builder with an improved design, a custom child theme and ACF-driven content.',
      'Developed custom Beaver Builder modules (PHP, JavaScript, CSS) as reusable, editable components.',
      'Built my own WordPress localization plugin for the French (Canada) version: /fr/ URLs, a language switcher and hreflang links (en-US, fr-CA, x-default).',
      'SEO with Yoast: titles and meta descriptions, schema.org JSON-LD and multilingual SEO for the bilingual site.',
    ],
    metrics: [
      { value: 'EN + FR', label: 'Bilingual site on a custom localization plugin' },
      { value: '100%', label: 'Pages moved from WPBakery to Beaver Builder' },
    ],
    stack: ['WordPress', 'Beaver Builder', 'Custom BB modules', 'WPBakery', 'PHP', 'ACF', 'JavaScript', 'Yoast SEO', 'JSON-LD', 'hreflang', 'GA4', 'GTM', 'HubSpot'],
    visual: {
      layout: 'browser',
      browser: { src: flsFull, width: 1200, height: 5000, alt: 'flstransport.com homepage, full page', domain: 'flstransport.com', scroll: true },
      phone: { src: flsMobile, width: 600, height: 5231, alt: 'flstransport.com on a phone' },
    },
  },
  {
    id: 'arthur-ray',
    title: 'Arthur Ray Law Offices',
    tagline: 'Law firm websites: custom theme redesign and technical SEO',
    client: 'Memphis law firm, two websites',
    role: 'Redesign · Technical SEO · Core Web Vitals',
    period: '2026 — present',
    url: 'https://www.memphislaw.com',
    summary:
      'Redesigned memphislaw.com with a new custom WordPress theme and run technical SEO, performance and security for both of the firm’s sites.',
    bullets: [
      'New responsive theme built on ACF flexible-content sections: homepage, service and attorney pages, call-to-action footer.',
      'Rebuilt navigation from Search Console data and added a sticky mobile header with an always-visible click-to-call button.',
      'Google reviews plugin: syncs the rating from the Places API weekly and renders a crawlable reviews block instead of a third-party slider.',
      'Full SEO audit with fixes to indexing, sitemaps and caching, plus schema.org JSON-LD (LegalService, Person, FAQPage).',
      'Page-specific critical CSS, font loading for LCP and reserved space for late-loading forms.',
    ],
    metrics: [
      { value: '0.59 → 0.001', label: 'Layout shift (CLS) on the contact page' },
      { value: '93 → 100', label: 'Accessibility score, second site homepage' },
      { value: '19 → 5', label: 'Header menu items, reworked for SEO' },
    ],
    stack: ['WordPress', 'Custom theme', 'ACF Pro', 'PHP', 'WP-CLI', 'WP Rocket', 'JSON-LD', 'Search Console', 'Places API'],
    visual: {
      layout: 'browser',
      browser: { src: memphisFull, width: 1200, height: 3488, alt: 'memphislaw.com homepage, full page', domain: 'memphislaw.com', scroll: true },
      phone: { src: memphisMobile, width: 600, height: 5231, alt: 'memphislaw.com on a phone' },
    },
  },
  {
    id: 'tickdown',
    title: 'Tickdown',
    tagline: 'Full-stack notes app with checklists that sort themselves',
    client: 'Own product, built for daily use',
    role: 'Product · Full-stack development · DevOps',
    period: '2026',
    links: [
      { label: 'Try the live demo', url: 'https://tickdown.iglin.dev' },
      { label: 'Source on GitHub', url: 'https://github.com/romago/tickdown' },
    ],
    summary:
      'A self-hosted alternative to Apple Notes that works the same on desktop and phone. When you tick a task, it drops below the open ones by itself, so what is left to do always stays on top. I designed, built and deployed the whole stack: React front end, Node.js API, MongoDB and the Docker setup on my own server.',
    bullets: [
      'React 18 + Vite + Tailwind front end with a TipTap (ProseMirror) rich text editor, Zustand state and debounced autosave.',
      'Custom ProseMirror plugin that moves checked items below open ones, plus touch handling so checkboxes work reliably on phones.',
      'Node.js + Express REST API on MongoDB (Mongoose): notes, folders with colors, pinning and live search.',
      'Accounts with JWT and bcrypt-hashed passwords, per-user data scoping and a public demo mode with closed sign-up and a locked demo account.',
      'Mobile-first layout: bottom navigation, sliding panels and a scrollable toolbar.',
      'Deployed with Docker Compose behind Nginx on an Ubuntu VPS with Let’s Encrypt: isolated Docker network, localhost-only ports, memory limits and a nightly cron that resets the demo.',
    ],
    metrics: [],
    stack: ['React', 'Vite', 'Tailwind CSS', 'TipTap / ProseMirror', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Docker Compose', 'Nginx'],
    visual: {
      layout: 'browser',
      browser: { src: tickdownDesktop, width: 1200, height: 750, alt: 'Tickdown on desktop: folders, note list and a checklist', domain: 'tickdown.iglin.dev' },
      phone: { src: tickdownMobile, width: 600, height: 1299, alt: 'Tickdown note list on a phone' },
    },
  },
  {
    id: 'usacs',
    title: 'USACS: The Shift & Cullman EM Fellows',
    tagline: 'Two healthcare websites moved to a new brand, as a subcontractor for a web agency',
    client: 'White-label work for a web agency',
    role: 'Figma to WordPress · Theme development',
    period: '2026',
    links: [
      { label: 'Cullman EM Fellows', url: 'https://cullman.emfellows.com' },
      { label: 'The Shift blog', url: 'https://theshift.usacs.com' },
    ],
    summary:
      'For a web agency I redesigned two WordPress sites of their client USACS, an emergency medicine physician group, in its new 2026 brand: the company blog The Shift and the site of its emergency medicine fellowship in Cullman, Alabama. The agency provided the designs in Figma; I implemented them in code.',
    bullets: [
      'Cullman EM Fellows: the previous theme’s source files had been lost, so I rebuilt the theme from scratch as a WordPress block theme (Full Site Editing, theme.json), implementing the agency’s Figma design in the new brand palette and typography.',
      'Custom ACF blocks (home hero, content and image, two-column cards, form), each with its own JavaScript and CSS built with @wordpress/scripts, so editors assemble pages from branded components.',
      'Built the fellowship pages and the application and contact forms with Gravity Forms and reCAPTCHA.',
      'The Shift: implemented the agency’s Figma design and moved the blog to the new brand (Spectral and Inter type, new palette, WebP hero, SVG logo), with new post cards, categories, signup form, search and pagination.',
      'Made the blog share the header and footer of the new Alpine.js-based usacs.com: Alpine components for the mega menu, mobile menu and search, and a MutationObserver that restores Alpine directives in the imported markup.',
      'Replaced Font Awesome (about 1,600 lines of SCSS plus font files) with inline SVG icons and Material Symbols.',
    ],
    metrics: [
      { value: '2 sites', label: 'Redesigned in the new 2026 brand' },
      { value: '4', label: 'Custom ACF blocks in a new block theme' },
      { value: '~500 lines', label: 'Alpine.js header integration for the blog' },
    ],
    stack: ['WordPress', 'Block theme (FSE)', 'ACF blocks', '@wordpress/scripts', 'PHP', 'JavaScript', 'Alpine.js', 'Sass', 'Foundation', 'Gravity Forms', 'WP Engine', 'Figma'],
    visual: {
      layout: 'browser',
      browser: { src: cullmanFull, width: 1200, height: 5000, alt: 'cullman.emfellows.com homepage, full page', domain: 'cullman.emfellows.com', scroll: true },
      phone: { src: shiftMobile, width: 600, height: 5231, alt: 'theshift.usacs.com blog on a phone' },
    },
  },
  {
    id: 'signifyd-latam',
    title: 'Signifyd Mexico & Brazil',
    tagline: 'Localized sites built from scratch, then moved to the new brand design',
    client: 'E-commerce fraud protection company',
    role: 'Migration · Localization · Automation',
    period: 'Signifyd engagement · redesign 2026',
    url: 'https://mx.signifyd.com',
    summary:
      'Built the Spanish (Mexico) and Portuguese (Brazil) WordPress sites from scratch and linked them to the other regional sites with hreflang. In 2026 moved both to the company’s new brand design with a scripted, reversible go-live.',
    bullets: [
      'Built both sites from scratch, localized them into Spanish and Portuguese and set up hreflang across all regional versions.',
      'Migrated 22 pages, the global header and footer, blog and customer-story templates for Mexico to the new design, then reused the work for Brazil.',
      'WP-CLI import and export tooling for Beaver Builder layouts, media and SEO meta, with a render check before every write.',
      'Node.js (PostCSS) tool that removes unused layout CSS by testing selectors against the rendered pages.',
      'Go-live script with dry run, snapshots and rollback; carried over hreflang and canonical tags.',
      'Imported Spanish translations from the localization team’s sheet with mismatch checks.',
    ],
    metrics: [
      { value: '−97%', label: 'Page layout CSS (52 KB → 1.2 KB)' },
      { value: '22', label: 'Pages migrated to the new design' },
      { value: '2', label: 'Sites built from scratch: Spanish and Portuguese' },
    ],
    stack: ['WordPress', 'Beaver Builder', 'PHP', 'WP-CLI', 'Node.js', 'PostCSS', 'Python', 'Google Sheets API', 'Yoast SEO', 'hreflang', 'WP Engine'],
    visual: {
      layout: 'browser',
      browser: { src: mxFull, width: 1200, height: 4880, alt: 'mx.signifyd.com homepage, full page', domain: 'mx.signifyd.com', scroll: true },
      phone: { src: brMobile, width: 600, height: 5231, alt: 'br.signifyd.com on a phone' },
    },
  },
  {
    id: 'signifyd-emea',
    title: 'Signifyd EMEA',
    tagline: 'Regional website for Europe and the Middle East',
    client: 'E-commerce fraud protection company',
    role: 'Front-end & WordPress',
    period: '2021 — present',
    summary:
      'Responsive regional website with a modern design, API integrations and attention to performance and conversion.',
    bullets: [
      'Built the responsive website with a modern design on React, WordPress and SCSS.',
      'Integrated APIs and optimized the site for speed and conversion.',
    ],
    metrics: [],
    stack: ['React', 'WordPress', 'PHP', 'REST API', 'SCSS'],
    visual: {
      layout: 'video',
      browser: { src: emeaImage, width: 1440, height: 891, video: emeaVideo, alt: 'Signifyd EMEA homepage', domain: 'signifyd.com' },
    },
  },
]

export const earlier = [
  {
    title: 'Western Digital',
    role: 'Web Developer',
    period: '2020 — 2021',
    text: 'Cross-browser page layouts in Adobe Experience Manager, bug fixing and content updates through SAP Hybris.',
    stack: ['AEM', 'HTML', 'CSS', 'JavaScript', 'SAP Hybris'],
  },
  {
    title: 'Polish TV Company',
    role: 'Web & Application Developer',
    period: '2012 — 2020',
    text: 'Eight years of websites and web apps: redesigns, a React / Redux app inside an existing site, WordPress, Magento and Drupal templates, UI/UX mockups, email templates and LAMP servers.',
    stack: ['PHP', 'React', 'Redux', 'WordPress', 'Magento', 'Drupal', 'MySQL'],
  },
]

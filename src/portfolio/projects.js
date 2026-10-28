// Case studies for portfolio.iglin.dev. Facts come from public/projects.md;
// keep them in sync and never add contact details here.
import pmHome from './shots/peoplemovers-home-mobile.webp'
import pmSac from './shots/peoplemovers-sac-mobile.webp'
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

export const projects = [
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
      layout: 'phones',
      phones: [
        { src: pmHome, alt: 'People Movers homepage on a phone' },
        { src: pmSac, alt: 'Sacramento movers landing page on a phone' },
      ],
    },
  },
  {
    id: 'araks',
    title: 'Araks Inc',
    tagline: 'B2B wholesale ordering site with a QuickBooks integration',
    client: 'Los Angeles food wholesale distributor',
    role: 'Development · Integration · Server',
    period: '2017 — present',
    url: 'https://araks.org',
    summary:
      'Drupal Commerce site where store owners and sales reps order from a catalog of about 1,700 products. I built a QuickBooks Desktop integration from scratch and made the signed-in ordering flow, catalog and server fast and reliable.',
    bullets: [
      'Hand-written QuickBooks Web Connector (SOAP / qbXML) endpoint: hourly price and stock sync for ~7,500 items, customer sync and automatic export of web orders, replacing manual CSV exchange.',
      'Custom Drupal Views cache for per-customer price lists, rebuilt in the background.',
      'Core Web Vitals work: self-hosted fonts, deferred scripts, WebP with srcset and lazy loading for 1,700 catalog photos.',
      'Technical SEO: clean URLs with ~3,900 automatic 301 redirects, XML sitemap and schema.org JSON-LD.',
      'AI catalog module on the Gemini API that rewrote raw item names into clean product titles and descriptions.',
      'Migrated production from PHP 7.4 to 8.5 with 12 seconds of maintenance mode; tuned MariaDB and PHP-FPM.',
    ],
    metrics: [
      { value: '7–13 → 0.5 s', label: 'Signed-in checkout server response' },
      { value: '16.8 → 2.1 s', label: 'Catalog page load on a phone over 4G' },
      { value: '+98%', label: 'Google Search impressions after the SEO work' },
      { value: '+38%', label: 'Throughput after the PHP 8.5 upgrade' },
    ],
    stack: ['Drupal 7', 'Drupal Commerce', 'PHP 8.5', 'MariaDB', 'QuickBooks qbXML', 'SOAP', 'Gemini API', 'Nginx', 'Linux'],
    visual: {
      layout: 'browser',
      browser: { src: araksHome, alt: 'Araks homepage, full page', domain: 'araks.org', scroll: true },
      phone: { src: araksCatalog, alt: 'Araks wholesale catalog on a phone' },
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
      browser: { src: memphisFull, alt: 'memphislaw.com homepage, full page', domain: 'memphislaw.com', scroll: true },
      phone: { src: memphisMobile, alt: 'memphislaw.com on a phone' },
    },
  },
  {
    id: 'signifyd-latam',
    title: 'Signifyd Mexico & Brazil',
    tagline: 'Localized sites moved to a new brand design and translated',
    client: 'E-commerce fraud protection company',
    role: 'Migration · Localization · Automation',
    period: '2026 — present',
    url: 'https://mx.signifyd.com',
    summary:
      'Moved the Spanish and Portuguese WordPress sites to the company’s new brand design and released them on live production with a scripted, reversible go-live.',
    bullets: [
      'Migrated 22 pages, the global header and footer, blog and customer-story templates for Mexico, then reused the work for Brazil.',
      'WP-CLI import and export tooling for Beaver Builder layouts, media and SEO meta, with a render check before every write.',
      'Node.js (PostCSS) tool that removes unused layout CSS by testing selectors against the rendered pages.',
      'Go-live script with dry run, snapshots and rollback; carried over hreflang and canonical tags.',
      'Imported Spanish translations from the localization team’s sheet with mismatch checks.',
    ],
    metrics: [
      { value: '−97%', label: 'Page layout CSS (52 KB → 1.2 KB)' },
      { value: '22', label: 'Pages migrated to the new design' },
      { value: '2', label: 'Languages: Spanish and Portuguese' },
    ],
    stack: ['WordPress', 'Beaver Builder', 'PHP', 'WP-CLI', 'Node.js', 'PostCSS', 'Python', 'Google Sheets API', 'Yoast SEO'],
    visual: {
      layout: 'browser',
      browser: { src: mxFull, alt: 'mx.signifyd.com homepage, full page', domain: 'mx.signifyd.com', scroll: true },
      phone: { src: brMobile, alt: 'br.signifyd.com on a phone' },
    },
  },
  {
    id: 'signifyd',
    title: 'Signifyd',
    tagline: 'Corporate marketing website: plugins, integrations and speed',
    client: 'E-commerce fraud protection company',
    role: 'WordPress development',
    period: '2021 — present',
    url: 'https://www.signifyd.com',
    summary:
      'Ongoing development of the company’s WordPress marketing site: custom plugins, third-party data integrations, analytics, performance and localization.',
    bullets: [
      'Custom WordPress plugins and pages in Beaver Builder with custom HTML, CSS and JavaScript.',
      'REST API integrations with G2, Greenhouse and Marketo.',
      'Core Web Vitals optimization of the whole site.',
      'Google Tag Manager, GA4 and Consent Mode v2.',
      'Localization through Smartling; Marketo forms and HTML email templates.',
    ],
    metrics: [
      { value: '30 → 90', label: 'Core Web Vitals performance score' },
      { value: '5+ years', label: 'Ongoing engagement' },
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'Beaver Builder', 'REST API', 'Marketo', 'GTM', 'GA4', 'Smartling'],
    visual: {
      layout: 'browser',
      browser: { src: signifydFull, alt: 'signifyd.com homepage, full page', domain: 'signifyd.com', scroll: true },
      phone: { src: signifydMobile, alt: 'signifyd.com on a phone' },
    },
  },
  {
    id: 'signifyd-emea',
    title: 'Signifyd EMEA',
    tagline: 'Regional website for Europe and the Middle East',
    client: 'E-commerce fraud protection company',
    role: 'Front-end & WordPress',
    period: 'Signifyd engagement',
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
      browser: { src: emeaImage, video: emeaVideo, alt: 'Signifyd EMEA homepage', domain: 'signifyd.com' },
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

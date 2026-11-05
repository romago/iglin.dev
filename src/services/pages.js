// Niche service pages at /services/<slug>/, one object per page. scripts/prerender.mjs turns each into
// static HTML with its own title, description, canonical, JSON-LD and a sitemap entry.
// Facts must come from public/projects.md. DRAFT pages are reviewed by Roman before they go live.

export const nichePages = [
  {
    slug: 'quickbooks-website-integration',
    draft: true,
    metaTitle: 'QuickBooks Desktop Website Integration Developer | Roman Iglin',
    metaDescription:
      'I connect your website or online store to QuickBooks Desktop through the Web Connector: products, prices, stock, customers and orders sync on a schedule. Real case: about 7,500 items synced every hour.',
    service: 'QuickBooks Desktop website integration',
    eyebrow: 'QuickBooks Desktop integration',
    h1: 'QuickBooks Desktop integration for your website',
    lead:
      'Stop retyping orders and price lists between your website and QuickBooks. I connect the two through the QuickBooks Web Connector, so products, prices, stock, customers and orders stay in sync on a schedule.',
    highlights: [
      { value: '~7,500', label: 'items kept in sync' },
      { value: 'Hourly', label: 'product, price and stock sync' },
      { value: 'Automatic', label: 'web orders sent to QuickBooks' },
    ],
    problems: [
      'Orders from the website are typed into QuickBooks by hand, every day.',
      'Prices and stock on the site lag behind QuickBooks because the export is manual or weekly.',
      'Customers exist on the site but not in QuickBooks, or the other way around.',
      'You run QuickBooks Desktop, so connectors built for QuickBooks Online do not fit.',
    ],
    steps: [
      { title: 'Map the data', text: 'We agree on what syncs in which direction: items, prices, stock, customers, vendors and orders, and which QuickBooks fields each one maps to.' },
      { title: 'Build the Web Connector endpoint', text: 'A SOAP / qbXML service on your web server with a job queue. The Web Connector on your QuickBooks computer calls it on a schedule, so nothing on that computer is opened to the internet.' },
      { title: 'Sync both ways', text: 'Products, prices and stock flow from QuickBooks to the site; web orders go into QuickBooks as Sales Orders. Every job is queued and logged.' },
      { title: 'Go live and watch', text: 'I test with your real data before the manual process is switched off, then watch the first live syncs and fix anything that does not match.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A Los Angeles wholesale food distributor took store orders on its website but moved prices, stock and orders to and from QuickBooks Desktop with CSV and Excel files. I built the integration from scratch.',
    },
    review: {
      text: 'Roman has been our web developer since 2017. He built and maintains our wholesale ordering site and the server it runs on. He connected the site to QuickBooks, so products, prices, stock and orders now sync automatically instead of by hand. Checkout went from 7–13 seconds to about half a second. He is responsive, explains things clearly, and keeps the site secure and backed up.',
      author: 'Aram Arutyunyan',
      role: 'Araks Inc (wholesale food distributor)',
      source: { label: 'IONOS', url: 'https://partnernetwork.ionos.com/partner/roman.iglin#ratings' },
    },
    offer: {
      kind: 'estimate',
      title: 'Every integration is a little different',
      text: 'The price depends on what syncs, in which direction, and which website platform you use. Describe your setup and get a ballpark price in about 20 seconds, or write to me and I will reply by email.',
    },
    // Questions phrased the way people search for them. [label](url) becomes a link on the page.
    faq: [
      { q: 'How do I connect my website to QuickBooks Desktop?', a: 'Through the QuickBooks Web Connector, the free Intuit app that runs next to QuickBooks Desktop. Your website gets a SOAP endpoint that speaks qbXML; the Web Connector calls it on a schedule and passes requests to QuickBooks and the answers back. That is how the [Araks integration](#case) works.' },
      { q: 'Can I sync inventory and prices from QuickBooks Desktop to my online store?', a: 'Yes. In the project above, product names, prices and stock for about 7,500 items sync from QuickBooks to the website every hour, and customers and vendors once a day.' },
      { q: 'Can website orders go into QuickBooks Desktop automatically?', a: 'Yes. Web orders are created in QuickBooks as Sales Orders, and restocking orders as Purchase Orders, with no CSV or Excel files in between.' },
      { q: 'Does it work with WooCommerce or WordPress?', a: 'Yes. The endpoint runs on any site with a server and a database: WordPress and WooCommerce, Drupal Commerce or custom PHP. The project above runs on Drupal Commerce. [Describe your setup](/#estimate) and get a ballpark price.' },
      { q: 'Can this be done with QuickBooks Online instead?', a: 'QuickBooks Online has its own REST API and does not use the Web Connector, so it is a different integration. [Send me a message](/#contact) with your setup and I will tell you what it takes.' },
      { q: 'How much does a custom QuickBooks Desktop integration cost?', a: 'It depends on what syncs and in which direction: a one-way price and stock sync is smaller than two-way orders, customers and inventory. [Get a quick estimate](/#estimate) in about 20 seconds, then I confirm an exact quote by email.' },
      { q: 'Do I have to open a port on the QuickBooks computer?', a: 'No. The Web Connector on the QuickBooks computer connects out to your website, so nothing on that computer is opened to the internet. Syncs run while that computer and QuickBooks are available, and queued jobs catch up after a break.' },
    ],
    related: ['landing-page-speed-optimization', 'white-label-wordpress-developer', 'wpbakery-to-beaver-builder-migration'],
  },
  {
    slug: 'landing-page-speed-optimization',
    draft: true,
    metaTitle: 'WordPress Landing Page Speed Optimization for Google Ads | Roman Iglin',
    metaDescription:
      'Slow WordPress or Elementor landing page wasting ad spend? I make it load fast on phones without breaking GA4, Google Ads or Meta Pixel tracking. Real case: Lighthouse mobile 33 → 98, 17.7 MB → 0.9 MB.',
    service: 'WordPress landing page speed optimization',
    eyebrow: 'Landing page speed',
    h1: 'Make your WordPress ad landing page load fast on phones',
    lead:
      'You pay for every click, so every second of loading costs you leads. I find what is actually slowing your landing page down and fix it at the source, without breaking your forms or ad tracking.',
    highlights: [
      { value: '33 → 98', label: 'Lighthouse mobile performance' },
      { value: '17.7 → 0.9 MB', label: 'page weight' },
      { value: 'Unchanged', label: 'GA4, Google Ads and Meta Pixel tracking' },
    ],
    problems: [
      'Your Google Ads or Meta landing page takes several seconds to show anything on a phone.',
      'PageSpeed Insights shows a red score and failing Core Web Vitals.',
      'Speed plugins either broke something or changed nothing.',
      'You worry that touching tracking scripts will break conversions in Google Ads.',
    ],
    steps: [
      { title: 'Measure', text: 'I run Lighthouse and PageSpeed on the page the way a phone sees it and list what costs time: images, video, fonts, third-party tags and the server response.' },
      { title: 'Cut the weight', text: 'Resize and compress images, re-encode video and load it only near the screen, and remove plugins and assets the page does not use.' },
      { title: 'Cache and defer', text: 'Make the HTML cacheable at the host and the CDN, and delay third-party tags until the visitor interacts, so the page itself paints first.' },
      { title: 'Check leads and tracking', text: 'Before and after, I compare GA4, Google Ads and Meta Pixel hits and test the quote form, click-to-call and in-app browsers, so nothing that brings you leads breaks.' },
    ],
    caseStudy: {
      projectId: 'people-movers',
      intro: 'A California moving company sent its paid traffic to a Sacramento landing page that weighed 17.7 MB and scored 33 for mobile performance in Lighthouse.',
    },
    offer: { kind: 'package', service: 'speed', package: 'standard' },
    faq: [
      { q: 'Why is my Elementor landing page so slow on mobile?', a: 'Usually because of heavy images and background videos, plugins and assets the page never uses, and third-party tags (chat widgets, pixels, heatmaps) that load before the page itself. The [People Movers page](#case) weighed 17.7 MB before the work.' },
      { q: 'Will speeding up the page break my Google Ads or Meta Pixel tracking?', a: 'It should not, and I check it. In the case above, GA4, Google Ads, Meta Pixel and Clarity sent identical hits before and after the tags were delayed until the first interaction.' },
      { q: 'Do I need a new theme or a full rebuild to get a fast landing page?', a: 'Usually not. The People Movers page kept its Elementor design; the speed came from caching, lighter media and loading third-party tags later.' },
      { q: 'How fast can a WordPress landing page load on a phone?', a: 'The landing page in the case study went to 96–98 for Lighthouse mobile performance and about 0.9 MB, with desktop at 98–99.' },
      { q: 'How much does landing page speed optimization cost?', a: 'Fixing one key page, like your homepage or an ad landing page, is a fixed-price package for $450 with before and after numbers. [See the speed packages](/services/?service=speed&package=standard). The whole site is $900.' },
      { q: 'Can you audit my site first?', a: 'Yes. An audit of the whole site with a written report and a prioritized fix list is $150. [Order the audit](/services/?service=speed&package=starter).' },
    ],
    related: ['white-label-wordpress-developer', 'wpbakery-to-beaver-builder-migration', 'quickbooks-website-integration'],
  },
  {
    slug: 'wpbakery-to-beaver-builder-migration',
    draft: true,
    metaTitle: 'WPBakery to Beaver Builder Migration | Roman Iglin',
    metaDescription:
      'Move your WordPress site off WPBakery Page Builder to Beaver Builder: pages rebuilt cleanly, custom modules your team can edit, no shortcodes left behind. Real case: a logistics company site with a French version.',
    service: 'WPBakery to Beaver Builder migration',
    eyebrow: 'Page builder migration',
    h1: 'WPBakery to Beaver Builder migration',
    lead:
      'WPBakery pages are hard to edit and leave shortcodes everywhere. I rebuild your site in Beaver Builder with a clean child theme and custom modules, so your team edits pages without breaking the layout.',
    highlights: [
      { value: 'Whole site', label: 'rebuilt from WPBakery' },
      { value: 'Custom', label: 'Beaver Builder modules' },
      { value: 'EN + FR', label: 'bilingual with hreflang' },
    ],
    problems: [
      'Editing a page in WPBakery breaks the layout, so small changes wait for a developer.',
      'Turning WPBakery off would leave shortcodes like [vc_row] all over your content.',
      'The site looks dated, but rebuilding it feels risky.',
      'You also need a second language or a server move and do not want three separate projects.',
    ],
    steps: [
      { title: 'Audit the pages', text: 'I list every page, template and WPBakery element in use and decide what becomes a Beaver Builder layout, a reusable module or ACF content.' },
      { title: 'Build the theme and modules', text: 'A Beaver Builder child theme and custom modules (PHP, JavaScript, CSS) for the repeating sections, so editors fill in content instead of rebuilding layouts.' },
      { title: 'Rebuild the pages', text: 'Each page is rebuilt in Beaver Builder with the improved design, and the old shortcodes are gone from the content.' },
      { title: 'SEO and launch', text: 'Titles, meta descriptions and structured data are carried over and improved with Yoast SEO, then the new pages go live.' },
    ],
    caseStudy: {
      projectId: 'fls',
      intro: 'A North American freight brokerage and logistics company ran its WordPress site on WPBakery Page Builder and old hosting, and needed a French (Canada) version.',
    },
    offer: {
      kind: 'estimate',
      title: 'Priced by pages and layouts',
      text: 'The cost depends on how many pages and unique layouts your site has, and whether you also need a server move or a second language. Describe your site and get a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'How do I migrate from WPBakery to Beaver Builder?', a: 'There is no reliable one-click converter, so the pages are rebuilt: a child theme and custom modules for the repeating sections, then each page in Beaver Builder. That is how the [FLS site](#case) was done.' },
      { q: 'What happens to WPBakery shortcodes when I deactivate it?', a: 'They show up as raw text like [vc_row] in your pages. Rebuilding the pages in Beaver Builder removes them from the content for good.' },
      { q: 'Will I lose my SEO when switching page builders?', a: 'Not if URLs, titles and meta descriptions carry over. On the FLS rebuild I also improved titles, meta descriptions and schema.org JSON-LD with Yoast SEO.' },
      { q: 'Can you add a second language at the same time?', a: 'Yes. For FLS I built a custom localization plugin and added a French (Canada) version with /fr/ URLs, a language switcher and hreflang links (en-US, fr-CA, x-default).' },
      { q: 'Can you move the site to a new server too?', a: 'Yes. FLS moved from its previous hosting to a custom server as part of the same project. [See the migration packages](/services/?service=migration).' },
      { q: 'How much does a WPBakery to Beaver Builder migration cost?', a: 'It depends on the number of pages and unique layouts. [Get a quick estimate](/#estimate) and I confirm an exact quote by email.' },
    ],
    related: ['white-label-wordpress-developer', 'landing-page-speed-optimization', 'quickbooks-website-integration'],
  },
  {
    slug: 'white-label-wordpress-developer',
    draft: true,
    metaTitle: 'White-Label WordPress Developer for Agencies | Roman Iglin',
    metaDescription:
      'A senior WordPress developer your agency can bring in when the team is full: Figma to WordPress block themes and custom ACF blocks, page speed, migrations and VPS servers, delivered under your brand.',
    service: 'White-label WordPress development for agencies',
    eyebrow: 'For web agencies',
    h1: 'White-label WordPress developer for your agency',
    lead:
      'When your team is full, I build your client’s site from your Figma design, under your brand: custom block themes and ACF blocks your client can edit, plus the speed, migration and server work around them.',
    highlights: [
      { value: 'Since 2010', label: 'building websites' },
      { value: 'Since 2021', label: 'ongoing WordPress developer for Signifyd' },
      { value: 'Figma → code', label: 'block themes and ACF blocks' },
    ],
    problems: [
      'A client project landed and your developers are already booked.',
      'The design is ready in Figma, but nobody is free to build it as an editable WordPress theme.',
      'A legacy site came with the client: lost theme files, an old page builder, slow pages.',
      'You need someone who can also handle the server, the migration and page speed.',
    ],
    steps: [
      { title: 'Brief and Figma', text: 'You send the Figma file, access and the deadline. I ask my questions in writing and confirm the scope and price before I start.' },
      { title: 'Build in your setup', text: 'A block theme with theme.json and custom ACF blocks, or the page builder your team maintains, on the hosting your client already uses.' },
      { title: 'Review and polish', text: 'You review on staging and I fix what you find. Lighthouse and cross-browser checks happen before handoff.' },
      { title: 'Handoff under your brand', text: 'You present the work as yours. I can stay on for support, speed work or the next client project.' },
    ],
    caseStudy: {
      projectId: 'usacs',
      intro: 'A web agency needed two healthcare websites moved to its client’s new 2026 brand. The agency provided the Figma designs; I built them, including a new block theme after the original theme’s source files had been lost.',
    },
    review: {
      text: 'It was an absolute pleasure working with Roman on yet another successful project. Quick, efficient and the quality of work is perfect. Looking forward to continuing engagements with him.',
      author: 'Upwork client',
      role: 'WordPress theming styles and branding · May 2026',
      source: { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01804b6061bf805cfd' },
    },
    offer: { kind: 'package', service: 'figma-wordpress', package: 'standard' },
    faq: [
      { q: 'Do you work white-label under our agency brand?', a: 'Yes. You present the work as yours, and I only talk to you unless you introduce me to the client.' },
      { q: 'Can you build a WordPress block theme from our Figma design?', a: 'Yes. For the [healthcare project above](#case) I built a block theme with theme.json, Full Site Editing templates and custom ACF blocks built with @wordpress/scripts, from the agency’s Figma design.' },
      { q: 'Do you work with Beaver Builder, Elementor and ACF?', a: 'Yes: Beaver Builder with custom modules, Elementor Pro, and ACF blocks. I build with what your team already maintains.' },
      { q: 'Can you take over a site with lost theme files or an old page builder?', a: 'Yes. On the healthcare project the original theme’s source files were lost, so I rebuilt the theme from scratch. I have also moved a site from [WPBakery to Beaver Builder](/services/wpbakery-to-beaver-builder-migration/).' },
      { q: 'How do you price agency work?', a: 'A fixed price per project after I review the Figma file and the scope, or the [Figma to WordPress packages](/services/?service=figma-wordpress) from $450 for a landing page. [Get a quick estimate](/#estimate) for anything else.' },
      { q: 'How do we communicate?', a: 'In writing, by email or in your project tool. I reply within one business day with questions, progress and staging links.' },
    ],
    related: ['wpbakery-to-beaver-builder-migration', 'landing-page-speed-optimization', 'quickbooks-website-integration'],
  },
]

export const findNichePage = (slug) => nichePages.find((p) => p.slug === slug)

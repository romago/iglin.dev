// Niche service pages at /services/<slug>/, one object per page. scripts/prerender.mjs turns each into
// static HTML with its own title, description, canonical, JSON-LD and a sitemap entry.
// Facts must come from public/projects.md. DRAFT pages are reviewed by Roman before they go live.

export const nichePages = [
  {
    slug: 'quickbooks-website-integration',
    draft: false,
    metaTitle: 'QuickBooks Desktop Website Integration | Roman Iglin',
    metaDescription:
      'Connect your website or online store to QuickBooks Desktop: products, prices, stock, customers and orders sync on a schedule through the Web Connector.',
    service: 'QuickBooks Desktop website integration',
    eyebrow: 'QuickBooks Desktop integration',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'QuickBooks integration',
    h1: 'QuickBooks Desktop integration for your website',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Why businesses connect their website to QuickBooks Desktop',
      steps: 'How the QuickBooks Desktop integration works',
      case: 'QuickBooks integration case study: a wholesale ordering site',
      pricing: 'QuickBooks integration cost',
      faq: 'QuickBooks Desktop integration FAQ',
    },
    lead:
      'Stop retyping orders and price lists between your website and QuickBooks. I connect the two through the QuickBooks Web Connector, so products, prices, stock, customers and orders stay in sync on a schedule.',
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
      intro: 'A Los Angeles wholesale food distributor took store orders on its B2B ordering platform and CRM but moved prices, stock and orders to and from QuickBooks Desktop with CSV and Excel files. I built the integration from scratch.',
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
    related: ['b2b-wholesale-ordering-portal', 'custom-crm-development', 'landing-page-speed-optimization'],
  },
  {
    slug: 'landing-page-speed-optimization',
    draft: false,
    metaTitle: 'WordPress Landing Page Speed Optimization | Roman Iglin',
    metaDescription:
      'Slow WordPress or Elementor landing page wasting ad spend? I make it fast on phones without breaking GA4, Google Ads or Meta Pixel tracking.',
    service: 'WordPress landing page speed optimization',
    eyebrow: 'Landing page speed',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Landing page speed',
    h1: 'Make your WordPress ad landing page load fast on phones',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Why your WordPress landing page is slow on phones',
      steps: 'How I speed up a WordPress landing page',
      case: 'Landing page speed case study: a moving company',
      pricing: 'Landing page speed optimization pricing',
      faq: 'Landing page speed FAQ',
    },
    lead:
      'You pay for every click, so every second of loading costs you leads. I find what is actually slowing your landing page down and fix it at the source, without breaking your forms or ad tracking.',
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
      { q: 'Can you audit my site first?', a: 'Yes, for free. You get an audit of the whole site with a written report and a prioritized fix list, with no obligation to order the fixes. [Order the free audit](/services/?service=speed&package=starter).' },
    ],
    related: ['law-firm-website-developer', 'white-label-wordpress-developer', 'wpbakery-to-beaver-builder-migration'],
  },
  {
    slug: 'wpbakery-to-beaver-builder-migration',
    draft: false,
    metaTitle: 'WPBakery to Gutenberg / Beaver Builder | Roman Iglin',
    metaDescription:
      'Move your WordPress site off WPBakery to the Gutenberg block editor or Beaver Builder: pages rebuilt cleanly, blocks your team can edit, no shortcodes left.',
    service: 'WPBakery to Gutenberg or Beaver Builder migration',
    eyebrow: 'Page builder migration',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'WPBakery migration',
    h1: 'WPBakery to Gutenberg or Beaver Builder migration',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Why move off WPBakery Page Builder',
      steps: 'How a WPBakery migration works',
      case: 'WPBakery migration case study: a logistics company',
      pricing: 'WPBakery migration cost',
      faq: 'WPBakery migration FAQ',
    },
    lead:
      'WPBakery pages are hard to edit and leave shortcodes everywhere. I rebuild your site on the WordPress block editor (Gutenberg) with custom blocks, or in Beaver Builder with custom modules, so your team edits pages without breaking the layout.',
    problems: [
      'Editing a page in WPBakery breaks the layout, so small changes wait for a developer.',
      'Turning WPBakery off would leave shortcodes like [vc_row] all over your content.',
      'The site looks dated, but rebuilding it feels risky.',
      'You also need a second language or a server move and do not want three separate projects.',
    ],
    steps: [
      { title: 'Audit and pick the editor', text: 'I list every page, template and WPBakery element in use, then we choose: Gutenberg for a lighter site with no page builder to pay for, or Beaver Builder if your team wants drag-and-drop layouts.' },
      { title: 'Build the theme and blocks', text: 'Gutenberg: a block theme with theme.json and custom ACF blocks. Beaver Builder: a child theme and custom modules. Either way, repeating sections become components that editors fill in.' },
      { title: 'Rebuild the pages', text: 'Each page is rebuilt with the improved design on the new editor, and the old WPBakery shortcodes are gone from the content.' },
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
      { q: 'Can I migrate from WPBakery to Gutenberg?', a: 'Yes. WPBakery layouts do not convert to blocks on their own, so the pages are rebuilt on a block theme with custom blocks for your repeating sections. I built that kind of block theme with theme.json and custom ACF blocks for a [healthcare website](/services/white-label-wordpress-developer/).' },
      { q: 'Gutenberg or Beaver Builder: which should I choose after WPBakery?', a: 'Gutenberg is built into WordPress, loads less code and needs no extra license. Beaver Builder is easier for editors who want to drag sections around. If your team mostly fills in text and images, Gutenberg is usually the better choice.' },
      { q: 'How do I migrate from WPBakery to Beaver Builder?', a: 'There is no reliable one-click converter, so the pages are rebuilt: a child theme and custom modules for the repeating sections, then each page in Beaver Builder. That is how the [FLS site](#case) was done.' },
      { q: 'What happens to WPBakery shortcodes when I deactivate it?', a: 'They show up as raw text like [vc_row] in your pages. Rebuilding the pages in Gutenberg or Beaver Builder removes them from the content for good.' },
      { q: 'Will I lose my SEO when switching page builders?', a: 'Not if URLs, titles and meta descriptions carry over. On the FLS rebuild I also improved titles, meta descriptions and schema.org JSON-LD with Yoast SEO.' },
      { q: 'Can you add a second language at the same time?', a: 'Yes. For FLS I built a custom localization plugin and added a French (Canada) version with /fr/ URLs, a language switcher and hreflang links (en-US, fr-CA, x-default).' },
      { q: 'Can you move the site to a new server too?', a: 'Yes. FLS moved from its previous hosting to a custom server as part of the same project. [See the migration packages](/services/?service=migration).' },
      { q: 'How much does a WPBakery migration cost?', a: 'It depends on the number of pages and unique layouts, not on the editor you move to. [Get a quick estimate](/#estimate) and I confirm an exact quote by email.' },
    ],
    related: ['white-label-wordpress-developer', 'landing-page-speed-optimization', 'quickbooks-website-integration'],
  },
  {
    slug: 'white-label-wordpress-developer',
    draft: false,
    metaTitle: 'White-Label WordPress Developer for Agencies | Roman Iglin',
    metaDescription:
      'A senior WordPress developer your agency can bring in when the team is full: Figma to block themes and ACF blocks, speed and migrations, under your brand.',
    service: 'White-label WordPress development for agencies',
    eyebrow: 'For web agencies',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'White-label WordPress',
    h1: 'White-label WordPress developer for your agency',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'When an agency needs a white-label WordPress developer',
      steps: 'How white-label WordPress development works',
      case: 'White-label case study: two healthcare websites',
      pricing: 'White-label WordPress development pricing',
      faq: 'White-label WordPress developer FAQ',
    },
    lead:
      'When your team is full, I build your client’s site from your Figma design, under your brand: custom block themes and ACF blocks your client can edit, plus the speed, migration and server work around them.',
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
  {
    slug: 'drupal-7-migration',
    draft: false,
    metaTitle: 'Drupal 7 to Drupal 10 / 11 Migration Service | Roman Iglin',
    metaDescription:
      'Drupal 7 lost official support in January 2025. I move Drupal 7 sites to Drupal 11 with content, users, files and URLs intact, or keep D7 safe meanwhile.',
    service: 'Drupal 7 to Drupal 11 migration',
    eyebrow: 'Drupal 7 end of life',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Drupal 7 migration',
    h1: 'Drupal 7 to Drupal 11 migration',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Signs your Drupal 7 site needs a migration',
      steps: 'How a Drupal 7 to Drupal 11 migration works',
      case: 'Drupal 7 case study: a wholesale online store',
      pricing: 'Drupal 7 migration cost',
      faq: 'Drupal 7 migration FAQ',
    },
    lead:
      'Drupal 7 stopped getting official security updates in January 2025. I move your site to Drupal 11 with its content, users, files and URLs, or keep it safe on modern PHP until you are ready.',
    problems: [
      'Your site still runs Drupal 7, and official security updates ended on January 5, 2025.',
      'Your host is dropping old PHP versions, and the site may not survive the switch.',
      'Custom modules or contributed modules have no Drupal 11 version, and nobody knows what they do.',
      'You fear losing content, users, search rankings or order history in the move.',
    ],
    steps: [
      { title: 'Audit the Drupal 7 site', text: 'I list content types, fields, views, users, files and every contributed and custom module, and note which have a Drupal 11 equivalent, which need custom code and which can go.' },
      { title: 'Pick the path', text: 'Usually Drupal 11 with the core Migrate API. If the site is mostly pages and a blog, WordPress can be cheaper to run. If you need time, I first make Drupal 7 safe on a supported PHP version.' },
      { title: 'Migrate and rebuild', text: 'Content, taxonomy, users, files and redirects come over with repeatable migrations, so the final run uses fresh data. The theme is rebuilt for Drupal 11 and custom modules are rewritten.' },
      { title: 'Launch without losing traffic', text: 'Old URLs keep working through 301 redirects, the XML sitemap and metadata are carried over, and I compare old and new pages before the switch and watch Search Console after it.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A Los Angeles wholesale food distributor runs its B2B ordering platform and CRM on Drupal 7 and Drupal Commerce. I have maintained it since 2017: custom modules, a move from PHP 7.4 to 8.5, a URL cleanup with about 3,900 automatic 301 redirects, and the server it runs on.',
    },
    review: {
      text: 'Roman has been our web developer since 2017. He built and maintains our wholesale ordering site and the server it runs on. He connected the site to QuickBooks, so products, prices, stock and orders now sync automatically instead of by hand. Checkout went from 7–13 seconds to about half a second. He is responsive, explains things clearly, and keeps the site secure and backed up.',
      author: 'Aram Arutyunyan',
      role: 'Araks Inc (wholesale food distributor)',
      source: { label: 'IONOS', url: 'https://partnernetwork.ionos.com/partner/roman.iglin#ratings' },
    },
    offer: {
      kind: 'estimate',
      title: 'Priced by what your site has',
      text: 'The cost depends on the number of content types, custom modules and pages with their own layout, and on whether there is a store. Describe your site and get a ballpark price in about 20 seconds, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'Is Drupal 7 still supported?', a: 'No. Official Drupal 7 support, including security updates, ended on January 5, 2025. Paid extended support exists from a few vendors, but your site gets no new core security releases from the Drupal project.' },
      { q: 'Should I migrate from Drupal 7 to Drupal 10 or Drupal 11?', a: 'Drupal 11. Drupal 10 reaches end of life on December 9, 2026, so a move to 10 now would need another upgrade almost at once. Drupal 11 is supported until about 2028, and moving on to Drupal 12 later is a regular upgrade, not a rebuild.' },
      { q: 'Can I upgrade Drupal 7 to Drupal 11 in place?', a: 'No. Drupal 8 and later are a different codebase, so there is no in-place upgrade. Content, users and files are moved into a new Drupal 11 site with the core Migrate API, and the theme and custom modules are rebuilt.' },
      { q: 'Will I lose my SEO when I migrate from Drupal 7?', a: 'Not if every old URL keeps working. I map old paths to new ones with 301 redirects and carry over titles and metadata. On the [Drupal site above](#case) about 3,900 old URLs redirect automatically.' },
      { q: 'How long does a Drupal 7 to Drupal 11 migration take?', a: 'A brochure site with a few content types takes a few weeks. Sites with many custom modules, a store or a lot of user data take longer. The audit in the first step gives you a timeline before the main work starts.' },
      { q: 'Can I keep Drupal 7 a bit longer?', a: 'For a limited time, if it is kept patched and on a supported PHP version. I moved the [Drupal 7 site above](#case) from PHP 7.4 to 8.5 with backups, a rollback plan and 12 seconds of maintenance mode. It buys time; it does not replace the migration.' },
      { q: 'Should I move from Drupal 7 to WordPress instead?', a: 'If the site is mostly pages, news and forms, WordPress is often cheaper to run and easier for editors. For complex data, permissions or custom workflows, Drupal 11 is the better fit. The audit tells which one suits your site. [See my WordPress migration packages](/services/?service=migration).' },
      { q: 'How much does a Drupal 7 migration cost?', a: 'It depends on content types, custom modules and the number of unique page layouts. [Get a quick estimate](/#estimate) in about 20 seconds, then I confirm an exact quote by email.' },
    ],
    related: ['legacy-php-upgrade', 'b2b-wholesale-ordering-portal', 'quickbooks-website-integration'],
  },
  {
    slug: 'law-firm-website-developer',
    draft: false,
    metaTitle: 'Law Firm WordPress Website Developer | Roman Iglin',
    metaDescription:
      'WordPress developer for law firms: custom themes, one page per practice area, LegalService schema, fast mobile pages and Google reviews on your own site.',
    service: 'Law firm WordPress website development',
    eyebrow: 'Law firm websites',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Law firm websites',
    h1: 'WordPress website developer for law firms',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Common problems with law firm websites',
      steps: 'How I build and improve law firm websites',
      case: 'Law firm website case study: a Memphis law firm',
      pricing: 'Law firm website cost',
      faq: 'Law firm website FAQ',
    },
    lead:
      'Your website is where someone with a legal problem decides which firm to contact. I build and tune law firm WordPress sites so they load fast, rank for each practice area and make reaching you easy on a phone.',
    problems: [
      'Your bankruptcy, injury and workers’ comp pages compete with each other in Google instead of each ranking for its own searches.',
      'Pages jump around while they load, so visitors tap the wrong thing or give up on the form.',
      'On a phone, the number and the contact form are hard to find.',
      'Your Google reviews sit in a third-party slider that search engines cannot read.',
    ],
    steps: [
      { title: 'Audit what Google sees', text: 'Search Console queries, the sitemap, redirects, indexing rules and Lighthouse on your key pages show which practice areas you rank for and what holds the rest back.' },
      { title: 'Fix the structure', text: 'One clear page per practice area, menus built from real search data, and schema.org markup for the firm, the attorneys, services and FAQs.' },
      { title: 'Rebuild or tune the theme', text: 'A custom theme on ACF flexible sections your staff can edit, or targeted fixes to the current one: critical CSS, font loading, reserved space for forms and readable contrast.' },
      { title: 'Track leads and show reviews', text: 'A sticky mobile header with a tap-to-call button, GA4 lead conversion tracking, and your Google rating rendered on your own pages.' },
    ],
    caseStudy: {
      projectId: 'arthur-ray',
      intro: 'A Memphis law firm runs two WordPress sites: one for bankruptcy and one for bankruptcy, personal injury and workers’ compensation. I redesigned one of them on a custom ACF theme and handle technical SEO, speed and security for both.',
    },
    offer: {
      kind: 'estimate',
      title: 'Quoted after a look at your site',
      text: 'A full redesign, a technical SEO cleanup and a speed fix are different jobs. Tell me what you have and what worries you, and get a ballpark price right away, or write to me and I will reply by email with what I would do first.',
    },
    faq: [
      { q: 'What schema markup should a law firm website have?', a: 'LegalService (or Attorney) for the firm, Person for each attorney, Service for practice areas, plus FAQPage and BreadcrumbList where they fit. That is the set I added to the [Memphis law firm sites](#case).' },
      { q: 'Why does my law firm website rank for the wrong practice area?', a: 'Usually because several pages target the same searches and split the signals between them. On the case above I rebuilt the menus from Search Console data: an 18–19 item menu became 5 header items and grouped footer menus.' },
      { q: 'How do I show Google reviews on my law firm website?', a: 'I built a small WordPress plugin that pulls the firm’s Google rating from the Places API every week and a shortcode that renders it in the page HTML, so visitors and search engines both see it. It replaced a third-party review slider.' },
      { q: 'How fast should a law firm website load?', a: 'Google’s “good” thresholds are a Largest Contentful Paint under 2.5 seconds and a layout shift under 0.1. On the case above, the bankruptcy site’s homepage went from 5.3 seconds to under 2.5 for LCP on mobile, and layout shift on the other site’s internal pages went from 0.52–0.59 to 0.00–0.04.' },
      { q: 'Is my law firm website accessible?', a: 'An automated score does not prove ADA compliance, but it catches common problems: contrast, link names, tap target size. The firm’s bankruptcy site went from 80 to 100 on Lighthouse accessibility after those fixes.' },
      { q: 'Do law firms need local landing pages?', a: 'If you serve several cities or neighborhoods, yes: people search for a lawyer “near me” or in their city. For the [Memphis firm](#case) I added new landing pages for local searches on its bankruptcy site, each with its own content, not copies with a city name swapped in.' },
      { q: 'Do I need a new website, or can you fix the one I have?', a: 'Often a fix is enough: structure, speed and markup. A rebuild makes sense when the theme fights every change. I tell you which one after the audit. [Describe your site](/#estimate) to get a first price.' },
      { q: 'How much does a law firm website cost?', a: 'It depends on the number of practice areas, pages and locations, and on whether the theme is rebuilt. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['landing-page-speed-optimization', 'multilingual-wordpress-sites', 'white-label-wordpress-developer'],
  },
  {
    slug: 'legacy-php-upgrade',
    draft: false,
    metaTitle: 'Upgrade an Old PHP Site to PHP 8 | Roman Iglin',
    metaDescription:
      'Host retiring old PHP? I upgrade WordPress, Drupal and custom PHP sites to PHP 8 with tested fixes, backups and a rollback plan, with seconds of downtime.',
    service: 'Legacy PHP upgrade to PHP 8',
    eyebrow: 'Legacy PHP',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'PHP 8 upgrade',
    h1: 'Upgrade your old PHP site to PHP 8',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Signs your site needs a PHP upgrade',
      steps: 'How I upgrade a site to PHP 8',
      case: 'PHP 8 upgrade case study: a live online store',
      pricing: 'PHP upgrade cost',
      faq: 'PHP 8 upgrade FAQ',
    },
    lead:
      'Old PHP versions get no security fixes, and hosts are switching them off. I move your WordPress, Drupal or custom PHP site to PHP 8, fix what breaks before visitors see it, and keep a tested way back.',
    problems: [
      'Your host sent a notice: the PHP version your site runs on is being retired.',
      'You tried a newer PHP once and got a white screen or a fatal error.',
      'The site depends on old plugins, modules or custom code that nobody has touched in years.',
      'There is no staging copy and no backup you have actually restored.',
    ],
    steps: [
      { title: 'Take stock', text: 'Current PHP version and extensions, the platform and its add-ons, custom code and the error log. I list everything that uses functions changed or removed in PHP 8.' },
      { title: 'Fix it on a copy', text: 'A staging copy runs the target PHP version. Each incompatibility is fixed and checked there, with the real pages and forms clicked through.' },
      { title: 'Rehearse the switch', text: 'A scripted backup, the switch and a rollback are run end to end before the real day, so the steps and the downtime are known in advance.' },
      { title: 'Switch and watch', text: 'Production moves in a short maintenance window. Then I watch the error log and compare response times with the old version.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A wholesale food distributor runs its B2B ordering platform and CRM on Drupal 7 Commerce, which ran on PHP 7.4, which no longer gets security fixes. I moved production to PHP 8.5 with a scripted backup, a rollback plan and 12 seconds of maintenance mode.',
    },
    review: {
      text: 'Roman was so helpful, insightful, and knowledgeable. My website hasn’t been overseen by someone with his level of hands on experience in a while. I am so grateful to have found him. Highly recommend.',
      author: 'Upwork client',
      role: 'WordPress administrator · Mar 2026',
      source: { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01804b6061bf805cfd' },
    },
    offer: {
      kind: 'estimate',
      title: 'Priced by the code, not the page count',
      text: 'A small WordPress site with current plugins takes far less work than a custom PHP application. Describe the site and its hosting for a ballpark price, or email me the host’s notice and I will tell you what it means for you.',
    },
    faq: [
      { q: 'What happens if I do not upgrade PHP?', a: 'The site keeps working until your host removes the old version, which often happens on a fixed date. Until then it runs on a PHP release with no security fixes: PHP 7.4, for example, lost security support in November 2022.' },
      { q: 'Will upgrading to PHP 8 break my WordPress site?', a: 'Current WordPress core runs on PHP 8, so problems usually come from old plugins, themes or custom code. That is why the fixes happen on a staging copy first.' },
      { q: 'Can Drupal 7 run on PHP 8?', a: 'Yes, with up-to-date core and modules. The [store above](#case) runs Drupal 7 on PHP 8.5. It buys time, but Drupal 7 itself no longer gets official updates, so plan the [move to Drupal 11](/services/drupal-7-migration/) too.' },
      { q: 'Will PHP 8 make my site faster?', a: 'Usually, yes. In the case above, uncached product pages went from 7.9 to 10.9 requests per second, 38% more, after the switch from PHP 7.4 to 8.5.' },
      { q: 'How much downtime does a PHP upgrade need?', a: 'With a rehearsed switch, seconds to minutes. The case above needed 12 seconds of maintenance mode; the backup and the rollback were scripted beforehand.' },
      { q: 'Can you upgrade a custom PHP application, not just a CMS?', a: 'Yes. The steps are the same: find what PHP 8 changed in your code, fix it on a copy, rehearse and switch. [Describe the application](/#estimate) and get a ballpark price.' },
      { q: 'How much does a PHP upgrade cost?', a: 'It depends on the amount of custom code and how many add-ons need fixes or replacements. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['drupal-7-migration', 'quickbooks-website-integration', 'landing-page-speed-optimization'],
  },
  {
    slug: 'greenhouse-wordpress-integration',
    draft: false,
    metaTitle: 'Greenhouse Job Board WordPress Integration | Roman Iglin',
    metaDescription:
      'Show your Greenhouse jobs on your own WordPress careers page, synced automatically, with team and office filters and apply links. No copying by hand.',
    service: 'Greenhouse job board WordPress integration',
    eyebrow: 'Greenhouse integration',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Greenhouse integration',
    h1: 'Greenhouse jobs on your WordPress careers page',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Why connect Greenhouse to your WordPress careers page',
      steps: 'How the Greenhouse WordPress integration works',
      case: 'Greenhouse integration case study: the Signifyd careers site',
      pricing: 'Greenhouse WordPress integration cost',
      faq: 'Greenhouse job board integration FAQ',
    },
    lead:
      'Stop copying job posts from Greenhouse into WordPress by hand. I connect your careers page to the Greenhouse Job Board API, so new openings appear and closed ones disappear on their own, in your site’s design.',
    problems: [
      'Every new opening means a request to the web team to add it to the careers page.',
      'Closed roles stay on the site for weeks and candidates apply to jobs that no longer exist.',
      'The embedded Greenhouse board does not look like the rest of your site.',
      'Candidates cannot filter by team or office, so a long list of jobs is hard to read.',
    ],
    steps: [
      { title: 'Connect the board', text: 'We pick the Greenhouse job board and decide what the careers page shows: teams, offices, job details and which jobs go to which pages.' },
      { title: 'Sync on a schedule', text: 'A WordPress plugin reads the Job Board API twice a day and stores jobs and departments in WordPress, adding new ones and removing closed ones. A sync button runs it on demand.' },
      { title: 'Build the careers page', text: 'Jobs grouped by team with dependent team and location filters, live counts and shareable filter URLs, plus shortcodes for openings at a single office.' },
      { title: 'Hand it to HR', text: 'An HR role manages jobs without full admin access, and old job links redirect to the Greenhouse posting instead of breaking.' },
    ],
    caseStudy: {
      projectId: 'signifyd',
      intro: 'Signifyd, an e-commerce fraud protection company, lists its openings on its WordPress careers site. I built the Signifyd Jobs plugin that keeps that page in sync with Greenhouse.',
    },
    review: {
      text: 'Roman is a highly skilled engineer with deep expertise in WordPress, PHP, HTML, CSS, and JavaScript. His technical abilities go far beyond the basics—he has consistently demonstrated an ability to tackle complex frameworks and solve challenges with creativity and precision.',
      author: 'Kevin T. Boyd',
      role: 'Web Development Manager, Signifyd',
      source: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/roman-iglin/details/recommendations/' },
    },
    offer: {
      kind: 'estimate',
      title: 'Depends on the careers page you want',
      text: 'A plain synced job list is a small job; filters, office pages and custom roles add to it. Describe your careers page for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'How do I add Greenhouse jobs to my WordPress site?', a: 'Either embed Greenhouse’s own job board, or have a plugin read the Greenhouse Job Board API and store the jobs in WordPress. The second way gives you your own design, filters and pages; that is how the [Signifyd careers site](#case) works.' },
      { q: 'Do I need a Greenhouse API key to show jobs?', a: 'Not for published jobs. The Job Board API returns your public openings by your board’s name, so the website does not hold any secret Greenhouse credentials.' },
      { q: 'How often do jobs update on the site?', a: 'On the Signifyd plugin, twice a day on a schedule, and right away when someone presses the sync button in WordPress.' },
      { q: 'What happens to a job page when the role is closed?', a: 'The next sync removes it from the careers page. Old job URLs and job IDs redirect to the Greenhouse posting, so shared links do not end on an error page.' },
      { q: 'Where do candidates apply?', a: 'On the Greenhouse posting, so applications land in Greenhouse exactly as before and your recruiting process does not change.' },
      { q: 'Can I see how the plugin works?', a: 'Yes. The Signifyd Jobs plugin is open source: [github.com/romago/jobs](https://github.com/romago/jobs).' },
      { q: 'Can you do the same with Lever, Workable or another ATS?', a: 'Most applicant tracking systems publish jobs through an API, so the approach is the same, with a different connector. [Tell me which one you use](/#contact).' },
      { q: 'How much does a Greenhouse WordPress integration cost?', a: 'It depends on the filters, pages and roles you need. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['wordpress-job-board-developer', 'multilingual-wordpress-sites', 'white-label-wordpress-developer'],
  },
  {
    slug: 'multilingual-wordpress-sites',
    draft: false,
    metaTitle: 'Multilingual WordPress Sites with hreflang | Roman Iglin',
    metaDescription:
      'Spanish, Portuguese and French versions of your WordPress site with correct hreflang, translated SEO meta and releases that keep the live site safe.',
    service: 'Multilingual WordPress site development',
    eyebrow: 'Multilingual sites',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Multilingual sites',
    h1: 'Multilingual WordPress sites that rank in each market',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Common problems with multilingual WordPress sites',
      steps: 'How I build multilingual WordPress sites',
      case: 'Multilingual case study: Signifyd Mexico and Brazil',
      pricing: 'Multilingual WordPress site cost',
      faq: 'Multilingual WordPress FAQ',
    },
    lead:
      'A translated page only helps when Google shows it to the right people. I build and maintain language and regional versions of WordPress sites, with hreflang, translated SEO meta and a release process that keeps the live site safe.',
    problems: [
      'Visitors in Mexico or Brazil land on your English pages.',
      'Translations travel in spreadsheets and get pasted into WordPress by hand.',
      'The regional site has drifted away from the main site’s design.',
      'A translation plugin made the site slow or messy, and you want something simpler.',
    ],
    steps: [
      { title: 'Plan languages and URLs', text: 'A regional subdomain, a language folder like /fr/ or a separate install, and an hreflang map that links every page to its counterparts, with x-default for everyone else.' },
      { title: 'Build the language versions', text: 'A regional site built from scratch, or a lightweight language layer on the existing site. Menus, forms and SEO meta are translated, not only the body text.' },
      { title: 'Bring in the translations', text: 'Text comes from your translators, a translation sheet or a service like Smartling, and is imported with scripts that flag missing or mismatched strings.' },
      { title: 'Release safely', text: 'New pages are prepared next to the live ones and swapped in with a dry run, snapshots and a rollback, carrying over hreflang and canonical tags.' },
    ],
    caseStudy: {
      projectId: 'signifyd-latam',
      intro: 'Signifyd runs Spanish (Mexico) and Portuguese (Brazil) versions of its site. I built both from scratch, linked them to the company’s other regional sites with hreflang, and in 2026 moved them to the new brand design.',
    },
    review: {
      text: 'Roman’s communication skills are another strength. He writes clear, concise reports and explains technical concepts in a way that’s easy for anyone to understand, making him an asset in cross-functional collaboration.',
      author: 'Kevin T. Boyd',
      role: 'Web Development Manager, Signifyd',
      source: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/roman-iglin/details/recommendations/' },
    },
    offer: {
      kind: 'estimate',
      title: 'Priced per language and page count',
      text: 'The work grows with the number of languages, pages and templates, and with how translations reach you. Describe your site and markets for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'What is hreflang and does my site need it?', a: 'hreflang tags tell Google which page is the Spanish, French or English version of the same content, so each market sees its own page. Any site with more than one language or regional version needs them.' },
      { q: 'Should languages go on a subdomain, a subfolder or a separate domain?', a: 'All three work with correct hreflang. Signifyd uses regional subdomains (mx. and br.); for a logistics company I added French as a /fr/ folder on the same site. The choice depends on who runs each version.' },
      { q: 'Do I need WPML or Polylang?', a: 'Not always. For the French (Canada) version of the [FLS site](/services/wpbakery-to-beaver-builder-migration/) I built a small custom localization plugin; Signifyd’s regional sites are separate installs fed by Smartling. Plugins like WPML fit when editors want everything in one dashboard.' },
      { q: 'Can you translate the content?', a: 'I work with your translators or translation agency and import their text, including menus and SEO meta. On the [Mexico site](#case) the redesigned pages came from the localization team’s translation sheet.' },
      { q: 'Will a translated site hurt my main site’s SEO?', a: 'No, when each language version has its own URL, a self-referencing canonical tag and hreflang links. Without them, versions can compete with each other in search.' },
      { q: 'How do you update a live regional site without breaking it?', a: 'On the Mexico and Brazil redesign, old and new pages ran side by side behind page tags, and a go-live script with a dry run, snapshots and a rollback swapped them in one step.' },
      { q: 'How much does a multilingual WordPress site cost?', a: 'It depends on the number of languages, pages and templates. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['ai-automation', 'greenhouse-wordpress-integration', 'wpbakery-to-beaver-builder-migration'],
  },
  {
    slug: 'b2b-wholesale-ordering-portal',
    draft: false,
    metaTitle: 'B2B Wholesale Ordering Portal Development | Roman Iglin',
    metaDescription:
      'A B2B ordering portal for wholesale distributors: each store sees its own prices, sales reps order for their customers, and orders go to QuickBooks Desktop.',
    service: 'B2B wholesale ordering portal development',
    eyebrow: 'B2B ordering portal',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'B2B ordering portal',
    h1: 'B2B ordering portal for wholesale distributors',
    // Section headings (H2), written as searches.
    headings: {
      problems: 'Why distributors move ordering online',
      steps: 'How I build a B2B ordering portal',
      case: 'B2B portal case study: a wholesale food distributor',
      pricing: 'B2B ordering portal cost',
      faq: 'B2B wholesale ordering portal FAQ',
    },
    lead:
      'Your stores should not have to call or email to place an order. I build ordering portals where each customer signs in, sees your catalog at their own prices and orders in minutes, while the orders land in QuickBooks on their own.',
    problems: [
      'Orders arrive by phone, text and email, and someone retypes every one of them.',
      'Each store pays a different price, so a public price list or a regular online shop does not work.',
      'Your sales reps write orders on paper or in spreadsheets and enter them later.',
      'Ready-made B2B platforms charge per user or force your pricing into their rules.',
    ],
    steps: [
      { title: 'Map your pricing and customers', text: 'Price levels, customer groups, minimums, deposits and who may order for whom. The portal follows the rules you already use, not the other way around.' },
      { title: 'Build the catalog and ordering', text: 'A fast catalog with search by name and item code, saved carts and checkout. Each store signs in and sees only its own prices.' },
      { title: 'Add sales reps and staff tools', text: 'Reps place orders for their stores from a phone or laptop; staff edit orders, see who is online and what is sitting in carts.' },
      { title: 'Connect accounting', text: 'Items, prices and stock come from QuickBooks Desktop, and web orders go back as Sales Orders, so nobody exports or retypes anything.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A Los Angeles wholesale food distributor runs its store orders through a B2B portal I built and maintain on Drupal Commerce. Stores order from about 1,700 products at their own price levels, sales reps order for their stores, and every order goes to QuickBooks Desktop.',
    },
    review: {
      text: 'Roman has been our web developer since 2017. He built and maintains our wholesale ordering site and the server it runs on. He connected the site to QuickBooks, so products, prices, stock and orders now sync automatically instead of by hand. Checkout went from 7–13 seconds to about half a second. He is responsive, explains things clearly, and keeps the site secure and backed up.',
      author: 'Aram Arutyunyan',
      role: 'Araks Inc (wholesale food distributor)',
      source: { label: 'IONOS', url: 'https://partnernetwork.ionos.com/partner/roman.iglin#ratings' },
    },
    offer: {
      kind: 'estimate',
      title: 'Built around your catalog and price rules',
      text: 'The cost depends on the size of the catalog, how prices are set per customer, the staff tools you need and the accounting connection. Describe your business for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'Should I build a B2B ordering portal or use a ready-made platform?', a: 'A ready-made platform is faster to start. A portal of your own makes sense when your pricing rules do not fit theirs, when per-user fees add up, or when you want the system and the data to be yours.' },
      { q: 'Can each wholesale customer see their own prices?', a: 'Yes. In the [Araks portal](#case) every store has a price level, and the catalog, cart and checkout all show that store’s prices after it signs in.' },
      { q: 'Can sales reps place orders on behalf of customers?', a: 'Yes. Sales reps sign in with their own role and place orders for their stores; the order belongs to the store, so history and reports stay correct.' },
      { q: 'Does a B2B portal work with QuickBooks Desktop?', a: 'Yes, through the QuickBooks Web Connector: items, prices and stock sync from QuickBooks and web orders go back as Sales Orders. More on the [QuickBooks Desktop integration](/services/quickbooks-website-integration/).' },
      { q: 'How do new wholesale buyers get access?', a: 'They fill in a wholesale request form; you approve them, and the portal emails a one-time link to the price list. That is how leads are handled on the case above.' },
      { q: 'Can the portal be built on WooCommerce?', a: 'Yes. The case above runs on Drupal Commerce, but customer price levels, rep ordering and the QuickBooks connection can be built on WooCommerce or a custom PHP app too.' },
      { q: 'How much does a B2B ordering portal cost?', a: 'It depends on the catalog, the pricing rules and the integrations. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['custom-crm-development', 'quickbooks-website-integration', 'drupal-7-migration'],
  },
  {
    slug: 'custom-crm-development',
    draft: false,
    metaTitle: 'Custom CRM Development | Roman Iglin',
    metaDescription:
      'A web-based CRM built around how your team sells: customers, leads, sales reps, orders and reports in one system, connected to your website and QuickBooks.',
    service: 'Custom CRM development',
    eyebrow: 'Custom CRM',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Custom CRM',
    h1: 'Custom CRM development',
    headings: {
      problems: 'When an off-the-shelf CRM stops fitting',
      steps: 'How I build a custom CRM',
      case: 'Custom CRM case study: a wholesale distributor',
      pricing: 'Custom CRM development cost',
      faq: 'Custom CRM FAQ',
    },
    lead:
      'When your customers, orders and leads live in three tools that never quite agree, a CRM built around your business pulls them into one place. I build web-based CRMs for small and medium businesses that your staff actually use, connected to your website and your accounting.',
    problems: [
      'Customer data sits in a CRM, orders in the online store and invoices in QuickBooks, and they never match.',
      'Your team pays per seat for features it does not use and still keeps spreadsheets on the side.',
      'Leads from the website arrive by email and get lost before anyone follows up.',
      'Your current CRM works, but it is so hard to use that people avoid it.',
    ],
    steps: [
      { title: 'Learn how your team works', text: 'Who your customers are, how leads come in, who sells to whom and which reports the owner checks every week. The screens follow that, not a generic template.' },
      { title: 'Build the core records', text: 'Customers with their prices and history, contacts, leads, sales reps, vendors and orders, with roles so each person sees what they need.' },
      { title: 'Automate the follow-ups', text: 'Lead approval, branded emails with a send log, reminders about unsent orders and alerts like low margins, so nothing depends on memory.' },
      { title: 'Report and connect', text: 'A sales dashboard with the numbers you ask for, and sync with your website and QuickBooks so the same data is never typed twice.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A Los Angeles wholesale distributor runs its business on one system I built and maintain: the store portal and a CRM for staff. Customers have their own price levels, sales reps order for their stores, vendors receive restocking orders, leads wait for approval, and a dashboard shows sales by year, top customers and sales by rep.',
    },
    review: {
      text: 'Roman demonstrated exceptional technical expertise, strategic vision, and a strong understanding of user experience. He completely redesigned the system’s user interface, significantly improved its usability, and established an effective balance between frontend and backend logic and processes.',
      author: 'Grigory Timofeev',
      role: 'Product Manager on a web-based CRM project (now VP Product Manager at JPMorgan Chase)',
      source: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/roman-iglin/details/recommendations/' },
    },
    offer: {
      kind: 'estimate',
      title: 'Scoped to the screens you need',
      text: 'A focused CRM for one team is a different job from a full system with portal, accounting sync and reports. Describe how you sell today for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'When is a custom CRM better than Pipedrive or HubSpot?', a: 'When the CRM has to be the same system as your ordering and pricing, when per-seat fees grow with the team, or when your process does not fit their pipeline model. For a simple sales pipeline, a ready-made CRM is often enough.' },
      { q: 'Can a CRM connect to QuickBooks Desktop?', a: 'Yes. On the [distributor’s system](#case) customers, vendors, items and orders sync with QuickBooks Desktop through the Web Connector. See the [QuickBooks integration](/services/quickbooks-website-integration/).' },
      { q: 'Can you redesign the CRM we already have?', a: 'Yes. On a web-based CRM project I redesigned the whole interface and reworked how the front end and back end share the logic; the product manager’s recommendation is above.' },
      { q: 'Can website leads go straight into the CRM?', a: 'Yes. On the case above a wholesale request form creates a lead, staff approve it, and the buyer gets a one-time link to the price list by email.' },
      { q: 'Who owns the CRM and the data?', a: 'You do. It runs on your server or hosting, and the code and the database are yours, with no per-user subscription.' },
      { q: 'What reports can a custom CRM show?', a: 'Whatever you look at today in spreadsheets: sales by year, top customers, sales by rep, open carts, low-margin items. The case dashboard is rebuilt every night so it opens instantly.' },
      { q: 'How much does custom CRM development cost?', a: 'It depends on the records, roles, automations and integrations. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['b2b-wholesale-ordering-portal', 'quickbooks-website-integration', 'ai-automation'],
  },
  {
    slug: 'wordpress-job-board-developer',
    draft: false,
    metaTitle: 'WordPress Job Board Developer (WP Job Manager) | Roman Iglin',
    metaDescription:
      'A job board on WordPress that employers pay to post on and candidates find on Google: job search and filters, Quick Apply, employer dashboard, Stripe.',
    service: 'WordPress job board development',
    eyebrow: 'Job board websites',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'Job board websites',
    h1: 'WordPress job board developer',
    headings: {
      problems: 'Why job boards on stock themes struggle',
      steps: 'How I build a WordPress job board',
      case: 'Job board case study: a regional trades job site',
      pricing: 'WordPress job board cost',
      faq: 'WordPress job board FAQ',
    },
    lead:
      'A job board lives on two things: employers who post and pay, and candidates who find the jobs and apply. I build WordPress job boards on WP Job Manager that make both easy, from the search bar to the Stripe checkout.',
    problems: [
      'The stock job board theme looks like every other one and is hard to change.',
      'Employers give up halfway through a long posting form.',
      'Candidates must create an account before they can apply, so many never do.',
      'Your jobs do not show up in Google’s job search.',
    ],
    steps: [
      { title: 'Plan the two sides', text: 'What employers post and pay for, what candidates search by (trade, town, job type, date) and which emails each side gets.' },
      { title: 'Build search and job pages', text: 'A search bar and filters with live counts, job cards with pay, job pages with clear facts, similar jobs and JobPosting markup for Google for Jobs.' },
      { title: 'Make posting and applying short', text: 'A shorter posting form, an employer dashboard to edit, renew and mark jobs filled, and a Quick Apply that needs no account.' },
      { title: 'Take payments and send emails', text: 'Job packages sold through WooCommerce and Stripe, tested with a real order, and every site email in one branded template.' },
    ],
    caseStudy: {
      projectId: 'fourcornerswork',
      intro: '4CornersWork is a local job board for oilfield, electrical, construction and other trades jobs in the Four Corners region of New Mexico, Colorado, Arizona and Utah. I audited the old site and rebuilt it as a custom job site on WP Job Manager.',
    },
    offer: {
      kind: 'estimate',
      title: 'Depends on what employers and candidates need',
      text: 'A free job board with simple search is a smaller job than paid postings, resumes and an employer dashboard. Describe your board for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'What is the best way to build a job board on WordPress?', a: 'WP Job Manager is a solid base: jobs are WordPress posts, and paid listings, resumes and applications are add-ons. The design and the flows are where a board stands out, so I build those in a custom child theme.' },
      { q: 'How do I get my job posts into Google for Jobs?', a: 'Each job page needs JobPosting structured data with the title, location, dates and pay. The [4CornersWork board](#case) sends pay data in that markup.' },
      { q: 'Can employers pay to post jobs?', a: 'Yes. Job packages are sold through WooCommerce with Stripe, and a job goes live when the order is paid; the case above was tested with a real order.' },
      { q: 'Can candidates apply without creating an account?', a: 'Yes. Quick Apply takes a name, contact details and a resume and emails them to the employer, with spam protection.' },
      { q: 'Can you connect jobs from an applicant tracking system instead?', a: 'Yes, for company careers pages. I built a plugin that syncs a careers site with Greenhouse: [Greenhouse jobs in WordPress](/services/greenhouse-wordpress-integration/).' },
      { q: 'How much does a WordPress job board cost?', a: 'It depends on paid postings, resumes, the employer dashboard and design. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['greenhouse-wordpress-integration', 'white-label-wordpress-developer', 'landing-page-speed-optimization'],
  },
  {
    slug: 'ai-automation',
    draft: false,
    metaTitle: 'AI Automation for Business Websites and Stores | Roman Iglin',
    metaDescription:
      'AI built into your website: product titles and descriptions, article drafts, SEO meta, page translation and lead handling, checked before anything goes live.',
    service: 'AI automation for business websites',
    eyebrow: 'AI automation',
    // Last breadcrumb, on the page and in the BreadcrumbList.
    crumb: 'AI automation',
    h1: 'AI automation for your website and online store',
    headings: {
      problems: 'Website work AI can take off your hands',
      steps: 'How I add AI to a business website',
      case: 'AI automation case study: a 1,700-product catalog',
      pricing: 'AI automation cost',
      faq: 'AI automation FAQ',
    },
    lead:
      'Writing product descriptions, translating pages and answering the same inquiries take hours every week. I build AI into your own website and data, so that work gets done in minutes and still gets checked before it goes live.',
    problems: [
      'Hundreds of products have cryptic names from your accounting system and no descriptions.',
      'The blog and SEO titles wait for months because nobody has time to write.',
      'You need the site in a second language, but translating every page by hand is slow and expensive.',
      'Every new inquiry needs the same first answer, and leads cool off while they wait.',
    ],
    steps: [
      { title: 'Pick the jobs worth automating', text: 'We look at where your team spends hours on repeatable text work and start with the one that pays back fastest.' },
      { title: 'Connect your data', text: 'The AI works from your catalog, accounting names, existing pages and brand rules, not from a blank prompt, so the output fits your business.' },
      { title: 'Add checks and review', text: 'Every result is validated automatically and lands as a draft you can approve, edit or revert, so nothing wrong goes live on its own.' },
      { title: 'Run it inside your site', text: 'The tool lives in your WordPress, Drupal or custom admin, with a choice of AI provider and a fallback when one is busy.' },
    ],
    caseStudy: {
      projectId: 'araks',
      intro: 'A wholesale distributor’s catalog of about 1,700 products carried raw item names from QuickBooks. I built a Drupal module on the Google Gemini API that rewrote them into clean product titles and descriptions for the whole catalog, with automated checks and a review and revert step.',
    },
    offer: {
      kind: 'estimate',
      title: 'Priced by the job you automate',
      text: 'A one-time catalog rewrite is smaller than an ongoing content or translation pipeline built into your admin. Describe the work you want off your hands for a ballpark price, or write to me and I will reply by email.',
    },
    faq: [
      { q: 'Can AI write product descriptions for my whole catalog?', a: 'Yes. On the [catalog above](#case) a module rewrote about 1,700 raw item names into titles and descriptions, checked each result and kept a way to revert. You review before anything is published.' },
      { q: 'Can AI translate my website into another language?', a: 'Yes: pages, menus and SEO meta can be translated by AI and imported as drafts for a native speaker to review. Correct hreflang links then show each country its own version. See [multilingual WordPress sites](/services/multilingual-wordpress-sites/).' },
      { q: 'Can AI write blog articles for my site?', a: 'It can draft them from your topics, notes and existing pages, as drafts for you to edit. Facts, numbers and your own experience still come from you; that is what makes an article worth ranking.' },
      { q: 'Can AI answer website inquiries?', a: 'It can give a first answer right away. The project estimator on this site is an example: a visitor describes a project and gets a structured price, timeline and questions from AI in seconds, and I get the lead by email.' },
      { q: 'Which AI models do you use?', a: 'Google Gemini, Anthropic Claude and Cloudflare Workers AI, often with one as a fallback for another. The choice depends on cost, quality and where your data may go.' },
      { q: 'Is my data safe with AI?', a: 'I send only the data each job needs, keep keys on the server, and pick providers and settings that fit your rules. Nothing is published without a check.' },
      { q: 'How much does AI automation cost?', a: 'It depends on the job, the volume and the review flow. [Get a quick estimate](/#estimate), then I confirm an exact quote by email.' },
    ],
    related: ['multilingual-wordpress-sites', 'custom-crm-development', 'b2b-wholesale-ordering-portal'],
  },
]

export const findNichePage = (slug) => nichePages.find((p) => p.slug === slug)

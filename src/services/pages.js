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
    faq: [
      { q: 'Does this work with QuickBooks Online?', a: 'This page is about QuickBooks Desktop (Pro, Premier and Enterprise), which uses the Web Connector. QuickBooks Online has a different, REST-based API. Send me your setup and I will tell you what it takes.' },
      { q: 'Which website platforms can you connect?', a: 'Any site with a server and a database: Drupal, WordPress and WooCommerce, or custom PHP. The integration in the case study runs on Drupal Commerce.' },
      { q: 'Do I need to open anything on the QuickBooks computer?', a: 'No. The Web Connector runs on the computer where QuickBooks is installed and connects out to your website on a schedule. No ports are opened on that computer.' },
      { q: 'What happens if a sync fails?', a: 'Every job is queued and logged, so a failed item shows up and can be sent again instead of silently going missing.' },
      { q: 'How long does it take?', a: 'It depends on what syncs and in which direction. After I review your setup, I send a written estimate with hours and a timeline.' },
    ],
    related: [],
  },
]

export const findNichePage = (slug) => nichePages.find((p) => p.slug === slug)

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
    related: [],
  },
]

export const findNichePage = (slug) => nichePages.find((p) => p.slug === slug)

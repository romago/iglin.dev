// schema.org JSON-LD for iglin.dev, /services/ and portfolio.iglin.dev.
// The home and services graphs are inlined into the HTML at build time (vite.config.js);
// the portfolio graph is rendered by Portfolio.jsx because it needs the built image URLs.

const SITE = 'https://iglin.dev/'
export const PERSON_ID = `${SITE}#roman`
const BUSINESS_ID = `${SITE}#business`
const WEBSITE_ID = `${SITE}#website`

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Roman Iglin',
  jobTitle: 'Full Stack Developer',
  description:
    'Full stack web developer since 2010: WordPress and Drupal development, React, PHP and Node.js, API integrations, Linux servers, site speed and technical SEO.',
  url: SITE,
  email: 'mailto:roman@iglin.dev',
  address: { '@type': 'PostalAddress', addressLocality: 'Woodstock', addressRegion: 'GA', addressCountry: 'US' },
  knowsLanguage: ['English', 'Russian'],
  knowsAbout: [
    'WordPress', 'Drupal', 'PHP', 'JavaScript', 'React', 'Node.js', 'MySQL', 'MongoDB',
    'Core Web Vitals', 'Technical SEO', 'Figma to WordPress', 'Website migration',
    'Linux server administration', 'QuickBooks integration', 'REST APIs', 'LLM integration',
  ],
  sameAs: [
    'https://www.linkedin.com/in/roman-iglin/',
    'https://github.com/romago',
    'https://www.upwork.com/freelancers/~01804b6061bf805cfd',
    'https://partnernetwork.ionos.com/partner/roman.iglin',
    'https://contra.com/roman_iglin',
    'https://portfolio.iglin.dev/',
  ],
}

const personRef = { '@id': PERSON_ID }

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE,
  name: 'Roman Iglin',
  description: 'Full Stack Developer: portfolio, fixed-price packages and an AI project estimator.',
  inLanguage: 'en',
  publisher: personRef,
}

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Roman Iglin — Web Development',
  url: SITE,
  email: 'roman@iglin.dev',
  description:
    'Freelance web development for businesses and agencies: WordPress and Drupal sites, Figma to WordPress, speed optimization, hosting migrations and Linux VPS setup.',
  founder: personRef,
  address: { '@type': 'PostalAddress', addressLocality: 'Woodstock', addressRegion: 'GA', addressCountry: 'US' },
  areaServed: [{ '@type': 'Country', name: 'United States' }, 'Worldwide (remote)'],
  priceRange: '$120–$3,000',
  hasOfferCatalog: { '@id': `${SITE}services/#catalog` },
}

const graph = (nodes) => ({ '@context': 'https://schema.org', '@graph': nodes })

export function homeGraph() {
  return graph([
    person,
    website,
    business,
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}#page`,
      url: SITE,
      name: 'Roman Iglin | Full Stack Developer',
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: personRef,
      about: personRef,
      inLanguage: 'en',
    },
  ])
}

export function servicesGraph(services) {
  const pageUrl = `${SITE}services/`
  return graph([
    person,
    website,
    business,
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#page`,
      url: pageUrl,
      name: 'Fixed-Price Packages | Roman Iglin',
      description: 'WordPress speed optimization, Figma to WordPress, hosting migration and Linux VPS setup with fixed prices and delivery times.',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
        ],
      },
      mainEntity: { '@id': `${pageUrl}#catalog` },
    },
    {
      '@type': 'OfferCatalog',
      '@id': `${pageUrl}#catalog`,
      name: 'Fixed-price web development packages',
      itemListElement: services.map((s) => ({
        '@type': 'Service',
        '@id': `${pageUrl}#${s.id}`,
        name: s.title,
        serviceType: s.short,
        description: s.pitch,
        url: `${pageUrl}?service=${s.id}`,
        provider: { '@id': BUSINESS_ID },
        areaServed: 'Worldwide (remote)',
        offers: s.packages.map((p) => ({
          '@type': 'Offer',
          name: `${p.tier}: ${p.name}`,
          description: p.summary,
          price: p.price,
          priceCurrency: 'USD',
          url: `${pageUrl}?service=${s.id}&package=${p.id}`,
          availability: 'https://schema.org/InStock',
          deliveryLeadTime: { '@type': 'QuantitativeValue', value: p.days, unitCode: 'DAY' },
          seller: { '@id': BUSINESS_ID },
        })),
      })),
    },
  ])
}

// The main screenshot of a case study: the desktop shot, or the first phone shot.
const shotOf = (p) => (p.visual.browser || p.visual.phones?.[0] || p.visual.phone)?.src

export function portfolioGraph(projects, imageUrl) {
  const pageUrl = 'https://portfolio.iglin.dev/'
  return graph([
    person,
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#page`,
      url: pageUrl,
      name: 'Web Developer Portfolio — Selected Work',
      description: 'Case studies of websites and apps Roman Iglin built, redesigned and made fast.',
      author: personRef,
      inLanguage: 'en',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${pageUrl}#${p.id}`,
            url: `${pageUrl}#${p.id}`,
            name: p.title,
            headline: p.tagline,
            description: p.summary,
            image: shotOf(p) && imageUrl(shotOf(p)),
            creator: personRef,
            keywords: p.stack.join(', '),
            about: (p.links || (p.url ? [{ label: p.title, url: p.url }] : [])).map((l) => ({ '@type': 'WebSite', name: l.label === 'Visit live site' ? p.title : l.label, url: l.url })),
          },
        })),
      },
    },
  ])
}

// JSON for a <script type="application/ld+json">, safe to put inside HTML.
export const toJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

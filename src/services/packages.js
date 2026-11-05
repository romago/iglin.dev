// Fixed-price packages for iglin.dev/services. The same four services and prices as Roman's Upwork
// Project Catalog. The estimate worker imports this file too, so the price in the order email
// always comes from here, not from the browser.

export const services = [
  {
    id: 'speed',
    title: 'Faster WordPress site',
    short: 'Speed & Core Web Vitals',
    pitch:
      'Slow WordPress site losing visitors and ad spend? I find what is actually slowing it down and fix it at the source, without breaking your forms or tracking.',
    proof: 'An ad landing page for a California moving company went from Lighthouse mobile 33 to 98 and from 17.7 MB to 0.9 MB, with GA4, Google Ads and Meta Pixel tracking unchanged.',
    packages: [
      {
        id: 'starter', tier: 'Starter', name: 'Speed audit', price: 150, days: 1, revisions: 0,
        summary: 'Audit of the whole site, written report and a prioritized fix list.',
        features: ['Whole site audited', 'Written report', 'Prioritized fix list'],
      },
      {
        id: 'standard', tier: 'Standard', name: 'One key page fixed', price: 450, days: 3, revisions: 1,
        summary: 'Audit and fixes on your homepage or ad landing page, with before and after numbers.',
        features: ['Homepage or ad landing page', 'Browser caching', 'Image resizing', 'Minification', 'Before / after numbers'],
      },
      {
        id: 'advanced', tier: 'Advanced', name: 'Whole-site speed', price: 900, days: 7, revisions: 2,
        summary: 'Site-wide caching, CDN, scripts, images and video, plus 14 days of fixes.',
        features: ['Whole site', 'Caching and CDN', 'Scripts, images and video', 'Database optimization', '14 days of fixes'],
      },
    ],
  },
  {
    id: 'figma-wordpress',
    title: 'WordPress site from your Figma design',
    short: 'Figma → WordPress',
    pitch:
      'Have a Figma design and need it built as a fast WordPress site your team can actually edit? I turn designs into custom themes and blocks, so editors build pages from branded components without breaking the layout.',
    proof: 'A WordPress block theme with custom ACF blocks for a physician group, built white-label from an agency’s Figma design; a custom ACF theme for a Memphis law firm.',
    packages: [
      {
        id: 'starter', tier: 'Starter', name: 'Landing page', price: 450, days: 3, revisions: 0,
        summary: '1 responsive page from your Figma file, easy to edit, with a form and basic SEO.',
        features: ['1 page', 'Up to 3 plugins', 'Contact form', 'Responsive', 'Basic SEO'],
      },
      {
        id: 'standard', tier: 'Standard', name: 'Small site', price: 1500, days: 7, revisions: 1,
        summary: 'Up to 5 pages with reusable custom ACF blocks, forms, SEO basics and fast loading.',
        features: ['Up to 5 pages', 'Custom ACF blocks', 'Up to 5 plugins', 'Content upload', 'SEO basics, fast loading'],
      },
      {
        id: 'advanced', tier: 'Advanced', name: 'Custom block theme', price: 3000, days: 14, revisions: 2,
        summary: 'Up to 10 pages on a custom block theme with a reusable block library and motion.',
        features: ['Up to 10 pages', 'Custom block theme', 'Reusable block library', 'Motion and animations', 'Up to 8 plugins'],
      },
    ],
  },
  {
    id: 'migration',
    title: 'WordPress site moved to a new host',
    short: 'Hosting migration',
    pitch:
      'Moving your WordPress site to a new host? Bluehost, GoDaddy, SiteGround, Hostinger, WP Engine, Kinsta or any other: I plan the move, test the site on the new host first and switch over with minimal downtime and a rollback ready.',
    proof: 'Moved a logistics company’s site off its old hosting to a new server; upgraded a B2B store from PHP 7.4 to 8.5 with 12 seconds of maintenance mode.',
    packages: [
      {
        id: 'starter', tier: 'Starter', name: 'Basic move', price: 120, days: 1, revisions: 0,
        summary: '1 site, host to host: files, database, DNS and SSL; forms checked after the switch.',
        features: ['1 site', 'Files and database', 'DNS and SSL', 'Forms checked after the switch'],
      },
      {
        id: 'standard', tier: 'Standard', name: 'Full move', price: 220, days: 2, revisions: 1,
        summary: 'Tested on the new host first; email DNS, redirects, domain change, cache and CDN.',
        features: ['Tested on the new host first', 'Email DNS records', 'Redirects and domain change', 'Cache and CDN', 'Full backup'],
      },
      {
        id: 'advanced', tier: 'Advanced', name: 'Store or large site', price: 400, days: 3, revisions: 2,
        summary: 'WooCommerce or a large site with no lost orders, a PHP upgrade and 14 days of support.',
        features: ['WooCommerce or large site', 'No lost orders', 'PHP version upgrade', 'Full backup', '14 days of support'],
      },
    ],
  },
  {
    id: 'vps',
    title: 'Secure Linux VPS set up from scratch',
    short: 'VPS server setup',
    pitch:
      'Want your own server instead of shared hosting? I set up a Linux VPS from scratch on DigitalOcean, IONOS, Hetzner or similar: Ubuntu, Nginx or Apache, PHP-FPM, MariaDB, free SSL, a firewall, automatic backups and monitoring.',
    proof: 'Set up and tuned a DigitalOcean LAMP server for a B2B store and later upgraded it from PHP 7.4 to 8.5 with 12 seconds of maintenance mode.',
    packages: [
      {
        id: 'starter', tier: 'Starter', name: 'VPS setup', price: 350, days: 2, revisions: 0,
        summary: 'Ubuntu VPS with Nginx or Apache, PHP-FPM, MariaDB, SSL, firewall and backups.',
        features: ['Ubuntu, Nginx or Apache', 'PHP-FPM and MariaDB', 'SSL and firewall', 'Backups', 'Setup notes'],
      },
      {
        id: 'standard', tier: 'Standard', name: 'VPS + migration', price: 550, days: 2, revisions: 0,
        summary: 'Everything in VPS setup, plus 1 site moved to the new server and tested.',
        features: ['Everything in VPS setup', '1 site moved and tested', 'Setup notes'],
      },
      {
        id: 'advanced', tier: 'Advanced', name: 'VPS, upgrades and hardening', price: 950, days: 4, revisions: 0,
        summary: 'Plus PHP and WordPress upgrades, hardening, off-site backups, monitoring and 30 days of support.',
        features: ['Everything in VPS + migration', 'PHP and WordPress upgrades', 'Security hardening', 'Off-site backups and monitoring', '30 days of support'],
      },
    ],
  },
]

export function findPackage(serviceId, packageId) {
  const service = services.find((s) => s.id === serviceId)
  const pkg = service?.packages.find((p) => p.id === packageId)
  return service && pkg ? { service, pkg } : null
}

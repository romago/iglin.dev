// Short labels for the published niche pages, used by the site-wide footer.
// Kept apart from pages.js so the home page bundle does not carry every page's copy.
// The build (scripts/prerender.mjs) fails if this list and the published pages in pages.js differ.
export const nicheNav = [
  { slug: 'landing-page-speed-optimization', label: 'Landing page speed' },
  { slug: 'quickbooks-website-integration', label: 'QuickBooks integration' },
  { slug: 'drupal-7-migration', label: 'Drupal 7 migration' },
  { slug: 'wpbakery-to-beaver-builder-migration', label: 'WPBakery → Gutenberg / Beaver' },
  { slug: 'white-label-wordpress-developer', label: 'White-label for agencies' },
  { slug: 'law-firm-website-developer', label: 'Law firm websites' },
  { slug: 'legacy-php-upgrade', label: 'PHP 8 upgrade' },
  { slug: 'greenhouse-wordpress-integration', label: 'Greenhouse jobs in WordPress' },
  { slug: 'multilingual-wordpress-sites', label: 'Multilingual sites' },
  { slug: 'b2b-wholesale-ordering-portal', label: 'B2B ordering portal' },
  { slug: 'custom-crm-development', label: 'Custom CRM' },
  { slug: 'wordpress-job-board-developer', label: 'Job board websites' },
  { slug: 'ai-automation', label: 'AI automation' },
]

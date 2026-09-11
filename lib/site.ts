/**
 * Canonical facts about the site, shared by metadata, structured data,
 * the sitemap and robots. Change a value here and every consumer follows.
 */

export const SITE = {
  url: 'https://www.tdc-advisory.com',
  name: 'TDC Digital Advisory',
  legalName: 'TDC Digital Advisory LLC',
  tagline: 'Transformation & Executive Delivery',
  description:
    'Independent enterprise advisory for AI governance, digital transformation, SAP S/4HANA delivery and test management. Senior-led by Tanja Drefke.',
  email: 'tanja@tdc-advisory.com',
  locale: 'en_US',
  language: 'en',
  foundingDate: '2026-04-01',
  ogImage: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'TDC Digital Advisory — Transformation needs clarity. Delivery needs leadership.',
  },
  address: {
    street: '30 N Gould St, Ste R',
    locality: 'Sheridan',
    region: 'WY',
    postalCode: '82801',
    country: 'US',
  },
  founder: {
    name: 'Tanja Drefke',
    jobTitle: 'Founder & Principal',
    description: 'Transformation Advisor and Executive Delivery Lead.',
    linkedin: 'https://linkedin.com/in/tanjadrefke',
  },
  partner: {
    name: 'Veyago',
    url: 'https://www.veyago.cloud',
  },
} as const;

/** The six practices, used for the service catalogue in structured data. */
export const PRACTICES = [
  ['AI Governance & Regulatory Readiness', 'Connect AI strategy to governance, risk ownership and operational controls.'],
  ['Strategic & Digital Advisory', 'Independent perspective on technology and investment decisions, translated into credible roadmaps.'],
  ['Enterprise Transformation', 'Change led across business functions, technology teams and geographies.'],
  ['Digital Transformation Services', 'Delivery across SAP S/4HANA, cloud platforms and enterprise integrations.'],
  ['Test Management & Automation', 'A test approach connecting business risk to coverage, ownership and reliable execution.'],
  ['Digital Product Engineering', 'Websites, web applications and first usable versions of digital products.'],
] as const;

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();

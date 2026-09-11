import { SITE, PRACTICES, absoluteUrl } from '@/lib/site';

/**
 * JSON-LD emitted once per page. The site-wide graph (organisation, website,
 * founder) is stable; pages pass extra nodes such as a breadcrumb trail.
 */

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': absoluteUrl('/#organization'),
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: SITE.foundingDate,
  image: absoluteUrl(SITE.ogImage.path),
  address: postalAddress,
  founder: { '@id': absoluteUrl('/#founder') },
  sameAs: [SITE.founder.linkedin],
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  knowsAbout: [
    'AI governance',
    'EU AI Act readiness',
    'Digital transformation',
    'SAP S/4HANA',
    'Enterprise transformation',
    'Test management and automation',
    'Programme and PMO leadership',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Advisory and delivery practices',
    itemListElement: PRACTICES.map(([name, description]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, description, provider: { '@id': absoluteUrl('/#organization') } },
    })),
  },
};

const founder = {
  '@type': 'Person',
  '@id': absoluteUrl('/#founder'),
  name: SITE.founder.name,
  jobTitle: SITE.founder.jobTitle,
  description: SITE.founder.description,
  worksFor: { '@id': absoluteUrl('/#organization') },
  url: SITE.url,
  sameAs: [SITE.founder.linkedin],
};

const website = {
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: { '@id': absoluteUrl('/#organization') },
};

export type BreadcrumbEntry = { name: string; path: string };

export function StructuredData({
  breadcrumbs,
  page,
}: {
  breadcrumbs?: BreadcrumbEntry[];
  page?: { name: string; path: string; description?: string };
}) {
  const graph: object[] = [organization, founder, website];

  if (page) {
    graph.push({
      '@type': 'WebPage',
      '@id': absoluteUrl(page.path + '#webpage'),
      url: absoluteUrl(page.path),
      name: page.name,
      description: page.description ?? SITE.description,
      isPartOf: { '@id': absoluteUrl('/#website') },
      about: { '@id': absoluteUrl('/#organization') },
      inLanguage: SITE.language,
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped below; no user input reaches this.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
      }}
    />
  );
}

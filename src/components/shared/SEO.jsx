/**
 * SEO Component - Metadata for Humans & Search Engines
 * Every word chosen with care for discovery
 */

import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Inspire - Kidney Transplant Resources & Education',
  description = 'Comprehensive kidney transplant resources, education, and support for patients and families. Access trusted guides, connect with healthcare professionals, and navigate your transplant journey with confidence.',
  keywords = 'kidney transplant, kidney disease, CKD, renal disease, living donor, transplant resources, kidney health',
  image = '/images/inspire.svg',
  url = 'https://inspirekidney.org/',
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalOrganization',
          name: 'Inspire Kidney Transplant Resources',
          description: description,
          url: url,
          logo: image,
          sameAs: [],
          medicalSpecialty: 'Nephrology',
          serviceArea: {
            '@type': 'Place',
            name: 'United States',
          },
        })}
      </script>
    </Helmet>
  )
}

/**
 * SEO Component - Metadata for Humans & Search Engines
 * Every word chosen with care for discovery
 * 
 * Link Preview Explanation:
 * When you share a link via SMS, iMessage, WhatsApp, or social media, these platforms
 * fetch the page's meta tags to create a preview card. The key tags are:
 * 
 * - Open Graph (og:*) - Used by Facebook, LinkedIn, WhatsApp, iMessage, and most platforms
 * - Twitter Card (twitter:*) - Used specifically by Twitter/X
 * - Standard meta tags - Used by search engines and some messaging apps
 * 
 * The preview image MUST be:
 * - PNG or JPG format (SVG doesn't work for social previews)
 * - Accessible via absolute URL (https://...)
 * - Recommended size: 1200x630 pixels (1.91:1 aspect ratio)
 * - File size under 8MB (ideally under 1MB)
 */

import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Inspire - Kidney Transplant Resources & Education',
  description = 'Comprehensive kidney transplant resources, education, and support for patients and families. Access trusted guides, connect with healthcare professionals, and navigate your transplant journey with confidence.',
  keywords = 'kidney transplant, kidney disease, CKD, renal disease, living donor, transplant resources, kidney health',
  // Use PNG instead of SVG for social media previews (SVG doesn't work)
  image = `${import.meta.env.BASE_URL}images/inspire.png`,
  url = 'https://inspirekidney.org/',
}) {
  // Construct full absolute image URL for social media
  // Social platforms require absolute URLs, not relative paths
  const getFullImageUrl = () => {
    if (image.startsWith('http')) {
      return image // Already absolute
    }
    // Remove leading slash from BASE_URL if present, add trailing slash if needed
    const baseUrl = url.replace(/\/$/, '') // Remove trailing slash
    const imagePath = image.startsWith('/') ? image : `/${image}`
    return `${baseUrl}${imagePath}`
  }
  
  const fullImageUrl = getFullImageUrl()
  const fullSiteUrl = url.replace(/\/$/, '') // Remove trailing slash for consistency
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Inspire Kidney Transplant Resources" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook - Used by Facebook, LinkedIn, WhatsApp, iMessage, etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullSiteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Inspire - Kidney Transplant Resources Logo" />
      <meta property="og:site_name" content="Inspire Kidney Transplant Resources" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card - Twitter uses 'name' attribute, not 'property' */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullSiteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Inspire - Kidney Transplant Resources Logo" />

      {/* Additional Meta Tags for Better Compatibility */}
      <meta name="theme-color" content="#0D9488" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Inspire" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalOrganization',
          name: 'Inspire Kidney Transplant Resources',
          description: description,
          url: fullSiteUrl,
          logo: fullImageUrl,
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

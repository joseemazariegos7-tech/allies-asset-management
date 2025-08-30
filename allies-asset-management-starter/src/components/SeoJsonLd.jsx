export default function SeoJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Allies Asset Management",
    "image": "https://alliesassetmanagement.com/assets/logo.png",
    "url": "https://alliesassetmanagement.com",
    "telephone": "+14239996377",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2417 East 13th Street",
      "addressLocality": "Chattanooga",
      "addressRegion": "TN",
      "postalCode": "37404",
      "addressCountry": "US"
    },
    "areaServed": "Chattanooga TN and surrounding areas",
    "priceRange": "$$",
    "department": {
      "@type": "ProfessionalService",
      "name": "Property Management",
      "serviceType": "Property Management, Tenant Placement, Maintenance, Renovations"
    }
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}

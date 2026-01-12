import { companyData, socialLinks } from '@/components/footer/FooterData'; // Reutilize seus dados existentes

export default function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Alternativas: "LegalService", "AccountingService"
    "name": "RV Tributos",
    "image": "https://www.rvtributos.com/logo.png",
    "description": "Consultoria tributária especializada em revisão fiscal, planejamento estratégico e recuperação de créditos para empresas de todos os portes.",
    "url": "https://www.rvtributos.com",
    "telephone": companyData.phoneDisplay, 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.address,
      "addressLocality": "Cidade",
      "addressRegion": "SC",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": socialLinks.map(link => link.href)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
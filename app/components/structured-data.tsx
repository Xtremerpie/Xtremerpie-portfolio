
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://xtremerpie-portfolio-oa3i.vercel.app/#person",
        name: "Xtremerpie",
        url: "https://xtremerpie-portfolio-oa3i.vercel.app/",
        description:
          "Independent student builder exploring AI, software, automation, robotics, and game development.",
      },
      {
        "@type": "WebSite",
        "@id": "https://xtremerpie-portfolio-oa3i.vercel.app/#website",
        name: "Xtremerpie",
        url: "https://xtremerpie-portfolio-oa3i.vercel.app/",
        description:
          "Official portfolio and project hub for Xtremerpie.",
        publisher: {
          "@id": "https://xtremerpie-portfolio-oa3i.vercel.app/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

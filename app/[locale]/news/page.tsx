import Navbar from "../components/Navbar";
import { getLocale } from "next-intl/server";

const newsCategories = [
  {
    title: "Steel",
    href: "steel",
    description:
      "Steel industry updates, production trends, plant investments and global steel market developments.",
    sources: ["World Steel Association", "SteelOrbis", "Fastmarkets"],
  },
  {
    title: "Mining",
    href: "mining",
    description:
      "Mining projects, raw material supply, iron ore, copper, coal and mineral investment updates.",
    sources: ["MINING.COM", "Global Energy Monitor", "Mining Technology"],
  },
  {
    title: "Shipping & Logistics",
    description:
      "Freight rates, ports, shipping disruptions, geopolitical risks and international logistics updates.",
    sources: ["Drewry", "UNCTAD", "Reuters"],
  },
  {
    title: "Energy",
    description:
      "Coal, gas, oil, electricity and industrial energy developments affecting heavy industry.",
    sources: ["IEA", "Global Energy Monitor", "Reuters"],
  },
  {
    title: "Industrial Projects",
    description:
      "New plant investments, EPC projects, infrastructure development and industrial expansion news.",
    sources: ["Global Energy Monitor", "Government Sources", "Industry Media"],
  },
  {
    title: "Market Intelligence",
    description:
      "Future Wang Corp analysis explaining how global events affect sourcing, logistics, projects and suppliers.",
    sources: ["Internal Analysis", "Partner Network", "Market Intelligence"],
  },
];

export default async function NewsPage() {
  const locale = await getLocale();

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">NEWS & INTELLIGENCE</p>

          <h1 className="platform-title">Global Industrial Intelligence</h1>

          <p className="platform-description">
            Curated industrial news sources covering steel, mining, logistics,
            energy, geopolitical risk and international project developments.
            Automated news feeds and Wang Corp impact analysis will be added in
            future platform stages.
          </p>

          <div className="platform-status">
            <span></span>
            News feed structure in development
          </div>
        </section>

        <section className="platform-grid">
          {newsCategories.map((category) => {
            const href = category.href
              ? `/${locale}/news/${category.href}`
              : `/${locale}/news`;

            return (
              <a href={href} className="platform-card" key={category.title}>
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="locked-note">
                  <strong>Planned Sources:</strong>
                  {category.sources.map((source) => (
                    <p key={source}>{source}</p>
                  ))}
                </div>
              </a>
            );
          })}
        </section>
      </main>
    </>
  );
}
import Navbar from "../components/Navbar";
import { getLocale } from "next-intl/server";
import Parser from "rss-parser";

export const revalidate = 3600;

type LatestItem = {
  title: string;
  source: string;
  category: string;
};

type NewsCategory = {
  title: string;
  href: string;
  description: string;
  sources: string[];
  feeds?: {
    source: string;
    category: string;
    url: string;
  }[];
};

const parser = new Parser();

const newsCategories: NewsCategory[] = [
  {
  title: "Steel",
  href: "steel",
  description:
    "Steel industry updates, production trends, plant investments and global steel market developments.",
  sources: ["GMK Center", "World Steel Association", "SteelOrbis"],
  feeds: [
    {
      source: "GMK Center",
      category: "Steel Market",
      url: "https://gmk.center/en/feed/",
    },
  ],
},
  {
    title: "Mining",
    href: "mining",
    description:
      "Mining projects, raw material supply, iron ore, copper, coal and mineral investment updates.",
    sources: ["MINING.COM", "Global Energy Monitor", "Mining Technology"],
    feeds: [
      {
        source: "MINING.COM",
        category: "Iron Ore",
        url: "https://www.mining.com/feed/?post_type=post&s=iron%20ore",
      },
    ],
  },
  {
    title: "Shipping & Logistics",
    href: "logistics",
    description:
      "Freight rates, ports, shipping disruptions, geopolitical risks and international logistics updates.",
    sources: ["The Maritime Executive", "FreightWaves"],
    feeds: [
      {
        source: "The Maritime Executive",
        category: "Shipping",
        url: "https://maritime-executive.com/rss",
      },
    ],
  },
  {
    title: "Energy",
    href: "energy",
    description:
      "Coal, gas, oil, electricity and industrial energy developments affecting heavy industry.",
    sources: ["Power Technology", "Offshore Technology", "Energy Monitor"],
    feeds: [
      {
        source: "Power Technology",
        category: "Power",
        url: "https://www.power-technology.com/feed/",
      },
    ],
  },
  {
    title: "Industrial Projects",
    href: "projects",
    description:
      "New plant investments, EPC projects, infrastructure development and industrial expansion news.",
    sources: ["Mining Technology", "Power Technology", "Offshore Technology"],
    feeds: [
      {
        source: "Mining Technology",
        category: "Mining Projects",
        url: "https://www.mining-technology.com/feed/",
      },
    ],
  },
  {
  title: "Market Intelligence",
  href: "market-intelligence",
  description:
    "Wang Corp analysis explaining how global events affect sourcing, logistics, projects and suppliers.",
  sources: ["Wang Corp Analysis", "Partner Network", "Market Intelligence"],
},
];

async function getLatestHeadline(
  feeds?: NewsCategory["feeds"]
): Promise<LatestItem | null> {
  if (!feeds || feeds.length === 0) return null;

  try {
    const response = await fetch(feeds[0].url, {
      next: { revalidate: 3600 },
    });

    const xml = await response.text();
    const parsedFeed = await parser.parseString(xml);
    const firstItem = parsedFeed.items[0];

    if (!firstItem?.title) return null;

    return {
      title: firstItem.title,
      source: feeds[0].source,
      category: feeds[0].category,
    };
  } catch {
    return null;
  }
}

export default async function NewsPage() {
  const locale = await getLocale();

  const latestItems = await Promise.all(
    newsCategories.map((category) => getLatestHeadline(category.feeds))
  );

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">NEWS & INTELLIGENCE</p>

          <h1 className="platform-title">Global Industrial Intelligence</h1>

          <p className="platform-description">
            Curated and automatically updated industrial news covering steel,
            mining, logistics, energy, industrial projects and market
            intelligence.
          </p>

          <div className="platform-status">
            <span></span>
            Live category previews active · Updated hourly
          </div>
        </section>

        <section className="platform-grid">
          {newsCategories.map((category, index) => {
            const href = `/${locale}/news/${category.href}`;
            const latest = latestItems[index];

            return (
              <a href={href} className="platform-card" key={category.title}>
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="locked-note">
                  {latest ? (
                    <>
                      <strong>Latest:</strong>
                      <p>{latest.title}</p>
                      <p>
                        {latest.source} · {latest.category}
                      </p>
                    </>
                  ) : (
                    <>
                      <strong>Status:</strong>
                      <p>Analysis section / source feed under development</p>
                    </>
                  )}
                </div>
              </a>
            );
          })}
        </section>
      </main>
    </>
  );
}
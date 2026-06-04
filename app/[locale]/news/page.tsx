import Navbar from "../components/Navbar";
import { getTranslations } from "next-intl/server";
import Parser from "rss-parser";

export const revalidate = 3600;

type LatestItem = {
  title: string;
  source: string;
  category: string;
};

type NewsCategory = {
  key: string;
  href: string;
  feeds?: {
    source: string;
    category: string;
    url: string;
  }[];
};

const parser = new Parser();

const newsCategories: NewsCategory[] = [
  {
    key: "steel",
    href: "steel",
    feeds: [
      {
        source: "GMK Center",
        category: "Steel Market",
        url: "https://gmk.center/en/feed/",
      },
    ],
  },
  {
    key: "mining",
    href: "mining",
    feeds: [
      {
        source: "MINING.COM",
        category: "Iron Ore",
        url: "https://www.mining.com/feed/?post_type=post&s=iron%20ore",
      },
    ],
  },
  {
    key: "logistics",
    href: "logistics",
    feeds: [
      {
        source: "The Maritime Executive",
        category: "Shipping",
        url: "https://maritime-executive.com/rss",
      },
    ],
  },
  {
    key: "energy",
    href: "energy",
    feeds: [
      {
        source: "Power Technology",
        category: "Power",
        url: "https://www.power-technology.com/feed/",
      },
    ],
  },
  {
    key: "projects",
    href: "projects",
    feeds: [
      {
        source: "Mining Technology",
        category: "Mining Projects",
        url: "https://www.mining-technology.com/feed/",
      },
    ],
  },
  {
    key: "marketIntelligence",
    href: "market-intelligence",
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

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "News",
  });

  const latestItems = await Promise.all(
    newsCategories.map((category) => getLatestHeadline(category.feeds))
  );

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>

          <h1 className="platform-title">{t("title")}</h1>

          <p className="platform-description">{t("description")}</p>

          <div className="platform-status">
            <span></span>
            {t("status")}
          </div>
        </section>

        <section className="platform-grid">
          {newsCategories.map((category, index) => {
            const href = `/${locale}/news/${category.href}`;
            const latest = latestItems[index];

            return (
              <a href={href} className="platform-card" key={category.key}>
                <h3>{t(`categories.${category.key}.title`)}</h3>

                <p>{t(`categories.${category.key}.description`)}</p>

                <div className="locked-note">
                  {latest ? (
                    <>
                      <strong>{t("latest")}:</strong>

                      <p>{latest.title}</p>

                      <p>
                        {latest.source} · {latest.category}
                      </p>
                    </>
                  ) : (
                    <>
                      <strong>{t("statusLabel")}:</strong>

                      <p>{t("analysisStatus")}</p>
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
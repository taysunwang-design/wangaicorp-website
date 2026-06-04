import Navbar from "../../components/Navbar";
import { getTranslations } from "next-intl/server";
import Parser from "rss-parser";

export const revalidate = 3600;

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet: string;
  source: string;
  category: string;
};

const parser = new Parser();

const feeds = [
  {
    source: "MINING.COM",
    category: "Iron Ore",
    url: "https://www.mining.com/feed/?post_type=post&s=iron%20ore",
  },
  {
    source: "MINING.COM",
    category: "Coal",
    url: "https://www.mining.com/feed/?post_type=post&s=coal",
  },
  {
    source: "MINING.COM",
    category: "Copper",
    url: "https://www.mining.com/feed/?post_type=post&s=copper",
  },
];

async function getMiningNews(): Promise<FeedItem[]> {
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const response = await fetch(feed.url, {
        next: { revalidate: 3600 },
      });

      const xml = await response.text();
      const parsedFeed = await parser.parseString(xml);

      return parsedFeed.items.slice(0, 5).map((item) => ({
        title: item.title || "Untitled",
        link: item.link || "#",
        pubDate: item.pubDate,
        contentSnippet:
          item.contentSnippet ||
          item.content ||
          "No summary available from source.",
        source: feed.source,
        category: feed.category,
      }));
    })
  );

  return results
    .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
    .slice(0, 12);
}

function formatDate(date?: string) {
  if (!date) return "Date unavailable";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

function trimText(text: string, maxLength = 150) {
  const cleanText = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

  if (cleanText.length <= maxLength) return cleanText;

  return `${cleanText.slice(0, maxLength)}...`;
}

function getUpdatedTime() {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export default async function MiningNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "NewsPages.mining",
  });

  const newsItems = await getMiningNews();

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

          <p className="platform-description">
            {t("lastUpdated")}: {getUpdatedTime()}
          </p>
        </section>

        <section className="platform-grid">
          {newsItems.map((item) => (
            <article
              key={`${item.source}-${item.category}-${item.title}`}
              className="platform-card"
            >
              <p className="platform-label">{item.category}</p>

              <h3>{item.title}</h3>

              <p>{trimText(item.contentSnippet)}</p>

              <div className="locked-note">
                <p>
                  <strong>{t("source")}:</strong> {item.source}
                </p>

                <p>
                  <strong>{t("date")}:</strong> {formatDate(item.pubDate)}
                </p>

                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {t("readOriginal")} →
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
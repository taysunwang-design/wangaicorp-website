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
    source: "Power Technology",
    category: "Energy",
    url: "https://www.power-technology.com/feed/",
  },
  {
    source: "Offshore Energy",
    category: "Energy",
    url: "https://www.offshore-energy.biz/feed/",
  },
];

const keywords = [
  "energy",
  "power",
  "electricity",
  "wind",
  "solar",
  "hydrogen",
  "battery",
  "storage",
  "offshore",
  "gas",
  "lng",
  "oil",
  "nuclear",
  "renewable",
  "grid",
  "transmission",
  "substation",
  "power plant",
  "turbine",
  "decarbonization",
  "carbon",
  "emissions",
  "pipeline",
];

async function getEnergyNews(): Promise<FeedItem[]> {
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const response = await fetch(feed.url, {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; WangCorpBot/1.0; +https://wangaicorp.com)",
          Accept: "application/rss+xml, application/xml, text/xml",
        },
      });

      const xml = await response.text();
      const parsedFeed = await parser.parseString(xml);

      return parsedFeed.items
        .filter((item) => {
          const text = `${item.title || ""} ${
            item.contentSnippet || item.content || ""
          }`.toLowerCase();

          return keywords.some((keyword) =>
            text.includes(keyword.toLowerCase())
          );
        })
        .slice(0, 12)
        .map((item) => ({
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

  const combinedItems = results.flatMap((result) =>
    result.status === "fulfilled" ? result.value : []
  );

  const uniqueItems = combinedItems.filter(
    (item, index, self) =>
      index === self.findIndex((x) => x.title === item.title)
  );

  return uniqueItems.slice(0, 12);
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

export default async function EnergyNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "NewsPages.energy",
  });

  const newsItems = await getEnergyNews();

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
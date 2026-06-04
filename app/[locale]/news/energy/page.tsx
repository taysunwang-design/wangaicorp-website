import Navbar from "../../components/Navbar";
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
    category: "Power",
    url: "https://www.power-technology.com/feed/",
  },
  {
    source: "Offshore Technology",
    category: "Oil & Gas",
    url: "https://www.offshore-technology.com/feed/",
  },
  {
    source: "Energy Monitor",
    category: "Energy Markets",
    url: "https://www.energymonitor.ai/feed/",
  },
];

async function getEnergyNews(): Promise<FeedItem[]> {
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

export default async function EnergyNewsPage() {
  const newsItems = await getEnergyNews();

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">ENERGY NEWS</p>

          <h1 className="platform-title">Energy Market Intelligence</h1>

          <p className="platform-description">
            Automatically updated headlines related to power generation, oil and
            gas, industrial energy costs, electricity markets and energy
            infrastructure developments affecting heavy industry.
          </p>

          <div className="platform-status">
            <span></span>
            Auto-updating energy news feed active · Updated hourly
          </div>

          <p className="platform-description">
            Last updated: {getUpdatedTime()}
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
                  <strong>Source:</strong> {item.source}
                </p>

                <p>
                  <strong>Date:</strong> {formatDate(item.pubDate)}
                </p>

                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read original source →
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
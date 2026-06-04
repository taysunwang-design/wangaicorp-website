import Navbar from "../../components/Navbar";

const steelSources = [
  {
    title: "Steel Production & Market Updates",
    description:
      "Steel production trends, mill activity, global steel demand, prices and trade developments.",
    source: "Steel-focused feeds will be connected after testing stable RSS sources.",
  },
  {
    title: "Steel Plant Investments",
    description:
      "New steel plants, blast furnace upgrades, EAF investments, rolling mill projects and modernization plans.",
    source: "Planned integration: industry media, public company releases and government investment announcements.",
  },
  {
    title: "Decarbonization & Technology",
    description:
      "Hydrogen steelmaking, EAF transition, energy efficiency, emissions reduction and digital plant technology.",
    source: "Planned integration: worldsteel, industry associations and technology providers.",
  },
];

export default function SteelNewsPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">STEEL NEWS</p>

          <h1 className="platform-title">Steel Industry Intelligence</h1>

          <p className="platform-description">
            Steel production, steel plant investments, rolling mill projects,
            blast furnace developments, steel trade, pricing trends and
            technology updates.
          </p>

          <div className="platform-status">
            <span></span>
            Steel-specific RSS sources under testing
          </div>
        </section>

        <section className="platform-grid">
          {steelSources.map((item) => (
            <article className="platform-card" key={item.title}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="locked-note">
                <p>{item.source}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
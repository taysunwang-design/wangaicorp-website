import Navbar from "../../components/Navbar";

const insights = [
  {
    category: "Logistics Impact",
    title: "Shipping disruptions and freight cost risk",
    description:
      "Future Wang Corp analysis will explain how geopolitical events, port delays and shipping disruptions may affect industrial sourcing, delivery schedules and landed cost."
  },
  {
    category: "Steel Market Impact",
    title: "Steel demand, raw materials and equipment opportunity",
    description:
      "This section will connect steel market developments with possible demand for plant upgrades, spare parts, modernization projects and supplier opportunities."
  },
  {
    category: "Mining & Raw Materials",
    title: "Mining investments and industrial equipment demand",
    description:
      "Future analysis will track mining projects, raw material supply and how new investments may create demand for heavy equipment, castings and project coordination."
  },
  {
    category: "Project Opportunity",
    title: "Industrial investments as business signals",
    description:
      "Wang Corp will monitor public investment news and identify possible opportunities for manufacturers, EPC partners, suppliers and trading coordination."
  },
  {
    category: "China Supply Chain",
    title: "China-based supplier capability and global demand",
    description:
      "This section will eventually connect global industrial demand with selected Chinese manufacturing capabilities and partner networks."
  },
  {
    category: "Wang Corp View",
    title: "From news to industrial action",
    description:
      "The long-term goal is not only to display news, but to explain what each development means for sourcing, logistics, RFQs, projects and suppliers."
  }
];

export default function MarketIntelligencePage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">MARKET INTELLIGENCE</p>

          <h1 className="platform-title">Wang Corp Industrial Analysis</h1>

          <p className="platform-description">
            This section will become Wang Corp&apos;s own interpretation layer,
            connecting global news with industrial sourcing, logistics, project
            opportunities, equipment demand and supplier coordination.
          </p>

          <div className="platform-status">
            <span></span>
            Internal analysis module in development
          </div>
        </section>

        <section className="platform-grid">
          {insights.map((item) => (
            <article className="platform-card" key={item.title}>
              <p className="platform-label">{item.category}</p>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="locked-note">
                Future Wang Corp analysis content
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
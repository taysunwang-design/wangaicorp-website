import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">SERVICES</p>

          <h1 className="platform-title">
            Industrial systems built for international cooperation.
          </h1>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Industrial Coordination</h3>
            <p>
              International supplier coordination, RFQ management, project
              tracking, and engineering communication support.
            </p>
          </div>

          <div className="platform-card">
            <h3>Strategic Sourcing</h3>
            <p>
              Global industrial procurement and manufacturing partnerships
              focused on steel, mining, and heavy industry sectors.
            </p>
          </div>

          <div className="platform-card">
            <h3>Digital Infrastructure</h3>
            <p>
              Enterprise-grade industrial platforms integrating AI, multilingual
              communication, and operational coordination.
            </p>
          </div>

          <div className="platform-card">
            <h3>AI-Assisted Communication</h3>
            <p>
              Real-time multilingual industrial communication and coordination
              systems for global business operations.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
import Navbar from "../components/Navbar";

export default function PlatformPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">WANG PLATFORM</p>

          <h1 className="platform-title">Industrial Coordination System</h1>

          <p className="platform-description">
            Enterprise-grade digital infrastructure for supplier coordination,
            multilingual communication, RFQ management, and international
            industrial collaboration.
          </p>

          <div className="platform-status">
            <span className="status-dot"></span>
            Platform architecture in development
          </div>

          <div className="home-actions" style={{ marginTop: "40px" }}>
            <a href="../contact" className="primary-button">
              Request Access
            </a>

            <a href="../" className="secondary-button">
              Return Home
            </a>
          </div>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>AI Translation Layer</h3>
            <p>
              Multilingual communication infrastructure designed for industrial
              terminology, supplier coordination, and cross-border project
              communication.
            </p>
          </div>

          <div className="platform-card">
            <h3>Industrial CRM</h3>
            <p>
              Company, plant, department, contact, project, and equipment-level
              relationship management designed specifically for heavy industry.
            </p>
          </div>

          <div className="platform-card">
            <h3>RFQ Management</h3>
            <p>
              Structured request, quotation, document, and technical
              clarification workflows for international industrial procurement.
            </p>
          </div>

          <div className="platform-card">
            <h3>Supplier Coordination</h3>
            <p>
              A controlled workspace for suppliers, clients, engineers, and
              coordinators to communicate through a single transparent channel.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
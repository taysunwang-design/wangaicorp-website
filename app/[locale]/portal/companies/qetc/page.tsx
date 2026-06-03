import Navbar from "../../../components/Navbar";

export default function QetcPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">GROUP COMPANY</p>

          <h1 className="platform-title">
            QETC Engineering & Technology
          </h1>

          <p className="platform-description">
            Engineering, international sales, trading and project coordination
            company of the group. QETC represents the group’s own manufacturing
            capability and coordinates partner-based solutions for larger
            industrial projects.
          </p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Company Role</h3>
            <p>Engineering Company</p>
            <p>International Sales Department</p>
            <p>Trading Company</p>
            <p>Project Coordination Platform</p>
            <p>Partner Integration Center</p>
          </div>

          <div className="platform-card">
            <h3>Core Functions</h3>
            <p>International Business Development</p>
            <p>Technical & Commercial Coordination</p>
            <p>Supplier / Partner Integration</p>
            <p>Strategic Sourcing</p>
            <p>Project Communication</p>
          </div>

          <div className="platform-card">
            <h3>Manufacturing Relationship</h3>
            <p>
              QETC represents Qinye Heavy Industry, Shenye Heavy Equipment and
              Shenye Foundry for products manufactured within group capability.
            </p>
            <p>
              When equipment or systems are outside direct manufacturing scope,
              QETC may coordinate qualified partners or outsource selected
              parts and equipment.
            </p>
          </div>

          <div className="platform-card">
            <h3>Project Integration Model</h3>
            <p>
              For large industrial systems such as complete stacker reclaimer
              or sinter plant projects, QETC does not claim full in-house
              manufacturing. The company coordinates partners and may
              manufacture selected components within group capability.
            </p>
          </div>

          <div className="platform-card">
            <h3>Market Focus</h3>
            <p>Steel Plants</p>
            <p>Mining Industry</p>
            <p>Heavy Industry Projects</p>
            <p>International Procurement</p>
            <p>Industrial Spare Parts</p>
          </div>

          <div className="platform-card">
            <h3>Access Level</h3>
            <p>Internal / Premium</p>
            <p>
              Partner lists, project history, commercial notes, RFQs and client
              records are restricted according to user role and subscription
              level.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
import Navbar from "../../../components/Navbar";

export default function ShenyeFoundryPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">GROUP COMPANY</p>

          <h1 className="platform-title">
            Shenye Foundry
          </h1>

          <p className="platform-description">
            Foundry company supporting both Qinye Heavy Industry and Shenye
            Heavy Equipment with casting capability for heavy industry,
            mining equipment and wear-resistant components.
          </p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Company Information</h3>
            <p><strong>Location:</strong> China</p>
            <p><strong>Type:</strong> Foundry</p>
            <p><strong>Role:</strong> Casting support for group factories</p>
            <p><strong>Sector:</strong> Steel Castings & Heavy Components</p>
          </div>

          <div className="platform-card">
            <h3>Main Capabilities</h3>
            <p>Steel Castings</p>
            <p>Mining Equipment Castings</p>
            <p>Wear-Resistant Components</p>
            <p>Heavy Industrial Cast Parts</p>
          </div>

          <div className="platform-card">
            <h3>Group Support Role</h3>
            <p>
              Shenye Foundry supports both Qinye and Shenye by providing
              casting capability for internally manufactured equipment and
              selected external requirements.
            </p>
          </div>

          <div className="platform-card">
            <h3>Typical Applications</h3>
            <p>Mining Equipment Parts</p>
            <p>Heavy Machinery Components</p>
            <p>Wear Parts</p>
            <p>Steel Plant Castings</p>
          </div>

          <div className="platform-card">
            <h3>Access Level</h3>
            <p>Premium / Internal</p>
            <p>
              Casting specifications, material grades, inspection capability and
              project references are available according to user permission
              level.
            </p>
          </div>

          <div className="platform-card">
            <h3>Related Group Companies</h3>
            <p>Qinye Heavy Industry</p>
            <p>Shenye Heavy Equipment</p>
            <p>QETC Engineering & Technology</p>
          </div>
        </section>
      </main>
    </>
  );
}
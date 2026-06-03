import Navbar from "../../../components/Navbar";

export default function QinyePage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">GROUP COMPANY</p>

          <h1 className="platform-title">
            Qinye Heavy Industry
          </h1>

          <p className="platform-description">
            Qinhuangdao-based heavy industry manufacturing company focused on
            steel plant equipment, blast furnace top charging systems,
            industrial valves, torpedo cars and large fabricated components.
          </p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Company Information</h3>
            <p><strong>Location:</strong> Qinhuangdao, China</p>
            <p><strong>Type:</strong> Manufacturing Factory</p>
            <p><strong>Role:</strong> First factory of the group</p>
            <p><strong>Sector:</strong> Steel Plant & Heavy Industry Equipment</p>
          </div>

          <div className="platform-card">
            <h3>Main Capabilities</h3>
            <p>Blast Furnace Top Charging Equipment</p>
            <p>Industrial Valves</p>
            <p>Torpedo Cars</p>
            <p>Heavy Fabricated Structures</p>
            <p>Steel Plant Mechanical Equipment</p>
          </div>

          <div className="platform-card">
            <h3>Manufacturing Scope</h3>
            <p>
              Qinye Heavy Industry manufactures equipment and components within
              its own production capability. For larger complete systems, QETC
              may coordinate with external partners while Qinye manufactures
              selected parts or assemblies.
            </p>
          </div>

          <div className="platform-card">
            <h3>Typical Applications</h3>
            <p>Blast Furnace Area</p>
            <p>Steelmaking Logistics</p>
            <p>Material Handling Components</p>
            <p>Large Steel Plant Spare Parts</p>
          </div>

          <div className="platform-card">
            <h3>Access Level</h3>
            <p>Premium / Internal</p>
            <p>
              Detailed technical capability, references, drawings and project
              history are available according to user permission level.
            </p>
          </div>

          <div className="platform-card">
            <h3>Related Group Companies</h3>
            <p>QETC Engineering & Technology</p>
            <p>Shenye Heavy Equipment</p>
            <p>Shenye Foundry</p>
          </div>
        </section>
      </main>
    </>
  );
}
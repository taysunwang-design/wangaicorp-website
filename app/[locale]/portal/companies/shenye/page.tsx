import Navbar from "../../../components/Navbar";

export default function ShenyePage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">GROUP COMPANY</p>

          <h1 className="platform-title">
            Shenye Heavy Equipment
          </h1>

          <p className="platform-description">
            Shenyang-based large-scale heavy equipment manufacturing company
            focused on mining equipment, grinding mills, rotary kilns and large
            industrial machinery.
          </p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Company Information</h3>
            <p><strong>Location:</strong> Shenyang, China</p>
            <p><strong>Type:</strong> Manufacturing Factory</p>
            <p><strong>Role:</strong> Larger factory of the group</p>
            <p><strong>Sector:</strong> Mining & Heavy Machinery</p>
          </div>

          <div className="platform-card">
            <h3>Main Capabilities</h3>
            <p>Mining Equipment</p>
            <p>Grinding Mills</p>
            <p>Rotary Kilns</p>
            <p>Large Heavy Machinery</p>
            <p>Large-Scale Machining</p>
          </div>

          <div className="platform-card">
            <h3>Manufacturing Focus</h3>
            <p>
              Shenye focuses on larger mining and heavy industrial equipment,
              supported by machining capability and foundry cooperation within
              the group.
            </p>
          </div>

          <div className="platform-card">
            <h3>Typical Applications</h3>
            <p>Mining Plants</p>
            <p>Ore Processing</p>
            <p>Cement / Industrial Kiln Systems</p>
            <p>Large Rotating Equipment</p>
          </div>

          <div className="platform-card">
            <h3>Access Level</h3>
            <p>Premium / Internal</p>
            <p>
              Detailed product specifications, machining capability and project
              references are available according to user permission level.
            </p>
          </div>

          <div className="platform-card">
            <h3>Related Group Companies</h3>
            <p>QETC Engineering & Technology</p>
            <p>Qinye Heavy Industry</p>
            <p>Shenye Foundry</p>
          </div>
        </section>
      </main>
    </>
  );
}
import Navbar from "../../../components/Navbar";

export default function QinyePage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">COMPANY PROFILE</p>

          <h1 className="platform-title">
            Qinhuangdao Qinye Heavy Industry Co., Ltd.
          </h1>

          <p className="platform-description">
            Strategic heavy industry manufacturing partner focused on blast
            furnace equipment, steel plant machinery, bulk material handling
            systems and large-scale industrial fabrication.
          </p>
        </section>

        <section className="platform-grid">

          <div className="platform-card">
            <h3>Company Information</h3>

            <p><strong>Country:</strong> China</p>
            <p><strong>City:</strong> Qinhuangdao</p>
            <p><strong>Founded:</strong> 2008</p>
            <p><strong>Employees:</strong> 900+</p>
            <p><strong>Industry:</strong> Heavy Industry Equipment</p>
          </div>

          <div className="platform-card">
            <h3>Main Products</h3>

            <p>Blast Furnace Equipment</p>
            <p>Bell-less Top Systems</p>
            <p>Charging Equipment</p>
            <p>Stacker Reclaimers</p>
            <p>Steel Plant Machinery</p>
          </div>

          <div className="platform-card">
            <h3>Key Contacts</h3>

            <p>Lan Dawei</p>
            <p>Zhou Hesong</p>
            <p>Alice Zhang</p>
            <p>Victor Zheng</p>
          </div>

          <div className="platform-card">
            <h3>Resources</h3>

            <p>Company Profile</p>
            <p>Product Catalog</p>
            <p>Videos</p>
            <p>Presentations</p>
          </div>

          <div className="platform-card">
            <h3>Projects</h3>

            <p>thyssenkrupp Steel Europe</p>
            <p>Erdemir</p>
            <p>İsdemir</p>
            <p>Kardemir</p>
          </div>

          <div className="platform-card">
            <h3>Internal Notes</h3>

            <p>
              Internal project history, visit reports and strategic notes will
              be available according to user permissions.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
export default function Home() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo-text">
          WANG CORP.
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/platform">Platform</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <main className="home-page">
        <section className="home-hero">
          <img src="/logo11.png" alt="WANG CORP." className="home-logo" />

          <h1 className="home-title">
            International Industrial
            <br />
            Coordination & Infrastructure
          </h1>

          <p className="home-description">
            Building transparent and sustainable industrial cooperation between
            global markets through consulting, trade coordination, and
            intelligent digital infrastructure.
          </p>

        </section>

        <section id="about" className="content-section">
          <div className="section-inner">
            <p className="section-label">ABOUT</p>

            <h2 className="section-title">
              Global industrial coordination with modern digital infrastructure.
            </h2>

            <p className="section-text">
              WANG CORP. operates as an international coordination and
              infrastructure company focused on heavy industry, engineering
              partnerships, strategic sourcing, industrial digitalization, and
              AI-assisted communication.
            </p>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-inner">
            <p className="section-label">SERVICES</p>

            <h2 className="section-title">
              Industrial systems built for international cooperation.
            </h2>

            <div className="card-grid">
              <div className="info-card">
                <h3>Industrial Coordination</h3>
                <p>
                  International supplier coordination, RFQ management, project
                  tracking, and engineering communication support.
                </p>
              </div>

              <div className="info-card">
                <h3>Strategic Sourcing</h3>
                <p>
                  Global industrial procurement and manufacturing partnerships
                  focused on steel, mining, and heavy industry sectors.
                </p>
              </div>

              <div className="info-card">
                <h3>Digital Infrastructure</h3>
                <p>
                  Enterprise-grade industrial platforms integrating AI,
                  multilingual communication, and operational coordination.
                </p>
              </div>

              <div className="info-card">
                <h3>AI-Assisted Communication</h3>
                <p>
                  Real-time multilingual industrial communication and
                  coordination systems for global business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="section-inner">
            <p className="section-label">CONTACT</p>

            <h2 className="section-title">
              Let’s build the next generation of industrial infrastructure.
            </h2>

            <div className="contact-box">
              <p>Email setup is currently in progress.</p>
              <p>Official WANG CORP. contact addresses will be added soon.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
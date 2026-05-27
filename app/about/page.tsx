export default function AboutPage() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo-text">
          WANG CORP.
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/platform">Platform</a>
          <a href="/contact/">Contact</a>
        </div>
      </nav>

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">
            ABOUT WANG CORP.
          </p>

          <h1 className="platform-title">
            Global industrial coordination with modern digital infrastructure.
          </h1>

          <p className="platform-description">
            WANG CORP. operates as an international coordination and
            infrastructure company focused on heavy industry,
            engineering partnerships, strategic sourcing,
            industrial digitalization, and AI-assisted communication.
          </p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>Transparent Coordination</h3>

            <p>
              We believe trust is built through operational transparency,
              realistic expectations, and long-term cooperation
              rather than short-term transactions.
            </p>
          </div>

          <div className="platform-card">
            <h3>Bridging Global Markets</h3>

            <p>
              WANG CORP. works as a bridge between international industrial
              ecosystems, supporting both global companies entering China
              and Chinese companies expanding abroad.
            </p>
          </div>

          <div className="platform-card">
            <h3>Lean & Efficient Operations</h3>

            <p>
              We prioritize efficiency, agility, and practical execution
              over unnecessary corporate overhead
              and inflated operational structures.
            </p>
          </div>

          <div className="platform-card">
            <h3>Digital Industrial Infrastructure</h3>

            <p>
              Alongside industrial consulting and coordination,
              WANG CORP. is developing intelligent digital platforms
              designed to simplify global industrial communication
              and collaboration.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
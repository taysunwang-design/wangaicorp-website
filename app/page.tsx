import Image from "next/image";

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

      <main>
        <section className="hero">
          <Image
            src="/logo11.png"
            alt="WANG CORP Logo"
            width={760}
            height={760}
            priority
            className="hero-logo"
          />

          <h1 className="hero-title">
            International Industrial
            <br />
            Coordination & Infrastructure
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            Building transparent and sustainable industrial cooperation between
            global markets through consulting, trade coordination, and
            intelligent digital infrastructure.
          </p>
        </section>

        <section id="about" className="content-section">
          <div className="section-inner">
            <p className="section-label">BUILT ON TRANSPARENCY</p>

            <h2 className="section-title">
              A Different Approach To International Industry
            </h2>

            <p className="section-text">
              WANG CORP. was founded on the belief that sustainable industrial
              business can only exist when every side benefits equally —
              suppliers, clients, and coordinators alike.
            </p>

            <div className="card-grid">
              <div className="info-card">
                <h3>Transparent Coordination</h3>

                <p>
                  We believe trust is built through operational transparency,
                  realistic expectations, and long-term cooperation rather than
                  short-term transactions.
                </p>
              </div>

              <div className="info-card">
                <h3>Bridging Global Markets</h3>

                <p>
                  WANG CORP. works as a bridge between international industrial
                  ecosystems, supporting both global companies entering China
                  and Chinese companies expanding abroad.
                </p>
              </div>

              <div className="info-card">
                <h3>Lean & Efficient Operations</h3>

                <p>
                  We prioritize efficiency, agility, and practical execution
                  over unnecessary corporate overhead and inflated operational
                  structures.
                </p>
              </div>

              <div className="info-card">
                <h3>Digital Industrial Infrastructure</h3>

                <p>
                  Alongside industrial consulting and coordination, WANG CORP.
                  is developing intelligent digital platforms designed to
                  simplify global industrial communication and collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="content-section">
          <div className="section-inner">
            <p className="section-label">SERVICES</p>

            <h2 className="section-title">
              Human Coordination Supported By Digital Infrastructure
            </h2>

            <p className="section-text">
              WANG CORP. combines trade coordination, procurement support,
              market development, industrial consulting, and digital platform
              thinking under one lean international structure.
            </p>

            <div className="card-grid">
              <div className="info-card">
                <h3>Industrial Coordination</h3>

                <p>
                  Cross-border communication, project follow-up, supplier-user
                  alignment, and practical industrial workflow support.
                </p>
              </div>

              <div className="info-card">
                <h3>Trade & Procurement</h3>

                <p>
                  Sourcing coordination, supplier evaluation, quotation support,
                  purchasing assistance, and international procurement
                  communication.
                </p>
              </div>

              <div className="info-card">
                <h3>Market Development</h3>

                <p>
                  Supporting companies entering new markets through localization,
                  representation, business development, and strategic
                  communication.
                </p>
              </div>

              <div className="info-card">
                <h3>Digital Platform</h3>

                <p>
                  AI-assisted communication, multilingual workflows, industrial
                  data organization, and future procurement infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
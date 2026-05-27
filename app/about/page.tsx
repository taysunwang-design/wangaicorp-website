export default function AboutPage() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo-text">WANG CORP.</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/platform">Platform</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">ABOUT WANG CORP.</p>

          <h1 className="platform-title">
            Global industrial coordination with modern digital infrastructure.
          </h1>

          <p className="platform-description">
            WANG CORP. operates as an international coordination and
            infrastructure company focused on heavy industry, engineering
            partnerships, strategic sourcing, industrial digitalization, and
            AI-assisted communication.
          </p>
        </section>
      </main>
    </>
  );
}
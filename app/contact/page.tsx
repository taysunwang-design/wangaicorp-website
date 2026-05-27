export default function ContactPage() {
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
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">
            CONTACT
          </p>

          <h1 className="platform-title">
            Contact Infrastructure Under Development
          </h1>

          <p className="platform-description">
            Official WANG CORP. communication channels,
            enterprise email infrastructure,
            and client access systems are currently being prepared.
          </p>

          <div className="platform-status">
            <span className="status-dot"></span>
            Contact system in development
          </div>

          <div
            className="home-actions"
            style={{ marginTop: "40px" }}
          >
            <a
              href="/"
              className="primary-button"
            >
              Return Home
            </a>

            <a
              href="/platform"
              className="secondary-button"
            >
              View Platform
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
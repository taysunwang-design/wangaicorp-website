import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">CONTACT</p>

          <h1 className="platform-title">
            Contact Infrastructure Under Development
          </h1>

          <p className="platform-description">
            Official WANG CORP. communication channels, enterprise email
            infrastructure, and client access systems are currently being
            prepared.
          </p>

          <div className="platform-status">
            <span className="status-dot"></span>
            Contact system in development
          </div>

          <div className="home-actions" style={{ marginTop: "40px" }}>
            <a href="/en" className="primary-button">
              Return Home
            </a>

            <a href="/en/platform" className="secondary-button">
              View Platform
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
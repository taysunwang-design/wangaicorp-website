import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">CONTACT</p>

          <h1 className="platform-title">Get In Touch</h1>

          <p className="platform-description">
            For inquiries regarding sourcing, industrial equipment, project
            coordination, trading, and international business cooperation,
            please contact WANG CORP. by email.
          </p>

          <div className="platform-status">
            <span></span>
            Corporate email system active
          </div>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>General Inquiry</h3>
            <p>
              For general business inquiries, project discussions, supplier
              introductions, and partnership opportunities:
            </p>
            <p>
              <strong>Email:</strong> info@wangaicorp.com
            </p>
          </div>

          <div className="platform-card">
            <h3>Website</h3>
            <p>
              <strong>Web:</strong> www.wangaicorp.com
            </p>
          </div>

          <div className="platform-card">
            <h3>Response Time</h3>
            <p>
              We aim to respond to business inquiries within 1 to 2 business
              days.
            </p>
          </div>

          <div className="platform-card">
            <h3>Business Focus</h3>
            <p>Industrial Coordination</p>
            <p>Strategic Sourcing</p>
            <p>Trading & Consulting</p>
            <p>Project Communication</p>
            <p>International Cooperation</p>
          </div>
        </section>
      </main>
    </>
  );
}
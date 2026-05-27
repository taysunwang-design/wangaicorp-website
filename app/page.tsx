export default function Home() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo-text">WANG CORP.</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/platform">Platform</a>
          <a href="/contact/">Contact</a>
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
      </main>
    </>
  );
}
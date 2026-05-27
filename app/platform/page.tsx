export default function PlatformPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#f5f5f5",
        padding: "120px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#6e6e6e",
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          WANG PLATFORM
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: 1,
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          Industrial Coordination Infrastructure
        </h1>

        <p
          style={{
            maxWidth: "800px",
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#cfcfcf",
            marginBottom: "80px",
          }}
        >
          Wang Platform is a next-generation industrial coordination system
          designed for international heavy industry communication, supplier
          management, AI-assisted translation, RFQ coordination, and project
          collaboration.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "AI Translation Layer",
            "Industrial CRM",
            "RFQ Management",
            "Supplier Coordination",
            "Secure Client Portal",
            "Project Communication",
            "Document Center",
            "Global Collaboration",
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "30px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#9d9d9d",
                  lineHeight: 1.6,
                }}
              >
                Enterprise-grade infrastructure designed for modern industrial
                operations and international coordination.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
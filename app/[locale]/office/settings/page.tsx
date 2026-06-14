import OfficeLayout from "../components/OfficeLayout";

const settingsSections = [
  {
    title: "Security",
    description:
      "Login protection, SMS verification, personnel access, and session rules.",
    items: [
      "Two-step login enabled",
      "Personnel-only office access",
      "SMS verification planned for production",
      "Secure server-side sessions planned"
    ]
  },
  {
    title: "Mail Integration",
    description:
      "Zoho Mail connection and secure internal mail handling.",
    items: [
      "Zoho Mail shortcut active",
      "Zoho API integration planned",
      "Mail AI assistant planned",
      "Server-side mail access only"
    ]
  },
  {
    title: "AI Assistant",
    description:
      "Secure AI tools for emails, translation, summaries, RFQs, and follow-ups.",
    items: [
      "AI workdesk interface created",
      "Secure API route required",
      "No frontend API keys",
      "Mail, tasks, reminders, and documents connection planned"
    ]
  },
  {
    title: "Office Data",
    description:
      "Virtual office records for projects, RFQs, contacts, documents, tasks, and reminders.",
    items: [
      "Local prototype data active",
      "Database integration planned",
      "Role-based access planned",
      "Audit history planned"
    ]
  }
];

export default function OfficeSettingsPage() {
  return (
    <OfficeLayout title="Settings" label="Virtual Office Control Center">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Office Settings</h2>
            <p className="office-panel-subtitle">
              Control center for Wang Corp virtual office security, mail, AI
              tools, personnel access, data management, and future system
              integrations.
            </p>
          </div>

          <button>Save Settings</button>
        </div>

        <div className="office-settings-grid">
          {settingsSections.map((section) => (
            <div className="office-settings-card" key={section.title}>
              <div className="office-settings-card-header">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>

              <div className="office-settings-list">
                {section.items.map((item) => (
                  <div className="office-settings-item" key={item}>
                    <span></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Production Security Checklist</h2>
          </div>

          <div className="office-empty-state">
            Before real company use, the prototype login must be replaced with
            hashed passwords, database-backed users, secure HTTP-only cookies,
            real SMS verification, rate limiting, server-side route protection,
            and proper access logs.
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Integration Priorities</h2>
          </div>

          <div className="office-actions">
            <button>Zoho Mail</button>
            <button>AI API</button>
            <button>Database</button>
            <button>SMS Provider</button>
            <button>File Storage</button>
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
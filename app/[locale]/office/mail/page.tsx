import OfficeLayout from "../components/OfficeLayout";

const mockEmails = [
  {
    from: "Potential Client",
    subject: "Industrial Equipment Sourcing Inquiry",
    preview:
      "We would like to discuss possible sourcing support for heavy industrial equipment.",
    status: "Needs reply"
  },
  {
    from: "Supplier Partner",
    subject: "Company Introduction and Product Range",
    preview:
      "Please find our company profile and main product categories for your review.",
    status: "Review"
  },
  {
    from: "WANG CORP. Office",
    subject: "Internal Mail Center Prototype",
    preview:
      "This is a mock email preview. Real Zoho Mail integration will be added securely later.",
    status: "System"
  }
];

export default function OfficeMailPage() {
  return (
    <OfficeLayout title="Mail Center" label="Office Mail">
      <section className="office-content-grid">
        <div className="office-panel office-wide-panel">
          <div className="office-panel-header">
            <h2>Inbox Preview</h2>
            <a
              href="https://mail.zoho.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Zoho Mail
            </a>
          </div>

          <div className="office-mail-list">
            {mockEmails.map((email) => (
              <div className="office-mail-item" key={email.subject}>
                <div>
                  <strong>{email.subject}</strong>
                  <p>{email.from}</p>
                  <span>{email.preview}</span>
                </div>

                <small>{email.status}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>AI Mail Tools</h2>
          </div>

          <div className="office-actions">
            <button>Summarize Email</button>
            <button>Draft Reply</button>
            <button>Translate</button>
            <button>Create Follow-up Task</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Security Note</h2>
          </div>

          <div className="office-empty-state">
            This page currently uses mock emails. Real Zoho Mail integration
            will be added through secure server-side API routes only.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
import OfficeLayout from "../components/OfficeLayout";

const contacts = [
  {
    name: "Client Contact",
    company: "Potential Industrial Client",
    type: "Client",
    country: "Turkey",
    email: "client@example.com",
    phone: "+90 --- --- ----",
    status: "Lead",
    note: "Potential sourcing or project coordination opportunity."
  },
  {
    name: "Supplier Contact",
    company: "Chinese Industrial Supplier",
    type: "Supplier",
    country: "China",
    email: "supplier@example.com",
    phone: "+86 --- ---- ----",
    status: "Review",
    note: "Supplier profile and product range should be reviewed."
  },
  {
    name: "Internal Contact",
    company: "WANG CORP.",
    type: "Internal",
    country: "Global",
    email: "info@wangaicorp.com",
    phone: "-",
    status: "Active",
    note: "General internal office contact record."
  }
];

export default function OfficeContactsPage() {
  return (
    <OfficeLayout title="Contacts" label="Virtual Office Network">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Contact Database</h2>
            <p className="office-panel-subtitle">
              Central contact records for clients, suppliers, partners, and
              internal communication. Later, each contact can be linked to mail,
              chat rooms, projects, RFQs, tasks, and reminders.
            </p>
          </div>

          <button>Add Contact</button>
        </div>

        <div className="office-contact-toolbar">
          <input placeholder="Search contacts, companies, countries, or type..." />

          <select defaultValue="all">
            <option value="all">All Types</option>
            <option value="client">Clients</option>
            <option value="supplier">Suppliers</option>
            <option value="partner">Partners</option>
            <option value="internal">Internal</option>
          </select>
        </div>

        <div className="office-contact-list">
          {contacts.map((contact) => (
            <div className="office-contact-card" key={contact.name}>
              <div className="office-contact-main">
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.company}</p>
                </div>

                <span>{contact.type}</span>
              </div>

              <div className="office-contact-details">
                <p>
                  <strong>Country:</strong> {contact.country}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p>
                  <strong>Status:</strong> {contact.status}
                </p>
              </div>

              <div className="office-contact-note">{contact.note}</div>

              <div className="office-personnel-actions">
                <button>Open Chat</button>
                <button>Create Task</button>
                <button>Add Reminder</button>
                <button>Link RFQ</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Contact Types</h2>
          </div>

          <div className="office-actions">
            <button>Client</button>
            <button>Supplier</button>
            <button>Partner</button>
            <button>Internal</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future Contact Tools</h2>
          </div>

          <div className="office-empty-state">
            Later this module should support business card scanning, contact
            ownership, company hierarchy, chat linking, mail history, RFQ
            records, and project relationship mapping.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
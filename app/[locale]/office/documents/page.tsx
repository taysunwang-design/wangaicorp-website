import OfficeLayout from "../components/OfficeLayout";

const documents = [
  {
    title: "Supplier Company Profile",
    type: "Supplier Document",
    relatedTo: "Supplier Introduction Review",
    owner: "Alice Zhang",
    status: "Review",
    format: "PDF",
    note: "Supplier profile and product range for internal evaluation."
  },
  {
    title: "Industrial Equipment Inquiry Notes",
    type: "RFQ Document",
    relatedTo: "RFQ-WC-2026-001",
    owner: "Taysun Wang",
    status: "Draft",
    format: "DOCX",
    note: "Initial notes for client requirements and sourcing direction."
  },
  {
    title: "Wang Corp Office Structure",
    type: "Internal Document",
    relatedTo: "Virtual Office Development",
    owner: "Taysun Wang",
    status: "Active",
    format: "Internal",
    note: "Internal planning document for the virtual office system."
  },
  {
    title: "Trading Opportunity File",
    type: "Trading Document",
    relatedTo: "Trading Deal Evaluation",
    owner: "Taysun Wang",
    status: "Pending",
    format: "XLSX",
    note: "Example document record for commercial trading cases."
  }
];

export default function OfficeDocumentsPage() {
  return (
    <OfficeLayout title="Documents" label="Virtual Office File Center">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Document Center</h2>
            <p className="office-panel-subtitle">
              Central file records for projects, RFQs, suppliers, clients,
              quotations, contracts, meeting notes, presentations, and internal
              company documents.
            </p>
          </div>

          <button>Upload Document</button>
        </div>

        <div className="office-document-toolbar">
          <input placeholder="Search documents, projects, RFQs, owners, or file types..." />

          <select defaultValue="all">
            <option value="all">All Types</option>
            <option value="project">Project Document</option>
            <option value="rfq">RFQ Document</option>
            <option value="supplier">Supplier Document</option>
            <option value="client">Client Document</option>
            <option value="trading">Trading Document</option>
            <option value="internal">Internal Document</option>
          </select>

          <select defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="active">Active</option>
            <option value="approved">Approved</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="office-document-list">
          {documents.map((doc) => (
            <div className="office-document-card" key={doc.title}>
              <div className="office-document-icon">{doc.format}</div>

              <div className="office-document-content">
                <div className="office-document-header">
                  <div>
                    <h3>{doc.title}</h3>
                    <p>{doc.note}</p>
                  </div>

                  <div className="office-document-badges">
                    <span>{doc.type}</span>
                    <span>{doc.status}</span>
                  </div>
                </div>

                <div className="office-document-info">
                  <p>
                    <strong>Related To:</strong> {doc.relatedTo}
                  </p>
                  <p>
                    <strong>Owner:</strong> {doc.owner}
                  </p>
                  <p>
                    <strong>Format:</strong> {doc.format}
                  </p>
                </div>

                <div className="office-personnel-actions">
                  <button>Open</button>
                  <button>Link Project</button>
                  <button>Link RFQ</button>
                  <button>Create Task</button>
                  <button>Add Reminder</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Document Types</h2>
          </div>

          <div className="office-actions">
            <button>Project</button>
            <button>RFQ</button>
            <button>Supplier</button>
            <button>Client</button>
            <button>Trading</button>
            <button>Internal</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future Document Tools</h2>
          </div>

          <div className="office-empty-state">
            Later this module should support secure uploads, folders, file
            previews, document permissions, version history, AI summaries,
            quotation extraction, drawing notes, and automatic linking to
            projects and RFQs.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
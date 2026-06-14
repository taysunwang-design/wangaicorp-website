import OfficeLayout from "../components/OfficeLayout";

const rfqs = [
  {
    number: "RFQ-WC-2026-001",
    title: "Industrial Equipment Sourcing Inquiry",
    type: "Sourcing Request",
    client: "Potential Industrial Client",
    project: "Industrial Equipment Sourcing",
    product: "Heavy industrial equipment",
    quantity: "To be confirmed",
    deadline: "Open",
    owner: "Taysun Wang",
    status: "Evaluation",
    supplierStatus: "Supplier search",
    clarificationStatus: "Pending client details",
    note: "Initial RFQ record for sourcing and supplier coordination."
  },
  {
    number: "RFQ-WC-2026-002",
    title: "Supplier Product Range Review",
    type: "Supplier Development",
    client: "WANG CORP. Internal",
    project: "Supplier Introduction Review",
    product: "Supplier product portfolio",
    quantity: "N/A",
    deadline: "This week",
    owner: "Alice Zhang",
    status: "Review",
    supplierStatus: "Profile received",
    clarificationStatus: "Technical range under review",
    note: "Review supplier capability before adding to Wang Corp supplier network."
  },
  {
    number: "RFQ-WC-2026-003",
    title: "Trading Deal Evaluation",
    type: "Trading Deal",
    client: "Potential Buyer",
    project: "Trading Opportunity",
    product: "Commercial goods / industrial supply",
    quantity: "Pending inquiry",
    deadline: "Open",
    owner: "Taysun Wang",
    status: "New",
    supplierStatus: "Not assigned",
    clarificationStatus: "Commercial details required",
    note: "Example record showing that RFQs can also support trading business."
  }
];

export default function OfficeRFQsPage() {
  return (
    <OfficeLayout title="RFQs" label="Virtual Office Inquiry Center">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>RFQ Database</h2>
            <p className="office-panel-subtitle">
              RFQs track inquiries, quotation requests, sourcing cases, trading
              deals, supplier quotations, technical clarifications, and related
              project actions.
            </p>
          </div>

          <button>Add RFQ</button>
        </div>

        <div className="office-rfq-toolbar">
          <input placeholder="Search RFQ number, client, project, product, owner, or status..." />

          <select defaultValue="all">
            <option value="all">All Types</option>
            <option value="sourcing">Sourcing Request</option>
            <option value="trading">Trading Deal</option>
            <option value="industrial">Industrial Project</option>
            <option value="supplier">Supplier Development</option>
          </select>

          <select defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="evaluation">Evaluation</option>
            <option value="review">Review</option>
            <option value="quoted">Quoted</option>
            <option value="waiting">Waiting</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="office-rfq-list">
          {rfqs.map((rfq) => (
            <div className="office-rfq-card" key={rfq.number}>
              <div className="office-rfq-card-header">
                <div>
                  <span className="office-rfq-number">{rfq.number}</span>
                  <h3>{rfq.title}</h3>
                  <p>{rfq.note}</p>
                </div>

                <div className="office-rfq-badges">
                  <span>{rfq.type}</span>
                  <span>{rfq.status}</span>
                </div>
              </div>

              <div className="office-rfq-info-grid">
                <p>
                  <strong>Client:</strong> {rfq.client}
                </p>
                <p>
                  <strong>Project:</strong> {rfq.project}
                </p>
                <p>
                  <strong>Product:</strong> {rfq.product}
                </p>
                <p>
                  <strong>Quantity:</strong> {rfq.quantity}
                </p>
                <p>
                  <strong>Deadline:</strong> {rfq.deadline}
                </p>
                <p>
                  <strong>Owner:</strong> {rfq.owner}
                </p>
              </div>

              <div className="office-rfq-status-grid">
                <div>
                  <strong>Supplier Status</strong>
                  <p>{rfq.supplierStatus}</p>
                </div>

                <div>
                  <strong>Clarification Status</strong>
                  <p>{rfq.clarificationStatus}</p>
                </div>
              </div>

              <div className="office-personnel-actions">
                <button>Open RFQ</button>
                <button>Open Project</button>
                <button>Open Chat</button>
                <button>Create Task</button>
                <button>Add Reminder</button>
                <button>Upload Document</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>RFQ Types</h2>
          </div>

          <div className="office-actions">
            <button>Sourcing Request</button>
            <button>Trading Deal</button>
            <button>Industrial Project</button>
            <button>Supplier Development</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future RFQ Tools</h2>
          </div>

          <div className="office-empty-state">
            Later each RFQ should support supplier comparison, quotation files,
            technical clarification history, AI-generated reply drafts, pricing
            notes, deadlines, and approval status.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
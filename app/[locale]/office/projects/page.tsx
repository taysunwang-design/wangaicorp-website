import OfficeLayout from "../components/OfficeLayout";

const projects = [
  {
    title: "Industrial Equipment Sourcing",
    client: "Potential Industrial Client",
    supplier: "Chinese Industrial Supplier",
    owner: "Taysun Wang",
    status: "Evaluation",
    priority: "High",
    country: "Turkey",
    note: "Initial sourcing project record for industrial equipment coordination.",
    linked: {
      rfqs: 1,
      tasks: 2,
      reminders: 1,
      documents: 0,
      chats: 1
    }
  },
  {
    title: "Supplier Introduction Review",
    client: "WANG CORP. Internal",
    supplier: "Supplier Partner",
    owner: "Alice Zhang",
    status: "Waiting",
    priority: "Medium",
    country: "China",
    note: "Review supplier profile, product range, and possible market fit.",
    linked: {
      rfqs: 0,
      tasks: 1,
      reminders: 1,
      documents: 1,
      chats: 1
    }
  },
  {
    title: "Virtual Office Development",
    client: "WANG CORP.",
    supplier: "Internal",
    owner: "Taysun Wang",
    status: "In Progress",
    priority: "High",
    country: "Global",
    note: "Build the internal digital office for personnel, communication, tasks, reminders, and AI assistance.",
    linked: {
      rfqs: 0,
      tasks: 4,
      reminders: 2,
      documents: 0,
      chats: 1
    }
  }
];

export default function OfficeProjectsPage() {
  return (
    <OfficeLayout title="Projects" label="Virtual Office Project Center">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Project Database</h2>
            <p className="office-panel-subtitle">
              Projects connect the full office workflow: clients, suppliers,
              contacts, chats, tasks, reminders, RFQs, documents, and AI notes.
            </p>
          </div>

          <button>Add Project</button>
        </div>

        <div className="office-project-toolbar">
          <input placeholder="Search projects, clients, suppliers, owners, or countries..." />

          <select defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="evaluation">Evaluation</option>
            <option value="progress">In Progress</option>
            <option value="waiting">Waiting</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="office-project-list">
          {projects.map((project) => (
            <div className="office-project-card" key={project.title}>
              <div className="office-project-card-header">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.note}</p>
                </div>

                <span>{project.status}</span>
              </div>

              <div className="office-project-info-grid">
                <p>
                  <strong>Client:</strong> {project.client}
                </p>
                <p>
                  <strong>Supplier:</strong> {project.supplier}
                </p>
                <p>
                  <strong>Owner:</strong> {project.owner}
                </p>
                <p>
                  <strong>Country:</strong> {project.country}
                </p>
                <p>
                  <strong>Priority:</strong> {project.priority}
                </p>
              </div>

              <div className="office-project-linked">
                <span>{project.linked.rfqs} RFQs</span>
                <span>{project.linked.tasks} Tasks</span>
                <span>{project.linked.reminders} Reminders</span>
                <span>{project.linked.documents} Documents</span>
                <span>{project.linked.chats} Chats</span>
              </div>

              <div className="office-personnel-actions">
                <button>Open Project</button>
                <button>Open Chat</button>
                <button>Create Task</button>
                <button>Add Reminder</button>
                <button>Create RFQ</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Project Status</h2>
          </div>

          <div className="office-actions">
            <button>Evaluation</button>
            <button>In Progress</button>
            <button>Waiting</button>
            <button>Completed</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future Project Tools</h2>
          </div>

          <div className="office-empty-state">
            Later each project should have its own dashboard, linked chat,
            project timeline, task board, reminder list, RFQ history, document
            folder, contact list, and AI-generated project summary.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
import OfficeLayout from "./components/OfficeLayout";

export default function OfficePage() {
  return (
    <OfficeLayout title="Wang Corp Office" label="Dashboard">
      <section className="office-summary-grid">
        <div className="office-stat-card">
          <span>Today’s Tasks</span>
          <strong>0</strong>
          <p>No active tasks yet.</p>
        </div>

        <div className="office-stat-card">
          <span>Reminders</span>
          <strong>0</strong>
          <p>No reminders scheduled.</p>
        </div>

        <div className="office-stat-card">
          <span>Mail</span>
          <strong>Zoho</strong>
          <p>Corporate mail shortcut active.</p>
        </div>

        <div className="office-stat-card">
          <span>AI Assistant</span>
          <strong>Ready</strong>
          <p>Draft and translation tools planned.</p>
        </div>
      </section>

      <section className="office-content-grid">
        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="office-actions">
            <a
              href="https://mail.zoho.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Zoho Mail
            </a>
            <button>Draft Email Reply</button>
            <button>Create Task</button>
            <button>Add Reminder</button>
            <button>Create RFQ Note</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Office Status</h2>
          </div>

          <div className="office-profile">
            <p>
              <strong>Mail:</strong> Zoho Mail shortcut active
            </p>
            <p>
              <strong>AI:</strong> Assistant module planned
            </p>
            <p>
              <strong>Tasks:</strong> Local task system planned
            </p>
            <p>
              <strong>Reminders:</strong> Notification system planned
            </p>
          </div>
        </div>

        <div className="office-panel office-wide-panel">
          <div className="office-panel-header">
            <h2>Upcoming Work</h2>
            <button>Add Task</button>
          </div>

          <div className="office-empty-state">
            No tasks yet. Later this area will show quotation deadlines,
            follow-ups, meetings, payment reminders, and project actions.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
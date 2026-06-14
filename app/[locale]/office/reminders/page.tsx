import OfficeLayout from "../components/OfficeLayout";

const reminderGroups = [
  {
    title: "Today",
    description: "Reminders that should be handled today.",
    reminders: [
      {
        title: "Check pending sourcing inquiry",
        type: "Follow-up",
        owner: "Taysun Wang",
        time: "Today",
        note: "Review whether the inquiry needs a reply or internal evaluation."
      }
    ]
  },
  {
    title: "This Week",
    description: "Important reminders for the current week.",
    reminders: [
      {
        title: "Review office system progress",
        type: "Internal",
        owner: "Taysun Wang",
        time: "This week",
        note: "Continue building mail, AI assistant, task board, and personnel modules."
      }
    ]
  },
  {
    title: "Client Follow-ups",
    description: "Customers, suppliers, and project contacts waiting for action.",
    reminders: [
      {
        title: "Follow up supplier profile",
        type: "Supplier",
        owner: "Alice Zhang",
        time: "Pending",
        note: "Check whether the supplier has sent company profile and product range."
      }
    ]
  },
  {
    title: "Important Deadlines",
    description: "Quotations, payments, meetings, and urgent project dates.",
    reminders: [
      {
        title: "Prepare real reminder system",
        type: "System",
        owner: "Taysun Wang",
        time: "Planned",
        note: "Later reminders should support due dates, notifications, and task linking."
      }
    ]
  }
];

export default function OfficeRemindersPage() {
  return (
    <OfficeLayout title="Reminders" label="Virtual Office Memory">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Office Reminder Center</h2>
            <p className="office-panel-subtitle">
              This page keeps track of the things we must not forget: follow-ups,
              quotation deadlines, payment notes, meetings, and internal office
              actions.
            </p>
          </div>

          <button>Add Reminder</button>
        </div>

        <div className="office-reminder-grid">
          {reminderGroups.map((group) => (
            <div className="office-reminder-group" key={group.title}>
              <div className="office-reminder-group-header">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="office-reminder-list">
                {group.reminders.map((reminder) => (
                  <div className="office-reminder-card" key={reminder.title}>
                    <div className="office-reminder-card-top">
                      <strong>{reminder.title}</strong>
                      <span>{reminder.type}</span>
                    </div>

                    <p>{reminder.note}</p>

                    <div className="office-reminder-meta">
                      <small>Owner: {reminder.owner}</small>
                      <small>{reminder.time}</small>
                    </div>
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
            <h2>Reminder Types</h2>
          </div>

          <div className="office-actions">
            <button>Follow-up</button>
            <button>Quotation</button>
            <button>Payment</button>
            <button>Meeting</button>
            <button>Internal</button>
          </div>
        </div>

        <div className="office-panel">
          <div className="office-panel-header">
            <h2>Future Notification Plan</h2>
          </div>

          <div className="office-empty-state">
            Later this module should send reminder notifications by email,
            browser notification, or SMS depending on importance and assigned
            personnel.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
"use client";

import { useEffect, useState } from "react";
import OfficeLayout from "../components/OfficeLayout";

type ReminderStatus = "Today" | "This Week" | "Follow-up" | "Completed";
type ReminderType = "Follow-up" | "Quotation" | "Payment" | "Meeting" | "Internal";
type ReminderPriority = "Low" | "Medium" | "High" | "Urgent" | "Done";

type OfficeReminder = {
  id: string;
  title: string;
  owner: string;
  type: ReminderType;
  priority: ReminderPriority;
  status: ReminderStatus;
  reminderDate: string;
  relatedTo: string;
  note: string;
};

const defaultReminders: OfficeReminder[] = [
  {
    id: "reminder-001",
    title: "Check pending sourcing inquiry",
    owner: "Taysun Wang",
    type: "Follow-up",
    priority: "High",
    status: "Today",
    reminderDate: "Today",
    relatedTo: "Industrial Equipment Sourcing",
    note: "Review whether the inquiry needs a reply or internal evaluation."
  },
  {
    id: "reminder-002",
    title: "Review office system progress",
    owner: "Taysun Wang",
    type: "Internal",
    priority: "Medium",
    status: "This Week",
    reminderDate: "This week",
    relatedTo: "Virtual Office Development",
    note: "Continue building mail, AI assistant, task board, and personnel modules."
  },
  {
    id: "reminder-003",
    title: "Follow up supplier profile",
    owner: "Alice Zhang",
    type: "Follow-up",
    priority: "Medium",
    status: "Follow-up",
    reminderDate: "Pending",
    relatedTo: "Supplier Introduction Review",
    note: "Check whether the supplier has sent company profile and product range."
  }
];

const columns: ReminderStatus[] = [
  "Today",
  "This Week",
  "Follow-up",
  "Completed"
];

export default function OfficeRemindersPage() {
  const [reminders, setReminders] = useState<OfficeReminder[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    owner: "Taysun Wang",
    type: "Follow-up" as ReminderType,
    priority: "Medium" as ReminderPriority,
    status: "Today" as ReminderStatus,
    reminderDate: "",
    relatedTo: "",
    note: ""
  });

  useEffect(() => {
    const savedReminders = localStorage.getItem("wangcorp_reminders");

    if (savedReminders) {
      setReminders(JSON.parse(savedReminders));
    } else {
      setReminders(defaultReminders);
      localStorage.setItem("wangcorp_reminders", JSON.stringify(defaultReminders));
    }
  }, []);

  function saveReminders(nextReminders: OfficeReminder[]) {
    setReminders(nextReminders);
    localStorage.setItem("wangcorp_reminders", JSON.stringify(nextReminders));
  }

  function handleAddReminder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newReminder: OfficeReminder = {
      id: `reminder-${Date.now()}`,
      title: form.title,
      owner: form.owner,
      type: form.type,
      priority: form.priority,
      status: form.status,
      reminderDate: form.reminderDate || "No date",
      relatedTo: form.relatedTo || "General Office",
      note: form.note
    };

    saveReminders([newReminder, ...reminders]);

    setForm({
      title: "",
      owner: "Taysun Wang",
      type: "Follow-up",
      priority: "Medium",
      status: "Today",
      reminderDate: "",
      relatedTo: "",
      note: ""
    });

    setShowForm(false);
  }

  function moveReminder(reminderId: string, status: ReminderStatus) {
    const nextReminders = reminders.map((reminder) =>
      reminder.id === reminderId
        ? {
            ...reminder,
            status,
            priority: status === "Completed" ? "Done" : reminder.priority
          }
        : reminder
    );

    saveReminders(nextReminders);
  }

  function deleteReminder(reminderId: string) {
    const confirmed = window.confirm("Delete this reminder?");

    if (!confirmed) return;

    const nextReminders = reminders.filter(
      (reminder) => reminder.id !== reminderId
    );

    saveReminders(nextReminders);
  }

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

          <button onClick={() => setShowForm((current) => !current)}>
            {showForm ? "Close" : "Add Reminder"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAddReminder} className="office-reminder-form">
            <label>
              Reminder Title
              <input
                value={form.title}
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                placeholder="Example: Follow up quotation request"
                required
              />
            </label>

            <label>
              Owner
              <select
                value={form.owner}
                onChange={(event) =>
                  setForm({ ...form, owner: event.target.value })
                }
              >
                <option value="Taysun Wang">Taysun Wang</option>
                <option value="Isa Wang">Isa Wang</option>
                <option value="Alice Zhang">Alice Zhang</option>
              </select>
            </label>

            <label>
              Type
              <select
                value={form.type}
                onChange={(event) =>
                  setForm({
                    ...form,
                    type: event.target.value as ReminderType
                  })
                }
              >
                <option value="Follow-up">Follow-up</option>
                <option value="Quotation">Quotation</option>
                <option value="Payment">Payment</option>
                <option value="Meeting">Meeting</option>
                <option value="Internal">Internal</option>
              </select>
            </label>

            <label>
              Priority
              <select
                value={form.priority}
                onChange={(event) =>
                  setForm({
                    ...form,
                    priority: event.target.value as ReminderPriority
                  })
                }
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </label>

            <label>
              Status
              <select
                value={form.status}
                onChange={(event) =>
                  setForm({
                    ...form,
                    status: event.target.value as ReminderStatus
                  })
                }
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Completed">Completed</option>
              </select>
            </label>

            <label>
              Reminder Date
              <input
                value={form.reminderDate}
                onChange={(event) =>
                  setForm({ ...form, reminderDate: event.target.value })
                }
                placeholder="Example: Today, Friday, 2026-06-20"
              />
            </label>

            <label className="office-reminder-form-wide">
              Related To
              <input
                value={form.relatedTo}
                onChange={(event) =>
                  setForm({ ...form, relatedTo: event.target.value })
                }
                placeholder="Project, RFQ, client, supplier, or general office"
              />
            </label>

            <label className="office-reminder-form-wide">
              Notes
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm({ ...form, note: event.target.value })
                }
                placeholder="Reminder details..."
                rows={3}
              />
            </label>

            <div className="office-reminder-form-actions">
              <button type="submit">Save Reminder</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="office-reminder-grid">
          {columns.map((column) => {
            const columnReminders = reminders.filter(
              (reminder) => reminder.status === column
            );

            return (
              <div className="office-reminder-group" key={column}>
                <div className="office-reminder-group-header">
                  <h3>{column}</h3>
                  <p>{columnReminders.length} reminder(s)</p>
                </div>

                <div className="office-reminder-list">
                  {columnReminders.map((reminder) => (
                    <div className="office-reminder-card" key={reminder.id}>
                      <div className="office-reminder-card-top">
                        <strong>{reminder.title}</strong>
                        <span>{reminder.type}</span>
                      </div>

                      <p>{reminder.note}</p>

                      <div className="office-reminder-meta">
                        <small>Owner: {reminder.owner}</small>
                        <small>{reminder.reminderDate}</small>
                      </div>

                      <small className="office-reminder-related">
                        Related: {reminder.relatedTo}
                      </small>

                      <div className="office-reminder-card-actions">
                        {column !== "Today" && (
                          <button onClick={() => moveReminder(reminder.id, "Today")}>
                            Today
                          </button>
                        )}

                        {column !== "This Week" && (
                          <button
                            onClick={() => moveReminder(reminder.id, "This Week")}
                          >
                            This Week
                          </button>
                        )}

                        {column !== "Follow-up" && (
                          <button
                            onClick={() => moveReminder(reminder.id, "Follow-up")}
                          >
                            Follow-up
                          </button>
                        )}

                        {column !== "Completed" && (
                          <button
                            onClick={() => moveReminder(reminder.id, "Completed")}
                          >
                            Done
                          </button>
                        )}

                        <button onClick={() => deleteReminder(reminder.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {columnReminders.length === 0 && (
                    <div className="office-empty-state">
                      No reminders in this column.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </OfficeLayout>
  );
}
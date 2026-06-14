"use client";

import { useEffect, useState } from "react";
import OfficeLayout from "../components/OfficeLayout";

type OfficeTaskStatus = "Today" | "This Week" | "Waiting for Reply" | "Completed";
type OfficeTaskPriority = "Low" | "Medium" | "High" | "Urgent" | "Done";

type OfficeTask = {
  id: string;
  title: string;
  owner: string;
  priority: OfficeTaskPriority;
  status: OfficeTaskStatus;
  note: string;
  dueDate: string;
  relatedTo: string;
};

const defaultTasks: OfficeTask[] = [
  {
    id: "task-001",
    title: "Review new sourcing inquiry",
    owner: "Taysun Wang",
    priority: "High",
    status: "Today",
    note: "Check if the inquiry fits Wang Corp sourcing scope.",
    dueDate: "Today",
    relatedTo: "Industrial Equipment Sourcing"
  },
  {
    id: "task-002",
    title: "Prepare internal office structure",
    owner: "Taysun Wang",
    priority: "Medium",
    status: "This Week",
    note: "Build mail, reminders, AI assistant, and personnel tools step by step.",
    dueDate: "This week",
    relatedTo: "Virtual Office Development"
  },
  {
    id: "task-003",
    title: "Supplier introduction follow-up",
    owner: "Alice Zhang",
    priority: "Medium",
    status: "Waiting for Reply",
    note: "Waiting for supplier profile and product list.",
    dueDate: "Pending",
    relatedTo: "Supplier Introduction Review"
  },
  {
    id: "task-004",
    title: "Create personnel office login prototype",
    owner: "Taysun Wang",
    priority: "Done",
    status: "Completed",
    note: "Two-step login prototype completed.",
    dueDate: "Completed",
    relatedTo: "Office Security"
  }
];

const columns: OfficeTaskStatus[] = [
  "Today",
  "This Week",
  "Waiting for Reply",
  "Completed"
];

export default function OfficeTasksPage() {
  const [tasks, setTasks] = useState<OfficeTask[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    owner: "Taysun Wang",
    priority: "Medium" as OfficeTaskPriority,
    status: "Today" as OfficeTaskStatus,
    note: "",
    dueDate: "",
    relatedTo: ""
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem("wangcorp_tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(defaultTasks);
      localStorage.setItem("wangcorp_tasks", JSON.stringify(defaultTasks));
    }
  }, []);

  function saveTasks(nextTasks: OfficeTask[]) {
    setTasks(nextTasks);
    localStorage.setItem("wangcorp_tasks", JSON.stringify(nextTasks));
  }

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: OfficeTask = {
      id: `task-${Date.now()}`,
      title: form.title,
      owner: form.owner,
      priority: form.priority,
      status: form.status,
      note: form.note,
      dueDate: form.dueDate || "No due date",
      relatedTo: form.relatedTo || "General Office"
    };

    saveTasks([newTask, ...tasks]);

    setForm({
      title: "",
      owner: "Taysun Wang",
      priority: "Medium",
      status: "Today",
      note: "",
      dueDate: "",
      relatedTo: ""
    });

    setShowForm(false);
  }

  function moveTask(taskId: string, status: OfficeTaskStatus) {
    const nextTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status,
            priority: status === "Completed" ? "Done" : task.priority
          }
        : task
    );

    saveTasks(nextTasks);
  }

  function deleteTask(taskId: string) {
    const confirmed = window.confirm("Delete this task?");

    if (!confirmed) return;

    const nextTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(nextTasks);
  }

  return (
    <OfficeLayout title="Tasks" label="Virtual Office Work Board">
      <section className="office-panel office-wide-panel">
        <div className="office-panel-header">
          <div>
            <h2>Office Task Board</h2>
            <p className="office-panel-subtitle">
              This board is for daily work, quotations, follow-ups, reminders,
              and internal coordination. Wherever we are, this is the office.
            </p>
          </div>

          <button onClick={() => setShowForm((current) => !current)}>
            {showForm ? "Close" : "Add Task"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleAddTask} className="office-task-form">
            <label>
              Task Title
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
              Priority
              <select
                value={form.priority}
                onChange={(event) =>
                  setForm({
                    ...form,
                    priority: event.target.value as OfficeTaskPriority
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
                    status: event.target.value as OfficeTaskStatus
                  })
                }
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="Waiting for Reply">Waiting for Reply</option>
                <option value="Completed">Completed</option>
              </select>
            </label>

            <label>
              Due Date
              <input
                value={form.dueDate}
                onChange={(event) =>
                  setForm({ ...form, dueDate: event.target.value })
                }
                placeholder="Example: Today, Friday, 2026-06-20"
              />
            </label>

            <label>
              Related To
              <input
                value={form.relatedTo}
                onChange={(event) =>
                  setForm({ ...form, relatedTo: event.target.value })
                }
                placeholder="Project, RFQ, client, supplier, or general office"
              />
            </label>

            <label className="office-task-form-wide">
              Notes
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm({ ...form, note: event.target.value })
                }
                placeholder="Task details..."
                rows={3}
              />
            </label>

            <div className="office-task-form-actions">
              <button type="submit">Save Task</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="office-task-board">
          {columns.map((column) => {
            const columnTasks = tasks.filter((task) => task.status === column);

            return (
              <div className="office-task-column" key={column}>
                <div className="office-task-column-header">
                  <h3>{column}</h3>
                  <p>{columnTasks.length} task(s)</p>
                </div>

                <div className="office-task-list">
                  {columnTasks.map((task) => (
                    <div className="office-task-card" key={task.id}>
                      <div className="office-task-card-header">
                        <strong>{task.title}</strong>
                        <span>{task.priority}</span>
                      </div>

                      <p>{task.note}</p>

                      <small>Owner: {task.owner}</small>
                      <small>Due: {task.dueDate}</small>
                      <small>Related: {task.relatedTo}</small>

                      <div className="office-task-card-actions">
                        {column !== "Today" && (
                          <button onClick={() => moveTask(task.id, "Today")}>
                            Today
                          </button>
                        )}

                        {column !== "This Week" && (
                          <button onClick={() => moveTask(task.id, "This Week")}>
                            This Week
                          </button>
                        )}

                        {column !== "Waiting for Reply" && (
                          <button
                            onClick={() =>
                              moveTask(task.id, "Waiting for Reply")
                            }
                          >
                            Waiting
                          </button>
                        )}

                        {column !== "Completed" && (
                          <button onClick={() => moveTask(task.id, "Completed")}>
                            Done
                          </button>
                        )}

                        <button onClick={() => deleteTask(task.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}

                  {columnTasks.length === 0 && (
                    <div className="office-empty-state">
                      No tasks in this column.
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
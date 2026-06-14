import OfficeLayout from "../components/OfficeLayout";

const taskColumns = [
  {
    title: "Today",
    description: "Work that should be handled today.",
    tasks: [
      {
        title: "Review new sourcing inquiry",
        owner: "Taysun Wang",
        priority: "High",
        note: "Check if the inquiry fits Wang Corp sourcing scope."
      }
    ]
  },
  {
    title: "This Week",
    description: "Important work planned for the current week.",
    tasks: [
      {
        title: "Prepare internal office structure",
        owner: "Taysun Wang",
        priority: "Medium",
        note: "Build mail, reminders, AI assistant, and personnel tools step by step."
      }
    ]
  },
  {
    title: "Waiting for Reply",
    description: "Items waiting for customers, suppliers, or internal feedback.",
    tasks: [
      {
        title: "Supplier introduction follow-up",
        owner: "Alice Zhang",
        priority: "Medium",
        note: "Waiting for supplier profile and product list."
      }
    ]
  },
  {
    title: "Completed",
    description: "Finished tasks and records.",
    tasks: [
      {
        title: "Create personnel office login prototype",
        owner: "Taysun Wang",
        priority: "Done",
        note: "Two-step login prototype completed."
      }
    ]
  }
];

export default function OfficeTasksPage() {
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

          <button>Add Task</button>
        </div>

        <div className="office-task-board">
  {taskColumns.map((column) => (
    <div className="office-task-column" key={column.title}>
      <div className="office-task-column-header">
        <h3>{column.title}</h3>
        <p>{column.description}</p>
      </div>

      <div className="office-task-list">
        {column.tasks.map((task) => (
          <div className="office-task-card" key={task.title}>
            <div className="office-task-card-header">
              <strong>{task.title}</strong>
              <span>{task.priority}</span>
            </div>

            <p>{task.note}</p>

            <small>Owner: {task.owner}</small>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
      </section>
    </OfficeLayout>
  );
}
"use client";

import { useEffect, useState } from "react";
import OfficeLayout from "./components/OfficeLayout";

type OfficeTask = {
  id: string;
  title: string;
  owner: string;
  priority: string;
  status: string;
  note: string;
  dueDate: string;
  relatedTo: string;
};

type OfficeReminder = {
  id: string;
  title: string;
  owner: string;
  type: string;
  priority: string;
  status: string;
  reminderDate: string;
  relatedTo: string;
  note: string;
};

export default function OfficePage() {
  const [todayTaskCount, setTodayTaskCount] = useState(0);
  const [totalTaskCount, setTotalTaskCount] = useState(0);
  const [todayReminderCount, setTodayReminderCount] = useState(0);
  const [totalReminderCount, setTotalReminderCount] = useState(0);

  useEffect(() => {
    const savedTasks = localStorage.getItem("wangcorp_tasks");
    const savedReminders = localStorage.getItem("wangcorp_reminders");

    if (savedTasks) {
      const tasks: OfficeTask[] = JSON.parse(savedTasks);

      const activeTasks = tasks.filter((task) => task.status !== "Completed");
      const todayTasks = tasks.filter((task) => task.status === "Today");

      setTodayTaskCount(todayTasks.length);
      setTotalTaskCount(activeTasks.length);
    }

    if (savedReminders) {
      const reminders: OfficeReminder[] = JSON.parse(savedReminders);

      const activeReminders = reminders.filter(
        (reminder) => reminder.status !== "Completed"
      );

      const todayReminders = reminders.filter(
        (reminder) => reminder.status === "Today"
      );

      setTodayReminderCount(todayReminders.length);
      setTotalReminderCount(activeReminders.length);
    }
  }, []);

  return (
    <OfficeLayout title="Wang Corp Office" label="Dashboard">
      <section className="office-summary-grid">
        <div className="office-stat-card">
          <span>Today’s Tasks</span>
          <strong>{todayTaskCount}</strong>
          <p>
            {todayTaskCount === 0
              ? "No active tasks for today."
              : "Tasks waiting for today."}
          </p>
        </div>

        <div className="office-stat-card">
          <span>Total Active Tasks</span>
          <strong>{totalTaskCount}</strong>
          <p>Open work items across the office.</p>
        </div>

        <div className="office-stat-card">
          <span>Today’s Reminders</span>
          <strong>{todayReminderCount}</strong>
          <p>
            {todayReminderCount === 0
              ? "No reminders scheduled for today."
              : "Reminders waiting for today."}
          </p>
        </div>

        <div className="office-stat-card">
          <span>Total Active Reminders</span>
          <strong>{totalReminderCount}</strong>
          <p>Open reminders across the office.</p>
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
              <strong>Tasks:</strong> Local task system active
            </p>
            <p>
              <strong>Reminders:</strong> Local reminder system active
            </p>
          </div>
        </div>

        <div className="office-panel office-wide-panel">
          <div className="office-panel-header">
            <h2>Upcoming Work</h2>
            <button>Add Task</button>
          </div>

          <div className="office-empty-state">
            The dashboard now reads saved tasks and reminders from localStorage.
            Next, quick action buttons can be connected to Tasks, Reminders, AI,
            and RFQ tools.
          </div>
        </div>
      </section>
    </OfficeLayout>
  );
}
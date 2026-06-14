"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import type { Personnel } from "../../lib/personnel";

export default function OfficePage() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";

  const [user, setUser] = useState<Personnel | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("wangcorp_user");

    if (!savedUser) {
      router.push(`/${locale}/login`);
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [router, locale]);

  function handleLogout() {
    localStorage.removeItem("wangcorp_user");
    router.push(`/${locale}/login`);
  }

  if (!user) {
    return null;
  }

  return (
    <main className="office-page">
      <aside className="office-sidebar">
        <div className="office-brand">
          <div className="office-logo">WANG CORP.</div>
          <div className="office-subtitle">Internal Office</div>
        </div>

        <nav className="office-nav">
          <button className="office-nav-active">Dashboard</button>
          <button>Mail Center</button>
          <button>AI Assistant</button>
          <button>Tasks</button>
          <button>Reminders</button>
          <button>Personnel</button>
          <button>Contacts</button>
          <button>Projects</button>
          <button>RFQs</button>
          <button>Documents</button>
          <button>Settings</button>
        </nav>

        <div className="office-user-box">
          <strong>{user.name}</strong>
          <span>{user.role}</span>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <section className="office-main">
        <header className="office-header">
          <div>
            <p className="office-label">Dashboard</p>
            <h1>Wang Corp Office</h1>
          </div>

          <div className="office-header-user">
            <span>{user.name}</span>
            <small>{user.email}</small>
          </div>
        </header>

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
              <h2>Personnel Profile</h2>
            </div>

            <div className="office-profile">
              <p>
                <strong>Name:</strong> {user.name} / {user.chineseName}
              </p>
              <p>
                <strong>Role:</strong> {user.role} / {user.roleZh}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              {user.phones.map((phone) => (
                <p key={phone.number}>
                  <strong>{phone.label}:</strong> {phone.number}
                </p>
              ))}

              <p>
                <strong>Access:</strong> {user.accessLevel}
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
      </section>
    </main>
  );
}
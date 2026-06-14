"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import type { Personnel } from "../../../lib/personnel";

type OfficeLayoutProps = {
  children: React.ReactNode;
  title: string;
  label?: string;
};

const officeLinks = [
  { label: "Dashboard", path: "/office" },
  { label: "Mail Center", path: "/office/mail" },
  { label: "Office Chat", path: "/office/chat" },
  { label: "AI Assistant", path: "/office/ai" },
  { label: "Tasks", path: "/office/tasks" },
  { label: "Reminders", path: "/office/reminders" },
  { label: "Personnel", path: "/office/personnel" },
  { label: "Contacts", path: "/office/contacts" },
  { label: "Projects", path: "/office/projects" },
  { label: "RFQs", path: "/office/rfqs" },
  { label: "Documents", path: "/office/documents" },
  { label: "Settings", path: "/office/settings" }
];

export default function OfficeLayout({
  children,
  title,
  label = "Dashboard"
}: OfficeLayoutProps) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
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
          {officeLinks.map((link) => {
            const fullPath = `/${locale}${link.path}`;
            const isActive = pathname === fullPath;

            return (
              <button
                key={link.path}
                className={isActive ? "office-nav-active" : ""}
                onClick={() => router.push(fullPath)}
              >
                {link.label}
              </button>
            );
          })}
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
            <p className="office-label">{label}</p>
            <h1>{title}</h1>
          </div>

          <div className="office-header-user">
            <span>{user.name}</span>
            <small>{user.email}</small>
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}
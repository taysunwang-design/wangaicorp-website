"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function PortalPage() {
  const t = useTranslations("Portal");

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>

          <h1 className="platform-title">{t("title")}</h1>

          <p className="platform-description">{t("description")}</p>

          <div className="platform-status">
            <span className="status-dot"></span>
            {t("status")}
          </div>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>{t("cards.companies.title")}</h3>
            <p>{t("cards.companies.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.contacts.title")}</h3>
            <p>{t("cards.contacts.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.projects.title")}</h3>
            <p>{t("cards.projects.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.rfqs.title")}</h3>
            <p>{t("cards.rfqs.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.resources.title")}</h3>
            <p>{t("cards.resources.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.ai.title")}</h3>
            <p>{t("cards.ai.text")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
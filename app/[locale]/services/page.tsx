"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  const t = useTranslations("Services");

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>

          <h1 className="platform-title">{t("title")}</h1>

          <p className="platform-description">{t("description")}</p>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>{t("cards.coordination.title")}</h3>
            <p>{t("cards.coordination.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.sourcing.title")}</h3>
            <p>{t("cards.sourcing.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.infrastructure.title")}</h3>
            <p>{t("cards.infrastructure.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.communication.title")}</h3>
            <p>{t("cards.communication.text")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
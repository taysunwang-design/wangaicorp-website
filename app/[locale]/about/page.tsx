"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const t = useTranslations("About");

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
            <h3>{t("cards.transparent.title")}</h3>
            <p>{t("cards.transparent.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.markets.title")}</h3>
            <p>{t("cards.markets.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.lean.title")}</h3>
            <p>{t("cards.lean.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.digital.title")}</h3>
            <p>{t("cards.digital.text")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
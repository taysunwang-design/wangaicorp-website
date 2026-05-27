"use client";

import { useTranslations, useLocale } from "next-intl";
import Navbar from "../components/Navbar";

export default function PlatformPage() {
  const t = useTranslations("Platform");
  const locale = useLocale();

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>

          <h1 className="platform-title">{t("title")}</h1>

          <p className="platform-description">
            {t("description")}
          </p>

          <div className="platform-status">
            <span className="status-dot"></span>
            {t("status")}
          </div>

          <div className="home-actions" style={{ marginTop: "40px" }}>
            <a
              href={`/${locale}/contact`}
              className="primary-button"
            >
              {t("request")}
            </a>

            <a
              href={`/${locale}`}
              className="secondary-button"
            >
              {t("return")}
            </a>
          </div>
        </section>

        <section className="platform-grid">
          <div className="platform-card">
            <h3>{t("cards.translation.title")}</h3>
            <p>{t("cards.translation.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.crm.title")}</h3>
            <p>{t("cards.crm.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.rfq.title")}</h3>
            <p>{t("cards.rfq.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.supplier.title")}</h3>
            <p>{t("cards.supplier.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.portal.title")}</h3>
            <p>{t("cards.portal.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.project.title")}</h3>
            <p>{t("cards.project.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.documents.title")}</h3>
            <p>{t("cards.documents.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("cards.global.title")}</h3>
            <p>{t("cards.global.text")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
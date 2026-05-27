"use client";

import { useTranslations, useLocale } from "next-intl";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">
            {t("label")}
          </p>

          <h1 className="platform-title">
            {t("title")}
          </h1>

          <p className="platform-description">
            {t("description")}
          </p>

          <div className="platform-status">
            <span className="status-dot"></span>
            {t("status")}
          </div>

          <div
            className="home-actions"
            style={{ marginTop: "40px" }}
          >
            <a
              href={`/${locale}`}
              className="primary-button"
            >
              {t("home")}
            </a>

            <a
              href={`/${locale}/platform`}
              className="secondary-button"
            >
              {t("platform")}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
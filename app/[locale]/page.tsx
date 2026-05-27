"use client";

import { useTranslations, useLocale } from "next-intl";
import Navbar from "./components/Navbar";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <>
      <Navbar />

      <main className="home-page">
        <section className="home-hero">
          <img src="/logo11.png" alt="WANG CORP." className="home-logo" />

          <h1 className="home-title">
            {t("title1")}
            <br />
            {t("title2")}
          </h1>

          <p className="home-description">{t("description")}</p>

          <div className="home-actions">
            <a href={`/${locale}/platform`} className="primary-button">
              {t("platform")}
            </a>

            <a href={`/${locale}/contact`} className="secondary-button">
              {t("contact")}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
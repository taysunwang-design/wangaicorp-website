"use client";

import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const nav = useTranslations("Nav");

  const switchLanguage = (newLocale: string) => {
    window.location.href = `/${newLocale}`;
  };

  return (
    <>
      <nav className="navbar">
        <a href={`/${locale}`} className="logo-text">
          WANG CORP.
        </a>

        <div className="nav-links">
          <a href={`/${locale}`}>{nav("home")}</a>
          <a href={`/${locale}/about`}>{nav("about")}</a>
          <a href={`/${locale}/services`}>{nav("services")}</a>
          <a href={`/${locale}/platform`}>{nav("platform")}</a>
          <a href={`/${locale}/contact`}>{nav("contact")}</a>

          <select
            className="language-selector"
            value={locale}
            onChange={(e) => switchLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </nav>

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
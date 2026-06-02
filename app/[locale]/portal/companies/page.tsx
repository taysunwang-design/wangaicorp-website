"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Navbar from "../../components/Navbar";

const companies = [
  {
    name: "QINYE",
    slug: "qinye",
    country: "China",
    sector: "Heavy Industry Equipment",
    status: "Strategic partner",
    access: "premium"
  },
  {
    name: "Taier",
    slug: "taier",
    country: "China",
    sector: "Metallurgical Equipment",
    status: "Industrial partner",
    access: "professional"
  },
  {
    name: "Beijing Wattman",
    slug: "beijing-wattman",
    country: "China",
    sector: "Industrial Robotics",
    status: "Technology partner",
    access: "premium"
  },
  {
    name: "thyssenkrupp Steel",
    slug: "thyssenkrupp-steel",
    country: "Germany",
    sector: "Steel Production",
    status: "Client / target account",
    access: "internal"
  },
  {
    name: "Erdemir",
    slug: "erdemir",
    country: "Türkiye",
    sector: "Steel Production",
    status: "Client / target account",
    access: "internal"
  },
  {
    name: "Asil Çelik",
    slug: "asil-celik",
    country: "Türkiye",
    sector: "Special Steel",
    status: "Client / target account",
    access: "internal"
  }
];

export default function CompaniesPage() {
  const t = useTranslations("Companies");
  const locale = useLocale();
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((company) => {
    const searchText = `${company.name} ${company.country} ${company.sector} ${company.status} ${company.access}`.toLowerCase();
    return searchText.includes(search.toLowerCase());
  });

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>
          <h1 className="platform-title">{t("title")}</h1>
          <p className="platform-description">{t("description")}</p>

          <div className="portal-search-wrap">
            <input
              className="portal-search"
              type="text"
              placeholder={t("search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        <section className="platform-grid">
          {filteredCompanies.map((company) => (
            <a
              href={`/${locale}/portal/companies/${company.slug}`}
              className="platform-card company-card-link"
              key={company.name}
            >
              <div className="card-header-row">
                <h3>{company.name}</h3>

                <span className={`access-badge ${company.access}`}>
                  {t(`access.${company.access}`)}
                </span>
              </div>

              <p>
                <strong>{t("country")}:</strong> {company.country}
              </p>

              <p>
                <strong>{t("sector")}:</strong> {company.sector}
              </p>

              <p>
                <strong>{t("status")}:</strong> {company.status}
              </p>

              <div className="locked-note">
                {company.access === "internal"
                  ? t("internalNote")
                  : t("subscriptionNote")}
              </div>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
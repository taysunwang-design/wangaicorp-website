import Navbar from "../../components/Navbar";
import { getTranslations } from "next-intl/server";

const modules = [
  "investmentWatch",
  "procurementSignals",
  "chinaIntelligence",
  "turkiyeIntelligence",
  "supplierWatch",
  "opportunityRadar",
];

export default async function IntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Intelligence",
  });

  return (
    <>
      <Navbar />

      <main className="platform-page">
        <section className="platform-hero">
          <p className="platform-label">{t("label")}</p>

          <h1 className="platform-title">{t("title")}</h1>

          <p className="platform-description">{t("description")}</p>

          <div className="platform-status">
            <span></span>
            {t("status")}
          </div>
        </section>

        <section className="platform-grid">
          {modules.map((module) => (
            <div className="platform-card" key={module}>
              <h3>{t(`modules.${module}.title`)}</h3>
              <p>{t(`modules.${module}.text`)}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
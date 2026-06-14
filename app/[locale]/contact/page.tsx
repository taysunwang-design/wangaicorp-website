import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const t = useTranslations("Contact");

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
          <div className="platform-card">
            <h3>{t("generalInquiry.title")}</h3>

            <p>{t("generalInquiry.text")}</p>

            <p>
              <strong>{t("generalInquiry.emailLabel")}:</strong>{" "}
              <a href="mailto:info@wangaicorp.com">
                info@wangaicorp.com
              </a>
            </p>
          </div>

          <div className="platform-card">
            <h3>{t("website.title")}</h3>

            <p>
              <strong>{t("website.webLabel")}:</strong>{" "}
              <a
                href="https://www.wangaicorp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.wangaicorp.com
              </a>
            </p>
          </div>

          <div className="platform-card">
            <h3>{t("responseTime.title")}</h3>

            <p>{t("responseTime.text")}</p>
          </div>

          <div className="platform-card">
            <h3>{t("businessFocus.title")}</h3>

            <p>{t("businessFocus.coordination")}</p>
            <p>{t("businessFocus.sourcing")}</p>
            <p>{t("businessFocus.trading")}</p>
            <p>{t("businessFocus.communication")}</p>
            <p>{t("businessFocus.cooperation")}</p>
          </div>
        </section>
      </main>
    </>
  );
}
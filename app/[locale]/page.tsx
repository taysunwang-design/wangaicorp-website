"use client";

import { useTranslations } from "next-intl";
import Navbar from "./components/Navbar";

export default function Home() {
  const t = useTranslations("Home");

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
</section>
      </main>
    </>
  );
}
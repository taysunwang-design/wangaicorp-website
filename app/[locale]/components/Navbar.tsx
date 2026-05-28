"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const locale = useLocale();
  const nav = useTranslations("Nav");
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");

    segments[1] = newLocale;

    window.location.href = segments.join("/");
  };

  return (
    <nav className="navbar">
      <a href={`/${locale}`} className="logo-text">
        WANG CORP.
      </a>

      <div className="nav-links">
        <a href={`/${locale}`}>{nav("home")}</a>

        <a href={`/${locale}/about`}>
          {nav("about")}
        </a>

        <a href={`/${locale}/services`}>
          {nav("services")}
        </a>

        <a href={`/${locale}/platform`}>
          {nav("platform")}
        </a>

        <a href={`/${locale}/contact`}>
          {nav("contact")}
        </a>

        <select
          className="language-selector"
          value={locale}
          onChange={(e) =>
            switchLanguage(e.target.value)
          }
        >
          <option value="en">EN</option>
          <option value="tr">TR</option>
          <option value="zh">中文</option>
        </select>
      </div>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <a href={`/${locale}`}>
            {nav("home")}
          </a>

          <a href={`/${locale}/about`}>
            {nav("about")}
          </a>

          <a href={`/${locale}/services`}>
            {nav("services")}
          </a>

          <a href={`/${locale}/platform`}>
            {nav("platform")}
          </a>

          <a href={`/${locale}/contact`}>
            {nav("contact")}
          </a>

          <select
            className="language-selector mobile-language"
            value={locale}
            onChange={(e) =>
              switchLanguage(e.target.value)
            }
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
            <option value="zh">中文</option>
          </select>
        </div>
      )}
    </nav>
  );
}
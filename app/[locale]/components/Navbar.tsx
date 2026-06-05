"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const locale = useLocale();
  const nav = useTranslations("Nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

      <button
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href={`/${locale}`}>{nav("home")}</a>
        <a href={`/${locale}/about`}>{nav("about")}</a>
        <a href={`/${locale}/services`}>{nav("services")}</a>
        <a href={`/${locale}/platform`}>{nav("platform")}</a>
        <a href={`/${locale}/news`}>{nav("news")}</a>
        <a href={`/${locale}/contact`}>{nav("contact")}</a>

        <a href={`/${locale}/portal`} className="login-button">
          {nav("login")}
        </a>

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
  );
}
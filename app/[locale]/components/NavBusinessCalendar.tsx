"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

function getLocaleCode(locale: string) {
  if (locale.startsWith("tr")) return "tr-TR";
  if (locale.startsWith("zh")) return "zh-CN";
  return "en-US";
}

function formatDate(date: Date, locale: string) {
  const localeCode = getLocaleCode(locale);

  return new Intl.DateTimeFormat(localeCode, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export default function NavBusinessCalendar() {
  const locale = useLocale();
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());

    const timer = setInterval(() => {
      setToday(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  if (!today) return null;

  return (
    <div className="nav-mini-widget" title="Business calendar">
      <span className="nav-mini-icon">📅</span>
      <strong>{formatDate(today, locale)}</strong>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export default function NavWorldClock() {
  const locale = useLocale();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const timer = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  if (!now) return null;

  const city = locale.startsWith("tr")
    ? "Pekin"
    : locale.startsWith("zh")
    ? "北京"
    : "Beijing";

  return (
    <div className="nav-mini-widget" title="Asia/Shanghai">
      <span className="nav-mini-icon">🌍</span>
      <span className="nav-mini-label">{city}</span>
      <strong>{formatTime(now, "Asia/Shanghai")}</strong>
    </div>
  );
}
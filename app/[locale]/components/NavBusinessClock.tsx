"use client";

import { useEffect, useState } from "react";

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export default function NavBusinessClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [visitorTimeZone, setVisitorTimeZone] = useState("Local Time");

  useEffect(() => {
    setNow(new Date());

    setVisitorTimeZone(
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Local Time"
    );

    const timer = setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  if (!now) return null;

  return (
    <div className="nav-mini-widget" title={visitorTimeZone}>
      <span className="nav-mini-icon">📍</span>
      <strong>{formatTime(now, visitorTimeZone)}</strong>
    </div>
  );
}
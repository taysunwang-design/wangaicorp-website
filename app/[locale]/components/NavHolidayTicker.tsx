"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";

type Holiday = {
  date: string;
  localName: string;
  name: string;
};

type HolidayNotice = {
  countryLabel: string;
  holidayName: string;
  date: string;
};

const worldClockCountryCode = "CN";
const worldClockCountryLabels = {
  en: "China",
  tr: "Çin",
  zh: "中国",
};

const countryLabels: Record<string, { en: string; tr: string; zh: string }> = {
  CN: { en: "China", tr: "Çin", zh: "中国" },
  TR: { en: "Türkiye", tr: "Türkiye", zh: "土耳其" },
  DE: { en: "Germany", tr: "Almanya", zh: "德国" },
  IN: { en: "India", tr: "Hindistan", zh: "印度" },
  BR: { en: "Brazil", tr: "Brezilya", zh: "巴西" },
  US: { en: "USA", tr: "ABD", zh: "美国" },
  SG: { en: "Singapore", tr: "Singapur", zh: "新加坡" },
};

const timeZoneToCountryCode: Record<string, string> = {
  "Asia/Shanghai": "CN",
  "Europe/Istanbul": "TR",
  "Europe/Berlin": "DE",
  "Asia/Kolkata": "IN",
  "America/Sao_Paulo": "BR",
  "America/Chicago": "US",
  "America/New_York": "US",
  "America/Los_Angeles": "US",
  "Asia/Singapore": "SG",
};

const labels = {
  en: {
    upcoming: "Upcoming",
    noHoliday: "No upcoming business holiday",
  },
  tr: {
    upcoming: "Yaklaşan",
    noHoliday: "Yaklaşan resmi tatil yok",
  },
  zh: {
    upcoming: "即将到来",
    noHoliday: "暂无即将到来的商务假日",
  },
};

function getLang(locale: string) {
  if (locale.startsWith("tr")) return "tr";
  if (locale.startsWith("zh")) return "zh";
  return "en";
}

function getLocaleCode(locale: string) {
  if (locale.startsWith("tr")) return "tr-TR";
  if (locale.startsWith("zh")) return "zh-CN";
  return "en-US";
}

function formatShortDate(dateString: string, locale: string) {
  return new Intl.DateTimeFormat(getLocaleCode(locale), {
    month: "short",
    day: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

function getTodayISO() {
  return new Date().toISOString().slice(0, 10);
}

function getCountryLabel(countryCode: string, lang: "en" | "tr" | "zh") {
  return countryLabels[countryCode]?.[lang] || countryCode;
}

async function fetchHolidays(countryCode: string, year: number) {
  const response = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
  );

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as Holiday[];
}

export default function NavHolidayTicker() {
  const locale = useLocale();
  const lang = getLang(locale);
  const t = labels[lang];

  const [visitorCountryCode, setVisitorCountryCode] = useState("CN");
  const [notices, setNotices] = useState<HolidayNotice[]>([]);

  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const visitorTimeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Shanghai";

    setVisitorCountryCode(timeZoneToCountryCode[visitorTimeZone] || "CN");
  }, []);

  useEffect(() => {
    async function loadUpcomingHolidays() {
      const today = getTodayISO();

      const countryCodes = Array.from(
        new Set([visitorCountryCode, worldClockCountryCode])
      );

      const results = await Promise.all(
        countryCodes.map(async (countryCode) => {
          const holidays = await fetchHolidays(countryCode, year);

          const upcomingHoliday = holidays
            .filter((holiday) => holiday.date >= today)
            .sort((a, b) => a.date.localeCompare(b.date))[0];

          if (!upcomingHoliday) return null;

          return {
            countryLabel: getCountryLabel(countryCode, lang),
            holidayName:
  lang === "zh"
    ? upcomingHoliday.localName || upcomingHoliday.name
    : upcomingHoliday.name || upcomingHoliday.localName,
            date: upcomingHoliday.date,
          };
        })
      );

      setNotices(results.filter(Boolean) as HolidayNotice[]);
    }

    loadUpcomingHolidays();
  }, [visitorCountryCode, year, lang]);

  const text =
    notices.length > 0
      ? `${t.upcoming}: ${notices
          .map(
            (notice) =>
              `${notice.countryLabel} · ${notice.holidayName} · ${formatShortDate(
                notice.date,
                locale
              )}`
          )
          .join("  •  ")}`
      : t.noHoliday;

  return (
    <div className="nav-holiday-ticker" title={text}>
      <span className="nav-holiday-ticker-inner">{text}</span>
    </div>
  );
}
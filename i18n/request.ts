import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";

  let messages;

  if (locale === "zh") {
    messages = (await import("../messages/zh.json")).default;
  } else if (locale === "tr") {
    messages = (await import("../messages/tr.json")).default;
  } else {
    messages = (await import("../messages/en.json")).default;
  }

  return {
    locale,
    messages,
  };
});
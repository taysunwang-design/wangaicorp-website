import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr", "zh"],
  defaultLocale: "en",
  localeDetection: false
});

export const config = {
  matcher: ["/", "/(en|tr|zh)/:path*"]
};
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr", "zh"],
  defaultLocale: "en"
});

export const config = {
  matcher: ["/", "/(en|tr|zh)/:path*"]
};
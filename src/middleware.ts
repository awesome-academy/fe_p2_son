import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  const match = pathname.match(/^\/(en|vi)(\/.*|$)/);
  const locale = match?.[1];

  if (!locale) {
    const defaultLocale = routing.defaultLocale;
    const url = new URL(req.url);
    url.pathname = `/${defaultLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  }

  return handleI18nRouting(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

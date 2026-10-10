import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  if (pathname === "/profile" && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if ((pathname === "/sign-in" || pathname === "/sign-up") && session) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/sign-in", "/sign-up"],
};
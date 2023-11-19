import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./app/(...)constant/router";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
   // console.log(currentUser + "asdas")
  if (
    PROTECTED_ROUTES.includes(request.nextUrl.pathname) &&
    (!currentUser)
  ) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("currentUser");

    return response;
  }

  if (AUTH_ROUTES.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
}

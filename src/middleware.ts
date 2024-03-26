import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken =
    typeof window !== "undefined" && localStorage.getItem("accessToken");
  const { pathname } = request.nextUrl;

  console.log(request.headers);

  if (pathname === "/login" || pathname === "/landing") {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/home", "/landing", "/login"],
};

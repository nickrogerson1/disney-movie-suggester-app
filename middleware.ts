import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  console.log('Inside Middleware')
  console.log(`Headers: ${headers}`)
  return NextResponse.next({ headers });
}

export const config = {
  matcher: "/",
};
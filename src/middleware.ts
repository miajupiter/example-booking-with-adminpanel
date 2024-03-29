import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/login", "/register", "/"];
const protectedRoutes = ["/services", "/cart"];
const rolesRedirect: Record<string, unknown> = {
  super_admin: `${process.env.NEXT_PUBLIC_BASE_URL}/super_admin`,
  admin: `${process.env.NEXT_PUBLIC_BASE_URL}/admin`,
  tourist: `${process.env.NEXT_PUBLIC_BASE_URL}/tourist`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login`
    );
  }

  const role = token?.role as string;
  if (
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "super_admin" && pathname.startsWith("/super_admin")) ||
    (role === "tourist" && pathname.startsWith("/tourist"))
  ) {
    return NextResponse.next();
  }

  if (
    (role === "tourist" && protectedRoutes.includes(pathname)) ||
    (role === "super_admin" && protectedRoutes.includes(pathname)) ||
    (role === "admin" && protectedRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    // Handle access to the root route after logging in.
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`);
}

export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/login",
    "/register",
    //tourist routes
    "/cart",
    "/services",
    "/tourist/:page*",
    //super admin routes
    "/super_admin/:page*",
    //admin routes
    "/admin/:page*",
  ],
};

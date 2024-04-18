import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/dashboard") {
        // return NextResponse.redirect(new URL("/", request.url))
        // return NextResponse.rewrite(new URL("/", request.url))
    }
    // NextResponse.next().headers.set("custom-header", "custom-value")
}
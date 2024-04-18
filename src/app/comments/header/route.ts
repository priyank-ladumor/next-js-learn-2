import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const AuthHeader = new Headers(request.headers);
    const HeaderList = headers();
    const theme = request.cookies.get("theme")
    cookies().set("theme2", "white")
    
    console.log(cookies().get("theme2"),"theme2");
    console.log('✌️theme --->', theme);
    
    const data: { header1: string | null | undefined, header2: string | null | undefined } = {
        header1: AuthHeader.get("Authorization"),
        header2: HeaderList.get("Authorization")
    };

    // Convert data to JSON string
    const responseBody = JSON.stringify(data);

    return new Response(responseBody, { status: 200, headers: { "Content-Type": "application/json", "Set-Cookie": "theme=dark" } });
}

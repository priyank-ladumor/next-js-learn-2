import { NextRequest } from "next/server";
import { comments } from "./data";

export type CommentsType = {
    id: string,
    text: string,
    author: string,
}

export async function GET(request: NextRequest) {
    const searchParam = request.nextUrl.searchParams;
    const query = searchParam.get('query')
    if (query) {
        const filterQuery = query ? comments.filter(comment => comment.text.toString().toLowerCase().includes(query.toString().toLowerCase())) : comments;
        return new Response(JSON.stringify(filterQuery), { status: 200 })
    } else {
        return new Response(JSON.stringify(comments), { status: 200 })
    }
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComent: CommentsType = {
        id: JSON.stringify(comments.length + 1),
        text: comment.text,
        author: comment.author
    }
    comments.push(newComent);
    return new Response(JSON.stringify(newComent), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}
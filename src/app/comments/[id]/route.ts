import { CommentsType } from './../route';
import { comments } from "../data"
import { redirect } from 'next/navigation';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const commentByID = comments.find((ele) => ele.id === params.id);
    if (commentByID === undefined) {
        // If commentByID is undefined, return an appropriate response
        // return new Response("Comment not found", { status: 404 });
        redirect("/comments")
    }

    // If commentByID is not undefined, return the comment
    return new Response(JSON.stringify(commentByID));
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {

    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((ele) => ele.id === params.id);
    if (index ===  Number(-1)) {
        return new Response("Comment not found", { status: 404 });
    }
    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]));
}

export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    const index = comments.findIndex(
      (comment) => comment.id === params.id
    );
    if (index ===  Number(-1)) {
        return new Response("Comment not found", { status: 404 });
    }
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  }
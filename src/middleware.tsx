import { NextRequest, NextResponse } from "next/server";

export default function middleware(request:NextRequest){

return NextResponse.redirect(new URL("/", request.url));



}


export const config={
    matcher:["/profile"]
}
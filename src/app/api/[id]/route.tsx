import { NextRequest, NextResponse } from "next/server";
import {  Todo , todo} from "../db";

export async function GET(_request: NextRequest, {params}: {params: Promise<{id:String}>}){
const {id} = await params
const searchParams  = _request.nextUrl.searchParams;

const singleTodo = todo.find((t)=>t.id === parseInt(id));
if(!singleTodo) return NextResponse.json({success: false, message:"Can not find the todo."});


return NextResponse.json(singleTodo);
}

import { NextRequest, NextResponse } from "next/server";
import { Todo, todo } from "./db";


export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    //?query=sometext
    const query = searchParams.get("query");
    const filteredTodo = query? todo.filter((t)=>t.text.includes(query)): todo

 return   NextResponse.json(filteredTodo);
}

export async function POST(request: NextRequest){
const reqBody = await request.json();
    const {text} = reqBody;

    if(!text) return NextResponse.json({success: false, message:"Can't see any text!"})
try{
 
    const newTodo : Todo ={
id: todo.length +1,
text
    };

todo.push(newTodo);
    return NextResponse.json({success: true, message:"New todo list created"});

} catch(error: any){

    console.log(error.message);
     return NextResponse.json({success: false, message: error.message});
}
}
import { Todo } from "@/app/api/db";

export default async function SingleTodo({params}:{params: Promise<{id:number}>}){

const {id} = await params;

 await new Promise(resolve=>{
    setTimeout(()=>{ resolve("It is solve.")},2000)
})

const todo: Todo = await (await fetch(`http://localhost:3000/api/${id}`)).json();

return<>
<p>{todo.text}</p>

</>

}
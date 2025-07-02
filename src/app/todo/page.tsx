import Link from "next/link";
import { Todo } from "../api/db";
import AddTodo from "./addTodo";

export default async function TodoPage(){


const todos: Todo[] = await (await fetch("http://localhost:3000/api")).json();

    return<>

<AddTodo/>

    
 <ul>

{todos.map((todo)=>{

    return <li key={todo.id}>


    <Link key={todo.id} href={`/todo/${todo.id}`}>
    {todo.text}
    
    </Link>

    </li>
    

  
})}
 </ul>
    </>
}
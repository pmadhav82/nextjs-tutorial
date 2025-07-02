"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import usePostData from "./usePostData";
import { URL } from "url";
export default function AddTodo(){
const router = useRouter();

const [todo, setTodo] = useState<string>("");

const {data,  postData} = usePostData();

const addTodo = async (e:React.FormEvent)=>{
    e.preventDefault();

postData("http://localhost:3000/api", {text: todo})

setTodo("")
router.refresh();
}

    return<>
    <p>{data?.message}</p>
    <form>


    <input name="todo" onChange={(e)=>{setTodo(e.target.value)}}
  type="text" value={todo}
  placeholder="Enter your todo"
  className="w-50 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover: cursor-pointer"
/>
<button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add</button>

</form>
    
    </>
}
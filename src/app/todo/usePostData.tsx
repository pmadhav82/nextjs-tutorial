import { useState } from "react";
export default function usePostData(){
type TodoData = {message:String, success: boolean}
const [data, setData] = useState<TodoData | null>(null);
 
type Payload ={text:string}
const postData = async(url:any, payLoad:Payload) =>{


    try{
   const res =   await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payLoad)
        })


        const data: TodoData = await res.json();
        setData(data)
    }catch(er){

console.log(er);
    }
}

    return{
        data,
        postData,
      
    }
}
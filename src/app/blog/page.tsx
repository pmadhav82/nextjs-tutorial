import Link from "next/link"

export default async function Blog(){

await new Promise((resolve)=>{

    setTimeout(()=>{
        resolve("Promise resolve")
    },2000)
})

    return <>
    
    <h2> My Blog posts</h2>

    
    </>
}
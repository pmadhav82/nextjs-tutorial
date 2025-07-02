"use client"
export default function TodoError({error}:{error:Error}){


return<>
<h2>Something went wrong {error.message}</h2>

</>

}
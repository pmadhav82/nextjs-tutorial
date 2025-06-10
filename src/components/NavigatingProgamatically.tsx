"use client"
import { useRouter } from "next/navigation"
export function NavigatingProgrammatically(){

const router = useRouter();
    return<>
    <button onClick={()=> router.push("/profile")} className="text-blue-500 hover:cursor-pointer">View Profile</button>

    </>
}
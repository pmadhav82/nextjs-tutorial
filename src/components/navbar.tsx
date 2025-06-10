"use client"
import Link from "next/link"

import { usePathname } from "next/navigation";
export default function NavBar(){

const pathName = usePathname();


    const navLink= [
{
    name:"Home", href:"/"
},
{name: "Blog", href:"/blog"},
{name:"Products", href:"/products"}

    ]



return<>

{navLink.map(link=>{
    const isActiveLink = link.href === pathName;

    return<Link className= {isActiveLink? "font-bold ml-2": "text-blue-500 hover:text-blue-700 ml-2"} key={link.href} href={link.href}>{link.name}</Link>

})}




</>

}
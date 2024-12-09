import Link from "next/link"
export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        
        <div style={{display:"flex", justifyContent: "flex-start", gap:"2rem"}}>


<Link href="/blog/first">
  First blog
</Link>

<Link href="/blog/second">

  Second blog
</Link>

</div>
        {children}</section>
  }
import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <Link href={"/"}>Home</Link>


            <Link href="/blog">Blog</Link>

            <Link href="/products">View Products</Link>

            <Link href="/docs">Docs</Link>

            <Link href={"/profile"}>Profile</Link>
            <Link href={"/news/123?lan=English"}>News</Link>


          </nav>
        </header>

        {children}
        <footer>This is footer of the page</footer>
      </body>
    </html>
  );
}

import Link from "next/link";

type Prop = {
  params: Promise<{ newsId: string }>;
  searchParams: Promise<{ lan?: "English" | "Nepali" }>;
};

export default async function NewsPage({ params, searchParams }: Prop) {
  const { newsId } = await params;
  const { lan = "English" } = await searchParams;

  return (
    <>
      <h2>News Feed in {lan}</h2>

      <p>This is breaking news for news id {newsId}</p>

      <Link href={`/news/${newsId}?lan=Nepali`}>Read in Nepali</Link>
      <br></br>
      <Link href={`/news/${newsId}?lan=English`}>Read in English</Link>
    </>
  );
}

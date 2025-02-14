import Link from "next/link";

export default function Docs({ params }: { params: { slug: string[] } }) {
  let contain: string;

  const getURLPath = (slugArray: string[], index = 0): string => {
    if (index >= slugArray.length) return "";

    return `/${slugArray[index]}/ ${getURLPath(slugArray, index + 1)}`;
  };

  if (!params?.slug?.length) {
    contain = "This is Document page";
  } else {
    contain = `This is about: docs/${getURLPath(params.slug)}`;
  }

  return (
    <>
      <h3>{contain}</h3>
    </>
  );
}

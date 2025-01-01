import Link from "next/link";

export default function Products() {
  const productList = [
    {
      name: "product1",
      id: 1,
    },
    {
      name: "product2",
      id: 2,
    },
    {
      name: "product3",
      id: 3,
    },
    {
      name: "product4",
      id: 4,
    },
  ];

  return (
    <>
      {" "}
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "2rem" }}
      >
        {productList.map((product) => {
          return (
            <Link key={product.id} href={`/products/${product.id}`}>
              {product.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

import { Metadata } from "next";

type Prop = {
  params: Promise<{ productId: number }>;
};

export const generateMetadata = async ({ params }: Prop): Promise<Metadata> => {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
};

type Product = {
  id: number;
  detail: string;
};

const productDetail = [
  {
    id: 1,
    detail: "This is the detail of product 1",
  },
  {
    id: 2,
    detail: "This is the detail of product 2",
  },
  {
    id: 3,
    detail: "This is the detail of product 3",
  },
  {
    id: 4,
    detail: "This is the detail of product 4",
  },
];

export default async function ProductDetail({ params }: Prop) {
  const { productId } = await params;

  const product = productDetail.find(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      {product ? (
        <h2>{product.detail}</h2>
      ) : (
        <h2>Product detail could not be found !</h2>
      )}
    </>
  );
}

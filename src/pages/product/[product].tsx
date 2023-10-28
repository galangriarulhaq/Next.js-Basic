import DetailProductView from "@/views/DetailProduct";
import { useRouter } from "next/router";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  return (
    <div>
      <DetailProductView product={product} />
    </div>
  );
};

export default DetailProductPage;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}

// Server site rendering
import ProductView from "@/views/Product";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProductServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductServer;

// dipanggil setiap melakukan request
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}

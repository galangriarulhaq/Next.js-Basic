import styles from "./DetailProduct.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const DetailProductView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </>
  );
};

export default DetailProductView;

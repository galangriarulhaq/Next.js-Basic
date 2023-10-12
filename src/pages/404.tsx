import styles from "@/styles/404.module.scss";

const CustomError = () => {
  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <h1>Halaman Tidak di temukan!</h1>
    </div>
  );
};

export default CustomError;

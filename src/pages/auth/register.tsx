import Link from "next/link";
import styles from "./Login.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.login}>
      <h1>Register Pages</h1>
      <br />
      <button>Register</button>
      <br />
      <p>
        Apakah sudah punya akun ? Login <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

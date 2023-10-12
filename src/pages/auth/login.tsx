import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/");
  };

  return (
    <div className={styles.login}>
      <h1>Login Pages</h1>
      <br />
      <button onClick={handlerLogin}>Login</button>
      <br />
      <p>
        Apakah sudah punya akun ? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;

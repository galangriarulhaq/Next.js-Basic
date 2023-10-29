import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div>{data && data.user.fullname}</div>
      {data ? (
        <button className={styles.button} onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <button className={styles.button} onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Pages</h1>
      <br />
      <p>
        Apakah sudah punya akun ? Login <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;

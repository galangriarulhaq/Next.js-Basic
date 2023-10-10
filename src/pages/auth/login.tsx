import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Pages</h1>
      <br />
      <p>
        Apakah sudah punya akun ? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;

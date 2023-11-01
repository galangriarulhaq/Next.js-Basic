import { type } from "os";
import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
